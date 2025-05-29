from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/api/status')
def status():
    return jsonify({"status": "online"})

if __name__ == '__main__':
    app.run(debug=True)
