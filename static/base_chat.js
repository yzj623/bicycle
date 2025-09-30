let k
function dateToStringbyminute(date) {
     year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    month = month > 9 ? month : ('0' + month);
    day = day > 9 ? day : ('0' + day);
    hour = hour > 9 ? hour : ('0' + hour);
    minute = minute > 9 ? minute : ('0' + minute);
    dateTime = year + "-" + month + "-" + day + " " + hour + ":" + minute;
    return dateTime;
  }
let chosedadmin
let nowtime
send_textarea=document.querySelector("div.background_send textarea")
send_textarea_codecount=document.querySelector("div.background_send .codecount")
send_select=document.querySelector("div.background_send select.suggest")
mainarea=document.querySelector("div.mainarea")
rightlist=document.querySelector("div.rightlist")
let textlength
let index
let timer
let timer_2
let upgradekey=0
send_textarea.addEventListener("keydown",function () {
    textlength=send_textarea.value.length
    if(textlength>=200){
        textlength=200
        send_textarea_codecount.style.color="red"
    }else{
        send_textarea_codecount.style.color="black"
    }
    send_textarea_codecount.innerHTML=textlength+"/200字"

})
send_textarea.addEventListener("focus",function () {
    send_textarea.style.height="100px"
if(textlength>=200){
        textlength=200
        send_textarea_codecount.style.color="red"
    }else{
        send_textarea_codecount.style.color="black"
    }
    textlength=send_textarea.value.length
    send_textarea_codecount.innerHTML=textlength+"/200字"
})
send_textarea.addEventListener("blur",function () {
    send_textarea.style.height="50px"
if(textlength>=200){
        textlength=200
        send_textarea_codecount.style.color="red"
    }else{
        send_textarea_codecount.style.color="black"
    }
    textlength=send_textarea.value.length
    send_textarea_codecount.innerHTML=textlength+"/200字"
})
send_select.addEventListener("change",function () {
    index=send_select.selectedIndex
    if(send_select.options[index].value=="admin"){
        mainarea.style.width="600px"
         rightlist.style.display="inline-block"
    }else{
        mainarea.style.width="450px"
        rightlist.style.display="none"
    }

})
span_1=document.querySelector(".submitbox span:nth-child(2)")
span_2=document.querySelector(".submitbox span:nth-child(3)")
span_3=document.querySelector(".submitbox span:nth-child(4)")
span_4=document.querySelector(".submitbox span:nth-child(5)")
send_submitbtn=document.querySelector("div.background_send button.submitbtn")
send_submitbtn.addEventListener("click",function () {
    if(upgradekey==0){
        chosedadmin=document.querySelectorAll("div.rightlist div.chosedadmin span")
        index=send_select.selectedIndex
        if(send_select.options[index].value=="admin"){
            if(!chosedadmin.length){
            alert("请先选择发送对象")
            return
        }else{
            nowtime=new Date()
            for(k=0;k<chosedadmin.length;k++){
                $.ajax({
                    url:"/auth/sendcomment?accepter="+chosedadmin[k].innerText+"&time="+dateToStringbyminute(nowtime)+"&text="+send_textarea.value,
                    success:function (){
                        send_textarea.value=""
                        send_textarea_codecount.innerHTML="0/200字"
                    }
                })
            }
        }
        }else{
            alert("已反馈！")
            $.ajax({
                url:"/auth/sendemailcomment?text="+send_textarea.value
            })
        }
        send_submitbtn.innerHTML="提交成功！"
            upgradekey=1//用来防止多次点击按钮
            span_1.style.animation="animate1 1.5s ease-in forwards"
        span_2.style.animation="animate2 1.5s ease-in forwards"
        span_3.style.animation="animate3 1.5s ease-in forwards"
        span_4.style.animation="animate4 1.5s ease-in forwards"
        span_1.style.background="linear-gradient(90deg,transparent,#03e9f4)"
        span_2.style.background="linear-gradient(180deg,transparent,#03e9f4)"
        span_3.style.background="linear-gradient(270deg,transparent,#03e9f4)"
        span_4.style.background="linear-gradient(360deg,transparent,#03e9f4)"
    timer_2=setInterval(function (){
        span_1.style.animation=""
        span_2.style.animation=""
        span_3.style.animation=""
        span_4.style.animation=""
        span_1.style.background=""
        span_2.style.background=""
        span_3.style.background=""
        span_4.style.background=""
        send_submitbtn.innerHTML="提交建议"

        upgradekey=0
        clearInterval(timer_2)
    },1500)
        }
})
adminlist=document.querySelectorAll("div.rightlist div.admin")
for(k=0;k<adminlist.length;k++){
    adminlist[k].addEventListener("click",
        function (){
        this.classList.toggle("chosedadmin")
        }
    )
}
writebox=document.querySelector("div.leftlist div.writebox")
emailbox=document.querySelector("div.leftlist div.emailbox")
writeareabox=document.querySelector("div.midarea div.writeareabox")
emailareabox=document.querySelector("div.midarea div.emailareabox")
writebox.addEventListener("click",function () {
    writebox.classList.add("selected")
    emailbox.classList.remove("selected")
    //点击时，关闭收件箱，打开写字区
    writeareabox.style.display="block"
    emailareabox.style.display="none"
    //点击此图标时，要及时更新收回的对象框
    index=send_select.selectedIndex
    if(send_select.options[index].value=="admin"){
        mainarea.style.width="600px"
         rightlist.style.display="inline-block"
    }else{
        mainarea.style.width="450px"
        rightlist.style.display="none"
    }
})
emailbox.addEventListener("click",function () {
    emailbox.classList.add("selected")
    writebox.classList.remove("selected")
    //打开收件箱时，需要先把mainarea区域的样式复原
     mainarea.style.width="450px"
    rightlist.style.display="none"
    writeareabox.style.display="none"
    //然后，展示出收件箱部分
    emailareabox.style.display="block"

})
replylist=document.querySelectorAll("div.emailarea div.reply")
tocommentidlist=document.querySelectorAll("div.emailarea div.reply div.tocommentid")
popwindow=document.querySelector("div.popwindow")
pop_close=document.querySelector("div.popwindow img.closeicon")
commenttext=document.querySelector("div.popwindow div.commenttext")
replytext=document.querySelector("div.popwindow div.replytext")
replyidlist=document.querySelectorAll("div.emailarea div.reply div.replyid")
isreadlist=document.querySelectorAll("div.emailarea div.reply div.read")
commenthead=document.querySelector("div.popwindow div.commenthead")
replyhead=document.querySelector("div.popwindow div.replyhead")
pop_replyidbox=document.querySelector("div.popwindow div.idbox")
pop_close.addEventListener("click",function () {
    popwindow.style.display="none";
})

