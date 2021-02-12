import React, { useState, useEffect } from 'react';

/**
 * Recurse the clicked target to see if we can work out whether an anchor (or button) was clicked or not. Return the
 * anchor clicked if one is found, otherwise null.
 */
// @ts-ignore-next-line
const findElement = (element: any): Element | null => {
  // Is there a current element (or a provided parent)?
  if (!element) {
    return null;
  }
  // Is the current element something clickable?
  if (['a', 'button'].includes(element.tagName.toLowerCase())) {
    return element;
  }
  // Check if parent element is...
  return findElement(element.parentElement);
};

function Embed() {
  const [url, setUrl] = useState('');
  const [visible, setVisible] = useState(false);

  // Register callback on load to get CSS involved.
  useEffect((): void => {
    const stylesheetUrl = process.env.NODE_ENV === 'development'
      ? '/static/css/embed.css'
      : 'https://cdn.chec.io/v3/embed.css';

    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('type', 'text/css');
    stylesheet.setAttribute('href', stylesheetUrl);

    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  }, []);

  // Register click handler that will look for any anchors in the page clicked that contain
  // a "data-chec-embed-url" attribute, and if that is found then use it to open an embed modal
  useEffect(() => {
    const clickSpy = (e: Event) => {
      const anchor = findElement(e.target);

      // It wasn't an anchor that was clicked, do nothing.
      if (!anchor) {
        return;
      }

      // It was an anchor, check if it has the required data attribute
      const embedUrl = anchor.getAttribute('data-chec-embed-url');
      if (!embedUrl) {
        return;
      }

      // It has the required attribute, use it!
      setUrl(embedUrl);
      setVisible(true);

      document.getElementsByTagName('body')[0].classList.add('chec-embed--open');
    };

    window.addEventListener('click', clickSpy);
    return () => {
      window.removeEventListener('click', clickSpy);
    };
  }, []);

  // If the modal is open, then bind the escape key to close it. Remove the handler when closing it.
  useEffect(() => {
    if (!visible) {
      return;
    }

    const closeSpy = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
    };

    window.addEventListener('keyup', closeSpy);
    return () => {
      window.removeEventListener('keyup', closeSpy);
    };
  }, [visible]);

  /**
   * Close the modal, and remove the custom class from the body
   */
  const handleClose = () => {
    setVisible(false);
    document.getElementsByTagName('body')[0].classList.remove('chec-embed--open');
  }

  if (!visible || !url) {
    return null;
  }

  return (
    <div className="chec-embed">
      <div className="chec-embed__container">
        <iframe src={url} width="100%" height="100%" title="Buy now" className="chec-embed__frame">
          Your browser does not support frames, please visit <a href={url}>{url}</a> directly.
        </iframe>

        <button type="button" className="chec-embed__close" onClick={handleClose}>
          <svg className="chec-embed__close-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8285 5.17157L5.17164 10.8284" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5.17151 5.17157L10.8284 10.8284" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Close
        </button>
      </div>
    </div>
  );
}

export default Embed;
