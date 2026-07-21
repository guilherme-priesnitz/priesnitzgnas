/* =========================================================
   Priesnitz Gnas | Advocacia Empresarial
   Motor do site: i18n, header/footer, menu overlay, WhatsApp
   ========================================================= */
(function(){
'use strict';

var LANGS = ['pt','en','es','fr'];
var LANG_TAGS = { pt:'pt-BR', en:'en', es:'es', fr:'fr' };
var STORAGE_LANG = 'pg_lang';
var STORAGE_WA_DISMISS = 'pg_wa_dismissed';
var REDUCED_MOTION = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var NAV = [
  { key:'home',    page:'home',    href:'index.html' },
  { key:'about',   page:'about',   href:'escritorio.html' },
  { key:'areas',   page:'areas',   href:'atuacao.html' },
  { key:'method',  page:'method',  href:'metodo.html' },
  { key:'contact', page:'contact', href:'contato.html' }
];

/* ---------------------------------------------------------
   Dicionário compartilhado (nav, menu, rodapé, whatsapp, 404)
   --------------------------------------------------------- */
var SITE_I18N = {
 pt:{
  "nav.home":"Início","nav.about":"O Escritório","nav.areas":"Áreas de Atuação",
  "nav.method":"O Método","nav.contact":"Contato",
  "menu.d.home":"Advocacia como inteligência de negócio.",
  "menu.d.about":"Manifesto, valores e os sócios que conduzem o trabalho.",
  "menu.d.areas":"Tributário e Trabalhista em destaque, e mais.",
  "menu.d.method":"Diagnóstico, plano anual e revisões contínuas.",
  "menu.d.contact":"Endereço, WhatsApp, e-mail e horário de atendimento.",
  "menu.close":"Fechar", "menu.menu":"Menu",
  "ftr.addr":"Endereço","ftr.phone":"WhatsApp","ftr.email":"E-mail","ftr.social":"Instagram",
  "ftr.linksTitle":"Navegação","ftr.contactTitle":"Contato","ftr.legalTitle":"Institucional",
  "ftr.rights":"Todos os direitos reservados.",
  "ftr.disclaimer":"Este site tem caráter meramente informativo e não constitui consulta jurídica. Publicidade de advocacia em conformidade com o Provimento 205/2021 da OAB.",
  "wa.popupTitle":"Fale com o escritório","wa.popupText":"Podemos ajudar sua empresa? Responda algumas perguntas rápidas no WhatsApp.",
  "wa.popupCta":"Iniciar conversa","wa.close":"Fechar",
  "err.title":"Página não encontrada.","err.text":"O endereço acessado não existe ou foi movido.","err.cta":"Voltar ao início"
 },
 en:{
  "nav.home":"Home","nav.about":"The Firm","nav.areas":"Practice Areas",
  "nav.method":"The Method","nav.contact":"Contact",
  "menu.d.home":"Law as business intelligence.",
  "menu.d.about":"Manifesto, values and the partners behind the work.",
  "menu.d.areas":"Tax and Labor Law as highlights, and more.",
  "menu.d.method":"Assessment, annual plan and continuous reviews.",
  "menu.d.contact":"Address, WhatsApp, email and business hours.",
  "menu.close":"Close", "menu.menu":"Menu",
  "ftr.addr":"Address","ftr.phone":"WhatsApp","ftr.email":"Email","ftr.social":"Instagram",
  "ftr.linksTitle":"Navigation","ftr.contactTitle":"Contact","ftr.legalTitle":"Legal",
  "ftr.rights":"All rights reserved.",
  "ftr.disclaimer":"This website is for informational purposes only and does not constitute legal advice. Legal advertising in accordance with OAB Provimento 205/2021 (Brazil).",
  "wa.popupTitle":"Talk to the firm","wa.popupText":"Can we help your company? Answer a few quick questions on WhatsApp.",
  "wa.popupCta":"Start conversation","wa.close":"Close",
  "err.title":"Page not found.","err.text":"The address you tried doesn't exist or has moved.","err.cta":"Back to home"
 },
 es:{
  "nav.home":"Inicio","nav.about":"El Despacho","nav.areas":"Áreas de Actuación",
  "nav.method":"El Método","nav.contact":"Contacto",
  "menu.d.home":"Abogacía como inteligencia de negocio.",
  "menu.d.about":"Manifiesto, valores y los socios detrás del trabajo.",
  "menu.d.areas":"Tributario y Laboral como destacadas, y más.",
  "menu.d.method":"Diagnóstico, plan anual y revisiones continuas.",
  "menu.d.contact":"Dirección, WhatsApp, correo y horario de atención.",
  "menu.close":"Cerrar", "menu.menu":"Menú",
  "ftr.addr":"Dirección","ftr.phone":"WhatsApp","ftr.email":"Correo","ftr.social":"Instagram",
  "ftr.linksTitle":"Navegación","ftr.contactTitle":"Contacto","ftr.legalTitle":"Institucional",
  "ftr.rights":"Todos los derechos reservados.",
  "ftr.disclaimer":"Este sitio tiene carácter meramente informativo y no constituye asesoría jurídica. Publicidad conforme al Provimento 205/2021 de la OAB (Brasil).",
  "wa.popupTitle":"Habla con el despacho","wa.popupText":"¿Podemos ayudar a tu empresa? Responde unas preguntas rápidas por WhatsApp.",
  "wa.popupCta":"Iniciar conversación","wa.close":"Cerrar",
  "err.title":"Página no encontrada.","err.text":"La dirección visitada no existe o fue movida.","err.cta":"Volver al inicio"
 },
 fr:{
  "nav.home":"Accueil","nav.about":"Le Cabinet","nav.areas":"Domaines d'intervention",
  "nav.method":"La Méthode","nav.contact":"Contact",
  "menu.d.home":"Le droit comme intelligence d'affaires.",
  "menu.d.about":"Manifeste, valeurs et les associés derrière le travail.",
  "menu.d.areas":"Droit fiscal et du travail en vedette, et plus encore.",
  "menu.d.method":"Diagnostic, plan annuel et revues continues.",
  "menu.d.contact":"Adresse, WhatsApp, e-mail et horaires.",
  "menu.close":"Fermer", "menu.menu":"Menu",
  "ftr.addr":"Adresse","ftr.phone":"WhatsApp","ftr.email":"E-mail","ftr.social":"Instagram",
  "ftr.linksTitle":"Navigation","ftr.contactTitle":"Contact","ftr.legalTitle":"Institutionnel",
  "ftr.rights":"Tous droits réservés.",
  "ftr.disclaimer":"Ce site est fourni à titre purement informatif et ne constitue pas un conseil juridique. Publicité conforme au Provimento 205/2021 de l'OAB (Brésil).",
  "wa.popupTitle":"Parlez au cabinet","wa.popupText":"Pouvons-nous aider votre entreprise ? Répondez à quelques questions rapides sur WhatsApp.",
  "wa.popupCta":"Démarrer la conversation","wa.close":"Fermer",
  "err.title":"Page introuvable.","err.text":"L'adresse demandée n'existe pas ou a été déplacée.","err.cta":"Retour à l'accueil"
 }
};

/* ---------------------------------------------------------
   Idioma: detecção + memória
   --------------------------------------------------------- */
function detectLang(){
  var nav = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
  for (var i=0;i<LANGS.length;i++){ if (nav.indexOf(LANGS[i]) === 0) return LANGS[i]; }
  return 'pt';
}
function getLang(){
  try{
    var saved = localStorage.getItem(STORAGE_LANG);
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
  }catch(e){}
  return detectLang();
}
function setLang(lang){
  try{ localStorage.setItem(STORAGE_LANG, lang); }catch(e){}
  applyTranslations(lang);
}

function applyTranslations(lang){
  var merged = {};
  var shared = SITE_I18N[lang] || SITE_I18N.pt;
  var page = (window.PAGE_I18N && window.PAGE_I18N[lang]) || {};
  for (var k in shared) merged[k] = shared[k];
  for (var k2 in page) merged[k2] = page[k2];

  document.documentElement.setAttribute('lang', LANG_TAGS[lang] || 'pt-BR');

  var nodes = document.querySelectorAll('[data-i18n]');
  for (var i=0;i<nodes.length;i++){
    var key = nodes[i].getAttribute('data-i18n');
    if (merged[key] != null) nodes[i].textContent = merged[key];
  }
  var htmlNodes = document.querySelectorAll('[data-i18n-html]');
  for (var j=0;j<htmlNodes.length;j++){
    var key2 = htmlNodes[j].getAttribute('data-i18n-html');
    if (merged[key2] != null) htmlNodes[j].innerHTML = merged[key2];
  }
  var attrNodes = document.querySelectorAll('[data-i18n-attr]');
  for (var m=0;m<attrNodes.length;m++){
    var spec = attrNodes[m].getAttribute('data-i18n-attr').split(':');
    if (spec.length === 2 && merged[spec[1]] != null) attrNodes[m].setAttribute(spec[0], merged[spec[1]]);
  }
  updateLangSwitchUI(lang);
}

function updateLangSwitchUI(lang){
  var btns = document.querySelectorAll('.lang-switch [data-lang]');
  for (var i=0;i<btns.length;i++){
    var isActive = btns[i].getAttribute('data-lang') === lang;
    btns[i].classList.toggle('is-active', isActive);
    btns[i].setAttribute('aria-pressed', isActive ? 'true' : 'false');
  }
}

/* ---------------------------------------------------------
   Header
   --------------------------------------------------------- */
function buildHeader(){
  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<a class="site-header__logo" href="index.html" aria-label="Priesnitz Gnas — início">'+
      '<img src="assets/logo-white.png" alt="Priesnitz Gnas | Advocacia Empresarial">'+
    '</a>'+
    '<button type="button" class="menu-trigger" id="menuTrigger" aria-haspopup="true" aria-expanded="false" aria-controls="menuOverlay">'+
      '<span class="menu-trigger__box"><span></span><span></span><span></span></span>'+
      '<span data-i18n="menu.menu">Menu</span>'+
    '</button>';
  document.body.insertBefore(header, document.body.firstChild);
}

/* ---------------------------------------------------------
   Menu overlay em tela cheia
   --------------------------------------------------------- */
function buildMenuOverlay(){
  var overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  overlay.id = 'menuOverlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Menu');

  var navItems = '';
  for (var i=0;i<NAV.length;i++){
    var n = NAV[i];
    navItems +=
      '<div class="menu-overlay__item" data-angle="'+ Math.round(i*(360/NAV.length)) +'">'+
        '<span class="mi-k">0'+(i+1)+'</span>'+
        '<div>'+
          '<a href="'+ n.href +'" data-nav-page="'+ n.page +'" data-i18n="nav.'+ n.key +'"></a>'+
          '<p class="menu-overlay__desc" data-i18n="menu.d.'+ n.key +'"></p>'+
        '</div>'+
      '</div>';
  }

  overlay.innerHTML =
    '<button type="button" class="menu-close" id="menuClose" aria-label="Fechar menu" data-i18n-attr="aria-label:menu.close">&times;</button>'+
    '<div class="menu-overlay__inner">'+
      '<nav class="menu-overlay__nav" id="menuNav">'+ navItems +'</nav>'+
      '<div class="menu-overlay__mark-wrap">'+
        '<img class="menu-overlay__mark" id="menuMark" src="assets/icon.png" alt="">'+
      '</div>'+
    '</div>'+
    '<div class="menu-overlay__foot">'+
      '<div class="lang-switch" role="group" aria-label="Idioma">'+
        '<button type="button" data-lang="pt">PT</button>'+
        '<button type="button" data-lang="en">EN</button>'+
        '<button type="button" data-lang="es">ES</button>'+
        '<button type="button" data-lang="fr">FR</button>'+
      '</div>'+
      '<div class="menu-overlay__social">'+
        '<a href="https://www.instagram.com/priesnitzgnas/" target="_blank" rel="noopener">Instagram</a>'+
        '<a href="https://wa.me/5545991389958" target="_blank" rel="noopener">WhatsApp</a>'+
        '<a href="https://intranetpriesnitzgnas.web.app/" target="_blank" rel="noopener">Intranet</a>'+
      '</div>'+
    '</div>';

  document.body.appendChild(overlay);
}

function initHoverMark(){
  var mark = document.getElementById('menuMark');
  var items = document.querySelectorAll('#menuNav .menu-overlay__item');
  if (!mark || !items.length) return;

  function setIdle(){
    if (REDUCED_MOTION){ mark.style.transform = 'rotate(0deg)'; mark.classList.remove('is-lit'); return; }
    mark.style.transform = 'rotate(0deg)';
    mark.classList.remove('is-lit');
  }
  for (var i=0;i<items.length;i++){
    (function(item){
      item.addEventListener('mouseenter', function(){
        var angle = item.getAttribute('data-angle');
        mark.style.transform = 'rotate('+ angle +'deg)';
        mark.classList.add('is-lit');
      });
      item.addEventListener('focusin', function(){
        var angle = item.getAttribute('data-angle');
        mark.style.transform = 'rotate('+ angle +'deg)';
        mark.classList.add('is-lit');
      });
      item.addEventListener('mouseleave', setIdle);
      item.addEventListener('focusout', setIdle);
    })(items[i]);
  }
}

function markActiveNav(){
  var current = document.body.getAttribute('data-page');
  var links = document.querySelectorAll('#menuNav a[data-nav-page]');
  for (var i=0;i<links.length;i++){
    if (links[i].getAttribute('data-nav-page') === current){
      links[i].setAttribute('aria-current','page');
      links[i].parentElement.parentElement.classList.add('is-active');
    }
  }
}

/* ---------------------------------------------------------
   Abrir/fechar menu
   --------------------------------------------------------- */
function initMenuBehavior(){
  var trigger = document.getElementById('menuTrigger');
  var closeBtn = document.getElementById('menuClose');
  var overlay = document.getElementById('menuOverlay');
  var lastFocused = null;

  function openMenu(){
    lastFocused = document.activeElement;
    document.body.classList.add('menu-open');
    trigger.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
    var firstLink = overlay.querySelector('a');
    if (firstLink) firstLink.focus();
  }
  function closeMenu(){
    document.body.classList.remove('menu-open');
    trigger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  function toggleMenu(){
    document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
  }

  if (trigger) trigger.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) closeMenu();
  });

  overlay.querySelectorAll('#menuNav a').forEach(function(a){
    a.addEventListener('click', function(){ document.body.classList.remove('menu-open'); document.body.style.overflow=''; });
  });
}

