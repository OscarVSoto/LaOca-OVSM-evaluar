describe("El juego de la Oca...",function(){

	var juego;
	var coleccionFichas;
	var tablero;
	var jugador;
	var ju1;
	var ju2;

	describe("En cuanto a la inicialización",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.coleccionJugadores=[new Jugador("Uno"),new Jugador("Dos"),new Jugador("Tres")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas);
		});

		it("... la variable juego debe estar definida",function(){
			expect(this.juego).toBeDefined();
		});

		it("... el juego debe tener un tablero",function(){
			expect(this.juego.tablero).toBeDefined();
		});

		it("... el tablero debe tener 64 elementos",function(){
			expect(this.juego.tablero.casillas.length).toEqual(64);
		});

		it("... el juego debe tener una coleccion de fichas",function(){
			expect(this.juego.coleccionFichas).toBeDefined();
		})

		it("... la coleccion de fichas debe tener 3 fichas",function(){
			expect(this.juego.coleccionFichas.length).toEqual(3);
		});

		it("... incialmente, todas las fichas están libre",function(){
			var a = 0;
			for (i=0;i<this.juego.coleccionFichas.length;i++) {
				if  (this.juego.coleccionFichas[i].libre) a++;
			}
			expect(a).toEqual(this.juego.coleccionFichas.length);
		});

		it("... el juego tiene una coleccion de jugadores",function(){
			expect(this.juego.coleccionJugadores).toBeDefined();
		});

	
	});

	describe("Comprobar los usuarios...",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.coleccionJugadores=[new Jugador("Uno"),new Jugador("Dos"),new Jugador("Tres")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas);
			this.ju1=new Jugador("Pepe",this.juego);
		});

		it("... el juego permite crear un jugador llamado Pepe",function(){
			expect(this.ju1.nombre).toMatch("Pepe");
		});

		it("... el juego permite asignar una ficha libre a Pepe",function(){
			this.ju1.asignarFicha();
			expect(this.ju1.ficha).toBeDefined();
		});

		it("... al juego le quedan dos fichas libres",function(){
			this.ju1.asignarFicha();
			var a = 0;
			for (i=0;i<this.juego.coleccionFichas.length;i++) {
				if  (this.juego.coleccionFichas[i].libre) a++;
			}
			expect(a).toEqual(2);
		});

	});

	describe("Comprobar el tablero...",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas);
		});

		it("...las casillas 6 y 12 tienen Puente",function(){
			expect(this.tablero.casillas[6].tema.titulo).toEqual("Puente");
			expect(this.tablero.casillas[12].tema.titulo).toEqual("Puente");
		});

		it("...la casilla 19 tiene una Posada",function(){
			expect(this.tablero.casillas[19].tema.titulo).toEqual("Posada");
		});
		it("...la casillas 26 y 53 tienen Dados",function(){
			expect(this.tablero.casillas[26].tema.titulo).toEqual("Dados");
			expect(this.tablero.casillas[53].tema.titulo).toEqual("Dados");
		});
		it("...la casilla 31 tiene un Pozo",function(){
			expect(this.tablero.casillas[31].tema.titulo).toEqual("Pozo");
		});
		it("...la casilla 42 tiene un Laberinto",function(){
			expect(this.tablero.casillas[42].tema.titulo).toEqual("Laberinto");
		});
		it("...la casilla 52 tiene una Cárcel",function(){
			expect(this.tablero.casillas[52].tema.titulo).toEqual("Carcel");
		});
		it("...la casilla 58 tiene la Muerte",function(){
			expect(this.tablero.casillas[58].tema.titulo).toEqual("Muerte");
		});
		it("...las casillas 5,9,14,18,23,27,32,36,41,45,50,54,59 tienen Oca",function(){
			expect(this.tablero.casillas[5].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[9].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[14].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[18].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[23].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[27].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[32].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[36].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[41].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[45].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[50].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[54].tema.titulo).toEqual("Oca");
			expect(this.tablero.casillas[59].tema.titulo).toEqual("Oca");
		});

	});

	describe("Comprobar el funcionamiento del tema Oca...",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas);
		});

		it("...la Oca 5 te lleva la Oca 9",function(){
			expect(this.tablero.casillas[5].tema.otraOca).toEqual(9);
		});
		it("...la Oca 9 te lleva la Oca 14",function(){
			expect(this.tablero.casillas[9].tema.otraOca).toEqual(14);
		});
		it("...la Oca 14 te lleva la Oca 18",function(){
			expect(this.tablero.casillas[14].tema.otraOca).toEqual(18);
		});
		it("...la Oca 18 te lleva la Oca 23",function(){
			expect(this.tablero.casillas[18].tema.otraOca).toEqual(23);
		});
		it("...la Oca 23 te lleva la Oca 27",function(){
			expect(this.tablero.casillas[23].tema.otraOca).toEqual(27);
		});
		it("...la Oca 27 te lleva la Oca 32",function(){
			expect(this.tablero.casillas[27].tema.otraOca).toEqual(32);
		});
		it("...la Oca 32 te lleva la Oca 36",function(){
			expect(this.tablero.casillas[32].tema.otraOca).toEqual(36);
		});
		it("...la Oca 36 te lleva la Oca 41",function(){
			expect(this.tablero.casillas[36].tema.otraOca).toEqual(41);
		});
		it("...la Oca 41 te lleva la Oca 45",function(){
			expect(this.tablero.casillas[41].tema.otraOca).toEqual(45);
		});
		it("...la Oca 45 te lleva la Oca 50",function(){
			expect(this.tablero.casillas[45].tema.otraOca).toEqual(50);
		});
		it("...la Oca 50 te lleva la Oca 54",function(){
			expect(this.tablero.casillas[50].tema.otraOca).toEqual(54);
		});
		it("...la Oca 54 te lleva la Oca 59",function(){
			expect(this.tablero.casillas[54].tema.otraOca).toEqual(59);
		});
		it("...la Oca 59 te lleva la Oca 63",function(){
			expect(this.tablero.casillas[59].tema.otraOca).toEqual(63);
		});

	});

	describe("Comprobar el funcionamiento del resto de casillas...",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas);
		});

		it("...el Puente 6 te lleva al Puente 12",function(){
			expect(this.tablero.casillas[6].tema.otroPuente).toEqual(12);
		});
		it("...el Puente 12 te lleva al Puente 6",function(){
			expect(this.tablero.casillas[12].tema.otroPuente).toEqual(6);
		});
		
		it("...los Dados 26 te llevan a los Dados 53",function(){
			expect(this.tablero.casillas[26].tema.otroDado).toEqual(53);
		});
		it("...los Dados 53 te llevan a los Dados 26",function(){
			expect(this.tablero.casillas[53].tema.otroDado).toEqual(26);
		});
		it("...la Muerte te lleva a la casilla 1",function(){
			expect(this.tablero.casillas[58].tema.salida).toEqual(1);
		});
		it("...la Posada te deja un turno sin tirar",function(){
			expect(this.tablero.casillas[19].tema.castigo).toEqual(1);
		});
		it("...el Pozo te deja dos turnos sin tirar",function(){
			expect(this.tablero.casillas[31].tema.castigo).toEqual(2);
		});
		it("...el Laberinto te deja tres turnos sin tirar",function(){
			expect(this.tablero.casillas[42].tema.castigo).toEqual(3);
		});
		it("...la Cárcel te deja cuatro turnos sin tirar",function(){
			expect(this.tablero.casillas[52].tema.castigo).toEqual(4);
		});
	});

	describe("Comprobar el funcionamiento de los turnos...",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas,2);
			this.ju1=new Jugador("Pepe",this.juego);
			this.ju1.asignarFicha();
			this.ju2 = new Jugador("Luis",this.juego);
			this.ju2.asignarFicha();
			this.juego.setTurno(this.ju1);
		});

		it("... el jugador 1 tiene el turno",function(){
			expect(this.juego.turno.nombre).toEqual(this.ju1.nombre);
		});

		it("... el jugador 2 no tiene el turno",function(){
			expect(this.juego.turno.nombre).not.toEqual(this.ju2.nombre);
		});

		it("... el jugador uno cede el turno al jugador dos",function(){
			this.ju1.lanzarPruebas(3);
			expect(this.juego.turno.nombre).toEqual(this.ju2.nombre);
		});

		it("... el jugador dos cede el turno al jugador uno",function(){
			this.ju1.lanzarPruebas(3);
			this.ju2.lanzarPruebas(3);
			expect(this.juego.turno.nombre).toEqual(this.ju1.nombre);
		});

		it("... el jugador uno no cede el turno al jugador dos si cae en casilla especial",function(){
			this.ju1.lanzarPruebas(4);
			expect(this.juego.turno.nombre).not.toEqual(this.ju2.nombre);
		});

		it("... el jugador dos no cede el turno al jugador uno si cae en casilla especial",function(){
			this.ju1.lanzarPruebas(3);
			this.ju2.lanzarPruebas(4);
			expect(this.juego.turno.nombre).toEqual(this.ju2.nombre);
		});

		it("... el jugador uno cae en una casilla penalizada, los turnos siguen correctamente y el jugador uno no avanza",function(){
			this.ju1.lanzarPruebas(18);
			expect(this.juego.turno.nombre).toEqual(this.ju2.nombre);
			this.ju2.lanzarPruebas(1);
			expect(this.juego.turno.nombre).toEqual(this.ju1.nombre);
			this.ju1.lanzarPruebas(1);
			expect(this.ju1.ficha.casilla.posicion).toEqual(19);
			expect(this.juego.turno.nombre).toEqual(this.ju2.nombre);
		})

	});

	describe("Comprobar el funcionamiento de las fases...",function(){
		beforeEach(function(){
			this.tablero = new Tablero();
			this.coleccionFichas=[new Ficha("roja"),new Ficha("azul"),new Ficha("verde")];
			this.juego = new LaOca(this.tablero,this.coleccionFichas,2);
			this.ju1=new Jugador("Pepe",this.juego);
			this.ju1.asignarFicha();
		});
		it("... el juego esta en fase de Inicio al no tener 2 jugadores",function(){
			expect(this.juego.fase.titulo).toEqual("Inicial");
		});
		it("... el juego esta en fase de Jugar al tener 2 jugadores",function(){
			this.ju2 = new Jugador("Luis",this.juego);
			this.ju2.asignarFicha();
			expect(this.juego.fase.titulo).toEqual("Jugar");
		});
		it("... el juego esta en fase de Final al haber llegado un jugador a la meta",function(){
			this.ju2 = new Jugador("Luis",this.juego);
			this.ju2.asignarFicha();
			this.juego.setTurno(this.ju1);
			this.ju1.lanzarPruebas(62);
			expect(this.juego.fase.titulo).toEqual("Final");
		});

	});



})