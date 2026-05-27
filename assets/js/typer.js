(function () {
    var pre = document.getElementById('tw-pre');
    var mid = document.getElementById('tw-mid');
    var post = document.getElementById('tw-post');
    if (!pre || !mid || !post) return;

    var parts = [
        { el: pre,  text: "Hi, I'm " },
        { el: mid,  text: "Sahil"    },
        { el: post, text: "."        }
    ];

    var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        parts.forEach(function (p) { p.el.textContent = p.text; });
        return;
    }

    var partIdx = 0;
    var charIdx = 0;
    var delay = 75;

    function tick() {
        var p = parts[partIdx];
        if (!p) return;
        p.el.textContent += p.text.charAt(charIdx);
        charIdx++;
        if (charIdx >= p.text.length) {
            partIdx++;
            charIdx = 0;
        }
        if (partIdx < parts.length) setTimeout(tick, delay);
    }

    setTimeout(tick, 350);
})();