function initLangSwitch(){
  var btns = document.querySelectorAll('.lang-switch [data-lang]');
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){ setLang(btn.getAttribute('data-lang')); });
  });
}

/* ---------------------------------------------------------
   Rodapé
   --------------------------------------------------------- */
function buildFooter(){
  var year = new Date().getFullYear();
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="wrap">'+
      '<div class="site-footer__top">'+
        '<div>'+
          '<div class="site-footer__logo"><img src="assets/logo-white.png" alt="Priesnitz Gnas | Advocacia Empresarial"></div>'+
          '<p class="site-footer__desc" data-i18n="menu.d.home"></p>'+
        '</div>'+
        '<div>'+
          '<h4 data-i18n="ftr.linksTitle"></h4>'+
          '<ul>'+
            NAV.map(function(n){ return '<li><a href="'+n.href+'" data-i18n="nav.'+n.key+'"></a></li>'; }).join('')+
          '</ul>'+
        '</div>'+
        '<div>'+
          '<h4 data-i18n="ftr.contactTitle"></h4>'+
          '<ul>'+
            '<li>R. Santos Dumont, 3116 — Centro<br>Toledo · PR · 85900-010</li>'+
            '<li><a href="https://wa.me/5545991389958" target="_blank" rel="noopener">(45) 99138-9958</a></li>'+
            '<li><a href="mailto:contato@priesnitzgnas.adv.br">contato@priesnitzgnas.adv.br</a></li>'+
            '<li><a href="https://www.instagram.com/priesnitzgnas/" target="_blank" rel="noopener">@priesnitzgnas</a></li>'+
          '</ul>'+
        '</div>'+
        '<div>'+
          '<h4 data-i18n="ftr.legalTitle"></h4>'+
          '<ul>'+
            '<li>CNPJ 48.650.973/0001-00</li>'+
            '<li>OAB/PR 14.702</li>'+
            '<li>Guilherme Priesnitz</li>'+
            '<li>Isabella Reimann Gnas Priesnitz</li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
      '<div class="site-footer__bottom">'+
        '<span>&copy; '+ year +' Priesnitz Gnas · <span data-i18n="ftr.rights"></span></span>'+
      '</div>'+
      '<p class="site-footer__legal" data-i18n="ftr.disclaimer"></p>'+
    '</div>';
  document.body.appendChild(footer);
}

