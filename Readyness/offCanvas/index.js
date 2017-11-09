window.onload = () => {
  document.querySelector('#menu').onclick = () => {
    document.querySelector('#main').classList.toggle("moved");
    document.querySelector('#offcanvas').classList.toggle("moved");
  };
};
