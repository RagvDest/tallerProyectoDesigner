
//Start signature to Callback event to CM_TMMPPWLR_L_3
task.executeCommandCallback.CM_TMMPPWLR_L_3 = function(entities, executeCommandCallbackEventArgs) {
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_WI23_RVV59');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});

};
