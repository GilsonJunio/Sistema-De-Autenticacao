async function carregar_Dados(){
	let buscar = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json');
	console.log(buscar);
	let objeto = await buscar.json();
	console.log(objeto);
	let dados = JSON.stringify(objeto.alunos);
	localStorage.setItem('usuarios', dados);

}
carregar_Dados()


let enviar = document.getElementById('enviar');
enviar.addEventListener('click',() =>{

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
	let procurar_email = buscar_usuarios.find((buscar_usuarios) => buscar_usuarios.email === email) || false;
		console.log(procurar_email)	
	let buscar_usuarios = JSON.parse(localStorage.getItem('usuarios'))
		console.log(buscar_usuarios)
		console.log(buscar_usuarios.email)
	
	localStorage.setItem('usuarios novos',JSON.stringify( usuarios_novos))

	if(procurar_email === false){
		alert("ESTE EMAIL NÃO FOI CADASTRADO")
	}
	else{
		alert("ESTE EMAIL JÁ FOI CADASTRADO")
	}

	if(dadosRepassados.email === ){

	}

	let usuarios = localStorage.getItem('usuarios')
	
	}
)
