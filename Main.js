//  这是程序的主类，用于小游戏的过程中数据的初始化，以及点击的绑定

import { ResourceLoader } from "./js/base/ResourceLoader.js";

export class Main{
    constructor(){
        console.log('游戏开始了');
        //  初始化画布
        this.cancas = document.getElementById('game');
        this.ctx = this.cancas.getContext('2d');
        //  初始化资源加载器
        this.loader = new ResourceLoader();
        //  加载完成后执行其他的操作
        this.loader.onloaded(map=> this.onResourceLoaded(map));
    }
    //  资源加载完成后执行，其他操作的方法
    onResourceLoaded(map){
        console.log(map);
    }
}