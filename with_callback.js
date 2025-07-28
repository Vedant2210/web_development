function downloadFile(callback) {
    setTimeout(() => {
        console.log("File downloaded");
        callback(); // call back when done
    }, 2000);
}

console.log("Start");
downloadFile(() => console.log("Now we can process the file"));
console.log("End");
