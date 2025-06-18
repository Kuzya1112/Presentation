Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide'
});

// Обработка кликов по навигационным точкам
document.querySelectorAll('.nav-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        Reveal.slide(index);
        document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});