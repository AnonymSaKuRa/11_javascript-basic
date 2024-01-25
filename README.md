# 2023年後期「JavaSctipt基礎」授業課題

## 授業内コード

## １月２５日
### jsonとData()オブジェクト
```js
const npb2023 = [
    { Team: "阪神タイガース", Wins: 85, Loss: 53, Ties: 5, Rate: 0.616 },
    { Team: "広島東洋カープ", Wins: 74, Loss: 65, Ties: 4, Rate: 0.532 },
    { Team: "横浜DeNAベイスターズ", Wins: 74, Loss: 66, Ties: 3, Rate: 0.529 },
    { Team: "読売ジャイアンツ", Wins: 71, Loss: 70, Ties: 2, Rate: 0.504 },
    { Team: "東京ヤクルトスワローズ", Wins: 57, Loss: 83, Ties: 3, Rate: 0.407 },
    { Team: "中日ドラゴンズ", Wins: 56, Loss: 82, Ties: 5, Rate: 0.406 },
];

// []配列リテラル、{}オブジェクトリテラル、""文字列リテラル、``テンプレートリテラル
for (let team of npb2023) {
    console.log(team);
    for (let key in team) {
        console.log(team[key]);
    }
}
```

```js
const now = new Date(); // Dateオブジェクト
console.log(now);

const day = ["日", "月", "火", "水", "木", "金", "土"];
console.log(now.getDay()); // 4
console.log(day[now.getDay()]); // 木

// 進級展までのカウントダウン
const promotionDay = new Date("2024-2-8");
console.log(promotionDay - now);
const difference = promotionDay - now;

// ミリ秒 → 秒
const seconds = difference / 1000;
console.log(seconds);

// 秒 → 分
const minites = seconds / 60;
console.log(minites);

// 分 → 時間
const hours = minites / 60;
console.log(hours);

// 時間 → 日
const days = hours / 24;
console.log(days);

// ミリ秒 → 日付
const days2 = difference / (1000 * 60 * 60 * 24);
console.log(days2);
```

## 1月18日
### オブジェクトと配列 for...in文 for...of文
```js
const array = [];
const num = [1, 2, 3];

array.push(1);
array.push(2);
array.push(3);

for (let num of array) {
    console.log(num);
}

// テーブルに要素を入れたい
const numbers = ["zero", "one", "two", "three", "four", "five"];
const table = document.querySelector(".table_nam");

for (let i = 0; i < numbers.length; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    td.innerHTML = i;
    td2.innerHTML = numbers[i];
}

const fruits = ["りんご", "もも", "バナナ"];
const ul = document.querySelector("ul");

for (let name of fruits) {
    //console.log(name); // 配列の要素が入っている
    const li = document.createElement("li");
    li.innerHTML = name;
    ul.appendChild(li);
}

const junishi = ["丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌"];
const twopieces = ["子", "亥"];
const junishis = document.querySelector(".junishis");

junishi.unshift(twopieces[0]);
junishi.push(twopieces[1]);

console.log(junishi);

for (eto of junishi) {
    const list = document.createElement("li");
    list.innerHTML = eto;
    junishis.appendChild(list);
}

const staff = [
    ["佐藤", 41, "東京"],
    ["鈴木", 25, "大阪"],
    ["林", 34, "札幌"],
];

for (let i = 0; i < staff.length; i++) {
    for (let j = 0; j < staff[i].length; j++) {
        console.log(staff[i][j]);
    }
}

const animals = ["dog", "cat", "bird"];
animals[2] = "lion";
animals.push("tiger");  // 配列の一番最後に追加
console.log(animals);

const fruits = document.querySelectorAll("li");
// fruits.push("<li>いちご</li>");  // 配列じゃないので使えない
console.log(fruits);
animals.unshift("elephant"); // 配列の一番最初に追加
console.log(animals);

const countries = {
    Japan: "日本",
    USA: "アメリカ",
    China: "中国",
    Korea: "韓国",
};

console.log(countries.USA);
console.log(countries['USA']);

// for...in文
for (let country in countries) {
    console.log(countries[country]);
}

//受験者名簿（オブジェクトの配列）
const meibo_obj = [
    { id: "20224", name: "新井太郎" },
    { id: "20031", name: "井上次郎" },
    { id: "20193", name: "山本花子" }
];

for (let i = 0; i < meibo_obj.length; i++) {
    for (let key in meibo_obj[i]) {
        console.log(key);
        console.log(meibo_obj[i][key]);
    }
}

let npbCentral_list = [
    { team: "東京ヤクルトスワローズ", home: "東京" },
    { team: "阪神タイガース", home: "大阪" },
    { team: "読売ジャイアンツ", home: "東京" },
    { team: "広島東洋カープ", home: "広島" },
    { team: "中日ドラゴンズ", home: "名古屋" },
    { team: "横浜DeNAベイスターズ", home: "横浜" },
];
console.log(npbCentral_list[4].home);
```

