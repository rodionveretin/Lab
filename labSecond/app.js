var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(unsortedArray) {
    var smaller = [];
    var larger = [];
    if (unsortedArray.length <= 1)
        return unsortedArray;
    for (var i = 1; i <= unsortedArray.length; i++) {
        if (unsortedArray[i] < unsortedArray[0])
            smaller.push(unsortedArray[i]);
        if (unsortedArray[i] >= unsortedArray[0])
            larger.push(unsortedArray[i]);
    }
    return quickSort(smaller).concat(unsortedArray[0], quickSort(larger));
}
// Случайный массив
var arr = __spreadArray([], Array(100), true).map(function (el) { return Math.ceil(Math.random() * 100); });
// Вывод неотсортированного массива
console.log(arr);
// Вывод отсортированного массива
console.log(quickSort(arr));
