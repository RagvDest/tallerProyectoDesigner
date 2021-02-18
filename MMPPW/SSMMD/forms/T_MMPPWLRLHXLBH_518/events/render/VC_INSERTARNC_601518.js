
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: Insertar Cliente
task.render = function (entities, renderEventArgs){
    if(renderEventArgs.commons.args.mode===2){
    	renderEventArgs.commons.api.viewState.hide("CM_TMMPPWLR_L_3");
        renderEventArgs.commons.api.viewState.show("CM_TMMPPWLR_PB1");
    }else{
    	renderEventArgs.commons.api.viewState.show("CM_TMMPPWLR_L_3");
        renderEventArgs.commons.api.viewState.hide("CM_TMMPPWLR_PB1");
    }
    renderEventArgs.commons.execServer = false;

};