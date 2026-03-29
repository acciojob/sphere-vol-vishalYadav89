function volume_sphere() {
    // Prevent form from refreshing
    event.preventDefault();

    // Step 1: Get input
    let radius = document.getElementById("radius").value;

    // Step 2: Convert to number
    radius = parseFloat(radius);

    // Step 3: Validate
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Step 4: Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Step 5: Round to 4 decimal places
    volume = volume.toFixed(4);

    // Step 6: Display result
    document.getElementById("volume").value = volume;
}