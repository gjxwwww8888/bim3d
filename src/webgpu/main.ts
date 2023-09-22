
import triangleVertWGSL from '../../shaders/triangle.vert.wgsl';
import redFragWGSL from '../../shaders/red.frag.wgsl';

export default class WebGPUExample {

    private _device:GPUDevice;
    private _context:GPUCanvasContext;

    private _pipeline:GPURenderPipeline;

    constructor() {
    }

    async SimpleInit({ canvas }) {
        const adapter = await navigator.gpu.requestAdapter();
        const device = await adapter.requestDevice();

        this._device = device;

        const context = canvas.getContext('webgpu') as GPUCanvasContext;

        this._context = context;

        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;
        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

        context.configure({
            device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
        });

        this._pipeline = device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: device.createShaderModule({
                    code: triangleVertWGSL,
                }),
                entryPoint: 'main',
            },
            fragment: {
                module: device.createShaderModule({
                    code: redFragWGSL,
                }),
                entryPoint: 'main',
                targets: [
                    {
                        format: presentationFormat,
                    },
                ],
            },
            primitive: {
                topology: 'triangle-list',
            },
        });

    }

    frame() {

        const commandEncoder = this._device.createCommandEncoder();
        const textureView = this._context.getCurrentTexture().createView();
    
        const renderPassDescriptor: GPURenderPassDescriptor = {
          colorAttachments: [
            {
              view: textureView,
              clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
              loadOp: 'clear',
              storeOp: 'store',
            },
          ],
        };
    
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(this._pipeline);
        passEncoder.draw(3);
        passEncoder.end();
    
        this._device.queue.submit([commandEncoder.finish()]);
        
      }
    
}