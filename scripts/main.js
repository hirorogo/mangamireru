addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector('#search{');
  const kensaku = document.querySelector("#search_text");
  
  search.addEventListener('click', () => {
    alert(`${kensaku.value}が入力されました`);
  });
});