// owl owlCarousel
$('.car-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
});
$('.testimonal_grid').owlCarousel({
    nav: false,
    items: 1,
    loop: true,
    center: true,
    margin: 0,
    lazyLoad: true,
})

// toggle class
document.querySelector(".menuIcon").addEventListener("click", () => {
    let menu = document.querySelector('.nav_menu');
    menu.classList.toggle('active');
});
document.getElementById("need_new_location").addEventListener("click", () => {
    let menu = document.getElementById('new_dropOff_location');
    menu.classList.toggle('hide');
});


// reserve date range
document.getElementById("pickup_date").addEventListener("change", () => {
    let pickUp = document.getElementById("pickup_date");
    let pickOff = document.getElementById("pickoff_date");
    pickOff.value = pickUp.value;
    pickOff.min = pickUp.value;
});

// car reservation check
let reservationFormatCheck = () => {
    let vehical_Type, city_1, city_2, pickup_date, pickup_time, pickoff_date, pickoff_time;
    vehical_Type = document.getElementById("vehicle_Type");
    city_1 = document.getElementById("city")
    city_2 = document.getElementById("another_city")
    pickup_date = document.getElementById("pickup_date")
    pickup_time = document.getElementById("pickup_time")
    pickoff_date = document.getElementById("pickoff_date")
    pickoff_time = document.getElementById("pickoff_time")
    if (vehical_Type.value != "" && city_1.value != "" && pickup_date.value != "" && pickup_time.value != "" && pickoff_date.value != "" && pickoff_time.value != "") {
        vehical_Type.style.borderColor = "lightgray";
        city_1.style.borderColor = "lightgray"
        city_2.style.borderColor = "lightgray"
        pickup_date.style.borderColor = "lightgray"
        pickup_time.style.borderColor = "lightgray"
        pickoff_date.style.borderColor = "lightgray"
        pickoff_time.style.borderColor = "lightgray"
    } else {
        var allField = new Array,
            field = new Array,
            emptyField = new Array,
            filterField = new Array;

        allField.push(vehical_Type, city_1, city_2, pickup_date, pickup_time, pickoff_date, pickoff_time)

        for (var i = 0; i < allField.length; i++) {
            field.push(allField[i])
            if (allField[i].value.trim() == "") {
                allField[i].style.borderColor = "red"
                emptyField.push(allField[i])

            } else {
                allField[i].style.borderColor = "lightgray"
                filterField.push(allField[i])
            }
        }
    }
};

// vehical model
const car_model = [{
        id: 1,
        name: "VW Golf VII",
        model: "Limousine",
        doors: 6,
        seats: 7,
        luggage: "3 Suitcases / 3 Bags",
        transmition: "Automatic",
        air_condition: "yes",
        vehicale_age: "25 years",
        image_URL: "images/vehicle1.jpg",
        rent_price: "$ 40.00"
    },
    {
        id: 2,
        name: "Audi A1 S-LINE",
        model: "Suzuki Alto",
        doors: 4,
        seats: 4,
        luggage: "2 Suitcases / 2 Bags",
        transmition: "manual",
        air_condition: "No",
        vehicale_age: "13 years",
        image_URL: "images/vehicle2.jpg",
        rent_price: "$ 15.40"
    },
    {
        id: 3,
        name: "Toyota Camry",
        model: "Toyota Yaris",
        doors: 2,
        seats: 4,
        luggage: "1 Suitcases / 1 Bags",
        transmition: "manual",
        air_condition: "yes",
        vehicale_age: "2 years",
        image_URL: "images/vehicle3.jpg",
        rent_price: "$ 20.00"
    },
    {
        id: 4,
        name: "BMW 320 ModernLine",
        model: "Toyota Corolla",
        doors: 6,
        seats: 7,
        luggage: "1 Suitcases / 2 Bags",
        transmition: "Automatic",
        air_condition: "No",
        vehicale_age: "5 years",
        image_URL: "images/vehicle4.jpg",
        rent_price: "$ 35.00"
    },
    {
        id: 5,
        name: "Mercedes-Benz GLK",
        model: "Suzuki Cultus",
        doors: 4,
        seats: 5,
        luggage: "4 Suitcases / 4 Bags",
        transmition: "manual",
        air_condition: "yes",
        vehicale_age: "15 years",
        image_URL: "images/vehicle5.jpg",
        rent_price: "$ 40.00"
    },
    {
        id: 6,
        name: "VW Passat CC",
        model: "Suzuki WagonR",
        doors: 2,
        seats: 4,
        luggage: "5 Suitcases / 5 Bags",
        transmition: "Automatic",
        air_condition: "No",
        vehicale_age: "20 years",
        image_URL: "images/vehicle6.jpg",
        rent_price: "$ 30.00"
    }
]

