"use strict";

/*
let numberOfNews;

function startProject() {
  numberOfNews = +prompt("How many news have you seen?");

  while (numberOfNews == null || numberOfNews == "" || isNaN(numberOfNews)) {
    numberOfNews = +prompt("How many news have you seen?");
  }
}
startProject();

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNews() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("The last news you've seen?"),
        b = +prompt("What score would you put to that news?");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalNewsDB.news[a] = b;
      console.log("Tayyor");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberNews();


function personalLevel() {
  if (personalNewsDB.count < 10) {
    console.log("Juda oz yangilik ko'rilibdi.");
  } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
    console.log("Siz klassik tomoshabinsiz!");
  } else if (personalNewsDB.count >= 30) {
    console.log("Siz yangilik ishqibozisiz!");
  } else {
    console.log("Xatolik yuz berdi!");
  }
}

personalLevel();

function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalNewsDB);
  }
}

showMyDB(personalNewsDB.privat);

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalNewsDB.genres[i - 1] = prompt(`Sevimli janringiz nomer ${i}`);
  }
  
}
writeYourGenres(); */

// console.log([] + 1 + 3);

// console.log('Olma' < 'yulbars');

// console.log(4 && 0 && 3 && null && undefined);

// console.log(0 || null || 3 || 4 || undefined);

// console.log(+"asdjkpo");

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a == b);

// const greeting = document.querySelector('#greeting'),
//   button = document.querySelectorAll('button');

// button.forEach((btn) => {
//   btn.style.cssText = 'fontSize: 20px; margin: 30px';
//   btn.style.border = 'none';
//   btn.style.padding = '20px';

// });

// for (let i = 0; i < button.length; i++) {
//   button[i].style.cssText = 'background: lightBlue; border: 2px solid green;';
// }

// console.log(button);

// console.log(greeting);

// const wrapper = document.querySelector(".wrapper");

// const div = document.createElement("div");

// div.classList.add("box");
// div.style.background = "blue";
// wrapper.append(div);
// wrapper.prepend(div);

const btn = document.querySelector("#btn");

const button = document.querySelector(".button");

let index = 0;
const callFunc = () => {
  console.log("Hello World");
  index++;
  console.log(index);
  if (index == 3) {
    btn.removeEventListener("click", callFunc);
  }
};

btn.addEventListener("click", callFunc);

button.addEventListener("click", (event) => {
  console.log(event);
});
