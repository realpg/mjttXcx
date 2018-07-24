// pages/search/search.js
var vm = this
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityNavigation: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    vm = this
    var screenHeight = getApp().globalData.screenHeight
    var place = screenHeight + 100 //导航栏高度
    var allHeight = place + 105 //顶部全部高度
    vm.setData({
      pageTopHeight: screenHeight,
      place: place,
      allHeight: allHeight
    })
  },

  //返回
  back: function() {
    util.jumpPage(4, 1)
  },

  //切换导航
  switchNavigation: function(e) {
    var cityNavigation = e.target.id
    console.log("切换导航" + JSON.stringify(e))
    vm.setData({
      cityNavigation: cityNavigation,
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})