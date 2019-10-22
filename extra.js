//  微信部分API的使用

export class Tool {
  constructor() {
    //  初始化数据，因为没有需要初始化，不写
  }
  //  手机振动的效果
  zhendong() {
    wx.vibrateLong({
      success() {
        console.log('振动了一次');
      }
    })
  }
  //  播放音乐
  playMusic(src,loop) {
    //  创建音频
    let music = wx.createInnerAudioContext();
    //  音频路径
    music.src = src;
    //  设置循环播放
    music.loop = loop;
    return music;
  }
  //  获取手机信息
  getTelInfo() {
    wx.getSystemInfo({
      success(res) {
        console.log(res);
      }
    });
  }

  //  获取用户信息
  getUserInfo() {
    //  创建用户信息按钮
    const button = wx.createUserInfoButton({
      type: "text",
      text: "请授权用户信息",
      style: {
        left: 100,
        top: 500,
        width: 150,
        height: 30,
        backgroundColor: "#E0FFFF",
        borderColor: '#CAE1FF',
        borderWidth: 2,
        borderRadius: 10,
        color: "orange",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 30
      }
    });

    //  监听按钮的点击事件
    button.onTap(res=>{
      if(res.userInfo){
        //  用户授权了
        console.log(res.userInof);
        //  销毁按钮
        button.destroy();
      }
    })

  }
}