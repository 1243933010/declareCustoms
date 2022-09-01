"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_validateFnc = require("../../utils/validateFnc.js");
var utils_request = require("../../utils/request.js");
var utils_log = require("../../utils/log.js");
require("../../utils/requestObj.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_icons2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_icons + _easycom_uni_forms)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "expressDelivery",
  setup(__props) {
    const log = new utils_log.Logs();
    let formData = common_vendor.ref({
      adrdetail: "",
      province: "",
      city: "",
      county: "",
      expressCompany: "",
      goodsWeight: "",
      mailName: "",
      mailTelephone: "",
      receiptsNo: "",
      shopNo: "",
      telephone: "",
      userId: "",
      userName: ""
    });
    let index = common_vendor.ref(0);
    const region = common_vendor.ref(["--\u7701", "--\u5E02", "--\u533A"]);
    common_vendor.ref("\u5168\u90E8");
    const arrayList = common_vendor.ref([{
      value: "LC001",
      label: "\u987A\u4E30\u5FEB\u9012"
    }, {
      value: "LC002",
      label: "\u90AE\u653F\u5FEB\u9012"
    }]);
    common_vendor.onLoad(async (option) => {
      console.log(option);
      formData.value.receiptsNo = "123456";
      formData.value.shopNo = "123456";
      formData.value.goodsWeight = "12";
      formData.value.userId = "123456789";
      formData.value.expressCompany = arrayList.value[index.value].value;
      getOpenId();
      findReceiptsNo();
      console.log(option);
      let res = await utils_request.$request("testParams", option);
      log.info(res);
      console.log(res);
    });
    const getOpenId = () => {
      wx.login({
        success: async (res) => {
          console.log(res);
          let data = await utils_request.$request("wechatLogin", res.code, 1);
          console.log(data);
          if (data.data.code === 0) {
            formData.value.userId = data.data.data;
            common_vendor.index.setStorageSync("userId", data.data.data);
            return;
          }
          common_vendor.index.showToast({
            icon: "none",
            title: data.data.msg
          });
        }
      });
    };
    const findReceiptsNo = async () => {
      let res = await utils_request.$request("infoByReceiptsNo", formData.value.receiptsNo, 1);
      console.log(res);
      if (res.data.code === 0 && res.data.data.id) {
        common_vendor.index.showToast({
          icon: "none",
          title: "\u67E5\u8BE2\u5230\u5F53\u524D\u5C0F\u7968\u7684\u5FEB\u9012\u8BE6\u60C5,\u51C6\u5907\u8DF3\u8F6C",
          success: () => {
            setTimeout(() => {
              common_vendor.index.redirectTo({
                url: `/pages/order/detail?id=${res.data.data.id}`
              });
            }, 1e3);
          }
        });
      }
    };
    const bindRegionChange = (e) => {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e);
      region.value = e.detail.value;
    };
    const bindPickerChange = (e) => {
      console.log("picker\u53D1\u9001\u9009\u62E9\u6539\u53D8\uFF0C\u643A\u5E26\u503C\u4E3A", e.detail.value);
      index.value = e.detail.value;
      formData.value.expressCompany = arrayList.value[e.detail.value].value;
    };
    const payBtn = async () => {
      let status = utils_validateFnc.valiDateFnc(formData.value);
      if (!status)
        return false;
      let res = await utils_request.$request("addLogisticOrder", formData.value);
      console.log(res);
      if (res.data.code === 0) {
        return;
      }
      common_vendor.index.showToast({
        icon: "none",
        title: res.data.msg
      });
    };
    const goAddress = () => {
      wx.chooseAddress({
        success: (res) => {
          console.log(res);
          formData.value.telephone = res.telNumber;
          formData.value.userName = res.userName;
          formData.value.telephone = res.telNumber;
          formData.value.province = res.provinceName;
          formData.value.city = res.cityName;
          formData.value.county = res.countyName;
          region.value = [res.provinceName, res.cityName, res.countyName];
          formData.value.adrdetail = res.detailInfo;
        },
        fail: (err) => {
          console.log(err);
        }
      });
      return;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(formData).receiptsNo),
        b: common_vendor.t(common_vendor.unref(formData).shopNo),
        c: common_vendor.t(common_vendor.unref(formData).goodsWeight),
        d: common_vendor.o(($event) => common_vendor.unref(formData).mailName = $event),
        e: common_vendor.p({
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u53D1\u8D27\u4EBA\u540D\u79F0",
          modelValue: common_vendor.unref(formData).mailName
        }),
        f: common_vendor.p({
          label: "\u53D1\u8D27\u4EBA\u540D\u79F0:",
          name: "mailName"
        }),
        g: common_vendor.o(($event) => common_vendor.unref(formData).mailTelephone = $event),
        h: common_vendor.p({
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u53D1\u8D27\u4EBA\u7535\u8BDD",
          modelValue: common_vendor.unref(formData).mailTelephone
        }),
        i: common_vendor.p({
          label: "\u53D1\u8D27\u4EBA\u7535\u8BDD:",
          name: "mailTelephone"
        }),
        j: common_vendor.o(($event) => common_vendor.unref(formData).userName = $event),
        k: common_vendor.p({
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u540D\u79F0",
          modelValue: common_vendor.unref(formData).userName
        }),
        l: common_vendor.o(goAddress),
        m: common_vendor.p({
          type: "person-filled",
          size: "30"
        }),
        n: common_vendor.p({
          label: "\u6536\u8D27\u4EBA\u540D\u79F0:",
          name: "userName"
        }),
        o: common_vendor.o(($event) => common_vendor.unref(formData).telephone = $event),
        p: common_vendor.p({
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u7535\u8BDD",
          modelValue: common_vendor.unref(formData).telephone
        }),
        q: common_vendor.p({
          label: "\u6536\u8D27\u4EBA\u7535\u8BDD:",
          name: "telephone"
        }),
        r: common_vendor.t(region.value[0]),
        s: common_vendor.t(region.value[1]),
        t: common_vendor.t(region.value[2]),
        v: common_vendor.o(bindRegionChange),
        w: common_vendor.p({
          label: "\u6536\u8D27\u4EBA\u6240\u5728\u5730\u533A:",
          name: "name"
        }),
        x: common_vendor.unref(formData).adrdetail,
        y: common_vendor.o(($event) => common_vendor.unref(formData).adrdetail = $event.detail.value),
        z: common_vendor.p({
          label: "\u6536\u8D27\u4EBA\u8BE6\u7EC6\u5730\u5740:",
          name: "adrdetail"
        }),
        A: common_vendor.t(arrayList.value[common_vendor.unref(index)].label),
        B: common_vendor.o(bindPickerChange),
        C: common_vendor.unref(index),
        D: arrayList.value,
        E: common_vendor.p({
          label: "\u5FEB\u9012\u516C\u53F8:",
          name: "name"
        }),
        F: common_vendor.unref(formData).name,
        G: common_vendor.o(($event) => common_vendor.unref(formData).name = $event.detail.value),
        H: common_vendor.p({
          label: "\u5907\u6CE8:",
          name: "name"
        }),
        I: common_vendor.sr("form", "180627e4-0"),
        J: common_vendor.p({
          model: common_vendor.unref(formData),
          ["label-width"]: "120px"
        }),
        K: common_vendor.o(payBtn)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-180627e4"], ["__file", "E:/\u6211\u7684\u6587\u6863/\u684C\u9762/gitFiles/declareCustoms/pages/expressDelivery/expressDelivery.nvue"]]);
wx.createPage(MiniProgramPage);
