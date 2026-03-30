# 11. Local AI Setup + Automated Onboarding Bundle

## a) Offer Overview

You install a **private, one-time AI system** for restaurants, salons, dentists, gyms, law firms, or any local business that fields repetitive enquiries. Delivery happens on-site or over a remote session in under 90 minutes:

1. Train an OpenClaw assistant with FAQs + ops docs
2. Connect Voiceflow/Botpress to their website, WhatsApp, or phone IVR
3. Wire bookings + payments into Google Calendar/Calendly + Stripe/Square
4. Build an internal Notion AI knowledge base for staff SOPs
5. Tie everything into Zapier so every enquiry becomes a logged opportunity + follow-up

**Why they buy:** owners are bleeding hours to calls and DMs. Automating 30–50 daily enquiries saves ~$800/mo in staff time and pays back a $3K setup within 60 days. They get privacy (runs on their Mac mini / in-house server), zero monthly AI subscription, and you stay on retainer for tweaks.

## b) Required Stack

| Layer | Tool | Notes |
| --- | --- | --- |
| Local AI runtime | **OpenClaw** | Install on Mac mini / Intel NUC / VPS. Configure assistant + knowledge base. |
| Conversational UI | **Voiceflow** (easy) or **Botpress** (advanced) | Build web widget + WhatsApp/Twilio bridge. |
| Booking + payments | Calendly/Google Calendar + Stripe/Square | AI books slots and collects deposits. |
| Internal FAQ | Notion AI or Slite | Upload SOP PDFs, HR docs, menus, policies. |
| Glue | Zapier/Make | Logs enquiries, creates tasks, sends owner digest. |
| Comms | WhatsApp Business API, Twilio Voice, web chat | Choose per client. |

## c) 60-Minute Setup Script

1. **Prep (15 min)**
   - Clone OpenClaw template project
   - Collect business FAQ doc, menu/services, pricing, policies, calendar link, booking rules, intake form
   - Spin up Voiceflow/Botpress workspace with pre-built block logic

2. **Install & Train (20 min)**
   - Deploy OpenClaw agent on client hardware (ssh or local installer)
   - Load knowledge base (PDFs, menu CSV, SOP docs)
   - Configure base instructions (tone, escalation rules)
   - Test 5 FAQ queries live

3. **Channels & Booking (15 min)**
   - Voiceflow widget → website embed (or WhatsApp/Twilio phone IVR)
   - Connect Google Calendar/Calendly with service buffers + max daily slots
   - Connect Stripe/Square links (optional deposit/hold)
   - Add Zapier recipe: New enquiry → Google Sheet log → owner Slack/WhatsApp summary → CRM (AirTable/HubSpot) task

4. **Internal FAQ + Social (10 min)**
   - Drop SOP docs into Notion AI page
   - Create 4 weekly social prompts using Claude (tone = brand voice)
   - Show owner how to request new posts ("Write 3 IG captions about…")

5. **Handoff (5 min)**
   - Walk owner through dashboard + fallback channel
   - Explain 30-day support + optional $300–$500/mo retainer for tweaks/new menus

## d) Pricing Blueprint

- **Starter ($1,500):** External FAQ bot, 1 channel, Zapier logging
- **Standard ($3,000):** FAQ + bookings + internal Notion brain + social prompts (default offer)
- **Premium ($4,500–$6,000):** Adds phone IVR, multi-location routing, 3 months of check-ins
- **Retainer ($300–$500/mo):** Menu changes, new promos, analytics reports

## e) Outreach Script (Paste-able)

> Hey {{Name}} — noticed {{business}} handles all enquiries manually. I set up private AI systems that answer FAQs, take bookings, and give your staff an internal knowledge base. Install takes about an hour, runs on your own hardware, and pays for itself in <60 days. Want me to show you a 10‑minute demo this week?

Send 20/day via email + Instagram/WhatsApp DM. Track replies → book Zoom demo → close by framing labor savings (~$800/mo for 2 hours/day saved).

## f) Demo Checklist

1. Ask their biggest enquiry bottleneck (after-hours calls? menu questions?)
2. Show a live chatbot responding to that exact pain
3. Show calendar booking or internal SOP response
4. Flip to ROI slide: 40 calls/day × 2 min = 80 min/day (~$800/mo labor). $3K setup recovers in 60 days
5. Close with delivery timeline ("I can install this by Friday") + 30-day support

## g) Automation Recipes

### Zapier — Enquiry Logger
- **Trigger:** Webhook from Voiceflow/Botpress when conversation ends
- **Actions:**
  1. Formatter → parse name/phone/email/question
  2. Google Sheets → append row (timestamp, channel, classification, outcome)
  3. Slack/WhatsApp → send owner summary w/ CTA ("Reply 'CALL' to trigger callback")
  4. HubSpot/AirTable → create task + due date 2h later if no booking

### Calendar Sync
- Webhook (booking intent) → Filter (service) → Calendly API to schedule → Email/SMS confirmation → Add to CRM + send deposit link if required

### Internal FAQ Loader
- Watch Notion database (status=Ready) → Export page markdown → Upload to OpenClaw knowledge store → notify ops channel

## h) Deliverables Checklist (give to VA)

- [ ] PDF one-pager of the offer + ROI math (auto-filled for each client)
- [ ] Password-protected dashboard link (OpenClaw control UI)
- [ ] Voiceflow embed code + instructions for Webflow/WordPress
- [ ] Notion workspace with Staff FAQ + AI guidance prompt
- [ ] Zapier recipe (shared) + documentation screenshot
- [ ] 4 social posts (captions + visuals prompt) scheduled for the next 2 weeks
- [ ] 30-day check-in calendar invite

## i) Troubleshooting

| Issue | Fix |
| --- | --- |
| AI answers outdated info | Re-sync knowledge base. Keep menu/service doc in Google Drive + automate upload nightly. |
| Bookings double-book | Ensure calendar integration uses "Collective" pooling + buffer. Drop failsafe zap to verify slot availability. |
| WhatsApp template rejected | Submit generic FAQ template first, get approved, then swap text. Keep length <1024 chars. |
| Owner nervous about "AI tone" | Create 5 canned answer examples inside instructions. Let them edit copy live during handoff. |
| Staff ignores internal FAQ | Add QR codes in break room linking to Notion search. Pair with incentive: "Check brain first, then ping manager." |

## j) Scaling Moves

- Productize deliverables (Figma slides, Loom walkthrough, VA SOP) so you can hire contractors
- Build a case study after the first 3 installs (before/after inbox screenshot, labor saved)
- Partner with POS vendors or local MSPs to refer clients (rev-share 10–15%)
- Offer add-ons: AI powered phone line (Twilio), SMS rebooking nudges, review responder bot, multi-location analytics
