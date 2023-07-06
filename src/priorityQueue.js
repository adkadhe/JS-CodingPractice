const queue = [{ val: 'l', priority: 1 }, { val: 'j', priority: 1 }]
function priorityQueue(){

}

function pushArr(val, priority ){
  queue.push({ val, priority, order });
}

function popArr() {
  const priorityExe = queue.sort((a, b) => a.priority - b.priority);
  priorityExe.unshift()
  
}