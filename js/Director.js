import { DataStore } from "./base/DataStore.js";
import { UpPipe } from "./runtime/UpPipe.js";
import { DownPipe } from "./runtime/DownPipe.js";

//  导演类，控制游戏的主流程逻辑

export class Director{
    constructor() {
        //  获取变量池
        this.dataStore = DataStore.getInstance();
    }
    //  导演只能有一个
    static getInstance(){
        if(!Director.instance){
            Director.instance = new Director();
        }
        return Director.instance;
    }
    //  创建水管的方法
    createPipes() {
        const minTop = this.dataStore.canvas.height/6;  //  最小值
        const maxTop = this.dataStore.canvas.height/2;  //  最大值
        const top = Math.random()*(maxTop-minTop)+minTop;   //  top值
        this.dataStore.get('pipes').push(new UpPipe(top));
        this.dataStore.get('pipes').push(new DownPipe(top));
    }

    //  运行
    run(){
        //  画背景图
        this.dataStore.get('background').draw();
        //  获取水管数组
        const pipes = this.dataStore.get('pipes');
        //  创建水管之前先判断
        //      是否有出界的，出界就从数组中删除
        if(pipes[0].x < 0-pipes[0].width && pipes.length == 4){
            pipes.shift();
            pipes.shift();
        }
        //  创建水管的条件：
        //      前面一组水管有没有过屏幕中央，过了创建下一组
        const CanvasWidth = this.dataStore.canvas.width;
        if(pipes[0].x < (CanvasWidth-pipes[0].width)/2 && pipes.length == 2){
            this.createPipes();   //    调用创建水管的方法
        }
        //  遍历数组,画水管
        pipes.forEach(pipe=>{
            pipe.draw();
        })

        //  画小鸟
        this.dataStore.get('birds').draw();



        //  画地板
        this.dataStore.get('land').draw();

        //  循环运行
        requestAnimationFrame(()=> this.run());
    }
}