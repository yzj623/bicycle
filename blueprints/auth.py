from flask import Blueprint,g
from flask import render_template,redirect,session
from exts import mail,db
from flask_mail import Message
from flask import request,jsonify
from models import email_captcha,User,journeydatamodel,bikedata,comment,reply
from .forms import registerform
from werkzeug.security import generate_password_hash,check_password_hash
import string
import random
import datetime
bp=Blueprint("auth",__name__,url_prefix="/auth")

class smalljourney():
    def __init__(self,orig,dest,user):
        self.orig=orig
        self.dest=dest
        self.user=user
    orig="default"
    dest="default"
    user="default"
class finaljourney():
    def __init__(self,orig,dest,users=[],length=0):
        self.orig=orig
        self.dest=dest
        self.users=users
        self.length=length
    orig="default"
    dest="default"
    users=[]
    length=0

class testsugg():
    def __init__(self,orig,dest,num):
        self.orig=orig
        self.dest=dest
        self.num=num

    orig=0
    dest=0
    num=0
class suggest():
    def __init__(self,orig,dest,num):
        self.orig=orig
        self.dest=dest
        self.num=num

    orig=""
    dest=""
    num=""


##这个函数把调度对各个地点造成的影响用字符串描述在anslist中
##def newsuggestion(i,j,anslist):
def FromxyToItem(week,time,orig,dest,journey):
    if week=="1":
        if time=="1":
            journey.orig1_1 = orig
            journey.dest1_1 = dest
        if time=="2":
            journey.orig1_2 = orig
            journey.dest1_2 = dest
        if time == "3":
            journey.orig1_3 = orig
            journey.dest1_3 = dest
        if time =="4":
            journey.orig1_4 = orig
            journey.dest1_4 = dest
        if time =="5":
            journey.orig1_5 = orig
            journey.dest1_5 = dest
        if time=="6":
            journey.orig1_6 = orig
            journey.dest1_6 = dest
        if time=="7":
            journey.orig1_7 = orig
            journey.dest1_7 = dest
        if time=="8":
            journey.orig1_8 = orig
            journey.dest1_8 = dest
        if time=="9":
            journey.orig1_9 = orig
            journey.dest1_9 = dest
        if time=="10":
            journey.orig1_10 = orig
            journey.dest1_10 = dest
        if time=="11":
            journey.orig1_11 = orig
            journey.dest1_11 = dest
    if week=="2":
        if time=="1":
            journey.orig2_1 = orig
            journey.dest2_1 = dest
        if time=="2":
            journey.orig2_2 = orig
            journey.dest2_2 = dest
        if time == "3":
            journey.orig2_3 = orig
            journey.dest2_3 = dest
        if time =="4":
            journey.orig2_4 = orig
            journey.dest2_4 = dest
        if time =="5":
            journey.orig2_5 = orig
            journey.dest2_5 = dest
        if time=="6":
            journey.orig2_6 = orig
            journey.dest2_6 = dest
        if time=="7":
            journey.orig2_7 = orig
            journey.dest2_7 = dest
        if time=="8":
            journey.orig2_8 = orig
            journey.dest2_8 = dest
        if time=="9":
            journey.orig2_9 = orig
            journey.dest2_9 = dest
        if time=="10":
            journey.orig2_10 = orig
            journey.dest2_10 = dest
        if time=="11":
            journey.orig2_11 = orig
            journey.dest2_11 = dest
    if week=="3":
        if time=="1":
            journey.orig3_1 = orig
            journey.dest3_1 = dest
        if time=="2":
            journey.orig3_2 = orig
            journey.dest3_2 = dest
        if time == "3":
            journey.orig3_3 = orig
            journey.dest3_3 = dest
        if time =="4":
            journey.orig3_4 = orig
            journey.dest3_4 = dest
        if time =="5":
            journey.orig3_5 = orig
            journey.dest3_5 = dest
        if time=="6":
            journey.orig3_6 = orig
            journey.dest3_6 = dest
        if time=="7":
            journey.orig3_7 = orig
            journey.dest3_7 = dest
        if time=="8":
            journey.orig3_8 = orig
            journey.dest3_8 = dest
        if time=="9":
            journey.orig3_9 = orig
            journey.dest3_9 = dest
        if time=="10":
            journey.orig3_10 = orig
            journey.dest3_10 = dest
        if time=="11":
            journey.orig3_11 = orig
            journey.dest3_11 = dest
    if week=="4":
        if time=="1":
            journey.orig4_1 = orig
            journey.dest4_1 = dest
        if time=="2":
            journey.orig4_2 = orig
            journey.dest4_2 = dest
        if time == "3":
            journey.orig4_3 = orig
            journey.dest4_3 = dest
        if time =="4":
            journey.orig4_4 = orig
            journey.dest4_4 = dest
        if time =="5":
            journey.orig4_5 = orig
            journey.dest4_5 = dest
        if time=="6":
            journey.orig4_6 = orig
            journey.dest4_6 = dest
        if time=="7":
            journey.orig4_7 = orig
            journey.dest4_7 = dest
        if time=="8":
            journey.orig4_8 = orig
            journey.dest4_8 = dest
        if time=="9":
            journey.orig4_9 = orig
            journey.dest4_9 = dest
        if time=="10":
            journey.orig4_10 = orig
            journey.dest4_10 = dest
        if time=="11":
            journey.orig4_11 = orig
            journey.dest4_11 = dest
    if week=="5":
        if time=="1":
            journey.orig5_1 = orig
            journey.dest5_1 = dest
        if time=="2":
            journey.orig5_2 = orig
            journey.dest5_2 = dest
        if time == "3":
            journey.orig5_3 = orig
            journey.dest5_3 = dest
        if time =="4":
            journey.orig5_4 = orig
            journey.dest5_4 = dest
        if time =="5":
            journey.orig5_5 = orig
            journey.dest5_5 = dest
        if time=="6":
            journey.orig5_6 = orig
            journey.dest5_6 = dest
        if time=="7":
            journey.orig5_7 = orig
            journey.dest5_7 = dest
        if time=="8":
            journey.orig5_8 = orig
            journey.dest5_8 = dest
        if time=="9":
            journey.orig5_9 = orig
            journey.dest5_9 = dest
        if time=="10":
            journey.orig5_10 = orig
            journey.dest5_10 = dest
        if time=="11":
            journey.orig5_11 = orig
            journey.dest5_11 = dest