## 1月１１日
### オブジェクト
```js
const person = {
  name: "",
  age: 0,
  infomation: function () {
    return "名前:" + this.name + "\n年齢:" + this.age;
  },
}
person.name = "山田太郎";
person.age = 18;
// console.log(person.name, person.age);
console.log(person.infomation());



const myCar_list = {}; //空のオブジェクトを作成
myCar_list.make = "Ford";
myCar_list.model = "Mustang";
myCar_list.year = 1969;
console.log(myCar_list); //{make: 'Ford', model: 'Mustang', year: 1969}

console.log(myCar_list.model);
console.log(myCar_list.year);

/* オブジェクトの順番は保証されない（見る環境によって違う場所に追加される） */
myCar_list["2021"] = "51年"; //ブラケットで設定
console.log(myCar_list);
console.log(myCar_list["2021"]);


const dict = {
  apple: "林檎",
  banana: "バナナ",
  orange: "オレンジ"
};

// 新規登録
dict.grape = "ぶどう";

// 削除
delete dict.orange;

// 再代入
dict.apple = "りんご"
console.log(dict);
```

### 九九
```js
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  // 送信する働きを無効化する
  event.preventDefault();
  const num = document.querySelector(".num").value;
  if (num == 2) {
    console.log("数値の2です。");
  } else {
    console.log("違います。");
  }
  const kuku = document.querySelector(".kuku");
  for (let i = 0; i < 9; i++) {
    const li = document.createElement("li");
    kuku.appendChild(li);
    li.innerText = num * (i + 1);
  }
})
```

### 簡単なフォーム(受け取り)
```js
const url = new URL(window.location.href);
const params = url.searchParams;
params.forEach(function (value, key) {
  const li = document.createElement("li");
  li.textContent = `${key}:${value}`;
  document.querySelector(".result").appendChild(li);
});
```

## 12月２１日

### 富士山スライドショー作成

```html
<!doctype html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>slideshow</title>
    <link rel="stylesheet" href="css/amore_modern_reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <p class="l-btn">&lt;</p>
    <div class="slide">
        <img src="images/mt-fuji001.jpg" alt="富士山1">
        <img src="images/mt-fuji002.jpg" alt="富士山2">
        <img src="images/mt-fuji003.jpg" alt="富士山3">
        <img src="images/mt-fuji004.jpg" alt="富士山4">
        <img src="images/mt-fuji005.jpg" alt="富士山5">
        <img src="images/mt-fuji006.jpg" alt="富士山6">
    </div>
    <p class="r-btn">&gt;</p>

    <div class="buttons">
        <button class="leftBtn">左へ</button>
        <button class="rightBtn">右へ</button>
    </div>

    <script src="script/script.js"></script>
</body>

</html>
```

```css
@charset "UTF-8";

body {
    position: relative;
}

.slide {
    display: flex;
    width: 80%;
    overflow: hidden;
    margin: auto;
}

.slide img {
    width: 100%;
    min-width: 100%;
    transition: all .5s ease-in;
}

.slide img:first-child {
    margin-left: -100%;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.l-btn,
.r-btn {
    position: absolute;
    top: 0;
    font-size: 200px;
    opacity: .1;
    cursor: pointer;
}

.r-btn {
    right: 0;
}
```

```js
const images = document.querySelectorAll(".slide img");
const slide = document.querySelector(".slide");

const lBtn = document.querySelector(".l-btn");
const rBtn = document.querySelector(".r-btn");

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

// 指定した場所の前に指定したノードを入れるというメソッド
slide.insertBefore(images[images.length - 1], images[0]);

const leftSlider = () => {
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0";
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
}

const rightSlider = () => {
    const slideImages = document.querySelectorAll(".slide img");
    slide.appendChild(slideImages[0]);
    slideImages[1].removeAttribute("style");
}

leftBtn.addEventListener("click", leftSlider);
rightBtn.addEventListener("click", rightSlider);

// window.setInterval(rightSlider, 2000);

lBtn.addEventListener("click", leftSlider);
rBtn.addEventListener("click", rightSlider);
```

