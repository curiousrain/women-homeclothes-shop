var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    tooltips: true,
    range: {
        'min': 0,
        'max': 100
    }
});

const params = new URLSearchParams(window.location.search);
const search = params.get("search");
document.getElementById("search").innerHTML = search;   