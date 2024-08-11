class FormaDeBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    escrever() {
        console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log(`Assando bolo de ${this.saborMassa}`)
    }
}

let bolo1 = new FormaDeBolo("Chocolate", "Brigadeiro")
let bolo2 = new FormaDeBolo("Baunilia", "Doce De Leite")

bolo1.escrever()
bolo2.escrever()
bolo1.assar()