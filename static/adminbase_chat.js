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
  let timer_1
let k=0
let nowtime
let nowsendername
commentlist=document.querySelectorAll("div.comment")
isreadlist=document.querySelectorAll("div.comment div.read")
senderlist=document.querySelectorAll("div.comment div.sender")
commenttextlist=document.querySelectorAll("div.comment div.innertext")
commentidlist=document.querySelectorAll("div.comment div.commentid")
commentsenderidlist=document.querySelectorAll("div.comment div.commentsenderid")
popwindow=document.querySelector("div.popwindow")
pop_close=document.querySelector("div.popwindow img.closeicon")
pop_sendername=document.querySelector("div.popwindow div.sendername")
container=document.querySelector("div.container")
console.log(pop_sendername)
pop_text=document.querySelector("div.popwindow div.text")
pop_idbox=document.querySelector("div.popwindow div.commentid")//存放着评论的id
pop_senderidbox=document.querySelector("div.popwindow div.senderidbox")

console.log(isreadlist)
for(k=0;k<commentlist.length;k++){
    (function (k){
        //使用闭包防止丢失k
        commentlist[k].addEventListener("click",function (){
            //每次点击一条评论，将这条评论列可能被删除的那条
            maybekilledone=commentlist[k]
            nowsendername=senderlist[k].innerText
            pop_sendername.innerHTML="来自用户 "+nowsendername.substring(5,nowsendername.length)+" 的建议"
            pop_text.innerHTML=commenttextlist[k].innerText
            pop_idbox.innerHTML=commentidlist[k].innerText
            pop_senderidbox.innerHTML=commentsenderidlist[k].innerText

            //点击一个回复之后，立刻将该评论的相关信息装载入pop
            popwindow.style.display="block"
            container.style.backdropFilter="blur(3px)"
        if(isreadlist[k].classList.contains("notread")){
            //点击评论时，将未读的消息改为已读
            isreadlist[k].classList.remove("notread")
            isreadlist[k].classList.add("isread")
            isreadlist[k].innerHTML="已读"
            $.ajax({
                url:"/auth/upgradecomment?id="+pop_idbox.innerText//后端将评论的状态更新
            })
        }
    })
    }(k))
}
pop_close.addEventListener("click",function () {
    popwindow.style.display="none"
})
replybutton=document.querySelector("div.popwindow button")
replytext=document.querySelector("div.popwindow textarea")
let maybekilledone
replybutton.addEventListener("click",function () {
    //用户点击回复后，生成一条对应的回复，并且将被回复的评论的isreplied改为yes
    nowtime=new Date()
    $.ajax({
        url:"/auth/sendreply?tocommentid="+pop_idbox.innerText+"&accepter="+pop_senderidbox.innerText+"&text="+replytext.value+"&time="+dateToStringbyminute(nowtime)
    })
    //在回复之后，自动退出弹窗页面，并且删除掉已回复的那条消息
    //通过计时器，延迟退出时间
    replybutton.innerHTML="已回复"
    timer_1=setInterval(function () {
        clearInterval(timer_1)
        maybekilledone.remove()
        pop_close.click()
        replybutton.innerHTML="回复"
    },1000)

})