let rs_vehical_image = document.getElementById("vehical_Image");
let rs_vehical_price = document.getElementById("vehical_Rent_Price");
let rs_vehical_model = document.getElementById("vehical_Model");
let rs_vehical_doors = document.getElementById("vehical_Doors");
let rs_vehical_seats = document.getElementById("vehical_Seats");
let rs_vehical_luggage = document.getElementById("vehical_Luggage");
let rs_vehical_transmission = document.getElementById("vehical_Transmission");
let rs_vehical_airCondition = document.getElementById("vehical_Air_Condition");
let rs_vehical_age = document.getElementById("vehical_Age");

document.getElementById("vehical_Selector").addEventListener("change", ele => {
    vehical_Model(ele.currentTarget)
});

let vehical_Model = e => {
    let dropdown = e.value;
    let car_Name = e.innerText;
    if (car_Name == "VW Golf VII" || dropdown == "VW Golf VII") {
        let car_Detail = car_model[0]
        rs_vehical_image.src = car_Detail.image_URL;
        rs_vehical_price.innerText = car_Detail.rent_price;
        rs_vehical_model.innerText = car_Detail.model;
        rs_vehical_doors.innerText = car_Detail.doors;
        rs_vehical_seats.innerText = car_Detail.seats;
        rs_vehical_luggage.innerText = car_Detail.luggage;
        rs_vehical_transmission.innerText = car_Detail.transmition;
        rs_vehical_airCondition.innerText = car_Detail.air_condition;
        rs_vehical_age.innerText = car_Detail.vehicale_age;

    } else if (car_Name == "Audi A1 S-LINE" || dropdown == "Audi A1 S-LINE") {
        let car_Detail = car_model[1]
        rs_vehical_image.src = car_Detail.image_URL;
        rs_vehical_price.innerText = car_Detail.rent_price;
        rs_vehical_model.innerText = car_Detail.model;
        rs_vehical_doors.innerText = car_Detail.doors;
        rs_vehical_seats.innerText = car_Detail.seats;
        rs_vehical_luggage.innerText = car_Detail.luggage;
        rs_vehical_transmission.innerText = car_Detail.transmition;
        rs_vehical_airCondition.innerText = car_Detail.air_condition;
        rs_vehical_age.innerText = car_Detail.vehicale_age;

    } else if (car_Name == "Toyota Camry" || dropdown == "Toyota Camry") {
        let car_Detail = car_model[2]
        rs_vehical_image.src = car_Detail.image_URL;
        rs_vehical_price.innerText = car_Detail.rent_price;
        rs_vehical_model.innerText = car_Detail.model;
        rs_vehical_doors.innerText = car_Detail.doors;
        rs_vehical_seats.innerText = car_Detail.seats;
        rs_vehical_luggage.innerText = car_Detail.luggage;
        rs_vehical_transmission.innerText = car_Detail.transmition;
        rs_vehical_airCondition.innerText = car_Detail.air_condition;
        rs_vehical_age.innerText = car_Detail.vehicale_age;

    } else if (car_Name == "BMW 320 ModernLine" || dropdown == "BMW 320 ModernLine") {
        let car_Detail = car_model[3]
        rs_vehical_image.src = car_Detail.image_URL;
        rs_vehical_price.innerText = car_Detail.rent_price;
        rs_vehical_model.innerText = car_Detail.model;
        rs_vehical_doors.innerText = car_Detail.doors;
        rs_vehical_seats.innerText = car_Detail.seats;
        rs_vehical_luggage.innerText = car_Detail.luggage;
        rs_vehical_transmission.innerText = car_Detail.transmition;
        rs_vehical_airCondition.innerText = car_Detail.air_condition;
        rs_vehical_age.innerText = car_Detail.vehicale_age;

    } else if (car_Name == "Mercedes-Benz GLK" || dropdown == "Mercedes-Benz GLK") {
        let car_Detail = car_model[4]
        rs_vehical_image.src = car_Detail.image_URL;
        rs_vehical_price.innerText = car_Detail.rent_price;
        rs_vehical_model.innerText = car_Detail.model;
        rs_vehical_doors.innerText = car_Detail.doors;
        rs_vehical_seats.innerText = car_Detail.seats;
        rs_vehical_luggage.innerText = car_Detail.luggage;
        rs_vehical_transmission.innerText = car_Detail.transmition;
        rs_vehical_airCondition.innerText = car_Detail.air_condition;
        rs_vehical_age.innerText = car_Detail.vehicale_age;

    } else if (car_Name == "VW Passat CC" || dropdown == "VW Passat CC") {
        let car_Detail = car_model[5]
        rs_vehical_image.src = car_Detail.image_URL;
        rs_vehical_price.innerText = car_Detail.rent_price;
        rs_vehical_model.innerText = car_Detail.model;
        rs_vehical_doors.innerText = car_Detail.doors;
        rs_vehical_seats.innerText = car_Detail.seats;
        rs_vehical_luggage.innerText = car_Detail.luggage;
        rs_vehical_transmission.innerText = car_Detail.transmition;
        rs_vehical_airCondition.innerText = car_Detail.air_condition;
        rs_vehical_age.innerText = car_Detail.vehicale_age;

    }
}