# def FromxyToItem(week,time,orig,dest,journey):
#     match week:
#         case "1":
#             match time:
#                 case "1":
#                     journey.orig1_1=orig
#                     journey.dest1_1 =dest
#                 case "2":
#                     journey.orig1_2=orig
#                     journey.dest1_2 =dest
#                 case "3":
#                     journey.orig1_3=orig
#                     journey.dest1_3=dest
#                 case "4":
#                     journey.orig1_4=orig
#                     journey.dest1_4 = dest
#                 case "5":
#                     journey.orig1_5=orig
#                     journey.dest1_5 = dest
#                 case "6":
#                     journey.orig1_6 = orig
#                     journey.dest1_6 = dest
#                 case "7":
#                     journey.orig1_7 = orig
#                     journey.dest1_7 = dest
#                 case "8":
#                     journey.orig1_8 = orig
#                     journey.dest1_8 = dest
#                 case "9":
#                     journey.orig1_9 = orig
#                     journey.dest1_9 = dest
#                 case "10":
#                     journey.orig1_10 = orig
#                     journey.dest1_10 = dest
#                 case "11":
#                     journey.orig1_11 = orig
#                     journey.dest1_11 = dest
#         case "2":
#             match time:
#                 case "1":
#                     journey.orig2_1 = orig
#                     journey.dest2_1=  dest
#                 case "2":
#                     journey.orig2_2 = orig
#                     journey.dest2_2 = dest
#                 case "3":
#                     journey.orig2_3 = orig
#                     journey.dest2_3 = dest
#                 case "4":
#                     journey.orig2_4 = orig
#                     journey.dest2_4 = dest
#                 case "5":
#                     journey.orig2_5 = orig
#                     journey.dest2_5 = dest
#                 case "6":
#                     journey.orig2_6 = orig
#                     journey.dest2_6 = dest
#                 case "7":
#                     journey.orig2_7 = orig
#                     journey.dest2_7 = dest
#                 case "8":
#                     journey.orig2_8 = orig
#                     journey.dest2_8 = dest
#                 case "9":
#                     journey.orig2_9 = orig
#                     journey.dest2_9 = dest
#                 case "10":
#                     journey.orig2_10 = orig
#                     journey.dest2_10 = dest
#                 case "11":
#                     journey.orig2_11 = orig
#                     journey.dest2_11 = dest
#         case "3":
#             match time:
#                 case "1":
#                     journey.orig3_1 = orig
#                     journey.dest3_1 = dest
#                 case "2":
#                     journey.orig3_2 = orig
#                     journey.dest3_2 = dest
#                 case "3":
#                     journey.orig3_3 = orig
#                     journey.dest3_3 = dest
#                 case "4":
#                     journey.orig3_4 = orig
#                     journey.dest3_4 = dest
#                 case "5":
#                     journey.orig3_5 = orig
#                     journey.dest3_5 = dest
#                 case "6":
#                     journey.orig3_6 = orig
#                     journey.dest3_6 = dest
#                 case "7":
#                     journey.orig3_7 = orig
#                     journey.dest3_7 = dest
#                 case "8":
#                     journey.orig3_8 = orig
#                     journey.dest3_8 = dest
#                 case "9":
#                     journey.orig3_9 = orig
#                     journey.dest3_9 = dest
#                 case "10":
#                     journey.orig3_10 = orig
#                     journey.dest3_10 = dest
#                 case "11":
#                     journey.orig3_11 = orig
#                     journey.dest3_11 = dest
#         case "4":
#             match time:
#                 case "1":
#                     journey.orig4_1 = orig
#                     journey.dest4_1 = dest
#                 case "2":
#                     journey.orig4_2 = orig
#                     journey.dest4_2 = dest
#                 case "3":
#                     journey.orig4_3 = orig
#                     journey.dest4_3 = dest
#                 case "4":
#                     journey.orig4_4 = orig
#                     journey.dest4_4 = dest
#                 case "5":
#                     journey.orig4_5 = orig
#                     journey.dest4_5 = dest
#                 case "6":
#                     journey.orig4_6 = orig
#                     journey.dest4_6 = dest
#                 case "7":
#                     journey.orig4_7 = orig
#                     journey.dest4_7 = dest
#                 case "8":
#                     journey.orig4_8 = orig
#                     journey.dest4_8 = dest
#                 case "9":
#                     journey.orig4_9 = orig
#                     journey.dest4_9 = dest
#                 case "10":
#                     journey.orig4_10 = orig
#                     journey.dest4_10 = dest
#                 case "11":
#                     journey.orig4_11 = orig
#                     journey.dest4_11 = dest
#         case "5":
#             match time:
#                 case "1":
#                     journey.orig5_1 = orig
#                     journey.dest5_1 = dest
#                 case "2":
#                     journey.orig5_2 = orig
#                     journey.dest5_2 = dest
#                 case "3":
#                     journey.orig5_3 = orig
#                     journey.dest5_3 = dest
#                 case "4":
#                     journey.orig5_4 = orig
#                     journey.dest5_4 = dest
#                 case "5":
#                     journey.orig5_5 = orig
#                     journey.dest5_5 = dest
#                 case "6":
#                     journey.orig5_6 = orig
#                     journey.dest5_6 = dest
#                 case "7":
#                     journey.orig5_7 = orig
#                     journey.dest5_7 = dest
#                 case "8":
#                     journey.orig5_8 = orig
#                     journey.dest5_8 = dest
#                 case "9":
#                     journey.orig5_9 = orig
#                     journey.dest5_9 = dest
#                 case "10":
#                     journey.orig5_10 = orig
#                     journey.dest5_10 = dest
#                 case "11":
#                     journey.orig5_11 = orig
#                     journey.dest5_11 = dest

