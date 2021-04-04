document.getElementById('enviaone').addEventListener('click', ()=>{
    var nome =document.getElementById('nome').value
    var cpf =document.getElementById('cpf').value
    var nascimento =document.getElementById('nascimento').value
    var mae =document.getElementById('mae').value
    var pai =document.getElementById('pai').value
    var filhos =document.getElementById('filhos').value

   
    if(!nome || !cpf || !nascimento || !mae || !pai || !filhos){
        alert('*Preencha os campos!');
        var red = document.querySelectorAll('input')
        red.style.border="2px solid red";
    }else{
        alert('enviado')
    }

    document.getElementById('nome').value= ""
    document.getElementById('cpf').value= ""
    document.getElementById('nascimento').value= ""
    document.getElementById('mae').value= ""
    document.getElementById('pai').value= ""
    document.getElementById('filhos').value = ""

})