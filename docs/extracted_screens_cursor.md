# Quantum Forge Pro - Screen Extraction from Discovery Sessions

## Actors Identified
- **User** - General system user
- **Customer** - End customer receiving estimates/inspections
- **Dealer Admin** - Administrative user for dealer management

## Screen Definitions

### SCR-001: Login Screen

**Description:** Text field for username entry and password authentication

**Fields:**
- Username (text field)
- Password (text field)

**Actions:**
- Login
- Two Factor Authentication (2FA) verification via SMS/email

**Technical Details:**
- Implementation of verification codes via SMS/email for additional security layer
- 2FA Settings available in User Settings

**Connections:** 
- → First time Login/Registration (SCR-002)
- → Select Dealer (SCR-003)

### SCR-002: First Time Login / Registration

**Description:** Initial registration process for new users

**Fields:** (Details to be defined)

**Actions:**
- Complete registration

**Connections:**
- → Select Dealer (SCR-003)

### SCR-003: Select Dealer

**Description:** Dropdown list with User's associated Dealers

**Fields:**
- Dealer dropdown list

**Actions:**
- Select dealer

**Technical Details:**
- Many to many User <> Dealer relationship supported

**Connections:**
- → Dealer Dashboard (SCR-004)

### SCR-004: Dealer Dashboard

**Description:** Dashboard with ability to view active inspections and view closed inspections with filtering capabilities

**Fields:**
- List of Active Estimates:
  - Creation Date & Time
  - Vehicle
  - Customer
  - Time
  - Status

**Actions:**
- New Estimate/Inspection →
- User Settings →
- Settings →
- View active inspections
- View closed inspections

**Technical Details:**
- Sorting: By Creation Date, Alphabetically by Customer
- Filters: Status, Date
- Real-time updates with yellowish animation on status changes
- Live updates for visual distinction with animation

**Connections:**
- → New Multi-point Inspection (SCR-005)
- → User Settings (SCR-016)
- → Dealer Settings (SCR-017)

### SCR-005: New Multi-point Inspection (MPI Group)

**Description:** Create and initialize new inspection process

**Fields:**
- Customer Information:
  - First Name *
  - Last Name *
  - Phone Number *
  - Email
- Vehicle data:
  - Year *
  - Make *
  - Model *
  - VIN
  - Mileage
  - Color
  - Attach Photo of the Vehicle
- Customer Notes
- Template Selection (dropdown)
- Repair Order

**Actions:**
- Customer Search (by phone)
- Create Customer
- Create and Continue
- Create and Go Back
- Camera button (if available)
- Choose from library

**Technical Details:**
- Phone number validation (unique amongst customers)
- Template selection greyed out for estimates
- Generic template option available

**Connections:**
- → Customer Search (SCR-006)
- → New Customer (SCR-007)
- → Multi-point Inspection/Estimation (SCR-008)

### SCR-006: Customer Search

**Description:** Search customers on their Dealer instance

**Fields:**
- Phone number search field

**Actions:**
- Search by phone

**Technical Details:**
- MVP: Search only by phone number
- Future versions may include more fields and vehicle data

**Connections:**
- → Customer Selection (SCR-007)
- → New Customer (SCR-007)

### SCR-007: Customer Selection / New Customer

**Description:** Customer data should be editable for updates, with locked fields that can be manually edited

**Fields:**
- Customer data (editable)
- Phone Number uniqueness check

**Actions:**
- Edit customer data
- Update customer information

**Connections:**
- → Multi-point Inspection/Estimation (SCR-008)

### SCR-008: Multi-point Inspection / Estimation (MPI Group)

**Description:** Conduct detailed vehicle inspection with real-time collaboration

**Fields:**
- Customer Information display
- Customer Notes (editable)
- Inspection Notes (editable)
- Active Users list (real-time)
- Template items by Category and Items
- Estimate Totals:
  - Labor Total
  - Parts Total
  - Shop Fees
  - Misc Fees
  - Taxes
  - Tax checkboxes (Labor, Misc Fees, Shop Fees)

**Actions:**
- Select Green/Yellow/Red for each item
- Edit inspection notes
- Send to Advisor
- Send to Parts
- Send Estimate
- Preview Estimate
- Add Additional Service Request (inspection only)
- Add Additional Item (estimate only)

**Technical Details:**
- Non-sequential work flow
- Scrollable items
- Live updates and real-time collaboration
- Green items cannot be opened
- Yellow/Red items open Item Status
- Always charge taxes on Parts
- Screen looks same for all actors, different action buttons

