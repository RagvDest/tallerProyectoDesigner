

//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona. (ImageButton) View: FormFiltro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_147170 = function(  entities, executeCommandEventArgs ) {
    if(entities.FiltroBusquedaPersona.filtro === "CL"){
        executeCommandEventArgs.commons.api.viewState.hide('G_FILTROKNTO_728170');
        executeCommandEventArgs.commons.api.grid.refresh('QV_PH23_BJN21');
        executeCommandEventArgs.commons.api.viewState.show('G_FILTROODJA_847170');
    }
    else{
        executeCommandEventArgs.commons.api.viewState.hide('G_FILTROODJA_847170');
        executeCommandEventArgs.commons.api.grid.refresh('QV_GO54_YKT47');
        executeCommandEventArgs.commons.api.viewState.show('G_FILTROKNTO_728170');
    }
    executeCommandEventArgs.commons.execServer = false;

};