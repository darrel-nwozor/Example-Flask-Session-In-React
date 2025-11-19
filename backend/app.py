from flask import Flask, jsonify, session
from flask_cors import CORS

app = Flask(__name__) 
CORS(app, supports_credentials=True) 
app.secret_key = 'UseAnEnvironmentVariable' 

@app.route("/student/<int:student_id>") 
def home(student_id): 
    if student_id == 1: 
        return jsonify({"Student":{ 
            "Name":"Jim", 
            "Age":18, 
            "Course": "Software Development"}}) 
    else: 
        return jsonify({"Student":{ 
            "Name":"Bob", 
            "Age":22, 
            "Course": 
            "AVFX"}}) 
        
@app.route("/secure") 
def secure(): 
    if ("student_id" not in session):
        return jsonify({"Error": "No Session Is Set"}), 401
    
    if session["student_id"] == 1: 
        return jsonify({"Student":{ 
            "Name":"Jim", 
            "Age":18, 
            "Course": 
            "Software Development"}}) 
    
    elif session["student_id"] == 2: 
        return jsonify({"Student":{ 
            "Name":"Bob", 
            "Age":22, 
            "Course": "AVFX"}}) 
    else:
        return jsonify({"Error": "Unknown Student"})

@app.route("/secure/set/<int:student_id>")
def setSessionId(student_id):
    session["student_id"] = student_id
    return jsonify({"ok": True}), 200

if __name__ == "__main__": 
    app.run()