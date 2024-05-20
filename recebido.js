document.getElementById('receitaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var valor = parseFloat(document.getElementById('valor').value);
    var data = document.getElementById('data').value;
    var formaPagamento = document.getElementById('formaPagamento').value;
    var descricao = document.getElementById('descricao').value;

    document.write("Valor:", valor);
    document.write("Data:", data);
    document.write("Forma de Pagamento:", formaPagamento);
    document.write("Descrição:", descricao);

    // Aqui adicionar lógica para salvar os dados em um banco de dados ou realizar outras operações necessárias
    // Por exemplo, você pode enviar os dados para um servidor usando AJAX
    // Ou salvar os dados localmente usando LocalStorage ou IndexedDB
});
