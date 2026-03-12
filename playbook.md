# Automated Client Onboarding Playbook

## Overview
This playbook helps small agencies and freelancers automate client onboarding using a form → Zapier/Make recipe → client folder + invoice flow. Buyers can get value in <60 minutes.

## Outcome
- New client data captured reliably
- Client folder created automatically
- Welcome email and invoice generated automatically
- Reduced onboarding time from hours to <60 minutes

## Requirements
- Zapier or Make account
- Gumroad purchase (this product)
- Optional: Google Drive account, Stripe/Gumroad for billing

## Steps
1. Create the intake form
   - Use Google Forms / Typeform. Ask for: name, email, company, project brief, billing details.
2. Create a Google Drive folder template
   - Create a folder named "CLIENT - TEMPLATE" with subfolders: Assets, Deliverables, Contracts.
3. Zapier recipe (pseudo-export)
   - Trigger: New Form Submission
   - Action 1: Create Folder in Google Drive (use form name + company)
   - Action 2: Create a Google Doc from template (Welcome doc)
   - Action 3: Create Invoice row in Google Sheets (or trigger invoice in Stripe via webhook)
   - Action 4: Send Welcome Email (Gmail) with link to folder and next steps
4. Test flow with sample submission
5. Quick checklist to verify (included in product ZIP)

## Config values
- FORM_ID: <your form id>
- DRIVE_TEMPLATE_ID: <template folder id>
- WELCOME_DOC_TEMPLATE_ID: <doc template id>
- INVOICE_SHEET_ID: <sheet id>

## Troubleshooting
- If folder creation fails, check Zapier Google Drive auth
- If email not sent, verify Gmail/SMTP quotas

## FAQ
Q: Can I use Make instead of Zapier?
A: Yes. The recipe maps easily to Make modules.


---

(Additional code snippets, recipe exports, and assets are in the repo.)
