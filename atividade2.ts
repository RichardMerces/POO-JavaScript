/*
    Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Aviao {
    marca: string;
    modelo: string
    capacidade: number;

    constructor(marca: string, modelo: string, capacidade: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    mostrarInformacoes():void {
        console.log(`O avião ${this.marca} ${this.modelo} tem capacidade para ${this.capacidade} passageiros.`)
    }
}

let aviao1 = {
    marca: "Airbus",
    modelo: "A320",
    capacidade: 140
}

let aviao2 = {
    marca: "Boeing",
    modelo: "737",
    capacidade: 180
}

let av1 = new Aviao(aviao1.marca, aviao1.modelo, aviao1.capacidade);
let av2 = new Aviao(aviao2.marca, aviao2.modelo, aviao2.capacidade);

av1.mostrarInformacoes();
av2.mostrarInformacoes();