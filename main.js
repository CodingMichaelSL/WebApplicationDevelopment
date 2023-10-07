document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const component = document.getElementById('component').value;
        const quantity = document.getElementById('quantity').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        document.getElementById('summary-component').textContent = component;
        document.getElementById('summary-quantity').textContent = quantity;
        document.getElementById('summary-name').textContent = name;
        document.getElementById('summary-email').textContent = email;

        orderForm.reset();
        orderSummary.style.display = 'block';
    });
});
