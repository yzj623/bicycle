let index
let weekdayvalue
let classvalue
let createdElement
let createdStart
let createdEnd
let createdNum
let createdNamelist
let createdName
let nowusername = localStorage.getItem('nowusername')
let headname = document.querySelector('.headnav .username')
let returnbutton = document.querySelector('.headnav .return')
let weekdayselect = document.querySelector('.requirementarea .weekday')
let classselect = document.querySelector('.requirementarea .class')
let search = document.querySelector('.requirementarea .search')
let requirementarea = document.querySelector('.requirementarea .container')
//获取准备写入新元素的区域
let dataarray = JSON.parse(localStorage.getItem("dataarray"))
let usernamearray = JSON.parse(localStorage.getItem("usernamearray"))
let childs
let startarray = []
let endarray = []
let applicantarray = []
let flagarray = []//这个数组用来对同一路线的用户进行分类
let count = 0
let i = 0
let j = 0
let n = 0
let num = 0
let usualkey = 0
let length
function valueToplace(x) {
    if (x == 1) {
        return '宿舍'
    }
    if (x == 2) {
        return '教学楼'
    }
    if (x == 3) {
        return '食堂'
    }
}
search.addEventListener('click', function () {
    //每次搜索之前，先初始化
    startarray = []
    endarray = []
    applicantarray = []
    count = 0
    //初始化完成
    index = weekdayselect.selectedIndex
    weekdayvalue = +weekdayselect[index].value
    index = classselect.selectedIndex
    classvalue = +classselect[index].value
    //点击搜索后，用weekdayvalue和classvalue存储选择筛选的两个条件，接下来将起点，终点，用户名数组进行完善
    for (i = 0; i < dataarray.length / 40; i++) {
        if (dataarray[i * 40 + 8 * weekdayvalue + 2 * classvalue - 10] != 0) {
            //如果不为0，则说明找到了有人在这个时间发出的请求
            startarray.push(dataarray[i * 40 + 8 * weekdayvalue + 2 * classvalue - 10])
            endarray.push(dataarray[i * 40 + 8 * weekdayvalue + 2 * classvalue - 9])
            applicantarray.push(usernamearray[i])
            count++
            //将这个时间点的请求起点和终点，用户名推入数组
        }
    }
    //搜索完成后，渲染子元素
    if (count == 0) {
        alert('未找到这一时间的请求')
    }
    //下面对用户进行分类
    flagarray = []
    n = 0
    //先初始化
    for (i = 0; i < applicantarray.length; i++) {
        for (j = 0; j < i; j++) {
            if ((startarray[j] == startarray[i]) && (endarray[j] == endarray[i])) {
                flagarray.push(flagarray[j])
                break
            }
        }
        //如果j=i说明没有任何一个用户与这个用户路线相同，新建flag
        if (j == i) {
            flagarray.push(n)
            n++//记号变量++,如果没有新建，则不需要++
        }
    }
    //下面开始渲染
    //注意，在渲染新元素之前，先把原来的元素删除干净
    childs = requirementarea.childNodes
    for (i = 0, length = childs.length; i < length; i++) {
        requirementarea.removeChild(childs[0])
    }
    //删除完毕
    //前面n的就是piece的数量，因为最后n是加了1的
    for (i = 0; i < n; i++) {//这里每一个i是一个类的用户
        createdElement = document.createElement('div')
        createdElement.classList.add('piece')
        //随意查找一个对应类的起点和终点，顺便计算出这个类的数量
        usualkey = 0//这个变量用来控制渲染次数，每次渲染前必须重置
        num = 0//统计总共用户数，必须初始化
        for (j = 0; j < flagarray.length; j++) {
            if (flagarray[j] == i) {
                //找到对应类
                num++
                if (usualkey == 0) {
                    usualkey = 1
                    createdStart = document.createElement('div')
                    createdStart.classList.add('start')
                    createdStart.innerHTML = `起点：${valueToplace(startarray[j])}`
                    createdEnd = document.createElement('div')
                    createdEnd.classList.add('end')
                    createdEnd.innerHTML = `终点：${valueToplace(endarray[j])}`
                }
            }
        }//渲染完起点和终点后，可以渲染用户数
        createdNum = document.createElement('div')
        createdNum.classList.add('num')
        createdNum.innerHTML = `用户数：${num}`
        //这里，用户数已经渲染完成，接下来要把用户列表也渲染出来，但是不display
        createdNamelist = document.createElement('div')
        createdNamelist.classList.add('namelist')
        count = 0
        for (j = 0; j < flagarray.length; j++) {
            if (flagarray[j] == i) {
                //找出所有属于i类的用户
                count++
                createdName = document.createElement('div')
                createdName.classList.add('name')
                createdName.innerHTML = `申请用户${count}:${applicantarray[j]}`
                createdNamelist.appendChild(createdName)
            }
        }
        createdElement.appendChild(createdStart)
        createdElement.appendChild(createdEnd)
        createdElement.appendChild(createdNum)
        createdElement.appendChild(createdNamelist)
        requirementarea.appendChild(createdElement)
    }
})
headname.innerHTML = `调度员${nowusername}，你好！`

returnbutton.addEventListener('click', function () {
    window.location.href = './index'
})