**Connections:**
- → Item Status (SCR-009)
- → Send Estimate (SCR-012)
- → Preview Estimate (SCR-013)
- → Add Additional Service Request (SCR-010)

### SCR-009: Item Status

**Description:** Detailed status management for inspection items

**Fields:**
- User Inputs:
  - Cause *
  - Correction *
  - Hours
  - Rate (pre-loaded with default dealer rate)
  - Media (upload pictures)
  - Comments
- Part List:
  - Description (free text)
  - Parts Number (free text)
  - Qty (number)
  - Parts Price ($)
  - Total Price (calculated)
  - Availability (dropdown: In Stock, SOP, Backorder, No ETA)
- Totals:
  - Labor
  - Parts
  - Line Total (Labor + Parts)

**Actions:**
- Add Parts
- Upload media
- Select availability
- Calculate totals
- Collapse item after completion

**Technical Details:**
- SOP selection shows calendar for expected date
- Can have zero or more parts
- Item collapses after finishing field loading

**Connections:**
- ← Back to Multi-point Inspection/Estimation (SCR-008)

### SCR-010: Add Additional Service Request

**Description:** Document additional service needs identified during inspection (INSPECTION ONLY)

**Fields:**
- Service request details

**Actions:**
- Add to ASR group

**Technical Details:**
- Groups items at the bottom
- Only available during inspection

**Connections:**
- ← Back to Multi-point Inspection/Estimation (SCR-008)

### SCR-011: Add Additional Item

**Description:** Document items on the Estimate (ESTIMATE ONLY)

**Fields:**
- Item details

**Actions:**
- Add to Items category

**Technical Details:**
- Only available during estimate
- Template selection disabled for estimates

**Connections:**
- ← Back to Multi-point Inspection/Estimation (SCR-008)

### SCR-012: Send Estimate

**Description:** Send estimate to customer via SMS

**Fields:**
- Customer Name (display)
- Phone number (editable)
- SMS Template text

**Actions:**
- Send Estimate

**Technical Details:**
- Default ASR Request Template Text from dealer settings
- SMS format: "Hello {First Name}, Thank you for choosing {Dealer Name}, Please click the following link to review the technicians findings: https://link"

**Connections:**
- → Mobile UI Estimate (SCR-014)

### SCR-013: Preview Estimate

**Description:** Allow Advisor to view what will be sent to customer

**Fields:**
- Same as customer view

**Actions:**
- Preview

**Technical Details:**
- Reuses customer link for advisor preview

**Connections:**
- Uses same interface as Mobile UI Estimate (SCR-014)

### SCR-014: Mobile UI Estimate (Customer View)

**Description:** Customer-facing estimate interface with approval/decline functionality

**Fields:**
- Vehicle Media (if available)
- Valid for: X Hours
- List of Items with:
  - Cause
  - Correction
  - Media
  - Item Price
- Shop Fees
- Misc Fees
- Total Price
- Taxes Total
- Grand Total
- Signature area

**Actions:**
- Approve/Deny items
- Submit (requires signature)
- Digital signature

**Technical Details:**
- Nice and attractive UI for dealer customers
- Grand Total initially includes all items as approved
- Dynamic total updates as items are approved/declined
- Cannot submit without signing
- Locks UI after signing (becomes read-only)
- Advisor name appears on estimate

**Connections:**
- → Read-only Estimate (SCR-015)

### SCR-015: Read-only Estimate

**Description:** Locked view for customer after estimate is signed

**Fields:**
- Same as Mobile UI Estimate but locked

**Actions:**
- View only

**Technical Details:**
- Submit button changes to "Submitted"
- Future customer access view

**Connections:**
- View only, no further connections

### SCR-016: User Settings

**Description:** User account management and preferences

**Fields:**
- Password change
- 2FA Settings
- Contact Support

**Actions:**
- Change password
- Configure 2FA
- Contact support

**Connections:**
- ← Back to Dealer Dashboard (SCR-004)

### SCR-017: Dealer Settings

**Description:** Comprehensive dealer configuration management

**Fields:**
- Estimate Settings (multiple on/off toggles for customer copy)
- Taxes Rate (percentage)
- Shop Supplies Rate and Maximum
- Door Rate (default $ rate)
- SMS Template
- MFA Mandatory (on/off)
- Terms & Conditions
- Quotes Valid disclaimer (defaults to 48hs)
- Customer Estimate UI Customization:
  - Background Color
  - Text Color
  - Company Logo

