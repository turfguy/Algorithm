function solution(str1, str2) {
    
    function sliceStr(str)
    {
         var array=[];
         for (let i = 0 ; i < str.length - 1 ; i++) 
         {
            const s = str.slice(i, i + 2).toLowerCase();
            !s.match(/[^a-zA-Z]+/g) && array.push(s);
        } 
        return array;
    }

    array1 = sliceStr(str1);
    array2 = sliceStr(str2);
    let inter = []; // 교집합
    let union = [...array2]
    for(element of array1)
    {
        for (let i = 0 ; i < union.length; i++) 
        {
                if (element === union[0]) 
                {
                    inter.push(union.shift());
                    break;
                }
            union.push(union[0]);
            union.shift();
        }
    }
    const unionLen = array1.length + array2.length - inter.length; 
    // 합집합 length
    const J = inter.length / unionLen; 
    // 자카드
    return (unionLen===0)? 65536 : parseInt(J*65536);
 
}