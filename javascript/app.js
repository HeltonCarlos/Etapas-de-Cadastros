var cpf =document.getElementById('cpf')
var nascimento =document.getElementById('nascimento')
cpf.oninput= function(){
    var campocpf= cpf.value;
    if(campocpf.length==3||campocpf.length==7){
        cpf.value+=".";
    }
    if(campocpf.length==11){
        cpf.value+="-";
    }
}

nascimento.oninput=()=>{
    var camponas=nascimento.value;
    if(camponas.length==2|| camponas.length==5){
        nascimento.value+="/";
    }
}

document.getElementById('enviaone').addEventListener('click', ()=>{
    var nome =document.getElementById('nome').value
    var cpf =document.getElementById('cpf').value
    var nascimento =document.getElementById('nascimento').value
    var mae =document.getElementById('mae').value
    var pai =document.getElementById('pai').value
    var filhos =document.getElementById('filhos')


    if(!nome || !cpf || !nascimento || !mae || !pai || !filhos){
        alert('*Preencha todos os campos!');
        return false;}

        else{
            location.href="parte02.html"
        }

    document.getElementById('nome').value= ""
    document.getElementById('cpf').value= ""
    document.getElementById('nascimento').value= ""
    document.getElementById('mae').value= ""
    document.getElementById('pai').value= ""
    document.getElementById('filhos').value = ""

})