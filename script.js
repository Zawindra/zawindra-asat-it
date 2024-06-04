function changeImage() {
    var menuImage = document.getElementById("menu");
    if (menuImage.src.match("/image/open.svg")) {
        menuImage.src = "/image/close.svg";
    } else if (menuImage.src.match("/image/close.svg")) {
        menuImage.src = "/image/open.svg";
    }
  }
  
  function myFunction() {
    let x = document.getElementById("hamburger-div");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

