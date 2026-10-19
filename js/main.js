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

const formFields = orderForm.querySelectorAll("input, textarea");

formFields.forEach((field) => {
    field.addEventListener("invalid", () => {
        field.setAttribute("aria-invalid", "true");
    });

    field.addEventListener("input", () => {
        if (field.checkValidity()) {
            field.removeAttribute("aria-invalid");
        }
    });
});

orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
    }

    alert("Заявка отправлена!")

    orderForm.reset();

    orderForm.reset();

    formFields.forEach((field) => {
        field.removeAttribute("aria-invalid");
    });
    dialog.close();
})