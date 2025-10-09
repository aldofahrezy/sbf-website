---
title: Intro to Git
description: Basic intro
---

# HTML: HyperText Markup Language

_HTML_ (Hypertext Markup Languange) merupakan struktur dari website untuk menampilkan konten.

Untuk inisialisasi HTML vanilla, kalian dapat:

1. Install live server extension
2. Membuat file `.html` di vscode
3. inisialisasi struktur dengan _!_ ,maka akan membuat struktur dasar HTML.

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

Setelah kalian buka, website akan lebih nyaman dan bagus untuk dilihat bukan? Nah itu fungsionalitas dari CSS,
Coba kalian Hapus CSSnya. Hasilnya kayak gimana?

---

# Javascript: DOM
