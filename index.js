window.addEventListener('DOMContentLoaded', () => {

    const popupImages = document.querySelectorAll('.featured-img');
    const popup = document.querySelector('.popup');

    popupImages.forEach((img, index) => {
        img.addEventListener('click', (img) => {
            document.querySelector('.popup-img').src = img.target.src;
        });
        img.addEventListener('click', openPopup);
    });

    function openPopup() {
        popup.classList.add('show-popup');
        popup.classList.remove('hiden-popup');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.classList.add('hiden-popup');
        popup.classList.remove('show-popup');
        document.body.style.overflow = '';
    }

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    const formReset = document.querySelector('#form');

    formReset.addEventListener('submit', function(e) {
        e.preventDefault();
        form.reset();
    });

});

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
const btnContact = document.querySelector('.header-button');
const formContact = document.querySelector('.contact-contact');

btnContact.addEventListener('click', () => {
    scrollTo(formContact);
})