# Local AI Setup Delivery Manual (VA / Implementation Checklist)

## 1. Pre-Call Prep
- [ ] Confirm signed agreement + payment (Stripe invoice or Gumroad order)
- [ ] Collect assets via Typeform/Tally: logo, brand voice, FAQ doc, menu/services, booking rules, calendar link, preferred channels, escalation contacts
- [ ] Provision workspaces:
  - OpenClaw project clone
  - Voiceflow project (duplicate "Local AI Template")
  - Notion workspace + Staff FAQ database
  - Zapier folder
- [ ] Verify hardware: Mac mini IP / remote access (AnyDesk/SSH) or VPS credentials. Ensure ports 18789/18792 open locally.

## 2. Session Flow (60–90 Minutes)
1. **Kickoff (5 min)** — outline agenda, reconfirm outcomes
2. **OpenClaw install (15 min)**
   - `curl -s https://install.openclaw.ai | bash`
   - Load instructions + knowledge files (`oc deploy brain.yaml`)
   - Run `openclaw status` to confirm services
3. **Voiceflow/Botpress hookup (15 min)**
   - Update knowledge API key + endpoint
   - Configure fallback → human handoff WhatsApp number
   - Generate embed script + test on staging page
4. **Bookings & Payments (10 min)**
   - Connect Google Calendar/Calendly via OAuth
   - Toggle "invitee pays" if they want deposit
   - Test booking from chatbot; confirm email + calendar entry
5. **Internal FAQ (10 min)**
   - Upload SOP PDFs into Notion database
   - Add instructions doc: "Prompt format" + example queries
   - Share workspace with manager
6. **Zapier automation (10 min)**
   - Import recipe
   - Map fields to Sheets + Slack/WhatsApp
   - Test end-to-end run (conversation → sheet row + owner alert)
7. **Social Content (5 min)**
   - Use Claude prompt to write 4 weekly posts
   - Deliver as Google Doc or schedule via Metricool
8. **Handoff (5 min)**
   - Walk through owner dashboard, fallback method, support channel
   - Schedule 30-day check-in + upsell retainer

## 3. Files to Deliver
- Client folder in Google Drive containing:
  - `01-Offer-One-Pager.pdf`
  - `02-AI-Assistant-Instructions.md`
  - `03-Voiceflow-Embed.html`
  - `04-Notion-Staff-FAQ-Link.txt`
  - `05-Zapier-Recipe.json`
  - `06-Social-Captions.docx`
  - Loom recording of final walkthrough

## 4. QA Checklist
- [ ] Ask chatbot 5 FAQ questions (hours, parking, pricing, booking, refund)
- [ ] Trigger after-hours scenario ("Can I book at 11pm?")
- [ ] Book test appointment; verify owner email + calendar invite
- [ ] Cancel booking; ensure Slack/WhatsApp notice fires
- [ ] Ask internal question via Notion AI ("Where is refund policy?")
- [ ] Review sheet log for latest enquiries
- [ ] Confirm stripe test payment (if enabled)

## 5. Post-Install Follow-up
- Day 1: Send recap email with bullet points + Loom link
- Day 7: Check analytics — number of conversations, bookings, issues. Offer tweaks.
- Day 30: Share ROI snapshot ("30 days → 812 enquiries handled, 38 bookings, saved 38 staff hours"). Pitch retainer or expansion (multi-location, voice IVR, marketing bundle).

## 6. Retainer Playbook (Monthly)
- Update knowledge base with new menu/services
- Generate monthly social posts + SMS promos
- Review logs, add top 3 intents to FAQ
- Provide performance PDF: enquiries answered, bookings closed, issues escalated
- Hold 20-min strategy call; pitch upsells (reviews bot, loyalty flows, AI phone agent)
