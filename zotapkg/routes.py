from flask import render_template, url_for, flash, redirect
from zotapkg import app, db
from zotapkg.models import User, Question
from zotapkg.forms import RegisterationForm

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html', title='About')

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegisterationForm()
    if form.validate_on_submit():
        user = User(name=form.name.data, email=form.email.data, phone=form.phone.data, whatsapp_num=form.whatsapp_num.data,
                    gender=form.gender.data, marital_status=form.marital_status.data, lang_known=form.lang_known.data, city=form.city.data)

        db.session.add(user)
        db.session.commit()
        
        flash(f"Hello, {form.name.data} it's time for a skill based test", 'success')
        return redirect(url_for('skillquiz'))

    return render_template('register.html', title='Register', form=form)


@app.route("/skillquiz")
def skillquiz():
    ques = Question.query.all()
    return render_template('skillquiz.html', title='Skill Quiz', questions=ques)
