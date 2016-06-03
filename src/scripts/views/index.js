var indexTpl=require('../tpl/index.string');
var IScroll=require('../lib/iscroll-probe.js');
console.log(IScroll);
window.onload=function(){
	var iscroll=new IScroll('index-scroll');
}
document.body.innerHTML+=indexTpl;
