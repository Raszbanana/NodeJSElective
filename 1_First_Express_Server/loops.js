
const smartPhones = [
    { brand: "Samsung", price: 4500 },
    { brand: "iPhone", price: 7200 },
    { brand: "Sony Experia", price: 3800 },
]

const removeExp = (smartPhones) => {
    return smartPhones.price < 4000;
}

const cheapPhones = smartPhones.filter(removeExp);

console.log(cheapPhones);


console.log(new Date().getMonth())