// Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// Smooth Scrolling Function
function scrollToBooking() {
    const bookingForm = document.getElementById("booking");

    bookingForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    showToast("Please fill in the booking form!");
}


// Display All Bookings
function displayBookings() {
    const bookingDetails = document.getElementById("bookingDetails");

    // Get all bookings from localStorage
    let bookings = JSON.parse(localStorage.getItem("iplBookings")) || [];

    if (bookings.length === 0) {
        bookingDetails.innerHTML = "<p>No bookings yet.</p>";
        return;
    }

    let output = "<h3>Your Bookings</h3>";

    bookings.forEach(function (booking, index) {
        output += `
            <div class="booking-card">
                <h4>Booking ${index + 1}</h4>
                <p><strong>Name:</strong> ${booking.name}</p>
                <p><strong>Match:</strong> ${booking.match}</p>
                <p><strong>Tickets:</strong> ${booking.tickets}</p>
            </div>
        `;
    });

    bookingDetails.innerHTML = output;
}


// Main JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Book Ticket Buttons
    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            scrollToBooking();
        });
    });


    // Booking Form Submission
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const match = document.getElementById("match").value;
        const tickets = document.getElementById("tickets").value;

        const booking = {
            name: name,
            match: match,
            tickets: tickets
        };

        // Get existing bookings
        let bookings = JSON.parse(localStorage.getItem("iplBookings")) || [];

        // Add new booking to the array
        bookings.push(booking);

        // Save all bookings
        localStorage.setItem("iplBookings", JSON.stringify(bookings));

        // Display all bookings
        displayBookings();

        showToast("Booking confirmed successfully!");

        form.reset();
    });


    // Display previous bookings when page loads
    displayBookings();

});