## 12月14日

### アロー関数
```js
// 従来の関数式
const dog = function () {
    return "わんわん";
}

// 関数の定義
function dog2() {
    return "バウバウ";
}
console.log(dog()); //わんわん
console.log(dog2()); //バウバウ

// アロー関数の関数式
const cat = () => {
    return "にゃーにゃー";
};
console.log(cat()); //にゃーにゃー

// 鳴き方を決めたい
const animal = (voice) => {
    return voice;
};
console.log(animal("みゃあみゃあ"));

const thisElm = document.querySelector("p");
// アロー関数で「this」は使えない
// 引数を入れれば取れる（よく使うのは「e」）
thisElm.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
});
```

### コールバック関数

```js
// 富士山のスライドショーをタイマー化
const nextBtnClick = () => {
  count++;
  if (count === fujiImg_list.length) {
    count = 0;
  } else if (count < 0) {
    count = fujiImg_list.length - 1;
  } else {
    count = count;
  }
  imageArea.setAttribute("src", `images/${fujiImg_list[count]}`);
}

const slideShow = function (func) {
  setInterval(func, 2000);
};

slideShow(nextBtnClick);
```

```js
// コールバック関数の書き方
// 関数式①
const concatenateSpace = function (lastName, firstName) {
    // lastName = nameParam[0]、firstName = nameParam[1]
    return lastName + " " + firstName;
};

// 関数式②
const useConcatenate = function (name, func) {
    // concatenateSpaceの戻り値が入る、引数はnameParamから取得
    let concatName = func(name[0], name[1]);
    console.log("結合結果：" + concatName);
};

let nameParam = ["櫻井", "陸志"];
// 関数式②の実行（引数1 = 配列、引数2 = 関数名）
useConcatenate(nameParam, concatenateSpace); //結合結果：中田 雄二


// コールバック関数の基本（よく使うパターン）
// 関数式①
const testFunc = function (func) {
    // func = callback(関数式②)
    console.log("testFuncが実行されました");
    // 2秒後に実行
    setTimeout(function () {
        func();
    }, 2000);
};

// 関数式②
const callback = function () {
    console.log("callbackが実行されました");
};

// 関数式①を実行
testFunc(callback);
```

```js
// 動物を走らせる
const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");
const animalSpeed = [3, 4, 1, 3, 2];
const animals = document.querySelectorAll("li span");

// ここに関数animalsRunを作成してください。
const animalsRun = (runner) => {
    for (let i = 0; i < animals.length; i++) {
        runner[i].style.transitionDuration = animalSpeed[i] + "s";
        runner[i].classList.add("run");
    }
};

startBtn.addEventListener("click", function () {
    animalsRun(animals);
});

// リセットボタンの追加
resetBtn.addEventListener("click", () => {
    for (let i = 0; i < animals.length; i++) {
        animals[i].style.transitionDuration = 0 + "s";
        animals[i].classList.remove("run");
    }
});
```

## 12月7日

### スコープ
```js
// グローバル変数の初期化※再代入可能にするためletを使う。
let global = "グローバル変数";
//関数funcの定義
const func = function () {
  //ローカル変数の初期化
  let local = "ローカル変数";

  //グローバル変数の表示
  console.log(global);

  //ローカル変数の表示
  console.log(local);

  global = "グローバル変数を再代入";
  console.log(global);

  var global = "グローバル変数を再定義";
  console.log(global);
}
if (global) {
  var local2 = "varは関数スコープ";
  let local3 = "letはブロックスコープ";
}

// 関数の実行
func();
//グローバルはvar global = "グローバル変数を再定義";で再定義されているので、undefinedになる。
console.log(global);  //グローバル変数の表示
console.log(local2);  //varは関数スコープなので、if文の外で呼び出せる。
console.log(local3);  //letはブロックスコープなので、if文の外で呼び出せない。
```

```js
const globalData = "hogehoge";
const foobaa = () => {
  const globalData = "fugafuga";
  console.log(globalData);
};
console.log(globalData);
```

### 戻り値
```js
const taxIn = document.querySelector(".taxIn");
const btn = document.querySelectorAll("button");
const cake = 450;
const taxPrice = function (price, tax) {
    return price * tax;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (i === 0) {
      taxIn.textContent = Math.round(taxPrice(cake, 1.08)); // Math.round(小数点以下切り捨て)
    } else {
      axIn.textContent = Math.round(taxPrice(cake, 1.1));
    }
  });
}
```

