function getFirstElement<T>(arr:T[]):T {
    return arr[0];
}

const first = getFirstElement<number>([1, 2, 3]);           // 1
const second = getFirstElement<string>(["a", "b", "c"]);     // "a"
const third = getFirstElement<boolean>([true, false, true]); // true

console.log(first);
console.log(second);
console.log(third);