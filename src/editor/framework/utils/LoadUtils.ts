

export default class LoadUtils {

    static getImageUrl(name:string) {
        return new URL(`../../../assets/image/${name}`, import.meta.url).href;
    }
}