def upgrade(item,placename,num):
    if placename=="中区宿舍一区":
        item.midzone_1 = num
        return
    if placename == "中区宿舍二区":
        item.midzone_2 = num
        return
    if placename == "中区桃李苑":
        item.midcanteen = num
        return
    if placename == "东区一教":
        item.east_1teach = num
        return
    if placename == "东区二教":
        item.east_2teach = num
    if placename == "东区五教":
        item.east_5teach = num
    if placename == "东区图书馆":
        item.eastlib = num
    if placename == "东区运动场":
        item.eastground = num
    if placename == "东区东苑餐厅":
        item.eastyuan = num
    if placename == "东区理化大楼":
        item.eastlihua = num
    if placename == "东区校医院":
        item.easthospi = num
        return
    if placename == "东区宿舍一区":
        item.eastzone_1 = num
        return
    if placename == "东区宿舍二区":
        item.eastzone_2 = num
        return
    if placename == "东区大礼堂":
        item.eastlitang = num
        return
    if placename == "西区图书馆":
        item.westlib = num
        return
    if placename == "西区三教":
        item.west_3teach = num
        return
    if placename == "西区宿舍一区":
        item.westzone_1 = num
        return
    if placename == "西区宿舍二区":
        item.westzone_2 = num
        return
    if placename == "西区学生食堂":
        item.westcanteen = num
        return




# def upgrade(item,placename,num):
#     match placename:
#         case "中区宿舍一区":
#             item.midzone_1=num
#         case "中区宿舍二区":
#             item.midzone_2=num
#         case "中区桃李苑":
#             item.midcanteen = num
#         case "东区一教":
#             item.east_1teach = num
#         case "东区二教":
#             item.east_2teach = num
#         case "东区五教":
#             item.east_5teach = num
#         case "东区图书馆":
#             item.eastlib = num
#         case "东区运动场":
#             item.eastground = num
#         case "东区东苑餐厅":
#             item.eastyuan = num
#         case "东区理化大楼":
#             item.eastlihua = num
#         case "东区校医院":
#             item.easthospi = num
#         case "东区宿舍一区":
#             item.eastzone_1 = num
#         case "东区宿舍二区":
#             item.eastzone_2 = num
#         case "东区大礼堂":
#             item.eastlitang = num
#         case "西区图书馆":
#             item.westlib = num
#         case "西区三教":
#             item.west_3teach = num
#         case "西区宿舍一区":
#             item.westzone_1 = num
#         case "西区宿舍二区":
#             item.westzone_2 = num
#         case "西区学生食堂":
#             item.westcanteen = num
#     db.session.commit()


def test(user,orig):
    user.orig1_1=orig
#这是一个带前缀的蓝图，会自动给其下注册的路由加上/auth
@bp.route("/index")
def index():
    return render_template("index.html")
@bp.route("/register",methods=['GET','POST'])
#注册页面的视图函数
def register():
    if request.method=='GET':
        return render_template("register.html")
    else:
        #如果是post提交表单，那么先检验表单正确性，然后进行注册操作
            form=registerform(request.form)
            email=form.email.data
            username=form.username.data
            password=form.password.data
            newuser=User(email=email,username=username,password=password)
            db.session.add(newuser)
            db.session.commit()
            return render_template("index.html")
@bp.route("/sendemail")
def send_email():
    message=Message(subject="测试邮件！！！",recipients=["yzj623@mail.ustc.edu.cn"],body="测试")
    mail.send(message)
    return "邮件发送成功！"
@bp.route("/sendcaptcha")
def send_captcha():
    dest_email=request.args.get("email")
    source=string.digits*6
    captcha=random.sample(source,6)
    captcha="".join(captcha)#把列表转化为字符串
    message=Message(subject="请查收您的验证码",recipients=[dest_email],body=f"你正在注册中科大共享单车管理系统账号，您的验证码为{captcha}，若不是您本人操作，请忽略此邮件")
    find_email=email_captcha.query.filter_by(email=dest_email).first()
    #先查找之前是否已经发送过验证码，如果已发送则修改，否则新建
    if find_email:
        find_email.captcha = captcha
        db.session.commit()
        print(captcha)
    else:
        print("未找到")
        print(captcha)
        newcaptcha = email_captcha(email=dest_email, captcha=captcha)
        db.session.add(newcaptcha)
        db.session.commit()
    #在数据库中存储完成之后，再发送邮件
    result=mail.send(message)
    print(result)
    return captcha#将发送出去的验证码返回给js
@bp.route("/administrator")
def administrator():
    return render_template("administrator.html")
@bp.route("/searchfor")
def searchfor():
    email=request.args.get("email")
    result=email_captcha.query.filter_by(email=email).first()
    captcha=result.captcha
    return captcha
@bp.route("/searchusername")
def searchusername():
    username=request.args.get("username")
    user=User.query.filter_by(username=username).first()
    yes='1'
    no='0'
    if user:
        return yes
    else:
        return no
@bp.route("/searchemail")
def searchemail():
    email=request.args.get("email")
    user=User.query.filter_by(email=email).first()
    if user:
        print(user.username)
        return "found"
    else:
        return "notfound"
@bp.route("/searchuser")
#登录时访问这个路由
def searchuser():
    email=request.args.get("email")
    password=request.args.get("password")
    user=User.query.filter_by(email=email).first()
    if not user:
        print("未找到对应用户")
        return "notfound"
    else:
        if user.password==password:
            result=1
        else:
            result=0

        if result:
            session['user_id']=user.id
            identity=user.identity
            return identity
        else:
            print("密码错误")
            return "notfound"
@bp.route("/findback")
def findback():
    return render_template("findback.html")
