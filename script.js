const list = document.querySelectorAll("li");
const sub = document.querySelector("button");
const container = document.querySelector("main");
const sec2 = document.querySelector(".section2");
const para1 = document.querySelector(".para1");

console.log(sub);
console.log(list);

list.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    list.forEach((bt) => {
      bt.classList.remove("clicked");
    });

    event.target.classList = "clicked";
    selected = event.target.textContent;
    console.log(selected);
  });
});
sub.addEventListener("click", (e) => {
  if (selected == "") {
    element.disabled = true;
  } else {
    container.style.display = "none";
    sec2.style.display = "block";
    para1.innerText = `You selected ${selected} out of 5`;
  }
});
