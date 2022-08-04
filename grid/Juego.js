class Juego {
    constructor(casillas, botones, jugador1_text, jugador2_text, imagenes) {
        this.casillas = casillas;
        this.botones = botones;
        this.jugador1_text = jugador1_text;
        this.jugador2_text = jugador2_text;
        this.imagenes = imagenes;

        this.jugador1_score = 0;
        this.jugador2_score = 0;

        this.turno;

        this.gamestate;
    }

    init() {
        this.turno = 1;
        this.gamestate = {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
        };
    }

    reset() {
        //reinicar
    }

    dibujar(casilla, imagen) {
        let simbolo;

        if (this.turno == 1) {
            simbolo = 'X'
        } else {
            simbolo = 'O';
        }

        this.gamestate[casilla.id]=simbolo;
        console.log(this.gamestate);

        if (simbolo == 'X') {
            imagen.src = 'img/turtle.png';
        } else if (simbolo == 'O') {
            imagen.src = 'img/whale.png';
        }
    }

    click(casilla, imagen) {

        this.dibujar(casilla, imagen);
        this.comprobar(casilla, imagen);
        this.cambiarTurno()
    }

    cambiarTurno() {
        if (this.turno == 1) {
            this.turno = 0;
        } else {
            this.turno = 1;
        }
    }

    comprobar(casilla, imagen) {

        // this.casillas.forEach((casilla) => {
        //     console.log('......' + casilla);
        //     this.gamestate.push(casilla.innerText);
        // })

        let combinaciones = [];

        combinaciones.push([1, 2, 3]);
        combinaciones.push([4, 5, 6]);
        combinaciones.push([7, 8, 9]);

        combinaciones.push([1, 4, 7])
        combinaciones.push([2, 5, 8])
        combinaciones.push([3, 6, 9])

        combinaciones.push([1, 5, 9])
        combinaciones.push([3, 5, 7])

        combinaciones.forEach(combi => {

            if ((this.gamestate[combi[0]] == this.gamestate[combi[1]] && this.gamestate[combi[0]] == this.gamestate[combi[2]]) &&
                this.gamestate[combi[0]] != '' && this.gamestate[combi[1]] != '' && this.gamestate[combi[2]] != '') {
                this.ganar(this.gamestate[combi[0]])
            }
        });



    }

    ganar(simbolo) {
        this.casillas.forEach(casilla => {
            casilla.innerText = '';
        });

        if (simbolo == 'X') {
            this.jugador1_score++;
        } else if (simbolo == 'O') {
            this.jugador2_score++;
        }

        this.jugador1_text.innerText = this.jugador1_score;
        this.jugador2_text.innerText = this.jugador2_score;

    }

}