@bp.route("/sendfindback")
def sendfindback():
    dest_email = request.args.get("email")
    source = string.digits * 6
    captcha = random.sample(source, 6)
    captcha = "".join(captcha)  # 把列表转化为字符串
    message = Message(subject="请查收您的验证码", recipients=[dest_email],
                      body=f"您正在修改您的中科大共享单车管理系统账号的密码，您的验证码为{captcha}，若不是您本人操作，请忽略此邮件")
    find_email = email_captcha.query.filter_by(email=dest_email).first()
    # 先查找之前是否已经发送过验证码，如果已发送则修改，否则新建
    if find_email:
        find_email.captcha = captcha
        db.session.commit()
        print(captcha)
    else:
        print("未找到")
        newcaptcha = email_captcha(email=dest_email, captcha=captcha)
        db.session.add(newcaptcha)
        db.session.commit()
    # 在数据库中存储完成之后，再发送邮件
    mail.send(message)
    return captcha  # 将发送出去的验证码返回给js
@bp.route("/changeuser")
def changeuser():
    username=request.args.get("username")
    email=request.args.get("email")
    pwd=request.args.get("pwd")
    user=User.query.filter_by(email=email).first()
    user.password=pwd
    user.username=username
    db.session.commit()
    return "done"
@bp.route("/newindex",methods=['GET','POST'])
def newindex():
   if request.method=="GET":
       return render_template("newindex.html")
   else:
    #提交表单请求，仿照之前的
    form = registerform(request.form)
    email = form.email.data
    username = form.username.data
    password = form.password.data
    if password=="iamadministrator":
        newuser = User(email=email, username=username, password=password,identity="admin")
        db.session.add(newuser)
        db.session.commit()
    else:
        newuser = User(email=email, username=username, password=password, identity="guest")
        db.session.add(newuser)
        db.session.commit()
    return "success"
@bp.route("/base")
def base():
    return render_template("base.html")
@bp.route("/backout")
def backout():
    session.clear()
    return redirect("/auth/newindex")
@bp.route("/submit")
def submit():
    journeytime=request.args.get("journeytime")
    print(journeytime)
    if not journeytime:
        return render_template("base_submit.html",journeytime=None)
    else:
        return render_template("base_submit.html",journeytime=journeytime)
@bp.route("/getuserid")
def getuserid():
    userid=session.get("user_id")
    return {"nowid":userid}
@bp.route("/searchjourney")
def searchjourney():
    time=request.args.get("time")
    id=request.args.get("id")
    journey=journeydatamodel.query.filter_by(time=time).filter_by(id=id).first()
    if journey:
        return "change"
    else:
        return "add"
@bp.route("/addnewjourney")
def addnewjourney():
    time=request.args.get("time")
    id=request.args.get("id")
    submittime=request.args.get("submittime")
    journey=journeydatamodel(time=time,id=id,submittime=submittime)
    db.session.add(journey)
    db.session.commit()
    return "done"
@bp.route("/journeydata")
def journeydata():
    #只要进入此路由务必保证已经建立了这条journey
    week=request.args.get("week")
    time=request.args.get("time")
    orig=request.args.get("orig")
    dest=request.args.get("dest")
    monday=request.args.get("monday")
    userid=request.args.get("userid")
    submittime=request.args.get("submittime")
    print("change")
    journey = journeydatamodel.query.filter_by(id=userid).filter_by(time=monday).first()
    FromxyToItem(week,time,orig,dest,journey)
    journey.time=monday
    journey.submittime=submittime
    db.session.commit()
    return "done"
@bp.route("/history")
def history():
    list = journeydatamodel.query.filter_by(id=g.user.id)
    list = sorted(list, key=lambda list: list.submittime, reverse=True)
    return render_template("base_history.html",list=list)
@bp.route("/delete")
def delete():
    time=request.args.get("time")
    id=request.args.get("id")
    journey=journeydatamodel.query.filter_by(id=g.user.id).filter_by(time=time).first()
    db.session.delete(journey)
    db.session.commit()
    return "done"
@bp.route("/getjourney")
def getjourney():
    week=request.args.get("week")
    time=request.args.get("time")
    journeytime=request.args.get("journeytime")
    journey=journeydatamodel.query.filter_by(id=g.user.id).filter_by(time=journeytime).first()
    orig=journey.__dict__["orig"+week+"_"+time]
    dest = journey.__dict__["dest" + week + "_" + time]
    return {"orig":orig,"dest":dest,"i":week,"j":time}
@bp.route("/map")
def map():
    bikeitem = bikedata.query.first()
    if bikeitem:
        bikedict = {"midzone_1": bikeitem.midzone_1, "midzone_2": bikeitem.midzone_2, "midcanteen": bikeitem.midcanteen,
                    "east_1teach": bikeitem.east_1teach, "east_2teach": bikeitem.east_2teach,
                    "east_5teach": bikeitem.east_5teach, "eastlib": bikeitem.eastlib, "eastground": bikeitem.eastground,
                    "eastyuan": bikeitem.eastyuan, "eastlihua": bikeitem.eastlihua, "easthospi": bikeitem.easthospi,
                    "eastzone_1": bikeitem.eastzone_1, "eastzone_2": bikeitem.eastzone_2,
                    "eastlitang": bikeitem.eastlitang, "westlib": bikeitem.westlib, "west_3teach": bikeitem.west_3teach,
                    "westzone_1": bikeitem.westzone_1, "westzone_2": bikeitem.westzone_2,
                    "westcanteen": bikeitem.westcanteen}
    else:
        ##否则，将字典初始化，返回给html
        bikedict = {"midzone_1": "未填写", "midzone_2": "未填写", "midcanteen": "未填写",
                    "east_1teach": "未填写", "east_2teach": "未填写",
                    "east_5teach": "未填写", "eastlib": "未填写", "eastground": "未填写",
                    "eastyuan": "未填写", "eastlihua": "未填写", "easthospi": "未填写",
                    "eastzone_1": "未填写", "eastzone_2": "未填写",
                    "eastlitang": "未填写", "westlib": "未填写", "west_3teach":"未填写",
                    "westzone_1": "未填写", "westzone_2": "未填写",
                    "westcanteen": "未填写"}
    return render_template("base_map.html",bikedict=bikedict)
