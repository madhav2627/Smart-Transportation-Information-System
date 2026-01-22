document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("routeForm");
    const resultBox = document.getElementById("result");
    const routes = {
        "vizag-nellore": ["Vizag", "Anakapalli", "Ongole", "Nellore"],
        "nellore-tirupati": ["Nellore", "Guduru", "Sri Kalahasti", "Tirupati"],
        "chennai-nellore": ["Chennai", "Sullurupeta", "Nellore"],
        "vizag-chennai": ["Vizag", "Rajahmundry", "Nellore", "Chennai"],
        "nellore-hyderabad": ["There is no stop in between, we go direct to hyderabad"],
        "nellore-gudur": ["There is no stop between from nellore to gudur after nellore gudur "],
        "nellore-bangalore": [" Chittoor","Palamaner (AP)","bangalore"]


    };
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const source = document.getElementById("source").value.trim().toLowerCase();
        const destination = document.getElementById("destination").value.trim().toLowerCase();
        const time = document.getElementById("time").value;
        if (!source || !destination || !time) {
            alert("Please fill all fields");
            return;
        }
        let delayMessage = "On time";
        let estimatedTime = "3 hours";
        const hour = parseInt(time.split(":")[0]);
        if ((hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 19)) {
            delayMessage = "Delayed due to peak hour traffic";
        }
        const routeKey = `${source}-${destination}`;
        let routePlan = "";

        if (routes[routeKey]) {
            routePlan = routes[routeKey].join(" → ");
        } else {
            routePlan = `${capitalize(source)} → ${capitalize(destination)} (No predefined route available)`;
        }
        resultBox.innerHTML = `
            <h3>Route Planning & Delay Information: </h3><br>
            <p><strong>Recommended Route:</strong> ${routePlan}</p><br>
            <p><strong>Estimated Arrival Time:</strong> ${estimatedTime}</p><br>
            <p><strong>Delay Alert:</strong> ${delayMessage}</p><br>
            <p><strong>Alternative Route:</strong> Available</p><br>
            <p style="font-size:12px; margin-top:10px;">
                Currently using simulated data.
            </p>
            <p style="font-size:12px;">
                This prototype demonstrates route planning using simulated public transport data.
                Real-time integration can be added in a full deployment.
            </p>
        `;
    });
    function capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
});
function sendDelayAlert()
{
    alert("Delay Alert was sended successfully to the user");
}
function sendRouteUpdate()
{
    alert("RouteUpdate was successfully sended to user");
}
function toggleAnalytics() {
    const analytics = document.getElementById("analyticsSection");

    if (analytics.style.display === "none") {
        analytics.style.display = "block";
    } else {
        analytics.style.display = "none";
    }
}
