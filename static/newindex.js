let timer_1
let timer_2
let timer_3
let timer_4
let timer_5
goto_register=document.querySelector("form a.goto_register")//获取前往注册的连接
goto_login=document.querySelector("form a.goto_login")
goto_findback=document.querySelector("form a.goto_findback")
findback_to_login=document.querySelector("form.findback_form a.goto_login")

formbox=document.querySelector(".formbox")
ustcday=document.querySelector(".ustcday")
ustcnight=document.querySelector(".ustcnight")


register_form=document.querySelector("form.register_form")
login_form=document.querySelector("form.login_form")
findback_form=document.querySelector("form.findback_form")


findback_animation=document.querySelector("form.findback_form div.animation")
svg=document.querySelector(".formbox svg")
circle=document.querySelector(".formbox svg .circle")
tick=document.querySelector(".formbox svg .tick")
svgbox=document.querySelector(".formbox .svgbox")
svg_title=document.querySelector(".svgbox h2")
//btn
registerbtn=document.querySelector("form button.registerbtn")
sendcaptcha=document.querySelector("form.register_form .send_captcha")
submitformbtn=document.querySelector("form.register_form .submit")
loginbtn=document.querySelector("form.login_form .login_button")
findback_sendcaptcha=document.querySelector("form.findback_form .send_captcha")
changepwd=document.querySelector("form.findback_form button.change")

//input
register_emailinput=document.querySelector("form input.register_email")
register_captchainput=document.querySelector("form input.register_captcha")
register_pwdinput=document.querySelector("form input.register_password")
register_confirminput=document.querySelector("form input.register_comfirmpwd")
register_usernameinput=document.querySelector("form input.register_username")
login_emailinput=document.querySelector("form.login_form .login_email")
login_pwdinput=document.querySelector("form.login_form .login_password")
findback_emailinput=document.querySelector("form.findback_form input.findback_email")
findback_captchainput=document.querySelector("form.findback_form input.findback_captcha")
findback_pwdinput=document.querySelector("form.findback_form input.findback_password")
findback_confirminput=document.querySelector("form.findback_form input.findback_confirmpwd")
findback_usernameinput=document.querySelector("form.findback_form input.findback_username")

//reminder
username_reminder=document.querySelector("form .re_userreminder")//获取用户名提示语
password_reminder=document.querySelector("form .re_pwdreminder")//获取密码提示语
confirm_reminder=document.querySelector("form .re_confirmreminder")//获取确认密码提示语
captcha_reminder=document.querySelector("form .re_captchareminder")
f_username_reminder=document.querySelector("form .fi_userreminder")//获取用户名提示语
f_password_reminder=document.querySelector("form .fi_pwdreminder")//获取密码提示语
f_confirm_reminder=document.querySelector("form .fi_confirmreminder")//获取确认密码提示语
f_captcha_reminder=document.querySelector("form .fi_captchareminder")
login_reminder=document.querySelector("form.login_form .reminder")

usernamekey=0
pwdkey=0
confirmkey=0
key=1
count=20
sendkey=0
let f_anitimer


function transform(){
    formbox.style.right="115px"
    formbox.style.transition="right 1.8s ease-in-out"
    svgbox.style.display="block"
    ustcnight.style.filter="blur(3px)"
    svgbox.style.opacity="0.6"
    timer_1=setInterval(function () {
       ustcday.style.filter="brightness(1.25)"
        clearInterval(timer_1)
    },500)
    circle.style.animation="circle 1s ease-in-out"
    circle.style.animationFillMode="forwards"
    tick.style.animation="tick 0.8s ease-out"
    tick.style.animationFillMode="forwards"
    tick.style.animationDelay="0.95s"
    svg_title.style.animation="title 0.6s ease-in-out"
    svg_title.style.animationFillMode="forwards"
    svg_title.style.animationDelay="1.2s"
}
function findbacktransform() {
    findback_animation.style.animation="move 2.5s ease-in-out"
    findback_animation.style.animationFillMode="forwards"
    f_anitimer=setInterval(function () {
        findback_animation.style.animation=""
     findback_animation.style.animationFillMode=""
        findback_to_login.click()
        clearInterval(f_anitimer)
    },2500)
}


