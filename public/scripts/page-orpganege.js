const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-19.9247476,-43.9190534], 16);

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

// create and add maker
L.marker([-19.9247476,-43.9190534], { icon })
.addTo(map)


function selectImage(event){
    const button = event.currentTarget
    
    //remover todos os ativos
    const buttons = document.querySelectorAll(".images button");
    
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button){
        button.classList.remove(".active")
    }
    
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('.active')
    
}
