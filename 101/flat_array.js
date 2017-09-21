const test = [[1, [2, 3], 4], [[5, 6], 7], 8];

const expected = [];
for (let i = 1; i <= 8; i++) {
  expected.push(i);
}

// const flat = list =>
//     list.reduce((acc, elem) => {
//       if (elem instanceof Array) {
//         acc = acc.concat(flat(elem));
//       } else {
//         acc.push(elem);
//       }
//       return acc;
//     }, []);
// ;


// recursive
const flat = list => list.reduce(
    (acc, elem) => acc.concat(
        Array.isArray(elem) ? flat(elem) : elem),
    []);

const flat_iter = list => {
  if (list.length === 0) {
    return []
  }
  const ans = [];
  const stack = [];
  stack.push([list, 0]);
  while (stack.length > 0){
    let cur = stack.pop();
    let [obj, start] = cur;
    for(let i = start; i < obj.length; i ++){
      if (Array.isArray(obj[i])) {
        stack.push([obj, i+1]);
        stack.push([obj[i], 0]);
        break;
      } else {
        ans.push(obj[i]);
      }
    }
  }
  return ans;
};

// console.log(flat(test).reduce(
//     (acc, val) => acc + val));

console.log(flat_iter(test));

//
//




// const a = [1];
// // a.concat([3]);
// console.log(flat([1, 3]));