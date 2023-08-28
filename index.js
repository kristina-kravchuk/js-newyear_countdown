function christmasCountdown() {
    const christimasDate = new Date("December 25, 2023 00:00");
    const now = new Date();
    const diff = christimasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDays = 24 * 60 * 60 * 1000;

const displayDays = Math.floor(diff/msInDays);
document.querySelector(".days").textContent = displayDays;

const displayHour = Math.floor ((diff%msInDays)/msInHour);
document.querySelector(".hours").textContent = displayHour;

const displayMinute = Math.floor((diff%msInHour)/msInMinute);
document.querySelector(".minutes").textContent = displayMinute;

const displaySeconds = Math.floor ((diff%msInMinute)/msInSecond);
document.querySelector(".seconds").textContent = displaySeconds;

if(diff <= 0){
document.querySelector(".days").textContent = 0;
document.querySelector(".hours").textContent = 0;
document.querySelector(".minutes").textContent = 0;
document.querySelector(".seconds").textContent = 0;
clearInterval(timerId)
merryChristmas()
}
}

let timerId = setInterval(christmasCountdown, 1000);

function merryChristmas(){
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    heading.classList.add("red")
}
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})


particlesJS("particles-js", {
    particles: {
      number: { value: 400, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 8.33451405615796,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 5,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 40, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);


