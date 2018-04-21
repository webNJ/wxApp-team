// pages/CheckTheInvoice/CheckTheInvoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      active:1,
      offof:false
  },
  download(){
    this.setData({active:0})
  },
  sendemail(){
    this.setData({ active: 1, offof:true })
  },
  cancel(){
    this.setData({  offof: false })

  },
  sendok(){
    this.setData({ offof: false })
    wx.navigateTo({
      url: '../makeinvoice/makeinvoice',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
})