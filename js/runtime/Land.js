import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

//  地板图

export class Land extends Sprite{
    constructor() {
        //  获取地板图片
        const img = Sprite.getImage('land');
        const height = DataStore.getInstance().canvas.height;
        //  实际所在高度 = canvas的高 - 图片的高
        const h = height - img.height;
        super(img,0,0,img.width,img.height,0,h,img.width,img.height);
        this.landX = 0; //  实际的X坐标
    }

    //  重写父类 Sprite 的 draw 方法，实现地板的移动
    draw(){
        this.landX -= 2;
        //  图片是否出界，重置
        const width = DataStore.getInstance().canvas.width;
        if(this.landX< width - this.srcW){
            this.landX = 0;
        }
        //  重写父类draw
        super.draw(this.img,this.srcX,this.srcY,this.srcW,this.srcH,
            this.landX, //  实际的X坐标
            this.y,this.width,this.height);
    }
}