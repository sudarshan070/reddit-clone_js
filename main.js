var input = document.querySelector(".input");

function getData(event) {
  if (event.keyCode == 13 && input.value.trim() != "") {
    fetch(`https://api.reddit.com/r/${input.value}`)
      .then((res) => res.json())
      .then((res) => viewData(res.data.children));
  }
}

function viewData(data) {
  console.log(data);
}

input.addEventListener("keyup", getData);
