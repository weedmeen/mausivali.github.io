document.querySelector('.flowers').addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = '#ffcccc'; // Light red/pink on hover
});

document.querySelector('.flowers').addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'pink'; // Revert on mouse leave
});

document.querySelector('.cat').addEventListener('mouseenter', () => {
    alert('Meow! Isn’t love purr-fect? Happy Valentine’s Day!');
});
