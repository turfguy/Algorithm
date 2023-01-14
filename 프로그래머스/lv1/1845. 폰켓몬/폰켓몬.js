
function solution(nums) {
    let max = (nums.length/2)
    const set = new Set(nums);
    let spec = [...set];
    
    return Math.min(max, spec.length);
}