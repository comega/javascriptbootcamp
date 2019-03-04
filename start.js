

var hobj = document.querySelector('h1');

//hobj.innerHTML = "<span>Salaaaam</span>";

hobj.innerText = "<span>Salaaaam</span>";


var container = document.querySelector('.container');

console.log(container);

// document.querySelector('#btn').addEventListener('click',function(e){
//     console.log(e);
//     console.log("clicked!!");
// })

//var res = 15 % 3;

//Math.random()

//Math.floor(4.23423);

// Math.floor(Math.random() * 6) + 1;


// var index = 0;


// var spanDom = document.querySelector('#result');

// document.querySelector('#btn').addEventListener('click',function(e){
//     index += 1
//     spanDom.innerText = (index);
//     console.log("clicked!!");
// });

// document.querySelector('#my-link').addEventListener('click',function(e){
//     e.preventDefault();
//     console.log("link is clicked!");
// });

// document.querySelector('#btn').style.background = "red";

// dice problem tips ///////

  // define below variables:
    // use docuemnt objects to get all required elements;
    // first_user_score , second_user_score, user'sturn
    // check if one of the user is winner or not
    /// define update function for updating new scores and change
    // defin hold function for changing user's turn
/// end dice problem tips///



var arr = [1,2,3,4];

var res = arr.every(function(item,index){
    console.log(index);
    return true;
});

console.log(res);


var str1 = "lalal";

str1.split("").every(function(item,index){
    return ( item == str1[str1.length - 1 -index]) ? true :false;
});

















