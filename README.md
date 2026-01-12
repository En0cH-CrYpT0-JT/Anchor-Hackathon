# ⚓️ Anchor: Your AI First Mate

> **"Don't let the chaos drown you. Clear the deck, one card at a time."**

**Anchor** is an AI-powered executive function tool designed to help neurodivergent users (ADHD, Autism, or just overwhelmed humans) navigate the stormy seas of daily life.

Instead of a daunting, endless to-do list, Anchor uses **Google Gemini 2.5** (Soon to be Gemini 3 for the Hackathon) to break complex tasks into single, manageable steps, presented as a gamified deck of pirate cards.

---

## 🌊 The Problem
For many people with executive dysfunction, a task like *"Clean the kitchen"* isn't just one task—it's a paralyzing wall of 50 smaller undefined decisions. This leads to **Task Paralysis**: the ship stops moving because the crew doesn't know where to start.

## 🏴‍☠️ The Solution
**Anchor** acts as your Quartermaster. You throw a vague, chaotic task into the app ("My house is a mess"), and the **Gemini 2.5 Multimodal API** analyzes it.
It returns a single, high-priority "Treasure Map" card with:
1.  **A clear starting point** (e.g., "Pick up the trash on the floor").
2.  **Urgency analysis** (High/Medium/Low).
3.  **A bite-sized breakdown** of *only* the immediate next step.

---

## 🚀 Features

### 🧠 Powered by Google Gemini 3
* **Contextual Breakdown:** Breaks "Get Groceries" into "Find your list app" -> "Check the fridge" -> "Grab keys."
* **Tone Matching:** The AI speaks like a loyal First Mate—supportive, direct, and slightly nautical.
* **Smart Prioritization:** Automatically detects urgency based on task context.

### 🎨 Immersive "Pirate" UI
* **The Deck:** Tasks are presented as worn parchment cards.
* **The Deep:** A calming, deep-ocean interface designed to reduce sensory overload.
* **Gamification:** "Clear the Deck" mechanic turns chores into quests.

### ⚡️ Technical Highlights
* **Frontend:** React Native (Expo) & TypeScript.
* **Styling:** Tamagui (for performant, beautiful UI kits).
* **AI Engine:** Google Generative AI SDK (`@google/generative-ai`).
* **State Management:** Zustand.

---

## 🛠️ Getting Started

To run Anchor on your own ship (machine), follow these steps:

### 1. Clone the Repo
```bash
git clone [https://github.com/En0cH-CrYpT0-JT/Anchor-Hackathon.git](https://github.com/En0cH-CrYpT0-JT/Anchor-Hackathon.git)
cd Anchor-Hackathon
```

### 2. Install DependenciesBash

```
npm install
```

### 3. Configure Gemini API:
You need a Google Gemini API key to sail these waters.

Get a key from Google AI Studio.Open services/gemini3Api.ts (or create a .env file).
Insert your API Key:TypeScriptconst API_KEY = "YOUR_GEMINI_API_KEY";


### 4. Hoist the Sails

```
npx expo start
```

Scan the QR code with your phone (Expo Go app) to launch!

🔮 Future Roadmap"Message in a Bottle": Voice-to-text task entry.

👨‍👩‍👧‍👦 "Crew Quarters": Shared decks for family chores.

🔔 Push Notifications: "The tide is coming in!" reminders for time-sensitive tasks.

📜 License

This project was built for the Google AI Hackathon 2026.

MIT License.

Built with ❤️ and ☕️.
