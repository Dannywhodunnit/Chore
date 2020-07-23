// Your code here!
// Your code here!


    //create new object members of the house from form input
    function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    object.email = email;
    object.phone = phone;
    obj.greeting = function () {
        alert('Welcome ' + obj.name + '!');
    };
    return obj;


    //creat an array of chore objects
    var chores = new Array("Clean Kitchen", "Clean Living Room", "Clean Kitchen", "Cat Litter", "Wash Dishes", "Laundry");


    //create a randomizer for the array to assign
    function shuffle(chores) {
        var currentIndex = chores.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };


    
    chores.addEventListener("click", shuffle(chores))






    //Function To Display Popup
    function div_show() {
        document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide() {
        document.getElementById('abc').style.display = "none";
    }


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
}