p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=8A2BE2&center=true&vCenter=true&width=1000&height=200&lines=NEXI+MD+V1;VERSION+1.0.0;BY+DS+PRIMIS" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://files.catbox.moe/o3n7wn.jpg" width="800" alt="Banner Image"/>
</p>

---

## ⭐ Fork This Repository

<p align="center">
  <a href="https://github.com/DevPrimis/NEXI-MD/fork">
    <img src="https://img.shields.io/badge/FORK%20REPO-Click%20Here-007ACC?style=for-the-badge&logo=github" alt="Fork Repo" />
  </a>
</p>

---

## ⚙️ Generate Your SESSION_ID

<p align="center">
  <a href="https://inconnu-tech-web-session-id.onrender.com/">
    <img src="https://img.shields.io/badge/GET%20SESSION_ID-Generate%20Now-3F51B5?style=for-the-badge&logo=whatsapp" alt="Get Session ID"/>
  </a>
</p>

---

## 📣 Join the WhatsApp Channel

<p align="center">
  <a href="https://whatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44">
    <img src="https://img.shields.io/badge/JOIN%20MY-WHATSAPP%20CHANNEL-25D366?style=for-the-badge&logo=whatsapp" alt="WhatsApp Channel"/>
  </a>
</p>

---

## 🚀 Quick Deployment Options

### Heroku

<p align="center">
  <a href="https://dashboard.heroku.com/new-app?template=https://github.com/DevPrimis/NEXI-MD">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"/>
  </a>
</p>

### TalkDrove

<p align="center">
  <a href="https://host.talkdrove.com/dashboard/select-bot/prepare-deployment?botId=51">
    <img src="https://img.shields.io/badge/DEPLOY-NOW-h?color=navy&style=for-the-badge&logo=visualstudiocode" alt="Deploy TalkDrove"/>
  </a>
</p>

### Replit

<p align="center">
  <a href="https://repl.it/github/DevPrimis/NEXI-MD">
    <img src="https://img.shields.io/badge/-REPLIT-orange?style=for-the-badge&logo=replit&logoColor=white" alt="Deploy Replit"/>
  </a>
</p>

### Koyeb

<p align="center">
  <a href="https://app.koyeb.com/auth/signin">
    <img src="https://img.shields.io/badge/-KOYEB-blue?style=for-the-badge&logo=koyeb&logoColor=white" alt="Deploy Koyeb"/>
  </a>
</p>

### Railway

<p align="center">
  <a href="https://railway.app/new">
    <img src="https://img.shields.io/badge/RAILWAY-h?color=black&style=for-the-badge&logo=railway" alt="Deploy Railway"/>
  </a>
</p>

---

## 🧩 Other Deployment Methods

| Platform       | Link                                         |
|----------------|----------------------------------------------|
| Glitch         | [Deploy on Glitch](https://glitch.com/signup)|
| Codespaces     | [Start Codespace](https://github.com/codespaces/new) |
| Render         | [Go to Render](https://dashboard.render.com) |

---

## ⚡ GitHub Actions Deployment Workflow

```
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 */6 * * *'

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Install FFmpeg
        run: sudo apt-get install -y ffmpeg

      - name: Start application with timeout
        run: |
          timeout 21590s npm start

      - name: Save state (Optional)
        run: ./save_state.sh
```    
## ❤️ Credits

[![GitHub - DS PRIMIS](https://img.shields.io/badge/GitHub-DS--PRIMIS-181717?style=for-the-badge&logo=github)](https://github.com/DevPrimis)

<p align="center">
  <img src="https://img.shields.io/badge/MADE%20WITH❤️BY-DS%20PRIMIS-00CED1?style=for-the-badge"/>
</p>
