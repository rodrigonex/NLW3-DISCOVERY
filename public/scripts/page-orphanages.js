// create map
const map = L.map('mapid').setView([-19.9247476,-43.9190534], 16);

//create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

//creat icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//creat popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das Meninas <a href="orphanage.html" class="choose-orphanege"> <img src="./public/images/arrow-white.svg"></a>')


// create and add maker
L.marker([-19.9247476,-43.9190534], { icon })
.addTo(map)
.bindPopup(popup)
