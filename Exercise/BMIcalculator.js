// BMI Calculator Challenge
// Create a BMI calculator challenge
// BMI stands for Body Mass index. BMI is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}
console.log(57, 1.55);


// if/else
function bmiCalculator (weight, height) {
    
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight." ;
    } else if (bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
}