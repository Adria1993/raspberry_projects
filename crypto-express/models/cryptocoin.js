class Cryptocoin{
    name = "";
    value = 0;
    wallet = 0;

    constructor(name, value, wallet){
        this.name = name;
        this.value = value;
        this.wallet = wallet;
    }
};

module.exports = Cryptocoin;