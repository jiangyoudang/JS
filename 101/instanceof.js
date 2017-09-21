

function foo() {

}

foo.prototype.add = function() {
  return 1;
};



console.log(foo instanceof Function);

console.log(foo.__proto__);
console.log(Function.prototype);