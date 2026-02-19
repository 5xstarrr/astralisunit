window.ASTRALIS = {
  name: "Astralis",
  tagline: "Creative Artistry",
  discordInvite: "https://discord.gg/FzkFg2k2jz",

  // Cards in "Projects / Latest Drops"
  projects: [
    { title: "IRL STYLE", by: "5STAR", url: "https://youtube.com", colorA: "#ff4fd8", colorB: "#b000ff" },
    { title: "STIFF VIBE", by: "KITE", url: "https://youtube.com", colorA: "#00e5ff", colorB: "#00ff88" },
    { title: "FLOW", by: "ASTRALIS", url: "https://youtube.com", colorA: "#ffe600", colorB: "#8cff00" },
  ],

  // Roster
  roster: [
    { name: "5star", role: "Owner", software: "After Effects", style: "All-round", focus: "Flow", pfp: "" },
    { name: "Kite", role: "Co-Owner", software: "After Effects", style: "Anime / CC", focus: "Impact", pfp: "" },
    { name: "Exec", role: "Admin", software: "AE / PR", style: "Clean", focus: "Story", pfp: "" },
  ],

  // Standards
  standards: {
    headline: "The bar is set. Choose your tier to view examples.",
    tiers: [
      {
        key: "normal",
        label: "Normal Tier",
        bullets: [
          "Consistent flow (no random cuts)",
          "Clean timing + audio alignment",
          "No generic presets spam",
          "Good CC + readable visuals",
        ],
      },
      {
        key: "top",
        label: "Top Tier",
        bullets: [
          "Strong creative direction (concept)",
          "Original composition + transitions",
          "Intentional camera + motion design",
          "Polished sound design + impact hits",
        ],
      },
    ],
  },

  // Partners
  partners: [
    {
      name: "Rin-Reliance",
      tags: ["Editing", "MEPs", "Competitions"],
      desc: "Active community for editors, logo makers, and boosters. Home to high-tier MEPs and regular comps.",
      btnA: { label: "Watch Trailer", url: "https://youtube.com" },
      btnB: { label: "Join Server", url: "https://discord.gg" },
    },
    {
      name: "Sirius",
      tags: ["VFX/GFX", "Community", "Resources"],
      desc: "Editing resources, feedback, collabs. Recruiting talented artists.",
      btnA: { label: "Watch Trailer", url: "https://youtube.com" },
      btnB: { label: "Join Sirius", url: "https://discord.gg" },
    },
  ],

  // Recruiting requirements + form
  recruiting: {
    requirementsLeft: [
      { k: "Software", v: "After Effects / Premiere" },
      { k: "Experience", v: "1+ Years" },
      { k: "Activity", v: "1 edit / month minimum" },
      { k: "Discord", v: "Mic preferred" },
    ],
    form: {
      // Choose later:
      // type: "google" -> embedUrl
      // type: "formspree" -> actionUrl
      type: "basic", // basic = shows a static form (we can wire it to Google/Formspree next)
      googleEmbedUrl: "",
      formspreeActionUrl: ""
    }
  }
};

if(page === "contact") renderContact();
