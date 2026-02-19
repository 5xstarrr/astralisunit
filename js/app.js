const $ = (s) => document.querySelector(s);

function initTheme(){
  const saved = localStorage.getItem("astralis_theme");
  if(saved){
    document.documentElement.setAttribute("data-theme", saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.setAttribute("data-theme", prefersLight ? "light" : "dark");
  }

  const btn = $("#themeBtn");
  if(btn){
    btn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("astralis_theme", next);
    });
  }
}

function renderHome(){
  if(!window.ASTRALIS) return;
  $("#year") && ($("#year").textContent = new Date().getFullYear());

  const eds = ASTRALIS.editors || [];
  const comps = ASTRALIS.competitions || [];
  const wins = eds.reduce((a,e)=>a+(e.wins||0),0);

  $("#memberCount") && ($("#memberCount").textContent = eds.length);
  $("#compCount") && ($("#compCount").textContent = comps.length);
  $("#winCount") && ($("#winCount").textContent = wins);

  // Leaderboard top 5
  const top = [...eds].sort((a,b)=>(b.points||0)-(a.points||0)).slice(0,5);
  const lb = $("#leaderboard");
  if(lb){
    lb.innerHTML = "";
    top.forEach((e,i)=>{
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `
        <div>
          <div class="rank">#${i+1} ${e.name}</div>
          <div class="meta">${e.role} • ${e.specialty}</div>
        </div>
        <div class="rank">${e.points || 0} pts</div>
      `;
      lb.appendChild(row);
    });
  }

  // Gallery (6)
  const gal = $("#gallery");
  if(gal){
    gal.innerHTML = "";
    (ASTRALIS.gallery || []).slice(0,6).forEach((g)=>{
      const item = document.createElement("div");
      item.className = "gItem";
      if(g.thumb){
        item.style.backgroundImage = `url('${g.thumb}')`;
        item.style.backgroundSize = "cover";
        item.style.backgroundPosition = "center";
      }
      item.innerHTML = `<div class="cap">${g.title}</div>`;
      item.addEventListener("click", ()=> window.open(g.url, "_blank"));
      gal.appendChild(item);
    });
  }
}

initTheme();
renderHome();