```js
const addition = function (a, b) {
  const c = a + b;
  console.log(c);
}

addition(10, 11); //21
addition(30, "6"); //306

const addition2 = function (a, b) {
  const c = a * b;
  return c;
}

const result = addition2(5, 5);
console.log(result); //25
```

## 11月16日

### 中間テスト問10 ラーメンの値段計算
```html
<section>
    <h1>醤油らーめん</h1>
    <div class="ramenArea">
        <img src="https://4.bp.blogspot.com/-SmXTKx3nBcA/UrlnHYwXxoI/AAAAAAAAcOA/erB3n3GC80E/s800/ramen_syouyu.png"
            alt="醤油ラーメン">
        <p class="unit"><span>450</span>円</p>
    </div>
    <div class="price">
        <button class="minus">-</button>
        <p class="num">0</p>
        <button class="plus">+</button>
    </div>
    <button class="order">注文する</button>
    <p class="result"></p>
</section>
```

```js
// マイナスボタン
const minus = document.querySelector(".minus");
// プラスボタン
const plus = document.querySelector(".plus");
// 数量
const num = document.querySelector(".num");
// 注文ボタン
const order = document.querySelector(".order");
// 代金（リザルト）
const result = document.querySelector(".result");

// 数量用のカウンタ
let counter = 0;
// 商品の値段
const price = 450;

// マイナスを押したときの処理
minus.addEventListener("click", function () {
    counter--;
    // ０以下にならないようにする
    if (counter < 0) {
        counter = 0;
    }
    num.textContent = counter;
});

// プラスを押したときの処理
plus.addEventListener("click", function () {
    counter++;
    num.textContent = counter;
});

// 注文を押したときの処理
order.addEventListener("click", function () {
    result.textContent = price * counter + "円";
});
```

### 振り返り問題と「かつ」、「または」の書き方
```js
const word = ["Java", "JavaScript", "Ruby", "Go", "PHP"];

// 変数の宣言
const resultBtn = document.querySelector("button");
const resultArea = document.querySelector(".result");

resultBtn.addEventListener("click", function () {
    const num = Math.round(Math.random() * 4);
    if (word[num] == word[1]) {
        console.log("成功");
        resultArea.textContent = word[1];
    } else {
        resultArea.textContent = "違う言語です";
    }
});

const n1 = 1;
const n2 = 2;

// または
if (n1 === 1 || n2 === 1) {
    console.log(true);
} else {
    console.log(false);
}

// かつ
if (n1 === 1 && n2 === 1) {
    console.log(true);
} else {
    console.log(false);
}

if (n1 === 1 && n2 === 2) {
    console.log(true);
} else {
    console.log(false);
}
```

## 11月９日

### ボタンで敵が出現したり、消えたりする処理
```js
// こちらに記述していきます。
// 六天魔王に対する処理

// 画像の取得
const satan = document.querySelector(".satan img");
console.log(satan);

// ボタンの取得
const satanBtn = document.querySelector(".satansBtn");
console.log(satanBtn);

// クリックイベントをつける
satanBtn.addEventListener("click", function () {
  satan.classList.toggle("hide");
});

// その他の敵の処理
// すべての敵を取得
const enemyImg = document.querySelectorAll(".enemy img");
console.log(enemyImg);

// すべてのボタンを取得
const attackBtn = document.querySelectorAll(".enemyBtn");
console.log(attackBtn);

// for文ですべてのボタンにクリックイベントをつける
for (let i = 0; i < attackBtn.length; i++) {
  attackBtn[i].addEventListener("click", function () {
    enemyImg[i].classList.toggle("hide");
  });
}
```

### 画面の左右を判定し、左右それぞれのリストに文字を追加する処理
```html
<section>
  <h1>左右どっち？</h1>
    <div class="clickArea">
        <ol class="leftZone"></ol>
        <ol class="rightZone"></ol>
    </div>
</section>
```
```js
const widthsize = window.innerWidth; //現在のブラウザの横幅
console.log(widthsize);
//以下から記述していきます。

// 左右のリストを取得
const leftZone = document.querySelector(".leftZone");
const rightZone = document.querySelector(".rightZone");

// bodyにクリックイベントをつける
document.body.addEventListener("click", function (event) {
  // クリックしたX軸が取得できる
  console.log(event.clientX);

  // クリックされた座標(左右)で処理を分ける
  if (event.clientX < 1270 / 2) {
      console.log("左です");
      const leftLIst = document.createElement("li");  //liを作るための変数を用意する
      leftLIst.textContent = "左";                    //liのテキストに代入
      leftZone.appendChild(leftLIst);                 //appendChild()で最後に追加

  } else {
      console.log("右です");
      const rightLIst = document.createElement("li"); //liを作るための変数を用意する
      rightLIst.textContent = "右";                   //liのテキストに代入
      rightZone.appendChild(rightLIst);               //appendChild()で最後に追加
  }
});
```

