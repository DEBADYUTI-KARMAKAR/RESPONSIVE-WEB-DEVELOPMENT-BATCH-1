let arr = [1,2,3,4,5];
console.log(arr[4]);
console.log(arr);
const num = new Array(1,2,6);
console.log(num);
console.log(num.length);
num.push(36);
console.log(num);
console.log(num.unshift(20));
console.log(num);

console.log(num.pop());
console.log(num.shift());
const a= ["HELLO","HII","BYE","HII"];
console.log(a.indexOf("HII"));
console.log(a.lastIndexOf("HII"));
console.log(a.includes("HELLO"));
console.log(a.includes("HK"));

//for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
      
}
//for of
for (const key of a) {
    console.log(key);
}
