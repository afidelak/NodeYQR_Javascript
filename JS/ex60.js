const grade = 9;

if (grade >= 9 && grade <= 10) {
  console.log("Great Work!");
} else if (grade < 9 && grade >= 6) {
  console.log("You've Done It!");
} else if (grade >= 0 && grade < 6) {
  console.log("Please try all exercises again");
} else {
  console.log("Silly Rabbit, that's not a grade!");
}
