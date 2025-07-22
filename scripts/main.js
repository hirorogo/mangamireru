addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector('#search');
  const kensaku = document.querySelector("#search_text");

  search.addEventListener('click', async () => {
    const searchResponse = await fetch("list-books", {
      method: "GET",
    });

    if (searchResponse.ok) {
      const searchResult = await searchResponse.json();
      alert(`Debug: ${JSON.stringify(searchResult)}`)
    }else {
      alert(`検索においてエラーが発生しました。(${searchResponse.statusText})`)
    }
  });
});