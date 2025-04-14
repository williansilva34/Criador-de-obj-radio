

var nome = document.querySelector("#f_nome")

var idade = document.querySelector("#f_idade")


var blindagem = document.querySelector("#blindagem")

var municao = document.querySelector("#municao")




var militar = document.querySelector("#radioM")

var normal = document.querySelector("#radioN")


var btn = document.querySelector("#add")

var res = document.querySelector("#res")





let carros = [];


militar.setAttribute("name","name2")


normal.setAttribute("name","name2")


blindagem.setAttribute("disabled","disabled")

municao.setAttribute("disabled","disabled")


militar.addEventListener("click",()=>{

    
    blindagem.removeAttribute("disabled","disabled")

    
    municao.removeAttribute("disabled","disabled")

})


const gerenciar =()=>{

    carros.innerHTML = "";

    carros.map((el)=>{
        const div = document.createElement("div");

        div.setAttribute("class","divs")
    
        div.innerHTML = "Nome : "+ el.nome + "<br/>";

        div.innerHTML += "Portas :"+ el.idade+"<br/>";

        div.innerHTML += "Blindagem : "+ el.blindagem + "<br/>";

        div.innerHTML += "Municao  :"+ el.municao 

        res.appendChild(div)


    })
  
}







btn.addEventListener("click",()=>{

    if(normal.checked){

        const c = new Carro(nome.value,idade.value)
        carros.push(c)

    }else{

        const b = new Militar(nome.value,idade.value,blindagem.value,municao.value)

        carros.push(b)
    }

    gerenciar()

})





class Carro{ //class pai

    constructor(nome,idade){

        
        this.nome = nome;

        this.idade= idade;

        this.ligado = false;

        this.vel = 0;

    }

ligar = function(){

    this.ligado = true;

}
desligar= function(){

    this.ligado = false;

}

}





class Militar extends Carro{


    constructor(nome,idade,blindagem,municao){

        super(nome,idade)

        this.blindagem= blindagem;

        this.municao=municao


    }

    atirar = function(){

        if(this.municao>0){

            this.municao--

        }

    }

}


const tl  = new Militar("Potente",20,200,200)

tl.atirar()
tl.atirar()
tl.atirar()
console.log(tl)