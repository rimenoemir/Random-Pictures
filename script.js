document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // rastgele seçimleri eklediğim yer
    function addRandomImages() {
        for (let i = 0; i < 12; i++) { 
            const imageUrl = `https://source.unsplash.com/random/450x200?${i}`;

            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;

            gallery.appendChild(imgElement);
        }
    }

    addRandomImages();
});
