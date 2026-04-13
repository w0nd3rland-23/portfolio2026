document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('your_service_id', 'your_template_id', this)
                .then(function() {
                    alert('Message sent successfully!');
                }, function(error) {
                    alert('Failed to send the message: ' + JSON.stringify(error));
                });
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

function openModal(element) {
    if (!element) {
        return;
    }

    var imageSrc = element.dataset.imageSrc;
    var imageAlt = element.dataset.imageAlt || '';
    var modal = document.getElementById('galleryModal');
    var modalImage = document.getElementById('galleryModalImage');

    if (modal && modalImage && imageSrc) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
    }

    var fallbackModal = element.nextElementSibling;
    while (fallbackModal && !fallbackModal.classList.contains('image-modal')) {
        fallbackModal = fallbackModal.nextElementSibling;
    }

    if (fallbackModal) {
        fallbackModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(element) {
    if (element) {
        var parentModal = element.closest ? element.closest('.image-modal') : null;
        if (parentModal) {
            parentModal.classList.remove('open');
            document.body.style.overflow = 'auto';
            return;
        }
    }

    var galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.remove('open');
    }
    var modalImage = document.getElementById('galleryModalImage');
    if (modalImage) {
        modalImage.src = '';
        modalImage.alt = '';
    }
    document.body.style.overflow = 'auto';
}