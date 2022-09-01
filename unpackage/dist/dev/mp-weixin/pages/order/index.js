"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_search_bar + common_vendor.unref(list))();
}
const list = () => "./list.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const childListRef = common_vendor.ref(null);
    let getObj = common_vendor.ref({});
    let activeIndex = common_vendor.ref(0);
    let tabList = common_vendor.ref([
      { title: "\u5168\u90E8", type: "" },
      { title: "\u5F85\u53D1\u8D27", type: "1" },
      { title: "\u5F85\u7B7E\u6536", type: "2" },
      { title: "\u5DF2\u5B8C\u6210", type: "3" },
      { title: "\u5DF2\u53D6\u6D88", type: "8" }
    ]);
    let reqData = common_vendor.ref({
      limit: 15,
      page: 1,
      userId: common_vendor.index.getStorageSync("userId"),
      keyWord: "",
      status: tabList.value[activeIndex.value].type
    });
    common_vendor.onReachBottom(() => {
      console.log("\u89E6\u53D1\u6ED1\u52A8\u5230\u5E95");
      reqData.value.page++;
      childListRef.value ? childListRef.value.getList(reqData.value) : "";
    });
    let chooseActive = (item, index) => {
      reqData.value.page = 1;
      childListRef.value ? childListRef.value.getList(reqData.value) : "";
      activeIndex.value = index;
    };
    let search = () => {
      reqData.value.page = 1;
      childListRef.value ? childListRef.value.getList(reqData.value) : "";
    };
    common_vendor.onMounted(() => {
      childListRef.value ? childListRef.value.getList(reqData.value) : "";
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(search)),
        b: common_vendor.o(($event) => common_vendor.unref(reqData).keyWord = $event),
        c: common_vendor.p({
          focus: true,
          cancelButton: "none",
          modelValue: common_vendor.unref(reqData).keyWord
        }),
        d: common_vendor.f(common_vendor.unref(tabList), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => common_vendor.unref(chooseActive)(item, index)),
            c: common_vendor.n(common_vendor.unref(activeIndex) === index ? "active" : "")
          };
        }),
        e: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        f: common_vendor.sr(childListRef, "6d9c34aa-1", {
          "k": "childListRef"
        }),
        g: common_vendor.p({
          getObj: common_vendor.unref(getObj)
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u6211\u7684\u6587\u6863/\u684C\u9762/gitFiles/declareCustoms/pages/order/index.nvue"]]);
wx.createPage(MiniProgramPage);
