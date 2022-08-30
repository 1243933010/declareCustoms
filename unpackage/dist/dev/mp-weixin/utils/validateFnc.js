"use strict";
var common_vendor = require("../common/vendor.js");
let valiDateFnc = (data) => {
  let bool = true;
  let errInfo = {
    entry: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",
    regErr: "\u683C\u5F0F\u9519\u8BEF"
  };
  let obj = {
    adrdetail: "\u8BE6\u7EC6\u5730\u5740",
    province: "\u7701\u5E02\u533A",
    expressCompany: "\u5FEB\u9012\u516C\u53F8",
    mailName: "\u5BC4\u4EF6\u4EBA\u540D\u79F0",
    mailTelephone: "\u5BC4\u4EF6\u4EBA\u7535\u8BDD",
    telephone: "\u6536\u8D27\u4EBA\u624B\u673A\u53F7\u7801",
    userName: "\u6536\u8D27\u4EBA\u540D\u79F0"
  };
  let phoneRegArr = ["mailTelephone", "telephone"];
  var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  let keyArr = Object.keys(data);
  let valArr = Object.values(data);
  console.log(keyArr, valArr);
  for (let i = 0; i < keyArr.length; i++) {
    if (!valArr[i] && obj[keyArr[i]]) {
      console.log(valArr[i]);
      bool = false;
      common_vendor.index.showToast({
        icon: "none",
        title: ` ${obj[keyArr[i]]}${errInfo.entry}`
      });
      return bool;
    }
    if (valArr[i] && obj[keyArr[i]] && phoneRegArr.includes(keyArr[i])) {
      if (!reg_tel.test(valArr[i])) {
        bool = false;
        common_vendor.index.showToast({
          icon: "none",
          title: `${obj[keyArr[i]]}${errInfo.regErr}`
        });
        return bool;
      }
    }
  }
  return bool;
};
exports.valiDateFnc = valiDateFnc;
