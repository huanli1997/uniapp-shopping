import config from "./config";
let baseUrl;
/*
	如果当前环境是h5,baseUrl等于config.h5Host,
	如果当前环境是小程序,baseUrl等于config.mpHost
	*/
let devtools = uni.getSystemInfoSync().platform;
if (devtools === "devtools") {
  // 小程序
  baseUrl = config.mpHost;
} else if (devtools === "ios" && process.env.NODE_ENV === "development") {
  baseUrl = config.h5Host;
}
export default function (url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    // 发送请求
    uni.request({
      url: baseUrl + url,
      data,
      method,
      success: (res) => {
        // 返回成功的数据
        resolve(res);
      },
      fail: (error) => {
        // 欺骗失败的状态，为了不想影响之后的请求
        // 返回的这个false，表示这个请求失败了
        resolve(false);
      },
    });
  });
}
