# Gumroad Onboarding Playbook — Repo

This repository contains the assets and deployment scripts for the "Automated Client Onboarding Playbook + Zapier Recipe" Gumroad product.

Contents:
- playbook.md — the playbook product content (Markdown)
- assets/ — example images and thumbnails (placeholders)
- public/index.html — simple sales page (replace PASTE_GUMROAD_LINK)
- server/ — simple Node.js webhook server to serve the page and receive Gumroad webhooks
- docker-compose.yml & Dockerfile — containers for deployment
- deploy.sh — convenience deploy script for VPS
- .github/workflows/deploy.yml — optional GitHub Actions stub
- VA_SOP.md — VA SOP for fulfillment
- marketing/ — social posts, CapCut prompts, video scripts

How to push to GitHub:
1. Create a repo on GitHub (under your account).
2. On your machine or VPS, run:
   git remote add origin git@github.com:YOURUSERNAME/REPO.git
   git branch -M main
   git push -u origin main

How to deploy on Hetzner VPS (manual):
1. SSH to your VPS.
2. Clone the repo: git clone <repo-url>
3. cd gumroad-onboarding
4. ./deploy.sh

For automated deployment via GitHub Actions, configure secrets in the workflow.


---

Launch checklist and next steps are in the repo files.
