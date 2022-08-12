window.defipaySdk = {};

window.defipaySdk.init = (params) => {
  if (!params.el) {
    throw "没有初始化的DOM ID";
  }
  let dom = getDom(params.el);
  console.log('%c%s', 'color: #00a3cc', "初始化参数", params);
  dom.style.cssText = "background: #83ADEB; width: 500px; border: 0;";
  dom.innerText = ""
  var iframe = document.createElement('iframe'); 
  iframe.width = "100%"
  iframe.height = "800px"
  iframe.src="https://test.defipay.biz/customer/#/fiat/order/Y10LTFT5"; 
  dom.appendChild(iframe);
};

function getDom(id) {
  return document.getElementById(id);
}
