$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("div.tree").text("jQuery 仍在运行！");
  });
});