const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
 
  if (document.cookie.includes("nagina_desert_camp")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= nagina_desert_camp; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener("load", executeCodes);

// OFFER POP UP

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.querySelector(".offer-modal").style.display = "block";
}

document.querySelector(".close-offer").addEventListener('click',()=>{
  document.querySelector(".offer-modal").style.display = "none";
});

