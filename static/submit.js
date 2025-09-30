const unamehead = document.querySelector('.headnav .username')
unamehead.innerHTML = localStorage.getItem('nowusername')
let nowusername = localStorage.getItem('nowusername')
let usernamearray = JSON.parse(localStorage.getItem("usernamearray"))
let id
let i = 0
let k = 0
let j = 0
let index
let beginoption
let endoption
let nbtn

let dataarray = JSON.parse(localStorage.getItem("dataarray"))
const btn11 = document.querySelector('.submitarea table .need11')
const btn12 = document.querySelector('.submitarea table .need12')
const btn13 = document.querySelector('.submitarea table .need13')
const btn14 = document.querySelector('.submitarea table .need14')
const btn15 = document.querySelector('.submitarea table .need15')
const btn21 = document.querySelector('.submitarea table .need21')
const btn22 = document.querySelector('.submitarea table .need22')
const btn23 = document.querySelector('.submitarea table .need23')
const btn24 = document.querySelector('.submitarea table .need24')
const btn25 = document.querySelector('.submitarea table .need25')
const btn31 = document.querySelector('.submitarea table .need31')
const btn32 = document.querySelector('.submitarea table .need32')
const btn33 = document.querySelector('.submitarea table .need33')
const btn34 = document.querySelector('.submitarea table .need34')
const btn35 = document.querySelector('.submitarea table .need35')
const btn41 = document.querySelector('.submitarea table .need41')
const btn42 = document.querySelector('.submitarea table .need42')
const btn43 = document.querySelector('.submitarea table .need43')
const btn44 = document.querySelector('.submitarea table .need44')
const btn45 = document.querySelector('.submitarea table .need45')
//先利用用户名找到对应的id
for (i = 0; i < usernamearray.length; i++) {
    if (usernamearray[i] === nowusername) {
        id = i

    }
}
btn11.addEventListener('click', function () {
    if (btn11.innerHTML === '无出行需求') {
        btn11.innerHTML = '有出行需求'
        btn11.classList.add('open')
        btn11.style.backgroundColor = '#007ACC'

    } else {
        btn11.innerHTML = '无出行需求'
        btn11.classList.remove('open')
        btn11.style.backgroundColor = 'green'
    }



})
btn12.addEventListener('click', function () {
    if (btn12.innerHTML === '无出行需求') {
        btn12.innerHTML = '有出行需求'
        btn12.classList.add('open')
        btn12.style.backgroundColor = '#007ACC'

    } else {
        btn12.innerHTML = '无出行需求'
        btn12.classList.remove('open')
        btn12.style.backgroundColor = 'green'
    }



})
btn13.addEventListener('click', function () {
    if (btn13.innerHTML === '无出行需求') {
        btn13.innerHTML = '有出行需求'
        btn13.classList.add('open')
        btn13.style.backgroundColor = '#007ACC'

    } else {
        btn13.innerHTML = '无出行需求'
        btn13.classList.remove('open')
        btn13.style.backgroundColor = 'green'
    } 4


})
btn14.addEventListener('click', function () {
    if (btn14.innerHTML === '无出行需求') {
        btn14.innerHTML = '有出行需求'
        btn14.classList.add('open')
        btn14.style.backgroundColor = '#007ACC'
    } else {
        btn14.innerHTML = '无出行需求'
        btn14.classList.remove('open')
        btn14.style.backgroundColor = 'green'
    }



})
btn15.addEventListener('click', function () {
    if (btn15.innerHTML === '无出行需求') {
        btn15.innerHTML = '有出行需求'
        btn15.classList.add('open')
        btn15.style.backgroundColor = '#007ACC'

    } else {
        btn15.innerHTML = '无出行需求'
        btn15.classList.remove('open')
        btn15.style.backgroundColor = 'green'
    }



})
btn21.addEventListener('click', function () {
    if (btn21.innerHTML === '无出行需求') {
        btn21.innerHTML = '有出行需求'
        btn21.classList.add('open')
        btn21.style.backgroundColor = '#007ACC'

    } else {
        btn21.innerHTML = '无出行需求'
        btn21.classList.remove('open')
        btn21.style.backgroundColor = 'green'
    }
})
btn22.addEventListener('click', function () {
    if (btn22.innerHTML === '无出行需求') {
        btn22.innerHTML = '有出行需求'
        btn22.classList.add('open')
        btn22.style.backgroundColor = '#007ACC'

    } else {
        btn22.innerHTML = '无出行需求'
        btn22.classList.remove('open')
        btn22.style.backgroundColor = 'green'
    }



})
btn23.addEventListener('click', function () {
    if (btn23.innerHTML === '无出行需求') {
        btn23.innerHTML = '有出行需求'
        btn23.classList.add('open')
        btn23.style.backgroundColor = '#007ACC'

    } else {
        btn23.innerHTML = '无出行需求'
        btn23.classList.remove('open')
        btn23.style.backgroundColor = 'green'
    }


})
btn24.addEventListener('click', function () {
    if (btn24.innerHTML === '无出行需求') {
        btn24.innerHTML = '有出行需求'
        btn24.classList.add('open')
        btn24.style.backgroundColor = '#007ACC'
    } else {
        btn24.innerHTML = '无出行需求'
        btn24.classList.remove('open')
        btn24.style.backgroundColor = 'green'
    }



})
btn25.addEventListener('click', function () {
    if (btn25.innerHTML === '无出行需求') {
        btn25.innerHTML = '有出行需求'
        btn25.classList.add('open')
        btn25.style.backgroundColor = '#007ACC'

    } else {
        btn25.innerHTML = '无出行需求'
        btn25.classList.remove('open')
        btn25.style.backgroundColor = 'green'
    }
})
btn31.addEventListener('click', function () {
    if (btn31.innerHTML === '无出行需求') {
        btn31.innerHTML = '有出行需求'
        btn31.classList.add('open')
        btn31.style.backgroundColor = '#007ACC'

    } else {
        btn31.innerHTML = '无出行需求'
        btn31.classList.remove('open')
        btn31.style.backgroundColor = 'green'
    }
})
btn32.addEventListener('click', function () {
    if (btn32.innerHTML === '无出行需求') {
        btn32.innerHTML = '有出行需求'
        btn32.classList.add('open')
        btn32.style.backgroundColor = '#007ACC'

    } else {
        btn32.innerHTML = '无出行需求'
        btn32.classList.remove('open')
        btn32.style.backgroundColor = 'green'
    }



})
btn33.addEventListener('click', function () {
    if (btn33.innerHTML === '无出行需求') {
        btn33.innerHTML = '有出行需求'
        btn33.classList.add('open')
        btn33.style.backgroundColor = '#007ACC'

    } else {
        btn33.innerHTML = '无出行需求'
        btn33.classList.remove('open')
        btn33.style.backgroundColor = 'green'
    }


})
btn34.addEventListener('click', function () {
    if (btn34.innerHTML === '无出行需求') {
        btn34.innerHTML = '有出行需求'
        btn34.classList.add('open')
        btn34.style.backgroundColor = '#007ACC'
    } else {
        btn34.innerHTML = '无出行需求'
        btn34.classList.remove('open')
        btn34.style.backgroundColor = 'green'
    }



})
btn35.addEventListener('click', function () {
    if (btn35.innerHTML === '无出行需求') {
        btn35.innerHTML = '有出行需求'
        btn35.classList.add('open')
        btn35.style.backgroundColor = '#007ACC'

    } else {
        btn35.innerHTML = '无出行需求'
        btn35.classList.remove('open')
        btn35.style.backgroundColor = 'green'
    }
})
btn41.addEventListener('click', function () {
    if (btn41.innerHTML === '无出行需求') {
        btn41.innerHTML = '有出行需求'
        btn41.classList.add('open')
        btn41.style.backgroundColor = '#007ACC'

    } else {
        btn41.innerHTML = '无出行需求'
        btn41.classList.remove('open')
        btn41.style.backgroundColor = 'green'
    }
})
btn42.addEventListener('click', function () {
    if (btn42.innerHTML === '无出行需求') {
        btn42.innerHTML = '有出行需求'
        btn42.classList.add('open')
        btn42.style.backgroundColor = '#007ACC'

    } else {
        btn42.innerHTML = '无出行需求'
        btn42.classList.remove('open')
        btn42.style.backgroundColor = 'green'
    }



})
btn43.addEventListener('click', function () {
    if (btn43.innerHTML === '无出行需求') {
        btn43.innerHTML = '有出行需求'
        btn43.classList.add('open')
        btn43.style.backgroundColor = '#007ACC'

    } else {
        btn43.innerHTML = '无出行需求'
        btn43.classList.remove('open')
        btn43.style.backgroundColor = 'green'
    }


})
btn44.addEventListener('click', function () {
    if (btn44.innerHTML === '无出行需求') {
        btn44.innerHTML = '有出行需求'
        btn44.classList.add('open')
        btn44.style.backgroundColor = '#007ACC'
    } else {
        btn44.innerHTML = '无出行需求'
        btn44.classList.remove('open')
        btn44.style.backgroundColor = 'green'
    }



})
btn45.addEventListener('click', function () {
    if (btn45.innerHTML === '无出行需求') {
        btn45.innerHTML = '有出行需求'
        btn45.classList.add('open')
        btn45.style.backgroundColor = '#007ACC'

    } else {
        btn45.innerHTML = '无出行需求'
        btn45.classList.remove('open')
        btn45.style.backgroundColor = 'green'
    }
})
const uploadbtn = document.querySelector('.submitarea .upload')
uploadbtn.addEventListener('click', function () {
    //接下来，读取界面上的所有数据，存入dataarray对应区域
    k = 0
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 4; j++) {
            nbtn = document.querySelector(`.need${j}${i}`)
            if (nbtn.innerHTML === '有出行需求') {
                beginoption = document.querySelector(`.begin.opt${j}${i}`)//获取周i的第j节课
                index = beginoption.selectedIndex
                begindata = +beginoption[index].value//获得选中的value并转化为数字
                endoption = document.querySelector(`.end.opt${j}${i}`)
                index = endoption.selectedIndex
                enddata = +endoption[index].value//获得选中的value并转化为数字
                dataarray[id * 40 + k] = begindata
                dataarray[id * 40 + k + 1] = enddata
            } else {
                //如果不是点了的按钮，则重置为0
                dataarray[id * 40 + k] = 0
                dataarray[id * 40 + k + 1] = 0
            }
            k += 2//无论是否是有效的按钮，都要跳过到下一个单元格
        }
    }
    localStorage.setItem("dataarray", JSON.stringify(dataarray))
    alert(`${unamehead.innerHTML},您的行程已提交！即将返回主界面`)
    window.location.href = './index'
})
for (i = 1; i <= 4; i++) {
    for (j = 1; j <= 5; j++) {
        beginoption = document.querySelector(`.begin.opt${i}${j}`)
        endoption = document.querySelector(`.end.opt${i}${j}`)
        if (dataarray[40 * id + 8 * j + 2 * i - 10] == 0) {
            beginoption.selectedIndex = 0
            endoption.selectedIndex = 0
        } else {
            nbtn = document.querySelector(`.submitarea table .need${i}${j}`)
            nbtn.innerHTML = '有出行需求'
            nbtn.classList.add('open')
            nbtn.style.backgroundColor = '#007ACC'
            beginoption.selectedIndex = dataarray[40 * id + 8 * j + 2 * i - 10] - 1
            endoption.selectedIndex = dataarray[40 * id + 8 * j + 2 * i - 9] - 1
        }
    }
}