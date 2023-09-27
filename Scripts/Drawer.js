const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');

// Variable para rastrear si el usuario está dibujando o no.
let isDrawing = false;

// Cuando se presiona el botón del mouse en el canvas, se inicia el dibujo.
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    context.beginPath();
});

// Cuando se suelta el botón del mouse, se detiene el dibujo.
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Cuando se mueve el mouse en el canvas, llama a la función "draw" para dibujar.
canvas.addEventListener('mousemove', draw);

// Cuando se cambia el color en el selector de color, actualiza el color de dibujo.
colorPicker.addEventListener('input', (event) => {
    context.strokeStyle = event.target.value;
});

// Función para dibujar en el canvas.
function draw(event) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    // Establece el grosor de la línea.
    context.lineWidth = 5;
    // Establece el estilo del extremo de la línea.
    context.lineCap = 'round';

    // Dibuja una línea desde la posición anterior a la posición actual.
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}
