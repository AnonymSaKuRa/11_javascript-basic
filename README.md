# 2023年後期「JavaSctipt基礎」授業課題

## 授業内コード
1. 10月5日（木）初めての一歩
2. 10月5日（木）Github　リポジトリ作成


## １０月２６日

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
