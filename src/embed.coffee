add_iframe = (e, g, base_url) ->
  t = document.createDocumentFragment()
  n = document.createElement('div')
  n.setAttribute 'id', 'checEmbedCheckout-' + e
  n.setAttribute 'class', 'checEmbedWrapper'
  n.setAttribute 'style', 'display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; -webkit-transform: rotate3d(0, 0, 0, 0); -moz-transform: rotate3d(0, 0, 0, 0); -ms-transform: rotate3d(0, 0, 0, 0); -o-transform: rotate3d(0, 0, 0, 0); transform: rotate3d(0, 0, 0, 0); background-color: rgba(0,0,0,0.8); background: -webkit-radial-gradient(center, rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -moz-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -o-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); background: -ms-radial-gradient(rgba(36, 36, 36, 0.25), rgba(13, 13, 13, 0.85)); z-index: 9992;'
  n.innerHTML = '
  <div id="preloader" style="margin-top:20%; text-align:center;">
  <style type="text/css">
    @-webkit-keyframes uil-default-anim {
        0% {
            opacity: 1
        }
        100% {
            opacity: 0
        }
    }

    @keyframes uil-default-anim {
        0% {
            opacity: 1
        }
        100% {
            opacity: 0
        }
    }

    .uil-default-css > div:nth-of-type(1) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
    }

    .uil-default-css > div:nth-of-type(2) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: -0.375s;
        animation-delay: -0.375s;
    }

    .uil-default-css > div:nth-of-type(3) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
    }

    .uil-default-css > div:nth-of-type(4) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: -0.125s;
        animation-delay: -0.125s;
    }

    .uil-default-css > div:nth-of-type(5) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    .uil-default-css > div:nth-of-type(6) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: 0.125s;
        animation-delay: 0.125s;
    }

    .uil-default-css > div:nth-of-type(7) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: 0.25s;
        animation-delay: 0.25s;
    }

    .uil-default-css > div:nth-of-type(8) {
        -webkit-animation: uil-default-anim 1s linear infinite;
        animation: uil-default-anim 1s linear infinite;
        -webkit-animation-delay: 0.375s;
        animation-delay: 0.375s;
    }
    .loader-node {
        top: 90px;
        left: 96px;
        width: 8px;
        height: 20px;
        background: #FFFFFF;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
    }
</style>
<div class="uil-default-css" style="-webkit-transform: scale(0.83);
position: absolute;
width: 200px;
height:200px;
left:50%;
margin-left: -100px;
top:50%;
margin-top:-150px;
overflow-x: hidden;">
    <div class="loader-node" style="-webkit-transform:rotate(0deg) translate(0,-30px);transform:rotate(0deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(45deg) translate(0,-30px);transform:rotate(45deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(90deg) translate(0,-30px);transform:rotate(90deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(135deg) translate(0,-30px);transform:rotate(135deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(180deg) translate(0,-30px);transform:rotate(180deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(225deg) translate(0,-30px);transform:rotate(225deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(270deg) translate(0,-30px);transform:rotate(270deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
    <div class="loader-node" style="-webkit-transform:rotate(315deg) translate(0,-30px);transform:rotate(315deg) translate(0,-30px);border-radius:6px;position:absolute;"></div>
</div>
  </div>
  <iframe scrolling="yes" id="Chec-Embed" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" frameborder="0" allowtransparency="true" src="' +  base_url + '/' + e + '?embed=true' + g + '" style=" background-attachment: none !important; background-origin: none !important; background-clip: none !important; background-color: transparent !important; border: none !important; overflow: hidden !important; margin: 0px !important; padding: 0px !important; position: fixed !important; left: 0px !important; top: 0px !important; width: 100% !important;  overflow-y: auto !important; height: 100% !important; z-index: 99999 !important; display:none; opacity:0;"></iframe>'
  t.appendChild n
  document.body.insertBefore t, document.body.childNodes[0]
  show_iframe 'checEmbedCheckout-' + e
  false

