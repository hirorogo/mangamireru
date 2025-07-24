addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector('#search');
  const kensaku = document.querySelector("#search_text");
  const resultList = document.querySelector("#result_list");

  search.addEventListener('click', async () => {
    const searchResponse = await fetch("list-books", {
      method: "GET",
    });

    if (searchResponse.ok) {
      const searchResult = await searchResponse.json();
      console.table(searchResult);
      while (resultList.firstChild) resultList.firstChild.remove();

      for (const book of searchResult) {
        const bookEl = document.createElement("li");

        bookEl.textContent = JSON.stringify(book);

        resultList.appendChild(bookEl)
      }
    }else {
      alert(`検索においてエラーが発生しました。(${searchResponse.statusText})`)
    }
  });
});

