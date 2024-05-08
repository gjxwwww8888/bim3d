var _gid = 1;
const _pi = 180 / Math.PI;
const _pi2 = Math.PI / 180;

/**
 * <code>Utils</code> 是工具类。
 */

export class Utils {
    /**
     * 角度转弧度。
     * @param	angle 角度值。
     * @return	返回弧度值。
     */
    static toRadian(angle) {
        return angle * _pi2;
    }

    /**
     * 弧度转换为角度。
     * @param	radian 弧度值。
     * @return	返回角度值。
     */
    static toAngle(radian) {
        return radian * _pi;
    }

    /**获取一个全局唯一ID。*/
    static getGID() {
        return _gid++;
    }

    /**
     * @private
     * 清空source数组，复制array数组的值。
     * @param	source 需要赋值的数组。
     * @param	array 新的数组值。
     * @return 	复制后的数据 source 。
     */
    static copyArray(source, array) {
        source || (source = []);
        if (!array) return source;
        source.length = array.length;
        var len = array.length;
        for (let i = 0; i < len; i++) {
            source[i] = array[i];
        }
        return source;
    }

    /**
     * 解析一个字符串，并返回一个整数。和JS原生的parseInt不同：如果str为空或者非数字，原生返回NaN，这里返回0。
     * @param	str		要被解析的字符串。
     * @param	radix	表示要解析的数字的基数。默认值为0，表示10进制，其他值介于 2 ~ 36 之间。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数不在上述范围内，则此方法返回 0。
     * @return	返回解析后的数字。
     */
    static parseInt(str, radix = 0) {
        var result = parseInt(str, radix);
        if (isNaN(result)) return 0;
        return result;
    }
    
}