// vehical model arror action
const moveUp = () => {
    var move = document.getElementById("vehical_model_wrapper");
    move.scrollTop -= 65
};
const moveDown = () => {
    var move = document.getElementById("vehical_model_wrapper");
    move.scrollTop += 65
};

// theme change
document.getElementById("themePicker").addEventListener("click", () => {
    let menu = document.querySelector('.themeWrapper');
    menu.classList.toggle('themeWrapper_active');
})

const themeChange = colorPicker => {
    let red, yellow, green, logo, rootColor;
    red = document.querySelector(".red");
    yellow = document.querySelector(".yellow");
    green = document.querySelector(".green");
    logo = document.getElementById("logoImage");
    rootColor = document.querySelector(":root")

    if (colorPicker.classList[1] == "red") {
        logo.src = "images/logo-red.gif"
        rootColor.style.setProperty('--logoColor', '#c61334');
        rootColor.style.setProperty('--hero_Background', 'linear-gradient(to bottom, #303131 0%, #4d4f4f 50%, #303131 100%)');
        rootColor.style.setProperty('--arrowColor', '#303131');
        rootColor.style.setProperty('--lightLogo', '#303131');
    } else if (colorPicker.classList[1] == "yellow") {
        logo.src = "images/logo-yellow.gif"
        rootColor.style.setProperty('--logoColor', '#ffbf00');
        rootColor.style.setProperty('--hero_Background', 'linear-gradient(to bottom, #ffbf00 0%, #fcd45f 50%, #ffbf00 100%)');
        rootColor.style.setProperty('--arrowColor', '#ffbf00');
        rootColor.style.setProperty('--lightLogo', '#ffbf008a');
    } else {
        logo.src = "images/logo-green.gif"
        rootColor.style.setProperty('--logoColor', '#088c18');
        rootColor.style.setProperty('--hero_Background', 'linear-gradient(to bottom, #d2dbd2 0%, #e1e8e1 50%, #d2dbd2 100%)');
        rootColor.style.setProperty('--arrowColor', '#d2dbd2');
        rootColor.style.setProperty('--lightLogo', '#088c1863');
    }
}

// contact form submit
const contactFormSubmit = () => {
    let firstName, lastName, phoneNumber, emailId, textArea;

    firstName = document.getElementById("first_name");
    lastName = document.getElementById("last_name");
    phoneNumber = document.getElementById("telephone");
    emailId = document.getElementById("email");
    textArea = document.getElementById("message");

    // all field value check
    const validArray = new Array;
    const emptyArray = new Array;

    validArray.push(firstName, lastName, phoneNumber, emailId, textArea);
    for (var i = 0; i < validArray.length; i++) {
        if (validArray[i].value.trim() == "") {
            emptyArray.push(validArray[i]);
            validArray[i].style.border = "2px solid red";
        } else {
            console.log("fields are not empty.")
            validArray[i].style.border = "lightgray";
        }
    }
    // email validation
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.value)) {
        emailId.style.border = "lightgray";
    } else {
        emailId.style.border = "2px solid red";
    }
}

function numberFieldCheck(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

const emailValidation = () => {
    let emailAddress = document.getElementById("emailAddress");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) {
        emailAddress.style.border = "lightgray";
    } else {
        emailAddress.style.border = "2px solid red";
    }
}