@bp.route("/admin")
def admin():
    bikeitem = bikedata.query.first()
    if bikeitem:
        bikedict = {"midzone_1": bikeitem.midzone_1, "midzone_2": bikeitem.midzone_2, "midcanteen": bikeitem.midcanteen,
                    "east_1teach": bikeitem.east_1teach, "east_2teach": bikeitem.east_2teach,
                    "east_5teach": bikeitem.east_5teach, "eastlib": bikeitem.eastlib, "eastground": bikeitem.eastground,
                    "eastyuan": bikeitem.eastyuan, "eastlihua": bikeitem.eastlihua, "easthospi": bikeitem.easthospi,
                    "eastzone_1": bikeitem.eastzone_1, "eastzone_2": bikeitem.eastzone_2,
                    "eastlitang": bikeitem.eastlitang, "westlib": bikeitem.westlib, "west_3teach": bikeitem.west_3teach,
                    "westzone_1": bikeitem.westzone_1, "westzone_2": bikeitem.westzone_2,
                    "westcanteen": bikeitem.westcanteen}

    else:
        ##否则，将字典初始化，返回给html
        bikedict = {"midzone_1": "0", "midzone_2": "0", "midcanteen": "0",
                    "east_1teach": "0", "east_2teach": "0",
                    "east_5teach": "0", "eastlib": "0", "eastground": "0",
                    "eastyuan": "0", "eastlihua": "0", "easthospi": "0",
                    "eastzone_1": "0", "eastzone_2": "0",
                    "eastlitang": "0", "westlib": "0", "west_3teach":"0",
                    "westzone_1": "0", "westzone_2": "0",
                    "westcanteen": "0"}
    return render_template("adminbase_upgrade.html",bikedict=bikedict)
@bp.route("/upgradebikedata")
def upgradebikedata():
    ##获得要更新的地点以及数量后，开始更新
    place=request.args.get("place")
    num=request.args.get("num")
    item=bikedata.query.first()
    print("输入的数量为：")
    print(num)
    if item:
        print("starttoupgrade")
        upgrade(item,place,num)
        db.session.commit()
    else:
        ##如果是第一次使用，item一定为空，则需要先创建
        print("start a new db")
        item=bikedata()
        item.midzone_1='0'
        item.midzone_2 = '0'
        item.midcanteen = '0'
        item.east_1teach = '0'
        item.east_2teach = '0'
        item.east_5teach = '0'
        item.eastlib = '0'
        item.eastground = '0'
        item.eastyuan = '0'
        item.eastlihua = '0'
        item.easthospi = '0'
        item.eastzone_1 = '0'
        item.eastzone_2 = '0'
        item.eastlitang = '0'
        item.westlib = '0'
        item.west_3teach = '0'
        item.westzone_1 = '0'
        item.westzone_2 = '0'
        item.westcanteen = '0'

        db.session.add(item)
        upgrade(item,place,num)
        db.session.commit()
    return "done"
@bp.route("/admin_search")
def admin_search():
    return render_template("adminbase_search.html")
@bp.route("/admin_searchjourney")
def admin_searchjourney():
    searchkey=0#用来辅助搜索
    list=[]#初步将未填写的行程排除
    finallist=[]#最终提交给网页的列表
    week=request.args.get("week")
    weekday=request.args.get("weekday")
    time=request.args.get("time")
    origplace=request.args.get("origplace")
    destplace=request.args.get("destplace")
    journeylist=journeydatamodel.query.filter_by(time=week)
    if origplace=="default":
        if destplace=="default":
            #如果没有任何要求，则可以把全部的行程推入list
            for item in journeylist:
                if item.__dict__["orig" + weekday + "_" + time] != "未填写":
                    username=User.query.filter_by(id=item.id).first().username
                    smalljourneyitem = smalljourney(orig=item.__dict__["orig" + weekday + "_" + time],dest=item.__dict__["dest" + weekday + "_" + time],user=username)
                    list.append(smalljourneyitem)
        else:
            for item in journeylist:
                if item.__dict__["dest" + weekday + "_" + time] == destplace:
                    username = User.query.filter_by(id=item.id).first().username
                    smalljourneyitem = smalljourney(orig=item.__dict__["orig" + weekday + "_" + time],
                                                    dest=item.__dict__["dest" + weekday + "_" + time], user=username)
                    list.append(smalljourneyitem)
    else:
        if destplace=="default":
            for item in journeylist:
                if item.__dict__["orig" + weekday + "_" + time] == origplace:
                    username = User.query.filter_by(id=item.id).first().username
                    smalljourneyitem = smalljourney(orig=item.__dict__["orig" + weekday + "_" + time],
                                                    dest=item.__dict__["dest" + weekday + "_" + time], user=username)
                    list.append(smalljourneyitem)
        else:
            for item in journeylist:
                if item.__dict__["orig" + weekday + "_" + time] == origplace and item.__dict__["dest" + weekday + "_" + time] == destplace:
                    username = User.query.filter_by(id=item.id).first().username
                    smalljourneyitem = smalljourney(orig=item.__dict__["orig" + weekday + "_" + time],
                                                    dest=item.__dict__["dest" + weekday + "_" + time], user=username)
                    list.append(smalljourneyitem)
    #先将满足所有条件的行程推入list中，再对list操作
    print(list)
    for listitem in list:
        if len(finallist) == 0:
            finaljourney_item=finaljourney(orig=listitem.orig,dest=listitem.dest,users=[],length=0)
            print("新建类，用户为"+listitem.user)
            finaljourney_item.users.append(listitem.user)
            finaljourney_item.length+=1
            finallist.append(finaljourney_item)
        else:
            searchkey = 0
            for finalitem in finallist:
                if finalitem.orig == listitem.orig and finalitem.dest == listitem.dest:
                    searchkey = 1  # 找到了相同的起终点行程
                    finalitem.users.append(listitem.user)#将新人纳入
                    finalitem.length+=1
                    break
            # 搜索完毕，判断是否找到相同行程
            if searchkey == 0:
                # 如果没有找到
                finaljourney_item=finaljourney(orig=listitem.orig,dest=listitem.dest,users=[],length=0)
                finaljourney_item.users.append(listitem.user)
                finaljourney_item.length+=1
                finallist.append(finaljourney_item)
                print("notfound")
    # 至此，已经将list中的元素按照type归类，并且放在finallist中
    print(week)
    return render_template("adminbase_search.html",finallist=finallist,week=week,weekday=weekday,time=time,origplace=origplace,destplace=destplace)
