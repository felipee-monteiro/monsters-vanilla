const h1El = document.querySelector("h1");
const container = document.querySelector(".container");
const btn = container.querySelector("button");

const insertMonstersIntoDOM = (data) => {
  data.forEach(function(item) {
    const articleEl = document.createElement("article");
    const template = `
        <img src="https://robohash.org/${item.name}" alt="${ item.name }" />
        <div>
            <h2>${ item.name }</h2>
            <p>${ item.email }</p>
        </div>
    `;
    articleEl.setAttribute('class', 'monstros');
    articleEl.innerHTML = template;
    h1El.innerHTML = `${ data.length } Monstros`;
    h1El.insertAdjacentElement('afterend', articleEl);
  });
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()).then(insertMonstersIntoDOM);

btn.onclick = function(e) {
  e.stopPropagation();
  container.querySelectorAll('article').forEach(function(item) {
    container.removeChild(item);
    h1El.innerHTML = "0 Monstros";
  });
}