HOSTNAME = "127.0.0.1"
PORT = 3306
USERNAME = "root"
PASSWORD = ""
DATABASE = "qanda_course"
DB_URI = 'mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8mb4'.format(USERNAME , PASSWORD ,HOSTNAME , PORT , DATABASE)
SQLALCHEMY_DATABASE_URI = DB_URI
#bhtnjwfdlexriafb
#mqmlvtkpraidiaej
#邮箱配置
MAIL_SERVER="smtp.qq.com"
MAIL_USE_SSL=True
MAIL_PORT=465
MAIL_USERNAME="yzjyb1469@qq.com"
MAIL_PASSWORD="mqmlvtkpraidiaej"
MAIL_DEFAULT_SENDER="yzjyb1469@qq.com"

SECRET_KEY="333ccc666ddsaf233244324"