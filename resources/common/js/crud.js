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
    tabela += '<th scope="col">#</th><th scope="col">Nome</th>';
    tabela += '<th scope="col">Telefone</th><th scope="col">E-mail</th>';
    tabela += '<th scope="col">Endereço</th><th scope="col"></th><th scope="col"></th></tr></thead><tbody>';

    $each(
        jsonDados,
        function (indice, contato) {
            tabela += '<tr>';
            tabela += '<td>' + contato.id + '</td>';
            tabela += '<td>' + contato.nome + '</td>';
            tabela += '<td>' + contato.telefone + '</td>';
            tabela += '<td>' + contato.email + '</td>';
            tabela += '<td>' + contato.endereco + '</td>';
            tabela +='<td><a href="javascript:void(0);" id="editar_contato" contato_id="'
            + contato.id
                + '" class="btn btn-sucess btn-xs"><i class="glyphicon glyphicon-pencil"></i></a></td>';
            tabela += '<td><a href="javascript:void(0);" id="confirma_excluir" contato_id="'
                += contato.id
                + '" class="btn btn-danger btn-xs"><i class="glyphicon glyphicon-trash"></i></a></td>';
            tabela += '</tr>';
        });

    tabela += '</tbody></table></div>';
    $('div#conteudo').html(tabela);

}

function getFormularioInclusao() {
    var form = '<form class= "form-horizontal">';
    form += '<div class="form-group">';
    form += '<label for="nome" class="col-sm-2 control-label glyphicon glyphicon-user"></label>';
    form += '<div class="col-sm-8">';
    form += '<input type="text" class="form-control" id="nome" placeholder="Nome*" required>';
    form += '</div>';
    form += '</div>';
    form += '<div class="form-group">';
    form += '<label for="telefone" class="col-sm-2 control-label glyphicon glyphicon-phone"></label>';
    form += '<div class="col-sm-8">';
    form += '<input type"tel" class="form-control" id="telefone"placeholder="Telefone">';
    form += '</div>';
    form += '</div>';
    form += '<div class="form-group">';
    form += '<label for="email" class="col-sm-2 control-label glyphicon glyphicon-envelope"></label>';
    form += '<div class="col-sm-8">';
    form += '<input type"email" class="form-control" id="email"placeholder="E-mail">';
    form += '</div>';
    form += '</div>';
    form += '<div class="form-group">';
    form += '<label for="endereco" class="col-sm-2 control-label glyphicon glyphicon-home"></label>';
    form += '<div class="col-sm-8">';
    form += '<textarea class="form-control" rows="3" id="endereco" placeholder="Endereco"</textarea>';
    form += '</div>';
    form += '</div>';
    form += '<div class="form-group">';
    form += '<div class="col-sm-offset-2 col-dm-10">';
    form += '<button type="button" id="salvar_contato" class="btn btn-primary">Salvar</button>';
    form += '</div>';
    form += '</div>';
    form += '</form>';
    $('div#conteudo').html(form);

}