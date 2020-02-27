let weekDayNumber = 5
let message = null

switch (weekDayNumber) {
    case value: 1
    message = "Today is Monday"
        break;
    case value: 2
    message = "Today is Tuesday"
        break;
    case value: 3
    message = "Today is Wednesday"
        break;
    case value: 4
    message = "Today is Thursday"
        break;
    case value: 5
    message = "Today is Friday"
        break;
    case value: 6 
    message = "Today is Saturday"    
        break;
    case value: 7
    message = "Today is Sunday"
        break;

    default: 
    message = "Error: Please input a number bettwen 1 and 7"
        break;

        console.log(message)

}