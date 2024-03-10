let index;

document.getElementById("primarySearch").addEventListener("input", (event) => {
  if (index) {
    console.log(event.target.value);
    console.log(index.search(event.target.value, {}));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  index = elasticlunr.Index.load(window.searchIndex);
});
