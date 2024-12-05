const requiredInputs = document.querySelectorAll('#contact input[required], #contact textarea[required]');

requiredInputs.forEach((input) => {
    // when the user leaves the input field
    input.addEventListener('blur', () => {
        // check if the input is empty
        if (!input.value.trim()) {
            input.style.border = '2px solid red';
        }
    });

    // when the user enters the input field
    input.addEventListener('focus', () => {
        input.style.border = '';
    });
});