import{r,j as s,P as p,C as m}from"./index-CMBFRSRN.js";const u=`<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pipeline Math</title>
<!-- SAM OS copy of the Pipeline Math artifact (claude.ai/artifact/YV5xagfCm7ECLRt44GQS37, 19 Nov 2026), shown by PipelineScreen.tsx in an iframe.
     data-theme=dark because SAM OS is dark only; the embed style below drops the side gutters SAM OS already gives. -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap">
<style>
/* Layout: one column board. Controls -> tiles -> who-we-convince -> charts (2-up) -> revenue mix -> stakeholder table -> timeline -> reference panels */
:root{
  --bg:#f5f5f2; --surface:#fcfcfb; --surface-2:#efeee9; --ink:#0b0b0b; --ink-2:#52514e; --muted:#7c7a74;
  --line:#e1e0d9; --axis:#c3c2b7; --ring:rgba(11,11,11,.10);
  --accent:#7a2457; --accent-ink:#ffffff; --accent-soft:#f4e7ef;
  --good-ink:#006300; --warn-ink:#865600; --crit-ink:#b42323; --warn-bg:#fff4d9; --crit-bg:#fbe9e9;
  --s1:#2a78d6; --s2:#eb6834; --s3:#1baf7a; --s4:#eda100; --s5:#e87ba4; --s6:#008300; --s7:#6250d6; --s8:#e34948; --s9:#898781;
  --font-ui:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif;
  --font-head:"Space Grotesk","Inter",system-ui,sans-serif;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --bg:#0d0d0d; --surface:#1a1a19; --surface-2:#242422; --ink:#f0efec; --ink-2:#c3c2b7; --muted:#9a988f;
    --line:#2c2c2a; --axis:#45443f; --ring:rgba(255,255,255,.10);
    --accent:#e09ac8; --accent-ink:#1d0f18; --accent-soft:#3a2032;
    --good-ink:#2fc22f; --warn-ink:#e7b04a; --crit-ink:#ef7a7a; --warn-bg:#3a2e12; --crit-bg:#3a1a1a;
    --s1:#3987e5; --s2:#d95926; --s3:#199e70; --s4:#c98500; --s5:#d55181; --s6:#0ca30c; --s7:#9085e9; --s8:#e66767; --s9:#898781;
    color-scheme:dark;
  }
}
:root[data-theme="dark"]{
  --bg:#0d0d0d; --surface:#1a1a19; --surface-2:#242422; --ink:#f0efec; --ink-2:#c3c2b7; --muted:#9a988f;
  --line:#2c2c2a; --axis:#45443f; --ring:rgba(255,255,255,.10);
  --accent:#e09ac8; --accent-ink:#1d0f18; --accent-soft:#3a2032;
  --good-ink:#2fc22f; --warn-ink:#e7b04a; --crit-ink:#ef7a7a; --warn-bg:#3a2e12; --crit-bg:#3a1a1a;
  --s1:#3987e5; --s2:#d95926; --s3:#199e70; --s4:#c98500; --s5:#d55181; --s6:#0ca30c; --s7:#9085e9; --s8:#e66767; --s9:#898781;
  color-scheme:dark;
}
*{box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font:14px/1.5 var(--font-ui);
  padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));padding-block:24px 56px}
.wrap{max-width:1280px;margin:0 auto;display:grid;gap:22px;min-width:0}
h1,h2,h3{font-family:var(--font-head);text-wrap:balance;margin:0;letter-spacing:-.01em}
h1{font-size:30px;font-weight:700}
h2{font-size:18px;font-weight:600}
h3{font-size:14px;font-weight:600}
p{margin:0}
.lede{color:var(--ink-2);max-width:72ch}
.formula{font-family:var(--font-head);font-size:15px;color:var(--ink);background:var(--surface-2);border-radius:8px;padding:8px 12px;display:inline-block;margin-top:10px}
.formula b{color:var(--accent)}
.panel{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:16px;min-width:0}
.panel-h{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 16px;margin-bottom:12px}
.sub{color:var(--ink-2);font-size:12.5px}
.muted{color:var(--muted)}
.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:600}

/* controls */
.ctrl-row{display:flex;flex-wrap:wrap;gap:10px 18px;align-items:flex-end}
.ctrl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px 14px;margin-top:14px}
.f{display:grid;gap:3px;font-size:12px;color:var(--ink-2);min-width:0}
.f small{color:var(--muted);font-size:11px}
input,select,button{font:inherit;color:var(--ink)}
input[type=number],input[type=text],select{background:var(--surface);border:1px solid var(--axis);border-radius:6px;padding:5px 8px;width:100%;min-width:0;font-variant-numeric:tabular-nums}
input:focus-visible,select:focus-visible,button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.seg{display:inline-flex;border:1px solid var(--axis);border-radius:8px;overflow:hidden;background:var(--surface)}
.seg button{border:0;background:transparent;padding:6px 12px;cursor:pointer;color:var(--ink-2);font-weight:500}
.seg button+button{border-left:1px solid var(--axis)}
.seg button[aria-pressed="true"]{background:var(--accent);color:var(--accent-ink)}
.btn{border:1px solid var(--axis);background:var(--surface);border-radius:8px;padding:6px 12px;cursor:pointer;font-weight:500}
.btn:hover{background:var(--surface-2)}
.btn.primary{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
details.more summary{cursor:pointer;color:var(--accent);font-weight:500;margin-top:12px;font-size:13px}

/* tiles */
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr));gap:12px}
.tile{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:14px;display:grid;gap:4px;align-content:start;min-width:0}
.tile .v{font-family:var(--font-head);font-size:28px;font-weight:600;line-height:1.1}
.tile .v small{font-size:14px;color:var(--ink-2);font-weight:500}
.tile .s{font-size:12px;color:var(--ink-2)}
.tile.alert{border-color:var(--crit-ink)}
.pill{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;font-weight:600;border-radius:999px;padding:1px 8px;width:max-content;max-width:100%}
.pill.ok{color:var(--good-ink);background:color-mix(in srgb,var(--good-ink) 12%,transparent)}
.pill.bad{color:var(--crit-ink);background:var(--crit-bg)}
.pill.warn{color:var(--warn-ink);background:var(--warn-bg)}

/* charts */
.charts{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:16px}
.chart{position:relative;min-width:0}
.chart svg{display:block;width:100%;height:auto;overflow:visible}
.legend{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:12px;color:var(--ink-2);margin:4px 0 8px}
.legend span{display:inline-flex;align-items:center;gap:6px}
.sw{width:10px;height:10px;border-radius:3px;display:inline-block;flex:none}
.sw.line{height:3px;border-radius:2px;width:14px}
.sw.dash{height:0;border-top:2px dashed var(--ink-2);width:14px;border-radius:0}
.tip{position:absolute;pointer-events:none;background:var(--surface);border:1px solid var(--line);box-shadow:0 4px 16px rgba(0,0,0,.12);border-radius:8px;padding:8px 10px;font-size:12px;min-width:150px;z-index:5;font-variant-numeric:tabular-nums}
.tip b{display:block;margin-bottom:4px;font-family:var(--font-head)}
.tip div{display:flex;justify-content:space-between;gap:12px;align-items:center}
.tip div span:first-child{display:inline-flex;align-items:center;gap:6px;color:var(--ink-2)}
.axis text{fill:var(--muted);font-size:11px;font-family:var(--font-ui)}
.grid line{stroke:var(--line)}

/* tables */
.tbl{overflow-x:auto;min-width:0;border:1px solid var(--line);border-radius:10px}
.tbl.tall{max-height:460px;overflow-y:auto}
table{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums;font-size:13px}
th,td{padding:7px 9px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
th{font-size:11.5px;font-weight:600;color:var(--ink-2);background:var(--surface-2);position:sticky;top:0;z-index:1;white-space:nowrap}
th.sort{cursor:pointer;user-select:none}
th.sort:hover{color:var(--ink)}
th[aria-sort] .ar{color:var(--accent)}
.num{text-align:right;white-space:nowrap}
tr.sel td{background:var(--accent-soft)}
tbody tr:hover td{background:color-mix(in srgb,var(--surface-2) 60%,transparent)}
tr.sel:hover td{background:var(--accent-soft)}
tr.tot td{font-weight:600;background:var(--surface-2)}
td .in{width:5.2em;padding:3px 6px;font-size:12.5px}
td .in.w{width:6.5em}
td select.in{width:auto}
.pair{display:flex;align-items:center;gap:4px;white-space:nowrap}
.pair .arr{color:var(--muted)}
.who{min-width:220px;max-width:300px}
.who small{display:block;color:var(--muted);font-size:11.5px;line-height:1.35;margin-top:2px}
.ven{display:flex;align-items:center;gap:7px;white-space:nowrap;font-weight:500}
.chip{display:inline-block;font-size:11px;font-weight:600;border-radius:5px;padding:1px 7px;background:var(--surface-2);color:var(--ink-2);white-space:nowrap}
.chip.customer{background:color-mix(in srgb,var(--s1) 16%,transparent);color:var(--ink)}
.chip.supplier{background:color-mix(in srgb,var(--s3) 18%,transparent);color:var(--ink)}
.chip.investor{background:color-mix(in srgb,var(--s7) 18%,transparent);color:var(--ink)}
.chip.partner{background:color-mix(in srgb,var(--s4) 22%,transparent);color:var(--ink)}
.chip.reseller{background:color-mix(in srgb,var(--s5) 20%,transparent);color:var(--ink)}
.chip.staff{background:color-mix(in srgb,var(--s9) 22%,transparent);color:var(--ink)}
.b{display:inline-grid;place-items:center;width:17px;height:17px;border-radius:4px;font-size:10px;font-weight:700;border:1px solid;cursor:help;flex:none}
.b.m{color:var(--good-ink);border-color:var(--good-ink)}
.b.f{color:var(--ink-2);border-color:var(--axis)}
.b.a{color:var(--warn-ink);border-color:var(--warn-ink);border-style:dashed}
.key{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12px;color:var(--ink-2);align-items:center}
.key span{display:inline-flex;align-items:center;gap:6px}
.filters{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.fchip{border:1px solid var(--axis);background:var(--surface);border-radius:999px;padding:3px 11px;font-size:12.5px;cursor:pointer;color:var(--ink-2)}
.fchip[aria-pressed="true"]{background:var(--ink);color:var(--surface);border-color:var(--ink)}
.cellv{font-weight:600}
.cellv small{display:block;font-weight:400;color:var(--muted);font-size:11px}
.dim{color:var(--muted)}
.bar{height:8px;background:var(--surface-2);border-radius:4px;overflow:hidden;margin-top:6px}
.bar i{display:block;height:100%;background:var(--accent);border-radius:4px}
.cols2{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:16px}
ul.list{margin:0;padding-left:18px;display:grid;gap:8px}
ul.list li{max-width:80ch}
code{font-size:12px;background:var(--surface-2);padding:1px 5px;border-radius:4px;word-break:break-word}
.note{font-size:12.5px;color:var(--ink-2);max-width:90ch}
.warnline{font-size:12.5px;color:var(--warn-ink);background:var(--warn-bg);border-radius:8px;padding:6px 10px}
@media (max-width:560px){ h1{font-size:24px} .tile .v{font-size:24px} }
@media (prefers-reduced-motion:reduce){ *{transition:none!important} }
</style>

</head>
<body>
<div class="wrap">
  <header>
    <div class="eyebrow">Company OS · revenue engine · 19 Nov 2026</div>
    <h1>Pipeline Math</h1>
    <p class="lede">How many emails, ad leads and visits it takes to reach the monthly target, for every business and every party we must convince: customers, suppliers, investors, partners, resellers and staff. Figures come from each venture's files, the sent-log up to 18 Nov and the SAM OS plan. Every input is editable; your edits stay in this browser.</p>
    <div class="formula">revenue / month = <b>emails</b> × <b>reply rate</b> × <b>close rate</b> × <b>average deal</b></div>
  </header>

  <section class="panel" aria-label="Controls">
    <div class="ctrl-row">
      <div class="f"><span>Mode</span>
        <div class="seg" role="group" aria-label="Mode">
          <button type="button" data-act="mode" data-val="goal">Goal: what we must send</button>
          <button type="button" data-act="mode" data-val="forecast">Forecast: what we get</button>
        </div>
      </div>
      <div class="f"><span>View</span>
        <div class="seg" role="group" aria-label="View">
          <button type="button" data-act="view" data-val="month">Months</button>
          <button type="button" data-act="view" data-val="year">Years</button>
        </div>
      </div>
      <label class="f" style="width:150px"><span>Target / month (M XOF)</span><input id="g-target" type="number" step="any" inputmode="decimal" data-b="g||target" data-u="M"></label>
      <label class="f" style="width:120px"><span>Horizon</span>
        <select id="g-horizon" data-b="g||horizon" data-u="num"><option value="12">12 months</option><option value="24">24 months</option><option value="36">36 months</option><option value="60">60 months</option></select></label>
      <label class="f goal-only" style="width:140px"><span>Reach target in month</span><input id="g-goalMonth" type="number" min="1" step="1" data-b="g||goalMonth" data-u="num"></label>
      <label class="f fc-only" style="width:170px"><span>New customer emails / day</span><input id="g-fcPerDay" type="number" min="0" step="1" data-b="g||fcPerDay" data-u="num"></label>
      <label class="f fc-only" style="width:150px"><span>Ad budget / day (XOF)</span><input id="g-fcAds" type="number" min="0" step="100" data-b="g||fcAds" data-u="num"></label>
      <label class="f fc-only" style="width:140px"><span>Field visits / day</span><input id="g-fcField" type="number" min="0" step="1" data-b="g||fcField" data-u="num"></label>
      <button type="button" class="btn" data-act="reset" style="margin-left:auto">Reset all inputs</button>
    </div>
    <details class="more" open>
      <summary>Learning, time and capacity settings</summary>
      <div class="ctrl-grid">
        <label class="f"><span>Weeks per iteration</span><input id="g-iterWeeks" type="number" min="0.25" step="0.25" data-b="g||iterWeeks" data-u="num"><small>one rewrite or A/B round of email, offer or ad</small></label>
        <label class="f"><span>Gap closed per iteration (%)</span><input id="g-gain" type="number" min="0" max="100" step="1" data-b="g||gain" data-u="pct"><small>0 % = no learning (static math)</small></label>
        <label class="f"><span>Ramp to target</span><select id="g-rampMode" data-b="g||rampMode" data-u="str"><option value="linear">Linear to target month</option><option value="now">Full from first month</option></select><small>goal mode</small></label>
        <label class="f"><span>Churn / month (%)</span><input id="g-churn" type="number" min="0" max="100" step="0.5" data-b="g||churn" data-u="pct"><small>subscriptions, resellers, storage</small></label>
        <label class="f"><span>Repeat buyers / month (%)</span><input id="g-reorder" type="number" min="0" max="100" step="1" data-b="g||reorder" data-u="pct"><small>one-off deals that reorder</small></label>
        <label class="f"><span>Emails per contact</span><input id="g-touches" type="number" min="1" step="1" data-b="g||touches" data-u="num"><small>first email + follow-ups</small></label>
        <label class="f"><span>Mailboxes</span><input id="g-mailboxes" type="number" min="1" step="1" data-b="g||mailboxes" data-u="num"><small>Gmail today: 1</small></label>
        <label class="f"><span>Sends / mailbox / day</span><input id="g-cap" type="number" min="1" step="1" data-b="g||cap" data-u="num"><small>Gmail cap 500 · a new domain mailbox: 20–40 after warm-up (OUTREACH.json)</small></label>
        <label class="f"><span>Working days / month</span><input id="g-workDays" type="number" min="1" step="1" data-b="g||workDays" data-u="num"></label>
        <label class="f"><span>Static math: build stock over (months)</span><input id="g-ramp" type="number" min="1" step="1" data-b="g||ramp" data-u="num"><small>the "now" column</small></label>
        <label class="f"><span>EUR → XOF</span><input id="g-eur" type="number" step="any" data-b="g||eur" data-u="num"></label>
        <label class="f"><span>CAD → XOF</span><input id="g-cad" type="number" step="any" data-b="g||cad" data-u="num"></label>
        <label class="f"><span>USD → XOF</span><input id="g-usd" type="number" step="any" data-b="g||usd" data-u="num"></label>
      </div>
    </details>
  </section>

  <section class="tiles" id="tiles" aria-label="Summary"></section>

  <section class="panel" aria-label="Who we must convince">
    <div class="panel-h"><h2>Emails a day, by who we must convince</h2><span class="sub" id="type-sub"></span></div>
    <div class="tbl"><table id="type-table"></table></div>
  </section>

  <section class="charts">
    <div class="panel">
      <div class="panel-h"><h2 id="c1-title">Revenue by venture</h2><span class="sub" id="c1-sub"></span></div>
      <div class="legend" id="c1-legend"></div>
      <div class="chart" id="c1"></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2 id="c2-title">Emails a day</h2><span class="sub" id="c2-sub"></span></div>
      <div class="legend" id="c2-legend"></div>
      <div class="chart" id="c2"></div>
    </div>
  </section>

  <section class="panel" aria-label="Revenue mix">
    <div class="panel-h">
      <div><h2>Revenue mix</h2><p class="sub">Which business brings what part of the target. Deal sizes come from each venture's files. "In play" counts a venture's suppliers, investors and partners before it has a revenue target; Teranga, MIS and Diamond start parked, as their status files say.</p></div>
      <div class="filters">
        <button type="button" class="btn" data-act="preset" data-val="real">Realistic mix</button>
        <button type="button" class="btn" data-act="preset" data-val="spread">Spread evenly</button>
        <label class="f" style="flex-direction:row"><select id="solo" aria-label="One venture alone" data-act-change="solo"><option value="">One venture alone…</option></select></label>
      </div>
    </div>
    <div class="tbl"><table id="mix-table"></table></div>
    <div id="mix-bar" style="margin-top:10px"></div>
  </section>

  <section class="panel" aria-label="Every party we must convince">
    <div class="panel-h">
      <div><h2>Every party we must convince</h2><p class="sub">Per day: emails (contacts) for email rows, leads for ad rows, visits or applications for field rows. Click a row to see its learning curve.</p></div>
      <div class="key"><span><i class="b m">M</i>measured</span><span><i class="b f">F</i>from the venture's files</span><span><i class="b a">A</i>assumed: edit it</span><span class="muted">Hover a badge for the source.</span></div>
    </div>
    <div class="filters" id="filters" style="margin-bottom:10px"></div>
    <div class="tbl tall"><table id="rows-table"></table></div>
  </section>

  <section class="cols2">
    <div class="panel">
      <div class="panel-h"><h2 id="c3-title">Learning curve</h2><span class="sub" id="c3-sub"></span></div>
      <div class="legend" id="c3-legend"></div>
      <div class="chart" id="c3"></div>
      <p class="note" style="margin-top:8px">rate(n) = ceiling − (ceiling − start) × (1 − gap closed)<sup>n</sup>, where n = iterations done. Start comes from the sent-log or the files; the ceiling is the file's own target when it has one, else 2 × start.</p>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Timeline</h2><span class="sub" id="tl-sub"></span></div>
      <div class="tbl tall"><table id="tl-table"></table></div>
    </div>
  </section>

  <section class="cols2">
    <div class="panel">
      <div class="panel-h"><h2>Measured funnel</h2><span class="sub">sent-log + replies, 2 Oct → 18 Nov 2026</span></div>
      <div class="tbl"><table id="funnel-table"></table></div>
      <p class="note" style="margin-top:8px">Rates are replies per unique address. Under about 100 emails a rate is too early to trust, so the board uses the 3.3 % overall rate there and marks it A. Four investor replies (Launch Africa, Global Partnerships, France Angels, ARAF) came in outside the sent-log.</p>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Conflicts found in the files</h2></div>
      <ul class="list" id="conflicts"></ul>
    </div>
  </section>
</div>

<script>
(function(){
'use strict';
const M=t=>({k:'m',t}), F=t=>({k:'f',t}), A=t=>({k:'a',t});

const SEED={ver:4,
 g:{target:100e6,horizon:36,goalMonth:12,mode:'goal',view:'month',fcPerDay:144,fcAds:3600,fcField:0,
    iterWeeks:4,gain:0.15,rampMode:'linear',churn:0.05,reorder:0,touches:3,mailboxes:1,cap:500,workDays:22,ramp:12,
    eur:655.957,cad:432,usd:600},
 ui:{fType:'all',fVen:'all',sort:'venture',dir:1,sel:'slk-buy'},
 v:[
  {id:'salokha',play:true,name:'Salokha',what:'Hibiscus export to EU buyers',slot:1,deal:{amt:26400,cur:'EUR'},unitName:'orders of 6 t',lag:2,share:52e6,unitCost:{amt:21000,cur:'EUR'},
   dealSrc:F('salokha/devis/2026-11-18-erboristi/devis.html:134-136 — 6 t × €4.40/kg FOB = €26,400'),costSrc:F('salokha/fournisseurs/DEVIS.md:25 — Moussa €3.50/kg, 6 t ≈ €21,000'),lagSrc:A('samples + quote before the first order'),status:'1 live request (Erboristi, 6 t) · 0 LOI'},
  {id:'klimacool',play:true,name:'KLIMACOOL',what:'Solar air-conditioning kits, installed',slot:2,deal:{amt:2957000,cur:'XOF'},unitName:'kits installed',lag:1,share:19e6,unitCost:{amt:2112000,cur:'XOF'},
   dealSrc:F('BRAIN/plan.json:78-83 · klimacool/COST-ANALYSIS.md:136 — smallest kit, 2,957,000 F'),costSrc:F('klimacool/COST-ANALYSIS.md:136 — landed cost 2,112,000 F'),lagSrc:A('quote → install'),status:'0 sales · advertised price below cost'},
  {id:'yombna',play:true,name:'Yomb Na',what:'Managed housekeeping in Dakar (subscription)',slot:3,deal:{amt:60000,cur:'XOF'},unitName:'households',lag:0,share:30e6,rec:true,
   dealSrc:F('yombna/CONTEXTE.md:44-48 — 60,000 F / month + 15,000 F setup'),lagSrc:A('signs the same month'),status:'0 clients · ads off since 27 Oct'},
  {id:'saang',play:true,name:'Saang Flow',what:'Interpreter dispatch for institutions (subscription)',slot:4,deal:{amt:500,cur:'CAD'},unitName:'institutions',lag:4,share:0,rec:true,
   dealSrc:F('saang-flow/docs/PRICING-STRATEGY.md:89-93 — $500 / 1,200 / 2,500 a month'),lagSrc:F('PRICING-STRATEGY.md:169 — 1 month to sign + 3 free pilot months'),status:'nothing sent before Nov · 2 tenders open'},
  {id:'aura',play:true,name:'AURA',what:'CO₂ mosquito trap, house pack of 3–4',slot:5,deal:{amt:65000,cur:'XOF'},unitName:'house packs',lag:1,share:0,unitCost:{amt:17500,cur:'XOF'},
   dealSrc:F('aura/BRAND-FORMAT.md:17-19 — pack 60,000–70,000 F'),costSrc:F('AURA deck slide 7 — 5,000 F per trap × 3.5'),lagSrc:A('pre-order → delivery'),status:'efficacy test 20 Nov · format not approved'},
  {id:'piment',play:true,name:'Piment',what:'1 ha greenhouse chili, Thiès',slot:6,deal:{amt:1200,cur:'XOF'},unitName:'kg sold',lag:9,share:0,rec:true,
   dealSrc:F('piment/deck/BUSINESS-MODEL-KIMI.md:46-48 — 35 t/ha/yr × 1,200 F/kg = 42 M/yr'),lagSrc:F('KIMI:234 — funding, then first harvest at month 8'),status:'raising 220 M F · nothing signed'},
  {id:'teranga',play:false,name:'Teranga Fresh',what:'Cold storage, 150 F per kg per day',slot:7,deal:{amt:4500000,cur:'XOF'},unitName:'tonnes stored',lag:1,share:0,rec:true,
   dealSrc:F('teranga-fresh/CONTEXTE.md:27 — 150 F/kg/day = 4.5 M per tonne-month'),lagSrc:A('LOI → first storage'),status:'on hold · 0 LOI'},
  {id:'mis',play:false,name:'Made in Senegal',what:'PVC sandals sold B2B to shops',slot:8,deal:{amt:2500,cur:'XOF'},unitName:'pairs',lag:1,share:0,rec:true,unitCost:{amt:600,cur:'XOF'},
   dealSrc:F('made-in-senegal/CONTEXTE.md:27 — 2,500 F a pair B2B (test price)'),costSrc:F('MIS PDF — cost 600 F a pair'),lagSrc:A(''),status:'pending Capital H2 (SAM OS)'},
  {id:'diamond',play:false,name:'Diamond Import',what:'Imported goods for shops and online',slot:9,deal:{amt:null,cur:'XOF'},unitName:'orders',lag:1,share:0,
   dealSrc:A('no price or catalogue in the files — type an average order to include it'),lagSrc:A(''),status:'on hold · catalogue not defined'},
  {id:'immo',play:true,name:'Immo Rufisque',what:'R+6 building, collateral for the group',slot:0,deal:{amt:null,cur:'XOF'},unitName:'',lag:0,share:0,noRevenue:true,
   dealSrc:F('company/goals/immo-goal-immo-rufisque.md:4 — collateral, no rent or sale plan'),lagSrc:A(''),status:'3 replies (Semacons, 2MS, Al Sultan)'}
 ],
 rows:[
  // Salokha
  {id:'slk-buy',v:'salokha',who:'EU hibiscus buyers (tea, food, herbal)',acct:'orders / month',type:'customer',ch:'email',mode:'rev',split:1,upa:1,rec:false,
   reply:[.056,.18],rSrc:[M('hib: 13 replies / 231 emailed'),F('salokha/…/EXECUTIVE_SUMMARY.md:125 — 18 % reply')],
   close:[.05,.19],cSrc:[A('no client yet'),F('EXECUTIVE_SUMMARY.md:126-127 — 10 % ask samples, 35 % of samples buy (≈19 % of replies)')],needSrc:F('devis Erboristi + Flach: €22–26k per 5–6 t lot')},
  {id:'slk-sup',v:'salokha',who:'Hibiscus suppliers: conventional + FLO Fairtrade',type:'supplier',ch:'email',mode:'fixed',n:2,due:'2026-12-15',
   reply:[.033,.066],rSrc:[A('flo: 0 / 5, too early — overall 3.3 %'),A('2 × start')],close:[.2,.4],cSrc:[A('a supplier wants a buyer'),A('2 × start')],needSrc:F('salokha/fournisseurs/DEVIS.md:18,25 — Erboristi needs FLO; none found')},
  {id:'slk-exp',v:'salokha',who:'Partner exporter (EU-certified, shares a container)',type:'partner',ch:'email',mode:'fixed',n:1,due:null,
   reply:[.045,.09],rSrc:[M('slx: 1 reply / 22 (wrong person)'),A('2 × start')],close:[.2,.4],cSrc:[A(''),A('2 × start')],needSrc:F('salokha/CONTEXTE.md:51,75 — exporter for the first shipment')},
  {id:'slk-bank',v:'salokha',who:'Bank or lender for the letter of credit',type:'investor',ch:'email',mode:'fixed',n:1,due:null,
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.1,.2],cSrc:[A(''),A('2 × start')],needSrc:F('salokha/finance/prefinancement.md:62-65 — LC, Moussa wants 50/50')},
  // KLIMACOOL
  {id:'klc-cust',v:'klimacool',who:'Businesses and villas with AC',acct:'kits / month',type:'customer',ch:'email',mode:'rev',split:1,upa:1,rec:false,
   reply:[.033,.066],rSrc:[A('klc: 0 / 92, too early — overall 3.3 %'),A('2 × start')],close:[.02,.04],cSrc:[F('klimacool/ECONOMIE-SAMOS.md:8 — 2 %, marked estimate'),A('2 × start')],needSrc:F('BRAIN/plan.json:78-83')},
  {id:'klc-inst',v:'klimacool',who:'Installers paid per job',type:'partner',ch:'email',mode:'ratio',per:8,acct:'installers',
   reply:[.033,.066],rSrc:[A('kci: 0 / 31, too early — overall 3.3 %'),A('2 × start')],close:[.2,.4],cSrc:[A(''),A('2 × start')],needSrc:F('_shared/STRATEGIE-B2B.md:289-295 — commission per job; 8 installs / installer / month assumed')},
  {id:'klc-kit',v:'klimacool',who:'Kit supplier (Alibaba)',type:'supplier',ch:'email',mode:'fixed',n:1,due:null,
   reply:[.5,.7],rSrc:[A('marketplace sellers answer'),A('')],close:[.3,.5],cSrc:[A(''),A('')],needSrc:F('klimacool/COST-ANALYSIS.md:8-10')},
  {id:'klc-fwd',v:'klimacool',who:'Freight forwarder (7,000 F/kg)',type:'supplier',ch:'email',mode:'fixed',n:1,due:null,
   reply:[.2,.4],rSrc:[A(''),A('')],close:[.3,.5],cSrc:[A(''),A('')],needSrc:F('klimacool/COST-ANALYSIS.md:8-10')},
  // Yomb Na
  {id:'yn-hh',v:'yombna',who:'Households (Meta ads → form)',acct:'households',type:'customer',ch:'ads',mode:'rev',split:.8,upa:1,rec:true,
   cpl:[612,306],cplSrc:[M('$1.02 per completed form — yombna/AD-PACKAGE.md:139'),A('floor 50 % of start')],
   close:[.17,.33],cSrc:[F('klimacool/ECONOMIE-SAMOS.md:15 — 17 %, estimate'),F('yombna/CONTEXTE.md:149 — 33 % hypothesis')],needSrc:A('80 % of households from ads')},
  {id:'yn-b2b',v:'yombna',who:'Employers, embassies, NGOs (for their staff)',acct:'households',type:'customer',ch:'email',mode:'rev',split:.2,upa:1,rec:true,
   reply:[.021,.042],rSrc:[M('yn: 1 reply / 47 (meeting)'),A('2 × start')],close:[.05,.1],cSrc:[A(''),A('2 × start')],needSrc:A('20 % of households via employers')},
  {id:'yn-agents',v:'yombna',who:'Housekeeping agents (1 per 8 homes)',type:'staff',ch:'field',mode:'ratio',per:8,acct:'agents',unitLabel:'candidates',
   close:[.3,.4],cSrc:[A('hired / candidates seen'),A('')],needSrc:F('yombna/CONTEXTE.md:57 — 1 agent per 8 households, 150,000 F gross')},
  {id:'yn-schools',v:'yombna',who:'Hotel schools (recruiting source)',type:'partner',ch:'email',mode:'fixed',n:3,due:'2027-01-31',
   reply:[.091,.15],rSrc:[M('yne: 1 reply / 11 (ENFHT)'),A('')],close:[.2,.4],cSrc:[A(''),A('2 × start')],needSrc:F('yombna/CONTEXTE.md:164-171 — 3 schools assumed')},
  // Saang
  {id:'sgf-inst',v:'saang',who:'Institutions: courts, hospitals, agencies',acct:'institutions',type:'customer',ch:'email',mode:'rev',split:1,upa:1,rec:true,
   reply:[.033,.2],rSrc:[A('sgf: 0 / 38, too early — overall 3.3 %'),F('saang-flow/docs/CLIENT-OUTREACH-PLAN.md:256-261 — 20 % reply')],
   close:[.05,.1],cSrc:[A('3–5 meetings → 1–2 pilots in the plan'),A('2 × start')],needSrc:F('PRICING-STRATEGY.md:166-197 — 3–5 pilots, then 10–15 clients')},
  {id:'sgf-int',v:'saang',who:'Certified interpreters (1 per institution)',type:'staff',ch:'email',mode:'ratio',per:1,acct:'interpreters',
   reply:[.1,.2],rSrc:[A('interpreters answer work offers'),A('')],close:[.3,.5],cSrc:[A(''),A('')],needSrc:F('saang-flow/docs/PRICING-STRATEGY.md:171 — 10–15 interpreters for 10–15 clients')},
  // AURA
  {id:'aur-hh',v:'aura',who:'Households (ads → pre-order)',acct:'packs / month',type:'customer',ch:'ads',mode:'rev',split:.5,upa:1,rec:false,
   cpl:[612,306],cplSrc:[A('no AURA ads yet — Yomb Na cost per lead used'),A('floor 50 %')],close:[.1,.3],cSrc:[A(''),F('_shared/CONTEXTE-GENERAL.md:71-74 — ≥ 30 % qualified')],needSrc:A('50 % of packs from ads')},
  {id:'aur-res',v:'aura',who:'Resellers: pharmacies, shops, hotels (20 packs / month each)',acct:'resellers',type:'reseller',ch:'email',mode:'rev',split:.5,upa:20,rec:true,upaEdit:'packs/mo',
   reply:[.029,.058],rSrc:[M('aur: 1 reply / 34'),A('2 × start')],close:[.05,.1],cSrc:[A(''),A('2 × start')],needSrc:F('AURA deck slide 8 — Exclusive, pharmacies; 20 packs each assumed')},
  {id:'aur-sup',v:'aura',who:'Trap maker (Alibaba samples, then 100 units)',type:'supplier',ch:'email',mode:'fixed',n:1,due:null,
   reply:[.5,.7],rSrc:[A('marketplace sellers answer'),A('')],close:[.3,.5],cSrc:[A(''),A('')],needSrc:F('AURA deck slide 8')},
  // Teranga
  {id:'tfr-buy',v:'teranga',who:'Fruit buyers and producers storing (1 t each)',acct:'clients storing',type:'customer',ch:'email',mode:'rev',split:1,upa:1,rec:true,upaEdit:'t each',
   reply:[.033,.066],rSrc:[A('tfr: 0 / 15, too early — overall 3.3 %'),A('2 × start')],close:[.05,.15],cSrc:[A(''),F('teranga-fresh/CONTEXTE.md:45-52 — LOI gate 15 %')],needSrc:A('1 t stored per client')},
  {id:'tfr-room',v:'teranga',who:'Cold rooms to rent (5 t each)',type:'supplier',ch:'email',mode:'ratio',per:5,acct:'rooms',
   reply:[.033,.066],rSrc:[A('tfc: 0 / 1 — overall 3.3 %'),A('2 × start')],close:[.2,.4],cSrc:[A(''),A('')],needSrc:F('teranga-fresh/CONTEXTE.md:27,60 + PDF — 5 t per hub, none found yet')},
  {id:'tfr-fund',v:'teranga',who:'Funders: grant, bank, impact investor (19.5 M F)',type:'investor',ch:'email',mode:'fixed',n:3,due:null,
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.03,.06],cSrc:[A(''),A('2 × start')],needSrc:F('teranga-fresh/CONTEXTE.md:17 — 19.5 M F capex; PDF 40 % grants, 20 % bank, 20 % impact')},
  // Piment
  {id:'pim-buy',v:'piment',who:'Buyers: wholesalers, supermarkets, hotels (5 t / yr each)',acct:'buyers',type:'customer',ch:'email',mode:'rev',split:1,upa:416.67,rec:true,
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.05,.1],cSrc:[A(''),A('2 × start')],needSrc:A('5 t a year per buyer; KIMI:24 lists the buyer types')},
  {id:'pim-inv',v:'piment',who:'Investors: quasi-equity, convertible, mezzanine',type:'investor',ch:'email',mode:'capex',perHa:201e6,haRev:3.5e6,ticket:73.3e6,due:'2027-01-31',
   reply:[.033,.066],rSrc:[A('pim: 0 / 39, too early; 4 replies outside the log, 2 no'),A('2 × start')],close:[.03,.06],cSrc:[A(''),A('2 × start')],needSrc:F('piment/deck/BUSINESS-MODEL-KIMI.md:97-98,195-197 — 201 M F per ha; 220 M in 3 tranches (120 + 60 + 40)')},
  {id:'pim-grant',v:'piment',who:'Grant and loan applications (ONUDI, USADF, TTI…)',type:'investor',ch:'field',mode:'fixed',n:3,due:'2026-12-15',unitLabel:'applications',
   close:[.2,.3],cSrc:[A('success rate'),A('')],needSrc:F('piment/lanes/financements.csv:3-10 — ONUDI closes 15 Dec 2026')},
  // MIS
  {id:'mis-shop',v:'mis',who:'Shopkeepers (≈47 pairs a month each)',acct:'shopkeepers',type:'customer',ch:'field',mode:'rev',split:.6,upa:47,rec:true,upaEdit:'pairs/mo',unitLabel:'visits',
   close:[.15,.3],cSrc:[F('made-in-senegal/CONTEXTE.md:47-53 — LOI gate 15 %'),A('2 × start')],needSrc:F('MIS PDF — 900k pairs in year 3, half via ~800 shopkeepers')},
  {id:'mis-whole',v:'mis',who:'Wholesalers (500 pairs a month each)',acct:'wholesalers',type:'reseller',ch:'email',mode:'rev',split:.4,upa:500,rec:true,upaEdit:'pairs/mo',
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.05,.1],cSrc:[A(''),A('2 × start')],needSrc:F('MIS PDF — 40 % of sales via wholesalers; 500 pairs each assumed')},
  {id:'mis-maad',v:'mis',who:'Maad (≈6,500-shop network)',type:'partner',ch:'email',mode:'fixed',n:1,due:null,
   reply:[.033,.066],rSrc:[A('2 emails on 8 Sep, no reply'),A('')],close:[.2,.4],cSrc:[A(''),A('')],needSrc:F('maad/CONVERSATION-PREP.md:14-16 — one deal also opens Diamond and AURA')},
  // Diamond
  {id:'dia-rev',v:'diamond',who:'Shops and online buyers (once a price exists)',acct:'orders / month',type:'customer',ch:'email',mode:'rev',split:1,upa:1,rec:false,
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.05,.1],cSrc:[A(''),A('2 × start')],needSrc:A('needs a price')},
  {id:'dia-val',v:'diamond',who:'Retail buyers to validate the first products',type:'customer',ch:'email',mode:'fixed',n:3,due:null,
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.05,.1],cSrc:[A(''),A('2 × start')],needSrc:F('diamond-import/COLD-EMAIL-VOIE-A.md:28 — 2–3 buyers')},
  {id:'dia-sup',v:'diamond',who:'Suppliers: brands, distributors',type:'supplier',ch:'email',mode:'fixed',n:4,due:null,
   reply:[.04,.08],rSrc:[M('dia: 1 reply / 25 (Kalendos catalogue)'),A('2 × start')],close:[.2,.4],cSrc:[A(''),A('2 × start')],needSrc:F('Diamond PDF — 25 % of tested products validated → 4 tested per winner')},
  // Immo
  {id:'imo-arch',v:'immo',who:'Architect: plans + permit',type:'supplier',ch:'email',mode:'fixed',n:1,due:'2026-12-15',
   reply:[.05,.1],rSrc:[M('arc: 1 reply / 20 (2MS, meeting)'),A('2 × start')],close:[.2,.4],cSrc:[A(''),A('2 × start')],needSrc:F('company/MILESTONES.md:60')},
  {id:'imo-build',v:'immo',who:'Builders: 3 comparable quotes',type:'supplier',ch:'email',mode:'fixed',n:3,due:'2026-12-15',
   reply:[.077,.15],rSrc:[M('btp: 2 replies / 26'),A('2 × start')],close:[.2,.4],cSrc:[A(''),A('2 × start')],needSrc:F('company/goals/immo-goal-immo-rufisque.md:9,20 — 3 quotes by 15 Dec')},
  {id:'imo-bank',v:'immo',who:'Banks: 2 meetings',type:'investor',ch:'email',mode:'fixed',n:2,due:'2027-01-31',
   reply:[.033,.066],rSrc:[A('overall 3.3 %'),A('2 × start')],close:[.2,.4],cSrc:[A('a meeting, not a loan'),A('')],needSrc:F('immo goal :21 — 2 bank meetings by 31 Jan 2027')}
 ]
};
const FUNNEL=[
 ['hib','Salokha','customer','EU hibiscus buyers',231,13],['slx','Salokha','partner','exporters with a container',22,1],['flo','Salokha','supplier','Fairtrade hibiscus',5,0],
 ['yn','Yomb Na','customer','employers, embassies, NGOs',47,1],['yne','Yomb Na','partner','hotel schools',11,1],
 ['klc','KLIMACOOL','customer','businesses with AC',92,0],['kci','KLIMACOOL','partner','installers',31,0],
 ['sgf','Saang Flow','customer','interpreting buyers',38,0],['tfr','Teranga','customer','fruit buyers',15,0],['tfc','Teranga','supplier','cold rooms',1,0],
 ['dia','Diamond','supplier','brands, distributors',25,1],['pim','Piment','investor','investors',39,0],['aur','AURA','reseller','resellers',34,1],
 ['arc','Immo','supplier','architects',20,1],['btp','Immo','supplier','builders',26,2]];
const CONFLICTS=[
 ['KLIMACOOL','The advertised price “from 1.95 M F” is below the 2.11 M landed cost, and the plan\\'s “40 % margin” is a markup: 28.6 % of the price, under the 40 % rule.','klimacool/ECONOMIE-SAMOS.md:12 · COST-ANALYSIS.md:136 · _shared/CONTEXTE-GENERAL.md:53'],
 ['Salokha','CONTEXTE.md still describes mango export; all November work is hibiscus.','salokha/CONTEXTE.md:16'],
 ['Saang Flow','The pricing plan targets CHUM, SPVM and the Cour municipale; the prospect file says never approach them, they are KELENY clients.','PRICING-STRATEGY.md:26-28 vs KELENY-PROSPECTS.md:4-11'],
 ['Piment','The deck asks 220 M F; the one-pager and investor email still ask $300k; the MEDA draft splits the tranches wrong (60/40/20).','KIMI:179-197 · ONE-PAGER.md · brouillons/2026-11-11-MEDA.md:16'],
 ['Teranga','The PDF shows year-3 profit (81 M) above year-3 revenue (80 M), and break-even at both month 6 and month 8.','teranga-fresh PDF'],
 ['Yomb Na','Two price scenarios are not reconciled: 60,000 F with 8 homes per agent vs 50,000 F with 6 homes.','CONTEXTE.md:44-60 vs reseau-hotelier-gere-dossier.html:219'],
 ['Outreach','LANES.md still says one Gmail at 20 a day or less; OUTREACH.json says the cap was removed on 11 Nov (500 a day).','LANES.md:81 vs OUTREACH.json:4605']];
const TYPES=[['customer','Customers'],['supplier','Suppliers'],['investor','Investors'],['partner','Partners'],['reseller','Resellers'],['staff','Staff']];
const KEY='pipeline-math-board';

function clone(o){return JSON.parse(JSON.stringify(o));}
function load(){let s=clone(SEED);try{const raw=localStorage.getItem(KEY);if(raw){const o=JSON.parse(raw);if(o&&o.ver===SEED.ver)s=o;}}catch(e){}return s;}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
let S=load();
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- formatting ---------- */
function fN(x){if(x==null||!isFinite(x))return '—';const a=Math.abs(x);if(a===0)return '0';if(a<1)return x.toFixed(2);if(a<10)return x.toFixed(1);return Math.round(x).toLocaleString('en-US');}
function fM(x){if(x==null||!isFinite(x))return '—';const m=x/1e6;if(Math.abs(m)>=1000)return (m/1000).toFixed(2)+' bn';if(Math.abs(m)>=100)return Math.round(m)+' M';if(Math.abs(m)>=10)return m.toFixed(1)+' M';return m.toFixed(2)+' M';}
function fK(x){if(!isFinite(x))return '—';if(Math.abs(x)>=1e6)return fM(x);if(Math.abs(x)>=1e4)return Math.round(x/1000)+'k';return Math.round(x).toLocaleString('en-US');}
function fP(x){if(x==null||!isFinite(x))return '—';const p=x*100;return (p<10?p.toFixed(1):Math.round(p))+' %';}
function pctIn(x){return +(x*100).toFixed(2);}

/* ---------- time ---------- */
const BY=2026,BM=11; // month 1 = Dec 2026
function mLabel(m){const d=new Date(BY,BM+m-1,1);return d.toLocaleString('en-US',{month:'short'})+' '+String(d.getFullYear()).slice(2);}
function yLabel(k){return 'Year '+k;}
function yRange(k){return mLabel(12*(k-1)+1)+' – '+mLabel(12*k);}
function dueMonth(due){if(!due)return 1;const p=due.split('-').map(Number);return Math.max(1,(p[0]-BY)*12+(p[1]-1)-BM+1);}
function dueText(due){if(!due)return 'now';const p=due.split('-').map(Number);return 'by '+new Date(p[0],p[1]-1,p[2]).toLocaleDateString('en-US',{day:'numeric',month:'short',year:'numeric'});}

/* ---------- model ---------- */
function xof(o){if(!o||o.amt==null||o.amt===''||!isFinite(+o.amt)||+o.amt<=0)return null;const k={EUR:S.g.eur,CAD:S.g.cad,USD:S.g.usd,XOF:1}[o.cur]||1;return +o.amt*k;}
function iters(m){return Math.max(0,Math.floor((m-1)*4.33/Math.max(.25,+S.g.iterWeeks||2)));}
function learn(p,m){if(!p)return 1;const s=+p[0],c=+p[1];return c-(c-s)*Math.pow(1-Math.min(1,Math.max(0,+S.g.gain||0)),iters(m));}
function rate(p,m){return Math.max(1e-4,learn(p,m));}
function den(r,t){return r.ch==='email'?rate(r.reply,t)*rate(r.close,t):rate(r.close,t);}
const counted=v=>!!v&&(v.play||(+v.share||0)>0);
const venById=()=>Object.fromEntries(S.v.map(v=>[v.id,v]));

function run(mode,goal){
  const g=S.g,H=Math.max(1,Math.round(+g.horizon||36)),wd=Math.max(1,+g.workDays||22),churn=Math.min(1,Math.max(0,+g.churn||0)),reorder=Math.max(0,+g.reorder||0);
  const z=()=>new Array(H+1).fill(0);
  const R={},V={},VB=venById();
  // fixed + capex parties
  S.rows.forEach(r=>{
    if(r.mode!=='fixed'&&r.mode!=='capex')return;
    const res=R[r.id]={per:z(),cost:z()};
    if(!counted(VB[r.v])){res.inactive=true;res.off=true;res.need=0;res.staticDay=0;return;}
    let n=Math.max(0,+r.n||0);
    if(r.mode==='capex'){const v=VB[r.v];const ha=Math.max(1,Math.ceil((+v.share||0)/r.haRev-1e-9));res.ha=ha;res.capex=ha*r.perHa;n=Math.ceil(res.capex/Math.max(1,+r.ticket)-1e-9);}
    res.need=n;const dm=dueMonth(r.due);res.dm=dm;
    const total=n/den(r,1);res.total=total;
    for(let t=1;t<=Math.min(dm,H);t++)res.per[t]+=total/dm;
    res.staticDay=total/(dm*wd);
  });
  const fixedEmailDay=z();
  S.rows.forEach(r=>{if((r.mode==='fixed'||r.mode==='capex')&&r.ch==='email'&&!R[r.id].inactive)for(let t=1;t<=H;t++)fixedEmailDay[t]+=R[r.id].per[t]/wd;});
  const capContacts=Math.max(1,+g.mailboxes||1)*Math.max(1,+g.cap||500)/Math.max(1,+g.touches||1);
  const nEff=z(),W={email:0,ads:0,field:0},w={};
  if(mode==='forecast'){
    for(let t=1;t<=H;t++)nEff[t]=Math.min(Math.max(0,+g.fcPerDay||0),Math.max(0,capContacts-fixedEmailDay[t]));
    S.rows.forEach(r=>{if(r.mode!=='rev'||!goal.R[r.id])return;const arr=r.ch==='ads'?goal.R[r.id].cost:goal.R[r.id].per;const s=arr.reduce((a,b)=>a+b,0);w[r.id]=s;W[r.ch]+=s;});
  }
  // revenue engines
  S.v.forEach(v=>{
    const vr=V[v.id]={rev:z(),units:z(),cash:z(),newA:z(),lag:Math.max(0,Math.round(+v.lag||0)),active:false};
    const dx=xof(v.deal),rows=S.rows.filter(r=>r.v===v.id&&r.mode==='rev');
    rows.forEach(r=>{R[r.id]={per:z(),cost:z(),newA:z(),stock:z(),units:z(),rev:z(),need:0,staticDay:0,inactive:!dx||!!v.noRevenue||!counted(v),off:!!dx&&!counted(v)};});
    if(!dx||v.noRevenue||!counted(v))return;
    vr.active=true;
    const lag=vr.lag,share=Math.max(0,+v.share||0),start=lag+1,gm=Math.max(start,Math.round(+g.goalMonth||12));
    const target=m=>m<start?0:(g.rampMode==='now'?share:share*Math.min(1,(m-start+1)/(gm-start+1)));
    const ucost=xof(v.unitCost)||0;
    rows.forEach(r=>{
      const res=R[r.id],upa=Math.max(1e-9,+r.upa||1),acc=dx*upa,split=Math.max(0,+r.split||0),dealsAt=z();
      if(mode==='forecast'){
        for(let t=1;t<=H;t++){
          let per=0;
          if(r.ch==='email')per=W.email?nEff[t]*wd*(w[r.id]/W.email):0;
          else if(r.ch==='ads')per=W.ads?(Math.max(0,+g.fcAds||0)*wd*(w[r.id]/W.ads))/rate(r.cpl,t):0;
          else per=W.field?Math.max(0,+g.fcField||0)*wd*(w[r.id]/W.field):0;
          res.per[t]=per;if(r.ch==='ads')res.cost[t]=per*rate(r.cpl,t);
          const deals=r.ch==='email'?per*rate(r.reply,t)*rate(r.close,t):per*rate(r.close,t);
          if(t+lag<=H)dealsAt[t+lag]+=deals;
        }
      }
      let prev=0,cum=0;
      for(let m=1;m<=H;m++){
        let nw;
        if(mode==='goal'){const T=target(m)*split/acc;nw=r.rec?Math.max(0,T-prev*(1-churn)):Math.max(0,T-reorder*cum);}
        else nw=dealsAt[m];
        let active;
        if(r.rec){active=prev*(1-churn)+nw;prev=active;}else{active=nw+reorder*cum;cum+=nw;}
        res.newA[m]=nw;res.stock[m]=active;res.units[m]=active*upa;res.rev[m]=active*acc;
        vr.rev[m]+=res.rev[m];vr.units[m]+=res.units[m];vr.newA[m]+=nw;vr.cash[m]+=res.units[m]*ucost;
        if(mode==='goal'){const t=m-lag;if(t>=1){const q=nw/den(r,t);res.per[t]+=q;if(r.ch==='ads')res.cost[t]+=q*rate(r.cpl,t);}}
      }
      res.need=res.stock[Math.min(H,Math.max(1,Math.round(+g.goalMonth||12)))];
      const T0=share*split/acc,perMonth=r.rec?T0/Math.max(1,+g.ramp||12):T0;
      res.staticNeed=T0;res.staticDay=perMonth/den(r,1)/wd;
      if(r.ch==='ads')res.staticCost=perMonth/rate(r.close,1)*rate(r.cpl,1)/wd;
    });
  });
  // ratio parties (staff, installers, rooms)
  S.rows.forEach(r=>{
    if(r.mode!=='ratio')return;
    const res=R[r.id]={per:z(),cost:z(),needA:z(),need:0,staticDay:0};
    const vr=V[r.v];if(!vr||!vr.active){res.inactive=true;res.off=!counted(VB[r.v]);return;}
    const per=Math.max(1e-9,+r.per||1);let hi=0;
    for(let m=1;m<=H;m++){const u=vr.units[m];const need=u>1e-9?Math.ceil(u/per-1e-9):0;const hires=Math.max(0,need-hi);hi=Math.max(hi,need);res.needA[m]=need;res.per[m]=hires/den(r,m);}
    res.need=res.needA[Math.min(H,Math.max(1,Math.round(+g.goalMonth||12)))];
    const v=VB[r.v],dx=xof(v.deal);let u0=0;
    S.rows.forEach(q=>{if(q.v===r.v&&q.mode==='rev'&&dx)u0+=(+v.share||0)*(+q.split||0)/dx;});
    const need0=u0>0?Math.ceil(u0/per-1e-9):0;res.staticNeed=need0;res.staticDay=need0/Math.max(1,+g.ramp||12)/den(r,1)/wd;
  });
  // totals
  const T={rev:z(),contacts:z(),sends:z(),mail:z(),ads:z(),visits:z(),newCust:z(),cash:z(),byType:{},fieldBy:z(),adsLeads:z()};
  TYPES.forEach(([k])=>T.byType[k]=z());
  S.rows.forEach(r=>{const res=R[r.id];if(!res||res.inactive)return;for(let t=1;t<=H;t++){const d=res.per[t]/wd;if(r.ch==='email'){T.contacts[t]+=d;T.byType[r.type][t]+=d;}else if(r.ch==='ads'){T.ads[t]+=res.cost[t]/wd;T.adsLeads[t]+=d;}else T.visits[t]+=d;}});
  S.v.forEach(v=>{const vr=V[v.id];for(let m=1;m<=H;m++){T.rev[m]+=vr.rev[m];T.newCust[m]+=vr.newA[m];T.cash[m]+=vr.cash[m];}});
  for(let t=1;t<=H;t++){T.sends[t]=T.contacts[t]*Math.max(1,+g.touches||1);T.mail[t]=Math.ceil(T.sends[t]/Math.max(1,+g.cap||500)-1e-9);}
  let hit=0;for(let m=1;m<=H;m++)if(!hit&&T.rev[m]>=(+g.target||0)*0.999&&(+g.target||0)>0)hit=m;
  let staticContacts=0,staticAds=0;S.rows.forEach(r=>{const res=R[r.id];if(!res||res.inactive)return;if(r.ch==='email')staticContacts+=res.staticDay||0;if(r.ch==='ads')staticAds+=res.staticCost||0;});
  return {mode,H,R,V,T,hit,nEff,capContacts,fixedEmailDay,staticContacts,staticAds};
}
function engine(){const goal=run('goal');return S.g.mode==='forecast'?run('forecast',goal):goal;}

/* ---------- aggregation ---------- */
function at(arr,m,H){return m>=1&&m<=H?arr[m]:null;}
function avg(arr,a,b,H){if(a>H)return null;b=Math.min(b,H);let s=0;for(let i=a;i<=b;i++)s+=arr[i];return s/(b-a+1);}
function sum(arr,a,b,H){if(a>H)return null;b=Math.min(b,H);let s=0;for(let i=a;i<=b;i++)s+=arr[i];return s;}
function periods(H){
  if(S.g.view==='year'){const n=Math.ceil(H/12);return Array.from({length:n},(_,i)=>({label:yLabel(i+1),long:yRange(i+1),a:12*i+1,b:Math.min(H,12*i+12)}));}
  return Array.from({length:H},(_,i)=>({label:mLabel(i+1),long:mLabel(i+1),a:i+1,b:i+1}));
}

/* ---------- chart ---------- */
function niceMax(v){if(v<=0)return 1;const p=Math.pow(10,Math.floor(Math.log10(v)));for(const k of [1,1.2,1.5,2,2.5,3,4,5,6,8,10])if(k*p>=v)return k*p;return 10*p;}
function chart(el,o){
  const W=Math.max(300,Math.round(el.clientWidth||600)),Hh=o.height||250,pl=54,pr=14,pt=14,pb=28;
  const n=o.labels.length,iw=W-pl-pr,ih=Hh-pt-pb,bars=o.type==='bar';
  let max=0;
  if(o.stacked){for(let i=0;i<n;i++){let s=0;o.series.forEach(se=>s+=se.values[i]||0);max=Math.max(max,s);}}
  else o.series.forEach(se=>se.values.forEach(v=>{if(v!=null)max=Math.max(max,v);}));
  (o.refs||[]).forEach(r=>max=Math.max(max,r.value));
  const yMax=niceMax(max*1.05||1);
  const X=i=>bars?pl+(i+.5)*iw/n:pl+(n<=1?iw/2:i*iw/(n-1));
  const Y=v=>pt+(1-v/yMax)*ih;
  let s=\`<svg viewBox="0 0 \${W} \${Hh}" role="img" aria-label="\${esc(o.aria||'')}">\`;
  s+='<g class="grid">';for(let k=0;k<=4;k++){const v=yMax*k/4;s+=\`<line x1="\${pl}" x2="\${W-pr}" y1="\${Y(v)}" y2="\${Y(v)}"\${k===0?' style="stroke:var(--axis)"':''}/>\`;}s+='</g>';
  s+='<g class="axis">';for(let k=0;k<=4;k++){const v=yMax*k/4;s+=\`<text x="\${pl-8}" y="\${Y(v)+4}" text-anchor="end">\${esc(o.yFmt(v))}</text>\`;}
  const step=Math.max(1,Math.ceil(n/(W<520?5:8)));
  for(let i=0;i<n;i+=step)s+=\`<text x="\${X(i)}" y="\${Hh-8}" text-anchor="middle">\${esc(o.labels[i])}</text>\`;
  s+='</g>';
  if(o.stacked&&!bars){
    const cum=new Array(n).fill(0);
    o.series.forEach(se=>{const lo=cum.slice();for(let i=0;i<n;i++)cum[i]+=se.values[i]||0;
      let d='';for(let i=0;i<n;i++)d+=(i?'L':'M')+X(i).toFixed(1)+','+Y(cum[i]).toFixed(1);for(let i=n-1;i>=0;i--)d+='L'+X(i).toFixed(1)+','+Y(lo[i]).toFixed(1);
      s+=\`<path d="\${d}Z" fill="\${se.color}" fill-opacity=".88" stroke="var(--surface)" stroke-width="1.5" stroke-linejoin="round"/>\`;});
  } else if(bars){
    const bw=Math.max(6,Math.min(46,iw/n*.56));const cum=new Array(n).fill(0);
    o.series.forEach(se=>{for(let i=0;i<n;i++){const v=se.values[i]||0;if(v<=0)continue;const y0=Y(cum[i]),y1=Y(cum[i]+v);cum[i]+=v;const h=Math.max(0,y0-y1-(o.stacked?1:0));
      s+=\`<rect x="\${(X(i)-bw/2).toFixed(1)}" y="\${y1.toFixed(1)}" width="\${bw.toFixed(1)}" height="\${h.toFixed(1)}" rx="2" fill="\${se.color}"/>\`;}});
  } else {
    o.series.forEach(se=>{let d='';se.values.forEach((v,i)=>{if(v==null)return;d+=(d?'L':'M')+X(i).toFixed(1)+','+Y(v).toFixed(1);});
      s+=\`<path d="\${d}" fill="none" stroke="\${se.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>\`;
      if(n<=12)se.values.forEach((v,i)=>{if(v!=null)s+=\`<circle cx="\${X(i)}" cy="\${Y(v)}" r="4" fill="\${se.color}" stroke="var(--surface)" stroke-width="2"/>\`;});});
  }
  (o.refs||[]).forEach(r=>{const y=Y(r.value);s+=\`<line x1="\${pl}" x2="\${W-pr}" y1="\${y}" y2="\${y}" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5 4"/>\`;
    s+=\`<text x="\${W-pr}" y="\${y-6}" text-anchor="end" style="fill:var(--ink-2);font-size:11px;font-weight:600">\${esc(r.label)}</text>\`;});
  s+=\`<line class="xh" x1="0" x2="0" y1="\${pt}" y2="\${pt+ih}" stroke="var(--ink-2)" stroke-width="1" opacity="0"/>\`;
  s+=\`<rect class="hit" x="\${pl}" y="\${pt}" width="\${iw}" height="\${ih}" fill="transparent"/></svg><div class="tip" hidden></div>\`;
  el.innerHTML=s;
  const svg=el.querySelector('svg'),hit=el.querySelector('.hit'),xh=el.querySelector('.xh'),tip=el.querySelector('.tip');
  const move=e=>{const r=svg.getBoundingClientRect(),sx=W/r.width,px=(e.clientX-r.left)*sx;let i=bars?Math.floor((px-pl)/(iw/n)):Math.round((px-pl)/(n<=1?1:iw/(n-1)));i=Math.max(0,Math.min(n-1,i));
    xh.setAttribute('x1',X(i));xh.setAttribute('x2',X(i));xh.setAttribute('opacity','.5');
    let h=\`<b>\${esc(o.long?o.long[i]:o.labels[i])}</b>\`;let tot=0;
    o.series.forEach(se=>{const v=se.values[i];if(v==null||(o.stacked&&!v))return;tot+=v||0;h+=\`<div><span><i class="sw" style="background:\${se.color}"></i>\${esc(se.name)}</span><span>\${esc(o.tipFmt(v))}</span></div>\`;});
    if(o.stacked)h+=\`<div style="border-top:1px solid var(--line);margin-top:4px;padding-top:4px"><span>Total</span><span><b style="display:inline;margin:0">\${esc(o.tipFmt(tot))}</b></span></div>\`;
    (o.refs||[]).forEach(rf=>{h+=\`<div><span><i class="sw dash"></i>\${esc(rf.name||rf.label)}</span><span>\${esc(o.tipFmt(rf.value))}</span></div>\`;});
    tip.innerHTML=h;tip.hidden=false;const cx=X(i)/sx,ew=el.clientWidth;const tw=tip.offsetWidth;tip.style.left=Math.max(0,Math.min(ew-tw,cx+12>ew-tw?cx-tw-12:cx+12))+'px';tip.style.top='8px';};
  hit.addEventListener('pointermove',move);hit.addEventListener('pointerdown',move);
  hit.addEventListener('pointerleave',()=>{tip.hidden=true;xh.setAttribute('opacity','0');});
}
function legend(el,items){el.innerHTML=items.map(it=>\`<span><i class="sw\${it.dash?' dash':it.line?' line':''}" style="\${it.dash?'':'background:'+it.color}"></i>\${esc(it.name)}</span>\`).join('');}
const col=slot=>slot?\`var(--s\${slot})\`:'var(--s9)';

/* ---------- renderers ---------- */
let E=null;
function badge(src){if(!src)return '';const k=src.k||'a';const lab={m:'M',f:'F',a:'A'}[k];const t={m:'Measured',f:'From the files',a:'Assumed'}[k]+(src.t?': '+src.t:'');return \`<i class="b \${k}" title="\${esc(t)}">\${lab}</i>\`;}
function inp(id,bind,unit,val,cls){return \`<input class="in\${cls?' '+cls:''}" id="\${id}" type="number" step="any" inputmode="decimal" data-b="\${bind}" data-u="\${unit}" value="\${val}">\`;}

function renderControls(){
  document.querySelectorAll('[data-act="mode"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.val===S.g.mode)));
  document.querySelectorAll('[data-act="view"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.val===S.g.view)));
  document.querySelectorAll('.goal-only').forEach(e=>e.hidden=S.g.mode!=='goal');
  document.querySelectorAll('.fc-only').forEach(e=>e.hidden=S.g.mode!=='forecast');
  document.querySelectorAll('[data-b^="g||"]').forEach(el=>{const k=el.dataset.b.split('||')[1],u=el.dataset.u,v=S.g[k];if(document.activeElement===el)return;
    el.value=u==='pct'?pctIn(v):u==='M'?+(v/1e6).toFixed(3):v;});
}

function renderTiles(){
  const {T,H,hit,staticContacts,capContacts,mode}=E,g=S.g,gm=Math.min(H,Math.max(1,Math.round(+g.goalMonth||12)));
  const c1=T.contacts[1],c6=at(T.contacts,6,H),c12=at(T.contacts,12,H),y3=avg(T.contacts,25,36,H);
  let peakM=1;for(let m=1;m<=H;m++)if(T.sends[m]>T.sends[peakM])peakM=m;
  const mbx=Math.max(1,+g.mailboxes||1),over=T.sends[peakM]>mbx*g.cap;
  const tiles=[];
  tiles.push(\`<div class="tile"><span class="eyebrow">New emails a day · month 1</span><span class="v">\${fN(c1)}</span>
    <span class="s">month 6: \${fN(c6)} · month 12: \${fN(c12)} · year 3: \${y3==null?'—':fN(y3)}</span>
    <span class="s muted">Static math, no learning: \${fN(staticContacts)} a day</span></div>\`);
  tiles.push(\`<div class="tile\${over?' alert':''}"><span class="eyebrow">Emails sent a day, × \${g.touches} touches</span><span class="v">\${fN(T.sends[1])}</span>
    <span class="s">peak \${fN(T.sends[peakM])} in \${mLabel(peakM)} → \${T.mail[peakM]} mailbox\${T.mail[peakM]>1?'es':''} at \${g.cap}/day</span>
    \${over?\`<span class="pill bad">✕ over \${mbx} mailbox\${mbx>1?'es':''}</span>\`:\`<span class="pill ok">✓ fits \${mbx} mailbox\${mbx>1?'es':''}</span>\`}</div>\`);
  tiles.push(\`<div class="tile"><span class="eyebrow">Ad budget a day · month 1</span><span class="v">\${fK(T.ads[1])} <small>XOF</small></span>
    <span class="s">month 12: \${fK(at(T.ads,12,H)||0)} XOF · ≈ $\${(T.ads[1]/g.usd).toFixed(2)} now</span><span class="s muted">Yomb Na and AURA households</span></div>\`);
  if(mode==='goal'){
    tiles.push(\`<div class="tile"><span class="eyebrow">Target</span><span class="v">\${fM(g.target)} <small>/ month</small></span>
      <span class="s">\${hit?'reached in '+mLabel(hit)+' (month '+hit+')':'not reached: check lags vs target month'}</span>
      <span class="s muted">Mix totals \${fM(S.v.reduce((a,v)=>a+(v.noRevenue||!xof(v.deal)?0:+v.share||0),0))}</span></div>\`);
  } else {
    tiles.push(\`<div class="tile\${hit?'':' alert'}"><span class="eyebrow">Forecast revenue · month 12</span><span class="v">\${fM(at(T.rev,12,H)||0)}</span>
      <span class="s">end of horizon: \${fM(T.rev[H])} / month</span>
      \${hit?\`<span class="pill ok">✓ \${fM(g.target)} reached in \${mLabel(hit)}</span>\`:\`<span class="pill bad">✕ \${fM(g.target)} not reached in \${H} months</span>\`}</div>\`);
  }
  tiles.push(\`<div class="tile"><span class="eyebrow">Cash for stock · \${mLabel(gm)}</span><span class="v">\${fM(T.cash[gm])}</span>
    <span class="s">Salokha hibiscus, KLIMACOOL kits, AURA traps, MIS pairs bought before they sell</span></div>\`);
  tiles.push(\`<div class="tile"><span class="eyebrow">Actually sent</span><span class="v">144 <small>/ day</small></span>
    <span class="s">16 Nov 294 · 17 Nov 99 · 18 Nov 39 (sent-log rows)</span>
    <span class="s muted">Capacity now: \${fN(capContacts)} new contacts a day</span></div>\`);
  $('tiles').innerHTML=tiles.join('');
}

function renderTypes(){
  const {T,H,R}=E;
  const statBy={};TYPES.forEach(([k])=>statBy[k]=0);
  const parties={};TYPES.forEach(([k])=>parties[k]=0);
  const gm=Math.min(H,Math.max(1,Math.round(+S.g.goalMonth||12)));
  S.rows.forEach(r=>{const res=R[r.id];if(!res||res.inactive)return;if(r.ch==='email')statBy[r.type]+=res.staticDay||0;parties[r.type]+=(r.mode==='rev'?res.stock[gm]:res.need)||0;});
  let h=\`<thead><tr><th>Who</th><th class="num">Parties at \${mLabel(gm)}</th><th class="num">Static now</th><th class="num">Month 1</th><th class="num">Month 6</th><th class="num">Month 12</th><th class="num">Year 3 avg</th><th class="num">Emails over \${H} months</th></tr></thead><tbody>\`;
  const wd=S.g.workDays;
  TYPES.forEach(([k,name])=>{const a=T.byType[k];const tot=a.reduce((x,y)=>x+y,0)*wd;
    h+=\`<tr><td><span class="chip \${k}">\${name}</span></td><td class="num">\${fN(parties[k])}</td><td class="num">\${fN(statBy[k])}</td><td class="num">\${fN(a[1])}</td><td class="num">\${fN(at(a,6,H))}</td><td class="num">\${fN(at(a,12,H))}</td><td class="num">\${fN(avg(a,25,36,H))}</td><td class="num">\${fN(tot)}</td></tr>\`;});
  const tot=T.contacts.reduce((x,y)=>x+y,0)*wd;
  h+=\`<tr class="tot"><td>All email</td><td></td><td class="num">\${fN(E.staticContacts)}</td><td class="num">\${fN(T.contacts[1])}</td><td class="num">\${fN(at(T.contacts,6,H))}</td><td class="num">\${fN(at(T.contacts,12,H))}</td><td class="num">\${fN(avg(T.contacts,25,36,H))}</td><td class="num">\${fN(tot)}</td></tr>\`;
  h+=\`<tr><td>Ad leads <span class="dim">(not email)</span></td><td></td><td></td><td class="num">\${fN(T.adsLeads[1])}</td><td class="num">\${fN(at(T.adsLeads,6,H))}</td><td class="num">\${fN(at(T.adsLeads,12,H))}</td><td class="num">\${fN(avg(T.adsLeads,25,36,H))}</td><td class="num">\${fN(T.adsLeads.reduce((x,y)=>x+y,0)*wd)}</td></tr>\`;
  h+=\`<tr><td>Field visits, applications <span class="dim">(not email)</span></td><td></td><td></td><td class="num">\${fN(T.visits[1])}</td><td class="num">\${fN(at(T.visits,6,H))}</td><td class="num">\${fN(at(T.visits,12,H))}</td><td class="num">\${fN(avg(T.visits,25,36,H))}</td><td class="num">\${fN(T.visits.reduce((x,y)=>x+y,0)*wd)}</td></tr>\`;
  $('type-table').innerHTML=h+'</tbody>';
  $('type-sub').textContent=(S.g.mode==='goal'?'Goal mode: what it takes to reach the target by '+mLabel(gm):'Forecast mode: '+S.g.fcPerDay+' new customer emails a day, split like the goal needs')+'. Per working day.';
}

function renderCharts(){
  const {T,V,H,capContacts,mode}=E,P=periods(H),yr=S.g.view==='year',g=S.g;
  const sv=S.v.filter(v=>V[v.id]&&V[v.id].active&&V[v.id].rev.some(x=>x>0));
  const series=sv.map(v=>({name:v.name,color:col(v.slot),values:P.map(p=>yr?sum(V[v.id].rev,p.a,p.b,H):V[v.id].rev[p.a])}));
  legend($('c1-legend'),[...series.map(s=>({name:s.name,color:s.color})),{name:yr?'Target × 12':'Target',dash:true}]);
  $('c1-title').textContent=(mode==='goal'?'Planned revenue':'Forecast revenue')+(yr?' by year':' by month');
  $('c1-sub').textContent=yr?'XOF a year, stacked by venture':'XOF a month, stacked by venture';
  if(series.length)chart($('c1'),{labels:P.map(p=>p.label),long:P.map(p=>p.long),series,stacked:true,type:yr?'bar':'area',
    refs:[{value:yr?g.target*12:g.target,label:'Target '+fM(yr?g.target*12:g.target),name:'Target'}],yFmt:v=>fM(v).replace(' M','M'),tipFmt:v=>fM(v)+' XOF',aria:'Revenue by venture'});
  else $('c1').innerHTML='<p class="note">No venture has both a monthly target and a price. Pick a preset in the revenue mix.</p>';
  const cs=[{name:'New emails a day',color:'var(--s1)',values:P.map(p=>yr?avg(T.contacts,p.a,p.b,H):T.contacts[p.a])}];
  const sendsPer=P.map(p=>yr?avg(T.sends,p.a,p.b,H):T.sends[p.a]);
  const cser=[cs[0],{name:'Emails sent a day, with follow-ups',color:'var(--s2)',values:sendsPer}];
  legend($('c2-legend'),[...cser.map(s=>({name:s.name,color:s.color,line:true})),{name:'Mailbox capacity',dash:true}]);
  $('c2-title').textContent='Emails a day'+(yr?', yearly average':'');
  $('c2-sub').textContent=mode==='goal'?'needed to stay on the goal path':'sent at the forecast pace';
  chart($('c2'),{labels:P.map(p=>p.label),long:P.map(p=>p.long),series:cser,type:'line',refs:[{value:Math.max(1,+g.mailboxes||1)*g.cap,label:(+g.mailboxes||1)+' mailbox × '+g.cap,name:'Capacity'}],
    yFmt:v=>fN(v),tipFmt:v=>fN(v)+' / day',aria:'Emails a day'});
  // learning chart
  const r=S.rows.find(x=>x.id===S.ui.sel)||S.rows[0],v=S.v.find(x=>x.id===r.v);
  const ms=Array.from({length:H},(_,i)=>i+1);const ls=[];
  if(r.ch==='email')ls.push({name:'Reply rate',color:'var(--s1)',values:ms.map(m=>learn(r.reply,m))});
  ls.push({name:r.ch==='email'?'Close rate (of replies)':r.ch==='ads'?'Close rate (of leads)':'Success rate',color:'var(--s2)',values:ms.map(m=>learn(r.close,m))});
  $('c3-title').textContent='Learning curve · '+v.name;
  $('c3-sub').textContent=r.who;
  legend($('c3-legend'),ls.map(s=>({name:s.name,color:s.color,line:true})));
  chart($('c3'),{labels:ms.map(mLabel),series:ls,type:'line',yFmt:v=>fP(v),tipFmt:v=>fP(v),aria:'Learning curve',height:220});
  if(r.ch==='ads'){const c1=rate(r.cpl,1),c12=rate(r.cpl,Math.min(12,H));$('c3-sub').textContent=r.who+' · cost per lead '+fK(c1)+' → '+fK(c12)+' XOF by month 12';}
  else if(r.ch==='email'){$('c3-sub').textContent=r.who+' · emails per win: '+fN(1/den(r,1))+' now → '+fN(1/den(r,Math.min(12,H)))+' at month 12';}
}

function renderMix(){
  const {V,H}=E,g=S.g,gm=Math.min(H,Math.max(1,Math.round(+g.goalMonth||12)));
  let h=\`<thead><tr><th>Venture</th><th>In play</th><th class="num">Target / month (M XOF)</th><th>Deal size</th><th class="num">= XOF</th><th class="num">Lag (months)</th><th class="num">Volume at \${mLabel(gm)}</th><th class="num">First revenue</th><th>Status</th></tr></thead><tbody>\`;
  let tot=0;const sel=$('solo');
  S.v.forEach(v=>{const dx=xof(v.deal),vr=V[v.id];if(!v.noRevenue&&dx)tot+=+v.share||0;
    const cur=\`<select class="in" id="v-\${v.id}-cur" data-b="v|\${v.id}|deal.cur" data-u="str">\${['XOF','EUR','CAD','USD'].map(c=>\`<option\${c===v.deal.cur?' selected':''}>\${c}</option>\`).join('')}</select>\`;
    h+=\`<tr><td><div class="ven"><i class="sw" style="background:\${v.noRevenue?'transparent;border:1px solid var(--axis)':col(v.slot)}"></i>\${esc(v.name)}</div><small class="muted">\${esc(v.what)}</small></td><td><input type="checkbox" id="v-\${v.id}-play" data-b="v|\${v.id}|play" data-u="bool"\${counted(v)?' checked':''}\${(+v.share||0)>0?' disabled title="Has a revenue target, so it counts"':''} aria-label="\${esc(v.name)} in play"></td>\`;
    if(v.noRevenue){h+=\`<td class="num dim">no revenue</td><td colspan="4"><span class="dim">Collateral for the group, counted as a 100 M asset in the 2032 plan</span> \${badge(v.dealSrc)}</td>\`;}
    else{
      h+=\`<td class="num">\${inp('v-'+v.id+'-share','v|'+v.id+'|share','M',+((+v.share||0)/1e6).toFixed(2),'w')}</td>\`;
      h+=\`<td><div class="pair">\${inp('v-'+v.id+'-amt','v|'+v.id+'|deal.amt','num',v.deal.amt==null?'':v.deal.amt,'w')}\${cur}\${badge(v.dealSrc)}</div><small class="muted">per \${esc(v.unitName.replace(/s$/,'').replace('orders of 6 t','order of 6 t'))}\${v.rec?' · monthly':''}</small></td>\`;
      h+=\`<td class="num">\${dx?fK(dx):'<span class="pill warn">needs a price</span>'}</td>\`;
      h+=\`<td class="num"><div class="pair" style="justify-content:flex-end">\${inp('v-'+v.id+'-lag','v|'+v.id+'|lag','num',v.lag)}\${badge(v.lagSrc)}</div></td>\`;
    }
    const vol=vr&&vr.active?vr.units[gm]:0;
    h+=\`<td class="num">\${v.noRevenue?'':vr&&vr.active&&(+v.share||0)>0?fN(vol)+' <span class="dim">'+esc(v.unitName)+'</span>':'—'}</td>\`;
    h+=\`<td class="num">\${v.noRevenue?'':mLabel(Math.round(+v.lag||0)+1)}</td><td><small>\${esc(v.status)}</small></td></tr>\`;});
  h+=\`<tr class="tot"><td>Total</td><td></td><td class="num">\${fM(tot)}</td><td colspan="6"><span class="\${tot>=g.target*0.999?'pill ok':'pill warn'}">\${tot>=g.target*0.999?'✓':'!'} \${Math.round(tot/Math.max(1,g.target)*100)} % of the \${fM(g.target)} target</span></td></tr>\`;
  $('mix-table').innerHTML=h+'</tbody>';
  $('mix-bar').innerHTML=\`<div class="bar" aria-hidden="true"><i style="width:\${Math.min(100,tot/Math.max(1,g.target)*100)}%"></i></div>\`;
  if(sel.options.length<2)S.v.filter(v=>!v.noRevenue).forEach(v=>{const o=document.createElement('option');o.value=v.id;o.textContent=v.name+' alone';sel.appendChild(o);});
}

function needCell(r,res){
  const id='r-'+r.id;
  if(res.inactive)return res.off?\`<span class="pill warn">not in play</span>\`:r.mode==='ratio'?\`<span class="dim">no revenue target yet</span>\`:\`<span class="pill warn">needs a price</span>\`;
  if(r.mode==='rev'){
    let s=\`<div class="cellv">\${fN(res.need)} <span class="dim" style="font-weight:400">\${esc(r.acct||'')}</span><small>\${r.rec?'stock at '+mLabel(Math.min(E.H,S.g.goalMonth)):'at '+mLabel(Math.min(E.H,S.g.goalMonth))}</small></div>\`;
    s+=\`<div class="pair" style="margin-top:4px"><span class="dim" style="font-size:11.5px">share</span>\${inp(id+'-split','r|'+r.id+'|split','pct',pctIn(r.split))}<span class="dim">%</span>\`;
    if(r.upaEdit)s+=\`\${inp(id+'-upa','r|'+r.id+'|upa','num',r.upa)}<span class="dim" style="font-size:11.5px">\${esc(r.upaEdit)}</span>\`;
    return s+'</div>';
  }
  if(r.mode==='ratio')return \`<div class="cellv">\${fN(res.need)} <span class="dim" style="font-weight:400">\${esc(r.acct||'')}</span><small>at \${mLabel(Math.min(E.H,S.g.goalMonth))}</small></div><div class="pair" style="margin-top:4px"><span class="dim" style="font-size:11.5px">1 per</span>\${inp(id+'-per','r|'+r.id+'|per','num',r.per)}</div>\`;
  if(r.mode==='capex')return \`<div class="cellv">\${fN(res.need)} investors<small>\${res.ha} ha · \${fM(res.capex)} XOF to raise \${dueText(r.due)}</small></div><div class="pair" style="margin-top:4px"><span class="dim" style="font-size:11.5px">ticket M</span>\${inp(id+'-ticket','r|'+r.id+'|ticket','M',+(r.ticket/1e6).toFixed(1))}</div>\`;
  return \`<div class="pair">\${inp(id+'-n','r|'+r.id+'|n','num',r.n)}<span class="dim">\${dueText(r.due)}</span></div>\`;
}
function rateCell(r,key,src){
  if(key==='reply'&&r.ch!=='email'){
    if(r.ch==='ads')return \`<div class="pair">\${inp('r-'+r.id+'-cpl0','r|'+r.id+'|cpl.0','num',r.cpl[0])}\${badge(r.cplSrc&&r.cplSrc[0])}<span class="arr">→</span>\${inp('r-'+r.id+'-cpl1','r|'+r.id+'|cpl.1','num',r.cpl[1])}\${badge(r.cplSrc&&r.cplSrc[1])}</div><small class="dim">XOF per lead</small>\`;
    return '<span class="dim">—</span>';
  }
  const p=r[key],s=r[src]||[];
  return \`<div class="pair">\${inp('r-'+r.id+'-'+key+'0','r|'+r.id+'|'+key+'.0','pct',pctIn(p[0]))}\${badge(s[0])}<span class="arr">→</span>\${inp('r-'+r.id+'-'+key+'1','r|'+r.id+'|'+key+'.1','pct',pctIn(p[1]))}\${badge(s[1])}</div>\`;
}
function dayVal(r,res,a,b){if(res.inactive)return null;const H=E.H;if(a>H)return null;return avg(res.per,a,b,H)/S.g.workDays;}
function renderRows(){
  const {R,H}=E,VB=venById(),ui=S.ui;
  const f=$('filters');
  let fh=\`<button type="button" class="fchip" data-act="ftype" data-val="all" aria-pressed="\${ui.fType==='all'}">Everyone</button>\`;
  TYPES.forEach(([k,n])=>fh+=\`<button type="button" class="fchip" data-act="ftype" data-val="\${k}" aria-pressed="\${ui.fType===k}">\${n}</button>\`);
  fh+=\`<label style="margin-left:6px"><select id="fven" class="in" style="width:auto" data-act-change="fven" aria-label="Venture"><option value="all">All ventures</option>\${S.v.map(v=>\`<option value="\${v.id}"\${ui.fVen===v.id?' selected':''}>\${esc(v.name)}</option>\`).join('')}</select></label>\`;
  f.innerHTML=fh;
  let rows=S.rows.filter(r=>(ui.fType==='all'||r.type===ui.fType)&&(ui.fVen==='all'||r.v===ui.fVen));
  const vi=Object.fromEntries(S.v.map((v,i)=>[v.id,i])),ri=Object.fromEntries(S.rows.map((r,i)=>[r.id,i]));
  const keyf={venture:r=>vi[r.v]*1000+ri[r.id],who:r=>r.who.toLowerCase(),type:r=>r.type,static:r=>R[r.id].staticDay||0,
    m1:r=>dayVal(r,R[r.id],1,1)||0,m6:r=>dayVal(r,R[r.id],6,6)||0,m12:r=>dayVal(r,R[r.id],12,12)||0,y3:r=>dayVal(r,R[r.id],25,36)||0}[ui.sort]||(r=>0);
  rows.sort((a,b)=>{const x=keyf(a),y=keyf(b);return (x<y?-1:x>y?1:0)*ui.dir;});
  const th=(k,l,num)=>\`<th class="sort\${num?' num':''}" data-act="sort" data-val="\${k}"\${ui.sort===k?\` aria-sort="\${ui.dir>0?'ascending':'descending'}"\`:''}>\${l}\${ui.sort===k?\` <span class="ar">\${ui.dir>0?'▲':'▼'}</span>\`:''}</th>\`;
  let h=\`<thead><tr>\${th('venture','Venture')}\${th('who','Who we must convince')}\${th('type','Type')}<th>Channel</th><th>Need</th><th>Reply rate · start → ceiling</th><th>Close rate · start → ceiling</th>\${th('static','Static now',1)}\${th('m1','Month 1',1)}\${th('m6','Month 6',1)}\${th('m12','Month 12',1)}\${th('y3','Year 3',1)}<th>Need source</th></tr></thead><tbody>\`;
  rows.forEach(r=>{const res=R[r.id],v=VB[r.v];const unit=r.unitLabel||(r.ch==='email'?'emails':r.ch==='ads'?'leads':'visits');
    const cell=(a,b)=>{const d=dayVal(r,res,a,b);if(d==null)return '<td class="num dim">—</td>';
      let extra='';if(r.ch==='ads'){const c=avg(res.cost,a,Math.min(b,H),H)/S.g.workDays;extra=\`<small>\${fK(c)} F</small>\`;}
      return \`<td class="num"><div class="cellv">\${fN(d)}\${extra}</div></td>\`;};
    let st=res.inactive?'<td class="num dim">—</td>':\`<td class="num"><div class="cellv">\${fN(res.staticDay)}\${r.ch==='ads'&&res.staticCost!=null?\`<small>\${fK(res.staticCost)} F</small>\`:''}</div></td>\`;
    h+=\`<tr data-act="selrow" data-val="\${r.id}"\${ui.sel===r.id?' class="sel"':''}>
      <td><div class="ven"><i class="sw" style="background:\${v.noRevenue?'transparent;border:1px solid var(--axis)':col(v.slot)}"></i>\${esc(v.name)}</div></td>
      <td class="who">\${esc(r.who)}</td><td><span class="chip \${r.type}">\${esc(r.type)}</span></td>
      <td><span style="white-space:nowrap">\${r.ch}</span><small class="dim" style="display:block">\${unit} / day</small></td>
      <td>\${needCell(r,res)}</td><td>\${rateCell(r,'reply','rSrc')}</td><td>\${rateCell(r,'close','cSrc')}</td>
      \${st}\${cell(1,1)}\${cell(6,6)}\${cell(12,12)}\${cell(25,36)}
      <td class="who"><div class="pair">\${badge(r.needSrc)}<small style="margin:0">\${esc(r.needSrc&&r.needSrc.t||'')}</small></div></td></tr>\`;});
  $('rows-table').innerHTML=h+'</tbody>';
}

function renderTimeline(){
  const {T,H}=E,P=periods(H),yr=S.g.view==='year',g=S.g;
  let h=\`<thead><tr><th>\${yr?'Year':'Month'}</th><th class="num">Revenue\${yr?' (year)':''}</th><th class="num">% of target</th><th class="num">New customers</th><th class="num">Emails / day</th><th class="num">Sent / day</th><th class="num">Mailboxes</th><th class="num">Ads / day</th><th class="num">Visits / day</th><th class="num">Cash for stock</th></tr></thead><tbody>\`;
  P.forEach(p=>{const rev=yr?sum(T.rev,p.a,p.b,H):T.rev[p.a],tg=yr?g.target*(p.b-p.a+1):g.target;
    let mx=0;for(let i=p.a;i<=p.b;i++)mx=Math.max(mx,T.mail[i]);
    const pc=tg>0?rev/tg:0;
    h+=\`<tr><td style="white-space:nowrap" title="\${esc(p.long)}">\${esc(yr?p.label+' · '+p.long:p.label)}</td><td class="num">\${fM(rev)}</td><td class="num">\${pc>=.999?'<span class="pill ok">✓ '+Math.round(pc*100)+' %</span>':Math.round(pc*100)+' %'}</td>
      <td class="num">\${fN(sum(T.newCust,p.a,p.b,H))}</td><td class="num">\${fN(avg(T.contacts,p.a,p.b,H))}</td><td class="num">\${fN(avg(T.sends,p.a,p.b,H))}</td>
      <td class="num">\${mx>Math.max(1,+g.mailboxes||1)?'<span class="pill bad">'+mx+'</span>':mx}</td><td class="num">\${fK(avg(T.ads,p.a,p.b,H))}</td><td class="num">\${fN(avg(T.visits,p.a,p.b,H))}</td><td class="num">\${fM(yr?sum(T.cash,p.a,p.b,H):T.cash[p.a])}</td></tr>\`;});
  $('tl-table').innerHTML=h+'</tbody>';
  $('tl-sub').textContent=(yr?'yearly totals and averages':'month by month')+' · '+(S.g.mode==='goal'?'goal path':'forecast');
}

function renderStatic(){
  let h='<thead><tr><th>Campaign</th><th>Venture</th><th>Who</th><th class="num">Emailed</th><th class="num">Replies</th><th class="num">Rate</th></tr></thead><tbody>';
  let te=0,tr=0;FUNNEL.forEach(f=>{te+=f[4];tr+=f[5];const r=f[5]/f[4];h+=\`<tr><td><code>\${f[0]}</code></td><td>\${esc(f[1])}</td><td><span class="chip \${f[2]}">\${f[2]}</span> <small class="dim">\${esc(f[3])}</small></td><td class="num">\${f[4]}</td><td class="num">\${f[5]}</td><td class="num">\${f[4]<100&&f[5]===0?'<span class="dim">0 · too early</span>':fP(r)}</td></tr>\`;});
  h+=\`<tr class="tot"><td>Total</td><td></td><td></td><td class="num">\${te}</td><td class="num">\${tr}</td><td class="num">\${fP(tr/te)}</td></tr></tbody>\`;
  $('funnel-table').innerHTML=h;
  $('conflicts').innerHTML=CONFLICTS.map(c=>\`<li><b>\${esc(c[0])}:</b> \${esc(c[1])} <code>\${esc(c[2])}</code></li>\`).join('')+
   \`<li><b>Emploi:</b> not part of the 100 M. The lane aims at 100 applications a day; Samply sends about 52. A 65k CAD job ≈ 2.35 M XOF a month, 2.3 % of the target. <code>company/LANES.md:83</code></li>\`;
}

function renderAll(){E=engine();renderControls();renderTiles();renderTypes();renderMix();renderRows();renderCharts();renderTimeline();}

/* ---------- events ---------- */
function setPath(o,path,val){const ks=path.split('.');let x=o;for(let i=0;i<ks.length-1;i++)x=x[ks[i]];x[ks[ks.length-1]]=val;}
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.actChange==='solo'){const id=el.value;if(id){S.v.forEach(v=>v.share=v.id===id?S.g.target:0);}el.value='';save();renderAll();return;}
  if(el.dataset.actChange==='fven'){S.ui.fVen=el.value;save();renderRows();return;}
  if(!el.dataset.b)return;
  const [kind,id,path]=el.dataset.b.split('|'),u=el.dataset.u;
  let val=el.value;
  if(u==='bool')val=el.checked;
  else if(u!=='str'){if(val===''){val=(path==='deal.amt')?null:0;}else{val=+val;if(!isFinite(val))return;if(u==='pct')val/=100;if(u==='M')val*=1e6;}}
  const obj=kind==='g'?S.g:kind==='v'?S.v.find(x=>x.id===id):S.rows.find(x=>x.id===id);
  if(!obj)return;setPath(obj,path,val);save();renderAll();
});
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');if(!el)return;
  if(e.target.closest('input,select')&&el.dataset.act==='selrow')return;
  const a=el.dataset.act,v=el.dataset.val;
  if(a==='mode'){S.g.mode=v;}
  else if(a==='view'){S.g.view=v;}
  else if(a==='reset'){S=clone(SEED);}
  else if(a==='preset'){
    if(v==='real'){const m={salokha:52e6,yombna:30e6,klimacool:19e6};S.v.forEach(x=>x.share=m[x.id]||0);}
    else{const sell=S.v.filter(x=>!x.noRevenue&&xof(x.deal));S.v.forEach(x=>x.share=sell.includes(x)?S.g.target/sell.length:0);}
  }
  else if(a==='ftype'){S.ui.fType=v;save();renderRows();return;}
  else if(a==='sort'){if(S.ui.sort===v)S.ui.dir*=-1;else{S.ui.sort=v;S.ui.dir=(v==='venture'||v==='who'||v==='type')?1:-1;}save();renderRows();return;}
  else if(a==='selrow'){S.ui.sel=v;save();renderRows();renderCharts();return;}
  save();renderAll();
});
let rt=0;window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(E)renderCharts();},150);});
renderStatic();renderAll();
})();
<\/script>

<style>body{padding:0 0 24px!important}</style>
</body>
</html>
`;function v(){const i=r.useRef(null),[c,d]=r.useState(2400);return r.useEffect(()=>{const e=i.current;if(!e)return;let t=null;const l=()=>{var n;const a=(n=e.contentDocument)==null?void 0:n.documentElement;a&&d(Math.ceil(a.scrollHeight)+4)},o=()=>{var n;l();const a=(n=e.contentDocument)==null?void 0:n.body;a&&"ResizeObserver"in window&&(t=new ResizeObserver(l),t.observe(a))};return e.addEventListener("load",o),()=>{e.removeEventListener("load",o),t==null||t.disconnect()}},[]),s.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[s.jsx(p,{title:"Calcul pipeline",sub:"Combien d'e-mails, de leads et de visites pour 100 M XOF par mois, par projet et par partie à convaincre."}),s.jsx("div",{style:{fontSize:12.5,color:m.faint,lineHeight:1.5},children:"Chiffres mesurés jusqu'au 18 nov. 2026 (journal d'envois, réponses, fichiers des projets). Chaque case est modifiable ; tes changements restent sur cet appareil."}),s.jsx("iframe",{ref:i,title:"Calcul pipeline",srcDoc:u,style:{width:"100%",height:c,border:0,display:"block",background:"transparent"}})]})}export{v as PipelineScreen};
