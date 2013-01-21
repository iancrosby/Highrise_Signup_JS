import os
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_to_highrise')
def add_hr():
	first_name = request.args.get('first_name')
	last_name = request.args.get('last_name')
	e_mail = request.args.get('e_mail')
	company = request.args.get('company')
	country = request.args.get('country')
	return jsonify(result=first_name + " " + last_name + " " + country)


if __name__ == '__main__':
	# Bind to PORT if defined, otherwise default to 5000.
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)