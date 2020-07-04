#!/usr/bin/env python

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, SelectField
from wtforms.validators import DataRequired, Length, Email, EqualTo, Optional

class RegisterationForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = StringField('Phone Number', validators=[DataRequired(), Length(min=10, max=10, message='Invalid Phone Number')])
    whatsapp_num = StringField('Whatsapp Number', validators=[DataRequired(), Length(min=10, max=10, message='Invalid Number')])
    gender = SelectField('Gender', validators=[DataRequired(), Optional()], choices = [('M','Male'),('F','Female')])
    marital_status = SelectField('Marital Status', validators=[DataRequired(), Optional()], choices = [('Y','Married'),('N','Unmarried')])
    lang_known = SelectField('Languages known', validators=[DataRequired(), Optional()], choices= [('en', 'English'), ('In', 'Hindi',), ('Ru', 'Russian')])
    city = StringField('City', validators=[DataRequired(), Length(min=2, max=50)])
    submit = SubmitField('Apply')
