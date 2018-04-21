Page({
  data: {
    name: 'pact',
    pactData: {
      id: 212699,
      info: [
        {
          "sch": "北京西坝河",
          "pay": "￥1234.00",
          "date": "2017-01-01"
        }
      ]
    }
  },
  detail:function(){
    wx.navigateTo({
      url: '../invoice/invoice',
    })
  }
})