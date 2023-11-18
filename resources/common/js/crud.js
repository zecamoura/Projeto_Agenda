$(function () {
    $(document).on("click", "a#listar_contato", function () {
        getListarContato();
    });
    $(document).on("click", "a#novo_contato", function () {
        getFormularioInclusao();
    });
    $(document).on("click", "button#salvar_contato", function () {
        if (validaDados()) {
            salvarConato();
        }
    });
    $(document).on("click", "a#confirma_excluir", function () {
        confirmaExclusao(this);
    });
    $(document).on("click", "button#excluir", function () {
        excluirContato();
    });
    $(document).on("click", "a#editar_contato", function () {
        getEditarContato(this);
    });
    $(document).on("click", "button#salvar_contato_edicao", function () {
        if (validaDados()) {
            salvarConatoEdicao();
        }
    });
    $(document).on("focus", "input#nome", function () {
        $("input").removeClass('error').next('span').remove();
    });
});
function getListarContato() {
    $('#carregando').show();

    $.post('crud.php', {
        acao: 'listar_contato'
    }, function (dados) {
        criarListagemTabela(dados);
        $('#carregando').hide();
    }, "json");
}

function criarListagemTabela(jsonDados) {
    var tabela = '<div class="table-responsive">';
    tabela += '<table class="table table-hover table-bordered"><thead><tr>';
    tabela += '<th scope="col">#</th><th scope="col">Nome</th>'
    tabela += '<th scope="col">Telefone</th><th scope="col">E-mail</th>'
    tabela += '<th scope="col">Endereço</th><th scope="col"></th><th scope="col"></th></tr></thead><tbody>';


}