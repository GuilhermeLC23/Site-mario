const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm (){
 form.style.left = "40%"
 form.style.trasform = "translateX(-50%)"
mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-300px"
    form.style.trasform = "translateX(0)"
   mascara.style.visibility = "hidden"
}
