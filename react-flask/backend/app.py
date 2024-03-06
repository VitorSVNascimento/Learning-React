from flask import Flask, render_template
import os

app = Flask(__name__,template_folder="../frontend/dist",static_folder="../frontend/dist/assets")
print(os.path.dirname(__file__))


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)