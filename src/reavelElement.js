const reveal = (element) => {
  let windowheight = window.innerHeight;
  let revealtop = element.getBoundingClientReact().top;
  let reavealpoint = 150;
  if (revealtop < windowheight - reavealpoint) {
    element.classList.add('reveal');
  }
  else {
    element.classList.remove('reveal');
  }
}