function acesso(form){

//filtro letras maisculas convertendo td para minusculas
form.nome.value=form.nome.value.toLowerCase()
form.senha.value=form.senha.value.toLowerCase()

if (form.nome.value=="marta" && form.senha.value=="123"||
    form.nome.value=="jonas" && form.senha.value=="456"||
    form.nome.value=="paulo" && form.senha.value=="789"){

    location="pagina2.html"}
    else{
        form.nome.value=""
        form.senha.value=""
        alert("insert the correct information sr.")

    }
}