function menuNav(x) {
  x.classList.toggle("change"); //animation for menu
}

function toggleList() {
  let list = document.getElementById("nav-links");

  list.classList.toggle("show"); //shows links in nav bar
}

function togglewrap() {
  let middle = document.querySelector("#middle");
  // console.log(middle);
  if (middle.classList[0] !== "wrap") {
    middle.classList.toggle("wrap");
  } //wraps skills if image is too large
}

function toggleProjectItem(x) {
  //shows an image for each list item in projects
  // console.log(x);
  let imgNumber = x.value;
  // console.log(imgNumber);
  let project = document.querySelector(`#IMG${imgNumber}`);
  // console.log(project);
  project.classList.toggle("show");
}

function closeProject() {
  //animation for closing projects and hiding content
  let proj = document.querySelector("#projects");
  let projectList = document.querySelector("#projectList");
  if (proj.classList[0] === "open-project") {
    proj.classList.remove("open-project");
    proj.classList.add("close-project");
    projectList.classList.add("hide");
  } else {
    proj.classList.add("close-project");
    projectList.classList.add("hide");
  }
}

function openSkills(x) {
  // animation for opening skills and showing content
  let skillsTable = document.querySelector("#skillsTable");
  if (x.classList[0] === "close-skills") {
    x.classList.remove("close-skills");
    x.classList.add("open-skills");
    skillsTable.classList.add("show");
  } else {
    x.classList.add("open-skills");
    skillsTable.classList.add("show");
  }
}

function skills(x) {
  // calls two functions above
  closeProject();
  openSkills(x);
}

function closeSkills() {
  //Resets skills back to smaller tab.
  let skills = document.querySelector("#skills");
  let skillsTable = document.querySelector("#skillsTable");
  if (skills.classList[0] === "open-skills") {
    skills.classList.remove("open-skills");
    skillsTable.classList.remove("show");
    skills.classList.add("close-skills"); // Removes skills open animation adds a closing one.
  }
}

function openProject(x) {
  // Resets projects to full position and content back to visible.
  let projectList = document.querySelector("#projectList");
  if (x.classList[0] === "close-project") {
    x.classList.remove("close-project"); // Removing animation for closing project
    projectList.classList.remove("hide");
    x.classList.add("open-project");
  }
}

function projects(x) {
  closeSkills();
  openProject(x);
}
