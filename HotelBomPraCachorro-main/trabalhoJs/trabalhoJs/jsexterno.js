
let listaLogin = JSON.parse(localStorage.getItem("listaLogin")) || [];
let listaNomeDog = JSON.parse(localStorage.getItem("listaNomeDog")) || [];
let listaAgendamento = JSON.parse(localStorage.getItem("listaAgendamento")) || [];
var valorDiaria = 300;
var valorDiariaAllInclusive = 600;



function fazerLogin() {
   let senha = document.getElementById("senhalogin").value
   let email = document.getElementById("emaillogin").value
   
  let usuarioEncontrado = listaLogin.find(user=> user.senha === senha && user.email === email)
    if(usuarioEncontrado){
        window.location.href = "loginDog.html";
           } else {
               alert("Email ou Senha incorretos!!");
           } 
    }        
    
  
    


function fazerCadastro(){
    let email = document.getElementById("emailCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;
    let existeSenha = listaLogin.some(item=> item.senha === senha)
    let existeEmail = listaLogin.some(item=> item.email === email)
    if(!existeEmail && !existeSenha){
             listaLogin.push({email: email, senha: senha});
            localStorage.setItem("listaLogin", JSON.stringify(listaLogin));
         window.location.href = "areaCadastroDog.html";
    }
    else{
 alert("Email ou Senhas ja estao logados!")}

    
}
function fazerCadastroDog(){
    let nome = document.getElementById("nomeD").value;
    let idade = document.getElementById("idadeDog").value;
    let observacao = document.getElementById("obsDog").value;
    let especie = document.getElementById("especieDog").value;
    const idDog = (Math.random()*100).toString();
    let identificacao = document.getElementById("identificacao")
    let dogExiste = listaNomeDog.find(id=> id.idDog === idDog)
            if(dogExiste){
            alert("Seu doguinho ja esta cadastrado!")
                return;
        }
        else{
            identificacao.innerHTML= idDog;
            let listaparacadaDog = {nome: nome,
            idade: idade,
            observacao: observacao,
            especie: especie,
            idDog: idDog}
            
        
       listaNomeDog.push(listaparacadaDog)
        localStorage.setItem("listaNomeDog", JSON.stringify(listaNomeDog));
        alert("Doguinho Cadastrado com sucesso!!")
    
        
        }
    
    }
    
       

    

function fazerLoginDog(){
    let nome = document.getElementById("nomeDog").value;
    let id = document.getElementById("idDog").value;

let dogEncontrado = listaNomeDog.find(dog => dog.idDog === id)
        if(!dogEncontrado){
           alert("ID não encontrado!! Tente novamente ou faça o cadastro do seu dog.")
           return; 
        }else{
            window.location.href = "areaDeAgendar.html"
        }
    
}

    



function calcularValor(){
    let dataIn = document.getElementById("dataIn").value
    let dataOut = document.getElementById("dataOut").value
    let hourIn = document.getElementById("hourIn").value
    let hourOut = document.getElementById("hourOut").value
    let inclusive = document.getElementById("allInclusive").value
    let valor = document.getElementById("valor")
    if(!dataIn || !dataOut){
        alert("Por favor, preencha as datas de entrada e saída.")
        return;
    }
    let d1 = new Date(dataIn);
    let d2 = new Date(dataOut);

 
    let calculo = (d2 - d1) / (1000 * 3600 * 24);
    if(calculo <=0){
        alert("A data de saida deve ser maior que a data de entrada!");
        return;
    }
    if(inclusive === 'sim'){
        let mult = calculo * valorDiariaAllInclusive;
        valor.innerHTML = mult
    } 
    else{
    let mult = calculo * valorDiaria;
    valor.innerHTML = mult


}  
}


function agendar(){
     let dataIn = document.getElementById("dataIn").value
    let dataOut = document.getElementById("dataOut").value
    let hourIn = document.getElementById("hourIn").value
    let hourOut = document.getElementById("hourOut").value
    let inclusive = document.getElementById("allInclusive").value 
    if(!dataIn || !dataOut || !hourIn || !hourOut || !inclusive){
        alert("Insira os campos para agendar!!!")
    }else{
        window.location.href="conclusao.html"
    }
    
}