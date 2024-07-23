/*TODO
SISTEMA DE SALVAR USUARIOS







*/
/*
BUGS
O SISTEMA DE SALVAR USUARIOS SÓ CONSEGUE SALVAR UM UNICO USUARIO 11/05/2024
A VERIFICAÇÃO DE EMAILS NÃO ESTÁ FUNCIONANDO 23/07/2024

*/
/*
FIXES

VERIFICAÇÃO DE EMAILS CORRIGIDA 23/07/2024

*/

async function carregar_Dados(){
	let buscar = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json');
	console.log('-------RESULTADO DO FETCH-------');
	console.log(buscar);

	let objeto = await buscar.json();
	console.log('-------OBJETO-------')
	console.log(objeto);

	let dados = JSON.stringify(objeto.alunos);
//	console.log(dados)

	localStorage.setItem('usuarios', dados);

}
carregar_Dados()


let enviar = document.getElementById('enviar');
enviar.addEventListener('click',() =>{

	//SALVAR NOVOS USUÁRIOS	
	console.log('######### SALVAR NOVOS USUÁRIOS #########');

	let email = document.getElementById('email').value;
		console.log('--------EMAIL REPASSADO-----------');
		console.log(email);

	
	let senha = document.getElementById('senha').value;
		console.log('--------SENHA REPASSADA-----------');
		console.log(senha);

	let dados_coletar = {'dados':{'email_repassado':email,'senha_repassada':senha}};
		console.log('--------COLETAR DADOS REPASSADOS-----------');
		console.log(dados_coletar);
		console.log('---------COLETAR DADOS REPASSADOS EMAIL----------');
		console.log(dados_coletar.dados.email_repassado);

	let dados_coletados = dados_coletar.dados;
		console.log('-------DADOS COLETADOS------------');
		console.log(dados_coletados);
		console.log('---------DADOS COLETADOS EMAIL---------');
		console.log(dados_coletados.email_repassado);

	let usuarios_novos = [];
		usuarios_novos.push(dados_coletados)
		console.log('---------USUÁRIOS NOVOS----------');
		console.log(usuarios_novos)
		console.log(usuarios_novos[0].email_repassado)
	
	localStorage.setItem('usuarios novos',JSON.stringify( usuarios_novos))
	
	console.log('---------FUNÇÃO ADICIONAR NOVOS USUARIOS---------------')
	function adicionar_novosUsuarios(){
		let usuarios_Novos = JSON.parse(localStorage.getItem('usuarios novos'))	
		console.log(usuarios_Novos)
		
		let usuarios_Novos_Email = usuarios_Novos.email_repassado
		console.log(usuarios_Novos_Email)

		let email_repassado = dados_coletados.email_repassado
		console.log(email_repassado)

		if(email_repassado === usuarios_Novos.email){
			alert('11111111')
		}
		else{
			alert('22222222')
		}
	}

	adicionar_novosUsuarios()
	console.log('------------------------')

	// VERIFICAR SE EMAIL JÁ EXISTE
	console.log('######### VERIFICAR EMAIL EXISTENTE #########');

	let buscar_usuarios = JSON.parse(localStorage.getItem('usuarios'))
		console.log('------------------RESGATAR USUARIOS----------------------');
		console.log(buscar_usuarios)

	let procurar_email = buscar_usuarios.find((usuarios) => usuarios.email === email) || false;
		console.log('---------PROCURAR EMAIL NOS USUARIOS BUSCADOS----------');
		console.log(procurar_email)

	// VERIFICAR ESPAÇO VAZIO
	console.log('######### VERIFICAR ESPAÇO VAZIO #########');
/*
	let procurar_vazio = dados_coletados.find((dados_coletados) => dados_coletados.email_repassado === email) || false;
		console.log('---------PROCURAR VAZIO----------');
		console.log(procurar_vazio)
*/
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