/* ---------------------------------------------------------
   WhatsApp flutuante + pop-up
   --------------------------------------------------------- */
function buildWaFloat(){
  var wrap = document.createElement('div');
  wrap.innerHTML =
    '<div class="wa-popup" id="waPopup" role="dialog" aria-label="WhatsApp">'+
      '<button type="button" class="wa-popup__close" id="waPopupClose" aria-label="Fechar" data-i18n-attr="aria-label:wa.close">&times;</button>'+
      '<div class="wa-popup__title" data-i18n="wa.popupTitle"></div>'+
      '<div class="wa-popup__text" data-i18n="wa.popupText"></div>'+
      '<a class="btn-wa" href="https://wa.me/5545991389958" target="_blank" rel="noopener">'+
        '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/></svg>'+
        '<span data-i18n="wa.popupCta"></span>'+
      '</a>'+
    '</div>'+
    '<button type="button" class="wa-float" id="waFloat" aria-label="WhatsApp">'+
      '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/></svg>'+
    '</button>';
  while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
}

function initWaPopup(){
  var popup = document.getElementById('waPopup');
  var floatBtn = document.getElementById('waFloat');
  var closeBtn = document.getElementById('waPopupClose');
  if (!popup || !floatBtn) return;

  var dismissed = false;
  try{ dismissed = sessionStorage.getItem(STORAGE_WA_DISMISS) === '1'; }catch(e){}

  function openPopup(){ popup.classList.add('is-open'); }
  function closePopup(){
    popup.classList.remove('is-open');
    try{ sessionStorage.setItem(STORAGE_WA_DISMISS, '1'); }catch(e){}
  }

  function showWhenFree(){
    if (dismissed) return;
    if (!document.body.classList.contains('menu-open')){ openPopup(); return; }
    var mo = new MutationObserver(function(){
      if (!document.body.classList.contains('menu-open')){
        mo.disconnect();
        openPopup();
      }
    });
    mo.observe(document.body, { attributes:true, attributeFilter:['class'] });
  }

  if (!dismissed){
    window.setTimeout(showWhenFree, 6000);
  }
  floatBtn.addEventListener('click', function(e){
    if (!popup.classList.contains('is-open')){ e.preventDefault(); openPopup(); }
  });
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
}

/* ---------------------------------------------------------
   Header sólido ao rolar + revelação de seções
   --------------------------------------------------------- */
function initScrollHeader(){
  var header = document.querySelector('.site-header');
  if (!header) return;
  function onScroll(){ header.classList.toggle('is-scrolled', window.scrollY > 30); }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

function initReveal(){
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (REDUCED_MOTION || !('IntersectionObserver' in window)){
    return;
  }
  els.forEach(function(el){ el.classList.add('is-pending'); });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.remove('is-pending');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:.12 });
  els.forEach(function(el){ io.observe(el); });
}

/* ---------------------------------------------------------
   Boot
   --------------------------------------------------------- */
buildHeader();
buildMenuOverlay();
buildFooter();
buildWaFloat();

var currentLang = getLang();
applyTranslations(currentLang);

initScrollHeader();
initReveal();
initMenuBehavior();
initHoverMark();
initLangSwitch();
initWaPopup();
markActiveNav();

if (document.body.getAttribute('data-page') === 'home'){
  window.setTimeout(function(){
    var t = document.getElementById('menuTrigger');
    if (t) t.click();
  }, 350);
}

})();
