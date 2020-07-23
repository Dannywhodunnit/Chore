// Your code here!
// Your code here!
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    object.email = email;
    object.phone = phone;
    obj.greeting = function () {
        alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;


    //Function To Display Popup
    function div_show() {
        document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide() {
        document.getElementById('abc').style.display = "none";
    }

    function createNewPerson(name) {
        const obj = {};
        obj.name = name;
        obj.age = age;
        object.email = email;
        object.phone = phone;
    };
    return obj;


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