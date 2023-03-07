const obj = {}; // 用于存储所有订阅的回调。把订阅id作为对象的属性，属性对应的值为订阅回调的数组

function on(id, f) {
  // 订阅消息的函数。这里的id与发布消息处的的id对应，f是用来接收消息的回调
  if (!obj[id]) obj[id] = [];
  obj[id].push(f);
}

function emit(id, msg) {
  //  发布消息的函数。这里的id与订阅消息处的的id对应，msg是发布的消息
  obj[id].forEach((f) => f(msg));
}

on("hhh", (msg) => {
  console.log("a处接收消息", msg);
}); // 组件a订阅 hhh 处的消息
on("hhh", (msg) => {
  console.log("b处接收消息", msg);
}); // 组件b订阅 hhh 处的消息

emit("hhh", "哈哈哈"); // 发布消息到 hhh
