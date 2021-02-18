
//Start signature to Callback event to CM_TMMPPWMX_W7M
task.executeCommandCallback.CM_TMMPPWMX_W7M = function(entities, executeCommandCallbackEventArgs) {
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_XR54_ORO20');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});

};
