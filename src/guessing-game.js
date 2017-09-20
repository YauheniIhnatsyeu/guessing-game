class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        //console.log(Math.floor((this.max + this.min) / 2));
        return Math.round((this.max + this.min) / 2);
    }

    lower() {
        //console.log('lower');
        this.max = Math.round((this.max + this.min) / 2);
    }

    greater() {
        //console.log('greater');
        this.min = Math.round((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;