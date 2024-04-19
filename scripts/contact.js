/* Name: Davonte McLean */
// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submit = document.getElementById("submit-button");
const pageContent = document.getElementById("contact-page");

submit.addEventListener('click', function() {
    pageContent.style.fontSize = "24px";
    const confirmMsg = "<p>Thank you for your message!</p>";
    pageContent.innerHTML = confirmMsg;
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

