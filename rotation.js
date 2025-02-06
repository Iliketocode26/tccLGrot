function calculateRotation() {
    const numPeople = parseInt(document.getElementById("numPeople").value);
    const steps = parseInt(document.getElementById("steps").value);
    const resultsDiv = document.getElementById("results");

    if (isNaN(numPeople) || isNaN(steps) || numPeople < 1 || steps < 1) {
        resultsDiv.innerHTML = "Please enter valid numbers for both fields.";
        return;
    }

    // Array representing people
    const people = Array.from({ length: numPeople }, (_, index) => index);

    // Calculate new positions after rotation
    const rotatedPeople = rotateArray(people, steps);

    // Display the result
    resultsDiv.innerHTML = `After ${steps} steps, the positions will be: <br /> ${rotatedPeople.join(", ")}`;
}

// Helper function to rotate the array
function rotateArray(arr, steps) {
    const len = arr.length;
    steps = steps % len;  // In case steps exceed the length of the array

    return [...arr.slice(steps), ...arr.slice(0, steps)];
}
