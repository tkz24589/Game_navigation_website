window.onload=function(){	
	//顶部的焦点图切换
	function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange, 3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var j=0;j<pic_li.length;j++){
					if(button_li[j]==this){
						current_index=j;
						button_li[j].className="current";
						pic_li[j].className="current";
					}else{
						pic_li[j].className="pic";
						button_li[j].className="but";
					}
				}
			}
			button_li[i].onmouseout=function(){
				timer=setInterval(autoChange,3000);			
			}
		}
		function autoChange(){
			++current_index;
			if (current_index==button_li.length) {
				current_index=0;
			}
			for(var i=0;i<button_li.length;i++){
				if(i==current_index){
					button_li[i].className="current";
					pic_li[i].className="current";
				}else{
					button_li[i].className="but";
					pic_li[i].className="pic";
				}
			}
		}
	}
	hotChange();
	function school(){
		var speed=50;
		var imgbox=document.getElementById("imgbox");
		imgbox.innerHTML+=imgbox.innerHTML; //复制一个<span>,用于无缝滚动
		var span=imgbox.getElementsByTagName("span");//获取两个<span>元素
		var timer1=window.setInterval(marquee,speed); //启动定时器，调用滚动函数
		imgbox.onmouseover=function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout=function(){
			timer1=window.setInterval(marquee,speed);
		};
		function marquee(){
			if(imgbox.scrollLeft>span[0].offsetWidth){  //当第一个<span>被完全卷出时
			     imgbox.scrollLeft=0;                    //将被卷起的内容置为0
			}else{
				++imgbox.scrollLeft;
			}
		}
	}
	school();
}
function change(myid,mode,cg){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){//显示下拉菜单
		//设置下拉菜单所在div的边框
		document.getElementById(myid).style.borderTop="none";
		document.getElementById(cg).childNodes[0].style.transform="rotate(180deg)";
		document.getElementById(cg).childNodes[0].style.top="18px";
		//设置鼠标划过的li的边框及背景颜色
	}
	else{
		//当不显示下拉列表时，鼠标划过的li的边框及背景颜色
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
		document.getElementById(cg).childNodes[0].style.transform="rotate(0deg)";
		document.getElementById(cg).childNodes[0].style.top="11px";
	}	
}
function exchange(j) {
	var ul = document.getElementById('game_manu').getElementsByTagName('ul');
	var dd = document.getElementById('game_manu').getElementsByTagName('dd');
	for (var i = 0; i < ul.length; i++) {
		if(i != j) {
			ul[i].style.display = "none";
			dd[i].className = "none";
		}
		else {
			ul[i].style.display = "block";
			dd[i].className = "nowshow";
		}
	}

}
function changeT(index){
	var li = document.getElementsByClassName('tjnewsbtn')[0].getElementsByTagName('li');
	var ul = $('ul.tjnewsContent');
	for (var i = 0; i < li.length; i++) {
		if(i==index){
			ul[i].style.display = "block";
			li[i].className = "cur";
		}
		else{
			ul[i].style.display = "none";
			li[i].className = "";
		}
		}
}