const btn = document.querySelector('button')

// btn.addEventListener('dragstart', (e) => {
//     e.dataTransfer.setData('text/plain', null); // Required for Firefox
//     // e.dataTransfer.setDragImage(new Image(), 0, 0); // Hide the default drag image
// });


document.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow a drop
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const x = e.clientX - btn.offsetWidth / 2;
    const y = e.clientY - btn.offsetHeight / 2;
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});