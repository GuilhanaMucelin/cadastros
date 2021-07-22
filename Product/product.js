const productForm = document.getElementById('product-form')

productForm.addEventListener('submit', (e) => {
    e.preventDefault(); // não recarrega a página quando o evente acontece
    let productName = document.getElementById('product-name').value;
    let productDescription = document.getElementById('product-description').value;
    let productCod= document.getElementById('product-cod').value;
    let productEstoque = document.getElementById('product-estoque').value;

    let productData = {
        productName,
        productDescription,
        productCod,
        productEstoque,
    }

    let convertproductData = JSON.stringify(productData);

    localStorage.setItem(`product${productCod}`, convertproductData);
})