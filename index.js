window.defipaySdk = {};

window.defipaySdk.init = (params) => {
  if (!params.el) {
    throw "没有初始化的DOM ID";
  }
  let dom = getDom(params.el);
  console.log(dom, params);
  dom.style.cssText = "background: #83ADEB; width: 500px; height: 700px;padding: 10px 20px";
  dom.innerText = "初始化中........"
};

function getDom(id) {
  return document.getElementById(id);
}
