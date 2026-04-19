// Bloqueia o clique direito do mouse
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloqueia atalhos de teclado (F12, Ctrl+Shift+I, Ctrl+U)
document.onkeydown = function(e) {
    if (e.keyCode == 123) { return false; } // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Inspect
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Element
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Console
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // View Source
};

// Mensagem no console para desencorajar curiosos
console.log("%c Atenção! ", "color: red; font-size: 30px; font-weight: bold;");
console.log("Este site está protegido. As ações foram monitoradas.");
