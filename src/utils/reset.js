(function(doc,win){
  var docEle = doc.documentElement,
  orientation = "orientationchange" in window ? "orientationchange" : "resize",
  resetFn = function(){
  	var clientWidth = docEle.clientWidth;
  	if (!clientWidth) {
  		return;
  	}
  	if(clientWidth>750){
  		docEle.style.fontSize = "100px";
  	}else{
  		docEle.style.fontSize = 100 * clientWidth/750 + "px";
  		// 100像素的元素在iphone6s上的比例，换算成在其他设备上的大小
  	}
  }
  if (!doc.addEventListener) {return}
  win.addEventListener(orientation,resetFn,false);
  doc.addEventListener("DOMContentLoaded",resetFn,false);
})(document,window);



