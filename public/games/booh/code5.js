gdjs.Story_95IntroCode = {};
gdjs.Story_95IntroCode.GDUI_95ShadowObjects1= [];
gdjs.Story_95IntroCode.GDUI_95ShadowObjects2= [];
gdjs.Story_95IntroCode.GDUI_95ShadowObjects3= [];
gdjs.Story_95IntroCode.GDUI_95GradientObjects1= [];
gdjs.Story_95IntroCode.GDUI_95GradientObjects2= [];
gdjs.Story_95IntroCode.GDUI_95GradientObjects3= [];
gdjs.Story_95IntroCode.GDHeaderObjects1= [];
gdjs.Story_95IntroCode.GDHeaderObjects2= [];
gdjs.Story_95IntroCode.GDHeaderObjects3= [];
gdjs.Story_95IntroCode.GDBack_95StoryObjects1= [];
gdjs.Story_95IntroCode.GDBack_95StoryObjects2= [];
gdjs.Story_95IntroCode.GDBack_95StoryObjects3= [];
gdjs.Story_95IntroCode.GDInstructionsObjects1= [];
gdjs.Story_95IntroCode.GDInstructionsObjects2= [];
gdjs.Story_95IntroCode.GDInstructionsObjects3= [];
gdjs.Story_95IntroCode.GDSkip_95BtnObjects1= [];
gdjs.Story_95IntroCode.GDSkip_95BtnObjects2= [];
gdjs.Story_95IntroCode.GDSkip_95BtnObjects3= [];
gdjs.Story_95IntroCode.GDOpening_95SceneObjects1= [];
gdjs.Story_95IntroCode.GDOpening_95SceneObjects2= [];
gdjs.Story_95IntroCode.GDOpening_95SceneObjects3= [];
gdjs.Story_95IntroCode.GDLarge_95FlameObjects1= [];
gdjs.Story_95IntroCode.GDLarge_95FlameObjects2= [];
gdjs.Story_95IntroCode.GDLarge_95FlameObjects3= [];
gdjs.Story_95IntroCode.GDCardObjects1= [];
gdjs.Story_95IntroCode.GDCardObjects2= [];
gdjs.Story_95IntroCode.GDCardObjects3= [];

gdjs.Story_95IntroCode.conditionTrue_0 = {val:false};
gdjs.Story_95IntroCode.condition0IsTrue_0 = {val:false};
gdjs.Story_95IntroCode.condition1IsTrue_0 = {val:false};
gdjs.Story_95IntroCode.condition2IsTrue_0 = {val:false};
gdjs.Story_95IntroCode.condition3IsTrue_0 = {val:false};
gdjs.Story_95IntroCode.conditionTrue_1 = {val:false};
gdjs.Story_95IntroCode.condition0IsTrue_1 = {val:false};
gdjs.Story_95IntroCode.condition1IsTrue_1 = {val:false};
gdjs.Story_95IntroCode.condition2IsTrue_1 = {val:false};
gdjs.Story_95IntroCode.condition3IsTrue_1 = {val:false};


gdjs.Story_95IntroCode.asyncCallback13027244 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Skip_Btn"), gdjs.Story_95IntroCode.GDSkip_95BtnObjects2);

{for(var i = 0, len = gdjs.Story_95IntroCode.GDSkip_95BtnObjects2.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDSkip_95BtnObjects2[i].hide(false);
}
}}
gdjs.Story_95IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Story_95IntroCode.GDSkip_95BtnObjects1) asyncObjectsList.addObject("Skip_Btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Story_95IntroCode.asyncCallback13027244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Story_95IntroCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Back_Story"), gdjs.Story_95IntroCode.GDBack_95StoryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Header"), gdjs.Story_95IntroCode.GDHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skip_Btn"), gdjs.Story_95IntroCode.GDSkip_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("UI_Gradient"), gdjs.Story_95IntroCode.GDUI_95GradientObjects1);
{for(var i = 0, len = gdjs.Story_95IntroCode.GDSkip_95BtnObjects1.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Story_95IntroCode.GDUI_95GradientObjects1.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDUI_95GradientObjects1[i].setColor("238;126;88");
}
}{for(var i = 0, len = gdjs.Story_95IntroCode.GDHeaderObjects1.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDHeaderObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.Story_95IntroCode.GDHeaderObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.Story_95IntroCode.GDBack_95StoryObjects1.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDBack_95StoryObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.Story_95IntroCode.GDBack_95StoryObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.Story_95IntroCode.GDSkip_95BtnObjects1.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.Story_95IntroCode.mapOfGDgdjs_46Story_9595IntroCode_46GDSkip_9595BtnObjects2Objects = Hashtable.newFrom({"Skip_Btn": gdjs.Story_95IntroCode.GDSkip_95BtnObjects2});
gdjs.Story_95IntroCode.mapOfGDgdjs_46Story_9595IntroCode_46GDSkip_9595BtnObjects1Objects = Hashtable.newFrom({"Skip_Btn": gdjs.Story_95IntroCode.GDSkip_95BtnObjects1});
gdjs.Story_95IntroCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Story_95IntroCode.GDSkip_95BtnObjects1, gdjs.Story_95IntroCode.GDSkip_95BtnObjects2);


gdjs.Story_95IntroCode.condition0IsTrue_0.val = false;
{
gdjs.Story_95IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Story_95IntroCode.mapOfGDgdjs_46Story_9595IntroCode_46GDSkip_9595BtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.Story_95IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Story_95IntroCode.GDSkip_95BtnObjects2 */
{for(var i = 0, len = gdjs.Story_95IntroCode.GDSkip_95BtnObjects2.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDSkip_95BtnObjects2[i].setColor("189;189;189");
}
}}

}


