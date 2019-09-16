function logar(){
	var email = formlogin.email.value
	var senha = formlogin.senha.value
	var erroEmail = document.getElementById("erro1")
	var erroSenha = document.getElementById("erro2")

	console.log(email)
	console.log(senha)

	if (email == "" || email.indexOf("@") == -1) {
		erroEmail.innerHTML = "Insira um Email válido"
		formlogin.email.focus()
		return false
	}else{
		document.getElementById("erro1").style.display = "none"
	}

	if (senha.length < 6) {
		erroSenha.innerHTML = "Senha inválida"
		formlogin.senha.focus()
		return false
	}else {
		document.getElementById("erro2").style.display = "none"
	}
}