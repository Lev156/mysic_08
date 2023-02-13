let containerAlbum = document.querySelector(`.album`);

let search = new URLSearchParams(window.location.search);

let i = search.get(`i`);

// готово! i это нужное нам число
let album = albums[i];

if(!album){
    containerAlbum.innerHTML += `ОШИБКА, редирект на главную страницу произойдёт через 5 сикунд`;
    setTimeout(() => {
        window.location.pathname = `index.html`;
    }, 5000);
    
} else {
    
    containerAlbum.innerHTML += `
        <div class="card">
            <div class="row">
                <div class="col-4">
                    <img src="assets/альбомы/${album.img}.png" alt="иконка альбома" class="img-fluid rounded-start">
                </div>
                <div class="col-8">
                    <div class="card-bode">
                    <h5 class="card-title">${album.titel}</h5>
                    <p class="card-text">${album.description}</p>
                    <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    let containerPlaylist = document.querySelector(`.playlist`);

    let tracks = album.tracks;

    for (let j = 0; j < tracks.length; j++) {
        let track = tracks[j];
        containerPlaylist.innerHTML += `
            <li class="list-group-item d-flex align-items-center">
                <img src="assets/page 1/play.png" alt="play" class="me-3" width="40px">
                <div>
                    <div>${track.title}</div>
                    <div class="text-secondary">${track.author}</div>
                </div>
                <div class="ms-auto">${track.time}</div>
            </li>
        `;
    }
};