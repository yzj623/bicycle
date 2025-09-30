let i = 0
let j = 0
let loginkey = 0
const afterlogin = document.querySelector('.map .form .slogin')//这是登录之后的区域
const mainform = document.querySelector('.map form')//获取表单
usernameinput = document.querySelector('.account')
pwdinput = document.querySelector('.pwd')
loginbtn = document.querySelector('.login')
const signupbtn = document.querySelector('.signup')
const eye = document.querySelector('.eyes')
 submitbtn = document.querySelector('.map .form .submit')
const reminder=document.querySelector(".map .reminder")

let nowusername
let nowpwd
let nowlicense
let userid

// let usernamearray = JSON.parse(localStorage.getItem("usernamearray"))
// let pwdarray = JSON.parse(localStorage.getItem("pwdarray"))
// let licensearray = JSON.parse(localStorage.getItem("licensearray"))
// let dataarray = JSON.parse(localStorage.getItem("dataarray"))//先获取信息数组，如果获取失败就设为空数组
// if (usernamearray == null) {
//     usernamearray = []
// }
// if (pwdarray == null) {
//     pwdarray = []
// }
// if (licensearray == null) {
//     licensearray = []
// }
// if (dataarray == null) {
//     dataarray = []
// }
// //植入内部账号
// for (i = 0; i < usernamearray.length; i++) {
//     if (usernamearray[i] === 'yzj623')
//         break
// }
// if (i === usernamearray.length) {
//     for (j = 0; j < 40; j++) {
//         dataarray.push(0)
//     }
//     usernamearray.push('yzj623')
//     pwdarray.push('1')
//     licensearray.push(1)
// }
// //插入账号后，立即存入本地存储
// localStorage.setItem("dataarray", JSON.stringify(dataarray))
// localStorage.setItem("usernamearray", JSON.stringify(usernamearray))
// localStorage.setItem("pwdarray", JSON.stringify(pwdarray))
// localStorage.setItem("licensearray", JSON.stringify(licensearray))
//如果本地未发现管理员账号，则插入管理员账号
//初始化完毕
// if (eye !== null) {
//     eye.addEventListener('click', function () {
//         if (pwd.type === 'password') {
//             pwd.type = 'text'
//             eye.src = " {{ url_for( " static" ,filename="images/可视.png") }} "
//         } else {
//             pwd.type = 'password'
//             eye.src = " {{ url_for("static",filename="images/不可视.png") }} "
//         }
//     })
// }

// if (signupbtn !== null) {
//     signupbtn.addEventListener('click', function () {
//         if (username.value === '') {
//             alert('注册失败，用户名不能为空')
//             return
//         }
//         if (pwd.value === '') {
//             alert('注册失败，请填写密码！')
//             return
//         }
//         for (i = 0; i < usernamearray.length; i++) {
//             if (usernamearray[i] === username.value) {
//                 alert('注册失败，用户名已被使用')
//                 break
//             }
//         }
//         if (i === usernamearray.length) {
//             usernamearray.push(username.value)
//             pwdarray.push(pwd.value)
//             licensearray.push(0)
//             alert('注册成功！')
//             for (j = 0; j < 40; j++) {
//                 dataarray.push(0)
//             }
//             localStorage.setItem("dataarray", JSON.stringify(dataarray))
//             localStorage.setItem("usernamearray", JSON.stringify(usernamearray))
//             localStorage.setItem("pwdarray", JSON.stringify(pwdarray))
//            localStorage.setItem("licensearray",JSON.stringify(licensearray))
//         }
//     })
// }
function showlicense(x) {
    if (x === 0) {
        return '普通用户'
    }
    if (x === 1) {
        return '管理员'
    }
}
// if (loginbtn !== null) {
//     loginbtn.addEventListener('click', function () {
//         for (i = 0; i < usernamearray.length; i++) {
//             if (usernamearray[i] === username.value) {
//                 if (pwdarray[i] === pwd.value) {
//                     nowlicense = licensearray[i]//登录成功后，读入账号的license信息
//                     alert('登录成功！')
//                     //若登录成功，进行下述操作
//                     if (nowlicense === 1) {
//                         //如果确认是管理员，进行如下操作
//                         submitbtn.innerHTML = '点击进入管理界面'
//                     }
//                     loginkey = 1
//                     nowusername = usernamearray[i]
//                     nowpwd = pwdarray[i]
//                     nowlicense = licensearray[i]
//                     mainform.style.display = 'none'
//                     afterlogin.style.display = 'block'
//                     submitbtn.style.marginTop = '50px'
//                     afterlogin.innerHTML = `
//                     <br>
//                     <br>
//                     <br>
//                     欢迎回来，${nowusername}!
//                     <br>
//                     你的身份是：${showlicense(nowlicense)}
//                     `
//                 } else {
//                     alert('登录失败，用户名或密码错误')
//                 }
//                 break
//             }
//         }
//         if (i === usernamearray.length) {
//             alert('登录失败，用户名或密码错误')
//         }
//     })
// }
if (submitbtn !== null) {
    submitbtn.addEventListener('click', function () {
        if (loginkey === 0) {
            alert('此功能需登录后使用，请先登录')
        }
        if (loginkey === 1) {
            localStorage.setItem('nowusername', nowusername)//进入下一个界面之前，先存储现在的用户名
            if (nowlicense === 0) {
                window.location.href = './submit'
                // 此后进入提交行程页面
            }
            if (nowlicense === 1) {
                window.location.href = './administrator'

            }
        }
    })
}
loginbtn.addEventListener("click",function (){
    username=usernameinput.value
    password=pwdinput.value
    $.ajax({
        url:"/auth/searchuser?username="+username+"&"+"password="+password,
        success:function (result) {
            if(result=="notfound"){
                reminder.style.display="block"
            }else{
                reminder.style.display="none"

            }
        }
    })
})

