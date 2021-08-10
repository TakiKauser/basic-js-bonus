const products = [
    {name: "asus laptop", price: 57500},
    {name: "nokia phone", price: 1700},
    {name: "modem LTE", price: 1900},
    {name: "UiiSii Headphone", price: 550},
    {name: "skyblue cap", price: 350}
];

for (const product of products){
    if (product.price < 500){
        break;
    }
    if (product.price > 2000){
        continue;
    }
    console.log(product);
}