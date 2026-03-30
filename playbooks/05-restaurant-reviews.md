# 05. Restaurant Review Management — Full Automation Playbook

## a) Overview

This playbook shows you how to build a complete **inquiry-to-revenue automation system** for restaurant review management. It is designed for solo founders, agencies, and operators who want predictable lead handling, faster response times, and measurable conversion improvement.

**Who it’s for:** business owners, consultants, and implementation freelancers.  
**Expected outcome in 30–60 days:**
- 2x faster first-response time
- Better follow-up consistency (no lead left behind)
- Higher booking/conversion rate through structured pipeline management
- Weekly performance visibility without manual spreadsheet chaos


## b) Prerequisites

### Accounts and tools
- CRM: HubSpot Free, Zoho CRM, Pipedrive, or GoHighLevel
- Automation: Zapier (Starter) or Make (Core)
- Messaging: WhatsApp Business API provider / email provider (Gmail, MailerLite, SendGrid)
- Form capture: Typeform, Tally, Google Forms, or website forms
- AI: ChatGPT or Claude for drafts, summaries, and analysis
- Reporting: Google Sheets + Looker Studio

### Estimated monthly budget
- Lean setup: **$40–$120** (₹3,300–₹10,000)
- Growth setup: **$120–$350** (₹10,000–₹29,000)
- Agency/scale setup: **$350+** (₹29,000+)


## c) Step-by-Step Setup Guide

1. Define the offer and success metric in one page (e.g., leads contacted in <5 minutes, no-show rate below 10%, or return-cycle time under 72 hours).
2. Create a lead/intake form with required fields, consent checkboxes, and source tagging.
3. Set up a central CRM pipeline with custom fields and owners.
4. Connect channels (WhatsApp, email, Instagram/Facebook lead forms, website chat) to the CRM.
5. Create a Make or Zapier scenario: Trigger = new lead/form; Actions = normalize data, dedupe, route owner, send acknowledgement.
6. Add AI generation step for first response draft and personalized next step recommendation.
7. Build follow-up cadence (Day 0, Day 1, Day 3, Day 7) with stop condition when customer replies or books.
8. Create proposal/quote document templates and auto-fill from CRM fields.
9. Track lifecycle events (booked, completed, cancelled, refunded, won/lost) and sync to sheet/dashboard.
10. Set weekly review automation: KPI digest email/WhatsApp to owner every Monday 9 AM.

### Example Make/Zapier Recipe
**Trigger:** New lead submitted  
→ **Action 1:** Formatter/Cleaner (normalize phone, title-case name)  
→ **Action 2:** CRM search (find by phone/email)  
→ **Action 3:** If found = update record; else create record  
→ **Action 4:** AI step (generate personalized first response)  
→ **Action 5:** Send WhatsApp/email response  
→ **Action 6:** Create task for owner if no reply in 12h  
→ **Action 7:** Log to Google Sheet for reporting


## d) AI Integration

### 1) Content generation
Use ChatGPT/Claude to generate service-specific messages and collateral.

**Prompt (copy/paste):**
> You are an operations assistant for a restaurant review management business. Create a concise first-response message in friendly professional tone. Include one qualifying question, one trust signal, and one CTA to book a call.

### 2) Customer communication automation
- Generate first reply drafts from lead context.
- Summarize long chat threads into 5 bullet points.
- Draft objection-handling responses based on pricing, timing, and trust concerns.

### 3) Data analysis / reporting
Prompt AI weekly:
> Analyze this CSV of leads by source, stage, and outcome. Identify the biggest drop-off point, top converting source, and 3 tactical improvements for next week.


## e) CRM / Pipeline Setup

**Recommended stages**
1. New Inquiry
2. Contacted
3. Qualified
4. Proposal/Plan Sent
5. Follow-up Active
6. Won / Booked
7. Completed
8. Lost / Dormant

**Core custom fields**
- Source (Instagram, Google, referral, website, walk-in)
- Budget range
- Preferred timeline/date
- Service intent tag
- Priority score (AI-generated 1–5)
- Last contact date
- Next action date
- Assigned owner

**Automation rules**
- If source is paid ads + no response in 10 minutes → escalate to owner via WhatsApp.
- If proposal sent and no reply in 48h → send value-based reminder template.
- If marked Won → trigger onboarding checklist + thank-you message.
- If marked Lost → ask reason, classify objection, and store for weekly objection report.
- If no activity for 14 days → auto-move to Dormant and trigger reactivation message.


