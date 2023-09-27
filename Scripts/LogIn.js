document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm"); // Obtener el formulario
    const respuestaSistema = document.getElementById("RespuestaSistema"); // Obtener el elemento para mostrar la respuesta
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe
  
      const emailInput = loginForm.querySelector("input[name='emailInput']").value;
      const passwordInput = loginForm.querySelector("input[name='passwordInput']").value;
  
      // Realizar la verificación del usuario y la contraseña en BD.js
      const usuarioEncontrado = Usuarios.find((usuario) => {
        return usuario.user === emailInput && usuario.password === passwordInput;
      });
  
      if (usuarioEncontrado) {
        respuestaSistema.textContent = "Conexión exitosa";
        respuestaSistema.style.color = "green";
      } else {
        respuestaSistema.textContent = "Datos incorrectos";
        respuestaSistema.style.color = "red";
      }
    });
  });
  