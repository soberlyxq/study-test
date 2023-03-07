/**
 * 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
 */
/**
 * 实现步骤：
    选择一个基准元素target（一般选择第一个数）
    将比target小的元素移动到数组左边，比target大的元素移动到数组右边
    分别对target左侧和右侧的元素进行快速排序
 */
// const arr = [1, 3, 2, 9, 5, 5, 7, 8, 5, 6, 4];

const arr = [5, 2, 9, 3, 7, 8, 6, 4, 1];

// 递归法
const quickSort = (arr) => {
  if (Array.isArray(arr) && arr.length < 2) {
    return arr;
  }
  // 取出第一个目标数
  const target = arr[0];
  // 存放小于目标数的队列
  const left = [];
  // 存放大于或等于目标数的队列
  const right = [];

  console.log("array,", arr);
  console.log("target,", target);
  console.log("left,", left);
  console.log("right,", right);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
};

//
// console.log("递归排序的结果", quickSort(arr));

/**
 * 
 * 记录一个索引l从数组最左侧开始，记录一个索引r从数组右侧开始

   在l<r的条件下，找到右侧小于target的值array[r]，并将其赋值到array[l]

   在l<r的条件下，找到左侧大于target的值array[l]，并将其赋值到array[r]

   这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置
 * @param {*} arr 
 * @returns 
 */
// 双指针

//  5, 2, 9,3, 7, 8, 6, 4,1
function quickSort2(array, start, end) {
  if (end - start < 1) {
    return;
  }
  const target = array[start];
  let l = start;
  let r = end;
  console.log("target", target);
  while (l < r) {
    while (l < r && array[r] >= target) {
      r--;
    }
    console.log("arr11111  before", arr);
    array[l] = array[r];
    console.log("r1111", r);
    console.log("l1111", l);
    console.log("arr11111", arr);
    while (l < r && array[l] < target) {
      l++;
    }
    console.log("arr22222  before", arr);
    array[r] = array[l];
    console.log("r2222", r);
    console.log("l2222", l);
    console.log("arr22222", arr);
  }
  array[l] = target;
  console.log("arr after", arr);
  quickSort2(array, start, l - 1);
  quickSort2(array, l + 1, end);
  return array;
}

console.log("双指针", quickSort2(arr, 0, arr.length - 1));
