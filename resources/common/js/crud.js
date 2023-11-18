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
    $(document).on("focus", "input#nome", function(){
        $("input").removeClass('error').next('span').remove();
    });
});