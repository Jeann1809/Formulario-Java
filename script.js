let solicitudes = [];

// FUNCION OTRO
let inputCont = document.getElementById("inputCont");
let valor = document.getElementById("cargo");
valor.addEventListener("change", function () {
  while (inputCont.firstChild) {
    inputCont.removeChild(inputCont.firstChild);
  }

  if (valor.value === "otro") {
    let input = document.createElement("input");
    input.type = "text";
    input.name = "otro";
    input.id = "otro-opt";
    input.placeholder = "Escriba su cargo";
    inputCont.appendChild(input);
  }
});
// ------

function color() {
  let genero = document.querySelector("#genero").value;
  if (genero == "masculino") {
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
  } else {
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "pink";
    btn.style.color = "white";
  }
}

function guardar() {
  let nombre = document.querySelector("#nombre").value;
  let apellidos = document.querySelector("#apellidos").value;
  let email = document.querySelector("#email").value;
  let genero = document.querySelector("#genero").value;
  let cargo = document.querySelector("#cargo").value;
  if (inputCont.firstChild) {
    let otro_v = document.querySelector("#otro-opt").value;
    let solicitud = {
      name: nombre,
      surname: apellidos,
      correo: email,
      gender: genero,
      posicion: cargo,
      otro: otro_v,
    };
    solicitudes.push(solicitud);
  } else {
    let solicitud = {
      name: nombre,
      surname: apellidos,
      correo: email,
      gender: genero,
      posicion: cargo,
      otro: "NA"
    };
    solicitudes.push(solicitud);
  }

  localStorage.setItem("Solicitud", JSON.stringify(solicitudes));
  alert("El formulario se ha guardado exitosamente");
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("email").value = "";
  document.getElementById("genero").value = "masculino";
  document.getElementById("cargo").value = "desarrolador";
}
