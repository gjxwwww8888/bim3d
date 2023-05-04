
const Panel = (name: string) => {

    let min = Infinity, max = 0, round = Math.round;
    return {
        update: function (value) {
            min = Math.min(min, value);
            max = Math.max(max, value);
            return round(value) + ' ' + name + ' (' + round(min) + '-' + round(max) + ')';
        }
    };
};

export default class State {

    private beginTime: number;
    private prevTime: number;
    private frames: number;
    private info: string[];
    private fpsPanel: any;
    private msPanel: any;
    private memPanel: any;

    constructor() {

        this.beginTime = (performance || Date).now();
        this.prevTime = this.beginTime;
        this.frames = 0;
        this.info = ['', '', ''];
        this.fpsPanel = Panel('FPS');
        this.msPanel = Panel('MS');

        if (self.performance && self.performance['memory']) {
            this.memPanel = Panel('MB');
        }
    }

    begin() {
        this.beginTime = (performance || Date).now();
    }

    end() {
        this.frames++;
        let time = (performance || Date).now();
        this.info[0] = this.msPanel.update(time - this.beginTime, 200);

        if (time >= this.prevTime + 1000) {
            this.info[1] = this.fpsPanel.update((this.frames * 1000) / (time - this.prevTime), 100);
            this.prevTime = time;
            this.frames = 0;

            if (this.memPanel) {
                let memory = performance['memory'];
                this.info[2] = this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
        }
        return [time, this.info];
    }

    update() {
        let data = this.end();
        this.beginTime = Number(data[0]);
        return data[1];
    }
};



