$('#add').bind('click', function () {
    $('#agendalijst').append('<li class="agendaitem">'+
        '<input class="itembox" type="checkbox"/>'+
        '<input type="date" value="" id="itemdate"/>'+
        '<input id="itemtxt" type="textarea" '+
        'placeholder="to do" /></li>')
});