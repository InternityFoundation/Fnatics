#!/usr/bin/env python
from zotapkg import db
from zotapkg.models import Question

question = input("Enter question: ")
topic = input("Enter Topic: ")
level = input("Enter Level: ")
option1 = input("Enter Option1: ")
option2 = input("Enter Option2: ")
option3 = input("Enter Option3: ")
option4 = input("Enter Option4: ")
ans = input("Enter correct answer: ")

ques = Question(question=question, topic=topic,level=int(level),option1=option1, option2=option2, option3=option3, option4=option4, ans=ans)
db.session.add(ques)
db.session.commit()

print("Data inserted successfully")
