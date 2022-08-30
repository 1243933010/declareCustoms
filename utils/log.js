let log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;
/**
 * @Description: 日志记录(手机可以上传-编译器不能)
 * @author Chendy
 * @date 2020/5/8
 * 可上传调用方法可以打印日志到后台，在小程序管理平台可以查看打印的日志
 **/
class Logs {
  constructor() {}

  /**
   * 普通提示
   */
  info() {
    if (!log) {
      return;
    }
    log.info.apply(log, arguments);
  }

  /**
   * 警告提示
   */
  warn() {
    if (!log) {
      return;
    }
    log.warn.apply(log, arguments);
  }

  /**
   * 错误提示
   */
  error() {
    if (!log) {
      return;
    }
    log.error.apply(log, arguments);
  }

  /**
   * 组合提示
   * @param msg
   */
  setFilterMsg(msg) {
    if (!log || !log.setFilterMsg) {
      return;
    }
    if (typeof msg !== "string") {
      return;
    }
    log.setFilterMsg(msg);
  }
  addFilterMsg(msg) {
    if (!log || !log.addFilterMsg) {
      return;
    }
    if (typeof msg !== "string") {
      return;
    }
    log.addFilterMsg(msg);
  }
}
export { Logs };