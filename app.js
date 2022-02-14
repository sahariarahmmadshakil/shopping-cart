function updateProductNumber(product, isIncreasing, price, prices) {
    const ProductInput = document.getElementById(product);
    let productNumber = ProductInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    ProductInput.value = productNumber;
    // update total case 
    const productTotal = document.getElementById(
        prices);
    productTotal.innerText = productNumber * price;
    // update total price cart

}

// Case Input Value Added 
document.getElementById('case-plus').addEventListener('click',
    function() {
        updateProductNumber('case-number',
            true, 59, 'case-total');
    })

// case Minus 
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case-number', false, 59, 'case-total');

});

// Phone Plus 
document.getElementById('phone-plus').addEventListener('click', function() {
        updateProductNumber('phone-number', true, 1219, 'phone-total');
    })
    // phone Minus 
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone-number', false, 1219, 'phone-total');
})

// Total Calculation