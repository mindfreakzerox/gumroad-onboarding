const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use('/playbooks', express.static(path.join(__dirname, '../playbooks')));

app.get('/health', (req,res)=>res.json({ok:true}));

// Simple Gumroad webhook receiver (logs to file)
app.post('/webhook', (req,res)=>{
  const data = req.body;
  const logLine = `[${new Date().toISOString()}] ${JSON.stringify(data)}\n`;
  fs.appendFileSync(path.join(__dirname,'../gumroad_events.log'), logLine);
  console.log('Gumroad webhook received');
  res.json({received:true});
});

app.listen(PORT, ()=>console.log('Server started on',PORT));
