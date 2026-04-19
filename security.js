/* 1. PROTEÇÃO CONTRA IFRAMES (Anti-Clickjacking) */
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

/* 2. BLOQUEIOS DE INTERAÇÃO (Proteção do Client-side) */
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || 
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};

/* 3. AVISO NO CONSOLE */
console.log("%c Segurança Ativada ", "background: red; color: white; font-size: 20px; padding: 5px;");

/* 4. LÓGICA DE FUNCIONAMENTO DA BARRA DE PESQUISA */
document.getElementById('searchInput').addEventListener('keyup', function(){
    let termoPesquisa = this.value.toLowerCase();
    let produtos = document.querySelectorAll('.link-card');
    
    produtos.forEach(function(produto) {
        let titulo = produto.querySelector('.title').textContent.toLowerCase();
        
        if (titulo.includes(termoPesquisa)) {
            produto.style.display = 'flex'; 
        } else {
            produto.style.display = 'none'; 
        }
    });
});
