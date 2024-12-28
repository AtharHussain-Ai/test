const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//loader




const btnHamburguer = document.querySelector(".btn-hamburguer")
const menuBar = document.querySelector('.menu-bar')

window.addEventListener("scroll", (event) => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    const appearMoment = 0.05977165883143049;
    if (scrollPercentage >= appearMoment) {
        btnHamburguer.style.opacity = "1";
        btnHamburguer.style.scale = "1";
    }
    else {
        btnHamburguer.style.opacity = 0;
        btnHamburguer.style.scale = 0;
    }

})

const menuIcon = document.querySelector('.menu-icon');
const html = document.querySelector('html');

btnHamburguer.addEventListener("click", (event) => {
    menuBar.classList.toggle("menu-bar-right")
    menuIcon.classList.toggle('change')
    html.classList.toggle("stop-scrolling")
});

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';



magnets = document.querySelectorAll(".magnetic")

magnets.forEach((magnet) => {
    if(window.innerWidth > 540) {
        magnet.addEventListener("mousemove", function(e) {
            const position = magnet.getBoundingClientRect();

            const x = e.pageX - window.scrollX - position.left-position.width/2
            const y = e.pageY - window.scrollY - position.top-position.height/2;

            magnet.style.transform = "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";
            magnet.style.transition = "all 0s linear";
            magnet.classList.remove("shake")
            
        })
        magnet.addEventListener("mouseleave", function(e) {
            magnet.style.transition = "all 0.2s cubic-bezier(0, 0, 0.72, 0.21";
            magnet.style.transform = "translate(0px, 0px)";

        })
    }
});



// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}

















//loader
function loader() {
  document.body.classList.add("no-scroll"); // Disable scrolling and fix position

  const loafer = document.querySelector('.loafer');
  const progressed = document.querySelector('.progressed');
  let count = { value: 0 };

  gsap.to(count, {
    value: 100,
    duration: 5,
    ease: "power4.out",
    onUpdate: () => {
      loafer.textContent = `${Math.floor(count.value)}%`;
      progressed.style.width = `calc(${count.value}% - 5%)`;
    },
    onComplete: () => {
      gsap.to('.hyperloader', {
        y: '-100%',
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
        onComplete: () => {
          document.querySelector('.hyperloader').style.display = "none";
          document.body.classList.remove("no-scroll"); // Re-enable scrolling
          homescreen(); // Call homescreen function after loader animation completes
        }
      });
    }
  });
}



// Homescreen animation function

function homescreen() {
  // Make homescreen items visible
  gsap.set(".nav-links li, .branding, .note-home h3, .resume-btn, .glass-text h1", { visibility: "visible" });

  // GSAP animation for nav items
  gsap.from(".nav-links li", {
    duration: 0.4,
    opacity: 0,
    x: -15,
    stagger: 0.1,
    ease: "power1.out"
  });
  

  // Alternating scroll-triggered animation for #denis element
  gsap.to("#denis h1", {
    x: "-50%", // Moves halfway to allow seamless looping with duplicate text
    duration: 20, // Adjust the duration for the desired speed
    ease: "linear",
    repeat: -1, // Makes the animation repeat indefinitely
});

gsap.to("#denis", {
    scrollTrigger: {
        trigger: "#back",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play reverse play reverse",
    },
    x: () => window.innerWidth - document.querySelector("#denis").offsetWidth,
    duration: 10,
    ease: "power1.inOut",
});

  // Branding animation
  gsap.from(".branding", {
    duration: 0.9,
    opacity: 0,
    scale: 0.7,
    ease: "power1.out",
    delay: 0.4
  });

  // GSAP reveal animation for note-home, resume-btn, and glass-text
  gsap.timeline()
    .from(".note-home h3", {
      opacity: 0,
      y: 50, 
      duration: 1,
      ease: "power2.out"
    })
    .from(".resume-btn", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(".glass-text h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
}

// Start loader function
loader();

// Other functions remain unchanged
function page2() {
    gsap.registerPlugin(ScrollTrigger);

    // Define common ScrollTrigger properties
    const scrollTriggerOptions = {
        trigger: "#page2",
        toggleActions: "play none none reverse",
        scrub: 0.5,  // Smooth scrolling
    };

    // Text Animation
    gsap.to(".stagger-text", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,  // Reduced stagger for smoother animation
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 50%", 
            end: "bottom 90%",
        }
    });

    // Line Animation
    gsap.to(".linezer", {
        duration: 1,
        width: "100%",
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 90%", 
            end: "bottom 10%",
        }
    });
    gsap.to("#page2 .image-containersss img", {
      yPercent: -10,           // Vertical movement for parallax effect
      ease: "power2.out",      // Smooth easing for natural motion
      duration: 2,             // Gradual start and end for a polished look
      scrollTrigger: {
        trigger: "#page2 .image-containersss",
        start: "top 85%",      // Trigger the animation just before the element reaches the viewport
        end: "bottom center",  // End effect just before the element leaves the viewport
        scrub: 1.5,            // Smooth response to scrolling with slight lag for fluidity
        markers: false         // Disable markers for a cleaner experience (enable for debugging)
      }
    });
    
    
    
}




// Function for Page 6 text animation
function page6() {
  // Split text into span elements for each letter in #page6 > h1
  let clutter = "";
  const heading = document.querySelector("#page6 > h1");

  if (heading) {
    heading.textContent.split("").forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
    });
    heading.innerHTML = clutter; // Replace content of h1 with the spans

    // GSAP animation for text in #page6
    gsap.to("#page6 > h1 > span", {
      scrollTrigger: {
        trigger: "#page6",   // Trigger the animation when #page6 is in view
        start: "top 100%",     // Animation starts when the top of page6 is 80% into the viewport
        end: "bottom 50%",    // Animation ends when the bottom of page6 goes off-screen
        scrub: 0.5,           // Smooth scroll-triggered animation       // Debug markers for ScrollTrigger
      },
      stagger: 0.05,         // Delay between each letter animation
      opacity: 1,            // Make text fully visible
      color: "#000",         // Change text color to white
      ease: "power2.out",    // Smooth easing for the animation
      onStart: () => console.log('Page 6 text animation started'),
    });
  } else {
    console.error("Page 6 heading not found!");
  }
}

// Call page5 after page3
document.addEventListener("DOMContentLoaded", function() {
  page2();  
  page6();  
  observeFooterAnimation();
});



function footerEffect() {
  // Define the animation for the footer
  var tlfooter = gsap.timeline();

  // Animation for "rejoice" word at the bottom of section 9
  tlfooter.from("#section-foot h1 span", {
    y: -200,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  });

  return tlfooter; // Return the timeline
}

// Observer for triggering footer animations
function observeFooterAnimation() {
  var footer = document.getElementById("section9");
  var tl = null;

  // Create an IntersectionObserver
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // If footer is visible, trigger the animation
          if (!tl) {
            tl = footerEffect();
          } else {
            tl.restart();
          }
        } else {
          // If footer is not visible, reset the animation
          if (tl) {
            tl.pause(0); // Reset to the start
          }
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the footer is visible
    }
  );

  observer.observe(footer); // Observe the footer
}







































