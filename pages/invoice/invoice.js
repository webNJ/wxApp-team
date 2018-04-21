//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    flag:false
  },
  onLoad: function () {
    
  },
  submit(){
    this.setData({
      flag:true
    })
  },
  //取消
  cancel(){
    this.setData({
      flag: false
    })
  },
  //确认提交
  confirm(){
    this.setData({
      flag: false
    })
    wx.navigateTo({
      url: '../index/index'
    })
  }
})
