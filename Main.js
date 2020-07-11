let ubicaionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll, fuction"(){
	let desplazamientoActual = window.pageYOffset; //180
	if (ubicaionPrincipal>=desplazamientoActual){ //200 > 180
		document.getElementsByTagName('nav')[0].style.top ="0px"
	}else{
		document.getElementsByTagName('nav')[0].style.top = "-100px"

	}
	ubicaionPrincipal = desplazamientoActual; //200
})

