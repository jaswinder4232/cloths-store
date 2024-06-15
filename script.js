// document.addEventListener('DOMContentLoaded', function () {
//     const checkbox = document.getElementById('check');
//     const menu = document.querySelector('.menuee');

//     checkbox.addEventListener('change', function () {
//       if (checkbox.checked) {
//         menu.style.right = '0';
//       } else {
//         menu.style.right = '-100%';
//       }
//     });
//   });
function scrollToTop() {
    setTimeout(function () {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
    }, 0); // Delay of 0 milliseconds
}

// Call the function when the page reloads
window.addEventListener('load', scrollToTop);

// Call the function before the page unloads
window.addEventListener('beforeunload', scrollToTop);

function myFunction(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("myMenu");
    if (menu.style.width === "180px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "180px";
    }
}

function closeNav() {
    document.getElementById("myMenu").style.width = "0";
    var container = document.querySelector('.containere');
    if (container.classList.contains('change')) {
        container.classList.remove('change');
    }
}



function checkWidthAndInitGSAP() {
    if (window.innerWidth >= 1025) {
        initGSAP();
    }
}
checkWidthAndInitGSAP();

window.addEventListener('resize', function () {
    checkWidthAndInitGSAP();
});
function initGSAP() {
    // Create a timeline
    var tl = gsap.timeline();
    tl.from(".Welcome #wlcc", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
    })
    tl.to(".Welcome", {
        // y: 1000,
        duration: 0.8,
        stagger: 0.2,
        scale: 77,
        autoAlpha: -0,
        display: "none",
        stagger: 0.2,
     


    })


    // Add animations to the timeline
    tl.from(".navvbar img,#nav-manuee,.faqq", {
        y: -30,
        opacity: 0,
        duration: 0.1,
        stagger: 0.10,
    });
    tl.from(".left-side h1,#ap,#buuton", {
        y: 30,
        opacity: 0,
        duration: 0.2,
        stagger: 0.2

    }, "<0.2");

    tl.from(".right-side .cloths", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
       


    }, "<0.1");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".brand-names .wind,.three-dot,.automation", {

        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: ".secnd-section",
            scroller: "body",
            start: "top 75%",
            end: "top 65%",
            scrub: 2,

        }
    })
    gsap.from(".section3 .shorts-img", {
        x: "55%",

        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: "top 70%",
            end: "top 55%",
            scrub: 2,

        }
    })
    gsap.from(".section3 .imgagg", {
        x: "-55%",

        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: "top 70%",
            end: "top 65%",
            scrub: 2,

        }
    })
    gsap.from(".third-line .thrdl-image1", {
        x: "60%",

        scrollTrigger: {
            trigger: ".third-line",
            scroller: "body",
            start: "top 70%",
            end: "top 65%",
            scrub: 2,

        }
    })
    gsap.from(".third-line .thrdl-image3", {
        x: "-60%",

        scrollTrigger: {
            trigger: ".third-line",
            scroller: "body",
            start: "top 70%",
            end: "top 65%",
            scrub: 2,

        }
    })
    gsap.from(".allbrand-name-logo #ssame-to-same", {
        x: "-70%",

        stagger: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".allbrand-name-logo",
            scroller: "body",
            start: "top 80%",
            end: "top 80%",
            scrub: 2,

        }
    })
    gsap.from(".section4 .abouutt", {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: ".section4",
            scroller: "body",
            start: "top 80%",
            end: "top 80%",
            scrub: 2,

        }
    })
    gsap.from(".section4 #s4-f-line1", {
        x: "-70%",
        autoAlpha: 0,
        stagger: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".section4",
            scroller: "body",
            start: "top 70%",
            end: "top 60%",
            scrub: 2,

        }
    })
    gsap.from(".s4-secnd #s4-f-line2", {
        y: "20%",
        autoAlpha: 0,
        stagger: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: ".s4-secnd",
            scroller: "body",
            start: "top 70%",
            end: "top 60%",
            scrub: 2,

        }
    })
    gsap.from(".tandc #copyy", {
        y: "20%",
        autoAlpha: 0,
        stagger: 0.3,
        opacity: 0,
        duration: 0.4,
        scale: 0,
        scrollTrigger: {
            trigger: ".tandc",
            scroller: "body",
            start: "top 60%",
            end: "top 60%",
            scrub: 2,

        }
    })
    gsap.from("#footerr #jasiilogo,li", {
        y: "20%",
        autoAlpha: 0,
        stagger: 0.3,
        opacity: 0,
        duration: 1.4,
        scale: 0,
        scrollTrigger: {
            trigger: ".right-footer",
            scroller: "body",
            start: "top 80%",
            end: "top 78%",
            scrub: 2,

        }
    })

}

// Function to scroll to the top of the page on reload


// anothertimeline
// function checkWidthAndmyfun() {
//     if (window.innerWidth >= 1024) {
//         myfun();
//     }
// }
// checkWidthAndmyfun();

// window.addEventListener('resize', function () {
//     checkWidthAndmyfun();
// });
// function myfun() {
//     // Create a timeline
//     var gg = gsap.timeline();


// }
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

// Set the current year in the footer
document.getElementById('year').textContent = getCurrentYear();
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

// Set the current year in the footer
document.getElementById('year1').textContent = getCurrentYear();
