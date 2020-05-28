function changeTitleCSSStyle(a) {

    alert("hello")
    var title = document.querySelector("#mainTitle");
    title.style.color = 'black';
    title.style.backgroundColor = a;
    document.body.style.background = a;


}

function validateForm() {

    var firstName = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["lname"].value;
    var myAge = document.forms["myForm"]["age"].value;
    var letters = /^[A-Za-z]+$/;
    alert("Starting");
    if (firstName == "") {
        // pop up messege

        alert("First Name must be filled out");

        return false;
    } else if (!firstName.match(letters)) {
        alert("Please only enter letters in the text box for First Name.");
        return false;

    } else if (lastName == "") {
        // pop up messege
        alert("Last Name must be filled out");
        return false;

    } else if (!lastName.match(letters)) {
        alert("Please only enter letters in the text box for Last Name.");
        return false;

    } else if (myAge == "") {
        alert("Age must be filled out");
        return false;


    }
    // checking to see if the values in myAge are not numbers
    // probaly should change this a bit to look for positive numbers as well
    else if (isNaN(myAge) || myAge < 0 || myAge > 100) {
        alert("Please enter a positive number.");
        return false;
    }

    // checking if one of the buttons are selected
    else if ((document.getElementById("Red").checked == false) && (document.getElementById("Blue").checked == false) && (document.getElementById("OtherColor").checked == false) && (document.getElementById("Green").checked == false)) {
        // pop up messege
        alert("Select a color");
        alert("Select a color");
        return false;

    } else {
        alert("Thanks for completing the form");
        return true;

    }
}