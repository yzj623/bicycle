function sleep(d){

  for(var t = Date.now();Date.now() - t <= d;);
}
sleep(1000); //闯入毫秒，如1秒，传递1000
key=1
emailkey=0
captchakey=0
usernamekey=0
pwdkey=0
confirmkey=0
email=document.querySelector("form .email")
sendcaptcha=document.querySelector("form .send_captcha")
count=20
captcha_from_py=""
    sendcaptcha.addEventListener('click' ,function (event){
        emailaddress = email.value
        $.ajax({
            url: "/auth/searchemail?email="+emailaddress,
            success: function (result) {
                if(result==="found"){
                    alert("此邮箱已注册过帐号，不能重复注册")
                }else{
                    sendcaptcha.disabled=true
                    event.preventDefault()
                    timer=setInterval(function (){
                    sendcaptcha.innerHTML=`${count}秒后重试`
                    count--
                    if(count<0){
                    count=20
                    sendcaptcha.innerHTML='发送验证码'
                    sendcaptcha.disabled=false
                    clearInterval(timer)
                    }
                    },1000)
                    $.ajax({
                    url:"/auth/sendcaptcha?email="+emailaddress,
                     method:'GET',
                    success:function (result) {
                        console.log(result)
                        },
                    fail:function (result){
                        console.log(result)
                    }
                        })
                    }
            }
        })
    })

emailinput=document.querySelector("form .email")
captchainput=document.querySelector("form .captcha")
usernameinput=document.querySelector("form .account")
pwdinput=document.querySelector("form .pwd")
confirminput=document.querySelector("form .confirmpwd")
registerbtn=document.querySelector("form .signup")//获取注册按钮
username_reminder=document.querySelector("form .userreminder")//获取用户名提示语
password_reminder=document.querySelector("form .pwdreminder")//获取密码提示语
confirm_reminder=document.querySelector("form .confirmreminder")//获取确认密码提示语
captcha_reminder=document.querySelector("form .captchareminder")
topline=document.querySelector(".topline")
iscomplete=0
returnkey=0
registerbtn.addEventListener("click",function () {
    // username_reminder.style.display="block"
    // password_reminder.style.display='block'
    // confirm_reminder.style.display='block'
    // pwdinput.style.marginTop='0px'
    // confirminput.style.marginTop='0px'
    // confirminput.style.marginBottom="0px"
    //获取各个输入框内的值
    emailvalue = emailinput.value
    captchavalue = captchainput.value
    usernamevalue = usernameinput.value
    pwdvalue = pwdinput.value
    confirmvalue = confirminput.value
    //先检查邮箱是否已经被注册过
    $.ajax({
        url: "/auth/searchemail?email="+emailvalue,
            success: function (result) {
                if(result==="found") {
                    return
                }else{
                        //先进行格式的检查，如果格式不过关则没有必要查询数据库
                        if(usernamevalue.length>10||usernamevalue.length<3){
        username_reminder.innerHTML='用户名长度必须为3到10个字符'
        username_reminder.style.color='red'
        username_reminder.style.display="block"
        pwdinput.style.marginTop='0px'
        usernamekey=0
    }else{
                            $.ajax({
        url:"/auth/searchusername?username="+usernamevalue,
        success:function (result){
            if(result=="1"){
                username_reminder.innerHTML='用户名已被使用'
                username_reminder.style.color='red'
                username_reminder.style.display="block"
                pwdinput.style.marginTop='0px'
                usernamekey=0
            }else{
                username_reminder.style.display="block"
                pwdinput.style.marginTop='0px'
                username_reminder.innerHTML='用户名符合要求'
                username_reminder.style.color='green'
                usernamekey=1
            }

        }
    })
                        }
                        //查找用户名是否已经被使用过

                        if(pwdvalue.length>20||pwdvalue.length<6){
        password_reminder.innerHTML='密码长度必须为6到20个字符'
        password_reminder.style.color='red'
        password_reminder.style.display='block'
        confirminput.style.marginTop='0px'
        pwdkey=0
    }else {
        password_reminder.style.display='block'
        confirminput.style.marginTop='0px'
        password_reminder.innerHTML = '密码符合要求'
        password_reminder.style.color = 'green'
        pwdkey=1
    }
                        if(confirmvalue!==pwdvalue){
        confirm_reminder.innerHTML='两次输入的密码不一致'
        confirm_reminder.style.color='red'
        confirm_reminder.style.display='block'
        confirminput.style.marginBottom="0px"
        confirmkey=0
    }else if(confirmvalue!==''){
        confirm_reminder.style.display='block'
        confirminput.style.marginBottom="0px"
        confirm_reminder.innerHTML='两次密码一致'
        confirm_reminder.style.color='green'
        confirmkey=1
    }
                        //如果前面的验证全部通过，则开始查询数据库
                        $.ajax({
            //根据填写的邮箱，查找数据库中的验证码
            url:"/auth/searchfor?email="+emailvalue,
            success: function (result){
                captcha_from_py=result
                if(captchavalue!==captcha_from_py||captchavalue===''){
                captcha_reminder.style.display='block'
                usernameinput.style.marginTop='0px'
                }else{
                captcha_reminder.style.display='block'
                usernameinput.style.marginTop='0px'
                captcha_reminder.innerHTML='验证码正确'
                captcha_reminder.style.color='green'
                if(usernamekey*pwdkey*confirmkey==1) {
                    //验证正确，进入注册路由
                    topline.style.width = "300px"
                    topline.style.transition = "width 3s"
                    if (key == 1) {
                        key++
                        submittimer = setInterval(function () {
                            clearInterval(submittimer)
                            alert("注册成功，即将返回主界面")
                            registerbtn.type = 'submit'
                            registerbtn.click()
                            registerbtn.type="button"
                        }, 3000)
                    }
                }
                }
            }
        })//通过输入的邮箱查询对应的验证码
                    }
                }
    })
})
