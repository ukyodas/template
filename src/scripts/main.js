
    !function(e) {
            let t = document.documentElement;
            let n = e.getComputedStyle(t).getPropertyValue("--100vw");
            let d = () => t.style.setProperty("--100vw", `${e.innerWidth}px`);
            t.classList.add("js-on");
            if (!n.endsWith("px")) {
                d();
                e.addEventListener("resize", d);
            }
    }(window);
