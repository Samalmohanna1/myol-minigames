gdjs.splashCode = {};
gdjs.splashCode.GDRatshiroObjects1= [];
gdjs.splashCode.GDRatshiroObjects2= [];
gdjs.splashCode.GDStudio_9595LogoObjects1= [];
gdjs.splashCode.GDStudio_9595LogoObjects2= [];


gdjs.splashCode.asyncCallback13530108 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}
gdjs.splashCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.splashCode.asyncCallback13530108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.splashCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.splashCode.GDRatshiroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Studio_Logo"), gdjs.splashCode.GDStudio_9595LogoObjects1);
{for(var i = 0, len = gdjs.splashCode.GDStudio_9595LogoObjects1.length ;i < len;++i) {
    gdjs.splashCode.GDStudio_9595LogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.splashCode.GDRatshiroObjects1.length ;i < len;++i) {
    gdjs.splashCode.GDRatshiroObjects1[i].setX((( gdjs.splashCode.GDStudio_9595LogoObjects1.length === 0 ) ? 0 :gdjs.splashCode.GDStudio_9595LogoObjects1[0].getPointX("")) + 40);
}
}
{ //Subevents
gdjs.splashCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.splashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.splashCode.GDRatshiroObjects1.length = 0;
gdjs.splashCode.GDRatshiroObjects2.length = 0;
gdjs.splashCode.GDStudio_9595LogoObjects1.length = 0;
gdjs.splashCode.GDStudio_9595LogoObjects2.length = 0;

gdjs.splashCode.eventsList1(runtimeScene);

return;

}

gdjs['splashCode'] = gdjs.splashCode;
