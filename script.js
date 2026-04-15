const CREDENCIALES = { user: "admin", pass: "123" };

// Validación de Login
function validarAcceso() {
    const userIn = document.getElementById('user').value;
    const passIn = document.getElementById('pass').value;

    if (userIn === CREDENCIALES.user && passIn === CREDENCIALES.pass) {
        window.location.href = "admin.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Función para generar las 16 semanas (4x4) con soporte de imagen
function cargarSemanas() {
    const contenedorUser = document.getElementById('contenedor-visualizar');
    const contenedorAdmin = document.getElementById('contenedor-editar');
    
    // Imagen de ejemplo (puedes cambiar esta URL por cualquier imagen de internet)
    const imagenPlaceholder = "https://placeholder.com";

    for (let i = 1; i <= 16; i++) {
        // Estructura para el Usuario General
        if (contenedorUser) {
            contenedorUser.innerHTML += `
                <div class="card">
                    <img src="${imagenPlaceholder}+${i}" class="card-img" alt="Semana ${i}">
                    <div class="card-body">
                        <h3>Semana ${i}</h3>
                        <button class="btn-view">Ver Detalles</button>
                    </div>
                </div>`;
        }

        // Estructura para el Administrador
        if (contenedorAdmin) {
            contenedorAdmin.innerHTML += `
                <div class="card">
                    <img src="${imagenPlaceholder}+${i}" class="card-img" alt="Semana ${i}">
                    <div class="card-body">
                        <h3>Semana ${i}</h3>
                        <button class="btn-view" style="margin-bottom:10px;">Ver Actual</button>
                        <div style="display:flex; gap:8px;">
                            <button class="btn-edit">✏️ Editar</button>
                            <button class="btn-delete">🗑️ Borrar</button>
                        </div>
                    </div>
                </div>`;
        }
    }
}

window.onload = cargarSemanas;
