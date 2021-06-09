let icons = document.querySelectorAll(".icon");
let dropBox = document.querySelectorAll(".drop");

// Event Listeners
let iconTarget = {};
icons.forEach((icon) => {
  icon.addEventListener("dragstart", (event) => {
    iconTarget = event.target;
    console.log(iconTarget);
    console.log(`Drag Start`);
    event.target.className += " hold";
    setTimeout(() => {
      event.target.className = "invisible";
    }, 0);
  });
  icon.addEventListener("dragend", (event) => {
    console.log(`Drag End`);
    event.target.className = "icon";
  });
});
dropBox.forEach((mtBx) => {
  mtBx.addEventListener("dragover", (event) => {
    console.log(`dragover`);
    event.preventDefault();
  });
  mtBx.addEventListener("dragenter", (event) => {
    event.target.className += " hovered";
    console.log(`dragenter`);
  });
  mtBx.addEventListener("dragleave", (event) => {
    event.target.className = "drop";
    console.log(`dragleave`);
  });
  mtBx.addEventListener("drop", (event) => {
    event.target.className = "drop";
    event.target.append(iconTarget);
  });
});
