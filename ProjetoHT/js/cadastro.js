function validar(){
	var nome = formuser.nome.value
	var sobrenome = formuser.sobrenome.value
	var email = formuser.email.value
	var sexo = formuser.sexo.value
	var data = formuser.data.value
	var senha = formuser.senha.value
	var confsenha = formuser.confsenha.value
	var erroNome = document.getElementById("erro1")
	var erroSobreNome = document.getElementById("erro2")
	var erroEmail = document.getElementById("erro3")
	var erroDtNasc = document.getElementById("erro4")
	var erroSexo = document.getElementById("erro5")
	var erroSenha = document.getElementById("erro6")


	if (nome.length < 4) {
		erroNome.innerHTML = "O nome deve ter ao menos 4 caracteres"
		formuser.nome.focus()
		return false
	} else{
		document.getElementById("erro1").style.display= 'none'
	}

	if (sobrenome.length < 1) {
		erroSobreNome.innerHTML = "Insira seu sobrenome"
		formuser.sobrenome.focus()
		return false
	}else{
		document.getElementById("erro2").style.display= 'none'
	}

	if (email == "" || email.indexOf("@") == -1) {
		erroEmail.innerHTML = "Insira um Email válido"
		formuser.email.focus()
		return false
	}else{
		document.getElementById("erro3").style.display= 'none'
	}

	if (data == "") {
		erroDtNasc.innerHTML = "Insira a data de nascimento"
		formuser.data.focus()
		return false
	} else{
		document.getElementById("erro4").style.display= 'none'
	}


	if (sexo == "Selecione") {
		erroSexo.innerHTML = "Selecione o sexo"
		formuser.sexo.focus()
		return false
	} else{
		document.getElementById("erro5").style.display= 'none'
	}


	if (senha.length < 6) {
		erroSenha.innerHTML = "A senha deve ter pelo menos 6 caracteres"
		formuser.senha.focus()
		return false
	}else{
		document.getElementById("erro6").style.display= 'none'
	}

	if (senha != confsenha) {
		alert("Senhas não conferem")
		formuser.confsenha.focus()
		return false
	}



	/*
	if (sexo == "Selecione") {
		formuser.sexo.focus()
		return false
	} */
	
}



	/*
	console.log(nome)
	console.log(sobrenome)
	console.log(email)
	console.log(sexo)
	console.log(idade)
	console.log(senha)
	*/