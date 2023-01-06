let form = document.querySelector("form");
console.log(form)
form.addEventListener("submit", function (event) {

    event.preventDefault()

    console.log("submitted")

    let fname = document.querySelector("#firstName")

    console.log(fname.value.length)

    if (fname.value.length < 2) {

        let fmessage = document.querySelector("#fname_text")

        fmessage.style.display = "block";

        fmessage.innerText = "first name is short";

    } else {



        let fmessage = document.querySelector("#fname_text")

        fmessage.style.display = "none";

    }
    let sname = document.querySelector("#secondName")

    console.log(sname.value.length)

    if (sname.value.length < 2) {

        let smessage = document.querySelector("#sname_text")

        smessage.style.display = "block";

        smessage.innerText = "second name is short";

    } else {



        let smessage = document.querySelector("#sname_text")

        smessage.style.display = "none";

    }
    let email = document.querySelector("#email")

    console.log(email.value.length)

    if (email.value.length < 8) {

        let emessage = document.querySelector("#email_txt")

        emessage.style.display = "block";

        emessage.innerText = "Email must be graeter than 8 characters";

    } else {



        let emessage = document.querySelector("#email_txt")

        emessage.style.display = "none";

    }
    let password = document.querySelector("#pass")

    console.log(password.value.length)

    if (password.value.length < 8) {

        let pmessage = document.querySelector("#pass_text")

        pmessage.style.display = "block";

        pmessage.innerText = "password must be graeter than 8 characters";

    } else {



        let pmessage = document.querySelector("#pass_text")

        pmessage.style.display = "none";

    }

})