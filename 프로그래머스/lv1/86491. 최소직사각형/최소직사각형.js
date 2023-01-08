function solution(sizes) {
    var minStack = [];
    var maxStack = [];
    for (size of sizes)
    {
        maxStack.push(Math.max(...size));
        minStack.push(Math.min(...size));  
    }
   return (Math.max(...minStack)*Math.max(...maxStack));
}