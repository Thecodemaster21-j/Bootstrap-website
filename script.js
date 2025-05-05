// a little feedback code that shows up in the console when you insepct the page
let feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}
console.log(addFeedback("Great website!")); // ["Great website!"]
// A mock email validate that shows true in the console
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true
// dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function mockLogin() {
  alert("Logged in as Demo User!");
}
