var conversions = {
    "GBps": 0.001,
    "Mbps": 0.125,
    "KBps": 125,
    "MBps": 1,
    "TB": 0.000000125,
    "GB": 0.000125,
    "MB": 0.125
}


var slider = document.getElementById("transferSlider");
var output = document.getElementById("val");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
}

function calculate() {
    let capacity = document.getElementById("capacityInput").value;
    let transferSpeed = document.getElementById("transferSlider").value;
    let calc = capacity * conversions[document.getElementById("capacitySelect").value] / (transferSpeed * conversions[document.getElementById("transferSelect").value]);
    alert(calc + "sec");
}