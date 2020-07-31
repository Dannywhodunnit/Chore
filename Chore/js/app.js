// Your code here!
// Your code here!


    //create new object members of the house from form input
function createNewPerson(person) {
    var person = {};
    person.name = name;
    person.age = age;
    person.email = email;
    person.phone = phone;
};


//clear form after submitting
document.getElementById("form").reset();

//first attempt at displaying form input as a person in the "output" div
//document.querySelector('.output').innerHTML = createNewPerson;


//second attempt to display form input to the people div
document.getElementById('submit').onclick = function showNewPerson() {
    document.getElementById('people').innerHTML =
        `Name: ${person.nameInput}`,
        `Age: ${person.ageInput}`,
        `Email: ${person.emailInput}`,
        `Phone: ${person.phoneInput}`
};

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");




    //creat an array of chore objects
    const chores = ['Clean Kitchen', 'Clean Living Room', 'Clean Kitchen', 'Cat Litter', 'Wash Dishes', 'Laundry'];

    //display the chores
    var choreList = JSON.stringify(chores);
    //document.getElementById("choreDisplay").innerHTML = choreList;

    //create a randomizer for the array to assign
    function shuffle(chores) {
        var currentIndex = chores.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = chores[currentIndex];
            chores[currentIndex] = chores[randomIndex];
            chores[randomIndex] = temporaryValue;
        }

        return chores;
    };


    //Run the array randomizer on the click event
    //chores.addEventListener("click", shuffle(chores))



    //Regex validation
    //validate email
    function ValidateEmail(emailInput) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailInput.value.match(mailformat)) {
            document.form1.text1.focus();
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }
    };

    //validate phone number
    function phonenumber(phoneInput) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneInput.value.match(phoneno)) {
            return true;
        }
        else {
            alert("Not a valid Phone Number");
            return false;
        }
};

function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
        element.style.display = "inherit";
    } else {
        element.style.display = "none";
    }
}

function createListener(validator) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip);
    };
}

emailInput.addEventListener("input", createListener(isValidEmail));

telephoneInput.addEventListener("input", createListener(isValidTelephone));




//create a test person
var person = {
    person: name = 'Steve',
    person: age = 20,
    person: email = 'steve@test.com',
    person: phone = 123 - 456 - 7891,
};

//display test person
var houseMembers = JSON.stringify(person);
print.getElementById("people").innerHTML = houseMembers;

