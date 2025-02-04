        // Função para carregar o conteúdo do edital
        document.getElementById('carregarEdital').addEventListener('click', function() {
            window.location.href = "assets/html/edital-conselho.html";
        });

        // Mostrar imagens ocultas no mobile
        const verMaisBtn = document.getElementById('verMaisBtn');
        const hiddenImages = document.querySelectorAll('.hidden-mobile');

        verMaisBtn.addEventListener('click', () => {
            hiddenImages.forEach(img => img.style.display = 'block');
            verMaisBtn.style.display = 'none'; // Ocultar o botão após clicar
        });