
document.getElementById('btn-agendar').addEventListener('click', function() {

    var formulario = document.getElementById('formulario');
    formulario.style.display = 'block';


    formulario.style.position = 'fixed';
    formulario.style.top = '50%';
    formulario.style.left = '50%';
    formulario.style.transform = 'translate(-50%, -50%)';
    formulario.style.zIndex = '1000';

    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function() {
        formulario.style.display = 'none';
        overlay.parentNode.removeChild(overlay);
    });

    // Permitir interação com o formulário
    formulario.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
});
