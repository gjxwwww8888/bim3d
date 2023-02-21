import ServiceFactoryBase from "@/editor/base/server/ServiceFactoryBase";
import MeshService from "./MeshService";


export default class MeshFactory extends ServiceFactoryBase
{
    constructor() {
        super(service.MESH_SERVICE, MeshService);
    }
}