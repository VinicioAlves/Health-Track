function cadastrarAlimentacao(){
	var tipo = formAli.tipo.value
	var data = formAli.data.value
	var calorias = formAli.calorias.value

	var erroTipo = document.getElementById("erro1")
	var erroData = document.getElementById("erro2")
	var erroCalorias = document.getElementById("erro3")

	if (tipo == "Selecione") {
		erroTipo.innerHTML = "Selecione um alimento"
		formAli.tipo.focus()
		return false
	}else{
		document.getElementById("erro1").style.display = "none"
	}

	if (data == "") {
		erroData.innerHTML = "Selecione a data da alimentação"
		formAli.tipo.focus()
		return false
	}else{
		document.getElementById("erro2").style.display = "none"
	}

	if (calorias == "") {
		erroCalorias.innerHTML = "Insira a quantidade de calorias ingeridas"
		formAli.tipo.focus()
		return false
	}else{
		document.getElementById("erro3").style.display = "none"
	}
}