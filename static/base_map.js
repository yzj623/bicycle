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






