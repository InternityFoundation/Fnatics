from zotapkg import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), unique=True, nullable=False)
    phone = db.Column(db.String(10), unique=True, nullable=False)
    whatsapp_num = db.Column(db.String(10), unique=True, nullable=True)
    gender = db.Column(db.String(1), nullable=False)
    marital_status = db.Column(db.String(1), nullable=False)
    lang_known = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(40), nullable=False)

    def __repr__(self):
        return "User({}, {}, {})".format(self.name, self.phone, self.native_location)



class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)
    topic = db.Column(db.String(50), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    option1 = db.Column(db.String(30), nullable=False)
    option2 = db.Column(db.String(30), nullable=False)
    option3 = db.Column(db.String(30), nullable=False)
    option4 = db.Column(db.String(30), nullable=False)

    ans = db.Column(db.String(30), nullable=False)

    def __repr__(self):
        return "Question({}, {}, {})".format(self.question, self.topic, self.ans)
