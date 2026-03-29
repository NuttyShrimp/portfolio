type Project = {
  name: string;
  link?: string;
  description: string;
  tags: string[];
}

type Work = {
  place: string;
  jobTitle: string;
  start: string;
  end: string;
}

export const workExperience: Work[] = [
  {
    place: "Volvo Trucks",
    jobTitle: "Intern - C# developer",
    start: "Feb 2026",
    end: "May 2026",
  },
  {
    place: "Citymesh",
    jobTitle: "Studentjob - Temporary Netowrks",
    start: "Jun 2025",
    end: "Aug 2025",
  },
  {
    place: "IDLab (UGent - UAntwerpen - imec)",
    jobTitle: "Studentjob - Web developer",
    start: "Aug 2024",
    end: "Dec 2024",
  }
]

export const skills = [
  "Typescript",
  "Golang",
  "React",
  "Vue",
  "C#/ASP.NET",
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
  "Placed 3rd in the Cybersecurity Challenge Belgium 2024 & 2025",
]

export const projects: Project[] = [
  {
    name: "Salsa",
    description: "A webapp to interact with epson scanners for an workgroup at Ghent University to enhance their data collection workflow",
    tags: ["Golang", "PostgreSQL", "gRPC"],
    link: "https://git.zeus.gent/ZeusWPI/salsa"
  },
  {
    name: "Festival Network - Student Kick-Off",
    description: "A temporary network for camera surveillance & cashless payment with internal redunancy & multiple, tiered uplinks",
    tags: ["OPNsense", "Ubiquiti", "Ansible"]
  },
  {
    name: "Access Management",
    description: "A custom tailored Ticket, Shift & Material Management System for Student Kick-Off Ghent",
    tags: ["Ruby on Rails"]
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
    description: "Next.js application to display the \"Scougi\", a trimesterly published paper for my local scouting group. This was later re-written in Sveltekit as I was not satisified with the direction of Next.js & the company behind it.",
    link: "https://github.com/NuttyShrimp/scougi-library",
    tags: ["React", "Next.js", "Svelte", "Sveltekit", "PostgreSQL"]
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
