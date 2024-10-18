const menu_icon_img = document.getElementById("menu_icon_img");
const mobile_menu = document.querySelector(".mobile_menu");
console.log(menu_icon_img);

menu_icon_img.addEventListener("click", () => {
  if (mobile_menu.style.display === "flex") {
    mobile_menu.style.display = "none";
    menu_icon_img.src = "assts/menu_open.png"; // Change back to original icon
  } else {
    mobile_menu.style.display = "flex";
    menu_icon_img.src = "assts/menu_close.png"; // Corrected to menu_icon_img
  }
});
