document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let age = document.getElementById("age").value;

    if (age === "") {
        alert("Please enter your age");
    } else if (age < 18) {
        alert("Try again. Age must be 18 or above.");
    } else {
        alert("Good job!");
    }
});
