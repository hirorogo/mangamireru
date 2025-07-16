// main.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const input = document.getElementById("site-search");

  button.addEventListener("click", () => {
    const keyword = input.value.trim();
    alert("検索されたタイトル: " + keyword);
  });
});