let deletekey=0;

for(k=0;k<replylist.length;k++){
    (function (k){
        //使用闭包防止丢失k
        replylist[k].addEventListener("click",function () {

            //如果未读，更新一下状态
            if(isreadlist[k].classList.contains("notread")){
            //点击评论时，将未读的消息改为已读
            isreadlist[k].classList.remove("notread")
            isreadlist[k].classList.add("isread")
            isreadlist[k].innerHTML="已读"
        }
             $.ajax({
                url:"/auth/upgradereplyisread?id="+replyidlist[k].innerText//后端将评论的状态更新
            })
            //点击回复时，发起请求获得被回复的评论
            $.ajax({
                url:"/auth/findcommentbyreply?tocommentid="+tocommentidlist[k].innerText+"&replyid="+replyidlist[k].innerText,
                success: function (result) {
                    commenttext.innerHTML=result["comment"]
                    replytext.innerHTML=result["reply"]//将得到的文本给对应区域
                    replyhead.innerHTML="来自调度员："+result["name"]
                }
            })
            //给弹窗中的文字区填充文字
             commenthead.innerHTML="回复你的建议："
            popwindow.style.display="block"
            //定位待删除的回复
            deletekey=k;
            maybekilledone=replylist[k];


        })
    }(k))
}
deletereply=document.querySelector("div.popwindow button.confirm")
deletereply.addEventListener("click",function () {
    //点击按钮时，更新回复的deleted属性
        $.ajax({
                url:"/auth/upgradereplyisdeleted?id="+replyidlist[deletekey].innerText//后端将评论的状态更新
            })
    //将此条回复从列表中删除
    replylist[deletekey].remove();//删除对应的回复
    //删除后关闭弹窗
    pop_close.click();
})
