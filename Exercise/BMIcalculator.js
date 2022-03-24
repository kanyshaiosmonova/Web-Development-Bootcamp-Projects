// BMI Calculator Challenge
// Create a BMI calculator challenge
// BMI stands for Body Mass index. BMI is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}
console.log(57, 1.55);