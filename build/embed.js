var add_iframe,get_anchor,get_chec_url_parts,handle_click,hide_iframe,register_click_handler,set_opacity,show_iframe;add_iframe=function(t,e,a){var i,n;return n=document.createDocumentFragment(),(i=document.createElement("div")).setAttribute("id","checEmbedCheckout-"+t),i.setAttribute("class","checEmbedWrapper"),i.setAttribute("style","display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; -webkit-transform: rotate3d(0, 0, 0, 0); -moz-transform: rotate3d(0, 0, 0, 0); -ms-transform: rotate3d(0, 0, 0, 0); -o-transform: rotate3d(0, 0, 0, 0); transform: rotate3d(0, 0, 0, 0); background-color: rgba(0,0,0,0.8); background: -webkit-radial-gradient(center, rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -moz-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -o-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -ms-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); z-index: 9992;"),i.innerHTML='<div id="preloader" style="margin-top:20%; text-align:center;"> <style type="text/css"> @-webkit-keyframes uil-default-anim { 0% { opacity: 1 } 100% { opacity: 0 } } @keyframes uil-default-anim { 0% { opacity: 1 } 100% { opacity: 0 } } .uil-default-css > div:nth-of-type(1) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.5s; animation-delay: -0.5s; } .uil-default-css > div:nth-of-type(2) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.375s; animation-delay: -0.375s; } .uil-default-css > div:nth-of-type(3) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.25s; animation-delay: -0.25s; } .uil-default-css > div:nth-of-type(4) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: -0.125s; animation-delay: -0.125s; } .uil-default-css > div:nth-of-type(5) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0s; animation-delay: 0s; } .uil-default-css > div:nth-of-type(6) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0.125s; animation-delay: 0.125s; } .uil-default-css > div:nth-of-type(7) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0.25s; animation-delay: 0.25s; } .uil-default-css > div:nth-of-type(8) { -webkit-animation: uil-default-anim 1s linear infinite; animation: uil-default-anim 1s linear infinite; -webkit-animation-delay: 0.375s; animation-delay: 0.375s; } .loader-node { top: 90px; left: 96px; width: 8px; height: 20px; background: #FFFFFF; box-shadow:0px 0px 3px rgba(0, 0, 0, 0.15) } </style> <div class="uil-default-css" style="-webkit-transform: scale(0.83); position: absolute; width: 200px; height:200px; left:50%; margin-left: -100px; top:50%; margin-top:-150px; overflow-x: hidden;"> <div class="loader-node" style="-webkit-transform:rotate(0deg) translate(0,-30px);transform:rotate(0deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(45deg) translate(0,-30px);transform:rotate(45deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(90deg) translate(0,-30px);transform:rotate(90deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(135deg) translate(0,-30px);transform:rotate(135deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(180deg) translate(0,-30px);transform:rotate(180deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(225deg) translate(0,-30px);transform:rotate(225deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(270deg) translate(0,-30px);transform:rotate(270deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> <div class="loader-node" style="-webkit-transform:rotate(315deg) translate(0,-30px);transform:rotate(315deg) translate(0,-30px);border-radius:6px;position:absolute;"></div> </div> </div> <iframe scrolling="yes" id="Chec-Embed" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" frameborder="0" allowtransparency="true" src="'+a+"/"+t+"?embed=true"+e+'" style=" background-attachment: none !important; background-origin: none !important; background-clip: none !important; background-color: transparent !important; border: none !important; overflow: hidden !important; margin: 0px !important; padding: 0px !important; position: fixed !important; left: 0px !important; top: 0px !important; width: 100% !important;  overflow-y: auto !important; height: 100% !important; z-index: 99999 !important; display:none; opacity:0;"></iframe>',n.appendChild(i),document.body.insertBefore(n,document.body.childNodes[0]),show_iframe("checEmbedCheckout-"+t),!1},show_iframe=function(t){var e,a,i,n;n=document.getElementById(t),a=0,e=setInterval(function(){set_opacity(n,a+=.1),1<=a&&(set_opacity(n,1),clearInterval(e))},10),i=setInterval(function(){.1<a&&clearInterval(i)},10)},hide_iframe=function(t){var e;for(e=document.getElementsByClassName("checEmbedWrapper");0<e.length;)e[0].parentNode.removeChild(e[0])},set_opacity=function(t,e){t.style.display="block",t.style.opacity=e,t.style.MozOpacity=e,t.style.KhtmlOpacity=e,t.style.filter="alpha(opacity="+100*e+");"},get_anchor=function(t){return null!==t&&("a"===t.tagName.toLowerCase()?t:get_anchor(t.parentElement))},get_chec_url_parts=function(t){var e,a,i,n;return a=(n=t.href.split("/").pop()).split("?").shift(),i=n.split("?").pop(),e=t.href.substring(0,t.href.lastIndexOf("/")),-1<["https://checkout.chec.io","https://checkout-stage.chec.io","https://checkout.chec.local"].indexOf(e)?{permalink:a,prefill:"&"+i,baseUrl:e}:!!t.hasAttribute("data-chec-product-id")&&{permalink:t.getAttribute("data-chec-product-id"),prefill:"&"+i,baseUrl:"https://checkout.chec.io"}},handle_click=function(t){var e,a;/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)||(e=get_anchor(t.target))&&(a=get_chec_url_parts(e))&&(e.removeAttribute("target"),e.setAttribute("data-permalink",a.permalink),e.setAttribute("data-prefill",a.prefill),e.setAttribute("data-base-url",a.baseUrl),add_iframe(a.permalink,a.prefill,a.baseUrl),t.preventDefault())},register_click_handler=function(){return document.addEventListener("click",handle_click,!1)},function(t){t.checkoutLoaded||(t.checkoutLoaded=!0,register_click_handler(),t.addEventListener("message",function(t){var e;"CheckoutClose"===(e=JSON.parse(t.data)).event&&hide_iframe("Chec-Embed"),"CheckoutReady"===e.event&&(show_iframe("Chec-Embed"),document.getElementById("preloader").style.display="none")},!1))}(window,document);