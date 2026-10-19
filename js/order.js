
const checkoutForm = document.querySelector("#checkout-form");
const productSelect = document.querySelector("#product-select");
const checkoutMessage = document.querySelector("#checkout-message");

// Получаем товар из адреса страницы
const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

const availableProducts = ["buds-fe", "dm4-evo", "akko3098n"];

if (availableProducts.includes(productId)) {
    productSelect.value = productId;
}

// Находим все поля формы
const checkoutFields = checkoutForm.querySelectorAll(
    "input, select, textarea"
);

// Проверяем правильность заполнения
checkoutFields.forEach((field) => {
    field.addEventListener("invalid", () => {
        field.setAttribute("aria-invalid", "true");
    });

    field.addEventListener("input", () => {
        if (field.checkValidity()) {
            field.removeAttribute("aria-invalid");
        }

        checkoutMessage.hidden = true;
    });

    field.addEventListener("change", () => {
        if (field.checkValidity()) {
            field.removeAttribute("aria-invalid");
        }

        checkoutMessage.hidden = true;
    });
});

// Обработка отправки формы
checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!checkoutForm.reportValidity()) {
        return;
    }

    // Очищаем форму после проверки
    checkoutForm.reset();

    // Удаляем визуальные отметки ошибок
    checkoutFields.forEach((field) => {
        field.removeAttribute("aria-invalid");
    });

    // Показываем сообщение об успехе
    checkoutMessage.hidden = false;
});

// Обработка кнопки "Очистить форму"
checkoutForm.addEventListener("reset", () => {
    checkoutMessage.hidden = true;

    checkoutFields.forEach((field) => {
        field.removeAttribute("aria-invalid");
    });
});
