import Swal from 'sweetalert2/dist/sweetalert2.js'

const botonLogin = document.getElementById("login")

botonLogin.addEventListener("click",() => {
    Swal.fire({
        title: 'Login',
        html:
          'Usuario<input id="swal-input1" class="swal2-input">' +
          'Contraseña<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })
})

// en cada caja de producto tiene un corazon para agregar a favoritos

const botonAgregarFavoritos = document.getElementById("AgregarAFavoritos")

botonAgregarFavoritos.addEventListener("click",() => {
    Swal.fire({
        icon: 'success',
        title: 'Agregado a favoritos',
        text: 'Dale click en favoritos para ver todos...',
        footer: '<a href="#">ir a carrito</a>'
      })
})

// Ingrese un input de correo con sweetalert2

const botonEnviarCorreo = document.getElementById("enviarEmail")

botonEnviarCorreo.addEventListener("click",() =>{ 
        Swal.fire({
        title: 'Ingrese su correo!',
        input: 'email',
        inputLabel: 'Conoce descuentos y noticias',
        inputPlaceholder: 'Ingrese su correo'
      })
      
      if (email) {
        Swal.fire(`Ingrese su Correo: ${email}`)
      }
    
})

