gdjs.SplashCode = {};
gdjs.SplashCode.GDSleepySamObjects1= [];
gdjs.SplashCode.GDSleepySamObjects2= [];
gdjs.SplashCode.GDSplash_95ScreenObjects1= [];
gdjs.SplashCode.GDSplash_95ScreenObjects2= [];
gdjs.SplashCode.GDSleepySam_95TitleObjects1= [];
gdjs.SplashCode.GDSleepySam_95TitleObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};
gdjs.SplashCode.conditionTrue_1 = {val:false};
gdjs.SplashCode.condition0IsTrue_1 = {val:false};
gdjs.SplashCode.condition1IsTrue_1 = {val:false};


gdjs.SplashCode.asyncCallback13965452 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("SleepySam"), gdjs.SplashCode.GDSleepySamObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("SleepySam_Title"), gdjs.SplashCode.GDSleepySam_95TitleObjects2);

gdjs.copyArray(runtimeScene.getObjects("Splash_Screen"), gdjs.SplashCode.GDSplash_95ScreenObjects2);
{for(var i = 0, len = gdjs.SplashCode.GDSleepySam_95TitleObjects2.length ;i < len;++i) {
    gdjs.SplashCode.GDSleepySam_95TitleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.SplashCode.GDSleepySamObjects2.length ;i < len;++i) {
    gdjs.SplashCode.GDSleepySamObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.SplashCode.GDSplash_95ScreenObjects2.length ;i < len;++i) {
    gdjs.SplashCode.GDSplash_95ScreenObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Splash");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SplashCode.GDSleepySamObjects1) asyncObjectsList.addObject("SleepySam", obj);
for (const obj of gdjs.SplashCode.GDSleepySam_95TitleObjects1) asyncObjectsList.addObject("SleepySam_Title", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.SplashCode.asyncCallback13965452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SplashCode.eventsList1 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
{gdjs.SplashCode.conditionTrue_1 = gdjs.SplashCode.condition0IsTrue_0;
gdjs.SplashCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13964220);
}
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SleepySam"), gdjs.SplashCode.GDSleepySamObjects1);
gdjs.copyArray(runtimeScene.getObjects("SleepySam_Title"), gdjs.SplashCode.GDSleepySam_95TitleObjects1);
{for(var i = 0, len = gdjs.SplashCode.GDSleepySam_95TitleObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDSleepySam_95TitleObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.SplashCode.GDSleepySam_95TitleObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.SplashCode.GDSleepySamObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDSleepySamObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.SplashCode.GDSleepySamObjects1[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.SplashCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SplashCode.eventsList2 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SplashCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDSleepySamObjects1.length = 0;
gdjs.SplashCode.GDSleepySamObjects2.length = 0;
gdjs.SplashCode.GDSplash_95ScreenObjects1.length = 0;
gdjs.SplashCode.GDSplash_95ScreenObjects2.length = 0;
gdjs.SplashCode.GDSleepySam_95TitleObjects1.length = 0;
gdjs.SplashCode.GDSleepySam_95TitleObjects2.length = 0;

gdjs.SplashCode.eventsList2(runtimeScene);

return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
