function Login(user, pass) {
    const filtrado = Usuarios.filter((current) =>  user === current.user && pass === current.password );
    if (filtrado.length !== 0) {
        return true
    } else {
        return false
    }
}

function MensajeError() {
    const mensaje = document.createElement("p");
    mensaje.textContent="Opps! Encontramos inconsitencias";
    const areaMensajes = document.getElementById("areaMensajes");
    areaMensajes.appendChild(mensaje);
}

function LimpiaMensajes() {
    const areaMensajes = document.getElementById("areaMensajes");
    const hijos = areaMensajes.children;
    // eliminar por nodo padre
    if (hijos.length > 0) {
        for(let i = 0; i <= hijos.length; i++) {
            console.log(hijos[i]);
            // hijos[i].remove(); // nodo hijo
            areaMensajes.removeChild(hijos[i]);
        }
    }


}