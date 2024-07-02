document.addEventListener('DOMContentLoaded', function() {
    const showDescriptionButtons = document.querySelectorAll('.show-description');
    showDescriptionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const descriptionText = this.nextElementSibling;
            const productSeller = this.closest('.product-info').querySelector('.product-seller');

            if (descriptionText.style.display === 'none' || descriptionText.style.display === '') {
                descriptionText.style.display = 'block';
                productSeller.style.display = 'block';
                this.textContent = 'Hide Description';
            } else {
                descriptionText.style.display = 'none';
                productSeller.style.display = 'none';
                this.textContent = 'Show Description';
            }
        });
    });
});
