import { Easing, Tween } from "@tweenjs/tween.js";
import { Vector3 } from "three";

export default class CameraTween {

    static animateCamera(camera:any, controls:any, oldP:Vector3, oldT:Vector3, newP:Vector3, newT:Vector3, time:number, callBack:Function) {
        if (Tween) {
            let object = {
                x1: oldP.x, // 相机x
                y1: oldP.y, // 相机y
                z1: oldP.z, // 相机z
                x2: oldT.x, // 控制点的中心点x
                y2: oldT.y, // 控制点的中心点y
                z2: oldT.z, // 控制点的中心点z
            }
            var tween = new Tween(object);
            tween.to(
                {
                    x1: newP.x,
                    y1: newP.y,
                    z1: newP.z,
                    x2: newT.x,
                    y2: newT.y,
                    z2: newT.z,
                },
                time
            );
            tween.onUpdate(
                function () {
                    camera.position.x = object.x1;
                    camera.position.y = object.y1;
                    camera.position.z = object.z1;
                    controls.target.x = object.x2;
                    controls.target.y = object.y2;
                    controls.target.z = object.z2;
                    controls.update();
                }
            );
            tween.onComplete(function () {
                controls.enabled = true;
                callBack && callBack();
            });
            tween.easing(Easing.Linear.None);
            tween.start(undefined);
        }
    }
}
