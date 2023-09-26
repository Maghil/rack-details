function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
    var content = document.getElementById("content")
    content.classList.toggle("hidden")
    content.classList.toggle("content")
    var toggle_header = document.getElementById("toggle-header")
    toggle_header.classList.toggle("hidden")
    toggle_header.classList.toggle("toggle-header")
}

async function makeHttpRequest(ip) {
    const url = "http://"+ip+":80/"
    try {
        const response = await fetch(url);
        if (response.ok) {
            var led_light = document.getElementById(ip)
            led_light.classList.toggle("green")
        }
        else{
            var led_light = document.getElementById(ip)
            led_light.classList.toggle("red")
        }
    } catch (err) {
        var led_light = document.getElementById(ip)
        led_light.classList.toggle("red")
        console.log(err);
    }
}