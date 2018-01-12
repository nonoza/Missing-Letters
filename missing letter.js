function MissingLetter(str){

//Looping through the characters

for(var i = 0; i <str.length;i++){

//code of current character which is a.

var code = str.charCodeAt(i);

//If the code of the first character is not equal to the first character plus the iteration.

if(code !== str.charCodeAt(0) + i){


//Find the character and return it

return String.fromCharCode(code -1);

   
 }


}

//Return undefined

     return undefined;


  };
 
MissingLetter("stvy");