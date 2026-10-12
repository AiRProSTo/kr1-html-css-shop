const dialog = document.querySelector("#order-dialog");
const orderButton = document.querySelectorAll(".order-button");
const closeButton = document.querySelector("#close-dialog");

orderButton.forEach(button => {
    button.addEventListener("click", () => {
        dialog.showModal();
    });
});

closeButton.addEventListener("click", () =>{
    dialog.close();
});

const orderForm = document.querySelector("#order-form");

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
    }

    alert("Заявка отправлена!")

    orderForm.reset();
    dialog.close();
})