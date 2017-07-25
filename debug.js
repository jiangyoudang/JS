// // const m = new Map([['foo', 3], ['bar', 2], ['baz', 1]]);
// // // for (let [k, v] of m) {
// // //   console.log(k, v);
// // // }
// // //
// // // const values = Array.from(m.values());
// // // console.log(values.map((e) => e.toString()));
// // // console.log();
// //
// // const keys = Array.from(m.keys());
// // console.log(keys);
// // keys.sort(
// //     (a, b) => m.get(a) - m.get(b));
// // console.log(keys);
// //
// // const a = [[2,1], [1,2]];
// // a.sort();
// // console.log(a);
// // console.log('123' < '21');
// //
// //
// //
//
//
//
//
// // parse url params
// const url = 'http://witmax.cn/index.php?key0=0&key1=1&checked&key2=2';
//
// // patten = /(?:[?&])([^=&]+)((?=&)|=([^&]*))/g;
// patten = /(?:[?&])([^=&]+)(=([^&]+))*/g;
//
// const matches = new Map();
// let match;
// while(match = patten.exec(url)){
//   console.log(match);
//   if(match[2] === '&' && match[3] === undefined) {
//     matches.set(match[1], true);
//   }else {
//     matches.set(match[1], match[3]);
//   }
//
// }
// console.log(matches);
//
//
//


// Define the constructor Register
function Register(regVal) {
    var cash = 0;
    cash = regVal;

    return {
        addCash: function(val){
            cash += val;
            return this;
        },
        dispenseCash: function(val) {
            cash -= val;
            if (cash<=0){
                cash = 0;
            }
            return this;
        },
        getCashValue: function(){
            return cash;
        }

    }
}


var test = new Register(10);
console.log(test.cash);
console.log(test.addCash(20).dispenseCash(35));
console.log(test.getCashValue());