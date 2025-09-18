# Blue Mountain Coffee Website

A premium coffee website for Blue Mountain Coffee from Kolasib, Mizoram.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your email configuration:
```bash
cp .env.example .env
```

3. Update the `.env` file with your Gmail credentials:
   - Use your Gmail address for `EMAIL_USER`
   - Generate an App Password for Gmail and use it for `EMAIL_PASS`
   - To create an App Password: Gmail Settings > Security > 2-Step Verification > App Passwords

4. Run the development server with backend:
```bash
npm run dev:full
```

This will start both the frontend (Vite) and backend (Express) servers.

## Features

- Interactive coffee story with animations
- Shop with process and quantity selection
- Functional contact form with email integration
- Responsive design with premium aesthetics
- Parallax scrolling and smooth animations

## Email Configuration

The contact form uses Nodemailer with Gmail SMTP. Make sure to:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password specifically for this application
3. Use the App Password (not your regular password) in the `.env` file
