const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'the.bluemountainofficial@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password' // Use app password for Gmail
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { businessName, contactPerson, email, message } = req.body;

    console.log('Received form submission:', { businessName, contactPerson, email });

    // Validate required fields
    if (!businessName || !contactPerson || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    const transporter = createTransporter();

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f6f2; border-radius: 10px;">
        <div style="background-color: #0d0d0d; color: #f9f6f2; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: #d4af37; margin: 0;">☕ Blue Mountain Coffee</h1>
          <h2 style="color: #f9f6f2; margin: 10px 0 0 0;">New Quote Request</h2>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <h3 style="color: #3e2c25; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Business Information</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f9f6f2;">
              <td style="padding: 12px; font-weight: bold; color: #3e2c25; border: 1px solid #ddd;">Business Name:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${businessName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #3e2c25; border: 1px solid #ddd;">Contact Person:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${contactPerson}</td>
            </tr>
            <tr style="background-color: #f9f6f2;">
              <td style="padding: 12px; font-weight: bold; color: #3e2c25; border: 1px solid #ddd;">Email:</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
          </table>

          <h3 style="color: #3e2c25; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Additional Message</h3>
          <div style="background-color: #f9f6f2; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #d4af37;">
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #3e2c25; color: #f9f6f2; border-radius: 5px; text-align: center;">
            <p style="margin: 0; font-style: italic;">Fresh from Kolasib, Mizoram • Direct from Northeast India</p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'the.bluemountainofficial@gmail.com',
      to: 'the.bluemountainofficial@gmail.com',
      subject: `☕ Coffee Enquiry from ${businessName}`,
      html: emailContent,
      replyTo: email
    };

    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.json({ 
      success: true, 
      message: 'Thank you! Your enquiry has been sent successfully. We\'ll get back to you within 24 hours with detailed information and pricing.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an issue sending your enquiry. Please try again or contact us directly at +91 70854 85883.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});