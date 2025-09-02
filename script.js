let nome = prompt("digite seu nome completo: ").toLocaleLowerCase ()

let idade = parseInt(prompt("digite sua idade")) 

//da acesso ao admin

if (nome === "admin") {
    alert("bem vindo, admin! Acesso total liberado.")
} //da acesso ao moderador

else if (nome === "moderador" && idade >= 16) {
    alert("olá,moderador! Acesso liberado para a área de moderação.")
} //da acesso pra maior de idade

else if (idade >= 18) {
    alert('Olá, ${nome}! Voce acesso completo.Boas-vindas a plataforma!')
} //convite jovem aprendiz

else if (idade >= 13 && idade <= 17) {
    alert("Acesso negado.voce pode participar do nosso programa jovem aprendiz!")

}

else {alert("acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")}
