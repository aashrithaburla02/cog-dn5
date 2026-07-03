
/* ================= 1. BASIC SETUP ================= */

console.log("Community Portal Loaded");

window.addEventListener("load", () => {
    alert("Welcome User!");
});


/* ================= 2. VARIABLES ================= */

const portalName = "City Events";
const portalDate = "2026-07-01";
let availableSeats = 20;

console.log(`${portalName} | ${portalDate} | Seats: ${availableSeats}`);


/* ================= 3. EVENT DATA ================= */

let eventList = [
    { id: 101, title: "Jazz Night", type: "music", seats: 4 },
    { id: 102, title: "AI Workshop", type: "tech", seats: 6 },
    { id: 103, title: "Rock Concert", type: "music", seats: 2 }
];


/* ================= 4. DISPLAY EVENTS ================= */

function renderEvents(data) {

    const box = document.querySelector("#events");
    box.innerHTML = "";

    data.forEach(ev => {

        if (ev.seats > 0) {

            let card = document.createElement("div");

            card.innerHTML = `
                <h3>${ev.title}</h3>
                <p>Category: ${ev.type}</p>
                <p>Seats Left: ${ev.seats}</p>
                <button onclick="bookEvent(${ev.id})">Book</button>
            `;

            box.appendChild(card);
        }
    });
}


/* ================= 5. CLOSURE ================= */

function counter() {
    let count = 0;
    return () => ++count;
}

const bookingCounter = counter();


/* ================= 6. BOOK EVENT ================= */

function bookEvent(id) {

    try {

        let selected = eventList.find(e => e.id === id);

        if (!selected || selected.seats === 0) {
            throw "Event Full";
        }

        selected.seats--;
        bookingCounter();

        document.getElementById("status").innerText = "Booking Confirmed";

        renderEvents(eventList);

    } catch (e) {
        console.log("Error:", e);
    }
}


/* ================= 7. ARRAY METHODS ================= */

let musicOnly = eventList.filter(e => e.type === "music");

let names = eventList.map(e => e.title.toUpperCase());

console.log(names);


/* ================= 8. DOM + INITIAL LOAD ================= */

renderEvents(eventList);


/* ================= 9. EVENTS ================= */

document.querySelector("#filter").onchange = (e) => {

    let val = e.target.value;

    let filtered = (val === "all")
        ? eventList
        : eventList.filter(e => e.type === val);

    renderEvents(filtered);
};


document.querySelector("#search").addEventListener("keydown", (e) => {

    let text = e.target.value.toLowerCase();

    let result = eventList.filter(ev =>
        ev.title.toLowerCase().includes(text)
    );

    renderEvents(result);
});


/* ================= 10. ASYNC ================= */

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve(eventList), 1200);
    });
}

async function loadData() {
    console.log("Loading events...");
    let data = await fetchData();
    console.log("Data received:", data);
}

loadData();


/* ================= 11. MODERN JS ================= */

const copyList = [...eventList];

function greetUser(name = "Guest") {
    return `Hello ${name}`;
}

let { title, type } = eventList[0];
console.log(title, type);


/* ================= 12. FORM HANDLING ================= */

document.querySelector("#form").addEventListener("submit", function (e) {

    e.preventDefault();

    let f = e.target.elements;

    let user = {
        name: f.username.value,
        email: f.useremail.value,
        event: f.eventPick.value
    };

    if (!user.name || !user.email) {
        document.getElementById("status").innerText = "Fill all fields";
        return;
    }

    document.getElementById("status").innerText = "Registered!";
});


/* ================= 13. FETCH API ================= */

function send(user) {

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => console.log("Sent:", data))
    .catch(err => console.log(err));
}


/* ================= 14. JQUERY ================= */

$("#submitBtn").click(() => {
    $("#status").fadeIn().text("Processing...");
});

$("#events").fadeIn();