const $ = (s) => document.querySelector(s);

function applyThemeOnLoad(){
  const saved = localStorage.getItem("astralis_theme");
  if(saved){
    document.documentElement.setAttribute("data-theme", saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.setAttribute("data-theme", prefersLight ? "light" : "dark");
  }
}

function hookThemeToggle(){
  const btn = $("#themeBtn");
  if(!btn) return;
  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("astralis_theme", next);
  });
}

function setCommonBits(){
  // tagline
  if(window.ASTRALIS){
    const t = $("#tagline");
    if(t) t.textContent = ASTRALIS.tagline || "Creative Artistry";
  }
  // year
  const y = $("#year");
  if(y) y.textContent = new Date().getFullYear();
}

function renderHome(){
  if(!window.ASTRALIS) return;

  const eds = ASTRALIS.editors || [];
  const comps = ASTRALIS.competitions || [];

  $("#memberCount") && ($("#memberCount").textContent = eds.length);
  $("#compCount") && ($("#compCount").textContent = comps.length);

  // Gallery
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

  // Discord button
  const joinBtn = $("#joinDiscord");
  if(joinBtn){
    joinBtn.href = ASTRALIS.discord?.invite || "https://discord.gg/FzkFg2k2jz";
  }
}

function renderJoin(){
  if(!window.ASTRALIS) return;
  const joinBtn = $("#joinDiscord");
  if(joinBtn) joinBtn.href = ASTRALIS.discord?.invite || "https://discord.gg/FzkFg2k2jz";

  const widgetWrap = $("#discordWidget");
  if(widgetWrap){
    if(ASTRALIS.discord?.widgetIframe){
      widgetWrap.innerHTML = ASTRALIS.discord.widgetIframe;
    } else {
      widgetWrap.innerHTML = `<div class="row">
        <div>
          <div style="font-weight:900;">Discord widget not enabled yet</div>
          <div class="meta">In Discord: Server Settings → Widget → Enable Server Widget. Then send me the Widget ID.</div>
        </div>
      </div>`;
    }
  }
}

function renderContact(){
  if(!window.ASTRALIS) return;
  const list = $("#contactList");
  if(list){
    list.innerHTML = "";
    (ASTRALIS.contact?.discordUsers || []).forEach(u=>{
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `<div style="font-weight:900;">${u}</div><div class="meta">Discord</div>`;
      list.appendChild(row);
    });
  }
}

applyThemeOnLoad();
hookThemeToggle();
setCommonBits();

// page-specific
const page = document.body.getAttribute("data-page");
if(page === "home") renderHome();
if(page === "join") renderJoin();
if(page === "contact") renderContact();
