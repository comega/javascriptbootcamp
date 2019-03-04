function strDecompose(str){
    var obj = {};
    for(var char of str){
        if(obj[char]){
            obj[char] = obj[char] + 1;
        }else{
            obj[char]=1;
        }
        //obj[char] =  ( (obj[char]) ? obj[char] + 1 : 1 );
        //obj[char] =   (obj[char]) + 1 || 1  ;
    }
    console.log(obj);
}
strDecompose("alimohammadzadeh");







