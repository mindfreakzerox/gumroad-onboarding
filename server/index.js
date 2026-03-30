const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const AUTH_COOKIE = 'gumroad_auth';
const SITE_PASSWORD = 'gumroad2026';

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', (req, res) => res.json({ ok: true }));

function renderLoginPage(error = '') {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gumroad Catalog Login</title>
  <style>
    :root {
      --bg: #f4f7fb;
      --surface: #ffffff;
      --text: #112033;
      --muted: #5d6f86;
      --border: #dbe5f0;
      --brand: #2b7de9;
      --brand-soft: #e8f2ff;
      --danger: #c74242;
      --radius: 14px;
      --shadow: 0 8px 28px rgba(19, 44, 77, 0.08);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: linear-gradient(180deg, #f8fbff 0%, var(--bg) 100%);
      color: var(--text);
      padding: 24px;
    }
    .card {
      width: 100%;
      max-width: 420px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: var(--shadow);
      padding: 24px;
    }
    h1 { margin: 0 0 8px; font-size: 1.6rem; }
    p { margin: 0 0 14px; color: var(--muted); }
    label { display: block; font-weight: 600; margin-bottom: 8px; }
    input {
      width: 100%;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 11px 12px;
      font-size: 1rem;
      margin-bottom: 12px;
    }
    button {
      width: 100%;
      border: 1px solid var(--brand);
      background: var(--brand-soft);
      color: #0f3f75;
      border-radius: 10px;
      padding: 10px 12px;
      font-weight: 700;
      cursor: pointer;
    }
    .error {
      margin-top: 10px;
      color: var(--danger);
      font-size: 0.92rem;
    }
  </style>
</head>
<body>
  <main class="card">
    <h1>🔐 Enter Password</h1>
    <p>This catalog is protected. Enter the access password to continue.</p>
    <form method="POST" action="/login">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required />
      <button type="submit">Unlock Catalog</button>
    </form>
    ${error ? `<div class="error">${error}</div>` : ''}
  </main>
</body>
</html>`;
}

app.get('/login', (req, res) => {
  if (req.cookies[AUTH_COOKIE] === '1') {
    return res.redirect('/');
  }
  return res.status(200).send(renderLoginPage());
});

app.post('/login', (req, res) => {
  const { password } = req.body || {};
  if (password !== SITE_PASSWORD) {
    return res.status(401).send(renderLoginPage('Incorrect password. Please try again.'));
  }

  res.cookie(AUTH_COOKIE, '1', {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7
  });
  return res.redirect('/');
});

app.get('/logout', (req, res) => {
  res.clearCookie(AUTH_COOKIE);
  return res.redirect('/login');
});

app.use((req, res, next) => {
  if (req.path === '/health' || req.path === '/login') {
    return next();
  }

  if (req.cookies[AUTH_COOKIE] === '1') {
    return next();
  }

  return res.redirect('/login');
});

app.use(express.static(path.join(__dirname, '../public')));
app.use('/playbooks', express.static(path.join(__dirname, '../playbooks')));
app.use('/manuals', express.static(path.join(__dirname, '../manuals')));

// Simple Gumroad webhook receiver (logs to file)
app.post('/webhook', (req, res) => {
  const data = req.body;
  const logLine = `[${new Date().toISOString()}] ${JSON.stringify(data)}\n`;
  fs.appendFileSync(path.join(__dirname, '../gumroad_events.log'), logLine);
  console.log('Gumroad webhook received');
  res.json({ received: true });
});

app.listen(PORT, () => console.log('Server started on', PORT));
