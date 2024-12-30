//create a function that takes a year as an input and determines whether it is leap year or not
 function leapYear(year){
    if(year%400===0) return true;
    if(year%100===0)return false;
    if(year%4===0)return true;
    return false;

 }

 //write a program that prompts the user to enter their age and then determine the price of a movie 
//ticket depending on the criteria
//1.Children (age <= 12): $10
//teenegers (age 13-17): $15
//adults (age >= 18): $20

 function movieTicket(age){
    if(age<=12){
        return 10
    }if (age>=13 && age<=17) {
        return 15
    } else {
        return 20
    }
 } 
 const result =movieTicket(15)
 console.log('$'+result)

    //question 2
  //  Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. 
  // The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the 
  // two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

   function fibona(num){
   if(num===0) return 0;
   if(num===1) return 1;
    return fibona(num-1)+fibona(num-2;)
   
   }
   console.log(fibona(6));

 //Power Function: Write a recursive function to calculate the result of raising
 //  a number to a given power.
//nb:any number raised to 0 is 1

function raisePow(base,exponent){
 if(exponent===0){
    return 1;
 }else{
    return base*raisePow(base,exponent-1);
 }
} 
console.log(raisePow(2,4));