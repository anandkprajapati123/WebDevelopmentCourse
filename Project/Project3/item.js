document.addEventListener('DOMContentLoaded', function() {
    // Select all "Order Now!" links
    const orderLinks = document.querySelectorAll('.card_item .lines p:last-child a');
    orderLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const foodName = link.closest('.lines').querySelector('.caption').textContent;
            alert('You have ordered: ' + foodName);
        });
    });
});