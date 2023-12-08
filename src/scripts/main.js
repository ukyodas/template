import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


//kvタイムラインアニメーション

gsap.set('.js-split-l', {autoAlpha: 0,y: '1em', rotate: 20,});
gsap.set('.kv_img', {autoAlpha: 0,y: '30', scale: 0,});
gsap.set('.js-circle', {autoAlpha: 0,y: '30',}); 
gsap.set('.header_text', {autoAlpha: 0,y: '1em',});
gsap.set('.header_darkmode', {autoAlpha: 0,y: '1em',});

var tl2 = gsap.timeline()
tl2.to('.js-split-l ', 2.5, {
  rotate: 0, y:0, autoAlpha: 1, ease:"power4.inOut", stagger: 0.02,},
  0,);

tl2.to('.kv_img ', 2.5, {
  y:0, autoAlpha: 1, scale: 1, ease:"power4.inOut",},
  0,);

tl2.to('.js-circle ', 2.5, {
  y:0, autoAlpha: 1,ease:"power4.inOut",},
  0,);

tl2.to('.header_text ', 2.5, {
  y:0, autoAlpha: 1,ease:"power4.inOut",},
  1,);


//ループアニメーション

gsap.to('.js-circle-rotate', 100,{
  rotation: 1000,
  repeat: -1,
  ease: "power0.out",
  },
);



//テキストアニメーション


gsap.set('.textSlide-in', {autoAlpha: 0, y: '1em',}); 

const textSlidein = document.getElementsByClassName('textSlide-in');

for (let i = 0; i < textSlidein.length; i++) {
  gsap.to(textSlidein[i], {
    y:0,
    autoAlpha: 1,
    duration: 1.6,
    ease: "power4.out",
      scrollTrigger: {
        trigger: textSlidein[i],
        start: 'top 70%',
        //markers: true,
       }
  }); 
}



//スクロールで線が左から右に

gsap.set('.borderSlide-in', {scaleX:0, transformOrigin: "left",}); 

const borderSlidein = document.getElementsByClassName('borderSlide-in');

for (let i = 0; i < borderSlidein.length; i++) {
  gsap.to(borderSlidein[i], {
    scaleX:1,
    ease: "power4.out",
    duration: 1.4,
      scrollTrigger: {
        trigger: borderSlidein[i],
        start: 'top 70%',
        //markers: true,
       }
  }); 
}


//スクロールでfadeIn

gsap.set('.fadeIn', {autoAlpha: 0,}); 

const fadeIn = document.getElementsByClassName('fadeIn');

for (let i = 0; i < fadeIn.length; i++) {
  gsap.to(fadeIn[i], {
    autoAlpha: 1,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: fadeIn[i],
        start: 'top 70%',
        //markers: true,
       }
  }); 
}


//スクロールでfadeIn-up

gsap.set('.fadeIn-up', {autoAlpha: 0, y:30}); 

const fadeInup = document.getElementsByClassName('fadeIn-up');

for (let i = 0; i < fadeInup.length; i++) {
  gsap.to(fadeInup[i], {
    y: 0,
    autoAlpha: 1,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: fadeInup[i],
        start: 'top 70%',
        //markers: true,
       }
  }); 
}



//スクロールでfadeIn-down

gsap.set('.fadeIn-down', {autoAlpha: 0, y:-30}); 

const fadeIndown = document.getElementsByClassName('fadeIn-down');

