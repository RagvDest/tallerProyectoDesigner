

//Entity: Persona
//Persona.estadoCivil (ComboBox) View: Registro Persona
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADOCIVILZUDM_741224 = function(  entities, changedEventArgs ) {
    if(changedEventArgs.newValue === "SO" || changedEventArgs.newValue === "DI"){
        changedEventArgs.commons.api.viewState.hide("VA_NOMBRECONYUGUUU_311224");
        changedEventArgs.commons.api.viewState.hide("VA_APELLIDOCONYUUE_587224");
    }else{
        changedEventArgs.commons.api.viewState.show("VA_NOMBRECONYUGUUU_311224",true);
        changedEventArgs.commons.api.viewState.show("VA_APELLIDOCONYUUE_587224");
    }
    changedEventArgs.commons.execServer = false;

};