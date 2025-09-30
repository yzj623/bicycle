let nowlabel

function createDOM() {
    div=document.createElement("div")//标签整体
    img = document.createElement('img');
    placename=document.createElement("div")//地点名称
    text=document.createElement("div")//车辆数量
    div.style.backgroundColor="white"
    div.style.position="relative"
    // div.style.height = '120px';
    div.style.width = '100px';
    img.style.height = '60px';
    img.style.width = '80px';
    img.style.margin="0 auto"
    placename.style.width='100px'
    placename.style.height="30px"
    placename.innerHTML=this.properties.placename
    text.style.height="30px"
    text.style.width="100px"
    text.innerHTML=this.properties.text
    text.style.fontSize="18px"
    text.style.color="green"
    text.style.textAlign="center"
    placename.style.fontSize="16px"
    placename.style.color="black"
    placename.style.textAlign="center"
    img.src = "../static/images/smallbicycle.png";
    img.draggable = false;
    arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.bottom = '-19px';
    arrow.style.left = '60px';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderColor = 'white transparent transparent transparent';
    arrow.style.borderStyle = 'solid';
    arrow.style.borderWidth = '10px';
    arrow.style.overflow = 'hidden';
    div.appendChild(img)
    div.appendChild(text)
    div.appendChild(placename)
    div.appendChild(text)
    div.appendChild(arrow)
    return div;
}
//产生一个在地图上显示的标签
function addeve(label,text){
    label.addEventListener("click",function () {
       placenamediv.innerHTML=text
        placenamediv.style.lineHeight="50px"
        nowplace=text
        nowlabel=label
        numinput.value=""
   })
}//给每个地点添加点击事件
var map = new BMapGL.Map("mapcontainer");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(117.270968,31.845785), 18);  // 初始化地图,设置中心点坐标和地图级别
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.setHeading(64.5);   //设置地图旋转角度
    map.setTilt(50);       //设置地图的倾斜角度
