gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDBg_95SceneObjects1= [];
gdjs.MenuCode.GDBg_95SceneObjects2= [];
gdjs.MenuCode.GDBg_95SceneObjects3= [];
gdjs.MenuCode.GDSound_95ButtonObjects1= [];
gdjs.MenuCode.GDSound_95ButtonObjects2= [];
gdjs.MenuCode.GDSound_95ButtonObjects3= [];
gdjs.MenuCode.GDLeaderboard_95ButtonObjects1= [];
gdjs.MenuCode.GDLeaderboard_95ButtonObjects2= [];
gdjs.MenuCode.GDLeaderboard_95ButtonObjects3= [];
gdjs.MenuCode.GDStart_95ButtonObjects1= [];
gdjs.MenuCode.GDStart_95ButtonObjects2= [];
gdjs.MenuCode.GDStart_95ButtonObjects3= [];
gdjs.MenuCode.GDHowTo_95ButtonObjects1= [];
gdjs.MenuCode.GDHowTo_95ButtonObjects2= [];
gdjs.MenuCode.GDHowTo_95ButtonObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDHowToObjects1= [];
gdjs.MenuCode.GDHowToObjects2= [];
gdjs.MenuCode.GDHowToObjects3= [];
gdjs.MenuCode.GDDesktop_95ControlsObjects1= [];
gdjs.MenuCode.GDDesktop_95ControlsObjects2= [];
gdjs.MenuCode.GDDesktop_95ControlsObjects3= [];
gdjs.MenuCode.GDMobile_95Controls_95PositionObjects1= [];
gdjs.MenuCode.GDMobile_95Controls_95PositionObjects2= [];
gdjs.MenuCode.GDMobile_95Controls_95PositionObjects3= [];
gdjs.MenuCode.GDLButtonObjects1= [];
gdjs.MenuCode.GDLButtonObjects2= [];
gdjs.MenuCode.GDLButtonObjects3= [];
gdjs.MenuCode.GDRButtonObjects1= [];
gdjs.MenuCode.GDRButtonObjects2= [];
gdjs.MenuCode.GDRButtonObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.asyncCallback13977172 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("HowTo"), gdjs.MenuCode.GDHowToObjects2);
gdjs.copyArray(runtimeScene.getObjects("HowTo_Button"), gdjs.MenuCode.GDHowTo_95ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.MenuCode.GDStart_95ButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDHowTo_95ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHowTo_95ButtonObjects2[i].setPosition(564,896);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHowToObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHowToObjects2[i].setPosition(638,929);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStart_95ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStart_95ButtonObjects2[i].setPosition(1041,896);
}
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].setPosition(1150,929);
}
}}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.MenuCode.asyncCallback13977172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Desktop_Controls"), gdjs.MenuCode.GDDesktop_95ControlsObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDDesktop_95ControlsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDDesktop_95ControlsObjects2[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mobile_Controls_Position"), gdjs.MenuCode.GDMobile_95Controls_95PositionObjects1);
gdjs.copyArray(runtimeScene.getObjects("RButton"), gdjs.MenuCode.GDRButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.MenuCode.GDRButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.MenuCode.GDMobile_95Controls_95PositionObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMobile_95Controls_95PositionObjects1[i].hide(false);
}
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mobile_Controls_Position"), gdjs.MenuCode.GDMobile_95Controls_95PositionObjects2);
gdjs.copyArray(runtimeScene.getObjects("RButton"), gdjs.MenuCode.GDRButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDLButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDRButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDMobile_95Controls_95PositionObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMobile_95Controls_95PositionObjects2[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Desktop_Controls"), gdjs.MenuCode.GDDesktop_95ControlsObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDDesktop_95ControlsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDDesktop_95ControlsObjects2[i].hide(false);
}
}}

}


