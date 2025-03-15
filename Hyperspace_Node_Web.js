// ==UserScript==
// @name         Hyperspace Node Auto-Reconnect
// @match        https://node.hyper.space/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        const toggleButton = document.querySelector('button[role="switch"]');
        if (toggleButton && toggleButton.getAttribute('aria-checked') === 'false') {
            toggleButton.click();
            console.log('Node turned back on!');
        }
    }, 60000); // Every 1 minutes
})();