var midzone_1 = new BMapGL.Point(117.269535,31.845333);
var midzone_2 = new BMapGL.Point(117.270968,31.845785);
var midcanteen = new BMapGL.Point(117.267604,31.844838);
var east_1teach = new BMapGL.Point(117.275199,31.844704);
var east_2teach = new BMapGL.Point(117.276609,31.84391);
var east_5teach = new BMapGL.Point(117.277633,31.846717);
var eastlib = new BMapGL.Point(117.27567,31.842844);
var eastground = new BMapGL.Point(117.273955,31.843236);
var eastyuan = new BMapGL.Point(117.276964,31.842875);
var eastlihua = new BMapGL.Point(117.27563,31.839616);
var easthospi = new BMapGL.Point(117.27294,31.839259);
var eastzone_1 = new BMapGL.Point(117.274714,31.84276);
var eastzone_2 = new BMapGL.Point(117.274759,31.842104);
var eastlitang = new BMapGL.Point(117.275145,31.840237);
var westlib = new BMapGL.Point(117.263503,31.845084);
var west_3teach = new BMapGL.Point(117.261881,31.844428);
var westzone_1 = new BMapGL.Point(117.26022,31.846008);
var westzone_2 = new BMapGL.Point(117.262097,31.846863);
var westcanteen = new BMapGL.Point(117.262097,31.846863);
//上述是各个重要地点的坐标
placenamediv=document.querySelector(".upgrade .placename")
nowplace=null
 midzone_1_label=new BMapGL.CustomOverlay(createDOM, {
    point:midzone_1,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"中区宿舍一区",
        text:bikedict["midzone_1"]
    }
});
   map.addOverlay(midzone_1_label);
   addeve(midzone_1_label,"中区宿舍一区")
   midzone_2_label=new BMapGL.CustomOverlay(createDOM, {
    point:midzone_2,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"中区宿舍二区",
        text:bikedict["midzone_2"]
    }
});
   map.addOverlay(midzone_2_label);
    addeve(midzone_2_label,"中区宿舍二区")
   midcanteen_label=new BMapGL.CustomOverlay(createDOM, {
    point:midcanteen,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"中区桃李苑",
        text:bikedict["midcanteen"]
    }
});
   map.addOverlay(midcanteen_label);
   addeve(midcanteen_label,"中区桃李苑")
   east_1teach_label=new BMapGL.CustomOverlay(createDOM, {
    point:east_1teach,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区一教",
        text:bikedict["east_1teach"]
    }
});
   map.addOverlay(east_1teach_label);
      addeve(east_1teach_label,"东区一教")

   east_2teach_label=new BMapGL.CustomOverlay(createDOM, {
    point:east_2teach,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区二教",
        text:bikedict["east_2teach"]
    }
});
   map.addOverlay(east_2teach_label);
   addeve(east_2teach_label,"东区二教")

   east_5teach_label=new BMapGL.CustomOverlay(createDOM, {
    point:east_5teach,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区五教",
        text:bikedict["east_5teach"]
    }
});
   map.addOverlay(east_5teach_label);
      addeve(east_5teach_label,"东区五教")

   eastlib_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastlib,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区图书馆",
        text:bikedict["eastlib"]
    }
});
   map.addOverlay(eastlib_label);
   addeve(eastlib_label,"东区图书馆")
   eastground_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastground,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区运动场",
        text:bikedict["eastground"]
    }
});
   map.addOverlay(eastground_label);
   addeve(eastground_label,"东区运动场")
   eastyuan_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastyuan,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区东苑餐厅",
        text:bikedict["eastyuan"]
    }
});
   map.addOverlay(eastyuan_label);
      addeve(eastyuan_label,"东区东苑餐厅")

   eastlihua_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastlihua,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区理化大楼",
        text:bikedict["eastlihua"]
    }
});
   map.addOverlay(eastlihua_label);
   addeve(eastlihua_label,"东区理化大楼")
   easthospi_label=new BMapGL.CustomOverlay(createDOM, {
    point:easthospi,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区校医院",
        text:bikedict["easthospi"]
    }
});
   map.addOverlay(easthospi_label);
   addeve(easthospi_label,"东区校医院")
   eastzone_1_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastzone_1,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区宿舍一区",
        text:bikedict["eastzone_1"]
    }
});
   map.addOverlay(eastzone_1_label);
   addeve(eastzone_1_label,"东区宿舍一区")
   eastzone_2_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastzone_2,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区宿舍二区",
        text:bikedict["eastzone_2"]
    }
});
   map.addOverlay(eastzone_2_label);
     addeve(eastzone_2_label,"东区宿舍二区")
   eastlitang_label=new BMapGL.CustomOverlay(createDOM, {
    point:eastlitang,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"东区大礼堂",
        text:bikedict["eastlitang"]
    }
});
   map.addOverlay(eastlitang_label);
   addeve(eastlitang_label,"东区大礼堂")
   westlib_label=new BMapGL.CustomOverlay(createDOM, {
    point:westlib,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"西区图书馆",
        text:bikedict["westlib"]
    }
});
   map.addOverlay(westlib_label);
    addeve(westlib_label,"西区图书馆")
   west_3teach_label=new BMapGL.CustomOverlay(createDOM, {
    point:west_3teach,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"西区三教",
        text:bikedict["west_3teach"]
    }
});
   map.addOverlay(west_3teach_label);
    addeve(west_3teach_label,"西区三教")
   westzone_1_label=new BMapGL.CustomOverlay(createDOM, {
    point:westzone_1,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"西区宿舍一区",
        text:bikedict["westzone_1"]
    }
});
   map.addOverlay(westzone_1_label);
     addeve(westzone_1_label,"西区宿舍一区")
   westzone_2_label=new BMapGL.CustomOverlay(createDOM, {
    point:westzone_2,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"西区宿舍二区",
        text:bikedict["westzone_2"]
    }
});
   map.addOverlay(westzone_2_label);
   addeve(westzone_2_label,"西区宿舍二区")
   westcanteen_label=new BMapGL.CustomOverlay(createDOM, {
    point:westcanteen,
    opacity: 0.5,
    map: map,
    offsetY: -10,
    properties: {
        placename:"西区学生食堂",
        text:bikedict["westcanteen"]
    }
});
   map.addOverlay(westcanteen_label);
   addeve(westcanteen_label,"西区学生食堂")

