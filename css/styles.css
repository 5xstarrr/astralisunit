:root{
  --bg:#07090f;
  --panel: rgba(255,255,255,.06);
  --panel2: rgba(255,255,255,.10);
  --border: rgba(255,255,255,.12);
  --text:#eef2ff;
  --muted:#aab4d6;

  --shadow: 0 18px 60px rgba(0,0,0,.45);
  --radius: 22px;

  /* iridescent */
  --iri1:#86b7ff;
  --iri2:#ff78c9;
  --iri3:#52ffd6;
  --iri4:#ffe600;
}

html[data-theme="light"]{
  --bg:#f6f7fb;
  --panel: rgba(255,255,255,.62);
  --panel2: rgba(255,255,255,.78);
  --border: rgba(10,20,40,.10);
  --text:#0b0f17;
  --muted:#4a577a;
  --shadow: 0 16px 40px rgba(10,20,40,.12);
}

*{box-sizing:border-box}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background: var(--bg);
  color: var(--text);
  overflow-x:hidden;
}

a{color:inherit;text-decoration:none}
.wrap{max-width:1180px;margin:0 auto;padding:110px 18px 60px}

.bg{position:fixed;inset:0;z-index:-3}
.bg .grain{
  position:absolute;inset:0;opacity:.10;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
}

.blob{
  position:absolute;filter: blur(46px); opacity:.55;
  width:620px;height:620px;border-radius:50%;
  background:
    radial-gradient(circle at 30% 30%, var(--iri1), transparent 60%),
    radial-gradient(circle at 70% 70%, var(--iri2), transparent 60%),
    radial-gradient(circle at 30% 70%, var(--iri3), transparent 60%);
  animation: float 12s ease-in-out infinite;
}
.b1{left:-220px;top:-220px}
.b2{right:-260px;top:120px;animation-duration:14s}
.b3{left:240px;bottom:-320px;animation-duration:16s}

@keyframes float{
  0%,100%{transform:translate(0,0) scale(1)}
  50%{transform:translate(40px,-20px) scale(1.03)}
}

/* Glass + iridescent border */
.glass{
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: var(--radius);
}

.iriBorder{
  position:relative;
}
.iriBorder::before{
  content:"";
  position:absolute; inset:-1px;
  border-radius: calc(var(--radius) + 1px);
  padding: 1px;
  background: linear-gradient(120deg, var(--iri1), var(--iri2), var(--iri3), var(--iri4));
  opacity:.55;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events:none;
}

.topbar{
  position:fixed;left:18px;right:18px;top:14px;
  z-index:50;
  padding:12px 14px;
  display:flex;align-items:center;justify-content:space-between;
}

.brand{display:flex;align-items:center;gap:12px}
.logo{
  width:44px;height:44px;border-radius:14px;
  display:grid;place-items:center;
  font-weight:900;
  background: linear-gradient(135deg,var(--iri1),var(--iri2));
  color:#0b0f17;
}
.name{font-weight:900;letter-spacing:.3px}
.tag{font-size:12px;color:var(--muted);margin-top:2px}

.nav{
  display:flex;gap:14px;align-items:center;flex-wrap:wrap;justify-content:flex-end
}
.nav a{
  font-weight:800;
  opacity:.75;
  letter-spacing:.10em;
  font-size:12px;
  text-transform:uppercase;
}
.nav a.active{opacity:1}
.nav a:hover{opacity:1}

.pill{
  padding:9px 12px;border-radius:999px;
  background: var(--panel2);
  border:1px solid var(--border);
}

.iconBtn{
  border:1px solid var(--border);
  background: var(--panel2);
  border-radius:14px;
  padding:8px 10px;
  cursor:pointer;
}

.hero{
  padding:26px 24px;
  min-height: 520px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:relative;
}

.hero h1{
  margin:0;
  font-size:64px;
  letter-spacing:.06em;
  text-transform:uppercase;
}
.hero .sub{
  margin:14px 0 18px;
  color:var(--muted);
  max-width:820px;
  font-weight:700;
}

.ctaRow{display:flex;gap:12px;flex-wrap:wrap}
.btn{
  padding:12px 14px;
  border-radius:16px;
  border:1px solid var(--border);
  background: var(--panel2);
  font-weight:900;
}
.btn.primary{
  border:none;
  background: linear-gradient(135deg,var(--iri1),var(--iri2),var(--iri3));
  color:#0b0f17;
}

.section{
  margin-top:22px;
  padding:22px;
}

.sectionTitle{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:14px;
  margin-bottom:14px;
}
.sectionTitle h2{
  margin:0;
  font-size:44px;
  letter-spacing:.06em;
  text-transform:uppercase;
}
.sectionTitle p{
  margin:0;
  color:var(--muted);
  font-weight:800;
  max-width:520px;
}

.grid3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}

.card{
  padding:18px;
  border-radius: var(--radius);
  background: var(--panel);
  border:1px solid var(--border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.drop{
  position:relative;
  height:210px;
  overflow:hidden;
  cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease;
}
.drop:hover{transform:translateY(-3px);box-shadow:0 20px 60px rgba(0,0,0,.50)}
.drop .grad{
  position:absolute;inset:0;
  filter:saturate(1.2);
  opacity:.95;
}
.drop .cap{
  position:absolute;left:16px;right:16px;bottom:16px;
  display:flex;justify-content:space-between;align-items:flex-end;gap:10px;
}
.drop .cap .t{
  font-size:30px;font-weight:1000;letter-spacing:.08em;text-transform:uppercase;
}
.drop .cap .by{
  font-size:12px;letter-spacing:.16em;text-transform:uppercase;
  color:rgba(255,255,255,.85);
  font-weight:900;
}

.rowList{display:flex;flex-direction:column;gap:12px}
.row{
  display:flex;justify-content:space-between;align-items:center;gap:10px;
  padding:14px 14px;
  border-radius:18px;
  background: var(--panel2);
  border:1px solid var(--border);
}
.meta{color:var(--muted);font-weight:900;font-size:12px;letter-spacing:.12em;text-transform:uppercase}

.rosterGrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}
.profile{
  position:relative;
  height:250px;
  overflow:hidden;
  display:flex;
  align-items:flex-end;
}
.profile .pfp{
  position:absolute;inset:0;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.12), transparent 60%),
              linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
}
.profile .info{
  position:relative;
  padding:16px;
  width:100%;
}
.profile .name{
  font-size:22px;
  font-weight:1000;
  letter-spacing:.10em;
  text-transform:uppercase;
}
.profile .role{
  color:var(--muted);
  font-weight:900;
  font-size:12px;
  letter-spacing:.14em;
  text-transform:uppercase;
  margin-top:6px;
}

.tabs{
  display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;margin-bottom:14px
}
.tabBtn{
  padding:10px 14px;border-radius:999px;
  border:1px solid var(--border);
  background: var(--panel2);
  font-weight:1000;
  letter-spacing:.12em;
  text-transform:uppercase;
  cursor:pointer;
  opacity:.85;
}
.tabBtn.active{opacity:1;outline:2px solid rgba(255,255,255,.16)}

.twoCol{
  display:grid;
  grid-template-colu
