function search(){
	var flag = 0;
	 	// var regsUserName = [/^[A-Za-z0-9]+$/,/^\w +[@]\w +[.][\w.] +$/,/^[A-Za-z0-9]+$/];
	 	// var regsUserPwd = /^[A-Za-z0-9]+$/;
		var admin = [["tkz245899","456123"],["2830423585","456123"],["tkz@xina.com","456123"]];
		var userName = document.getElementsByClassName('text')[0].value;
		var userPwd = document.getElementsByClassName('password')[0].value;
		if(userName == ""||userPwd == ""){
				alert("用户名或者密码不能为空！");
				flag = 2;
		}
		for (var i = admin.length - 1; i >= 0; i--) {
			if (userName == admin[i][0]&&userPwd == admin[i][1]) {
				flag = 1;
				break;
			}
		}
		if(flag == 0){ 
			alert("用户名或密码错误！");  
		}
	    if(flag == 1){
	 	   alert("登陆成功");
	 	   window.location.href="TNMGameIndex.html";
	 	   window.event.returnValue = false; //window.event.returnValue=false放在提交表单中的onclick事件中则不会提交表单
	 	                                    //，如果放到超链接中则不执行超链接，也就是它禁止了或取消了请求，没有任何效果。
	}
}
function onFoucs() {
        	this.select();
        	this.style.background="#ffec8b";
        	this.style.color="#123456";
        }
function onBlur() {
        	this.style.background="#ffffff";
        	this.style.color="#000000";
        }
window.onload = function() {
        }
// if(f == 1){
// 	 alert("欢迎登陆！");
// 	 var box = getElementsByClassName('ShareBox')[0];
// 	 var a = box.getElementsByTagName('a')[5];
// 	 a.style.background = "url(..images/)"
// 	 box.appendChild(h3);
// 	 box.getElementsByTagName('h3')[0].innerHTML="欢迎登陆！"
// }