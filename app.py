import gradio as gr

def predit(name):
    return "Hello" + name + "!!"
iface = gr.Interface(fn=predit, inputs="text", outputs="text")
iface.launch(share=True)