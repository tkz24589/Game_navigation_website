window.onload = function(){
	function school1(){
		var speed=50;
		var imgbox=document.getElementsByClassName("imgbox")[0];
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
	function school2(){
		var speed=50;
		var imgbox=document.getElementsByClassName("imgbox")[1];
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
	function school3(){
		var speed=50;
		var imgbox=document.getElementsByClassName("imgbox")[2];
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
	school1();
	school2();
	school3();
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