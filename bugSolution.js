function foo(x) {
  if (x === null) {
    return 0; // Correct handling of null
  } else if (x === undefined) {
    return 0; // Correct handling of undefined
  } else if (typeof x === 'string') {
    return x.length;
  } else {
    return x + 1;
  }
}
console.log(foo(null)); //0
console.log(foo(undefined));//0
console.log(foo('hello')); //5
console.log(foo(5)); //6