
let services = document.getElementById("all-services-items");
let servicesElem = services.getElementsByClassName('item');
for (let i = 0; i < servicesElem.length; i++) {
    servicesElem[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        showOneService();
    });
}

function showOneService() {

    let design = document.getElementById('design-visuel');
    let dev = document.getElementById('dev-web');
    let brandId = document.getElementById('brand-id');
    let referencement = document.getElementById('referencement');
    let photo = document.getElementById('photo');
    let sound = document.getElementById('sound-design');

    let designContent = document.getElementById('design-visuel-content');
    let devContent = document.getElementById('dev-web-content');
    let brandIdContent = document.getElementById('brand-id-content');
    let referencementContent = document.getElementById('referencement-content');
    let photoContent = document.getElementById('photo-content');
    let soundContent = document.getElementById('sound-design-content');


    if (design.className === "item h3 light active") {
        designContent.style.display = "flex";
        devContent.style.display = "none";
        brandIdContent.style.display = "none";
        referencementContent.style.display = "none";
        photoContent.style.display = "none";
        soundContent.style.display = "none";
    } else if (dev.className === "item h3 light active") {
        designContent.style.display = "none";
        devContent.style.display = "flex";
        brandIdContent.style.display = "none";
        referencementContent.style.display = "none";
        photoContent.style.display = "none";
        soundContent.style.display = "none";
    } else if (brandId.className === "item h3 light active") {
        designContent.style.display = "none";
        devContent.style.display = "none";
        brandIdContent.style.display = "flex";
        referencementContent.style.display = "none";
        photoContent.style.display = "none";
        soundContent.style.display = "none";
    } else if (referencement.className === "item h3 light active") {
        designContent.style.display = "none";
        devContent.style.display = "none";
        brandIdContent.style.display = "none";
        referencementContent.style.display = "flex";
        photoContent.style.display = "none";
        soundContent.style.display = "none";
    } else if (photo.className === "item h3 light active") {
        designContent.style.display = "none";
        devContent.style.display = "none";
        brandIdContent.style.display = "none";
        referencementContent.style.display = "none";
        photoContent.style.display = "flex";
        soundContent.style.display = "none";
    } else if (sound.className === "item h3 light active") {
        designContent.style.display = "none";
        devContent.style.display = "none";
        brandIdContent.style.display = "none";
        referencementContent.style.display = "none";
        photoContent.style.display = "none";
        soundContent.style.display = "flex";
    }
}

showOneService();