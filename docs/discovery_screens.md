# Discovery Session Screens - PRD Extract

## List of Screens

### 1. Login Screen (LOGIN)

**Description:** Entry point for user authentication

**Fields:**
- Username text field
- Password text field

**Actions:**
- Login button
- Navigate to Two Factor Auth (if enabled)

**Associated Details:**
- Two Factor Authentication implementation via SMS/email for additional security layer

---

### 2. Select Dealer Screen (SELECT_DEALER)

**Description:** Dropdown list with User's associated Dealers

**Fields:**
- Dealer dropdown list

**Actions:**
- Select dealer
- Continue to Dealer Dashboard

**Associated Details:**
- Many to many User <> Dealer relationship supported

---

### 3. Dealer Dashboard (DEALER_DASH)

**Description:** Dashboard with ability to view active inspections and view closed inspections with filtering capabilities

**Fields:**
- List of Active Estimates:
  - Creation Date & Time
  - Vehicle
  - Customer
  - Time
  - Status
- Sorting options:
  - By Creation Date
  - Alphabetically by Customer
- Filters:
  - Status
  - Date

**Actions:**
- New Estimate/Inspection → (links to Customer Search)
- User Settings → (links to User Settings)
- Settings → (links to Dealer Settings)

**Associated Details:**
- Real-time updates on the Dashboard
- Mark in yellowish with animation where something changes on Status Updates
- The system is live on screen showing information, live updates should be done for MPI and Dashboard

---

### 4. Customer Search Screen (CUSTOMER_SEARCH)

**Description:** Search for existing customers on their Dealer instance

**Fields:**
- Phone number search field (MVP)

**Actions:**
- Search button
- Results list → Customer Selection
- New Customer button → New Customer screen

**Associated Details:**
- For MVP, Customer Search will only be by phone number
- Next versions might include more fields and vehicle data

---

### 5. Customer Selection Screen (CUSTOMER_SELECT)

**Description:** Display and edit customer data

**Fields:**
- Customer data (editable):
  - First Name
  - Last Name
  - Phone Number
  - Email
- Vehicle data

**Actions:**
- Edit customer data
- Continue to MPI/Estimate creation

**Associated Details:**
- Customer data should be editable for an update
- Fields should be locked and have a way to manually edit them
- Check Phone Number uniqueness

---

### 6. New Customer Screen (NEW_CUSTOMER)

**Description:** Create new customer and vehicle data entry

**Fields:**
- Customer data:
  - First Name *
  - Last Name *
  - Phone Number * (unique validation)
  - Email
- Vehicle data:
  - Year *
  - Make *
  - Model *
  - VIN
  - Mileage
  - Color
  - Attach Photo of the Vehicle (Camera button/library)
- Customer Notes (associated to phone number)
- Template Selection dropdown (greyed out for Estimate)
- Inspection/Estimate Data:
  - Repair Order

**Actions:**
- Create button
- Create and go Back button

**Associated Details:**
- Phone number should be unique amongst Customers
- Generic option available in template selection
- When Estimate-only, Technician won't be involved

---

### 7. Multi-point Inspection/Estimation Screen Group (MPI_ESTIMATE)

**Description:** Main inspection and estimation workflow screens

#### 7a. New Multi-point Inspection (NEW_MPI)

**Description:** Create and initialize new inspection process

**Actions:**
- Initialize inspection from template
- Navigate to MPI main screen

#### 7b. Multi-point Inspection/Estimation Main Screen (MPI_MAIN)

**Description:** Conduct detailed vehicle inspection

**Fields:**
- Customer Information:
  - Name
  - Vehicle
  - Phone
  - Email
  - Vehicle Photo
- Customer Notes (display)
- Inspection Notes (show and edit)
- Active Users (real-time list)
- Estimate Totals:
  - Labor Total
  - Parts Total
  - Shop Fees (from settings)
  - Misc Fees ($0 by default)
  - Taxes (from settings)
  - Tax checkboxes:
    - Tax Labor
    - Tax Misc Fees
    - Tax Shop Fees
    - ALWAYS charge taxes on Parts
- Inspection Items:
  - Categories (e.g., Suspension)
  - Items (e.g., Front Forks)
  - Status indicators (Green/Yellow/Red)

**Actions:**
- Select item status (Green → Checkmark, Yellow/Red → Item Status)
- Add Additional Service Request (Inspection only)
- Add Additional Item (Estimate only)
- Send to Parts → Changes Status to Needs P+A
- Send to Advisor → Changes Status to Advisor Review
- Preview Estimate
- Send Estimate

**Associated Details:**
- MPI screen looks the same for all Actors, only action buttons differ
- Work could be non-sequential
- All items should be scrollable
- Green marked items won't open Item Status
- As items are approved/declined, total updates dynamically
- Disable template selection if Estimate-only

