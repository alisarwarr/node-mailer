const welcomemessageotp = (otp) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Daraz App</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 0;
            padding: 0;
        }
    
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
    
        p {
            color: #555;
            margin-bottom: 10px;
        }
    
        .otp {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4caf50;
            color: #fff;
            font-size: 18px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Daraz App 👻</h1>
        <p>Dear User,</p>
        <p>Thank you for joining the Daraz App! We're excited to have you on board.</p>
        <p>To complete your registration, use the following OTP (One-Time Password):</p>
        <div class="otp-container">
            <span class="otp">Your OTP: <strong>${otp}</strong></span>
        </div>
        <p>This OTP is valid for a short period, so please use it promptly.</p>
        <p>Enjoy shopping with Daraz App!</p>
        <p>Best regards,<br>Daraz Team</p>
    </div>
</body>
</html>
`
module.exports = welcomemessageotp;