var ju1;
var ju2;

function inicio(){
	tablero = new Tablero();
	coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
	juego = new LaOca(tablero,coleccionFichas,2);

	$('#ju1').append('<p id="entrar">Nombre jugador uno: </p> <input type="text" name="nombre" id="nombreju1"/><button id="b1">Pedir ficha</button>');

	$('#b1').on('click',function(){
		nombre=$('#nombreju1').val();
		ju1=new Jugador(nombre,juego);
		ju1.asignarFicha();
		$('#nombreju1').remove();
		$('#ju1').append('<p>Bienvenido '+ju1.nombre+'</p>');
		$('#b1').remove();
		$('#entrar').remove();
	})

	
	$('#ju2').append('<p id="entrar2">Nombre jugador dos: </p> <input type="text" name="nombre" id="nombreju2"/><button id="b2">Pedir ficha</button>');

	

	$('#b2').on('click',function(){
		nombre=$('#nombreju2').val();
		ju2=new Jugador(nombre,juego);
		ju2.asignarFicha();
		$('#nombreju2').remove();
		$('#ju2').append('<p>Bienvenido '+ju2.nombre+'</p>');
		$('#ju2').append('<button id="bl2">Lanzar dados</button>')
		$('#ju1').append('<button id="bl1" >Lanzar dados</button>');
		$('#b2').remove();
		$('#entrar2').remove();


		// Empieza el juego
		// estado = new estadoJuego(this.juego,this.ju1,this.ju2);

		/*	Metodo para comprobar la posicion de las casillas una a una
		$('#jue').append('<button id="blpr">Lanzar dados prueba</button>');
		var cont=2;
			$('#blpr').on('click',function(){
				$(ficha).show();
				moverFicha(fichaRoja,cont);
				cont++;
				})

		*/

		$('#fichaRoja').show();
		$('#fichaAzul').show();
		juego.setTurno(ju1);
		turno=juego.turno.nombre;
		posicion1=ju1.ficha.casilla.posicion;
		posicion2=ju2.ficha.casilla.posicion;
		$('#jue').append('<p id="estadoJuego">Estado del juego:</p>');
		$('#jue').append('<p id="estado">Es el turno de: '+turno+'</p>');
		$('#jue').append('<p id="estado1">El jugador uno está en: '+posicion1+'</p>');
		$('#jue').append('<p id="estado2">El jugador dos está en: '+posicion2+'</p>');



		$('#bl1').on('click',function(){
		 $('#tirada1').remove();
		if (juego.turno.nombre==ju1.nombre) {
			ju1.lanzar();
			$('#ju1').append('<p id="tirada1"> Has sacado '+ju1.tirada+'.</br>'+ju1.ficha.casilla.tema.mensaje +'</p>');
			//alert(ju1.ficha.casilla.tema.mensaje);
			moverFicha(fichaRoja,ju1.ficha.casilla.posicion);
			if (ju1.ficha.casilla.posicion==63) alert("Enhorabuena "+ju1.nombre+" has ganado la partida!!!!",location.reload());
		}
		else $('#ju1').append('<p id="tirada1">No es tu turno, es el turno de '+juego.turno.nombre+'</p>');

		turno=juego.turno.nombre;
		posicion1=ju1.ficha.casilla.posicion;
		posicion2=ju2.ficha.casilla.posicion;

		$('#estado').remove()
		$('#estado1').remove()
		$('#estado2').remove()
		$('#jue').append('<p id="estado">Es el turno de: '+turno+'</p>');
		$('#jue').append('<p id="estado1">El jugador uno está en: '+posicion1+'</p>');
		$('#jue').append('<p id="estado2">El jugador dos está en: '+posicion2+'</p>');
		})
		$('#bl2').on('click',function(){
			 $('#tirada2').remove();
		if (juego.turno.nombre==ju2.nombre){
			ju2.lanzar();
		 $('#ju2').append('<p id="tirada2">Has sacado '+ju2.tirada+'.</br>'+ju2.ficha.casilla.tema.mensaje +'</p>');
		 moverFicha(fichaAzul,ju2.ficha.casilla.posicion);
		 if (ju2.ficha.casilla.posicion==63) alert("Enhorabuena "+ju2.nombre+" has ganado la partida!!!!",location.reload());
		}
		else $('#ju2').append('<p id="tirada2">No es tu turno, es el turno de '+juego.turno.nombre+'</p>');

		turno=juego.turno.nombre;
		posicion1=ju1.ficha.casilla.posicion;
		posicion2=ju2.ficha.casilla.posicion;

		$('#estado').remove()
		$('#estado1').remove()
		$('#estado2').remove()
		$('#jue').append('<p id="estado">Es el turno de: '+turno+'</p>');
		$('#jue').append('<p id="estado1">El jugador uno está en: '+posicion1+'</p>');
		$('#jue').append('<p id="estado2">El jugador dos está en: '+posicion2+'</p>');


		})

		function moverFicha(ficha,posicion){
			if (posicion==2) $(ficha).css({position: "absolute",top:"600px",left:"258px"});
			if (posicion==3) $(ficha).css({position: "absolute",top:"600px",left:"308px"});
			if (posicion==4) $(ficha).css({position: "absolute",top:"600px",left:"360px"});
			if (posicion==5) $(ficha).css({position: "absolute",top:"600px",left:"419px"});
			if (posicion==6) $(ficha).css({position: "absolute",top:"600px",left:"468px"});
			if (posicion==7) $(ficha).css({position: "absolute",top:"600px",left:"514px"});
			if (posicion==8) $(ficha).css({position: "absolute",top:"600px",left:"566px"});
			if (posicion==9) $(ficha).css({position: "absolute",top:"562px",left:"598px"});
			if (posicion==10) $(ficha).css({position: "absolute",top:"509px",left:"588px"});
			if (posicion==11) $(ficha).css({position: "absolute",top:"466px",left:"588px"});
			if (posicion==12) $(ficha).css({position: "absolute",top:"416px",left:"588px"});
			if (posicion==13) $(ficha).css({position: "absolute",top:"364px",left:"588px"});
			if (posicion==14) $(ficha).css({position: "absolute",top:"306px",left:"588px"});
			if (posicion==15) $(ficha).css({position: "absolute",top:"255px",left:"588px"});
			if (posicion==16) $(ficha).css({position: "absolute",top:"197px",left:"588px"});
			if (posicion==17) $(ficha).css({position: "absolute",top:"149px",left:"588px"});
			if (posicion==18) $(ficha).css({position: "absolute",top:"102px",left:"588px"});
			if (posicion==19) $(ficha).css({position: "absolute",top:"57px",left:"564px"});
			if (posicion==20) $(ficha).css({position: "absolute",top:"65px",left:"514px"});
			if (posicion==21) $(ficha).css({position: "absolute",top:"65px",left:"461px"});
			if (posicion==22) $(ficha).css({position: "absolute",top:"65px",left:"408px"});
			if (posicion==23) $(ficha).css({position: "absolute",top:"65px",left:"357px"});
			if (posicion==24) $(ficha).css({position: "absolute",top:"65px",left:"310px"});
			if (posicion==25) $(ficha).css({position: "absolute",top:"65px",left:"249px"});
			if (posicion==26) $(ficha).css({position: "absolute",top:"65px",left:"197px"});
			if (posicion==27) $(ficha).css({position: "absolute",top:"65px",left:"144px"});
			if (posicion==28) $(ficha).css({position: "absolute",top:"58px",left:"90px"});
			if (posicion==29) $(ficha).css({position: "absolute",top:"93px",left:"57px"});
			if (posicion==30) $(ficha).css({position: "absolute",top:"148px",left:"60px"});
			if (posicion==31) $(ficha).css({position: "absolute",top:"198px",left:"60px"});
			if (posicion==32) $(ficha).css({position: "absolute",top:"248px",left:"60px"});
			if (posicion==33) $(ficha).css({position: "absolute",top:"302px",left:"60px"});
			if (posicion==34) $(ficha).css({position: "absolute",top:"357px",left:"60px"});
			if (posicion==35) $(ficha).css({position: "absolute",top:"408px",left:"60px"});
			if (posicion==36) $(ficha).css({position: "absolute",top:"460px",left:"60px"});
			if (posicion==37) $(ficha).css({position: "absolute",top:"494px",left:"93px"});
			if (posicion==38) $(ficha).css({position: "absolute",top:"494px",left:"149px"});
			if (posicion==39) $(ficha).css({position: "absolute",top:"494px",left:"196px"});
			if (posicion==40) $(ficha).css({position: "absolute",top:"494px",left:"245px"});
			if (posicion==41) $(ficha).css({position: "absolute",top:"494px",left:"297px"});
			if (posicion==42) $(ficha).css({position: "absolute",top:"494px",left:"352px"});
			if (posicion==43) $(ficha).css({position: "absolute",top:"494px",left:"402px"});
			if (posicion==44) $(ficha).css({position: "absolute",top:"494px",left:"453px"});
			if (posicion==45) $(ficha).css({position: "absolute",top:"454px",left:"489px"});
			if (posicion==46) $(ficha).css({position: "absolute",top:"402px",left:"489px"});
			if (posicion==47) $(ficha).css({position: "absolute",top:"353px",left:"489px"});
			if (posicion==48) $(ficha).css({position: "absolute",top:"304px",left:"489px"});
			if (posicion==49) $(ficha).css({position: "absolute",top:"253px",left:"489px"});
			if (posicion==50) $(ficha).css({position: "absolute",top:"203px",left:"489px"});
			if (posicion==51) $(ficha).css({position: "absolute",top:"161px",left:"458px"});
			if (posicion==52) $(ficha).css({position: "absolute",top:"161px",left:"408px"});
			if (posicion==53) $(ficha).css({position: "absolute",top:"161px",left:"354px"});
			if (posicion==54) $(ficha).css({position: "absolute",top:"161px",left:"304px"});
			if (posicion==55) $(ficha).css({position: "absolute",top:"161px",left:"258px"});
			if (posicion==56) $(ficha).css({position: "absolute",top:"161px",left:"196px"});
			if (posicion==57) $(ficha).css({position: "absolute",top:"188px",left:"158px"});
			if (posicion==59) $(ficha).css({position: "absolute",top:"300px",left:"158px"});
			if (posicion==60) $(ficha).css({position: "absolute",top:"356px",left:"158px"});
			if (posicion==61) $(ficha).css({position: "absolute",top:"389px",left:"200px"});
			if (posicion==62) $(ficha).css({position: "absolute",top:"381px",left:"254px"});
			if (posicion==63) $(ficha).css({position: "absolute",top:"306px",left:"344px"});
		}


function estadoJuego(juego,jugador1,jugador2){
	this.turno=this.juego.turno.nombre;
	this.posicion1=this.jugador1.ficha.casilla.posicion;
	this.posicion2=this.jugador2.ficha.casilla.posicion;
	this.actualizarJuego=function(){
	$('#jue').append('<p id="estado">Es el turno de: '+this.turno+'</p>');
	$('#jue').append('<p id="estado">El jugador uno está en: '+this.posicion1+'</p>');
	$('#jue').append('<p id="estado">El jugador dos está en: '+this.posicion2+'</p>');
	}
}
	})


	



}


