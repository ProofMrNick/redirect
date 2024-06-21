
var loader = document.querySelectorAll(".loader");
var loaderElems = document.querySelectorAll(".loader-elem");
var loadingInterval = 
setInterval(() => {
  for (let i = 0; i < loaderElems.length; i++) {
    loaderElems[i].classList.remove("loader-elem-animate");
  }

  setTimeout(() => {
    for (let i = 0; i < loaderElems.length; i++) {
      loaderElems[i].classList.add("loader-elem-animate");
    }
  }, 20);
}, 4000);


document.location.href = "https://api.render.com/deploy/srv-cmdbjug21fec73d20gp0?key=kLxqWi3Cats";
setInterval(() => {
  document.location.href = "https://const-bvhf.onrender.com";
}, 20);