---

### 8. Item Status Screen (ITEM_STATUS)

**Description:** Detailed item information and repair details

**Fields:**
- User Inputs:
  - Cause *
  - Correction *
  - Hours
  - Rate (pre-loaded with default Dealer Rate)
  - Media (upload pictures)
  - Comments
- Part List:
  - Description (free text)
  - Parts Number (free text)
  - Qty (number)
  - Parts Price ($)
  - Total Price (calculated)
  - Availability dropdown:
    - In Stock
    - SOP (Special Order Part) - shows calendar
    - Backorder
    - No ETA
- Totals:
  - Labor
  - Parts
  - Line Total (Labor + Parts)

**Actions:**
- Add Parts
- Save and collapse item

**Associated Details:**
- Collapse the Item after finishing loading the fields

---

### 9. Approved Estimate Screen (APPROVED_ESTIMATE)

**Description:** Re-grouped items after approval/denial process

**Fields:**
- Groups:
  - Approved (yellow/red items approved)
  - Declined (yellow/red items declined)
  - Green Items (items green in inspection/estimation)

**Actions:**
- View grouped items
- Proceed with approved work

**Associated Details:**
- All items from MPI/Estimate re-grouped after approval process

---

### 10. Send Estimate Screen (SEND_ESTIMATE)

**Description:** Send estimate to customer via SMS

**Fields:**
- Customer Name (display)
- Phone number (editable)
- Default ASR Request Template Text
- SMS Text template:
  "Hello {First Name}, Thank you for choosing {Dealer Name}, Please click the following link to review the technicians findings: https://link"

**Actions:**
- Send Estimate Button

**Associated Details:**
- Dealer setting for Default ASR Request Template Text

---

### 11. Preview Estimate Screen (PREVIEW_ESTIMATE)

**Description:** Advisor preview of customer estimate

**Fields:**
- Same view as customer will see

**Actions:**
- Back to edit
- Confirm and send

**Associated Details:**
- Reuse the link sent to customer for Advisor preview

---

### 12. Mobile UI Estimate (Customer View) (MOBILE_ESTIMATE)

**Description:** Customer-facing estimate review interface

**Fields:**
- Vehicle Media (if available)
- Valid for: X Hours
- List of Items with:
  - Cause
  - Correction
  - Media
  - Item Price
  - Approve/Deny buttons
- Shop Fees
- Misc Fees
- Total Price
- Taxes Total
- Grand Total
- Signature area

**Actions:**
- Approve Item → No changes on Grand Total
- Decline Item → Recalculates Grand Total, Shop Fees, Taxes
- Submit (requires signature)

**Associated Details:**
- UI should be really nice and attractive for Dealer customers
- Customer cannot submit without signing
- Signature picture needs to be documented
- Advisor name who sends estimate should be displayed
- Grand Total initial status includes all items as approved

---

### 13. Read-only Estimate Screen (READONLY_ESTIMATE)

**Description:** Locked view after customer submission

**Fields:**
- All fields from Mobile UI Estimate (read-only)
- Submit button changed to "Submitted"

**Actions:**
- None (read-only)

**Associated Details:**
- Customer view when accessing estimate after signing

---

### 14. Admin Dashboard (ADMIN_DASH)

**Description:** Dashboard to access management screens

**Actions:**
- Navigate to User Management
- Navigate to Dealer Management
- Navigate to Template Management

---

### 15. User Management Screen (USER_MGMT)

**Description:** Manage user accounts

**Fields:**
- Table with Users:
  - Full Name
  - Username
  - Phone Number
  - Email
  - Role (multiple allowed):
    - Advisor
    - Technician
    - Parts Person
    - Is Admin (Dealer Admin)
  - Active/Inactive
- Filter: Dealer

**Actions:**
- Create New User → New User screen
- Edit User
- Activate/Deactivate User

**Associated Details:**
- Way to add User to Dealer needed

---

### 16. New User Screen (NEW_USER)

**Description:** Create a new user

**Fields:**
- Pick Dealer
- All fields from User Management

**Actions:**
- Create User
- Cancel

---

### 17. User Settings Screen (USER_SETTINGS)

**Description:** Individual user settings

**Fields:**
- Change Password
- 2FA Settings
- Contact Support

**Actions:**
- Update settings
- Save changes

---

### 18. Dealer Management Screen (DEALER_MGMT)

**Description:** Manage Dealers

**Fields:**
- Table with Dealers:
  - Name
  - Location
  - Physical Address (City, State, Address, Postal Code)
  - Contact Information (Phone, Email)
  - Logo
  - Group (db structure TBD)
  - Business Hours
  - Timezone
  - Active/Inactive
- Filters:
  - Name
  - Active/Inactive
  - State