upgradebtn=document.querySelector(".upgrade button")
numinput=document.querySelector(".upgrade input")
//更新标签内容，实际上是删除然后新建标签
/*function recover(label,point,placename){
       map.removeOverlay(label)
             label=new BMapGL.CustomOverlay(createDOM, {
                point:point,
                opacity: 0.5,
                map: map,
                offsetY: -10,
                properties: {
                    placename:placename,
                    text:numinput.value
                }
            });
            map.addOverlay(label)
            addeve(label,placename)
}*/
function recover(label,point,placename){
    label.setProperties({
        text:numinput.value
    })
}

span_1=document.querySelector(".inputbox span:nth-child(2)")
span_2=document.querySelector(".inputbox span:nth-child(3)")
span_3=document.querySelector(".inputbox span:nth-child(4)")
span_4=document.querySelector(".inputbox span:nth-child(5)")
let upgradekey=0
    upgradebtn.addEventListener("click",function () {
    console.log(numinput.value)
    if(numinput.value!=""){
        $.ajax({
        url:"/auth/upgradebikedata?place="+nowplace+"&num="+numinput.value
        })
        switch (nowplace){
        case "中区宿舍一区":
            recover(midzone_1_label,midzone_1,nowplace)
            break
        case "中区宿舍二区":
            recover(midzone_2_label,midzone_2,nowplace)
            break
        case "中区桃李苑":
            recover(midcanteen_label,midcanteen,nowplace)
            break
        case "东区一教":
            recover(east_1teach_label,east_1teach,nowplace)
            break
        case "东区二教":
            recover(east_2teach_label,east_2teach,nowplace)
            break
        case "东区五教":
            recover(east_5teach_label,east_5teach,nowplace)
            break
        case "东区图书馆":
            recover(eastlib_label,eastlib,nowplace)
            break
        case "东区运动场":
            recover(eastground_label,eastground,nowplace)
            break
        case "东区东苑餐厅":
            recover(eastyuan_label,eastyuan,nowplace)
            break
        case "东区理化大楼":
            recover(eastlihua_label,eastlihua,nowplace)
            break
        case "东区校医院":
            recover(easthospi_label,easthospi,nowplace)
            break
        case "东区宿舍一区":
            recover(eastzone_1_label,eastzone_1,nowplace)
            break
        case "东区宿舍二区":
            recover(eastzone_2_label,eastzone_2,nowplace)
            break
        case "东区大礼堂":
            recover(eastlitang_label,eastlitang,nowplace)
            break
        case "西区图书馆":
            recover(westlib_label,westlib,nowplace)
            break
        case "西区三教":
            recover(west_3teach_label,west_3teach,nowplace)
            break
        case "西区宿舍一区":
            recover(westzone_1_label,westzone_1,nowplace)
            break
        case "西区宿舍二区":
            recover(westzone_2_label,westzone_2,nowplace)
            break
        case "西区学生食堂":
            recover(westcanteen_label,westcanteen,nowplace)
            break
    }
        if(upgradekey==0){
            upgradekey=1
            span_1.style.animation="animate1 1.5s ease-in forwards"
        span_2.style.animation="animate2 1.5s ease-in forwards"
        span_3.style.animation="animate3 1.5s ease-in forwards"
        span_4.style.animation="animate4 1.5s ease-in forwards"
        span_1.style.background="linear-gradient(90deg,transparent,#03e9f4)"
        span_2.style.background="linear-gradient(180deg,transparent,#03e9f4)"
        span_3.style.background="linear-gradient(270deg,transparent,#03e9f4)"
        span_4.style.background="linear-gradient(360deg,transparent,#03e9f4)"
    timer=setInterval(function (){
        span_1.style.animation=""
        span_2.style.animation=""
        span_3.style.animation=""
        span_4.style.animation=""
        span_1.style.background=""
        span_2.style.background=""
        span_3.style.background=""
        span_4.style.background=""
        upgradekey=0
        clearInterval(timer)
    },1500)
        }//优化按钮动画
    }
    else{
        alert("请输入有效的数字")
    }
})


