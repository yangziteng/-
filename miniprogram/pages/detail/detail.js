// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    last_time: '一天',
    first_time: '2022/5/27 15:00',
    thData: [
      {
        label: '任务名称：',
        value: '摄影跟拍',
        src: ''
      },
      {
        label: '任务持续时长：',
        value: '半天',
        src: 'images/time1.png'
      },
      {
        label: '任务开始时间：',
        value: '2022/5/27 15:00',
        src: 'images/time2.png'
      },
      {
        label: '任务悬赏金额：',
        value: '115元',
        src: 'images/money.png'
      },
      {
        label: '任务专区：',
        value: '摄影专区',
        src: ''
      },
      {
        label: '备注：',
        value: '',
        src: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  bindShowMsg() {
    this.setData({
     select:!this.data.select
    })
  },
  mySelect(e) {
   var name = e.currentTarget.dataset.name
   this.setData({
    last_time: name,
    select: false
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})