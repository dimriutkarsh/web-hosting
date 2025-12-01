from flask import Flask, render_template, request, jsonify
import os
import smtplib, ssl
from email.message import EmailMessage

app = Flask(__name__)

# Set these in your environment (Railway/Render or locally)
EMAIL_ADDRESS = os.environ.get("utkarshd2605@gmail.com")              # your email (e.g. Gmail)
EMAIL_PASSWORD = os.environ.get("utkarsh123#@,")    # app password
TO_EMAIL = os.environ.get("TO_EMAIL") or EMAIL_ADDRESS       # where to receive messages


@app.route("/")
def index():
    # Render your main page that contains the contact form
    return render_template("index.html")  # or whatever your template is


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json() or {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()
 
    if not name or not email or not subject or not message:
        return jsonify({"error": "All fields are required."}), 400

    # Build email
    msg = EmailMessage()
    msg["Subject"] = f"[Portfolio Contact] {subject} - from {name}"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = TO_EMAIL
    msg.set_content(
        f"New contact form submission:\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Subject: {subject}\n\n"
        f"Message:\n{message}\n"
    )

    try:
        context = ssl.create_default_context()
        # For Gmail SMTP (change host/port if using something else)
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
    except Exception as e:
        print("Error sending email:", e)
        return jsonify({"error": "Server error sending email."}), 500

    return jsonify({"message": "OK"}), 200


if __name__ == "__main__":
    app.run(debug=True)
