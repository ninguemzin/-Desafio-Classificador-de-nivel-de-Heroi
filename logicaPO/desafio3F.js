class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    tipoAtaque(){
        let ataque = "sem"
        if(this.tipo === "Mago"){
            ataque = "magia"
        }
        else if(this.tipo === "Guerreiro"){
            ataque = "espada"
        }
        else if(this.tipo === "Monge"){
            ataque = "artes marciais"
        }
        else if(this.tipo === "Ninja"){
            ataque = "shuriken"
        }
        return ataque
    }

    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.tipoAtaque()}`)
    }
}

var heroi1 = new Heroi("Marcos", 17, "Guerreiro")
var heroi2 = new Heroi("Emerson", 22, "Ninja")
var heroi3 = new Heroi("Alexandre", 37, "Monge")
var heroi4 = new Heroi("Gabi", 21, "Mago")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()