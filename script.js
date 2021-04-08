 var tela = document.querySelector('canvas'); // variavel para pegar a tag do canvas
		    var pincel = tela.getContext('2d'); // variavel para criar um pincel
		    var paleta = document.querySelector('input'); // variavel para pegar o input e tranformar na paleta de cores

		    pincel.fillStyle = 'grey'; // cor que preenche a tela
		    pincel.fillRect(0, 0, 600, 400); // cordenadas a serem preenchidas

		    var desenha = false; // variavel para desabilitar desenho

		    	// funçao que desenha os circulos que vão desenhar na tela
		    function desenhaCirculo(evento) {
		    	if (desenha) {
			        var x = evento.pageX - tela.offsetLeft;
			        var y = evento.pageY - tela.offsetTop;
			        pincel.fillStyle = paleta.value;
			        pincel.beginPath();
			        pincel.arc(x, y, 10, 0, 2 * 3.14);
			        pincel.fill();
			        console.log(x + ',' + y);
			    }   
		    }
		    
		    	tela.onmousemove = desenhaCirculo; // chama a funçao que desenha o circulo
		    	

		    	// funçao que habilita o desenho
		   function habilitarDesenho() {
		    		desenha = true;
		    	} 	
		    	//funçao que desabilita o desenho
		   function desabilitarDesenho(){
		   			desenha = false;
		   } 	

		   tela.onmousedown = habilitarDesenho;// se o click estiver presionado o desenho é habilitado e começará a desenhar na tela
		   tela.onmouseup = desabilitarDesenho;// se o click nao estiver pressionado nada acontece