/* script.js - Projeto Conselho Tutelar */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Proteção Escolar Iniciado.");

    // Gerenciamento do Formulário de Denúncia
    const formDenuncia = document.getElementById('formDenuncia');
    if (formDenuncia) {
        formDenuncia.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulação de envio seguro para a rede de proteção
            alert('Relato enviado com sucesso! Sua identidade foi preservada e o Conselho Tutelar será notificado.');
            this.reset();
        });
    }
});

// Função de Saída Rápida para preservar anonimato técnico (Etapa 21)
function saidaRapida() {
    // Substitui a URL atual no histórico para dificultar que o agressor veja o acesso ao site
    window.location.replace("https://www.google.com.br");
}

// Atalho de Teclado: Tecla ESC para fechar o site instantaneamente
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        saidaRapida();
    }
});