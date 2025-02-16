
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const searchInput = document.getElementById('searchInput');
const bookTitles = document.querySelectorAll('.titles .tex_1');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    bookTitles.forEach(title => {
        const text = title.textContent.toLowerCase();
        const card = title.closest('.card__component');
        if (text.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
