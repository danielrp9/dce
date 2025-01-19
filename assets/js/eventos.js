function expandCard(title, banner, date, description, location) {
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.events-section').innerHTML = `
        <div class="event-details">
            <div class="event-banner-expanded">
                <img src="${PRINCIPAL}" alt="Banner Evento" class="banner-expanded">
            </div>
            <div class="event-description">
                <h2>${title}</h2>
                <p>${description}</p>
                <div class="row">
                    <div class="col-6 text-start"><strong>Data:</strong> ${date}</div>
                    <div class="col-6 text-end"><strong>Local:</strong> ${location}</div>
                </div>
                <a href="https://www.sympla.com.br/" class="btn btn-primary mt-3" target="_blank">Comprar Ingressos</a>
                <button class="btn btn-secondary mt-3" onclick="window.location.reload()">Voltar</button>
            </div>
        </div>
    `;
}
