/**
 * 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡。

这样一次循环之后最后一个数就是本数组最大的数。

下一次循环继续上面的操作，不循环已经排序好的数。

优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。
**/
// const arr = [1, 3, 2, 9, 5, 5, 7, 8, 5, 6, 4];

const arr = [5, 2, 9, 3, 7, 8, 6, 4, 1];

function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    let complete = true;
    for (let i = 0; i < array.length - 1 - j; i++) {
      // 比较相邻数
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        complete = false;
      }
    }
    // 没有冒泡结束循环
    if (complete) {
      break;
    }
  }
  return array;
}

console.log("递归排序的结果", bubbleSort(arr));
