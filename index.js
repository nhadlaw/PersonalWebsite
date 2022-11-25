const increased_athlete_photo_width = "91%";
const reg_athlete_photo_width = "90%";

const info_box_minimized_size = "5%";
const increased_background_box_width = "60%";
const increased_background_box_height = "50%";
const reg_background_box_width = "30%";
const reg_background_box_height = "20%";

const increased_current_box_width = "65%";
const increased_current_box_height = "40%";
const reg_current_box_width = "30%";
const reg_current_box_height = "40%";

const increased_plans_box_width = "95%";
const increased_plans_box_height = "17%";
const reg_plans_box_width = "30%";
const reg_plans_box_height = "18%";
const background_box_text = 
`<div id="rotate-background-box-text">
              <text id="background-box-text">
               
              </text>
</div>`

// Wrap every letter in a span
// Wrap every letter in a span
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });
//KAYAK EVENT LISTENERS
var athlete_kayak = document.getElementById("athlete-page-kayak");

athlete_kayak.addEventListener("mouseover", 
    function() {
        athlete_kayak.style.opacity = "1";
        athlete_kayak.style.width = increased_athlete_photo_width;
    }
)
athlete_kayak.addEventListener("mouseout", 
    function() {
        athlete_kayak.style.opacity = ".2";
        athlete_kayak.style.width = reg_athlete_photo_width;
    }
)

//running EVENT LISTENERS
var athlete_running = document.getElementById("athlete-page-running");

athlete_running.addEventListener("mouseover", 
    function() {
        athlete_running.style.opacity = "1";
        athlete_running.style.width = increased_athlete_photo_width;
    }
)
athlete_running.addEventListener("mouseout", 
    function() {
        athlete_running.style.opacity = ".2";
        athlete_running.style.width = reg_athlete_photo_width;
    }
)
//dive EVENT LISTENERS
var athlete_dive = document.getElementById("athlete-page-dive");

athlete_dive.addEventListener("mouseover", 
    function() {
        athlete_dive.style.opacity = "1";
        athlete_dive.style.width = increased_athlete_photo_width;
    }
)
athlete_dive.addEventListener("mouseout", 
    function() {
        athlete_dive.style.opacity = ".2";
        athlete_dive.style.width = reg_athlete_photo_width;
    }
)

//upside_down EVENT LISTENERS
var athlete_upside_down = document.getElementById("athlete-page-upside-down");

athlete_upside_down.addEventListener("mouseover", 
    function() {
        athlete_upside_down.style.transform = 'rotate(10deg)'
    }
)
athlete_upside_down.addEventListener("mouseout", 
    function() {
        athlete_upside_down.style.transform = 'rotate(-10deg)'
    }
)

//adding background-box event listener
var background_box = document.getElementById("background-box");
var current_box = document.getElementById("current-box");
var plans_box = document.getElementById("plans-box");

background_box.addEventListener("mouseover", 
    function() {
        background_box.style.width = increased_background_box_width;
        background_box.style.height = increased_background_box_height;
        //background_box.innerHTML = background_box_text;
        current_box.style.height = info_box_minimized_size;
        plans_box.style.height = info_box_minimized_size;
        current_box.style.width = increased_background_box_width;
        plans_box.style.width = increased_background_box_width;

    }
)
background_box.addEventListener("mouseout", 
    function() {
        background_box.style.width = reg_background_box_width;
        background_box.style.height = reg_background_box_height;
        //background_box.innerHTML = "";
        current_box.style.height = reg_current_box_height;
        plans_box.style.height = reg_plans_box_height;
        current_box.style.width = reg_current_box_width;
        plans_box.style.width = reg_plans_box_width;
    }
)

//adding current-box event listener

current_box.addEventListener("mouseover", 
    function() {
        current_box.style.width = increased_current_box_width;
        current_box.style.height = increased_current_box_height;
        plans_box.style.height = info_box_minimized_size;
        plans_box.style.width = increased_current_box_width;
    }
)
current_box.addEventListener("mouseout", 
    function() {
        current_box.style.width = reg_current_box_width;
        current_box.style.height = reg_current_box_height;
        plans_box.style.height = reg_plans_box_height;
        plans_box.style.width = reg_plans_box_width;
    }
)
//adding current-box event listener

plans_box.addEventListener("mouseover", 
    function() {
        plans_box.style.width = increased_plans_box_width;
        plans_box.style.height = increased_plans_box_height;
       
    }
)
plans_box.addEventListener("mouseout", 
    function() {
        plans_box.style.width = reg_plans_box_width;
        plans_box.style.height = reg_plans_box_height;
    }
)