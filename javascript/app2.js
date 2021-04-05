//parte02
var cep= document.querySelector("#cep")

cep.oninput=()=>{
    var campocep=cep.value;
    if(campocep.length==5){
        cep.value+="-";
    }
   }
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value=result[campo]
        }
    }
}
cep.addEventListener('blur', (e)=>{
   let procurar = cep.value.replace("-","");
   const opcao ={
       method:'GET',
       mode:'cors',
       cache:'default'
   }
   fetch(`https://viacep.com.br/ws/${procurar}/json/`,opcao)
   .then(Response=>{Response.json()
    .then(data=>showData(data))
})

.catch(e=>console.log('ERRO'+e,message))
})


var rua = document.querySelector("#logradouro").value;
var numero=document.querySelector("#ncasa").value;
var bairro=document.querySelector("#bairro").value;
var localidade=document.querySelector("#localidade").value
var uf=document.querySelector("#uf").value;
var enviatwo=document.querySelector("#enviatwo").value;
enviatwo.addEventListener('click',()=>{
    if(!cep || !rua ||!numero|| !bairro || !localidade || !uf){
        alert('*Preencha todos os campos!');
        return false;}

        else{
            location.href="parte03.html"
        }
})