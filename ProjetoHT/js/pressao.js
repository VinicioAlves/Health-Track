function cadastrarPressao(){
	var sist = formPress.sist.value
	var diast = formPress.diast.value
	var data = formPress.data.value

	var erroSist = document.getElementById("erro1")
	var erroDias = document.getElementById("erro2")
	var erroData = document.getElementById("erro3")

	if (sist == "") {
		erroSist.innerHTML = "Insira a pressão sistólica"
		formPress.sist.focus()
		return false
	}else {
		document.getElementById("erro1").style.display = "none"
	}

	if (diast == "") {
		erroDias.innerHTML = "Insira a pressão diastólica"
		formPress.diast.focus()
		return false
	}document.getElementById("erro2").style.display = "none"

	if (data == "") {
		erroData.innerHTML = "Selecione a data da medição"
		formPress.data.focus()
		return false
	}document.getElementById("erro3").style.display = "none"
}