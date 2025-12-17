# Gift Pass Landing Page Setup Guide

Your gift pass landing page is now live at `/gift-pass`! Follow the steps below to complete the Google Sheets integration.

## 🎯 What You Have

- ✅ Beautiful, conversion-optimized landing page at `/gift-pass`
- ✅ Form with validation (name, email, phone, address, city)
- ✅ Automatic redirect to Stripe payment after form submission
- ✅ Mobile-responsive design with holiday theming
- ✅ SEO optimized with structured data

## 📊 Google Sheets Integration Setup

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "Gift Pass Leads" (or whatever you prefer)
3. In the first row, add these headers:
   - `Timestamp`
   - `Name`
   - `Email`
   - `Phone`
   - `Address`
   - `City`
   - `Product`

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(data.timestamp),
    data.name,
    data.email,
    data.phone,
    data.address,
    data.city,
    data.product
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click the **Save** icon (💾)
5. Name your project (e.g., "Gift Pass Form Handler")

### Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Gift Pass Form Webhook"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. Grant permissions when prompted (click "Advanced" if needed, then "Go to [Project Name]")
7. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/...`)

### Step 4: Add to Environment Variables

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add this line with your copied URL:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

3. Save the file
4. Restart your Next.js development server

## 🚀 Testing

1. Visit `http://localhost:3000/gift-pass` (or your deployed URL)
2. Fill out the form with test data
3. Submit the form
4. Check your Google Sheet - the data should appear in a new row
5. You should be redirected to the Stripe payment page

## 🎨 Customization Options

### Update Pricing or Messaging

Edit `/app/gift-pass/page.tsx` to change:
- Pricing display
- Headlines and copy
- Testimonials
- FAQ content
- Limited availability numbers

### Modify Form Fields

Edit `/components/gift-pass-form.tsx` to:
- Add/remove fields
- Change validation rules
- Customize error messages
- Adjust styling

### Change Stripe Link

The Stripe link is stored in `/lib/constants.ts`:
```typescript
export const STRIPE_PURCHASE_URL_GIFT_PASS = "https://buy.stripe.com/28EcN71kR5hE36zdEd3Je0j"
```

## 📱 Features Included

### Landing Page Features
- ⭐ Compelling gift-focused messaging
- 🎄 Holiday-themed design with Christmas colors
- 💰 Clear pricing and value proposition
- 🎁 "Perfect gift for parents" positioning
- 📊 Social proof (reviews, customer count)
- ❓ FAQ section
- 📱 Fully mobile responsive
- ❄️ Snow animation effect

### Form Features
- ✅ Real-time validation
- 🔒 Secure data handling
- 📧 Email format validation
- 📞 Phone number validation
- ⚠️ Clear error messages
- ♿ Accessible form inputs
- 🔄 Loading states during submission
- 🎯 Auto-focus on errors

### Technical Features
- 🔍 SEO optimized with metadata
- 📈 Structured data for search engines
- ⚡ Fast page load times
- 🎯 Direct Stripe integration
- 📊 Google Sheets logging
- 🛡️ Error handling and fallbacks

## 🎯 Marketing Tips

### Where to Send Traffic

Direct traffic to: `https://yourdomain.com/gift-pass`

### Best Audiences
- People aged 30-60 with elderly parents
- Local residents in your service areas
- Facebook/Instagram holiday shoppers
- Google Ads: "christmas gifts for parents"

### Urgency Tactics (Already Included)
- Limited quantity messaging
- Countdown timer ready
- Seasonal deadline (March 31st)
- Holiday exclusivity

### A/B Testing Ideas
- Try different "spots remaining" numbers
- Test various testimonials
- Experiment with pricing display
- Try different hero images

## 🆘 Troubleshooting

### Form submits but doesn't go to Stripe
- Check that `STRIPE_PURCHASE_URL_GIFT_PASS` is correct in `/lib/constants.ts`
- Check browser console for JavaScript errors

### Data not appearing in Google Sheets
- Verify the webhook URL in `.env.local`
- Check Apps Script permissions are set correctly
- Make sure the sheet has the correct column headers
- Check Apps Script execution logs: Apps Script > Executions

### Form validation not working
- Make sure JavaScript is enabled in browser
- Check for console errors
- Verify all form fields have the correct `name` attributes

## 📞 Need Help?

If you run into issues:
1. Check the browser console for errors (F12)
2. Verify all environment variables are set
3. Make sure the development server was restarted after adding `.env.local`
4. Check the Apps Script execution logs for webhook errors

## 🎉 You're All Set!

Your gift pass landing page is ready to convert! Just complete the Google Sheets setup and start driving traffic.

**Page URL**: `/gift-pass`
**Form Data**: Captured in Google Sheets
**Payment**: Stripe checkout at $499
**Gift Certificate**: You'll need to create and email these manually after receiving Stripe payment confirmations

