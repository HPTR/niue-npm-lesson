import "./style.scss";
import confetti from "canvas-confetti";

const confettiButton = document.querySelector('#confetti');
const image = document.querySelector('#dog-image');

const fireConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 180,
        angle: 270,
        origin: {
            x: -1,
            y: -0.5
          }
      });

      confetti({
        particleCount: 100,
        spread: 180,
        angle: 270,
        origin: {
            x: -0.5,
            y: -0.5
          }
      });

      confetti({
        particleCount: 100,
        spread: 180,
        angle: 270,
        origin: {
            x: 0,
            y: -0.5
          }
      });
      
      confetti({
        particleCount: 100,
        spread: 180,
        angle: 270,
        origin: {
            x: 0.5,
            y: -0.5
          }
      });
      
      confetti({
        particleCount: 100,
        spread: 180,
        angle: 270,
        origin: {
            x: 1,
            y: -0.5
          }
      });
      
};

confettiButton.addEventListener('click', fireConfetti);

//Color Thief

import ColorThief from "colorthief";
import { get } from "lodash";

const dogImg = document.getElementById("dog-image");
const colorThief = new ColorThief();
const body = document.querySelector("body");
//console.log(body);


const urlBox = document.getElementById('image-url');

const urlInputHandler = (event) => {
  dogImg.src = event.target.value

  const palette = colorThief.getPalette(dogImg, [3]);
  console.log('palette is ' + palette);

  // fireConfetti({ NEED TO CONVERT RBG TO HEX TO WORK
  //   colors: [`${rgb(palette[0], palette[1], palette[2])}`, `${rgb(palette[3], palette[4], palette[5])}`, `${rgb(palette[6], palette[7], palette[8])}`],
  // });

}


urlBox.addEventListener('input', urlInputHandler);

// IF IMAGE HAS LOADED GET THE COLOR
// ELSE SET AN EVENT LISTENER TO GET IT ONCE IT HAS LOADED
if (dogImg.complete) {
  const color = colorThief.getColor(dogImg);
  //console.log(color); // rgb
  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
} else {
  dogImg.addEventListener("load", () => {
    const color = colorThief.getColor(dogImg);
    //console.log(color);
    body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
  });
}

console.log('Loaded');