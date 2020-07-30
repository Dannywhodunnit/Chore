// Your code here!
// Your code here!


    //create new object members of the house from form input
function createNewPerson(person) {
    var person = {};
    person.name = name;
    person.age = age;
    person.email = email;
    person.phone = phone;
    person.greeting = function () {
        alert('Welcome ' + obj.name + '!');
        return obj;
    };
}


//document.querySelector('.output').innerHTML = createNewPerson;

    //creat an array of chore objects
    const chores = ['Clean Kitchen', 'Clean Living Room', 'Clean Kitchen', 'Cat Litter', 'Wash Dishes', 'Laundry'];


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


    
    //chores.addEventListener("click", shuffle(chores))



    //Regex validation
    //validate email
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
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
    function phonenumber(inputtxt) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (inputtxt.value.match(phoneno)) {
            return true;
        }
        else {
            alert("Not a valid Phone Number");
            return false;
        }
     };

var person = {
    person: name = 'Steve',
    person: age = 20,
    person: email = 'steve@test.com',
    person: phone = 123 - 456 - 7891,
};




    //Function To Display Popup
   // function div_show() {
    //    document.getElementById('form').style.display = "block";
    //}
    //Function to Hide Popup
    //function div_hide() {
     //   document.getElementById('form').style.display = "none";
   // }
