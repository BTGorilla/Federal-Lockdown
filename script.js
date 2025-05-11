        document.addEventListener('DOMContentLoaded', function() {
            const mainImage = document.querySelector('.main-image');
            
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
            const modalImage = document.createElement('img');
            modalImage.className = 'modal-image';
            
            const modalAltText = document.createElement('div');
            modalAltText.className = 'modal-alt-text';
            
            document.body.appendChild(modalOverlay);
            modalOverlay.appendChild(modalImage);
            modalOverlay.appendChild(modalAltText);
            
            mainImage.addEventListener('click', function() {
                modalImage.src = this.src;
                modalAltText.textContent = this.alt;
                modalOverlay.style.display = 'block';
            });
            
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.style.display = 'none';
                }
            });
        });