**Actions:**
- Configure estimate settings
- Set rates and fees
- Customize SMS template
- Configure UI customization

**Technical Details:**
- Templating for: First Name, Store Name, Link
- Default ASR Request Template Text setting

**Connections:**
- ← Back to Dealer Dashboard (SCR-004)

### SCR-018: Admin Dashboard

**Description:** Administrative dashboard to access management screens

**Fields:**
- Navigation to management screens

**Actions:**
- Access management screens

**Connections:**
- → Dealer Management (SCR-019)
- → User Management (SCR-020)
- → Template Management (SCR-021)

### SCR-019: Dealer Management

**Description:** Manage dealer accounts and information

**Fields:**
- Table with Dealers:
  - Name
  - Location
  - Physical Address (City, State, Address, Postal Code)
  - Contact Information (Phone, Email)
  - Logo
  - Group
  - Business Hours
  - Time Zone
  - Active/Inactive status

**Actions:**
- Create Dealer
- Modify Dealer
- Delete Dealer (logical)

**Technical Details:**
- Filters: Name, Active/Inactive, State
- Admin actions are logged with admin name
- Logical deletion for dealers

**Connections:**
- → New Dealer (SCR-022)
- ← Back to Admin Dashboard (SCR-018)

### SCR-020: User Management

**Description:** Manage user accounts and roles

**Fields:**
- Table with Users:
  - Full Name
  - Username
  - Phone Number
  - Email
  - Role (multiple roles possible):
    - Advisor
    - Technician
    - Parts Person
    - Is Admin (Dealer Admin)
  - Active/Inactive status

**Actions:**
- Create User
- Modify User
- Activate/Deactivate User

**Technical Details:**
- Filter by Dealer
- User can have multiple roles
- Ability to add user to dealer

**Connections:**
- → New User (SCR-023)
- ← Back to Admin Dashboard (SCR-018)

### SCR-021: Template Management

**Description:** Manage inspection templates

**Fields:**
- Table with Templates:
  - Template Name
  - Array of Categories
  - Array of Items
  - Active/Inactive status

**Actions:**
- Create Template
- Modify Template
- Delete Template

**Technical Details:**
- Administrators can manage templates for any dealer
- New dealers start with empty template state
- Future import capability consideration

**Connections:**
- → New Template (SCR-024)
- → Inspection Template (SCR-025)
- ← Back to Admin Dashboard (SCR-018)

### SCR-022: New Dealer

**Description:** Create a new dealer account

**Fields:**
- All dealer management fields

**Actions:**
- Create dealer
- Save and continue

**Connections:**
- ← Back to Dealer Management (SCR-019)

### SCR-023: New User

**Description:** Create a new user account

**Fields:**
- All user management fields
- Dealer selection

**Actions:**
- Create user
- Assign to dealer

**Connections:**
- ← Back to User Management (SCR-020)

### SCR-024: New Template

**Description:** Create a new inspection template

**Fields:**
- Template Name
- Array of Categories
- Array of Items
- Active/Inactive status

**Actions:**
- Create template
- Add categories
- Add items

**Connections:**
- ← Back to Template Management (SCR-021)

### SCR-025: Inspection Template

**Description:** Display template structure for inspection use

**Fields:**
- List of Categories with List of Items
- Items are strings

**Actions:**
- View template structure

**Technical Details:**
- Used as basis for inspections
- Items are simple string entries

**Connections:**
- Used by Multi-point Inspection/Estimation (SCR-008)

## Notifications System

**Description:** Cross-screen notification system

**Technical Details:**
- Appears on every screen
- Tooltip with details that appears and disappears
- Clickable to access estimation
- Sound notification on arrival
- Live dashboard updates with visual animation

**Notification Types:**
- Estimate Signed (everyone notified)
- Approved (everyone notified)
- Declined (advisor notified)
- Advisor Review (everyone notified)
- Needs P&A (parts department notified)
- Inspection Created (technician notified)

## Status Flow and Actions

**Status Changes:**
- Send to Advisor → Changes status to "Advisor Review"
- Send to Parts → Changes status to "Needs P + A"
- Approve Item → No changes on Grand Total
- Decline Item → Recalculates Grand Total, Shop Fees, and Taxes

**Technical Notes:**
- Name of Advisor/Technician logged on status changes
- Audit log not needed for MVP
- Logical deletion throughout system
- Real-time collaboration and updates
- Advisors typically create inspections, but any role can for MVP
- Estimate-only mode excludes technician involvement 