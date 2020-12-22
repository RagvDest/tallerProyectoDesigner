
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: Registro Persona
task.render = function (entities, renderEventArgs){
     if(renderEventArgs.commons.args..mode===2){
    	renderEventArgs.commons.api.viewState.hide("CM_TMMPPWMX_W7M");
        changedEventArgs.commons.api.viewState.show("CM_TMMPPWMX_9QY");
    }else{
    	renderEventArgs.commons.api.viewState.show("CM_TMMPPWMX_W7M");
        renderEventArgs.commons.api.viewState.hide("CM_TMMPPWMX_9QY");
    }
    renderEventArgs.commons.execServer = false;

};