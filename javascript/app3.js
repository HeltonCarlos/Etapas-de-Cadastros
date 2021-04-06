

document.querySelector('#enviathree').addEventListener('click', ()=>{

    var arquivo=document.querySelector("#inserir").value;
    if(arquivo==""){
        alert('Envie seu currículo')
    }else{ alert('Obrigado! Agora é com a empresa, sua resposta chegará no e-mail')}
})

