from flask import Flask,g,session
import config
from exts import db,mail
from models import User,email_captcha
from blueprints.auth import bp as auth_dp
from blueprints.qa import bp as qa_bp
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(config)
db.init_app(app)#将数据库和配置完成后的app绑定
mail.init_app(app)#将邮箱和app绑定
migrate = Migrate(app,db)
app.register_blueprint(auth_dp)#注册蓝图，相当于把蓝图文件中的路由搬过来。
app.register_blueprint(qa_bp)


@app.before_request
def returnuserid():
    user_id=session.get("user_id")
    if user_id:
        user=User.query.filter_by(id=user_id).first()
        setattr(g,"user",user)
    else:
        setattr(g,"user",None)
@app.context_processor
def quoteuser():
    return {"user": g.user}
#任何一个文件中均可访问user
if __name__ == '__main__':
    app.run()
