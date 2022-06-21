$(document).ready(function(){
    $("div.tree").animate({
      left:'85%',
      opacity:'0.5',
    },2000).slideUp(2000).slideDown(2000).animate({left:'85%'},2000);
    $("#game_manu").slideDown(2000);
    $("#down_1").slideDown(2000);
    $("#down_1").click(function(){
    	$("#game_manu").slideToggle("slow");
    	if($("#down_1").text() == '点此处隐藏'){
    		$("#down_1 p").text('点此处展开');
    	}
    	else{
    		$("#down_1 p").text('点此处隐藏');
    	}
    });
  });
