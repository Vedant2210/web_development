function orderPizza(callback) {
    console.log("Making your pizza...");
    setTimeout(() => {
        callback("Your pizza is ready!");
    }, 2000);
}


function handleMessage(message) {
    console.log(message,"hi");
    console.log("vedu");
    console.log(2+3);
}

orderPizza(handleMessage);
