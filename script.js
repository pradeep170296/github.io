function runCommand() {
    const command = document.getElementById("command").value;
    const output = document.getElementById("output");

    // Simulate remote tool commands
    let result = "";
    switch(command.toLowerCase()) {
        case "hello":
            result = "Hello! Remote tool is working.";
            break;
        case "time":
            result = "Current Time: " + new Date().toLocaleTimeString();
            break;
        case "date":
            result = "Today's Date: " + new Date().toLocaleDateString();
            break;
        default:
            result = "Unknown command. Try: hello, time, date";
    }

    output.textContent = result;
    document.getElementById("command").value = "";
}
