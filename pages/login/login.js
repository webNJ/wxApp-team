//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  tohome(e){
    //console.log(e.user.value)
    // wx.setStorageSync({ 
    //   user: e.user.value,
    //   psd: e.psd.value
    // })
    
    wx.navigateTo({
      url:'../index/index'
    })
  }
})
