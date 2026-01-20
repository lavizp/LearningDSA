function BubbleSort(arr: Array<number>): Array<number> {
  for (let i = arr.length; i > 0 ; i-- ) {
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]) {
      const f = arr[j]
      arr[j] = arr[j+1] 
      arr[j+1]=f
      }
    }
  console.log(arr)
  }
  return arr
}

console.log(BubbleSort([1,3,7,4,2,6,5]))