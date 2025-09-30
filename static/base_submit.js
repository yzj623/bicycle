i=0
j=0
let k
key=0
let index
let thismonday
let nextmonday
let nextmondaytime
now = new Date()//当前时间
nowTime = now.getTime()
oneDayTime = 24*60*60*1000
day=now.getDay()
if(day==6){
    MondayTime = nowTime +2*oneDayTime//根据当前时间，推算mondaytime
    //如果是周六，则用下一周的周一
}else{
    MondayTime = nowTime - (day-1)*oneDayTime//根据当前时间，推算mondaytime
}
originmonday=printdatestring(new Date(MondayTime))
console.log(originmonday)

if(timefromhistory){
    thismonday=new Date(timefromhistory)//指定周一的日期建立为date对象
    MondayTime=thismonday.getTime()//将Mondaytime同步更新
    nextmondaytime=MondayTime+7*oneDayTime//将next也同步更新
    nextmonday=new Date(nextmondaytime)
    if((MondayTime-new Date(originmonday).getTime())%(7*oneDayTime)!=0){
        alert("error")//如果提交的时间不是周一，则报错
    }
}else{
    thismonday = new Date(MondayTime)//这一周的周一的date对象
    nextmondaytime=MondayTime+7*oneDayTime
    nextmonday = new Date(nextmondaytime)
}
datetimeinput=document.querySelector("div.datetime")
lastbtn=document.querySelector("button.datatime-s")
nextbtn=document.querySelector("button.datatime-x")
let userid
$.ajax({
    url: "/auth/getuserid",
    success: function (result) {
        userid=result["nowid"]
    }
})

datetimeinput.innerHTML=""+printdatestring(thismonday)+"~"+printdatestring(nextmonday)
lastbtn.addEventListener("click",function () {
    if(printdatestring(new Date(MondayTime))==originmonday){
        alert("不能选择已经过去的星期！")
        return
    }
    MondayTime=MondayTime-7*oneDayTime
    nextmondaytime=MondayTime+7*oneDayTime
    thismonday=  new Date(MondayTime)
    nextmonday = new Date(nextmondaytime)
    datetimeinput.innerHTML=""+printdatestring(thismonday)+"~"+printdatestring(nextmonday)
})
nextbtn.addEventListener("click",function () {
     MondayTime=MondayTime+7*oneDayTime
    nextmondaytime=MondayTime+7*oneDayTime
    thismonday= new Date(MondayTime)
    nextmonday = new Date(nextmondaytime)
    datetimeinput.innerHTML=""+printdatestring(thismonday)+"~"+printdatestring(nextmonday)
})



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
btnlist=document.querySelectorAll("td button")
inputlist=document.querySelectorAll("td input")
submitbtn=document.querySelector(".submitbtn")
console.log(btnlist)
console.log(btnlist[0])
let nowbtn
let noworigin
let nowdestin
let orig
let dest
for(i=0;i<btnlist.length;i++){
    btnlist[i].addEventListener("click",function (){
       if(this.innerHTML=="无行程需求"){
            this.innerHTML="有行程需求"
            this.classList.add("checked")
        }else{
            this.innerHTML="无行程需求"
            this.classList.remove("checked")
        }

    })
}
submitbtn.addEventListener("click",function () {
        if(key==0) {
            key=1
            submitbtn.innerHTML = "已提交，请勿重复提交"
            submitbtn.style.disabled = "true"
            submitbtn.style.fontSize = "14px"
            $.ajax({
                url: "/auth/searchjourney?time=" + printdatestring(thismonday) + "&id=" + userid,//先查询是否提交过相同的行程
                success: function (result) {
                    console.log(result)
                    method = result
                    if (method == "change") {
                        for (i = 1; i <= 5; i++) {
                            for (j = 1; j <= 11; j++) {
                                //获得当前单元格的button和select
                                nowbtn = document.querySelector(`button.z${i}_${j}`)
                                noworigin = document.querySelector(`div.z${i}_${j} select.begin`)
                                nowdestin = document.querySelector(`div.z${i}_${j} select.end`)
                                if (nowbtn.innerHTML == "有行程需求") {
                                    index = noworigin.selectedIndex
                                    orig = noworigin.options[index].value
                                    index = nowdestin.selectedIndex
                                    dest = nowdestin.options[index].value
                                } else {
                                    orig = "未填写"
                                    dest = "未填写"

                                }
                                $.ajax({
                                    url: "/auth/journeydata?week=" + i + "&" + "time=" + j + "&orig=" + orig + "&dest=" + dest + "&monday=" + printdatestring(thismonday) + "&userid=" + userid + "&submittime=" + nowTime
                                })
                            }
                        }
                    } else {
                        $.ajax({
                            url: "/auth/addnewjourney?time=" + printdatestring(thismonday) + "&id=" + userid + "&submittime=" + nowTime,//先增加一个新行程，再进行修改
                            success: function () {
                                for (i = 1; i <= 5; i++) {
                                    for (j = 1; j <= 11; j++) {
                                        //获得当前单元格的button和select
                                        nowbtn = document.querySelector(`button.z${i}_${j}`)
                                        noworigin = document.querySelector(`div.z${i}_${j} select.begin`)
                                        nowdestin = document.querySelector(`div.z${i}_${j} select.end`)
                                        if (nowbtn.innerHTML == "有行程需求") {
                                            index = noworigin.selectedIndex
                                            orig = noworigin.options[index].value
                                            index = nowdestin.selectedIndex
                                            dest = nowdestin.options[index].value
                                        } else {
                                            orig = "未填写"
                                            dest = "未填写"

                                        }
                                        $.ajax({
                                            url: "/auth/journeydata?week=" + i + "&" + "time=" + j + "&orig=" + orig + "&dest=" + dest + "&monday=" + printdatestring(thismonday) + "&userid=" + userid + "&submittime=" + nowTime
                                        })
                                    }
                                }
                            }
                        })
                    }
                }
            })
        }
})
if(timefromhistory){
    for(i=1;i<=5;i++){
        for(j=1;j<=11;j++){
            $.ajax({
                url:"/auth/getjourney?week="+i+"&time="+j+"&journeytime="+timefromhistory,
                success:function (result) {
                            i=+result["i"]
                            j=+result["j"]
                            nowbtn = document.querySelector(`button.z${i}_${j}`)
                            noworigin = document.querySelector(`div.z${i}_${j} select.begin`)
                            nowdestin = document.querySelector(`div.z${i}_${j} select.end`)
                        if(result["orig"]!=="未填写"){
                            nowbtn.innerHTML="有行程需求"
                            nowbtn.classList.add("checked")
                            console.log(result["orig"]+result["dest"])
                           console.log(i+""+j)
                            for(k=0;k<noworigin.options.length;k++){
                                if(result["orig"]==noworigin.options[k].value){
                                    noworigin.options[k].selected=true
                                }
                            }
                            for(k=0;k<nowdestin.options.length;k++){
                                if(result["dest"]==nowdestin.options[k].value){
                                    nowdestin.options[k].selected=true
                                }
                            }
                        }
                }
            })
        }
    }
}

