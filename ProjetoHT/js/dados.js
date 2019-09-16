function salvarDados(){
	var nome = formDados.nome.value
	var altura = formDados.altura.value
	var email = formDados.email.value
	var peso = formDados.peso.value
	var data = formDados.data.value
	var sexo = formDados.sexo.value

	var erroNome = document.getElementById("erro1")
	var erroAltura = document.getElementById("erro2")
	var erroEmail = document.getElementById("erro3")
	var erroPeso = document.getElementById("erro4")
	var erroData = document.getElementById("erro5")
	var erroSexo = document.getElementById("erro6")


	if (nome.length < 4) {
		erroNome.innerHTML = "O nome deve ter ao menos 4 caracteres"
		formDados.nome.focus()
		return false
	} else{
		document.getElementById("erro1").style.display= 'none'
	}

	if (altura == "") {
		erroAltura.innerHTML = "Insira sua altura"
		formDados.altura.focus()
		return false
	} else{
		document.getElementById("erro2").style.display= 'none'
	}
	if (email == "" || email.indexOf("@") == -1) {
		erroEmail.innerHTML = "Insira um E-mail válido"
		formDados.email.focus()
		return false
	}else{
		document.getElementById("erro3").style.display= 'none'
	}
	if (peso == "") {
		erroPeso.innerHTML = "Insira seu peso"
		formDados.peso.focus()
		return false
	}else{
		document.getElementById("erro4").style.display= 'none'
	}

	if (data == "") {
		erroData.innerHTML = "Insira sua data de nascimento"
		formDados.data.focus()
		return false
	} else{
		document.getElementById("erro5").style.display= 'none'
	}
	if (sexo == "") {
		erroSexo.innerHTML = "Selecione o sexo"
		return false
	}else{
		document.getElementById("erro6").style.display= "none"
	}
}