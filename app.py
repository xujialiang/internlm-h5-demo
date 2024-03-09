# from flask import Flask, jsonify, request
import gradio as gr

# app  = Flask(__name__)

def api_say_hello():
    data = request.get_json()
    name = data['name']
    result = say_hello(name)
    return jsonify(result=result)

def say_hello(name):
    return "Hello" + name + "!!"
iface = gr.Interface(fn=say_hello, inputs="text", outputs="text")
iface.launch(host='0.0.0.0', port=7861)

# app.run(debug=True, host='0.0.0.0', port=7861)