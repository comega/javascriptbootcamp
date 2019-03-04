// function reverse(input){
//     var input;
//     if(typeof(input)=="number"){
//         var input_string=input.toString().split("").reverse().join("");
//         var input_reverse=parseInt(input_string)*Math.sign(input);
//     }
//     else{
//         var input_reverse=input.split("").reverse().join("");
//     }
//     console.log(input_reverse);
// }
// reverse("salam");


var obj = {name:"ali"};
// obj.latname = "moha";
// console.log(obj.family);
// var str="name";
// obj[str];


var a =  "ali";

function first(){

    var b = " gholi";
    function second(){

        var c = "var3";
        console.log( c + b + a );
    
    }
    second();
}

first();