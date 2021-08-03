const imgLimit = 1048576; // в байтах
const correctImgExtension = "png"; 

const firstNameError = document.getElementById('firstname-error');
const lastNameError = document.getElementById('lastname-error');
const mailError = document.getElementById('mail-error');
const ageError = document.getElementById('age-error');
const passwordError = document.getElementById('password-error');
const avatarError = document.getElementById('avatar-error');

const registerButton = document.getElementById('register-btn');

function Validate(){

    let result = true;

    const firstName = document.querySelector("input[name='firstName']").value;
    const lastName = document.querySelector("input[name='lastName']").value;
    const mail = document.querySelector("input[name='mail']").value;
    const age = document.querySelector("input[name='age']").value;
    const password = document.querySelector("input[name='pass']").value;
    const avatar = document.querySelector("input[name='avatar']").value;

    if(!firstName){

        result = false;
        firstNameError.style.visibility = "visible";
    }

    if(!lastName){

        result = false;
        lastNameError.style.visibility = "visible";
    }

    if(!validateEmail(mail)){

        result = false;
        mailError.style.visibility = "visible";
    }

    if(!Number.isInteger(parseInt(age)) || parseInt(age) > 100 || parseInt(age) < 6){

        result = false;
        ageError.style.visibility = "visible";
    }

    if(!validatePassword(password)){

        result = false;
        passwordError.style.visibility = "visible";
    }

    if(!avatar || (this.validateAvatarSize(avatar) >= imgLimit) || validateAvatarExtension(avatar) != correctImgExtension){

        result = false;
        avatarError.style.visibility = "visible";
    }

    return result;
}

function validateEmail(str){

    const validMailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validMailRegex.test(String(str).toLowerCase());
}

function validatePassword(str){

    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return validPasswordRegex.test(String(str));
}

function validateAvatarSize(imgURL){

    var request = new XMLHttpRequest();
    request.open("HEAD", imgURL, false);
    request.send(null);

    var headerText = request.getAllResponseHeaders();
    var regular = /Content\-Length\s*:\s*(\d+)/i;
    regular.exec(headerText);
    
    return parseInt(RegExp.$1)
}

function validateAvatarExtension(imgURL){

    var basename = imgURL.split(/[\\/]/).pop();
    var position = basename.lastIndexOf(".");

    if(basename === "" || position < 1) return "";

    return basename.slice(position+1);
}

var checkButton = document.getElementById('check');
checkButton .addEventListener("click", function(e){

    e.preventDefault();

    if(Validate()){
        registerButton.disabled = false;
        clearErrors();
    }
});

var registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener("click", function(e){
    alert("You have done all in a right way!");
})

function clearErrors(){

    firstNameError.style.visibility = "hidden";
    lastNameError.style.visibility = "hidden";
    mailError.style.visibility = "hidden";
    ageError.style.visibility = "hidden";
    passwordError.style.visibility = "hidden";
    avatarError.style.visibility = "hidden";
}
