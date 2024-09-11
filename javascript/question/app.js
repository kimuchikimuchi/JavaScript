// Q1 変数
// 変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。

let nickname = '木村亮介';
let age = 24;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age +'歳です。');

// Q2 配列
// 変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`

console.log(templateText);

// Q3 オブジェクト
// 下記の変数 user を使用し 26 をコンソールに出力してください。

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列 × オブジェクト
// 下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
// Q4 で定義した変数 playerList を使用し、John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。

let totalAge = 0;

for(let i = 0; i < playerList.length; i++){
  totalAge += playerList[i].age;
}

ageAverage = totalAge / playerList.length;

console.log(ageAverage);

// Q6 関数
// Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。

function sayHello() {
  console.log('Hello');
};

sayHello();

const sayWorld = function() {
  console.log('World');
}

sayWorld();

// Q7 メソッド
// Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
// Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
// ※ いずれも Q3 で定義した変数 user を直接書き換えないこと

user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function(){
  console.log('Hello！');
};
user.sayHello();

// Q8 引数
// 下記の空のオブジェクト calc を使用し、以下問題を解いてください。

// 2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
// 2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
// 2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
// 2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。

let calc = {
  add: function(x, y) {
      console.log(x + y);
  },

  subtract : function(x, y) {
    console.log(x - y);
},

  multiply : function(x, y) {
    console.log(x * y);
},

  divide: function(x, y) {
    console.log(x / y);
}
};

calc.add(3,4);
calc.subtract (13,3);
calc.multiply (7,7);
calc.divide (35,7);

// Q9 返り値
// 2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数
// remainder を定義し、5 と 3 を引数に渡して実行した返り値を用いて
// 文字列連結で以下のようにコンソールに出力してください。

function remainder(x, y){
    let remainder = x % y;
    return remainder;
}

console.log('5 を 3 で割った余りは' + remainder(5,3) + 'です。');

// Q10 スコープ
// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。
// ・スコープ
// ・参照
// function foo() {
//   let x = 1;
// }
// console.log(x);

// 変数xは関数fooの中で定義されているためスコープは関数foo内のみになっている。
// そのため関数foo外から参照することができないから。

// Section 6

// Q1 標準組み込みオブジェクト
// 標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。
let random = Math.floor(Math.random() * 10);
console.log('random => ', random);

// Q2 コールバック関数
// 関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。
// Hello World!

let alert = function(){
  console.log('Hello World!');
}
setTimeout(alert, 3000);

// Q3 if
// 変数 num に 任意の数値を代入し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

// 条件
// num が 0 より大きければnum is greater than 0
// num が 0 より小さければnum is less than 0
// num が 0 であればnum is 0

let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4 for
// 変数 numbers に空の配列を代入した後、
// 0 ~ 99 までの数字を変数 numbers に全て追加し、
// 値が追加された状態の変数 numbers をコンソールに出力してください

let numbers = [];
for(let i = 0; i < 100; i++){
  numbers[i] = i;
}
console.log(numbers);

// Q5 for × if
// 以下の変数 mixed から 要素を一つずつ取り出し、
// 下記条件のもと文字列をコンソールに出し分ける処理を作成してください。
let mixed = [4, '2', 5, '8', '9', 0, 1];
// 条件
// Number であり偶数の時は even
// Number であり奇数の時は odd
// Number 以外の時は not number

for(let i =0; i < mixed.length; i++){
  let mix = mixed[i];
  if (typeof mix === 'number') {
    if (mix % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}