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

    }, 2000);

}


// Main JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Select Form Controls Using DOM Selectors
    const matchSelect = document.getElementById("match");

    const standSelect = document.querySelector("#stand");

    const quantityInput = document.getElementById("quantity");


    // Select Booking Summary Elements
    const summaryMatch = document.getElementById("summaryMatch");

    const summaryStand = document.getElementById("summaryStand");

    const summaryQuantity = document.getElementById("summaryQuantity");

    const summaryPrice = document.getElementById("summaryPrice");

    const totalPrice = document.getElementById("totalPrice");


    // Ticket Prices
    const ticketPrices = {
        General: 500,
        Premium: 1500,
        VIP: 3000
    };


    // Update Booking Summary Function
    function updateSummary() {

        const selectedMatch = matchSelect.value;

        const selectedStand = standSelect.value;

        const quantity = Number(quantityInput.value);


        // Get Price According to Stand
        const price = ticketPrices[selectedStand] || 0;


        // Calculate Total Price
        const total = price * quantity;


        // Update Booking Summary
        summaryMatch.textContent = selectedMatch || "Not selected";

        summaryStand.textContent = selectedStand || "Not selected";

        summaryQuantity.textContent = quantity;

        summaryPrice.textContent = "₹" + price;

        totalPrice.textContent = "₹" + total;


        // Show Toast When All Details Are Selected
        if (selectedMatch && selectedStand && quantity > 0) {

            showToast("Booking summary updated!");

        }

    }


    // Match Dropdown Change Event
    matchSelect.addEventListener("change", function () {

        updateSummary();

    });


    // Stand Category Change Event
    standSelect.addEventListener("change", function () {

        updateSummary();

    });


    // Ticket Quantity Change Event
    quantityInput.addEventListener("change", function () {

        updateSummary();

    });


    // Update Quantity Instantly While Typing
    quantityInput.addEventListener("input", function () {

        updateSummary();

    });


    // Initial Booking Summary
    updateSummary();

});