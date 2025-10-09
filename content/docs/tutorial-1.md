---
title: Intro to Git
description: Basic intro
---

# HTML: HyperText Markup Language

HTML (Hypertext Markup Languange) merupakan struktur dari website untuk menampilkan konten.

Untuk inisialisasi HTML vanilla, kalian dapat:

1. Install live server extension
1. Membuat file `.html` di vscode
1. inisialisasi struktur dengan _!_ ,maka akan membuat struktur dasar HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

3. Di dalam body, kalian bisa menambahkan elemen yang akan ditampilkan di website
4. Selamat kalian telah membuat website pertama!

---

# CSS: Cascading Style Sheets

Bahasa styling yang digunakan untuk mendefinisikan tampilan pada dokumen yang telah ditulis dengan format HTML.

**A. Layouting**  
Layout menjadi suatu hal yang penting di CSS, untuk dapat _Arrange_ video seperti di youtube, kita perlu memahami konsep grid yang mengolah konten menjadi tabular dengan mendefinisikan kolom dan baris-nya.

**1. Grid**  
Grid biasanya digunakan

```html
<div class="wrapper">
  <header class="main-head">The header</header>
  <nav class="main-nav">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="content">
    <h1>Main article area</h1>
    <p>
      In this layout, we display the areas in source order for any screen less
      that 500 pixels wide. We go to a two column layout, and then to a three
      column layout by redefining the grid, and the placement of items on the
      grid.
    </p>
  </article>
  <aside class="side">Sidebar</aside>
  <div class="ad">Advertising</div>
  <footer class="main-footer">The footer</footer>
</div>
```

```css
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
}
.main-nav {
  grid-area: nav;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}

.wrapper {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}

@media (width >= 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}

@media (width >= 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: column;
  }
}
```

**2. Flex**  
Berbeda dari grid yang memiliki baris dan kolom, sifat dari flex itu satu arah/dimensi yaitu baris atau kolom saja.

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

- Flex Col:

```css
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 1000px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: col;
}
```

- Flex Row:

```css
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 1000px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row;
}
```

Kelebihan yang dimiliki flex adalah bisa melakukan adjustment secara dinamis tanpa perlu mendefinisikan ulang sesuai breakpointnya, dapat menggunakan Flex Wrap

```css
flex-wrap: wrap;
```

Ketika telah menyentuh widh yang tidak sesuai dengan elemen dalam kontainer, maka secara dinamis akan berubah dari row ke col dan sebaliknya.

---

**B. CSS Responsiveness**

Sebagai developer yang baik, kalian harus memikirkan supaya aplikasi yang kalian buat dapat digunakan di segala device. CSS menerapkan breakpoint yang berguna untuk mengatur design dari website sesuai dengan device yang dinamakan media queries.

**Kapan kita harus menentukan untuk menetapkan media queries atau tidak?**

Honorable Mention Media Queries:

```css
@media (hover: hover) {
  /* ... */
}

@media screen, print {
  /* … */
}

@media print and (orientation: portrait) {
  /* … */
}
```

Media Queries paling sering digunakan untuk menentukan breakpoint dari width dan height yang terdefinisi

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= width <= 50em) {
  /* … */
}

@media (50em >= width >= 30em) {
  /* … */
}

/* Mobile */
@media screen and (min-width: 480px) {
  /* … */
}

/* Tablet */
@media screen and (min-width: 768px) {
  /* … */
}

/* Desktop */
@media screen and (min-width: 992px) {
  /* … */
}
```

Breakpoint untuk ketiga device biasa dijadikan standar untuk membuat tampilan website, developer melakukan responsive adjustment dengan ketiga breakpoint tersebut.

Snippets CSS Code:

Contoh kode dengan CSS:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="gameContainer">
      <div class="topContent">
        <div class="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
      </div>
      <div class="menuContainer">
        <div>
          <div id="cellContainer">
            <div cellIndex="0" class="cell"><p class="player"></p></div>
            <div cellIndex="1" class="cell"><p class="player"></p></div>
            <div cellIndex="2" class="cell"><p class="player"></p></div>
            <div cellIndex="3" class="cell"><p class="player"></p></div>
            <div cellIndex="4" class="cell"><p class="player"></p></div>
            <div cellIndex="5" class="cell"><p class="player"></p></div>
            <div cellIndex="6" class="cell"><p class="player"></p></div>
            <div cellIndex="7" class="cell"><p class="player"></p></div>
            <div cellIndex="8" class="cell"><p class="player"></p></div>
          </div>
          <h2 id="statusText"></h2>
          <div class="statusContainer">
            <div class="score">
              <p>Player X</p>
              <p id="scoreX"></p>
            </div>
            <button id="restartButton">Restart</button>
            <div class="score">
              <p>Player O</p>
              <p id="scoreO"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

```css
body {
  background-color: #2d4b7d;
  color: black;
}

