function menuNav(x) {
  x.classList.toggle("change");
}

function toggleList() {
  let list = document.getElementById("nav-links");

  list.classList.toggle("show");
}

function togglewrap() {
  let middle = document.querySelector("#middle");
  console.log(middle);
  middle.classList.toggle("wrap");
}

function toggleProject(x) {
  // console.log(x);
  let imgNumber = x.value;
  // console.log(imgNumber);
  let project = document.querySelector(`#IMG${imgNumber}`);
  // console.log(project);
  project.classList.toggle("show");
  togglewrap();
}
