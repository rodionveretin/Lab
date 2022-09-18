function quickSort(unsortedArray: number[]): number[] {
  let smaller: number[] = [];
  let larger: number[] = [];
  if (unsortedArray.length <= 1)
    return unsortedArray;

  for (let i = 1; i <= unsortedArray.length; i++) {
    if (unsortedArray[i] < unsortedArray[0])
      smaller.push(unsortedArray[i]);
    if (unsortedArray[i] >= unsortedArray[0])
      larger.push(unsortedArray[i]);
  }
  return quickSort(smaller).concat(unsortedArray[0], quickSort(larger));
}

// Случайный массив
let arr: number[] = [...Array(100)].map(_ => Math.ceil(Math.random() * 100));

// Вывод неотсортированного массива
console.log(arr);

// Вывод отсортированного массива
console.log(quickSort(arr));