{

/* Reuse gdjs.Story_95IntroCode.GDSkip_95BtnObjects1 */

gdjs.Story_95IntroCode.condition0IsTrue_0.val = false;
gdjs.Story_95IntroCode.condition1IsTrue_0.val = false;
gdjs.Story_95IntroCode.condition2IsTrue_0.val = false;
{
gdjs.Story_95IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Story_95IntroCode.condition0IsTrue_0.val ) {
{
gdjs.Story_95IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Story_95IntroCode.mapOfGDgdjs_46Story_9595IntroCode_46GDSkip_9595BtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Story_95IntroCode.condition1IsTrue_0.val ) {
{
{gdjs.Story_95IntroCode.conditionTrue_1 = gdjs.Story_95IntroCode.condition2IsTrue_0;
gdjs.Story_95IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10243516);
}
}}
}
if (gdjs.Story_95IntroCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Story_95IntroCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Skip_Btn"), gdjs.Story_95IntroCode.GDSkip_95BtnObjects1);

gdjs.Story_95IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Story_95IntroCode.GDSkip_95BtnObjects1.length;i<l;++i) {
    if ( gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[i].isVisible() ) {
        gdjs.Story_95IntroCode.condition0IsTrue_0.val = true;
        gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[k] = gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[i];
        ++k;
    }
}
gdjs.Story_95IntroCode.GDSkip_95BtnObjects1.length = k;}if (gdjs.Story_95IntroCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Story_95IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Story_95IntroCode.eventsList4 = function(runtimeScene) {

{


gdjs.Story_95IntroCode.condition0IsTrue_0.val = false;
{
gdjs.Story_95IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Story_95IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Skip_Btn"), gdjs.Story_95IntroCode.GDSkip_95BtnObjects1);
{for(var i = 0, len = gdjs.Story_95IntroCode.GDSkip_95BtnObjects1.length ;i < len;++i) {
    gdjs.Story_95IntroCode.GDSkip_95BtnObjects1[i].hide();
}
}
{ //Subevents
gdjs.Story_95IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Story_95IntroCode.eventsList1(runtimeScene);
}


{


gdjs.Story_95IntroCode.eventsList3(runtimeScene);
}


};

gdjs.Story_95IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Story_95IntroCode.GDUI_95ShadowObjects1.length = 0;
gdjs.Story_95IntroCode.GDUI_95ShadowObjects2.length = 0;
gdjs.Story_95IntroCode.GDUI_95ShadowObjects3.length = 0;
gdjs.Story_95IntroCode.GDUI_95GradientObjects1.length = 0;
gdjs.Story_95IntroCode.GDUI_95GradientObjects2.length = 0;
gdjs.Story_95IntroCode.GDUI_95GradientObjects3.length = 0;
gdjs.Story_95IntroCode.GDHeaderObjects1.length = 0;
gdjs.Story_95IntroCode.GDHeaderObjects2.length = 0;
gdjs.Story_95IntroCode.GDHeaderObjects3.length = 0;
gdjs.Story_95IntroCode.GDBack_95StoryObjects1.length = 0;
gdjs.Story_95IntroCode.GDBack_95StoryObjects2.length = 0;
gdjs.Story_95IntroCode.GDBack_95StoryObjects3.length = 0;
gdjs.Story_95IntroCode.GDInstructionsObjects1.length = 0;
gdjs.Story_95IntroCode.GDInstructionsObjects2.length = 0;
gdjs.Story_95IntroCode.GDInstructionsObjects3.length = 0;
gdjs.Story_95IntroCode.GDSkip_95BtnObjects1.length = 0;
gdjs.Story_95IntroCode.GDSkip_95BtnObjects2.length = 0;
gdjs.Story_95IntroCode.GDSkip_95BtnObjects3.length = 0;
gdjs.Story_95IntroCode.GDOpening_95SceneObjects1.length = 0;
gdjs.Story_95IntroCode.GDOpening_95SceneObjects2.length = 0;
gdjs.Story_95IntroCode.GDOpening_95SceneObjects3.length = 0;
gdjs.Story_95IntroCode.GDLarge_95FlameObjects1.length = 0;
gdjs.Story_95IntroCode.GDLarge_95FlameObjects2.length = 0;
gdjs.Story_95IntroCode.GDLarge_95FlameObjects3.length = 0;
gdjs.Story_95IntroCode.GDCardObjects1.length = 0;
gdjs.Story_95IntroCode.GDCardObjects2.length = 0;
gdjs.Story_95IntroCode.GDCardObjects3.length = 0;

gdjs.Story_95IntroCode.eventsList4(runtimeScene);

return;

}

gdjs['Story_95IntroCode'] = gdjs.Story_95IntroCode;
