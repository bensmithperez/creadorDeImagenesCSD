var crearImagen = function() {
	//variables...
	var canvas = document.getElementById("resImagen");
	var ctx = canvas.getContext("2d");
	var tipo = document.getElementById("tipo");
	var palabra = document.getElementById("palabra");
	var pais = document.getElementById("pais");
	var fondo = document.getElementById("fondo");
	var usuario = "@comoSeDiceApp"; 
	var urlCSD = "comosediceapp.com";
	var colorTexto = document.getElementById("colorTexto").value;

	if (tipo.value == "csd"){
		var linea1 = "\xbfC\xF3mo se dice";
	} else {
		var linea1 = "\xbfQu\xE9 significa";
	}

	var bandera = document.getElementById(pais.value);
	var iconosRedes = document.getElementById("iconosRedes");

	var linea2 = palabra.value;
	var linea3 = "en " + pais.options[pais.value-1].text + "?";


	//clear canvas...
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//cargo cosas al canvas...

	//cargo fondo
	var archivoFondo = fondo.files[0];
	var fr = new FileReader();
	fr.onload = createImage;
	fr.readAsDataURL(archivoFondo);

	function createImage() {
        img = new Image();
        img.onload = imageLoaded;
        img.src = fr.result;
    }

    function imageLoaded() {
        ctx.drawImage(img,0,0,800,800);
    	ctx.fillStyle = colorTexto;
		ctx.font = "72pt Abril Fatface";
		ctx.textAlign = "left";  
		ctx.fillText(linea1,10,100);
		ctx.font = "110pt Abril Fatface";
		ctx.textAlign = "center";  
		ctx.fillText(linea2,400,380); 
		ctx.font = "72pt Abril Fatface";
		ctx.textAlign = "right";  
		ctx.fillText(linea3,790,600); 
    	ctx.drawImage(bandera, 44, 667);
    	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    	ctx.fillRect(307,653,448,53); 
    	ctx.fillStyle = "white";
		ctx.textAlign = "left";  
		ctx.font = "24pt Arial";
		ctx.fillText(usuario,470,690); 
    	ctx.drawImage(iconosRedes, 320, 653);
    	ctx.fillStyle = colorTexto;
		ctx.font = "30pt Arial";
		ctx.fillText(urlCSD,350,770); 
    }
    
};