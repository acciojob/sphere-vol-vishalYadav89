function volume_sphere(event) {
    // prevent form from reloading page
    event.preventDefault();

    // get radius value
    let r = parseFloat(document.getElementById("radius").value);

    let volume;

    // validate input
    if (isNaN(r) || r < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        volume = volume.toFixed(4); // round to 4 decimal places
    }

    // display result
    document.getElementById("volume").value = volume;
}

// attach event properly
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};