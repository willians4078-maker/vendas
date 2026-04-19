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
