const products = [
    {name: "asus laptop", price: 57500},
    {name: "nokia phone", price: 1700},
    {name: "modem LTE", price: 1900},
    {name: "UiiSii Headphone", price: 550},
    {name: "skyblue cap", price: 350}
];

function searchProducts(products, searchText){
    const matched = [];
    for (const product of products){
        if(product.name.indexOf(searchText) != -1){
            // console.log(product.name);
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products,"phone");
console.log(matched);