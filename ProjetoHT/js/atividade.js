function cadastrarAtividade(){
	var tipo = formAtiv.tipo.value
	var data = formAtiv.data.value
	var calorias = formAtiv.calorias.value

	var erroTipo = document.getElementById("erro1")
	var erroData = document.getElementById("erro2")
	var erroCalorias = document.getElementById("erro3")

	if (tipo == "Selecione") {
		erroTipo.innerHTML = "Selecione uma atividade"
		formAtiv.tipo.focus()
		return false
	}else{
		document.getElementById("erro1").style.display = "none"
	}

	if (data =="") {
		erroData.innerHTML = "Selecione a data da atividade"
		formAtiv.tipo.focus()
		return false
	}else{
		document.getElementById("erro2").style.display = "none"
	}

	if (calorias == "") {
		erroCalorias.innerHTML = "Insira a quantidade de calorias gastas"
		formAtiv.tipo.focus()
		return false
	}else{
		document.getElementById("erro3").style.display = "none"
	}
}