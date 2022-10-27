from flask import Flask, jsonify, request
from flask_cors import CORS
 
app = Flask(__name__)
CORS(app)
 
@app.route('/test', methods =['GET','POST'])
def test():
   return jsonify({"Result": "Welcome to GeeksForGeeks,"+request.json['name']})
 
if __name__ == '__main__':
    app.run(debug = True)