//document.getElementById("firstNumber").value=""; //to get value of HTMl element;
//to display value;
//document.getElementById("result").value = "";
//document.getElementById("secondNumber").value="";



function calculate(){
    var first_number;
    var second_number;
    var operator;
    var total;
    first_number = document.getElementById("firstNumber").value;
    second_number = document.getElementById("secondNumber").value;
    operator = document.getElementById("operator").value;

    if(operator == "+"){ total = parseFloat(first_number) + parseFloat(second_number);

    }
    else if (operator == "-") {total = parseFloat(first_number) - parseFloat(second_number);
        
    }
    else if (operator == "/"){total = parseFloat(first_number) / parseFloat(second_number);

    }
    else if (operator == "*") {total = parseFloat(first_number) * parseFloat(second_number);
         
    }
    else{total = "nil";}
    document.getElementById("result").value = total;
}
    


var greet;
greet="";
if (greet=="morning") {console.log("This is Morning");}
else if (greet=="afternoon") {console.log("Good Afternoon");}
else if (greet=="evening") { console.log("Good Night");}
else{console.log("Night Time")}

var greetings = ["Morning", "Afternoon","Evening"];
console.log(greetings);
console.log(greetings.length);
console.log(greetings[0]);

var primeNumber = [1,3,5,7,9,12,15];
console.log(primeNumber[primeNumber.length-1]);
//looping

var step = 0;

while (step < primeNumber.length) {console.log(primeNumber[step]);
    step = step + 1;
    
}
var numbers =[1,2,3,4,5,6,7,8,9,10];
//if even number =even number
//not even nuber
//while + if else
//step = 0;
//while (step<numbers.length) { step = step + 1;
    //var isEven = numbers[step] % 2;
    //if (isEven == 0) { console.log(numbers[step] + " is a even number");
        
    
   // else {console.log (numbers[step] + " is not a even number");}

    var numbers_2 = [1,2,3,4,5,6,7,8,9,10];
    for (a = 0 ; a < numbers_2.length ; a++ ){
        console.log(numbers_2[a]);
    }
        
var collections = [];
console.log(collections);

collections.push("Test");
console.log(collections);
collections.push("test2");
console.log(collections);

var myCollections  = [];
function addMe(){
   var myText=document.getElementById("myText").value;
   myCollections.push(myText); 
   document.getElementById("myResult").innerHTML = "";
   for ( var a = 0; a < myCollections.length ; a++ ){
   var currValue =  myCollections[a] + "<br>";
   var currResultValue = document.getElementById("myResult").innerHTML;
   document.getElementById("myResult").innerHTML = currResultValue + currValue;

   }
       
   }
   //document.getElementById("myResult").innerHTML= "This is Test Only";
var test = document.getElementById("myResult").innerHTML;
console.log(test);
var data = {
    timestamp : 20171229165932,
    weather : {
        temp : 49,
        forecast : "sunny"
    }

};
var time = data.timestamp;
var forecast = data.weather.forecast;
console.log("time of Request: " + time);
console.log("day forecast:" + forecast);