.cell {
  background-color: #f6d5ff;
  width: 120px;
  height: 120px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex: auto;
  text-align: center;
  font: bold;
  font-size: 70px;
  cursor: pointer;
}

.player {
  opacity: 0;
}

.cell:hover .player {
  opacity: 0.3;
}

.statusContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
}

#scoreX #scoreO {
  font-size: 20px;
}

.score {
  font-size: 18px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: #f6d5ff;
  padding-right: 20px;
  padding-left: 20px;
}

#cellContainer {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 15px;
  width: fit-content;
  margin: auto;
}

#gameContainer {
  text-align: center;
  align-items: center;
  font-family: "Permanent Marker", cursive;
}

.title {
  font-size: 25px;
}

#restartButton {
  margin-top: 20px;
  cursor: pointer;
  width: fit-content;
  border: 3px solid white;
  border-radius: 5px;
  padding: 8px;
  background-color: #f6d5ff;
  width: fit-content;
  color: black;
  font-size: 20px;
  font-family: "Permanent Marker", cursive;
}

.topContent {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  position: relative;
}

#playerScore {
  width: 100px;
  height: fit-content;
  position: absolute;
  left: 20px;
}

#statusText {
  font-size: 40px;
}
```

```javascript
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartButton");
const player = document.querySelectorAll(".player");
const displayScoreX = document.querySelector("#scoreX");
const displayScoreO = document.querySelector("#scoreO");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currPlayer = "X";

let running = false;
let scoreX = 0;
let scoreO = 0;

const initializeGame = () => {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currPlayer}'s turn`;
  player.forEach((text) => {
    text.textContent = currPlayer;
  });
  displayScoreX.textContent = scoreX;
  displayScoreO.textContent = scoreO;
  running = true;
};

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] !== "" || !running) {
    return null;
  }
  updateCell(this, cellIndex);
  checkWinner();

  if (running) {
    changePlayer();
  }
}

const updateCell = (cell, index) => {
  options[index] = currPlayer;
  cell.textContent = currPlayer;
};

const changePlayer = () => {
  currPlayer = currPlayer === "X" ? "O" : "X";
  player.forEach((text) => {
    text.textContent = currPlayer;
  });
  statusText.textContent = `${currPlayer}'s turn`;
};

const checkWinner = () => {
  let flag = false;
  for (let i = 0; i < winConditions.length; i++) {
    let counter = 0;
    const checker = winConditions[i].every(
      (index) => options[index] === currPlayer
    );
    console.log(checker);
    for (index of winConditions[i]) {
      if (options[index] !== "" && checker) {
        counter++;
      }
    }
    if (counter === 3) {
      flag = true;
      break;
    }
  }

  if (flag) {
    if (currPlayer === "X") {
      scoreX++;
    } else if (currPlayer === "O") {
      scoreO++;
    }
    displayScoreX.textContent = scoreX;
    displayScoreO.textContent = scoreO;
    statusText.textContent = `${currPlayer}'s Win!`;
    running = false;
  } else if (options.every((cell) => cell !== "")) {
    statusText.textContent = `Game Draw`;
    running = false;
  }
};

const restartGame = () => {
  options = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));

  initializeGame();
};

initializeGame();
```

Setelah kalian buka, website akan lebih nyaman dan bagus untuk dilihat bukan? Nah itu fungsionalitas dari CSS,
Coba kalian Hapus CSSnya. Hasilnya kayak gimana?
