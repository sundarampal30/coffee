let selectedCoffee = "";
let selectedPrice = 0;

function selectCoffee(name, price) {
    selectedCoffee = name;
    selectedPrice = price;

    document.getElementById("coffeeName").value = name;
    document.getElementById("coffeePrice").value = "₹" + price;

    calculateTotal();

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });
}

function calculateTotal() {
    let quantity = Number(document.getElementById("quantity").value);

    if (quantity < 1 || isNaN(quantity)) {
        quantity = 1;
        document.getElementById("quantity").value = 1;
    }

    let total = selectedPrice * quantity;

    document.getElementById("total").innerText = total;
}

function payNow() {

    if (selectedCoffee === "") {
        alert("☕ Please choose a coffee first!");
        return;
    }

    let quantity = Number(document.getElementById("quantity").value);
    let seat = document.getElementById("seatNumber").value.trim();

    if (seat === "") {
        alert("Please enter Seat / Table Number!");
        return;
    }

    let total = selectedPrice * quantity;

    alert(
        "☕ Order Confirmed!\n\n" +
        "Coffee: " + selectedCoffee + "\n" +
        "Price: ₹" + selectedPrice + "\n" +
        "Quantity: " + quantity + "\n" +
        "Table: " + seat + "\n\n" +
        "Total: ₹" + total + "\n\n" +
        "💳 Payment Successful!"
    );
}