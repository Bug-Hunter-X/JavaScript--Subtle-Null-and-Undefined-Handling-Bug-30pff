function foo(x) {
  if (x == null) {
    return 0; //This will only work if x is null
  } else if (typeof x === 'string') {
    return x.length;
  } else {
    return x + 1;
  }
}
console.log(foo(null)); //0
console.log(foo(undefined));//NaN instead of 0
console.log(foo('hello')); //5
console.log(foo(5)); //6