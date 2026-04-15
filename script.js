const CREDENCIALES = { user: "admin", pass: "123" };

function validarAcceso() {
    const userIn = document.getElementById('user').value;
    const passIn = document.getElementById('pass').value;

    if (userIn === CREDENCIALES.user && passIn === CREDENCIALES.pass) {
        window.location.href = "admin.html";
    } else {
        alert("Acceso inválido. Verifica tus datos.");
    }
}

function generarContenido() {
    const contUser = document.getElementById('contenedor-visualizar');
    const contAdmin = document.getElementById('contenedor-editar');
    
    // Imágenes ilustrativas de tecnología
    const imgTech = "https://unsplash.com";

    for (let i = 1; i <= 16; i++) {
        if (contUser) {
            contUser.innerHTML += `
                <div class="card">
                    <img src="${imgTech}" class="card-img">
                    <div class="card-content">
                        <h4>Semana ${i < 10 ? '0' + i : i}</h4>
                        <p style="font-size: 0.8rem; color: #666;">Laboratorio Académico</p>
                        <button style="background:var(--upla-blue); color:white; border:none; padding:10px; width:100%; border-radius:5px; cursor:pointer;">Explorar Archivo</button>
                    </div>
                </div>`;
        }

        if (contAdmin) {
            contAdmin.innerHTML += `
                <div class="card">
                    <img src="${imgTech}" class="card-img">
                    <div class="card-content">
                        <h4>Sesión ${i}</h4>
                        <div style="display:flex; gap:5px; margin-top:10px;">
                            <button style="flex:1; background:#fbbf24; border:none; padding:8px; border-radius:5px; cursor:pointer;">✏️</button>
                            <button style="flex:1; background:#ef4444; color:white; border:none; padding:8px; border-radius:5px; cursor:pointer;">🗑️</button>
                        </div>
                    </div>
                </div>`;
        }
    }
}

window.onload = generarContenido;
