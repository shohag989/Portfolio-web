const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 200)
    });
}

const autoInput = document.querySelector(".auto_input");
if (autoInput) {
    var typed = new Typed(".auto_input", {
        strings: [
            "A Web Designer", "A Web Developer", "A Graphic Designer", "A Video editor"
        ],
        typeSpeed: 90,
        backSpeed: 110,
        loop: true
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('portfolio-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');

    if (portfolioItems.length > 0) {
        portfolioItems.forEach(item => {
            const title = item.querySelector('.portfolio-info h3').textContent;
            const description = item.querySelector('.portfolio-info p');
            if (description) {
                const fullText = description.textContent;
                const words = fullText.split(' ');

                if (words.length > 25) {
                    const shortText = words.slice(0, 25).join(' ') + '...';
                    description.innerHTML = `${shortText} <a href="#" class="see-more-link">see more</a>`;

                    item.addEventListener('click', function (e) {
                        if (e.target.classList.contains('see-more-link')) {
                            e.preventDefault();
                            modalTitle.textContent = title;
                            modalText.textContent = fullText;
                            modal.style.display = 'block';
                        }
                    });
                }
            }
        });
    }

    if (modal) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});

const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav_menu');

if (menuIcon && navMenu) {
    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
