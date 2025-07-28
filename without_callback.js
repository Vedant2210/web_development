function downloadFile() {
    // Simulate slow task
    for (let i = 0; i < 5e9; i++) {} 
    console.log("File downloaded");
}

console.log("Start");
downloadFile();   // Blocks everything until done
console.log("End");
