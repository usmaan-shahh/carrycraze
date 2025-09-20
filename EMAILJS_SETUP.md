# EmailJS Setup Guide for CarryCraze Contact Form

## What I've Done

✅ Installed EmailJS library (`@emailjs/browser`)
✅ Updated Contact.jsx with working form functionality
✅ Added form state management and validation
✅ Added success/error message handling
✅ Added loading states and proper UX

## What You Need to Do

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Content:**

```
Hello CarryCraze Team,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your CarryCraze website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

### Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `user_xxxxxxxxxxxxxxxx`)

### Step 5: Update Contact.jsx

Replace these values in your Contact.jsx file (lines 30-32):

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your actual service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your actual template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your actual public key
```

### Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## How It Works

- When someone fills out the contact form, EmailJS sends an email directly to `carry.craze@rediffmail.com`
- The form includes all the sender's information (name, email, subject, message)
- You'll receive the email in your inbox
- The user sees a success message after submission

## Features Added

- ✅ Form validation (all fields required)
- ✅ Loading spinner while sending
- ✅ Success/error messages
- ✅ Form resets after successful submission
- ✅ Professional UX with proper feedback

## Troubleshooting

- Make sure all EmailJS IDs are correct
- Check that your email service is properly connected
- Verify the template variables match exactly
- Check browser console for any error messages

## Free Plan Limits

- 200 emails per month
- Perfect for small business contact forms
- No credit card required

Your contact form is now ready to receive messages directly to your email!
