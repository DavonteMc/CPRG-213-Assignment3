/* Name: Davonte McLean */
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let dayCounter = 0;

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const days = [monday, tuesday, wednesday, thursday, friday];

const clear = document.getElementById("clear-button");

const fullRate = document.getElementById("full");
const halfRate = document.getElementById("half");

// reset values on page load

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener('click', function() {
    const clicked = this.classList.toggle('clicked');
    if (clicked) {
        dayCounter += 1;
        calculate();
    } else {
        dayCounter -= 1;
        calculate();
    }
});

tuesday.addEventListener('click', function() {
    const clicked = this.classList.toggle('clicked');
    if (clicked) {
        dayCounter += 1;
        calculate();
    } else {
        dayCounter -= 1;
        calculate();
    }
});

wednesday.addEventListener('click', function() {
    const clicked = this.classList.toggle('clicked');
    if (clicked) {
        dayCounter += 1;
        calculate();
    } else {
        dayCounter -= 1;
        calculate();
    }
});

thursday.addEventListener('click', function() {
    const clicked = this.classList.toggle('clicked');
    if (clicked) {
        dayCounter += 1;
        calculate();
    } else {
        dayCounter -= 1;
        calculate();
    }
});

friday.addEventListener('click', function() {
    const clicked = this.classList.toggle('clicked');
    if (clicked) {
        dayCounter += 1;
        calculate();
    } else {
        dayCounter -= 1;
        calculate();
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear.addEventListener('click', function() {
    days.forEach(clearALL);
    function clearALL(day) {
        day.classList.remove("clicked");
    }
    fullRate.classList.add("clicked");
    halfRate.classList.remove("clicked");
    dailyRate = 35;
    dayCounter = 0;
    calculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfRate.addEventListener('click', function() {
    dailyRate = 20;
    halfRate.classList.add("clicked");
    fullRate.classList.remove("clicked");
    calculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullRate.addEventListener('click', function() {
    dailyRate = 35;
    fullRate.classList.add("clicked");
    halfRate.classList.remove("clicked");
    calculate();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const weeklyTotal = dailyRate * dayCounter;
    document.getElementById('calculated-cost').innerHTML = weeklyTotal;
}
