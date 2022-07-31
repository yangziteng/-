Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:0.625,  // 初始化滑块位置
    secIcons:[//金刚区的图标
      {imgUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibDQFks5pOuShJWibDXwwdedywTShX9R6ylXkNHUuUUFgGG2P1HmgNhAvOq1ZAiaps7zTGfQd47MpQ/132',name:"名字"},
      {imgUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibDQFks5pOuShJWibDXwwdedywTShX9R6ylXkNHUuUUFgGG2P1HmgNhAvOq1ZAiaps7zTGfQd47MpQ/132',name:"名字"},
      {imgUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibDQFks5pOuShJWibDXwwdedywTShX9R6ylXkNHUuUUFgGG2P1HmgNhAvOq1ZAiaps7zTGfQd47MpQ/132',name:"名字"},
      {imgUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJibDQFks5pOuShJWibDXwwdedywTShX9R6ylXkNHUuUUFgGG2P1HmgNhAvOq1ZAiaps7zTGfQd47MpQ/132',name:"名字"},

    ],
    // 广告轮播图
    image:[
      {url:'https://636c-cloud1-6gtqj1v4873bad50-1307814679.tcb.qcloud.la/tomato_daka/%E5%9B%BE%E7%89%87/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202204022334162.jpg?sign=0a342961ab9b7aac6afa71dbebc9b00b&t=1649058814'},
      {url:'https://636c-cloud1-6gtqj1v4873bad50-1307814679.tcb.qcloud.la/tomato_daka/%E5%9B%BE%E7%89%87/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202204022334162.jpg?sign=0a342961ab9b7aac6afa71dbebc9b00b&t=1649058814'},
      {url:'https://636c-cloud1-6gtqj1v4873bad50-1307814679.tcb.qcloud.la/tomato_daka/%E5%9B%BE%E7%89%87/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_202204022334162.jpg?sign=0a342961ab9b7aac6afa71dbebc9b00b&t=1649058814'}
    ],

    tabArr:[
      {name:'推荐',data:[
        {
          title:'重庆/5天/12月02日从福建出发',
          text:'队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。',
          tapArr:['打卡','拍照','好说话','社牛'],
          touxiangUrl:'./image/touxiang.png',
          name:'用户名',
          sex:'男',
          time:'10分钟前'
        },
        {
          title:'重庆/5天/12月02日从福建出发',
          text:'队友男女不限，有2人，预计组队4人，最好同一个地方去也可以到了福建福州市集合。',
          tapArr:['打卡','拍照','好说话','社牛'],
          touxiangUrl:'./image/touxiang.png',
          name:'用户名',
          sex:'女',
          time:'昨天 10:40'
        }
      ]},
      {name:'最新',data:[
        {
          title:'重庆/5天/12月02日从福建出发',
          text:'队友男女不限，有2人，预计组队4人，最好同一个地方去也可以到了福建福州市集合。',
          tapArr:['打卡','拍照','好说话','社牛'],
          touxiangUrl:'./image/touxiang.png',
          name:'用户名',
          sex:'女',
          time:'昨天 10:40'
        }
      ]},
      {name:'企业',data:[
        {
          title:'重庆/5天/12月02日从福建出发',
          text:'队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。',
          tapArr:['打卡','拍照','好说话','社牛'],
          touxiangUrl:'./image/touxiang.png',
          name:'用户名',
          sex:'男',
          time:'10分钟前'
        },
      ]},
      {name:'急需',data:[
        {
          title:'重庆/5天/12月02日从福建出发',
          text:'队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。队友男女不限，有2人，预计组队4人，最好同一个地方去，也可以到了福建福州市集合。',
          tapArr:['打卡','拍照','好说话','社牛'],
          touxiangUrl:'./image/touxiang.png',
          name:'用户名',
          sex:'男',
          time:'10分钟前'
        },
      ]},
    ],

    natArr:[
      {imageUrl:'./image/02.png',name:'摄影专区'},
      {imageUrl:'./image/03.png',name:'跑腿专区'},
      {imageUrl:'./image/05.png',name:'兼职专区'},
      {imageUrl:'./image/04.png',name:'更多任务'},
    ]
    },
      //金刚区滑动事件,这里主要实现的是进度条跟随导航滚动
    scroll(event){
      let scrollLeft = event.detail.scrollLeft + 375;
      let scrllWidth = event.detail.scrollWidth;
      let left;
      if(scrollLeft < 395){
        left = `65.625%`
      }else{
        left = `${(scrollLeft) / scrllWidth * 100}%`
      }
      this.setData({
        left, //模拟滑块滑动 根据css设置 距离左边的百分比
      })
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