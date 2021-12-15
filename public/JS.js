const mes = document.getElementById("mes");
let ganancia = document.getElementById("precio");
const b_agregar = document.querySelector("#agregar");
const b_deshabilitar = document.getElementById("deshabilitar");

function agregar(){
	const fila = document.createElement("tr");
	fila.innerHTML = "<td>" + mes.value + "</td><td>" + ganancia.value + "</td>";
	const tbody = document.querySelector("tbody");
	tbody.appendChild(fila);
	let total = 0;
	for(let i = 0; i < tbody.rows.length; i++){
		total += Number(tbody.rows[i].cells[1].textContent);
	}
	const tfoot = document.querySelector("tfoot");
	tfoot.rows[0].cells[1].textContent = total;
}

b_agregar.addEventListener("click",agregar);

b_deshabilitar.addEventListener("click",function(){
	if(b_deshabilitar.textContent==="Deshabilitar"){
		b_agregar.disabled=true;
		b_deshabilitar.textContent="Habilitar";
		b_deshabilitar.classList.add("bt");
	}
	else{
		b_agregar.disabled=false;
		b_deshabilitar.textContent="Deshabilitar";
		b_deshabilitar.classList.remove("bt");
	}
})
