function getData() {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let gender = document.querySelector('#gender').value;
    let highestQualification = document.querySelector('#highest-qualification').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password');

    localStorage.setItem("firsName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("gender", gender);
    localStorage.setItem("highest-qualification", highestQualification);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}