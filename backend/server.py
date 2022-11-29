from email import header
from socket import socket
from urllib import request
from flask import Flask,jsonify
from flask_socketio import SocketIO,send
from model import detect_and_translate
from flask_cors import CORS,cross_origin

app = Flask(__name__)
socketIo = SocketIO(app,cors_allowed_origins="*")
app.debug =True
app.host = 'localhost'
#CORS(app)

@app.route('/test',methods=['POST'])
#@cross_origin(headers=["content-Type"])
def translate():
       data = request.json['msg']
       res = detect_and_translate(data,"te","no");       
       return jsonify({"result":res})
    
@socketIo.on("message")
def handleMessage(msg):
   data = msg['msg']
   lan = msg['lan']
   res = detect_and_translate(data,lan,"no")
   print(res)
   send(res,broadcast=True)
   return None

if __name__ == "__main__":
   socketIo.run(app)