// pages/server/server.js
//获取应用实例
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
        { url: '../../images/b_03.jpg' },
        { url: '../../images/b_03.jpg' },
        { url: '../../images/b_03.jpg' },
        { url: '../../images/b_03.jpg' }
      ]
  },  
 tofuwu:function(){
   wx.redirectTo({
     url: '../personal/personal',
   })
 },
  mypage:function(){
    wx.redirectTo({
      url: '../pact/pact',
    })
  }
  
})