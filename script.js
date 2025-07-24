// Loading Screen
window.addEventListener('load', () => {
    document.querySelector('.loading-screen').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 1000);
});

// Typing Effect
const typed = new Typed('#typing-text', {
    strings: ['WORLDS', 'CHARACTERS', 'STORIES', 'ANIMATION'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Gallery Filter
const grid = new Isotope('.gallery-grid', {
    itemSelector: '.art-item',
    layoutMode: 'masonry',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});


document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filters button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter items
        const filterValue = button.getAttribute('data-filter');
        grid.arrange({ filter: filterValue === 'all' ? '*' : `.${filterValue}` });
    });
});

// Artwork Hover Effect
document.querySelectorAll('.art-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.art-info').style.bottom = '0';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.art-info').style.bottom = '-100%';
    });
});

// Easter Egg (Secret Key Combo)
let keySequence = [];
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

window.addEventListener('keydown', (e) => {
    keySequence.push(e.key);
    if (keySequence.length > 20) keySequence.shift();
    
    if (keySequence.join('').includes(secretCode)) {
        document.body.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
        alert('🎮 SECRET UNLOCKED! YOU ARE A TRUE GAMER!');
    }
});