# 2023年後期「JavaSctipt基礎」授業課題

## 授業内コード
1. 10月5日（木）初めての一歩
2. 10月5日（木）Github　リポジトリ作成


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
