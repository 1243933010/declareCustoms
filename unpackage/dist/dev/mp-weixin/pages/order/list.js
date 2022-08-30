"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_request = require("../../utils/request.js");
var pages_order_utilObj = require("./utilObj.js");
require("../../utils/requestObj.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props, { expose }) {
    let list = common_vendor.ref([]);
    let getList = async (data) => {
      if (data.page === 1) {
        list.value = [];
      }
      let res = await utils_request.$request("getMailOrderList", data, 1);
      console.log(res);
      if (res.data.code === 0) {
        list.value.push(...res.data.data.list);
        console.log(list.value);
        return;
      }
      common_vendor.index.showToast({
        icon: "none",
        title: res.data.msg
      });
    };
    let clickTap = (item, index) => {
      console.log(item, index);
      common_vendor.index.navigateTo({
        url: `/pages/order/detail?id=${item.id}`
      });
    };
    expose({ getList });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: common_vendor.t(common_vendor.unref(pages_order_utilObj.arrayList)[item.expressCompany]),
            b: common_vendor.t(item.userId),
            c: common_vendor.t(common_vendor.unref(pages_order_utilObj.statusObj)[item.status.toString()]),
            d: common_vendor.t(item.province),
            e: common_vendor.t(item.city),
            f: common_vendor.t(item.county),
            g: common_vendor.t(item.adrdetail),
            h: common_vendor.t(item.userName),
            i: common_vendor.t(item.telephone),
            j: common_vendor.t(item.createDate),
            k: common_vendor.o(($event) => common_vendor.unref(clickTap)(item, index))
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-439954b4"], ["__file", "E:/\u6211\u7684\u6587\u6863/HBuilderProjects/declareCustoms/pages/order/list.nvue"]]);
wx.createComponent(Component);
