function showAlert() {
    alert("Selamat datang di Dunia Teyvat!");
    document.body.classList.add('loaded');
    createRain();
    var audio = document.querySelector('audio');
    if (audio) {
        audio.play().catch(error => {
            console.error("Autoplay dicegah:", error);
        });
    }
}

function judulVideo() {
    alert("Ini Video Aether & Lumine!");
}

function judulLagu() {
    alert("Ini Lagu Blue – Yung Kai!");
}

function judulFoto() {
    alert("Ini Koleksi Foto Aether & Lumine!");
}

function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    if (rainContainer) {
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement('div');
            drop.classList.add('drop');
            drop.style.left = Math.random() * 100 + 'vw'; 
            drop.style.animationDelay = Math.random() * 2 + 's'; 
            drop.style.animationDuration = Math.random() * 0.5 + 0.5 + 's'; 
            rainContainer.appendChild(drop);
        }
    }
}

window.onload = function() {
    document.body.classList.add('loaded');
    createRain(); 
};