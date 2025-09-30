let thismonday
let nextmonday
let nextmondaytime
let index
let origplace
let destplace
let weekday
let k=0
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
//
if(admin_weekpy){
    thismonday=new Date(admin_weekpy)
    MondayTime=thismonday.getTime()
    nextmondaytime=MondayTime+7*oneDayTime
    nextmonday=new Date(nextmondaytime)
}else{
    thismonday = new Date(MondayTime)//这一周的周一的date对象
    nextmondaytime=MondayTime+7*oneDayTime
    nextmonday = new Date(nextmondaytime)
}
datetimeinput=document.querySelector("div.datetime")
lastbtn=document.querySelector("button.datatime-s")
nextbtn=document.querySelector("button.datatime-x")
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
mondaytime=printdatestring(thismonday)
searchbtn=document.querySelector("img.search")
origselect=document.querySelector("select.begin")
destselect=document.querySelector("select.end")
weekdayselect=document.querySelector("select.weekday")
timeselect=document.querySelector("select.time")
if(admin_weekpy){
    for(k=0;k<origselect.options.length;k++){
        if(origselect.options[k].value==admin_origpy){
            origselect.options[k].selected="true"
        }
    }
    for(k=0;k<destselect.options.length;k++){
        if(destselect.options[k].value==admin_destpy){
           destselect.options[k].selected="true"
        }
    }
    for(k=0;k<weekdayselect.options.length;k++){
        if(weekdayselect.options[k].value==admin_weekdaypy){
           weekdayselect.options[k].selected="true"
        }
    }
     for(k=0;k<timeselect.options.length;k++){
        if(timeselect.options[k].value==admin_timepy){
           timeselect.options[k].selected="true"
        }
    }
}
searchbtn.addEventListener("click",function () {
    index=origselect.selectedIndex
    origplace=origselect[index].value
    index=destselect.selectedIndex
    destplace=destselect[index].value
    index=weekdayselect.selectedIndex
    weekday=weekdayselect[index].value
    index=timeselect.selectedIndex
    time=timeselect[index].value
    window.location.href="/auth/admin_searchjourney?week="+printdatestring(thismonday)+"&weekday="+weekday+"&time="+time+"&origplace="+origplace+"&destplace="+destplace
})
userbtnlist=document.querySelectorAll("div.popu")
console.log(userbtnlist.length)
for(k=0;k<userbtnlist.length;k++){
    userbtnlist[k].addEventListener("click",function () {
        this.classList.toggle("clicked")
    })
}