## 11月２日

### イベントリスナー練習
```js
//画像ファイル名は、配列から取得します。
 const fujiImg_list = ["images/mt-fuji001.jpg", "images/mt-fuji002.jpg", "images/mt-fuji003.jpg"];

// 画像のタグ<img>要素を変数に取得
let fuji = document.querySelector("img");
console.log(fuji);

//富士山のボタン全てを querySelectorAll で変数に取得
const fuji_btn = document.querySelectorAll(".image-fuji");
console.log(fuji_btn);

//NodeList なので for 文でそれぞれのボタンに click イベントを登録する。(addEventListener)


// カウンター変数
let counter = 0;

// 前のボタンを押したら一つ前の画像に戻る
// １つ目の写真で前に戻ると３枚目の写真が映るようにする
fuji_btn[0].addEventListener("click", function () {
  counter--;
  if (counter == -1) {
    counter = 2;
  }
  fuji.setAttribute("src", fujiImg_list[counter]);
})

// 次のボタンを押したら一つ前の画像に戻る
// ３つ目の写真で前に戻ると１枚目の写真が映るようにする
fuji_btn[1].addEventListener("click", function () {
  counter++;
  if (counter == 3) {
    counter = 0;
  }
  fuji.setAttribute("src", fujiImg_list[counter]);
})

// for文バージョン
for (let i = 0; i < fuji_btn.length; i++) {
  fuji_btn[i].addEventListener("click", function () {
    fuji.setAttribute("src", fujiImg_list[i]);
  });
};

// 個別バージョン
fuji_btn[0].addEventListener("click", function () {
  fuji.setAttribute("src", fujiImg_list[0]);
});

fuji_btn[1].addEventListener("click", function () {
  fuji.setAttribute("src", fujiImg_list[1]);
});

fuji_btn[2].addEventListener("click", function () {
  fuji.setAttribute("src", fujiImg_list[2]);
});

//ボタンをクリックすると、画像の src 属性に配列 fujiImg_list 内の要素が設定される（setAttribute）ことで画像への path が設定されます。
```

### クリックイベント復習
```js
//  要素の取得
const dacingBtn = document.querySelector(".dancing");
const stopBtn = document.querySelector(".stop");
const changeBtn = document.querySelector(".change");
const dancer = document.querySelector("img");

// クリックイベントをつける
// クラス名にdanceをつけたり消したりして回転を制御する
dacingBtn.addEventListener("click", function () {
  dancer.setAttribute("class", "dance");
});

stopBtn.addEventListener("click", function () {
  dancer.removeAttribute("class", "dance");
});

// クリックされたら画像を切り替える
changeBtn.addEventListener("click", function () {
  dancer.setAttribute("src", "images/ballet_woman.png");
});
```

## １０月２６日

### addEventListenerとsetAttribute
```js
// 要素の取得
const text = document.querySelector("p span");
const btnRed = document.querySelector(".redder");
const btnBig = document.querySelector(".bigger");

// クリックしたら赤くなるイベント
btnRed.addEventListener("click", function () {
    text.setAttribute("class", "redText");
});

// クリックしたらサイズが大きくなるイベント
btnBig.addEventListener("click", function () {
    text.setAttribute("class", "bigText");
});
```

### 要素の取得(getElements)
```js
// さつまいも
// 挿入したい要素を取得
const sweetpotatos = document.querySelector(".imo");

// innerHTMLで追加
sweetpotatos.innerHTML += `<li>べにはるか</li>`;
```

```js
// バレーボール
const nations_list = document.querySelectorAll(".mens li");
for (let i = 0; i < nations_list.length; i++) {
    console.log(nations_list[i]);
}

const id_element = document.getElementById("toparis");
console.log(id_element)

const tag_name = document.getElementsByTagName("li");
for (let i = 0; i < tag_name.length; i++) {
    console.log(tag_name[i]);
}

const class_name = document.getElementsByClassName("pool_a");
for (let i = 0; i < class_name.length; i++) {
    console.log(class_name[i]);
};
```

