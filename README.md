# KFUPM Tournament Manager

A comprehensive soccer tournament management system designed for the **KFUPM (King Fahd University of Petroleum and Minerals)** community. This platform provides a dual-interface experience: a powerful administrative suite for league organizers and an interactive portal for guests to track match data.

## 🚀 Features

### **Admin Portal**

* **Centralized Dashboard**: Real-time overview of total players, active teams, upcoming matches, and tournament counts.
* **Tournament Management**: Create and oversee multiple soccer leagues.
* **Team & Player Rosters**: Manage registrations for teams and individual players.
* **Match Scheduling**: Organize match timings, team face-offs, and field assignments.
* **Field Management**: Track and assign specific fields/pitches for matches.

### **Guest Portal**

* **Live Results**: View up-to-date scores and historical match data.
* **Player Statistics**: Dedicated views for Top Scorers and Red Card tracking.
* **Team Insights**: Access detailed rosters for participating teams.

## 🛠️ Tech Stack

* **Frontend**: React 19 (Modern functional components)
* **Build Tool**: Vite
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM (v7)
* **API Handling**: Axios
* **UI Components**: React Data Table Component & Styled Components

## 📁 Project Structure

```text
src/
├── layouts/       # Admin, Guest, and Main layout wrappers
├── pages/
│   ├── admin/     # Dashboard, Matches, Teams, Fields, etc.
│   ├── guest/     # Results, Scorers, Team Members
│   └── Home.jsx   # Landing and authentication entry points
├── App.jsx        # Routing and application logic
└── main.jsx       # Application entry point

```

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/KFUPM-Tournament-Manager.git
cd KFUPM-Tournament-Manager

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



## 📜 License

This project is private and intended for use within the KFUPM community.
