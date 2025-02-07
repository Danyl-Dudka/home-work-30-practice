const myForm = document.forms["my_info"];

function printInfo() {
    let myName = myForm["name"].value;

    let namePattern = /^[A-Za-z]{2,}$/
    let resultName = namePattern.test(myName);

    let mySurname = myForm["surname"].value;
    let resultSurname = namePattern.test(mySurname);

    let myDateOfBirth = myForm["date_of_birth"].value;
    let birthDate = new Date(myDateOfBirth);
    let currentDate = new Date();


    let myCity = myForm["cities"].value;

    let streetPatern = /^[0-9]{1,6} [A-Za-z]{2,} st.$/
    let myAddress = myForm["address"].value;
    let resultStreet = streetPatern.test(myAddress);

    let genderElement = document.querySelector('input[name="gender"]:checked');
    let myGender = genderElement ? genderElement.value : null;

    let selectedLanguages = document.querySelectorAll('input[name="languages"]:checked')
    let myLanguages = Array.from(selectedLanguages).map(lang => lang.value).join(", ");

    document.querySelector('.info_label').classList.remove('hidden');
    myForm.classList.add('hidden');

    if (resultName == true) {
        document.querySelector('.your_name').textContent = "Name: " + myName;
    } else {
        alert("You entered your name incorrectly");
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    }

    if (resultSurname == true) {
        document.querySelector('.your_surname').textContent = "Surname: " + mySurname;
    } else {
        alert("You entered your surname incorrectly");
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    }

    if (birthDate > currentDate) {
        alert("You entered your date of birth incorrectly");
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    } else {
        document.querySelector('.your_dateofbirth').textContent = "Date of birth: " + myDateOfBirth;
    }

    if (myGender == null) {
        alert("Gender is not selected");
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    } else {
        document.querySelector('.your_gender').textContent = "Gender: " + myGender;
    }

    if (myCity == -1) {
        alert("You haven't chosen a city")
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    } else {
        document.querySelector('.your_city').textContent = "City: " + myCity;
    }

    if (!myAddress) {
        alert("You have not entered your address")
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    } else if (resultStreet == true) {
        document.querySelector('.your_address').textContent = "Address: " + myAddress;
    } else if (resultStreet == false) {
        alert("Your address is incorrect. Enter the address following the format specified above")
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    }

    if (!myLanguages) {
        alert("Language is not selected")
        document.querySelector('.info_label').classList.add('hidden');
        myForm.classList.remove('hidden');
        return;
    } else {
        document.querySelector('.your_languages').textContent = "Languages: " + myLanguages;
    }
}

document.getElementById("save_id").addEventListener("click", printInfo);