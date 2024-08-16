type Project = {
  name: string;
  link?: string;
  description: string;
  tags: string[];
}

export const skills = [
  "Typescript",
  "Golang",
  "React",
  "Vue",
  "Svelte(kit)",
  "Nuxt",
  "Java",
  "PostgreSQL/MySQL/MSSQL",
  "Git",
  "Linux"
]

export const varia = [
  "Leader in scouting group",
  "Long-distance runner",
  "Placed 3rd in the Cybersecurity Challenge Belgium 2024",
]

export const projects: Project[] = [
  {
    name: "Access Management",
    description: "A custom tailored Ticket, Shift & Material Management System for Student Kick-Off Ghent",
    tags: ["Ruby on Rails"]
  },
  {
    name: "🚧 Vigilance View",
    description: "A replay service for FiveM & RedM server owners which captures players locations and provide an accessible way of interacting with this data",
    tags: ["Rust", "React", "Golang", "Elasticsearch"]
  },
  {
    name: "Gonny the station chef",
    description: "A BLE packet capture & pub sub to inform of the presence of certain devices near the capturer",
    link: "https://github.com/12urenloop/Ronny-the-station-chef",
    tags: ["Golang", "PostgreSQL", "BLE"]
  },
  {
    name: "Snaphold",
    description: "\"Snapshots Held Until Later Date\", a Nuxt PWA application to capture photos that are hidden until a specified date",
    link: "https://github.com/NuttyShrimp/SnapHold",
    tags: ["Vue", "Nuxt", "PostgreSQL"]
  },
  {
    name: "Scougi-Library",
    description: "Next.js application to display the \"Scougi\", a trimesterly published paper for my local scouting group",
    link: "https://github.com/NuttyShrimp/scougi-library",
    tags: ["React", "Next.js", "PostgreSQL"]
  },
  {
    name: "DeGrensRP",
    description: "A unique, one of a kind framework for FiveM made for the biggest belgian GTA V Roleplay community",
    link: "https://github.com/NuttyShrimp/DeGrens",
    tags: ["Typescript", "React", "MySQL"]
  },
  {
    name: "DeGrensRP Discord Bot",
    description: "A discord bot which supports the admin in their duties and automates a part of the intake process",
    link: "https://github.com/NuttyShrimp/dg-discord-bot",
    tags: ["Golang", "MySQL"]
  },
  {
    name: "DeGrensRP Web Panel",
    description: "The panel supported admins by giving them an accessible way of getting user info, interpreting logs and helping playerss through reports",
    link: "https://github.com/NuttyShrimp/dg-web-panel",
    tags: ["Golang", "React", "MySQL"]
  },
]
