# E-Commerce Integration Instructions

I have built the fully functional product catalog, shopping cart drawer, and the checkout page. To hook this up to your own Google Sheets so that you receive the orders when users click "Complete Order", follow these exact steps:

### 1. Set Up Google Sheet
1. Open Google Sheets and create a new blank spreadsheet.
2. Name it something like "Shwetdhanya & Soha Orders".
3. Add these exact column headers in the first row (A1 to F1):
   - `timestamp`
   - `name`
   - `email`
   - `phone`
   - `address`
   - `city`
   - `pincode`
   - `items`
   - `totalAmount`
   - `status`

### 2. Add the Apps Script Code
1. In your Google Sheet, click on **Extensions** -> **Apps Script** in the top menu.
2. Delete any code in the editor that opens up and paste this exact code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.phone,
      data.address,
      data.city,
      data.pincode,
      data.items,
      data.totalAmount,
      data.status || "New"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Deploy as a Web App
1. In the Apps Script editor, click the blue **Deploy** button at the top right, and select **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Under "Description", type "Order Receiver V1".
4. Under "Execute as", select **Me (your email)**.
5. Under "Who has access", select **"Anyone"** (This is crucial, otherwise the website cannot send data).
6. Click **Deploy**. *Note: Google may ask you to authorize access to your spreadsheet. Click "Advanced" -> "Go to script (unsafe)" and Allow.*
7. Copy the **Web app URL** it provides you.

### 4. Connect to Your Website
1. Open this file on your computer: `src/pages/Checkout.jsx`
2. Scroll to line 36 where it says:
   `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";`
3. Replace `"YOUR_GOOGLE_SCRIPT_WEB_APP_URL"` with the URL you copied in the previous step. (Make sure to keep the quotes around it).

Whenever a user places an order, you will instantly see a new row appear in your Google Sheet!
