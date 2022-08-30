"use strict";
let requestObj = {
  getMailOrderList: {
    url: "/yoursender/api/mailOrder/getMailOrderList",
    type: "GET"
  },
  addLogisticOrder: {
    url: "/yoursender/api/mailOrder/addLogisticOrder",
    type: "POST"
  },
  wechatLogin: {
    url: "/yoursender/api/wechat/login",
    type: "GET",
    otherGet: true
  },
  mailInfo: {
    url: "/yoursender/api/mailOrder/mailInfo",
    type: "GET",
    otherGet: true
  },
  getRoutes: {
    url: "/yoursender/api/mailOrder/getRoutes",
    type: "GET"
  },
  infoByReceiptsNo: {
    url: "/yoursender/api/mailOrder/infoByReceiptsNo",
    type: "GET",
    otherGet: true
  },
  testParams: {
    url: "/yoursender/api/wechat/testParams",
    type: "POST"
  }
};
exports.requestObj = requestObj;
