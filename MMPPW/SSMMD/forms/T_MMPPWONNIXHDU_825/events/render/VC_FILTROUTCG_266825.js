
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormFiltro
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.api.viewState.hide('G_FILTROKNTO_728170');
    renderEventArgs.commons.api.viewState.hide('G_FILTROODJA_847170');
    renderEventArgs.commons.execServer = false;

};