@bp.route("/admin_chat")
def admin_chat():
    commentlist=comment.query.filter_by(accepter=g.user.id).filter_by(isreplied="not")
    return render_template("adminbase_chat.html",commentlist=commentlist)
@bp.route("/base_chat")
def base_chat():
    adminlist=User.query.filter_by(identity="admin")
    ##进入此页面之前，先选出所有发给该用户的reply
    ##查找reply时，只选择没有被删除的回复
    replylist=reply.query.filter_by(accepter=g.user.id).filter_by(isdeleted="not")

    return  render_template("base_chat.html",adminlist=adminlist,replylist=replylist)
@bp.route("/sendcomment")
def sendcomment():
    sender=g.user.username
    accepter=request.args.get("accepter")
    time=request.args.get("time")
    text=request.args.get("text")
    newitem=comment(sender=sender,senderid=g.user.id,accepter=accepter,time=time,text=text,isread="not",isreplied="not")
    db.session.add(newitem)
    db.session.commit()
    return "done"
@bp.route("/sendemailcomment")
def sendemailcommet():
    text=request.args.get("text")
    email=g.user.email
    message = Message(subject="有人给你的网站提出建议！", recipients=["yzj623@mail.ustc.edu.cn"],
                      body="建议如下："+text+"\n他的邮箱为："+email)
    mail.send(message)
    return "done"
@bp.route("/upgradecomment")
def upgradecomment():
    id=request.args.get("id")
    commentitem=comment.query.filter_by(id=id).first()
    commentitem.isread="yes"
    db.session.commit()
    return  "done"
@bp.route("/sendreply")
def sendreply():
    ##这个函数同时拥有发送回复和将评论状态改变的功能
    tocommentid=request.args.get("tocommentid")

    sender=g.user.id
    sendername=g.user.username
    accepter=request.args.get("accepter")
    text=request.args.get("text")
    time=request.args.get("time")
    newitem=reply(tocommentid=tocommentid,sender=sender,sendername=sendername,accepter=accepter,text=text,time=time,isread="not",isdeleted="not")
    db.session.add(newitem)
    db.session.commit()
    ##下面先将被回复的评论状态改为已回复
    commentitem = comment.query.filter_by(id=tocommentid).first()
    commentitem.isreplied = "yes"
    db.session.commit()
    return "done"

@bp.route("/findcommentbyreply")
def findcommentbyreply():
    tocommentid=request.args.get("tocommentid")
    replyid=request.args.get("replyid")
    commentitem=comment.query.filter_by(id=tocommentid).first()
    replyitem=reply.query.filter_by(id=replyid).first()
    commenttext=commentitem.text
    replytext=replyitem.text
    replysendername=replyitem.sendername
    return {"comment":commenttext,"reply":replytext,"name":replysendername}
@bp.route("/upgradereplyisread")
def upgradereplyisread():
    id=request.args.get("id")
    replyitem=reply.query.filter_by(id=id).first()
    replyitem.isread="yes"
    db.session.commit()
    return "done"
@bp.route("/upgradereplyisdeleted")
def upgradereplyisdeleted():
    id = request.args.get("id")
    replyitem = reply.query.filter_by(id=id).first()
    replyitem.isdeleted = "yes"
    db.session.commit()
    return "done"