### 振り返り問題
```html
<section>
    <h1>犬のギャラリー</h1>

    <div class="card1">
      <h2>柴犬の散歩</h2>
      <p>雨だったけど、散歩に連れて行った</p>
    </div>

    <div class="card2">
      <h2>秋田犬の寝顔</h2>
      <p>普段は不細工だけど、寝顔はかわいい</p>
    </div>

    <img src="images/dog001.png" alt="柴犬" id="pochi" class="shibaDog" />
    <img src="images/dog002.png" alt="秋田犬" id="hachiko" class="akitaDog" />
  </section>
```
```js
// 要素の取得
const pochi = document.querySelector(".shibaDog");
const hachiko = document.querySelector(".akitaDog");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

// 要素を追加
card1.appendChild(pochi);
card2.appendChild(hachiko);
```

## 10月１９日

### 配列
```js
//ulの中に果物一覧を一度にliで追加したい
const fruits = ["りんご", "もも", "バナナ"]

// fruitslistを取得
const fruitslist = document.querySelector("#fruitslist")

for (let i = 0; i < fruits.length; i++) {
    // 新たにliを作成
    const liLast = document.createElement("li");
    // テキストを追加
    liLast.textContent = fruits[i];
    // リストの最後に追加
    fruitslist.appendChild(liLast);
}
```

### for文と配列の組み合わせ
```js
for (let i = 0; i < 4; i++) {
    //0~3を表示する処理
    console.log(i);
};

const name_list = ["松田", "田中", "中山", "山本", "本田"];
console.log(name_list)

for (let i = 0; i < name_list.length; i++) {
    console.log(name_list[i]);
}
```

### lesson
```js
//dlを取得
const recipe = document.querySelector(".recipe");
//新しいddを作成
const ddLast = document.createElement("dd");
//ddのテキストを追加
ddLast.textContent = "3分待ってできあがり";
//dlの最後に追加
recipe.appendChild(ddLast);

//配列の宣言
const animals = ["dog", "cat", "bird"];

//「cat」を取得
console.log(animals[1]);

//配列の長さを取得
console.log(animals.length)

//七の段を表示
for (let i = 0; i < 9; i++) {
    console.log(`7 * ${i + 1} = ${7 * (i + 1)}`);
}
```

## 10月12日

### 文字列の計算

```js
console.log("トライデントコンピュータ専門学校\nWebデザイン学科");   //文字列リテラル
console.log(123);   //数値リテラル
console.log("123");   //文字列型
console.log(`トライデントコンピュータ専門学校
Webデザイン学科
名前`);   //テンプレートリテラル（文字列型)
//文字列の連結
console.log("ABC" + "DEF");
console.log("円周率は" + 3.14 + "です。");
//文字列が来た瞬間に文字列型に変わってしまう!!
console.log("計算結果は" + 123 + 456);   //すべて文字列として出力
console.log(123 + 456 + "となりました。");   //先に計算してから文字列と連結し出力
console.log("計算結果は" + (123 + 456));
console.log("2" - 1);
console.log("2" * 3);
console.log("2" / 4);
```

### 宣言・代入・複合代入演算子

```js
//変数の宣言・代入
let a;   //変数の宣言
a = 10;   //値の代入
console.log(a);
a = "Hello"   //値の再代入
console.log(a);

//再宣言なのでエラーとなる
// let a = "world";

//定数の宣言
const PI = 3.14;
console.log(PI);   //再宣言も再代入もできない

//複合代入演算子
let n = 5;
n += 2;   //複合代入演算子
console.log(n);

//インクリメント
let n3 = 5;
n3++;
console.log(n3);
```

### 文字列の扱い

```js
//文字列の扱い
let s = "Hello";
console.log(s.toUpperCase());
console.log(s.length);   //文字数を表示
```

```js
//メロンを加えたい
//ul要素を取り入れる
const element = document.querySelector("ul");
console.log(element);

//selectorはCSSのセレクターなので
const element2 = document.querySelector("#fruitslist");
console.log(element2)

const element3 = document.querySelector(".listbox__list");
console.log(element3)

//新しいリストを作る
const liLast = document.createElement("li");   //新しいリストの作成
console.dir(liLast);   //dirに変更、中身を見れる
liLast.textContent = "メロン";   //テキストを追加
console.log(liLast);
```

## 10月5日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
2. 外部 JS ファイルの中
3. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
<!-- </script> -->
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。
