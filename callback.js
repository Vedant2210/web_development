function orderPizza(callback1,callback2) {
    console.log("Making your pizza...");
    setTimeout(() => {
        callback1("Your pizza is ready!");
        callback2("hi callback2");
    }, 2000);
}


function handleMessage(message) {
    console.log(message,"hi");
 //   console.log("vedu");
    console.log(1);
}

function func(message) {
    console.log(message,"hi from 2");
   // console.log("vedu");
    console.log(2);
}
orderPizza(handleMessage,func);