for (let i = 0; i < fadeIndown.length; i++) {
  gsap.to(fadeIndown[i], {
    y: 0,
    autoAlpha: 1,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: fadeIndown[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}



//スクロールでfadeIn-left

gsap.set('.fadeIn-left', {autoAlpha: 0, x:30}); 

const fadeInleft = document.getElementsByClassName('fadeIn-left');

for (let i = 0; i < fadeInleft.length; i++) {
  gsap.to(fadeInleft[i], {
    x: 0,
    autoAlpha: 1,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: fadeInleft[i],
        start: 'top 70%',
        //markers: true,
       }
  }); 
}


//スクロールでfadeIn-right

gsap.set('.fadeIn-right', {autoAlpha: 0, x:-30}); 

const fadeInright = document.getElementsByClassName('fadeIn-right');

for (let i = 0; i < fadeInright.length; i++) {
  gsap.to(fadeInright[i], {
    x: 0,
    autoAlpha: 1,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: fadeInright[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}



//スクロールでslideIn-up

gsap.set('.slideIn-up', {y: '0',});

const slideInup = document.getElementsByClassName('slideIn-up');

for (let i = 0; i < slideInup.length; i++) {
  gsap.to(slideInup[i], {
    y: '-100%',
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: slideInup[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでslideIn-down

gsap.set('.slideIn-down', {y: '0',});

const slideIndown = document.getElementsByClassName('slideIn-down');

for (let i = 0; i < slideIndown.length; i++) {
  gsap.to(slideIndown[i], {
    y: '100%',
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: slideIndown[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでslideIn-left

gsap.set('.slideIn-left', {x: '0',});

const slideInleft = document.getElementsByClassName('slideIn-left');

for (let i = 0; i < slideInleft.length; i++) {
  gsap.to(slideInleft[i], {
    x: '100%',
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: slideInleft[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでslideIn-right

gsap.set('.slideIn-right', {x: '0',});

const slideInright = document.getElementsByClassName('slideIn-right');

for (let i = 0; i < slideInright.length; i++) {
  gsap.to(slideInright[i], {
    x: '-100%',
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: slideInright[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでzoomIn-up

gsap.set('.zoomIn-up', {autoAlpha: 0, scale: 1,});

const zoomInup = document.getElementsByClassName('zoomIn-up');

for (let i = 0; i < zoomInup.length; i++) {
  gsap.to(zoomInup[i], {
    autoAlpha: 1,
    scale: 1.2,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: zoomInup[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでzoomIn-out

gsap.set('.zoomIn-out', {autoAlpha: 0, scale: 1.2,});

const zoomInout = document.getElementsByClassName('zoomIn-out');

for (let i = 0; i < zoomInout.length; i++) {
  gsap.to(zoomInout[i], {
    autoAlpha: 1,
    scale: 1,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: zoomInout[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでslideIn-up-zoom-up

gsap.set('.slideIn-up-zoom-up', {y: '0',} );
gsap.set('.zoom-upimg', {scale: 1,} );

const slideInupzoomup = document.getElementsByClassName('slideIn-up-zoom-up','zoom-upimg');

for (let i = 0; i < slideInupzoomup.length; i++) {
  gsap.to(slideInupzoomup[i], {
    y: '-100%',
    scale: 1.3,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: slideInupzoomup[i],
        start: 'top 70%',
        //markers: true,
       }
  });
}


//スクロールでspriteIn-up


gsap.set('.spriteIn-up', {y: '4.5em',});

const spriteInup = document.getElementsByClassName('spriteIn-up');

for (let i = 0; i < spriteInup.length; i++) {
  gsap.to(spriteInup[i], {
    y: 0,
    ease: "power4.out",
    duration: 2.2,
      scrollTrigger: {
        trigger: spriteInup[i],
        start: 'top 70%',
        //markers: true,
       }
  }); 
}


//スクロールでimg-zoomup

gsap.set('.js-img-zoomup', {scale: 1,});

gsap.to('.js-img-zoomup', {
  scale: 1.4,
  ease: "power0.out",
  scrollTrigger: {
    trigger: '.js-img-zoomup-trigger',//アニメーションが始まるトリガーとなる要素
    start: 'top 100%', //アニメーションが始まる位置
    end: 'top -200%', //アニメーションが終わる位置
    scrub: true, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
  }
});



//スクロールでテキストスライド

gsap.to('.js-text-slide-right', {
  x: 800,
  ease: "power0.out",
  scrollTrigger: {
    trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
    start: 'top 100%', //アニメーションが始まる位置
    end: 'top -100%', //アニメーションが終わる位置
    scrub: 1, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
  }
});

gsap.to('.js-text-slide-left', {
  x: -800,
  ease: "power0.out",
  scrollTrigger: {
    trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
    start: 'top 100%', //アニメーションが始まる位置
    end: 'top -100%', //アニメーションが終わる位置
    scrub: 1, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
  }
});


// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  effects: true,
  preventDefault: true
 });