@bp.route("/suggestion")
def getsuggestion():
    placetovardict= {"中舍一区":"midzone_1","中舍二区":"midzone_2","中食堂":"midcanteen","东一教":"east_1teach",
                     "东二教":"east_2teach","东五教":"east_5teach","东图":"eastlib","东操":"eastground","东苑":"eastyuan",
                     "东理化":"eastlihua","东医院":"easthospi","东舍一区":"eastzone_1","东舍二区":"eastzone_2","东礼":"eastlitang",
                     "西图":"westlib","西三教":"west_3teach","西舍一区":"westzone_1","西舍二区":"westzone_2","西食堂":"westcanteen"}
    placedict=["中舍一区","中舍二区","中食堂","东一教","东二教","东五教","东图","东操","东苑",
               "东理化","东医院","东舍一区","东舍二区","东礼","西图","西三教","西舍一区","西舍二区","西食堂","其他地方"]
    ##在触发此函数时，生成一个建议列表，返回给网页
    ##先求出当天的所有行程
    bikeitem=bikedata.query.filter_by().first()
    if not bikeitem:
        return "nodata"
    midzone_1=int(bikeitem.midzone_1)
    midzone_2=int(bikeitem.midzone_2)
    midcanteen=int(bikeitem.midcanteen)
    east_1teach=int(bikeitem.east_1teach)
    east_2teach=int(bikeitem.east_2teach)
    east_5teach= int(bikeitem.east_5teach)
    eastlib=int(bikeitem.eastlib)
    eastground=int(bikeitem.eastground)
    eastyuan=int(bikeitem.eastyuan)
    eastlihua=int(bikeitem.eastlihua)
    easthospi=int(bikeitem.easthospi)
    eastzone_1=int(bikeitem.eastzone_1)
    eastzone_2=int(bikeitem.eastzone_2)
    eastlitang=int(bikeitem.eastlitang)
    westlib=int(bikeitem.westlib)
    west_3teach=int(bikeitem.west_3teach)
    westzone_1=int(bikeitem.westzone_1)
    westzone_2=int(bikeitem.westzone_2)
    westcanteen=int(bikeitem.westcanteen)

    maxmidzone_1 = midzone_1
    maxmidzone_2 = midzone_2
    maxmidcanteen = midcanteen
    maxeast_1teach = east_1teach
    maxeast_2teach = east_2teach
    maxeast_5teach =  east_5teach
    maxeastlib = eastlib
    maxeastground = eastground
    maxeastyuan = eastyuan
    maxeastlihua =  eastlihua
    maxeasthospi = easthospi
    maxeastzone_1 = eastzone_1
    maxeastzone_2 =  eastzone_2
    maxeastlitang = eastlitang
    maxwestlib = westlib
    maxwest_3teach = west_3teach
    maxwestzone_1 = westzone_1
    maxwestzone_2 = westzone_2
    maxwestcanteen = westcanteen

    minmidzone_1 = midzone_1
    minmidzone_2 = midzone_2
    minmidcanteen = midcanteen
    mineast_1teach = east_1teach
    mineast_2teach = east_2teach
    mineast_5teach = east_5teach
    mineastlib = eastlib
    mineastground = eastground
    mineastyuan = eastyuan
    mineastlihua = eastlihua
    mineasthospi = easthospi
    mineastzone_1 = eastzone_1
    mineastzone_2 = eastzone_2
    mineastlitang = eastlitang
    minwestlib = westlib
    minwest_3teach = west_3teach
    minwestzone_1 = westzone_1
    minwestzone_2 = westzone_2
    minwestcanteen = westcanteen
    today = datetime.date.today()
    weekday = today.weekday()
    if weekday>=5:
        ##如果当天是周六或这周日，则给出下周周一的调度建议
        today=today+datetime.timedelta(days=(7-weekday))
        weekday=0
    monday = today - datetime.timedelta(days=weekday)

    ##先获得当前周一的日期方便找对应行程
    journeylist=journeydatamodel.query.filter_by(time=monday)
    index=1
    max=11;
    while index<=max:
            origstr="orig"+str(weekday+1)+"_"+str(index)##构造成员名字符
            deststr="dest"+str(weekday+1)+"_"+str(index)

            for journey in journeylist:
            ##对于每个行程，遍历求其对各个地点的影响


                if journey.__dict__[deststr]!= "未填写":
                    if journey.__dict__[deststr]=="中舍一区":
                        midzone_1+=1
                    if journey.__dict__[deststr]=="中舍二区":
                        midzone_2+=1
                    if journey.__dict__[deststr]=="中食堂":
                        midcanteen+=1
                    if journey.__dict__[deststr]=="东一教":
                        east_1teach+=1
                    if journey.__dict__[deststr]=="东二教":
                        east_2teach+=1
                    if journey.__dict__[deststr]=="东五教":
                        east_5teach+=1
                    if journey.__dict__[deststr]=="东图":
                        eastlib+=1
                    if journey.__dict__[deststr]=="东操":
                        eastground+=1
                    if journey.__dict__[deststr]=="东苑":
                        eastyuan+=1
                    if journey.__dict__[deststr]=="东理化":
                        eastlihua+=1
                    if journey.__dict__[deststr]=="东医院":
                        easthospi+=1
                    if journey.__dict__[deststr]=="东舍一区":
                        eastzone_1+=1
                    if journey.__dict__[deststr]=="东舍二区":
                        eastzone_2+=1
                    if journey.__dict__[deststr]=="东礼":
                        eastlitang+=1
                    if journey.__dict__[deststr]=="西图":
                        westlib+=1
                    if journey.__dict__[deststr]=="西三教":
                        west_3teach+=1
                    if journey.__dict__[deststr]=="西舍一区":
                        westzone_1+=1
                    if journey.__dict__[deststr]=="西舍二区":
                        westzone_2+=1
                    if journey.__dict__[deststr]=="西食堂":
                        westcanteen+=1
                if journey.__dict__[origstr]!="未填写":
                    if journey.__dict__[origstr] == "中舍一区":
                        midzone_1 -= 1
                    if journey.__dict__[origstr] == "中舍二区":
                        midzone_2 -= 1
                    if journey.__dict__[origstr] == "中食堂":
                        midcanteen -= 1
                    if journey.__dict__[origstr] == "东一教":
                        east_1teach -= 1
                    if journey.__dict__[origstr] == "东二教":
                        east_2teach -= 1
                    if journey.__dict__[origstr] == "东五教":
                        east_5teach -= 1
                    if journey.__dict__[origstr] == "东图":
                        eastlib -= 1
                    if journey.__dict__[origstr] == "东操":
                        eastground -= 1
                    if journey.__dict__[origstr] == "东苑":
                        eastyuan -= 1
                    if journey.__dict__[origstr] == "东理化":
                        eastlihua -= 1
                    if journey.__dict__[origstr] == "东医院":
                        easthospi -= 1
                    if journey.__dict__[origstr] == "东舍一区":
                        eastzone_1 -= 1
                    if journey.__dict__[origstr] == "东舍二区":
                        eastzone_2 -= 1
                    if journey.__dict__[origstr] == "东礼":
                        eastlitang -= 1
                    if journey.__dict__[origstr] == "西图":
                        westlib -= 1
                    if journey.__dict__[origstr] == "西三教":
                        west_3teach -= 1
                    if journey.__dict__[origstr] == "西舍一区":
                        westzone_1 -= 1
                    if journey.__dict__[origstr] == "西舍二区":
                        westzone_2 -= 1
                    if journey.__dict__[origstr] == "西食堂":
                        westcanteen -= 1

            ##每一轮登记结束之后，更新各个地点的极值
            maxmidzone_1=midzone_1 if midzone_1>maxmidzone_1 else maxmidzone_1
            minmidzone_1=midzone_1 if midzone_1<minmidzone_1 else minmidzone_1

            maxmidzone_2 = midzone_2 if midzone_2 > maxmidzone_2 else maxmidzone_2
            minmidzone_2 = midzone_2 if midzone_2 < minmidzone_2 else minmidzone_2

            maxmidcanteen = midcanteen if midcanteen > maxmidcanteen else maxmidcanteen
            minmidcanteen = midcanteen if midcanteen < minmidcanteen else minmidcanteen

            maxeast_1teach = east_1teach if east_1teach > maxeast_1teach else maxeast_1teach
            mineast_1teach = east_1teach if east_1teach < mineast_1teach else mineast_1teach

            maxeast_2teach = east_2teach if east_2teach > maxeast_2teach else maxeast_2teach
            mineast_2teach = east_2teach if east_2teach < mineast_2teach else mineast_2teach

            maxeast_5teach = east_5teach if east_5teach > maxeast_5teach else maxeast_5teach
            mineast_5teach = east_5teach if east_5teach < mineast_5teach else mineast_5teach

            maxeastlib = eastlib if eastlib > maxeastlib else maxeastlib
            mineastlib = eastlib if eastlib < mineastlib else mineastlib

            maxeastground = eastground if eastground > maxeastground else maxeastground
            mineastground = eastground if eastground < mineastground else mineastground

            maxeastyuan = eastyuan if eastyuan > maxeastyuan else maxeastyuan
            mineastyuan = eastyuan if eastyuan < mineastyuan else mineastyuan

            maxeastlihua = eastlihua if eastlihua > maxeastlihua else maxeastlihua
            mineastlihua = eastlihua if eastlihua < mineastlihua else mineastlihua

            maxeasthospi = easthospi if easthospi > maxeasthospi else maxeasthospi
            mineasthospi = easthospi if easthospi < mineasthospi else mineasthospi

            maxeastzone_1 = eastzone_1 if eastzone_1 > maxeastzone_1 else maxeastzone_1
            mineastzone_1 = eastzone_1 if eastzone_1 < mineastzone_1 else mineastzone_1

            maxeastzone_2 = eastzone_2 if eastzone_2 > maxeastzone_2 else maxeastzone_2
            mineastzone_2 = eastzone_2 if eastzone_2 < mineastzone_2 else mineastzone_2

            maxeastlitang = eastlitang if eastlitang > maxeastlitang else maxeastlitang
            mineastlitang = eastlitang if eastlitang < mineastlitang else mineastlitang

            maxwestlib = westlib if westlib > maxwestlib else maxwestlib
            minwestlib = westlib if westlib < minwestlib else minwestlib

            maxwest_3teach = west_3teach if west_3teach > maxwest_3teach else maxwest_3teach
            minwest_3teach = west_3teach if west_3teach < minwest_3teach else minwest_3teach

            maxwestzone_1 = westzone_1 if westzone_1 > maxwestzone_1 else maxwestzone_1
            minwestzone_1 = westzone_1 if westzone_1 < minwestzone_1 else minwestzone_1

            maxwestzone_2 = westzone_2 if westzone_2 > maxwestzone_2 else maxwestzone_2
            minwestzone_2 = westzone_2 if westzone_2 < minwestzone_2 else minwestzone_2

            maxwestcanteen = westcanteen if westcanteen > maxwestcanteen else maxwestcanteen
            minwestcanteen = westcanteen if westcanteen < minwestcanteen else minwestcanteen

            ##更新完成后，继续下一轮循环

            index+=1

    ##现在，max和min记录了各地点车数的峰值
    ##峰值为正的可以给峰值为负数的一些补偿
    ##下面用一个数组存放各个地点的车况
    anslist=[]##返回给网页的建议列表
    placeworstnum=[]##各个地点最坏情况的存放数量
    placeworstnum.append(minmidzone_1)
    placeworstnum.append(minmidzone_2)
    placeworstnum.append(minmidcanteen)
    placeworstnum.append(mineast_1teach)
    placeworstnum.append(mineast_2teach)
    placeworstnum.append(mineast_5teach)
    placeworstnum.append(mineastlib)
    placeworstnum.append(mineastground)
    placeworstnum.append(mineastyuan)
    placeworstnum.append(mineastlihua)
    placeworstnum.append(mineasthospi)
    placeworstnum.append(mineastzone_1)
    placeworstnum.append(mineastzone_2)
    placeworstnum.append(mineastlitang)
    placeworstnum.append(minwestlib)
    placeworstnum.append(minwest_3teach)
    placeworstnum.append(minwestzone_1)
    placeworstnum.append(minwestzone_2)
    placeworstnum.append(minwestcanteen)
    length=len(placeworstnum)
    print("长度为")
    print(length)
    i=0
    j=0
    while i<length:

        if placeworstnum[i]<0:
            j=0
            ##遍历列表，寻找可以给该缺车地点提供车辆的地点
            while j<length:

                if j==i:
                    j+=1
                    continue
                if placeworstnum[j]>0:
                    ##找到一个可以提供车辆的地点，根据缺和剩的大小有不同的情况
                    print("found")
                    if placeworstnum[j]+placeworstnum[i]>=0:
                        newitem=suggest(orig=placedict[j],dest=placedict[i],num=-placeworstnum[i])##生成一条新的建议，之后修改对应地点的车数量
                        anslist.append(newitem)
                        placeworstnum[j] += placeworstnum[i]
                        placeworstnum[i] = 0

                    else:
                        ##此时必有j的数量不足以弥补i处缺少的车
                        newitem=suggest(orig=placedict[j],dest=placedict[i],num=placeworstnum[j])
                        anslist.append(newitem)
                        placeworstnum[i]+=placeworstnum[j]
                        placeworstnum[j]=0
                    ##经过一次协调之后，如果此时已经不再缺车，则跳出循环
                if placeworstnum[i]>=0:
                    break
                j+=1
            ##出循环之后，已经尽力为该地点协调车辆，可以退出
        i+=1
    ##此时，各个地点已经协调过一次。如果还有缺少车辆的，只能从其他地方获取
    print("out1")
    i=0
    while i<length:
        if placeworstnum[i]<0:
            newitem=suggest(orig=placedict[length],dest=placedict[i],num=-placeworstnum[i])##orig=length是不会出现的情况，这里表示是从其他地方
            anslist.append(newitem)

        i+=1
    for ans in anslist:
        print("起点")
        print(ans.orig)
        print("终点")
        print(ans.dest)
        print("数量")
        print(ans.num)
    ##至此，已经得出了调度建议的列表，将列表发往前端即可


    return render_template("adminbase_suggestion.html",suggestlist=anslist)
@bp.route("/test")
def test():
    item=suggest(orig=23,dest=2,num=232)
    return "success"
