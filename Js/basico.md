* Variaveis
    - var x = 5;
    - let x = 5;
* Arrays
    - const cars = ["Saab", "Volvo", "BMW"];
    - The length property of an array returns the length of an array (the number of array elements).
    - Acess element fruits[0];
    - Add element - fruits.push("Lemon");  // Adds a new element
    - Remove element- fruits.pop();
    - The sort() method sorts an array alphabetically:
* IF
    - if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
* For 
    - for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
    }
*



* Type 
    - typeof "John"                 // Returns "string"
    - typeof 3.14                   // Returns "number"
    - typeof NaN                    // Returns "number"
    - typeof false                  // Returns "boolean"
    - typeof [1,2,3,4]              // Returns "object"
    - typeof {name:'John', age:34}  // Returns "object"
    - typeof new Date()             // Returns "object"
    - typeof function () {}         // Returns "function"
    - typeof myCar                  // Returns "undefined" *
    - typeof null                   // Returns "object"

* Convert text to Json
- let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
- const obj = JSON.parse(text);

