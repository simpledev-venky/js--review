const reviews = [
  {
    name: "sraa jones",
    job: "UX DESIGNER",
    img: "images/person4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem tenetur repellat, optio omnis, quisquam delectus alias, quo ea quis consequuntur sequi quia dolore voluptatem veritatis sed commodi voluptas! Quidem, consectetur. Unde dolores molestias facilis modi, autem impedit eius suscipit.",
  },
  {
    name: "bob",
    job: "WEB DEVELOPER",
    img: "images/person2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem tenetur repellat, optio omnis, quisquam delectus alias, quo ea quis consequuntur sequi quia dolore voluptatem veritatis sed commodi voluptas! Quidem, consectetur. Unde dolores molestias facilis modi, autem impedit eius suscipit.",
  },

  {
    name: "alina lopex",
    job: "FULL STACK DEVELOPER",
    img: "images/person1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem tenetur repellat, optio omnis, quisquam delectus alias, quo ea quis consequuntur sequi quia dolore voluptatem veritatis sed commodi voluptas! Quidem, consectetur. Unde dolores molestias facilis modi, autem impedit eius suscipit.",
  },
  {
    name: "peter parkar",
    job: "UI DESIGNER",
    img: "images/person3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem tenetur repellat, optio omnis, quisquam delectus alias, quo ea quis consequuntur sequi quia dolore voluptatem veritatis sed commodi voluptas! Quidem, consectetur. Unde dolores molestias facilis modi, autem impedit eius suscipit.",
  },
];
const name = document.getElementById("author");
const job = document.getElementById("job");
const desc = document.getElementById("desc");
const personImg = document.getElementById("person-img");
//    selecting buttons
const prevBtn = document.getElementById("prevbtn");
const nextBtn = document.getElementById("nextbtn");
const randomBtn = document.getElementById("randbtn");
console.log(name);
let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});
function showPerson(ci) {
  const item = reviews[ci];
  name.textContent = item.name;
  job.textContent = item.job;
  desc.textContent = item.text;
  personImg.src = item.img;
}
// nextBtn
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// generating random num to set current item
randomBtn.addEventListener("click", () => {
  let randNum = Math.floor(Math.random() * reviews.length);
  showPerson(randNum);
});
