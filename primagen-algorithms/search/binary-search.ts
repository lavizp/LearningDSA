function BinarySearch(array: Array<number>, value: number): number {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let halfIndex = Math.floor((firstIndex + lastIndex) / 2);
  while (lastIndex - firstIndex > 1) { 
    if (array[halfIndex] > value) {
      lastIndex = halfIndex
    } else {
      firstIndex = halfIndex
    }
    if (array[halfIndex] === value) {
      return halfIndex
    }
    halfIndex = Math.floor((firstIndex + lastIndex) / 2);
    console.log(firstIndex)
    console.log(lastIndex)
  }
  return -1;
}
console.log('asd')
console.log(BinarySearch([1,2,3,4,5,6,7,8,9], 5))