const btns = document.querySelectorAll('.btnColor');
const text_info = document.querySelector('.info');
const btnStart = document.querySelector('.btnComenzar');

class Game {
    constructor(text_info, btns, btnStart) {
        this.ronda = 0;
        this.total_rondas = 5;

        this.secuencia = [];
        this.pos = 0;

        this.vel = 1000;

        this.blockedButtons = true;

        this.btns = btns;
        this.text_info = text_info;

        this.step = new Audio('./sound/step.mp3')
        this.error = new Audio('./sound/error.mp3')
        this.success = new Audio('./sound/success.mp3')
        this.win = new Audio('./sound/win.mp3')

    }

    init() {
        btnStart.addEventListener('click', () => this.startGame())
    }

    startGame() {
        btnStart.disabled = true;
        this.secuencia = this.crearSecuencia();

        //segunda partida

        this.setRonda(0)
        this.pos = 0;
        this.vel = 1000;

        btns.forEach((btn, i) => {

            btn.classList.remove('ganar')
            btn.onclick = () => this.buttonClick(i)

        });

        this.mostrarsecuencia()
    }

    setRonda(ronda) {
        this.ronda = ronda
        text_info.textContent = 'Ronda: ' + (this.ronda + 1);
    }

    crearSecuencia() {
        let seq = []

        for (let i = 0; i < this.total_rondas; i++) {
            seq.push(this.getRandomColor())
        }

        return seq
    }

    getRandomColor() {
        return Math.floor(Math.random() * 4);
    }

    buttonClick(btn) {
        if (!this.blockedButtons) {
            this.validate(btn)
        }
    }

    validate(color) {
        if (this.secuencia[this.pos] === color) {

            this.step.play();
            setTimeout(() => {
                this.step.pause()
                this.step.currentTime = 0;

            }, 300);            

            if (this.pos === this.ronda) {

                this.setRonda(this.ronda + 1);
                this.vel /= 1.3;
                this.isGameOver();

            } else {
                this.pos++;
            }

        } else {
            this.gameLost()
        }
    }

    isGameOver() {
        if (this.ronda === this.total_rondas) {
            this.gameWon();
        } else {
            this.success.play()
            setTimeout(() => {
                this.success.pause();
                this.success.currentTime = 0;
            }, 1500);

            this.pos = 0;
            this.mostrarsecuencia();
        }
    }

    mostrarsecuencia() {
        this.blockedButtons = true

        let index = 0;

        let timer = setInterval(() => {

            const btn = this.btns[ this.secuencia[index] ];

            this.step.play();
            setTimeout(() => {
                this.step.pause()
                this.step.currentTime = 0;
            }, 300);

            this.parpadear(btn)

            index++;

            if (index > this.ronda) {
                this.blockedButtons = false;
                clearInterval(timer);
            }

        }, this.vel)
    }

    parpadear(btn) {
        btn.classList.toggle('active');
        
        setTimeout(() => {

            btn.classList.toggle('active');
            
        }, this.vel / 2);
    }

    gameLost() {
        this.error.play();

        btnStart.disabled = false;
        this.blockedButtons = true;

        text_info.textContent = 'Has Fallado'
    }

    gameWon() {
        this.win.play();

        btnStart.disabled = false;
        this.blockedButtons = true;

        text_info.textContent = 'Has Ganado'

        btns.forEach(btn => {
            btn.classList.add('ganar');
        })
    }

}

let simon = new Game(text_info, btns, btnStart);
simon.init()