findback_to_login.addEventListener("click",function () {
    findback_form.style.display="none"
    login_form.style.display="block"
})
goto_findback.addEventListener("click",function () {
    login_form.style.display="none"
    findback_form.style.display="block"
})
goto_register.addEventListener("click",function () {
    login_form.style.display='none'
    register_form.style.display='block'
    formbox.style.right='720px'
    formbox.style.transition='right 2s'
    ustcday.style.filter="brightness(1.25) blur(3px)"
    timer_2=setInterval(function (){
        clearInterval(timer_2)
        ustcnight.style.filter="blur(0px)"
        //将黑夜变清晰
    },2000)
})
goto_login.addEventListener("click",function () {
    register_form.style.display="none"
    login_form.style.display="block"
    formbox.style.right='115px'
    formbox.style.transition='right 2s'
    ustcnight.style.filter="blur(3px)"
    timer_3=setInterval(function () {
        clearInterval(timer_3)
        ustcday.style.filter="brightness(1.25)"
    },2000)
})
registerbtn.addEventListener("click",function (){
    emailvalue=register_emailinput.value
    captchavalue=register_captchainput.value
    pwdvalue=register_pwdinput.value
    confirmvalue=register_confirminput.value
    usernamevalue=register_usernameinput.value
    //先检查邮箱是否已经被注册过
    $.ajax({
        url: "/auth/searchemail?email="+emailvalue,
            success: function (result) {
                if(result==="found") {
                    alert("此邮箱已注册过帐号，不能重复注册")
                }else{
                        //先进行格式的检查，如果格式不过关则没有必要查询数据库
                        if(usernamevalue.length>10||usernamevalue.length<3){
        username_reminder.innerHTML='用户名长度必须为3到10个字符'
        username_reminder.style.color='red'
        username_reminder.style.display="block"
        register_pwdinput.style.marginTop='0px'
        usernamekey=0
    }else{
                            $.ajax({
        url:"/auth/searchusername?username="+usernamevalue,
        success:function (result){
            if(result=="1"){
                username_reminder.innerHTML='用户名已被使用'
                username_reminder.style.color='red'
                username_reminder.style.display="block"
                register_pwdinput.style.marginTop='0px'
                usernamekey=0
            }else{
                username_reminder.style.display="block"
                register_pwdinput.style.marginTop='0px'
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
        register_confirminput.style.marginTop='0px'
        pwdkey=0
    }else {
        password_reminder.style.display='block'
        register_confirminput.style.marginTop='0px'
        password_reminder.innerHTML = '密码符合要求'
        password_reminder.style.color = 'green'
        pwdkey=1
    }
    if(confirmvalue!==pwdvalue){
        confirm_reminder.innerHTML='两次输入的密码不一致'
        confirm_reminder.style.color='red'
        confirm_reminder.style.display='block'
        register_confirminput.style.marginBottom="0px"
        registerbtn.style.marginTop="15px"
        confirmkey=0
    }else if(confirmvalue!==''){
        confirm_reminder.style.display='block'
        register_confirminput.style.marginBottom="0px"
        confirm_reminder.innerHTML='两次密码一致'
        registerbtn.style.marginTop="15px"
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
                register_usernameinput.style.marginTop='0px'
                }else{
                captcha_reminder.style.display='block'
                register_usernameinput.style.marginTop='0px'
                captcha_reminder.innerHTML='验证码正确'
                captcha_reminder.style.color='green'
                if(usernamekey*pwdkey*confirmkey==1) {
                    //验证成功，可以进行一些进度条展示
                        submitformbtn.click()
                        transform()
                }
                }
            }
        })//通过输入的邮箱查询对应的验证码
                    }
                }
    })
})
sendcaptcha.addEventListener("click",function () {
       if(sendkey==0){
           sendkey=1
            emailaddress = register_emailinput.value
        $.ajax({
            url: "/auth/searchemail?email="+emailaddress,
            success: function (result) {
                if(result=="found"){
                    alert("此邮箱已注册过帐号，不能重复注册")
                    sendkey=0
                }else{
                     timer_4=setInterval(function (){

                                sendcaptcha.innerHTML=`${count}秒后重试`
                                count--
                                if(count<0){

                                    clearInterval(timer_4)
                                    count=20
                                    sendcaptcha.innerHTML='发送验证码'
                                    sendkey=0
                                }
                                },1000)
                    $.ajax({
                    url:"/auth/sendcaptcha?email="+emailaddress,
                     method:'GET'

                        })
                    }
            }
        })

       }
})
loginbtn.addEventListener("click",function () {
    email=login_emailinput.value
    password=login_pwdinput.value
    $.ajax({
        url:"/auth/searchuser?email="+email+"&"+"password="+password,
        success:function (result) {
            if(result=="notfound"){
                login_reminder.style.display="block"
                goto_findback.style.marginTop="5px"
            }else{
                login_reminder.style.display="none"
                goto_findback.style.marginTop="25px"
                if(result=="guest"){
                    window.location.href="/auth/submit"
                }else{
                    window.location.href="/auth/admin"
                }
            }
        }
    })
})
svgbox.addEventListener("click",function () {
    register_form.style.display="none"
    login_form.style.display="block"
    svgbox.style.opacity="0"
   timer_5=setInterval(function () {
       svgbox.style.display="none"
       clearInterval(timer_5)
   })
})
let f_sendkey=0//防止用户重复点击按钮
let f_timer
let f_count=20
let f_usernamekey=0
let f_pwdkey=0
let f_confirmkey
findback_sendcaptcha.addEventListener("click",function () {
    if(f_sendkey==0){
           f_sendkey=1
            f_emailaddress = findback_emailinput.value
        $.ajax({
            url: "/auth/searchemail?email="+f_emailaddress,
            success: function (result) {
                if(result=="notfound"){
                    alert("此邮箱未注册过账号，请前往注册")
                    f_sendkey=0
                }else{
                     f_timer=setInterval(function (){

                                findback_sendcaptcha.innerHTML=`${f_count}秒后重试`
                                f_count--
                                if(f_count<0){

                                    clearInterval(f_timer)
                                    f_count=20
                                    findback_sendcaptcha.innerHTML='发送验证码'
                                    f_sendkey=0
                                }
                                },1000)
                    $.ajax({
                    url:"/auth/sendfindback?email="+f_emailaddress,
                     method:'GET'

                        })
                    }
            }
        })

       }
})
let watitimer
changepwd.addEventListener("click",function () {
    f_usernamekey=0
    f_pwdkey=0
    f_confirmkey=0
    f_emailvalue=findback_emailinput.value
    f_captchavalue=findback_captchainput.value
    f_pwdvalue=findback_pwdinput.value
    f_confirmvalue=findback_confirminput.value
    f_usernamevalue=findback_usernameinput.value
    //先检查邮箱是否已经被注册过
    $.ajax({
        url: "/auth/searchemail?email="+f_emailvalue,
            success: function (result) {
                if(result==="notfound") {
                    alert("此邮箱未注册过帐号，请前往注册")
                }else{
                        //先进行格式的检查，如果格式不过关则没有必要查询数据库
                        if(f_usernamevalue.length>10||f_usernamevalue.length<3){
        f_username_reminder.innerHTML='用户名长度必须为3到10个字符'
        f_username_reminder.style.color='red'
        f_username_reminder.style.display="block"
        findback_pwdinput.style.marginTop='0px'
        f_usernamekey=0
    }else{
                            $.ajax({
        url:"/auth/searchusername?username="+f_usernamevalue,
        success:function (result){
            if(result=="1"){
                f_username_reminder.innerHTML='用户名已被使用'
                f_username_reminder.style.color='red'
                f_username_reminder.style.display="block"
                findback_pwdinput.style.marginTop='0px'
                f_usernamekey=0
            }else{
                f_username_reminder.style.display="block"
                findback_pwdinput.style.marginTop='0px'
                f_username_reminder.innerHTML='用户名符合要求'
                f_username_reminder.style.color='green'
                f_usernamekey=1
            }
            if(f_pwdvalue.length>20||f_pwdvalue.length<6){
        f_password_reminder.innerHTML='密码长度必须为6到20个字符'
        f_password_reminder.style.color='red'
        f_password_reminder.style.display='block'
        findback_confirminput.style.marginTop='0px'
        f_pwdkey=0
    }else {
                f_password_reminder.style.display='block'
                findback_confirminput.style.marginTop='0px'
                f_password_reminder.innerHTML = '密码符合要求'
                f_password_reminder.style.color = 'green'
                f_pwdkey=1
            }
            if(f_confirmvalue!==f_pwdvalue){
        f_confirm_reminder.innerHTML='两次输入的密码不一致'
        f_confirm_reminder.style.color='red'
        f_confirm_reminder.style.display='block'
        findback_confirminput.style.marginBottom="0px"
        changepwd.style.marginTop="10px"
        f_confirmkey=0
    }else if(f_confirmvalue!==''){
                f_confirm_reminder.style.display='block'
                findback_confirminput.style.marginBottom="0px"
                f_confirm_reminder.innerHTML='两次密码一致'
                changepwd.style.marginTop="10px"
                f_confirm_reminder.style.color='green'
                f_confirmkey=1
            }
            if(f_usernamekey*f_pwdkey*f_confirmkey==1){
                $.ajax({
            //根据填写的邮箱，查找数据库中的验证码
            url:"/auth/searchfor?email="+f_emailvalue,
            success: function (result){
                f_captcha_from_py=result
                if(f_captchavalue!==f_captcha_from_py||f_captchavalue===''){
                f_captcha_reminder.style.display='block'
                findback_usernameinput.style.marginTop='0px'
                }else{
                f_captcha_reminder.style.display='block'
                findback_usernameinput.style.marginTop='0px'
                f_captcha_reminder.innerHTML='验证码正确'
                f_captcha_reminder.style.color='green'//验证成功，可以进行一些进度条展示
                      findbacktransform()
                    $.ajax({
                        url:"/auth/changeuser?email="+f_emailvalue+"&pwd="+f_pwdvalue+"&username="+f_usernamevalue
                    })

                }
            }
        })
            }

        }
    })

                        }
                    }
                }
    })
})
