import wtforms
from wtforms.validators import Email,Length,EqualTo
from models import User,email_captcha
class registerform(wtforms.Form):
    #验证类，只需将待验证的form投入类中继承产生一个新对象，这个新对象的一个成员函数便可以给出各个字段的正确与否
    email=wtforms.StringField(validators=[Email(message="邮箱格式错误！")])
    captcha=wtforms.StringField(validators=[Length(min=6,max=6,message="验证码长度错误")])
    username=wtforms.StringField(validators=[Length(min=3,max=10,message="用户名长度错误")])
    password=wtforms.StringField(validators=[Length(min=6,max=20,message="密码长度错误")])
    confirm_password=wtforms.StringField(validators=[EqualTo("password")])

    def validate_captcha(self, field):
        captcha = field.data
        email = self.email.data
        print(f"email={email},captcha={captcha}")
        result = email_captcha.query.filter_by(email=email, captcha=captcha).first()#查找是否有邮箱对应的验证码
        if not result:
            raise wtforms.ValidationError(message="邮箱或者验证码错误")
    def validate_email(self,field):
        email=field.data
        user=User.query.filter_by(email=email).first()
        if user:
            raise wtforms.ValidationError(message="该邮箱已被注册")
class loginform(wtforms.Form):
    username = wtforms.StringField(validators=[Length(min=3, max=10, message="用户名长度错误")])
    password = wtforms.StringField(validators=[Length(min=6, max=20, message="密码长度错误")])

