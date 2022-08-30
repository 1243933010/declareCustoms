"use strict";
var common_vendor = require("../common/vendor.js");
var utils_requestObj = require("./requestObj.js");
const $request = (requestName, params, headerType = 0) => {
  let reqObj = utils_requestObj.requestObj[requestName];
  let headerObj = [
    {
      "Content-Type": "application/json"
    },
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  ];
  let url = "http://192.168.1.130:8081";
  let reqUrl = reqObj.otherGet ? `${url}${reqObj.url}/${params}` : `${url}${reqObj.url}`;
  let data = reqObj.otherGet ? {} : params;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: reqUrl,
      method: utils_requestObj.requestObj[requestName].type,
      data,
      header: headerObj[headerType],
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.$request = $request;
