// pages/country/country.js
var vm = null
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    vm = this
    var screenHeight = getApp().globalData.screenHeight
    var place = getApp().globalData.place //导航栏高度
    vm.setData({
      pageTopHeight: screenHeight,
      allHeight: place,
    })
  },

  // 跳转到城市地图页面
  jumpCityMapPage: function() {
    util.jumpPage(1, "/pages/cityMap/cityMap")
  },

  // 跳转到城市页面
  jumpCityPage: function() {
    util.jumpPage(1, "/pages/city/city")
  },

  //返回
  back: function() {
    util.jumpPage(4, 1)
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