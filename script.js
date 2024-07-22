/*TODO
SISTEMA DE SALVAR USUARIOS







*/
/*
BUGS
O SISTEMA DE SALVAR USUARIOS SÓ CONSEGUE SALVAR UM UNICO USUARIO 11/05/2024


*/

async function carregar_Dados(){
	let buscar = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json');
	console.log(buscar);

	let objeto = await buscar.json();
	console.log(objeto);

	let dados = JSON.stringify(objeto.alunos);
//	console.log(dados)

	localStorage.setItem('usuarios', dados);

}
carregar_Dados()


let enviar = document.getElementById('enviar');
enviar.addEventListener('click',() =>{

	//SALVAR NOVOS USUÁRIOS	
	let email = document.getElementById('email').value;
		console.log(email);
	
	let senha = document.getElementById('senha').value;
		console.log(senha);

	let dados_coletar = {'dados':{'email_repassado':email,'senha_repassada':senha}};
		console.log(dados_coletar);
		console.log(dados_coletar.dados.email_repassado);

	let dados_coletados = dados_coletar.dados;
		console.log(dados_coletados);
		console.log(dados_coletados.email_repassado);

	let usuarios_novos = [];
		usuarios_novos.push(dados_coletados)
		console.log(usuarios_novos)
	
	localStorage.setItem('usuarios novos',JSON.stringify( usuarios_novos))
	
	// VERIFICAR SE EMAIL JÁ EXISTE

	let buscar_usuarios = JSON.parse(localStorage.getItem('usuarios'))
		console.log(buscar_usuarios)
		console.log(buscar_usuarios.email)

	let procurar_email = buscar_usuarios.find((buscar_usuarios) => buscar_usuarios.email === email) || false;
		console.log(procurar_email)

	// VERIFICAR ESPAÇO VAZIO

	let procurar_vazio = dados_coletados.find((dados_coletados) => dados_coletados.email_repassado === email) || false;
		console.log(procurar_email)

	if(procurar_email === false){
		alert("ESTE EMAIL NÃO FOI CADASTRADO")
	}
	else{
		alert("ESTE EMAIL JÁ FOI CADASTRADO")
	}

//	let dados_comparar = dados_coletados.find((usuarios_novos) => dados_coletados.email_repassado === email && dados_coletados.senha_repassada === senha)
//		console.log(dados_comparar)
/*
	if(dadosRepassados.email === ){

	}
*/
	let usuarios = localStorage.getItem('usuarios')
	
	})
