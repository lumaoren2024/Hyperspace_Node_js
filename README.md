# Hyperspace Node js
怎么安装？

1、下载油猴子 https://chromewebstore.google.com/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/dhdgffkkebhmkfjojejmpbldmpobfkfo

2、加入代码：
![image](https://github.com/user-attachments/assets/8e3c26fd-7df2-49dd-8bc1-ef8c02315acc)

```js
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
```

3、打开https://node.hyper.space/ 开始挂机
