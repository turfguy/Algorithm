function solution(sizes) {
    var minStack = [];
    var maxStack = [];
    for (size of sizes)
    {
        maxStack.push(Math.min(...size));
        minStack.push(Math.max(...size));  
    }
   return (Math.max(...minStack)*Math.max(...maxStack));
}