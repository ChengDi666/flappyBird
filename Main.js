//  这是程序的主类，用于小游戏的过程中数据的初始化，以及点击的绑定

import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { DataStore } from "./js/base/DataStore.js";
import { Background } from "./js/runtime/Background.js";
import { Land } from "./js/runtime/Land.js";
import { Director } from "./js/Director.js";
import { Birds } from "./js/plare/Birds.js";

export class Main{
    constructor(){
        console.log('游戏开始了');
        //  初始化画布
        // this.canvas = document.getElementById('game');
        this.canvas = wx.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        //  初始化资源加载器
        this.loader = new ResourceLoader();
        //  初始化变量池
        this.dataStore = DataStore.getInstance();
        //  初始化导演
        this.director = Director.getInstance();

        //  加载完成后执行其他的操作
        this.loader.onloaded(map=> this.onResourceLoaded(map));
    }
    //  资源加载完成后执行，其他操作的方法
    onResourceLoaded(map){
        console.log(map);
        //  模拟化背景图
        // let bg = map.get("background"); //  那背景图片
        // this.ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,this.canvas.width,this.canvas.height);

        //  保存各种资源
        //  不使用set方法保存的原因：
        //      set 保存的数据，在游戏结束会被销毁，下面的数据
        //      游戏结束也不需要需要销毁，可以接着使用，所以用属性保存
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    //  游戏初始化,游戏中的数据，将其保存在变量池中
    init(){
        //  模拟画背景图
        // new Background().draw()
        // new Land().draw()

        this.dataStore.set('background',new Background())
                       .set('land',new Land())
                       .set('pipes',[])
                       .set('birds',new Birds);

        //  先创建一组水管
        this.director.createPipes();

        //  开始运行
        this.director.run();
    }
}