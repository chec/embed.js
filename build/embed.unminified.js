var add_iframe, add_style, hide_iframe, set_opacity, show_iframe;

add_iframe = function(e, g, base_url) {
  var n, t;
  t = document.createDocumentFragment();
  n = document.createElement('div');
  n.setAttribute('id', 'checEmbedCheckout-' + e);
  n.setAttribute('class', 'checEmbedWrapper');
  n.setAttribute('style', 'display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; -webkit-transform: rotate3d(0, 0, 0, 0); -moz-transform: rotate3d(0, 0, 0, 0); -ms-transform: rotate3d(0, 0, 0, 0); -o-transform: rotate3d(0, 0, 0, 0); transform: rotate3d(0, 0, 0, 0); background-color: rgba(0,0,0,0.8); background: -webkit-radial-gradient(center, rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -moz-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -o-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -ms-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); z-index: 9992;');
  n.innerHTML = '<div id="preloader" style="margin-top:20%; text-align:center;"> <style type="text/css"> @-webkit-keyframes uil-default-anim { 0% { opacity: 1 } 100% { opacity: 0 } } @keyframes uil-default-anim { 0% { opacity: 1 } 100% { opacity: 0 } } .uil-default-css > div:nth-of-type(1) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.5s; animation-delay: -0.5s; } .uil-default-css > div:nth-of-type(2) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.375s; animation-delay: -0.375s; } .uil-default-css > div:nth-of-type(3) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.25s; animation-delay: -0.25s; } .uil-default-css > div:nth-of-type(4) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.125s; animation-delay: -0.125s; } .uil-default-css > div:nth-of-type(5) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0s; animation-delay: 0s; } .uil-default-css > div:nth-of-type(6) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0.125s; animation-delay: 0.125s; } .uil-default-css > div:nth-of-type(7) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0.25s; animation-delay: 0.25s; } .uil-default-css > div:nth-of-type(8) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0.375s; animation-delay: 0.375s; } .loader-node { top: 90px; left: 96px; width: 8px; height: 20px; background: #FFFFFF; box-shadow:0px 0px 3px rgba(0, 0, 0, 0.15) } </style> <div class="uil-default-css" style="-webkit-transform: scale(0.83); position: absolute; width: 200px; height:200px; left:50%; margin-left: -100px; top:50%; margin-top:-150px; overflow-x: hidden;"> <div class="loader-node" style="-webkit-transform:rotate(0deg) translate(0,-30px);transform:rotate(0deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(45deg) translate(0,-30px);transform:rotate(45deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(90deg) translate(0,-30px);transform:rotate(90deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(135deg) translate(0,-30px);transform:rotate(135deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(180deg) translate(0,-30px);transform:rotate(180deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(225deg) translate(0,-30px);transform:rotate(225deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(270deg) translate(0,-30px);transform:rotate(270deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(315deg) translate(0,-30px);transform:rotate(315deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> </div> </div> <iframe scrolling="yes" id="Chec-Embed" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" frameborder="0" allowtransparency="true" src="' + base_url + '/' + e + '?embed=true' + g + '" style=" background-attachment: none !important; background-origin: none !important; background-clip: none !important; background-color: transparent !important; border: none !important; overflow: hidden !important; margin: 0px !important; padding: 0px !important; position: fixed !important; left: 0px !important; top: 0px !important; width: 100% !important;  overflow-y: auto !important; height: 100% !important; z-index: 99999 !important; display:none; opacity:0;"></iframe>';
  t.appendChild(n);
  document.body.insertBefore(t, document.body.childNodes[0]);
  show_iframe('checEmbedCheckout-' + e);
  return false;
};

add_style = function() {
  var e, t;
  e = document.createDocumentFragment();
  t = document.createElement('style');
  t.setAttribute('id', 'chec-stylesheet');
  t.innerHTML = '';
  e.appendChild(t);
  document.body.insertBefore(e, document.body.childNodes[0]);
  return false;
};

show_iframe = function(e) {
  var i, n, r, s, t;
  t = document.getElementById(e);
  n = 0;
  r = 1e3;
  i = setInterval((function() {
    n += 100 / r;
    set_opacity(t, n);
    if (n >= 1) {
      set_opacity(t, 1);
      clearInterval(i);
    }
  }), r / 100);
  s = setInterval((function() {
    if (n > .1) {
      clearInterval(s);
    }
  }), 10);
};

hide_iframe = function(e) {
  var elements;
  elements = document.getElementsByClassName('checEmbedWrapper');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
};

set_opacity = function(e, t) {
  e.style.display = 'block';
  e.style.opacity = t;
  e.style.MozOpacity = t;
  e.style.KhtmlOpacity = t;
  e.style.filter = 'alpha(opacity=' + t * 100 + ');';
};

(function(e, t) {
  var n;
  n = function() {
    var n;
    var e;
    var accepted_links, i, k, o, q, r, s;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      return;
    }
    accepted_links = ['http://checkout.chec.dev', 'https://ch.eckout.com', 'https://checkout.trychec.com', 'http://ch.eckout.com', 'http://checkout.trychec.com', 'http://stage.ch.eckout.com/pay', 'http://checkout.chec.dev/pay', 'https://ch.eckout.com/pay', 'https://checkout.trychec.com/pay', 'http://ch.eckout.com/pay', 'http://checkout.trychec.com/pay', 'https://checkout.chec.io', 'http://stage.checkout.chec.io'];
    n = 0;
    e = t.getElementsByTagName('a');
    while (n < e.length) {
      r = e[n];
      i = e[n].getAttribute('href');
      if (i !== null) {
        s = i.split('/').pop();
        q = s.split('?').pop();
        k = s.split('?');
        o = i.substring(0, i.lastIndexOf('/'));
        if (accepted_links.indexOf(o) > -1) {
          r.removeAttribute('target');
          r.setAttribute('data-permalink', k[0]);
          r.setAttribute('data-prefill', '&' + q);
          r.setAttribute('data-base-url', i.substring(0, i.lastIndexOf('/')));
          r.addEventListener('click', (function(e) {
            add_iframe(this.getAttribute('data-permalink'), this.getAttribute('data-prefill'), this.getAttribute('data-base-url'));
            return false;
          }), false);
          r.href = '#';
        } else if (r.hasAttribute('data-chec-product-id')) {
          r.removeAttribute('target');
          r.setAttribute('data-permalink', r.getAttribute('data-chec-product-id'));
          r.setAttribute('data-prefill', '&' + q);
          r.setAttribute('data-base-url', 'https://checkout.chec.io');
          r.addEventListener('click', (function(e) {
            add_iframe(this.getAttribute('data-permalink'), this.getAttribute('data-prefill'), this.getAttribute('data-base-url'));
            return false;
          }), false);
          r.href = '#';
        }
      }
      n++;
    }
  };
  if (e.checkoutLoaded) {
    return;
  }
  e.checkoutLoaded = true;
  e.addEventListener('message', (function(e) {
    var t;
    var r;
    t = JSON.parse(e.data);
    if (t.event === 'CheckoutClose') {
      hide_iframe('Chec-Embed');
    }
    if (t.event === 'CheckoutReady') {
      show_iframe('Chec-Embed');
      r = document.getElementById('preloader');
      r.style.display = 'none';
    }
  }), false);
  if (e.addEventListener) {
    e.addEventListener('load', n, false);
  } else {
    e.attachEvent('onload', n);
  }
})(window, document);
