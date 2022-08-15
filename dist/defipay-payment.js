window.defipaySdk = {};

window.defipaySdk.init = (params) => {
  if (!params.el) {
    callBack(params.httpReturnFailed);
    throw "没有初始化的DOM ID";
  }
  if (!params.streamingId) {
    callBack(params.httpReturnFailed);
    throw "没有流水号";
  }
  let host = "https://defipay.biz/customer/#/order/";
  if (params.env === "test") {
    host = "https://test.defipay.biz/customer/#/order/";
  }
  let dom = getDom(params.el);
  console.log("%c%s", "color: #00a3cc", "初始化参数", params);
  dom.style.cssText = "background: #83ADEB; width: 500px; border: 0;";
  dom.innerText = "";
  var iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "1100px";
  iframe.frameborder = "0";
  iframe.src = host + params.streamingId;
  console.log("%c%s", "color: #aa00ff", iframe.src);
  dom.appendChild(iframe);
};

function getDom(id) {
  return document.getElementById(id);
}

function callBack(url) {
  var newTab = window.open("about:blank");
  newTab.location.href = url;
}
