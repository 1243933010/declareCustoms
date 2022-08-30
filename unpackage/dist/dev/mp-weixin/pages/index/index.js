"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
var utils_log = require("../../utils/log.js");
require("../../utils/requestObj.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const log = new utils_log.Logs();
    let fncList = common_vendor.ref([
      { title: "\u5FEB\u9012\u8BA2\u5355", click: "/pages/order/index" },
      { title: "\u5730\u5740\u7BA1\u7406", click: "" },
      { title: "\u4E34\u65F6\u5730\u5740", click: "/pages/expressDelivery/expressDelivery" }
    ]);
    let tapClick = (item) => {
      console.log(item);
      if (!item.click) {
        wx.chooseAddress({
          success: (res) => {
            console.log(res);
          },
          fail: (err) => {
            console.log(err);
          }
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: item.click
      });
    };
    common_vendor.onLoad(async (options) => {
      console.log(options);
      let res = await utils_request.$request("testParams", options);
      log.info(res);
      console.log(res);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(fncList), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => common_vendor.unref(tapClick)(item))
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ddf7c9c"], ["__file", "E:/\u6211\u7684\u6587\u6863/HBuilderProjects/declareCustoms/pages/index/index.nvue"]]);
wx.createPage(MiniProgramPage);
