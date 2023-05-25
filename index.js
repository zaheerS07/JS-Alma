let icone = document.getElementsByClassName("i_wht")[2];
let sidebar = document.getElementById("sidebar");
let cross = document.getElementById("CrossImg");
let nav = document.getElementsByTagName("nav")[0];
let circles = document.getElementsByClassName("min_circle");
let round = document.getElementsByClassName("circle");
let CrlImg = document.getElementsByClassName("circle_img");
let imgcont = document.getElementsByClassName("images_cont");
// console.log(imgcont);
console.log(CrlImg);
// console.log(nav);
// console.log(window);
// console.log(cross);
// console.log(icone);

icone.addEventListener("click", function () {
  sidebar.style.right = "0";
  sidebar.style.visibility = "visible";
});

cross.addEventListener("click", function () {
  sidebar.style.right = "-400px";
});

window.addEventListener("scroll", function () {
  // console.log("window is running",window.scrollY);
  if (this.window.scrollY > 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

for (var i = 0; i < circles.length; i++) {
  // console.log("loop is run", circles[i]);
  circles[i].addEventListener("mouseenter", function () {
    //   console.log("hello");
    remove();

    // console.log(this.getAttribute("data-id"));
    var id = this.getAttribute("data-id");
    // console.log("iddd", id);
    this.classList.add("ActiveCircle");
    var roundContent = document.getElementById(id);
    roundContent.classList.add("ActiveCrl2");
  });
}
function remove() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].classList.remove("ActiveCircle");
    round[i].classList.remove("ActiveCrl2");
    CrlImg[i].classList.remove("ActiveImg1");
    imgcont[i].classList.remove("ActiveImg2");
  }
}
// remove();

for (var i = 0; i < CrlImg.length; i++) {
  CrlImg[i].addEventListener("mouseenter", function () {
    remove();

    // console.log(this.getAttribute("data-id"));
    var dataId = this.getAttribute("data-id");
    // console.log("test", dataId);
    this.classList.add("ActiveImg1");
    var imgcontent = document.getElementById(dataId);
    imgcontent.classList.add("ActiveImg2");
  });
}

// ---------------------Alma-Section--------
let number = document.querySelectorAll(".num_box_parnt");
let content_bx = document.querySelectorAll(".content_main");
// console.log(number, content_bx);

number.forEach(function (item, index) {
  item.addEventListener("click", function () {
    removeClass();
    item.classList.add("activee");
    content_bx[index].classList.add("activee1");
  });
});
function removeClass() {
  number.forEach(function (ele) {
    ele.classList.remove("activee");
  });
  content_bx.forEach(function (e) {
    e.classList.remove("activee1");
  });
}
