document.addEventListener('DOMContentLoaded'), function() {
    const form = document.getElementById('cadastroForm');
    const btnSubmit = document.getElementById('btn1');
    const btnVoltar = document.getElementById('btn2');
}

    form.addEventListener('submit'), function(event){
        event.preventDefault(); 
    }
    btnVoltar.addEventListener('click', function() {
        window.location.href = '/Page/index.html';
        function validateForm() {
            const nome = document.getElementById('nome').value.trim();
            const dono = document.getElementById('dono').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const raca = document.getElementById('raca').value.trim();
        
            // Verifica se os campos obrigatórios estão preenchidos
            if (nome === '' || dono === '' || telefone === '' || raca === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return false; 
            }
            return true;
        }
        
});
function voltar() {
    if (confirm("Deseja realmente voltar para a página inicial?")) {
        window.location.href = '/Page/index.html';
    }
}; 