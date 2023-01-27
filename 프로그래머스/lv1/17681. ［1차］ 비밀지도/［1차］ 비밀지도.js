function solution(n, arr1, arr2) {
    let answer = [];
    let array1 = arr1.map(function(element){
        let str = element.toString(2);
        str = str.split('')
        if (str.length<n)
        {
            while(str.length<n)
            {
               str.unshift('0')
            }
        }
        return str;
     })
     let array2 = arr2.map(function(element){
        let str = element.toString(2);        
        str = str.split('') 
        if (str.length<n)
        {
            while(str.length<n)
            {
                str.unshift('0')
            }
        }
        return str;
    })

    for (var i = 0; i<n; i++)
    {
        var str = ''
        for(var j =0 ; j<n ; j++)
        {
            if(array1[i][j]==='1'|| array2[i][j]==='1') str = str+'#';
            else str = str+' ';
        }
        answer.push(str);
    }
    return answer;
}