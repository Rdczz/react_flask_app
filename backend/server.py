from wsgiref import headers
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from model import detect_and_translate

app = Flask(__name__)
CORS(app)
 
@app.route('/test', methods =['GET','POST'])
@cross_origin(headers=["Content-Type"])
def test():
   data = request.json['name']
   lang = request.json['lang']
   res = detect_and_translate(data,lang,'no')
   return jsonify({"Result":res})
 
if __name__ == '__main__':
    app.run(debug = True)