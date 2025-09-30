emailinput=document.querySelector("form .email")
captchainput=document.querySelector("form .captcha")
pwdinput=document.querySelector("form .pwd")
confirminput=document.querySelector("form .confirmpwd")
password_reminder=document.querySelector("form .pwdreminder")//获取密码提示语
confirm_reminder=document.querySelector("form .confirmreminder")//获取确认密码提示语
captcha_reminder=document.querySelector("form .captchareminder")
sendcaptcha=document.querySelector("form .send_captcha")//获取发送验证码的按钮
confirmbtn=document.querySelector("form .submit")
count=20
sendcaptcha.addEventListener('click' ,function (event) {
    sendcaptcha.disabled = true
    emailaddress = emailinput.value
    event.preventDefault()
    timer = setInterval(function () {
        sendcaptcha.innerHTML = `${count}秒后重试`
        count--
        if (count < 0) {
            count = 20
            sendcaptcha.innerHTML = '发送验证码'
            sendcaptcha.disabled = false
            clearInterval(timer)
        }
    }, 1000)
    $.ajax({
        url: "/auth/sendfindback?email="+emailaddress,
        method:"GET",
        success: function (result){
            console.log(result)
        }
    })
})//点击按钮发送验证码
captchakey=0
pwdkey=0
confirmkey=0
confirmbtn.addEventListener("click",function () {
    emailvalue = emailinput.value
    captchavalue = captchainput.value
    pwdvalue = pwdinput.value
    confirmvalue = confirminput.value
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
    //下面进行验证码查找
    $.ajax({
        url:"/auth/searchfor?email="+emailvalue,
            success: function (result){
                captcha_from_py=result
                if(captchavalue!==captcha_from_py||captchavalue===''){
                captcha_reminder.style.display='block'
                pwdinput.style.marginTop='0px'
                }else{//如果验证码匹配，则可以修改密码
                captcha_reminder.style.display='block'
                pwdinput.style.marginTop='0px'
                captcha_reminder.innerHTML='验证码正确'
                captcha_reminder.style.color='green'
                if(pwdkey*confirmkey==1) {
                    //验证正确，进入注册路由
                    $.ajax({
                        url: "/auth/changeuser?email="+emailvalue+"&"+"pwd="+pwdvalue,
                        success:function (result) {
                           console.log(result)
                            }

                    })

                }
                }
            }
        })//通过输入的邮箱查询对应的验证码

    })




