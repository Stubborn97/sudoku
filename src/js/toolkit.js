const matrixToolkit = {
  makeRow(v = 0) {
    // 创建长度为9的数组
    const array = new Array(9);
    // 使用fill填值(用一个固定值填充起始到结束的全部元素)
    array.fill(v);
    return array;
  },
  makeMatrix(v = 0) {
    // const array = new Array(9);
    // array.fill(makeRow(v)); // 有问题代码只运行一次,填充了9会
    return Array.from({ length: 9 }, () => this.makeRow(v));
  },
  shuffle(arr) {
    const endIndex = arr.length - 2;
    for(var i = 0; i <= endIndex; i++) {
      const j = i + Math.floor(Math.random() * (arr.length - i));
      // 解构交换
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
module.exports = matrixToolkit;