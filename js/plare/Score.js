import { DataStore } from "../base/DataStore.js";

//   得分
//  分数不需要画图，不需要继承  Sprite

export class Score {
    constructor() {
        this.score = 0; //  得分
        this.canAdd = true;     //  判定是否可以加分
        this.ctx = DataStore.getInstance().ctx;
        this.canvas = DataStore.getInstance().canvas;
    }
    draw() {
        this.ctx.font = "30px 黑体";
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(this.score,this.canvas.width/2,60);
    }
}