var regsUserName = [/^\w+[@]\w+[.][\w]+$/,/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/];
var regsUserPwd = /^(\w){6,20}$/;
function checkEmail() {
    var email = document.getElementById("text1").value;
    var reg = new RegExp(regsUserName[0]);
    if(!reg.test(email)) {
        $("p.1").text("*邮箱不合法！");
        $("p.1").css("color","red");
        return false;
    }
    else{
        $("p.1").text("*OK");
        $("p.1").css("color","green");
        return true;
    }
}
function checkPhone(){
    var pn = document.getElementById("text2").value;
    var reg = new RegExp(regsUserName[1]);
    if(!reg.test(pn)) {
        $("p.2").text("*手机号不合法！");
        $("p.2").css("color","red");
        return false;
    }
    else{
        $("p.2").text("*OK");
        $("p.2").css("color","green");
        return true;
    }
}
function checkPw(){
    password1 = document.getElementById("password1").value;
    password2 = document.getElementById("password2").value;
    reg = new RegExp(regsUserPwd);
    if(password1 != password2){
        $("p.3").text("*两次输入密码必须相同！");
        $("p.3").css("color","red");
        return false;
    }
    else if(!reg.test(password1)){
        $("p.3").text("*密码格式不正确！");
        $("p.3").css("color","red");
        return false;
    }
    else{
        $("p.3").text("*OK");
        $("p.3").css("color","green");
        return true;
    }
}
function next1() {
	var ul = document.getElementsByClassName('step');
    var li = ul[0].getElementsByTagName('li');
    var ul_ = document.getElementsByClassName('c');
    var li_ = ul_[0].getElementsByTagName('li');
    li[0].style.background = "#e98e91";
    li[1].style.background = "#ae6a6c";
    li_[0].style.display = "none";
    li_[1].style.display = "block";
}
function next2() {
	var ul = document.getElementsByClassName('step');
	var li = ul[0].getElementsByTagName('li');
	var ul_ = document.getElementsByClassName('c');
    var li_ = ul_[0].getElementsByTagName('li');
    var text4 = document.getElementById('text4');
    if(text4.value == "123456") {
    	alert("注册成功！");
        li[1].style.background = "#e98e91";
        li[2].style.background = "#ae6a6c";
        li_[1].style.display = "none";
        li_[2].style.display = "block";
    }
    else {
    	alert("验证码错误！");
    }
}
function checkForm(){
    return checkEmail()&&checkPw()&&checkPhone();
}
function search() {
    var myform = document.forms[0];
    myform.onsubmit = checkForm;
}
function onFoucs() {
            this.select();
            this.style.background="#9cada0";
            this.style.color="#000000";
        }
function onBlur() {
            this.style.background="#ffffff";
            this.style.color="#000000";
        }
window.onload = function() {
            var inputs = document.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                var type = inputs[i].type;
                if(type == "text" || type == "password"){
                    inputs[i].onfocus = onFoucs;
                    inputs[i].onblur = onBlur;
                }
            }
        }