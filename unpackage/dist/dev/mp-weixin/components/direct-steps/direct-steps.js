"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "UniSteps",
  props: {
    direction: {
      type: String,
      default: "row"
    },
    activeColor: {
      type: String,
      default: "#2979FF"
    },
    deactiveColor: {
      type: String,
      default: "#B7BDC6"
    },
    active: {
      type: Number,
      default: 0
    },
    activeIcon: {
      type: String,
      default: "checkbox-filled"
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.options, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index === $props.active ? $props.activeColor : $props.deactiveColor,
        c: index
      };
    }),
    b: common_vendor.n($props.direction === "column" ? "uni-steps__column-title" : "uni-steps__row-title"),
    c: common_vendor.n($props.direction === "column" ? "uni-steps__column-text" : "uni-steps__row-text"),
    d: common_vendor.n($props.direction === "column" ? "uni-steps__column-text-container" : "uni-steps__row-text-container"),
    e: common_vendor.f($props.options, (item, index, i0) => {
      return common_vendor.e({
        a: index <= $props.active && index !== 0 ? $props.activeColor : index === 0 ? "transparent" : $props.deactiveColor,
        b: index === $props.active
      }, index === $props.active ? {
        c: "b0cddb02-0-" + i0,
        d: common_vendor.p({
          color: $props.activeColor,
          type: $props.activeIcon,
          size: "14"
        }),
        e: common_vendor.n($props.direction === "column" ? "uni-steps__column-check" : "uni-steps__row-check")
      } : {
        f: common_vendor.n($props.direction === "column" ? "uni-steps__column-circle" : "uni-steps__row-circle"),
        g: index < $props.active ? $props.activeColor : $props.deactiveColor
      }, {
        h: index < $props.active && index !== $props.options.length - 1 ? $props.activeColor : index === $props.options.length - 1 ? "transparent" : $props.deactiveColor,
        i: index
      });
    }),
    f: common_vendor.n($props.direction === "column" ? "uni-steps__column-line" : "uni-steps__row-line"),
    g: common_vendor.n($props.direction === "column" ? "uni-steps__column-line--before" : "uni-steps__row-line--before"),
    h: common_vendor.n($props.direction === "column" ? "uni-steps__column-line" : "uni-steps__row-line"),
    i: common_vendor.n($props.direction === "column" ? "uni-steps__column-line--after" : "uni-steps__row-line--after"),
    j: common_vendor.n($props.direction === "column" ? "uni-steps__column-line-item" : "uni-steps__row-line-item"),
    k: common_vendor.n($props.direction === "column" ? "uni-steps__column-container" : "uni-steps__row-container"),
    l: common_vendor.f($props.options, (item, index, i0) => {
      return {
        a: common_vendor.t(item.desc),
        b: index
      };
    }),
    m: $props.deactiveColor,
    n: common_vendor.n($props.direction === "column" ? "uni-steps__column-desc" : "uni-steps__row-desc"),
    o: common_vendor.n($props.direction === "column" ? "uni-steps__column-text" : "uni-steps__row-text"),
    p: common_vendor.n($props.direction === "column" ? "uni-steps__column-text-container" : "uni-steps__row-text-container"),
    q: common_vendor.n($props.direction === "column" ? "uni-steps__column" : "uni-steps__row")
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u6211\u7684\u6587\u6863/HBuilderProjects/declareCustoms/components/direct-steps/direct-steps.vue"]]);
wx.createComponent(Component);
