//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//alert
let alertContainer = document.getElementById("alertContainer");
const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertContainer.append(wrapper);
};
//inicia la accion de alerta
const alertTrigger = document.getElementById("alertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Mensaje enviado con éxito !!!", "success");
  });
}

//Para hacer que el navbar cambie de color onScroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $("nav").css({
          "background-color": "#212429",
          transition: "all ease-in-out .3s",
      });
  } else {
      $("nav").css({
          "background-color": "transparent",
          transition: "all ease-in-out .3s",
      });
  }
});