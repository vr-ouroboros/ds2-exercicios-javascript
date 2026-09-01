let scriptAtual = null;

document.getElementById('selecionaScript').addEventListener('change', function(event) {
    const scriptSelecionado = event.target.value;
    
    if (scriptAtual) {
        scriptAtual.remove();
        scriptAtual = null;
    }
    if (!scriptSelecionado) {
        return;

    }

    const script = document.createElement('script');
    script.src = scriptSelecionado;

    scriptAtual = script;
    document.body.appendChild(script);
});