**Actions:**
- Create Dealer → New Dealer screen
- Modify Dealer
- Delete Dealer (logical)

**Associated Details:**
- Logical deletion for Dealers
- Admin name logged on Dealer actions
- Denis and Michael will analyze Customer structures for DealerGroups

---

### 19. New Dealer Screen (NEW_DEALER)

**Description:** Create a new dealer

**Fields:**
- All fields from Dealer Management

**Actions:**
- Create Dealer
- Cancel

---

### 20. Dealer Settings Screen (DEALER_SETTINGS)

**Description:** Configure dealer-specific settings

**Fields:**
- Estimate Settings:
  - Include in Customer Copy checkboxes for:
    - Cause
    - Correction
    - Labor
    - Labor Hours
    - Labor Rate
    - Parts (with sub-options)
    - Totals per section
  - Taxes Rate (percentage)
  - Shop Supplies (Rate % and Maximum $)
  - Door Rate (default $ rate)
  - SMS Template
  - MFA Mandatory (on/off)
  - Terms & Conditions
  - Quotes Valid for Disclaimer (defaults to 48hs)
- Customer Estimate UI Customization:
  - Background Color
  - Text Color
  - Company Logo
- Dealer Settings:
  - Company Logo

**Actions:**
- Save Settings
- Reset to Defaults

**Associated Details:**
- Future: Mileage mandatory/optional settings
- Import capability for future (not MVP)

---

### 21. Template Management Screen (TEMPLATE_MGMT)

**Description:** Manage inspection templates

**Fields:**
- Table with:
  - Template Name (String)
  - Array of Categories (String)
  - Array of Items (String)
  - Active/Inactive

**Actions:**
- Create Template → New Template screen
- Modify Template
- Delete Template

**Associated Details:**
- Administrators can create/modify/delete templates on any Dealer
- Dealers start with empty template state

---

### 22. New Template Screen (NEW_TEMPLATE)

**Description:** Create new inspection template

**Fields:**
- Template Name (String)
- Array of Categories (String)
- Array of Items (String)
- Active/Inactive

**Actions:**
- Create Template
- Cancel

---

### 23. Inspection Template Selection (TEMPLATE_SELECT)

**Description:** List of Categories with Items

**Fields:**
- Categories list
- Items list (strings)

**Actions:**
- Select template
- Continue

---

### 24. Notifications Overlay (NOTIFICATIONS)

**Description:** System-wide notification system

**Fields:**
- Tooltip with notification detail
- Notification types:
  - Estimate Signed → Everyone notified
  - Approved → Everyone notified
  - Declined (all) → Advisor notified
  - Advisor Review → Everyone notified
  - Needs P&A → Parts department
  - Inspection Created → Technician

**Actions:**
- Click to access Estimation

**Associated Details:**
- Appears on every screen
- Sound on arrival
- Updates Dashboard live with animation

---

## Screen Connections

### Authentication Flow:
- LOGIN → Two Factor Auth (if enabled) → SELECT_DEALER → DEALER_DASH

### Customer/Inspection Flow:
- DEALER_DASH → CUSTOMER_SEARCH → CUSTOMER_SELECT or NEW_CUSTOMER → NEW_MPI/MPI_MAIN
- CUSTOMER_SEARCH → NEW_CUSTOMER → MPI_MAIN

### Inspection/Estimation Flow:
- MPI_MAIN → ITEM_STATUS (for Yellow/Red items)
- MPI_MAIN → SEND_ESTIMATE → MOBILE_ESTIMATE
- MPI_MAIN → PREVIEW_ESTIMATE → SEND_ESTIMATE
- MOBILE_ESTIMATE → READONLY_ESTIMATE (after submit)
- MPI_MAIN → APPROVED_ESTIMATE (after customer actions)

### Admin Flow:
- ADMIN_DASH → USER_MGMT → NEW_USER
- ADMIN_DASH → DEALER_MGMT → NEW_DEALER
- ADMIN_DASH → TEMPLATE_MGMT → NEW_TEMPLATE

### Settings Flow:
- DEALER_DASH → USER_SETTINGS
- DEALER_DASH → DEALER_SETTINGS

### Status Change Actions:
- MPI_MAIN → "Send to Parts" → Status: Needs P+A
- MPI_MAIN → "Send to Advisor" → Status: Advisor Review

### Notification System:
- NOTIFICATIONS overlay appears on all screens
- Links to relevant MPI_MAIN/APPROVED_ESTIMATE screens

## Key Technical Details:
- Real-time updates for MPI and Dashboard
- Live user tracking showing who's viewing inspections
- Phone number uniqueness validation
- Logical deletion for Dealers
- Audit logging for admin actions and status changes
- Signature capture and storage
- Dynamic total calculations based on approvals/declines
- Role-based action buttons in MPI screen