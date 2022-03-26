// Who's buying lunch? Code Challenge
// Create a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
// Important: The output should e returned from the function and you don not need alert, prompt or console.log. The output should match the example output exactly, including capitalization and punctuation.

// Example Input: 
//     ["Anjela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output:
//     Michael is going to buy lunch today!

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + "is going to buy lunch today!";
    
}