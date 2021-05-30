// ==UserScript==
// @name         Twitter Improver
// @namespace    cocks
// @version      0.1
// @description  removes dumb replies from twitter
// @author       You
// @match        *twitter.com/*/status/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let sleep = ms => {
return new Promise(resolve => setTimeout(resolve, ms));
};
    runcoolscript();
})();

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

function sleep(milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
   }

function runcoolscript()
{
    let list = ["I'm gay", "Cocks taste good", "My IQ is lower than room temperature", "I'm racist", "I like attention", "I live in my moms basement", "I am a sad lonely piece of shit", "I'm cooming", "block me"]
    {
    var parent = document.querySelector('[aria-label="Timeline: Conversation"]');
    var nodes = document.getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")
    if (nodes == null) return;
    for (var node of nodes)
    {
    if (isDescendant(parent, node))
    {
        if (node.innerText.toLowerCase().includes("not real pain") || node.innerText.toLowerCase().includes("post real pain") || node.innerText.toLowerCase().includes("unfollowing") || node.innerText.toLowerCase().includes("not pain") || node.innerText.toLowerCase().includes("no pain") || node.innerText.toLowerCase().includes("ratio") || node.innerText.toLowerCase().includes("not a w"))
        {
            node.innerText = list[Math.floor(Math.random() * list.length)]
        }
    }
    }

    }
    sleep(2000).then(() => {
    runcoolscript();
})
}
