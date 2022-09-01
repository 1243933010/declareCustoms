"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
var pages_order_utilObj = require("./utilObj.js");
require("../../utils/requestObj.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  setup(__props) {
    let shopMsg = common_vendor.ref([
      { title: "\u5C0F\u7968\u53F7", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u5546\u94FA\u7F16\u53F7", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u8D27\u7269\u91CD\u91CF", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u4E0B\u5355\u65E5\u671F", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u7269\u6D41\u516C\u53F8", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u7269\u6D41\u5355\u53F7", indexName: "test", rightBool: true, rightClick: "copy", rightText: "\u590D\u5236", rightColor: "primary" },
      { title: "\u8BA2\u5355\u72B6\u6001", indexName: "test", rightBool: true, rightClick: "cancel", rightText: "\u53D6\u6D88", rightColor: "warn" }
    ]);
    let userMsg = common_vendor.ref([
      { title: "\u53D1\u8D27\u4EBA", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u6536\u8D27\u4EBA", indexName: "test", rightBool: false, rightClick: "", rightText: "" },
      { title: "\u5730\u5740", indexName: "test", rightBool: false, rightClick: "", rightText: "" }
    ]);
    let shopMsgCopy = common_vendor.ref({});
    let userMsgCopy = common_vendor.ref({});
    let detailObj = common_vendor.ref({});
    let seeLogistics = () => {
      let reqObj = {
        expressCompany: detailObj.value.expressCompany,
        expressNo: detailObj.value.expressNo,
        status: detailObj.value.status
      };
      common_vendor.index.navigateTo({
        url: `/pages/order/logisticsDetail?reqObj=${JSON.stringify(reqObj)}`
      });
    };
    const clickFnc = (item) => {
      console.log(item);
      let obj = {
        copy: copyFnc,
        cancel: cancelFnc
      };
      obj[item.rightClick](item);
    };
    let copyFnc = (item) => {
      console.log(item);
      common_vendor.index.setClipboardData({
        data: item.indexName,
        success: () => {
          common_vendor.index.showToast({
            icon: "none",
            title: "\u590D\u5236\u6210\u529F"
          });
        }
      });
    };
    let cancelFnc = (item) => {
    };
    common_vendor.onLoad(async (options) => {
      let res = await utils_request.$request("mailInfo", options.id, 1);
      if (res.data.code === 0) {
        detailObj.value = res.data.data;
        shopMsgCopy.value = {
          "1": res.data.data.receiptsNo,
          "2": res.data.data.shopNo,
          "3": res.data.data.goodsWeight,
          "4": res.data.data.createDate,
          "5": res.data.data.expressCompany,
          "6": res.data.data.expressNo,
          "7": res.data.data.status
        };
        userMsgCopy.value = {
          "8": res.data.data.mailName,
          "9": res.data.data.userName,
          "10": `${res.data.data.province}${res.data.data.city}${res.data.data.city}${res.data.data.county}${res.data.data.adrdetail}`
        };
        for (let i = 0; i < shopMsg.value.length; i++) {
          shopMsg.value[i].indexName = Object.values(shopMsgCopy.value)[i];
          if (shopMsg.value[i].title === "\u7269\u6D41\u516C\u53F8") {
            shopMsg.value[i].indexName = pages_order_utilObj.arrayList[shopMsg.value[i].indexName];
          }
          if (shopMsg.value[i].title === "\u8BA2\u5355\u72B6\u6001") {
            Object.values(shopMsgCopy.value)[i] !== 1 ? shopMsg.value[i].rightBool = false : "";
            shopMsg.value[i].indexName = pages_order_utilObj.statusObj[shopMsg.value[i].indexName] ? pages_order_utilObj.statusObj[shopMsg.value[i].indexName] : "\u5F02\u5E38";
          }
          if (shopMsg.value[i].title === "\u7269\u6D41\u5355\u53F7") {
            Object.values(shopMsgCopy.value)[i] ? shopMsg.value[i].rightBool = true : shopMsg.value[i].rightBool = false;
          }
        }
        for (let i = 0; i < userMsg.value.length; i++) {
          userMsg.value[i].indexName = Object.values(userMsgCopy.value)[i];
        }
        return;
      }
      common_vendor.index.showToast({
        icon: "none",
        title: res.data.msg
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(shopMsg), (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.indexName),
            c: item.rightBool
          }, item.rightBool ? {
            d: common_vendor.t(item.rightText),
            e: item.rightColor,
            f: common_vendor.o(($event) => clickFnc(item))
          } : {});
        }),
        b: common_vendor.f(common_vendor.unref(userMsg), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.indexName)
          };
        }),
        c: common_vendor.o((...args) => common_vendor.unref(seeLogistics) && common_vendor.unref(seeLogistics)(...args))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a2b8835a"], ["__file", "E:/\u6211\u7684\u6587\u6863/\u684C\u9762/gitFiles/declareCustoms/pages/order/detail.nvue"]]);
wx.createPage(MiniProgramPage);
