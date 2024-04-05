gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger function to rotate the section hero icon
;(function() {
    var e, t, o, n;
    e = "scroll",
    t = "optimizedScroll",
    o = o || window,
    n = !1,
    o.addEventListener(e, function() {
        n || (n = !0,
        requestAnimationFrame(function() {
            o.dispatchEvent(new CustomEvent(t)),
            n = !1
        }))
    })
})();


window.addEventListener("optimizedScroll", function() {
    var e;
    document.querySelectorAll(".rotate").forEach(function(e) {
        e.style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)"
    });
});