{


{
{gdjs.evtTools.debuggerTools.log("Desktop detected", "", "");
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSound_9595ButtonObjects1Objects = Hashtable.newFrom({"Sound_Button": gdjs.MenuCode.GDSound_95ButtonObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDSound_95ButtonObjects1, gdjs.MenuCode.GDSound_95ButtonObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects2[i].setAnimationName("muted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSound_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects1[i].setAnimationName("unmuted");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595ButtonObjects1Objects = Hashtable.newFrom({"Leaderboard_Button": gdjs.MenuCode.GDLeaderboard_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart_9595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.MenuCode.GDStart_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowTo_9595ButtonObjects1Objects = Hashtable.newFrom({"HowTo_Button": gdjs.MenuCode.GDHowTo_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLButtonObjects1Objects = Hashtable.newFrom({"LButton": gdjs.MenuCode.GDLButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRButtonObjects1Objects = Hashtable.newFrom({"RButton": gdjs.MenuCode.GDRButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSound_9595ButtonObjects1Objects = Hashtable.newFrom({"Sound_Button": gdjs.MenuCode.GDSound_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595ButtonObjects1Objects = Hashtable.newFrom({"Leaderboard_Button": gdjs.MenuCode.GDLeaderboard_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart_9595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.MenuCode.GDStart_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowTo_9595ButtonObjects1Objects = Hashtable.newFrom({"HowTo_Button": gdjs.MenuCode.GDHowTo_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLButtonObjects1Objects = Hashtable.newFrom({"LButton": gdjs.MenuCode.GDLButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRButtonObjects1Objects = Hashtable.newFrom({"RButton": gdjs.MenuCode.GDRButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSound_9595ButtonObjects1Objects = Hashtable.newFrom({"Sound_Button": gdjs.MenuCode.GDSound_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595ButtonObjects1Objects = Hashtable.newFrom({"Leaderboard_Button": gdjs.MenuCode.GDLeaderboard_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart_9595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.MenuCode.GDStart_95ButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowTo_9595ButtonObjects1Objects = Hashtable.newFrom({"HowTo_Button": gdjs.MenuCode.GDHowTo_95ButtonObjects1});
gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "left";
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RButton"), gdjs.MenuCode.GDRButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLButtonObjects1[i].setColor("255;191;17");
}
}{for(var i = 0, len = gdjs.MenuCode.GDRButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRButtonObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "right";
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RButton"), gdjs.MenuCode.GDRButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDRButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRButtonObjects1[i].setColor("255;191;17");
}
}{for(var i = 0, len = gdjs.MenuCode.GDLButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLButtonObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13980564);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13982772);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HowTo_Button"), gdjs.MenuCode.GDHowTo_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.MenuCode.GDStart_95ButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStart_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDHowTo_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHowTo_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_Button"), gdjs.MenuCode.GDSound_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSound_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound_Button"), gdjs.MenuCode.GDSound_95ButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects1[i].setAnimationName("muted");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sound_Button"), gdjs.MenuCode.GDSound_95ButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects1[i].setAnimationName("unmuted");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Button"), gdjs.MenuCode.GDLeaderboard_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "7bb7ca80-b224-4591-9925-4f4d3a7b4cee", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.MenuCode.GDStart_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowTo_Button"), gdjs.MenuCode.GDHowTo_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowTo_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RButton"), gdjs.MenuCode.GDRButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("right");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_Button"), gdjs.MenuCode.GDSound_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSound_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13997828);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSound_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 2, 2, 3, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Button"), gdjs.MenuCode.GDLeaderboard_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14000428);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLeaderboard_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95ButtonObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 2, 2, 3, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.MenuCode.GDStart_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14003252);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);
/* Reuse gdjs.MenuCode.GDStart_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStart_95ButtonObjects1[i].setAnimationName("hover");
}
}{for(var i = 0, len = gdjs.MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowTo_Button"), gdjs.MenuCode.GDHowTo_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowTo_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14004804);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HowTo"), gdjs.MenuCode.GDHowToObjects1);
/* Reuse gdjs.MenuCode.GDHowTo_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDHowTo_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHowTo_95ButtonObjects1[i].setAnimationName("hover");
}
}{for(var i = 0, len = gdjs.MenuCode.GDHowToObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHowToObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14006476);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLButtonObjects1[i].setColor("255;191;17");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RButton"), gdjs.MenuCode.GDRButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14007204);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LButton"), gdjs.MenuCode.GDLButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDLButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLButtonObjects1[i].setColor("255;191;17");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound_Button"), gdjs.MenuCode.GDSound_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSound_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSound_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSound_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSound_95ButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Button"), gdjs.MenuCode.GDLeaderboard_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLeaderboard_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95ButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.MenuCode.GDStart_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);
/* Reuse gdjs.MenuCode.GDStart_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.MenuCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStart_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowTo_Button"), gdjs.MenuCode.GDHowTo_95ButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowTo_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HowTo"), gdjs.MenuCode.GDHowToObjects1);
/* Reuse gdjs.MenuCode.GDHowTo_95ButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDHowToObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHowToObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.MenuCode.GDHowTo_95ButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHowTo_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBg_95SceneObjects1.length = 0;
gdjs.MenuCode.GDBg_95SceneObjects2.length = 0;
gdjs.MenuCode.GDBg_95SceneObjects3.length = 0;
gdjs.MenuCode.GDSound_95ButtonObjects1.length = 0;
gdjs.MenuCode.GDSound_95ButtonObjects2.length = 0;
gdjs.MenuCode.GDSound_95ButtonObjects3.length = 0;
gdjs.MenuCode.GDLeaderboard_95ButtonObjects1.length = 0;
gdjs.MenuCode.GDLeaderboard_95ButtonObjects2.length = 0;
gdjs.MenuCode.GDLeaderboard_95ButtonObjects3.length = 0;
gdjs.MenuCode.GDStart_95ButtonObjects1.length = 0;
gdjs.MenuCode.GDStart_95ButtonObjects2.length = 0;
gdjs.MenuCode.GDStart_95ButtonObjects3.length = 0;
gdjs.MenuCode.GDHowTo_95ButtonObjects1.length = 0;
gdjs.MenuCode.GDHowTo_95ButtonObjects2.length = 0;
gdjs.MenuCode.GDHowTo_95ButtonObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDHowToObjects1.length = 0;
gdjs.MenuCode.GDHowToObjects2.length = 0;
gdjs.MenuCode.GDHowToObjects3.length = 0;
gdjs.MenuCode.GDDesktop_95ControlsObjects1.length = 0;
gdjs.MenuCode.GDDesktop_95ControlsObjects2.length = 0;
gdjs.MenuCode.GDDesktop_95ControlsObjects3.length = 0;
gdjs.MenuCode.GDMobile_95Controls_95PositionObjects1.length = 0;
gdjs.MenuCode.GDMobile_95Controls_95PositionObjects2.length = 0;
gdjs.MenuCode.GDMobile_95Controls_95PositionObjects3.length = 0;
gdjs.MenuCode.GDLButtonObjects1.length = 0;
gdjs.MenuCode.GDLButtonObjects2.length = 0;
gdjs.MenuCode.GDLButtonObjects3.length = 0;
gdjs.MenuCode.GDRButtonObjects1.length = 0;
gdjs.MenuCode.GDRButtonObjects2.length = 0;
gdjs.MenuCode.GDRButtonObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
