var ee=Object.defineProperty;var te=(s,e,t)=>e in s?ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>te(s,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{ep as S,eq as V,er as _,es as T,et as M,bY as H,eu as C,a6 as E,ev as se,ew as G,e5 as ae,em as ne,ex as ie,el as oe,t as c,ey as W,ez as Y,e as v,dn as O,eA as N,eB as re,eC as de,eD as le,i as ce,aK as ge,k as ue,bQ as ve}from"./panels-Bd7zvNoT.js";import{e as pe,i as fe}from"./settings-persistence-DSJC5JG1.js";import"./deck-stack-CoAxR1Ym.js";import"./d3-DYQjYRjj.js";import"./i18n-VWbTNjcU.js";class me{constructor(){B(this,"pendingSecrets",new Map);B(this,"validatedKeys",new Map);B(this,"validationMessages",new Map)}captureUnsavedInputs(e){e.querySelectorAll("input[data-secret]").forEach(a=>{var r;const o=a.dataset.secret;if(!o)return;const d=a.value.trim();if(!d||d===S)return;if(V.has(o)&&!this.pendingSecrets.has(o)){const u=((r=_().secrets[o])==null?void 0:r.value)||"";if(d===u)return}this.pendingSecrets.set(o,d);const l=T(o,d);l.valid||(this.validatedKeys.set(o,!1),this.validationMessages.set(o,l.hint||"Invalid format"))});const t=e.querySelector("select[data-model-select]"),i=e.querySelector("input[data-model-manual]"),n=(i&&!i.classList.contains("hidden-input")?i.value.trim():t==null?void 0:t.value)||"";n&&!this.pendingSecrets.has("OLLAMA_MODEL")&&(this.pendingSecrets.set("OLLAMA_MODEL",n),this.validatedKeys.set("OLLAMA_MODEL",!0))}hasPendingChanges(){return this.pendingSecrets.size>0}getMissingRequiredSecrets(){const e=[];for(const t of M){if(!H(t.id))continue;const i=C(t);if(i.some(a=>this.pendingSecrets.has(a)))for(const a of i)!E(a).valid&&!this.pendingSecrets.has(a)&&e.push(a)}return e}getValidationErrors(){const e=[];for(const[t,i]of this.pendingSecrets){const n=T(t,i);n.valid||e.push(`${t}: ${n.hint||"Invalid format"}`)}return e}async verifyPendingSecrets(){const e=[],t=Object.fromEntries(this.pendingSecrets.entries()),i=[];for(const[n,a]of this.pendingSecrets){const o=T(n,a);o.valid?i.push([n,a]):(this.validatedKeys.set(n,!1),this.validationMessages.set(n,o.hint||"Invalid format"),e.push(`${n}: ${o.hint||"Invalid format"}`))}if(i.length>0){const n=await Promise.race([Promise.all(i.map(async([a,o])=>{const d=await se(a,o,t);return{key:a,result:d}})),new Promise(a=>setTimeout(()=>a(i.map(([o])=>({key:o,result:{valid:!0,message:"Saved (verification timed out)"}}))),15e3))]);for(const{key:a,result:o}of n)this.validatedKeys.set(a,o.valid),o.valid?this.validationMessages.delete(a):(this.validationMessages.set(a,o.message||"Verification failed"),e.push(`${a}: ${o.message||"Verification failed"}`))}return e}async commitVerifiedSecrets(){for(const[e,t]of this.pendingSecrets)this.validatedKeys.get(e)!==!1&&(await G(e,t),this.pendingSecrets.delete(e),this.validatedKeys.delete(e),this.validationMessages.delete(e))}setPending(e,t){this.pendingSecrets.set(e,t)}getPending(e){return this.pendingSecrets.get(e)}hasPending(e){return this.pendingSecrets.has(e)}deletePending(e){this.pendingSecrets.delete(e),this.validatedKeys.delete(e),this.validationMessages.delete(e)}setValidation(e,t,i){this.validatedKeys.set(e,t),i?this.validationMessages.set(e,i):this.validationMessages.delete(e)}getValidationState(e){return{validated:this.validatedKeys.get(e),message:this.validationMessages.get(e)}}destroy(){this.pendingSecrets.clear(),this.validatedKeys.clear(),this.validationMessages.clear()}}function F(s){if(typeof AbortSignal.timeout=="function")return AbortSignal.timeout(s);const e=new AbortController;return setTimeout(()=>e.abort(),s),e.signal}async function he(s){var e,t;if(!s)return[];try{const i=await fetch(new URL("/api/tags",s).toString(),{signal:F(5e3)});if(i.ok){const a=(((e=(await i.json()).models)==null?void 0:e.map(o=>o.name))||[]).filter(o=>!o.includes("embed"));if(a.length>0)return a}}catch{}try{const i=await fetch(new URL("/v1/models",s).toString(),{signal:F(5e3)});if(i.ok)return(((t=(await i.json()).data)==null?void 0:t.map(a=>a.id))||[]).filter(a=>!a.includes("embed"))}catch{}return[]}let L="overview",g,P=null;function m(s,e="ok"){const t=document.getElementById("settingsActionStatus");t&&(t.textContent=s,t.classList.remove("ok","error"),t.classList.add(e))}async function K(s,e){const t=await N(s);if(t){m(`${e}: ${t}`,"ok");return}m(c("modals.settingsWindow.invokeFail",{command:s}),"error")}function R(){N("close_settings_window").then(()=>{},()=>window.close())}function we(){return ve()||""}let I=null;async function k(s,e){if(!I)try{I=await N("get_local_api_token")}catch{}const t=new Headers(e==null?void 0:e.headers);return I&&t.set("Authorization",`Bearer ${I}`),fetch(`${we()}${s}`,{...e,headers:t})}const q={overview:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>',ai:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1s-2.73 7.08 0 9.79 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.49 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/></svg>',economy:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>',markets:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>',security:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',tracking:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',debug:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>'};function Q(s){let e=0;for(const t of s.features)O(t)&&e++;return{ready:e,total:s.features.length}}function J(){let s=0;for(const e of M)O(e.id)&&s++;return{ready:s,total:M.length}}function A(){const s=document.getElementById("sidebarNav");if(!s)return;const e=[],t=J(),i=t.ready===t.total?"dot-ok":t.ready>0?"dot-partial":"dot-warn";e.push(`
    <button class="settings-nav-item${L==="overview"?" active":""}" data-section="overview" role="tab" aria-selected="${L==="overview"}">
      ${q.overview}
      <span class="settings-nav-label">Overview</span>
      <span class="settings-nav-dot ${i}"></span>
    </button>
  `),e.push('<div class="settings-nav-sep"></div>');for(const n of W){const{ready:a,total:o}=Q(n),d=a===o?"dot-ok":a>0?"dot-partial":"dot-warn";e.push(`
      <button class="settings-nav-item${L===n.id?" active":""}" data-section="${n.id}" role="tab" aria-selected="${L===n.id}">
        ${q[n.id]||""}
        <span class="settings-nav-label">${v(n.label)}</span>
        <span class="settings-nav-count">${a}/${o}</span>
        <span class="settings-nav-dot ${d}"></span>
      </button>
    `)}e.push('<div class="settings-nav-sep"></div>'),e.push(`
    <button class="settings-nav-item${L==="debug"?" active":""}" data-section="debug" role="tab" aria-selected="${L==="debug"}">
      ${q.debug}
      <span class="settings-nav-label">Debug &amp; Logs</span>
    </button>
  `),s.innerHTML=e.join("")}function x(s){const e=document.getElementById("contentArea");e&&(P&&(P(),P=null),L=s,A(),e.classList.add("fade-out"),e.classList.remove("fade-in"),requestAnimationFrame(()=>{if(s==="overview")ye(e);else if(s==="debug")Le(e);else{const t=W.find(i=>i.id===s);t&&Se(e,t)}requestAnimationFrame(()=>{e.classList.remove("fade-out"),e.classList.add("fade-in")})}))}function ye(s){const{ready:e,total:t}=J(),i=t>0?e/t*100:0,n=2*Math.PI*40,a=n-i/100*n,o=e===t?"var(--settings-green)":e>0?"var(--settings-blue)":"var(--settings-yellow)",d=E("WORLDMONITOR_API_KEY"),l=d.present?"Active":"Not set",r=d.present?"ok":"warn",u=W.map(p=>{const{ready:h,total:f}=Q(p);return`<button class="settings-ov-cat ${h===f?"ov-cat-ok":h>0?"ov-cat-partial":"ov-cat-warn"}" data-section="${p.id}">
      <span class="settings-ov-cat-label">${v(p.label)}</span>
      <span class="settings-ov-cat-count">${h}/${f} ready</span>
    </button>`}).join("");s.innerHTML=`
    <div class="settings-overview">
      <div class="settings-ov-progress">
        <svg class="settings-ov-ring" viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="8"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="${o}" stroke-width="8"
            stroke-linecap="round" stroke-dasharray="${n}" stroke-dashoffset="${a}"
            transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 0.6s ease"/>
        </svg>
        <div class="settings-ov-ring-text">
          <span class="settings-ov-ring-num">${e}</span>
          <span class="settings-ov-ring-label">of ${t} ready</span>
        </div>
      </div>
      <div class="settings-ov-cats">${u}</div>
    </div>

    <div class="settings-ov-license">
      <section class="wm-section">
        <h2 class="wm-section-title">${c("modals.settingsWindow.worldMonitor.apiKey.title")}</h2>
        <p class="wm-section-desc">${c("modals.settingsWindow.worldMonitor.apiKey.description")}</p>
        <div class="wm-key-row">
          <div class="wm-input-wrap">
            <input type="password" class="wm-input" data-wm-key-input
              placeholder="${c("modals.settingsWindow.worldMonitor.apiKey.placeholder")}"
              autocomplete="off" spellcheck="false"
              ${d.present?`value="${S}"`:""} />
            <button type="button" class="wm-toggle-vis" data-wm-toggle title="Show/hide">&#x1f441;</button>
          </div>
          <span class="wm-badge ${r}">${l}</span>
        </div>
      </section>

      <div class="wm-divider"><span>${c("modals.settingsWindow.worldMonitor.dividerOr")}</span></div>

      <section class="wm-section">
        <h2 class="wm-section-title">${c("modals.settingsWindow.worldMonitor.register.title")}</h2>
        <p class="wm-section-desc">${c("modals.settingsWindow.worldMonitor.register.description")}</p>
        ${`
        <div class="wm-register-row">
          <input type="email" class="wm-input wm-email" data-wm-email
            placeholder="${c("modals.settingsWindow.worldMonitor.register.emailPlaceholder")}" />
          <button type="button" class="wm-submit-btn" data-wm-register>
            ${c("modals.settingsWindow.worldMonitor.register.submitBtn")}
          </button>
        </div>
        <p class="wm-reg-status" data-wm-reg-status></p>
        `}
      </section>
    </div>
  `,be(s)}function be(s){var e,t,i;(e=s.querySelector("[data-wm-toggle]"))==null||e.addEventListener("click",()=>{const n=s.querySelector("[data-wm-key-input]");n&&(n.type=n.type==="password"?"text":"password")}),(t=s.querySelector("[data-wm-key-input]"))==null||t.addEventListener("input",n=>{const a=n.target;a.value.startsWith(S)&&(a.value=a.value.slice(S.length))}),(i=s.querySelector("[data-wm-register]"))==null||i.addEventListener("click",async()=>{const n=s.querySelector("[data-wm-email]"),a=s.querySelector("[data-wm-reg-status]"),o=s.querySelector("[data-wm-register]");if(!n||!a||!o)return;const d=n.value.trim();if(!d||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)){a.textContent=c("modals.settingsWindow.worldMonitor.register.invalidEmail"),a.className="wm-reg-status error";return}o.disabled=!0,o.textContent=c("modals.settingsWindow.worldMonitor.register.submitting");try{const r=await(await k("/api/register-interest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,source:"desktop-settings"})})).json();r.status==="already_registered"||r.status==="registered"?(localStorage.setItem("wm-waitlist-registered","1"),a.textContent=r.status==="already_registered"?c("modals.settingsWindow.worldMonitor.register.alreadyRegistered"):c("modals.settingsWindow.worldMonitor.register.success"),a.className="wm-reg-status ok"):(a.textContent=r.error||c("modals.settingsWindow.worldMonitor.register.error"),a.className="wm-reg-status error")}catch{a.textContent=c("modals.settingsWindow.worldMonitor.register.error"),a.className="wm-reg-status error"}finally{o.disabled=!1,o.textContent=c("modals.settingsWindow.worldMonitor.register.submitBtn")}}),s.querySelectorAll(".settings-ov-cat[data-section]").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.section;a&&x(a)})})}function Se(s,e){const i=e.features.map(n=>M.find(a=>a.id===n)).filter(Boolean).map(n=>{const a=H(n.id),o=O(n.id),d=C(n),l=!o&&d.every(w=>E(w).valid||g.hasPending(w)&&g.getValidationState(w).validated!==!1),r=o?"ready":l?"staged":"needs",u=o?"ok":l?"staged":"warn",p=o?"Ready":l?"Staged":"Needs keys",h=d.map(w=>X(w,n.id)).join(""),f=o||l?"":`<p class="settings-feat-fallback">${v(n.fallback)}</p>`;return`
      <div class="settings-feat ${r}" data-feature-id="${n.id}">
        <div class="settings-feat-header" data-feat-toggle-expand="${n.id}">
          <label class="settings-feat-toggle-label" data-click-stop>
            <div class="settings-feat-switch">
              <input type="checkbox" data-toggle="${n.id}" ${a?"checked":""} />
              <span class="settings-feat-slider"></span>
            </div>
          </label>
          <div class="settings-feat-info">
            <span class="settings-feat-name">${v(n.name)}</span>
            <span class="settings-feat-desc">${v(n.description)}</span>
          </div>
          <span class="settings-feat-pill ${u}">${p}</span>
          <span class="settings-feat-chevron">&#x25B8;</span>
        </div>
        <div class="settings-feat-body">
          ${h}
          ${f}
        </div>
      </div>
    `}).join("");s.innerHTML=`
    <div class="settings-section-header">
      <h2>${v(e.label)}</h2>
    </div>
    <div class="settings-feat-list">${i}</div>
  `,Z(s)}function X(s,e){var b,y;const t=E(s),i=g.hasPending(s),{validated:n,message:a}=g.getValidationState(s),o=Y[s]||s,d=re[s],l=V.has(s),r=d&&!t.present&&!i,u=i?n===!1?"Invalid":"Staged":t.present?t.valid?"Valid":"Looks invalid":"Missing",p=i?n===!1?"warn":"staged":t.valid?"ok":"warn",h=i?n===!1?"invalid":"valid-staged":"",f=i&&n===!1?a||"Invalid value":null;if(s==="OLLAMA_MODEL"){const $=i?g.getPending(s)||"":((b=_().secrets[s])==null?void 0:b.value)||"";return`
      <div class="settings-secret-row">
        <div class="settings-secret-label">${v(o)}</div>
        <span class="settings-secret-status ${p}">${v(u)}</span>
        <select data-model-select data-feature="${e}" class="${h}">
          ${$?`<option value="${v($)}" selected>${v($)}</option>`:'<option value="" selected disabled>Loading models...</option>'}
        </select>
        <input type="text" data-model-manual data-feature="${e}" class="${h} hidden-input"
          placeholder="Or type model name" autocomplete="off"
          ${$?`value="${v($)}"`:""}>
        ${f?`<span class="settings-secret-hint">${v(f)}</span>`:""}
      </div>
    `}const w=r?`<a href="#" data-signup-url="${d}" class="settings-secret-link">Get key</a>`:"";return`
    <div class="settings-secret-row">
      <div class="settings-secret-label">${v(o)}</div>
      <span class="settings-secret-status ${p}">${v(u)}</span>
      <div class="settings-input-wrapper${r?" has-suffix":""}">
        <input type="${l?"text":"password"}" data-secret="${s}" data-feature="${e}"
          placeholder="${i?"Staged":"Enter value..."}" autocomplete="off" class="${h}"
          ${i?`value="${l?v(g.getPending(s)||""):S}"`:l&&t.present?`value="${v(((y=_().secrets[s])==null?void 0:y.value)||"")}"`:""}>
        ${w}
      </div>
      ${f?`<span class="settings-secret-hint">${v(f)}</span>`:""}
    </div>
  `}function Z(s){s.querySelectorAll("[data-feat-toggle-expand]").forEach(t=>{t.addEventListener("click",i=>{if(i.target.closest("[data-click-stop]"))return;const n=t.closest(".settings-feat");n==null||n.classList.toggle("expanded")})}),s.querySelectorAll("input[data-toggle]").forEach(t=>{t.addEventListener("change",()=>{const i=t.dataset.toggle;i&&(de(i,t.checked),le(i,t.checked),A())})}),s.querySelectorAll("input[data-secret]").forEach(t=>{t.addEventListener("input",()=>{var a;const i=t.dataset.secret;if(!i)return;g.hasPending(i)&&t.value.startsWith(S)&&(t.value=t.value.slice(S.length)),g.setValidation(i,!0),t.classList.remove("valid-staged","invalid");const n=(a=t.closest(".settings-secret-row"))==null?void 0:a.querySelector(".settings-secret-hint");n&&n.remove()}),t.addEventListener("blur",()=>{var r;const i=t.dataset.secret;if(!i)return;const n=t.value.trim();if(!n){g.hasPending(i)&&(g.deletePending(i),x(L));return}if(n===S)return;g.setPending(i,n);const a=T(i,n);a.valid?g.setValidation(i,!0):g.setValidation(i,!1,a.hint||"Invalid format"),V.has(i)?t.value=n:(t.type="password",t.value=S),t.classList.remove("valid-staged","invalid"),t.classList.add(a.valid?"valid-staged":"invalid");const o=(r=t.closest(".settings-secret-row"))==null?void 0:r.querySelector(".settings-secret-status");o&&(o.textContent=a.valid?"Staged":"Invalid",o.className=`settings-secret-status ${a.valid?"staged":"warn"}`);const d=t.closest(".settings-secret-row"),l=d==null?void 0:d.querySelector(".settings-secret-hint");if(l&&l.remove(),!a.valid&&a.hint){const u=document.createElement("span");u.className="settings-secret-hint",u.textContent=a.hint,d==null||d.appendChild(u)}if(D(t.dataset.feature),i==="OLLAMA_API_URL"&&a.valid){const u=s.querySelector("select[data-model-select]");u&&j(u)}A()})}),s.querySelectorAll("a[data-signup-url]").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const n=t.dataset.signupUrl;n&&(ce()?ge("open_url",{url:n}).catch(()=>window.open(n,"_blank")):window.open(n,"_blank"))})});const e=s.querySelector("select[data-model-select]");e&&(e.addEventListener("change",()=>{const t=e.value;t&&(g.setPending("OLLAMA_MODEL",t),g.setValidation("OLLAMA_MODEL",!0),e.classList.remove("invalid"),e.classList.add("valid-staged"),D("aiOllama"),A())}),j(e))}function D(s){const e=document.querySelector(`.settings-feat[data-feature-id="${s}"]`);if(!e)return;const t=M.find(l=>l.id===s);if(!t)return;const i=O(s),n=C(t),a=!i&&n.every(l=>E(l).valid||g.hasPending(l)&&g.getValidationState(l).validated!==!1),o=e.classList.contains("expanded");e.className=`settings-feat ${i?"ready":a?"staged":"needs"}${o?" expanded":""}`;const d=e.querySelector(".settings-feat-pill");d&&(d.className=`settings-feat-pill ${i?"ok":a?"staged":"warn"}`,d.textContent=i?"Ready":a?"Staged":"Needs keys")}async function j(s){var o,d,l;const e=_(),t=g.getPending("OLLAMA_API_URL")||((o=e.secrets.OLLAMA_API_URL)==null?void 0:o.value)||"";if(!t){s.innerHTML='<option value="" disabled selected>Set Ollama URL first</option>';return}const i=g.getPending("OLLAMA_MODEL")||((d=e.secrets.OLLAMA_MODEL)==null?void 0:d.value)||"",n=await he(t);if(n.length===0){const r=(l=s.parentElement)==null?void 0:l.querySelector("input[data-model-manual]");r&&(s.style.display="none",r.classList.remove("hidden-input"),r.dataset.listenerAttached||(r.dataset.listenerAttached="1",r.addEventListener("blur",()=>{const u=r.value.trim();u&&(g.setPending("OLLAMA_MODEL",u),g.setValidation("OLLAMA_MODEL",!0),r.classList.remove("invalid"),r.classList.add("valid-staged"),D("aiOllama"),A())})));return}const a=i?"":'<option value="" selected disabled>Select a model...</option>';s.innerHTML=a+n.map(r=>`<option value="${v(r)}" ${r===i?"selected":""}>${v(r)}</option>`).join("")}function Le(s){var t,i,n,a;s.innerHTML=`
    <div class="settings-section-header">
      <h2>Debug &amp; Logs</h2>
    </div>
    <div class="debug-actions">
      <button id="openLogsBtn" type="button">Open Logs Folder</button>
      <button id="openSidecarLogBtn" type="button">Open API Log</button>
    </div>
    <section class="debug-data-section">
      <h3>Data Management</h3>
      <div class="debug-data-actions">
        <button type="button" class="settings-btn settings-btn-secondary" id="exportSettingsBtn">
          ${c("components.settings.exportSettings")}
        </button>
        <button type="button" class="settings-btn settings-btn-secondary" id="importSettingsBtn">
          ${c("components.settings.importSettings")}
        </button>
        <input type="file" id="importSettingsInput" accept=".json" style="display: none;" />
      </div>
    </section>
    <section class="settings-diagnostics" id="diagnosticsSection">
      <header class="diag-header">
        <h2>Diagnostics</h2>
        <div class="diag-toggles">
          <label><input type="checkbox" id="verboseApiLog"> Verbose Sidecar Log</label>
          <label><input type="checkbox" id="fetchDebugLog"> Frontend Fetch Debug</label>
        </div>
      </header>
      <div class="diag-traffic-bar">
        <h3>API Traffic <span id="trafficCount"></span></h3>
        <div class="diag-traffic-controls">
          <label><input type="checkbox" id="autoRefreshLog" checked> Auto</label>
          <button id="refreshLogBtn" type="button">Refresh</button>
          <button id="clearLogBtn" type="button">Clear</button>
        </div>
      </div>
      <div id="trafficLog" class="diag-traffic-log"></div>
    </section>
  `,(t=s.querySelector("#openLogsBtn"))==null||t.addEventListener("click",()=>{K("open_logs_folder",c("modals.settingsWindow.openLogs"))}),(i=s.querySelector("#openSidecarLogBtn"))==null||i.addEventListener("click",()=>{K("open_sidecar_log_file",c("modals.settingsWindow.openApiLog"))}),(n=s.querySelector("#exportSettingsBtn"))==null||n.addEventListener("click",()=>{pe()});const e=s.querySelector("#importSettingsInput");(a=s.querySelector("#importSettingsBtn"))==null||a.addEventListener("click",()=>{e==null||e.click()}),e==null||e.addEventListener("change",async o=>{var l;const d=(l=o.target.files)==null?void 0:l[0];if(d){try{const r=await fe(d);m(c("components.settings.importSuccess",{count:String(r.keysImported)}),"ok")}catch(r){r instanceof DOMException?r.name==="QuotaExceededError"||r.name==="NS_ERROR_DOM_QUOTA_REACHED"?m(c("components.settings.importFailed")+": storage limit reached","error"):r.name==="SecurityError"?m(c("components.settings.importFailed")+": storage blocked","error"):m(`${c("components.settings.importFailed")}: ${r.message||r.name}`,"error"):r instanceof Error&&r.message?m(`${c("components.settings.importFailed")}: ${r.message}`,"error"):m(c("components.settings.importFailed"),"error")}e.value=""}}),$e()}function $e(){const s=document.getElementById("verboseApiLog"),e=document.getElementById("fetchDebugLog"),t=document.getElementById("autoRefreshLog"),i=document.getElementById("refreshLogBtn"),n=document.getElementById("clearLogBtn"),a=document.getElementById("trafficLog"),o=document.getElementById("trafficCount");e&&(e.checked=localStorage.getItem("wm-debug-log")==="1",e.addEventListener("change",()=>{localStorage.setItem("wm-debug-log",e.checked?"1":"0")}));async function d(){if(s)try{const f=await(await k("/api/local-debug-toggle")).json();s.checked=f.verboseMode}catch{}}s==null||s.addEventListener("change",async()=>{try{const f=await(await k("/api/local-debug-toggle",{method:"POST"})).json();s&&(s.checked=f.verboseMode),m(f.verboseMode?c("modals.settingsWindow.verboseOn"):c("modals.settingsWindow.verboseOff"),"ok")}catch{m(c("modals.settingsWindow.sidecarError"),"error")}}),d();async function l(){if(a)try{const w=(await(await k("/api/local-traffic-log")).json()).entries||[];if(o&&(o.textContent=`(${w.length})`),w.length===0){a.innerHTML=`<p class="diag-empty">${c("modals.settingsWindow.noTraffic")}</p>`;return}const b=w.slice().reverse().map(y=>{var z;const $=((z=y.timestamp.split("T")[1])==null?void 0:z.replace("Z",""))||y.timestamp;return`<tr class="diag-${y.status<300?"ok":y.status<500?"warn":"err"}"><td>${v($)}</td><td>${y.method}</td><td title="${v(y.path)}">${v(y.path)}</td><td>${y.status}</td><td>${y.durationMs}ms</td></tr>`}).join("");a.innerHTML=`<table class="diag-table"><thead><tr><th>${c("modals.settingsWindow.table.time")}</th><th>${c("modals.settingsWindow.table.method")}</th><th>${c("modals.settingsWindow.table.path")}</th><th>${c("modals.settingsWindow.table.status")}</th><th>${c("modals.settingsWindow.table.duration")}</th></tr></thead><tbody>${b}</tbody></table>`}catch{a.innerHTML=`<p class="diag-empty">${c("modals.settingsWindow.sidecarUnreachable")}</p>`}}i==null||i.addEventListener("click",()=>void l()),n==null||n.addEventListener("click",async()=>{try{await k("/api/local-traffic-log",{method:"DELETE"})}catch{}a&&(a.innerHTML=`<p class="diag-empty">${c("modals.settingsWindow.logCleared")}</p>`),o&&(o.textContent="(0)")});let r=null;function u(){p(),r=ue(()=>l(),{intervalMs:3e3,pauseWhenHidden:!0,refreshOnVisible:!0,runImmediately:!0,jitterFraction:0})}function p(){r&&(r.stop(),r=null)}t==null||t.addEventListener("change",()=>{t.checked?u():p()}),u(),P=p}function U(s,e){const t=v(s),i=v(e);if(!i)return t;const n=new RegExp(`(${i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return t.replace(n,"<mark>$1</mark>")}function Me(s){const e=document.getElementById("contentArea");if(!e)return;if(!s.trim()){x(L);return}const t=s.toLowerCase(),i=[];for(const a of W)for(const o of a.features){const d=M.find(r=>r.id===o);if(!d)continue;[d.name,d.description,...C(d).map(r=>Y[r]||r)].join(" ").toLowerCase().includes(t)&&i.push({feature:d,catLabel:a.label})}if(i.length===0){e.innerHTML=`<div class="settings-search-empty"><p>No features match "${v(s)}"</p></div>`;return}const n=i.map(({feature:a,catLabel:o})=>{const d=H(a.id),l=O(a.id),r=C(a),u=!l&&r.every(b=>E(b).valid||g.hasPending(b)&&g.getValidationState(b).validated!==!1),p=l?"ready":u?"staged":"needs",h=l?"ok":u?"staged":"warn",f=l?"Ready":u?"Staged":"Needs keys",w=r.map(b=>X(b,a.id)).join("");return`
      <div class="settings-feat ${p} expanded" data-feature-id="${a.id}">
        <div class="settings-feat-header" data-feat-toggle-expand="${a.id}">
          <label class="settings-feat-toggle-label" data-click-stop>
            <div class="settings-feat-switch">
              <input type="checkbox" data-toggle="${a.id}" ${d?"checked":""} />
              <span class="settings-feat-slider"></span>
            </div>
          </label>
          <div class="settings-feat-info">
            <span class="settings-feat-name">${U(a.name,s)}</span>
            <span class="settings-feat-desc">${U(a.description,s)}</span>
          </div>
          <span class="settings-feat-pill ${h}">${f}</span>
          <span class="settings-feat-chevron">&#x25B8;</span>
        </div>
        <div class="settings-feat-body">
          <div class="settings-feat-cat-tag">${v(o)}</div>
          ${w}
        </div>
      </div>
    `}).join("");e.innerHTML=`
    <div class="settings-section-header">
      <h2>Search results for "${v(s)}"</h2>
    </div>
    <div class="settings-feat-list">${n}</div>
  `,Z(e)}async function Ee(){var t,i,n;await ae(),ne();try{await ie()}catch{}requestAnimationFrame(()=>{document.documentElement.classList.remove("no-transition")}),await oe(),g=new me,x("overview"),(t=document.getElementById("sidebarNav"))==null||t.addEventListener("click",a=>{const o=a.target.closest("[data-section]");o!=null&&o.dataset.section&&x(o.dataset.section)});const s=document.getElementById("settingsSearch");let e;s==null||s.addEventListener("input",()=>{clearTimeout(e),e=setTimeout(()=>Me(s.value),200)}),(i=document.getElementById("okBtn"))==null||i.addEventListener("click",()=>{(async()=>{try{const a=document.querySelector("[data-wm-key-input]"),o=a==null?void 0:a.value.trim(),d=!!(o&&o!==S&&o.length>0),l=document.getElementById("contentArea");l&&g.captureUnsavedInputs(l);const r=g.hasPendingChanges();if(!r&&!d){R();return}if(d&&o&&await G("WORLDMONITOR_API_KEY",o),r){m(c("modals.settingsWindow.validating"),"ok");const u=g.getMissingRequiredSecrets();if(u.length>0){m(`Missing required: ${u.join(", ")}`,"error");return}const p=await g.verifyPendingSecrets();if(p.length>0){m(c("modals.settingsWindow.verifyFailed",{errors:p.join(", ")}),"error");return}await g.commitVerifiedSecrets()}m(c("modals.settingsWindow.saved"),"ok"),R()}catch(a){console.error("[settings] save error:",a),m(c("modals.settingsWindow.failed",{error:String(a)}),"error")}})()}),(n=document.getElementById("cancelBtn"))==null||n.addEventListener("click",()=>{R()}),window.addEventListener("beforeunload",()=>{g.destroy()})}localStorage.setItem("wm-settings-open","1");window.addEventListener("beforeunload",()=>localStorage.removeItem("wm-settings-open"));Ee();
