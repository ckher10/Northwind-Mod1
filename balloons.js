document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById("dob");
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: "MM-dd",
    });

    // Randomize Greeting
    const greetingElem = document.querySelector(".greeting");
    const animationArr = [
        "animate__bounce",
        "animate__flash",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__shakeY",
        "animate__swing",
        "animate__tada",
        "animate__heartBeat",
    ];
    const getRandomElement = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };
    greetingElem.classList.add(getRandomElement(animationArr))

    // uncheck all boxes by default (Firefox)
    document
        .querySelectorAll(".form-check-input")
        .forEach((c) => (c.checked = false));
    // event listener for check/uncheck
    document
        .getElementById("checkbox-card")
        .addEventListener("change", function (e) {
            if (e.target.classList.contains("form-check-input")) {
                const elem = document.getElementById(e.target.id + "Img");
                elem.style.visibility = "visible";
                elem.classList.remove(
                    "animate__animated",
                    "animate__bounceInDown",
                    "animate__bounceOutUp"
                );
                e.target.checked
                    ? elem.classList.add("animate__animated", "animate__bounceInDown")
                    : elem.classList.add("animate__animated", "animate__bounceOutUp");
            }
        });

    // Trigger toast is no balloons are selected
    const toastLiveExample = document.getElementById('liveToast')
    const colorCheckBoxes = document
        .querySelectorAll(".form-check-input")
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    document.getElementById("balloonForm").addEventListener("submit", function (e) {
        e.preventDefault()
        if (!Array.from(colorCheckBoxes).some(box => box.checked)) {
            toastBootstrap.show()
        }
    })

    const balloonImgs = document.querySelectorAll(".ball")

    // Add all balloons
    document.getElementById("addAll").addEventListener("click", (e) => {
        colorCheckBoxes.forEach(box => box.checked = true)
        balloonImgs.forEach(balloon => {
            balloon.style.visibility = "visible";
            balloon.classList.remove(
                "animate__animated",
                "animate__bounceInDown",
                "animate__bounceOutUp"
            );
            balloon.classList.add("animate__animated", "animate__bounceInDown")
        })
    })

    // Remove all balloons
    document.getElementById("removeAll").addEventListener("click", (e) => {
        colorCheckBoxes.forEach(box => box.checked = false)
        balloonImgs.forEach(balloon => {
            balloon.classList.remove(
                "animate__animated",
                "animate__bounceInDown",
                "animate__bounceOutUp"
            );
            balloon.classList.add("animate__animated", "animate__bounceOutUp")
        })
    })

    // Change color on hover
    document.querySelectorAll(".check-container").forEach(box => {
        box.addEventListener("mouseover", (e) => {
            greetingElem.style.color = e.target.control.id
        })
        box.addEventListener("mouseout", (e) => {
            greetingElem.style.color = "black"
        })
    })
});
