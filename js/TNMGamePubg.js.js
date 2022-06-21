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
 function close(i){
	var img = $('.f img');
	alert(img);
	img[i].style.display = "none";
}