window.onload = function(){
	var text1 = $('.ltext1')[0];
	var text2 = $('.ltext2')[0];
	var img1 = $('.lpic img')[0];
	var img2 = $('.lpic img')[1];
	var index = 0;
	var timer = window.setInterval(autoChange,3000);
	text1.onmouseover = function(){
		 if(timer){
		 	clearInterval(timer);
		 }
         img2.style.display = "none";
         img1.style.display = "block";
	}
	text2.onmouseover = function(){
		if(timer){
		 	clearInterval(timer);
		 }
         img1.style.display = "none";
         img2.style.display = "block";
	}
	text1.onmouseout = function(){
		timer=setInterval(autoChange,3000);
	}
	text2.onmouseout = function(){
		timer=setInterval(autoChange,3000);
	}
	function autoChange(){
		++index;
		if(index == $('.lpic img').length){
			index = 0;
		}
		for (var i = 0; i < $('.lpic img').length; i++) {
			if(i==index){
				$('.lpic img')[i].style.display = "block";
			}
			else{
				$('.lpic img')[i].style.display = "none";
			}
		}
	}
}
function add(){
	var txt = '<ul><li><i></i><a href=""><img src="../images/v1.jpg" alt="" width="290px"><span class="vtext">吃鸡竟然用这个？</span></a></li><li><i></i><a href=""><img src="../images/v2.jpg" alt="" width="290px"><span class="vtext">轰炸区这么猛？</span></a></li><li><i></i><a href=""><img src="../images/v3.jpg" alt="" width="290px"><span class="vtext">战术大师的日常</span></a></li><li><i></i><a href=""><img src="../images/v4.jpg" alt="" width="290px"><span class="vtext">吃新地图跳伞测试</span></a></li></ul>';
	for (var i = 0; i < 3; i++) {
		$('.vlist ul:last').append(txt);
	}
}