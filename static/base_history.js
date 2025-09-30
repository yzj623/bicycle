let i
let j_timetext=[]
let userid
$.ajax({
    url: "/auth/getuserid",
    success: function (result) {
        userid=result["nowid"]
    }
})
trlist=document.querySelectorAll("tr.items")
j_timetd=document.querySelectorAll("tr.items td:nth-child(2)")
for(i=0;i<j_timetd.length;i++){
    j_timetext.push(j_timetd[i].innerText)//记录下来所有的行程时间字符串
    console.log(j_timetext[i])
}
editlist=document.querySelectorAll("tr.items td .edit")
deletelist=document.querySelectorAll("tr.items td .delete")
for(i=0;i<deletelist.length;i++){
    (function (i) {
        deletelist[i].addEventListener("click",function () {
        $.ajax({
            url: "/auth/delete?time="+j_timetext[i]+"&id="+userid,
            success:function () {
                trlist[i].style.display="none"
            }
        })
    })
    })(i)
}
for(i=0;i<editlist.length;i++){
    (function (i){
        editlist[i].addEventListener("click",function () {
           window.location.replace("/auth/submit?journeytime="+j_timetext[i])
        })
        }
    )(i)
}
let time

oneDayTime = 24*60*60*1000
function printdatestring (date){
  var year = date.getFullYear();
  var month =(date.getMonth() + 1).toString();
  var day = (date.getDate()).toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var dateTime = year + "-" + month + "-" + day;
  return dateTime;
}
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
submittimelist=document.querySelectorAll("tr.items td:nth-child(1)")
journeytimelist=document.querySelectorAll("tr.items td:nth-child(2)")
for(i=0;i<submittimelist.length;i++){
    time=new Date(+submittimelist[i].innerText)
    submittimelist[i].innerText=dateToStringbyminute(time )
}
let journeytimeshadow=[]//必须要把初始状态的行程时间记录下来，用于后续删除和编辑
for(i=0;i<journeytimelist.length;i++){
    time=new Date(journeytimelist[i].innerText)
    journeytimelist[i].innerText=printdatestring( time)+"至"+printdatestring(new Date(time.getTime()+7*oneDayTime))
}
//为了实现编辑和删除，将所有元素遍历一遍