## f) Marketing Quickstart (First 7 Days)

- **Day 1:** Set offer, target niche, and single landing page with one CTA.
- **Day 2:** Launch Google Business Profile update + 3 social posts.
- **Day 3:** Run ₹1000–₹3000 test ad (or $20–$50/day) with conversion tracking.
- **Day 4:** Publish one case-study style post and one FAQ reel/short.
- **Day 5:** Start outbound partnership outreach (10 messages).
- **Day 6:** Review lead quality, adjust targeting/keywords, tighten forms.
- **Day 7:** Send weekly KPI report and make one optimization decision (creative, script, or offer).


## g) Templates Included

### Email Template — First Response
**Subject:** Quick next step for your request

Hi {FirstName},  
Thanks for reaching out! I reviewed your request and can help you move quickly.  
To recommend the best option, could you confirm {KeyQuestion}?  
If useful, book a quick 15-minute slot here: {BookingLink}.

Best,  
{YourName}

### WhatsApp Template — Follow-up (48h)
Hi {FirstName}, just checking in on your request.  
I can hold a spot for {DateOption} if that works. Want me to send options?

### Social Post Template
**Hook:** Most businesses lose leads in the first 30 minutes.  
**Body:** We built a simple automation that captures every inquiry, sends personalized response, and creates follow-up tasks automatically.  
**CTA:** Comment “SYSTEM” and I’ll share the setup checklist.

### Intake Form Template Fields
- Full name
- Phone (with country code)
- Email
- Service needed
- Budget range
- Preferred date/timeline
- Source (dropdown)
- Consent for WhatsApp/email communication


## h) Troubleshooting & FAQ

1. **Leads are not entering CRM.**  
   Check webhook/app connection first, then test trigger with a sample form submit.
2. **Duplicate contacts keep appearing.**  
   Use phone/email as unique key and add a dedupe step before create-contact action.
3. **Messages not delivered on WhatsApp.**  
   Confirm approved templates, valid opt-in, and correct country code formatting.
4. **AI outputs are too generic.**  
   Improve prompts with customer context, budget, timeline, and desired tone.
5. **Low response rate after first message.**  
   Shorten first message, add one clear CTA, and test two follow-up variants.
6. **Dashboard numbers don’t match CRM.**  
   Verify stage mapping and date filters; avoid mixing created date vs. updated date.


## i) Scaling Tips

- **Phase 1 (0–30 days):** Keep one core workflow, one channel, one KPI dashboard.
- **Phase 2 (30–90 days):** Add lead scoring, A/B message testing, and role-based assignment.
- **Phase 3 (90+ days):** Add predictive models (churn, close probability), call transcription, and monthly cohort analysis.
- Build reusable SOPs and cloneable automation templates so delivery is consistent across clients.


## Implementation Checklist (Operational)

- [ ] Test every trigger with 3 sample submissions
- [ ] Verify fallback owner assignment logic
- [ ] Validate all approved WhatsApp templates before launch
- [ ] Configure business-hour vs after-hour reply variants
- [ ] Add UTM/source mapping for all campaign links
- [ ] Build one-page KPI dashboard for weekly review
- [ ] Create rollback plan (manual mode) if automation fails

## KPI Targets & Benchmarks

- First response time: under 5 minutes (warm leads)
- Contact rate: 60%+
- Qualified lead rate: 25%+
- Proposal-to-close: 20%+ (industry dependent)
- No-show rate: below 15%
- Weekly data completeness: 95%+ records with source and stage

## Delivery Notes for Selling This as a Product

Package this as a 14-day implementation sprint:
1. Day 1–2: discovery + pipeline design
2. Day 3–5: tool setup + integrations
3. Day 6–8: AI prompts + templates
4. Day 9–11: testing + edge cases
5. Day 12–14: team training + dashboard + handoff

Deliverables customers love:
- Notion SOP + loom walkthroughs
- Automation map diagram
- Prompt library
- 30-day optimization roadmap


## Additional Practical Examples

- Scenario 1: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 2: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 3: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 4: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 5: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 6: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 7: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 8: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 9: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 10: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 11: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 12: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 13: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 14: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 15: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 16: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 17: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 18: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 19: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 20: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 21: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 22: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 23: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 24: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 25: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 26: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 27: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 28: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 29: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.
- Scenario 30: If a lead asks for pricing only, send value-first response then qualify with budget + timeline before quote.