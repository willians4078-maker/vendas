/* 1. PROTEÇÃO CONTRA IFRAMES (Substitui o frame-ancestors que falhou) */
if (top !== self) {
    top.location.replace(self.location.href);
}
/* 2. BLOQUEIOS DE INTERAÇÃO */
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloqueia F12, Ctrl+Shift+I, Ctrl+U, etc.
document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};
/* 3. AVISO NO CONSOLE */
console.log("%c Segurança Ativada ", "background: red; color: white; font-size: 20px; padding: 5px;");

document.getElementById('searchInput').addEventListener('keyup', function(){
    // Pega o que foi digitado e transforma em letras minúsculas
    let termoPesquisa = this.value.toLowerCase();
    // Pega todos os cards de produtos
    let produtos = document.querySelectorAll('.link-card');
    // Passa por cada produto verificando se o nome bate com a pesquisa
    produtos.forEach(function(produto) 
                     {
                         let titulo = produto.querySelector('.title').textContent.toLowerCase();
                
                         if (titulo.includes(termoPesquisa))
                         {
                             produto.style.display = 'flex'; // Mostra se bater
                         } 
                         else 
                         {
                             produto.style.display = 'none'; // Esconde se não bater
                         }
            });
});