show_iframe = (e) ->
  t = document.getElementById(e)

  n = 0
  r = 1e3
  i = setInterval((->
    n += 100 / r
    set_opacity t, n
    if n >= 1
      set_opacity t, 1
      clearInterval i
    return
  ), r / 100)
  s = setInterval((->
    if n > .1
      clearInterval s
    return
  ), 10)
  return

hide_iframe = (e) ->
  elements = document.getElementsByClassName('checEmbedWrapper')
  while elements.length > 0
    elements[0].parentNode.removeChild elements[0]
  return

set_opacity = (e, t) ->
  e.style.display = 'block'
  e.style.opacity = t
  e.style.MozOpacity = t
  e.style.KhtmlOpacity = t
  e.style.filter = 'alpha(opacity=' + t * 100 + ');'
  return

# Recurse the clicked target to see if we can work out whether an anchor was clicked or not. Return the anchor
# clicked if one is found, otherwise false.
get_anchor = (element) ->
  # Is there a current element (or a provided parent)?
  if element == null
    return false
  # Is the current element an anchor?
  if element.tagName.toLowerCase() == 'a'
    return element
  # Check if parent element is an anchor
  return get_anchor(element.parentElement)

# Determine if the URL for the clicked anchor is a Chec URL, that should trigger the embed frame. If it's a Chec
# URL then we return an object containing the necessary parts to construct the iframe, otherwise return false.
get_chec_url_parts = (anchor) ->
  urlPath = anchor.href.split('/').pop()
  permalink = urlPath.split('?').shift()
  prefill = urlPath.split('?').pop()
  baseUrl = anchor.href.substring(0, anchor.href.lastIndexOf('/'))

  # Links containing these domains will be converted into embed URLs
  accepted_links = [
    'https://checkout.chec.io',
    'https://checkout-stage.chec.io',
    'https://checkout.chec.local',
  ]

  # Does the base URL match our accepted links?
  if accepted_links.indexOf(baseUrl) > -1
    return {
      permalink: permalink,
      prefill: '&' + prefill,
      baseUrl: baseUrl
    }

  # Back up in case the URL's been rewritten, look at the product-id attribute
  if (anchor.hasAttribute('data-chec-product-id'))
    return {
      permalink: anchor.getAttribute('data-chec-product-id'),
      prefill: '&' + prefill,
      baseUrl: 'https://checkout.chec.io'
    }

  # Not a Chec URL
  return false

# Handle clicks on something in the window
handle_click = (event) ->
  # Don't run on mobile devices
  if /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    return

  # Check whether the click was on an anchor
  anchor = get_anchor(event.target)
  if !anchor
    return

  # Check if the clicked URL is for a Chec product URL, and get the components of it for the iframe if so
  urlParts = get_chec_url_parts(anchor)
  if urlParts
    anchor.removeAttribute 'target'
    anchor.setAttribute 'data-permalink', urlParts.permalink
    anchor.setAttribute 'data-prefill', urlParts.prefill
    anchor.setAttribute 'data-base-url', urlParts.baseUrl

    # Trigger iframe creation
    add_iframe(urlParts.permalink, urlParts.prefill, urlParts.baseUrl)
    event.preventDefault()
    return

  # Click target is either not an anchor, or is not a Chec product link. Do nothing.

# Register the click handler to the window
register_click_handler = () ->
  document.addEventListener('click', handle_click, false)

# Bind necessary event handlers when the document is loaded
((e, t) ->
  # Ensure the script wasn't loaded multiple times
  if e.checkoutLoaded
    return
  e.checkoutLoaded = true

  # Register click handler which kicks off the embed handler
  register_click_handler()

  e.addEventListener 'message', ((e) ->
    `var t`
    t = JSON.parse(e.data)
    if t.event == 'CheckoutClose'
      hide_iframe 'Chec-Embed'

    if t.event == 'CheckoutReady'
      show_iframe 'Chec-Embed'
      r = document.getElementById('preloader')
      r.style.display = 'none'
    return
  ), false
  return
) window, document
