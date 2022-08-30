"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
var pages_order_utilObj = require("./utilObj.js");
require("../../utils/requestObj.js");
if (!Array) {
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  _easycom_uni_steps2();
}
const _easycom_uni_steps = () => "../../uni_modules/uni-steps/components/uni-steps/uni-steps.js";
if (!Math) {
  _easycom_uni_steps();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "logisticsDetail",
  setup(__props) {
    common_vendor.ref({});
    let addressStep = common_vendor.ref({
      arr: [],
      active: 100
    });
    let optionObj = common_vendor.ref({});
    common_vendor.ref({});
    const copyText = (str) => {
      common_vendor.index.setClipboardData({
        data: str,
        success: function() {
          common_vendor.index.showToast({
            icon: "none",
            title: "\u590D\u5236\u6210\u529F"
          });
        }
      });
    };
    let shunfengFnc = (data) => {
      if (data && data.routeResps && data.routeResps.length && data.routeResps[0].routes) {
        let arr = data.routeResps[0].routes;
        arr.forEach((val) => addressStep.value.arr.push({ title: val.remark, desc: val.acceptTime }));
      }
    };
    let youzhengFnc = (data) => {
      console.log(data, "---");
      if (data) {
        data.forEach((val) => addressStep.value.arr.push({ title: val.opDesc, desc: val.opTime }));
      }
    };
    common_vendor.onLoad(async (options) => {
      console.log(options.reqObj);
      optionObj.value = JSON.parse(options.reqObj);
      let reqObj = JSON.parse(options.reqObj);
      let res = await utils_request.$request("getRoutes", reqObj, 1);
      console.log(res);
      if (res.data.code === 0) {
        let dataObj = JSON.parse(res.data.data);
        if (optionObj.value.expressCompany === "LC001") {
          shunfengFnc(dataObj);
        } else if (optionObj.value.expressCompany === "LC002") {
          youzhengFnc(dataObj);
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
        a: common_vendor.t(common_vendor.unref(pages_order_utilObj.arrayList)[common_vendor.unref(optionObj).expressCompany]),
        b: common_vendor.t(common_vendor.unref(optionObj).expressNo),
        c: common_vendor.o(($event) => copyText(common_vendor.unref(optionObj).expressNo)),
        d: common_vendor.p({
          options: common_vendor.unref(pages_order_utilObj.stepsObj),
          active: +common_vendor.unref(optionObj).status,
          ["active-color"]: "#22AC38"
        }),
        e: common_vendor.p({
          options: common_vendor.unref(addressStep).arr,
          active: common_vendor.unref(addressStep).active,
          direction: "column",
          ["active-color"]: "#22AC38"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6211\u7684\u6587\u6863/HBuilderProjects/declareCustoms/pages/order/logisticsDetail.nvue"]]);
wx.createPage(MiniProgramPage);
