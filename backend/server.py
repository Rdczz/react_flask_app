from wsgiref import headers
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
 
app = Flask(__name__)
CORS(app)
 
@app.route('/test', methods =['GET','POST'])
@cross_origin(headers=["Content-Type"])
def test():
   return jsonify({"Result": "hello "+request.json['name']})
 
if __name__ == '__main__':
    app.run(debug = True)