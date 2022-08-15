// pages/myTask/myTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PeopleImg:"https://s1.ax1x.com/2022/07/17/jItKXT.jpg",
    PeopleNum:"2",
    searchValue:"搜索订单",
    //渲染订单
    navOrder:[
      {select:"我认领的",isload:false,orderArr:[
        // //第一条订单
        {
          sellerName:"跑腿专区",
          orderId:"123456789123456789",
          goodsData_name:'代拿外卖到四区',
          goodsData_time:'2022.5.8',
          goodsData_price:'0.01',
          goodsDAta_number:'1',
          isget:true,//是否有人承接
          iscomplete:true,//是否完成
          ispastdue:true,//是否过期
          total:'0.01'
        },
      ]},

      {select:"我发布的",isload:false,orderArr:[
        {
          sellerName:"摄影专区",
          orderId:"123456789123456789",
          goodsData_name:'代拿外卖到四区',
          goodsData_time:'2022.5.8',
          goodsData_price:'0.01',
          goodsDAta_number:'1',
          isget:false,//是否有人承接
          iscomplete:false,//是否完成
          ispastdue:false,//是否过期
          total:'0.01'
        },
      ]},

    ],
    active:0,//默认显示页
    isSearch:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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