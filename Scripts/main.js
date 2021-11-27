$("document").ready(() => {
  $(".ham-burger").on("click", () => {
    $(".ham-burger").toggleClass("toggled");
    $(".navbar-ul").toggleClass("show-nav");
  })  
})