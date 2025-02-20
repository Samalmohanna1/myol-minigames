gdjs.MenuCode = {};
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDBGObjects3= [];
gdjs.MenuCode.GDSoundObjects1= [];
gdjs.MenuCode.GDSoundObjects2= [];
gdjs.MenuCode.GDSoundObjects3= [];
gdjs.MenuCode.GDPlay_95BtnObjects1= [];
gdjs.MenuCode.GDPlay_95BtnObjects2= [];
gdjs.MenuCode.GDPlay_95BtnObjects3= [];
gdjs.MenuCode.GDHow_95To_95BtnObjects1= [];
gdjs.MenuCode.GDHow_95To_95BtnObjects2= [];
gdjs.MenuCode.GDHow_95To_95BtnObjects3= [];
gdjs.MenuCode.GDLeaderboard_95BtnObjects1= [];
gdjs.MenuCode.GDLeaderboard_95BtnObjects2= [];
gdjs.MenuCode.GDLeaderboard_95BtnObjects3= [];
gdjs.MenuCode.GDLarge_95CardObjects1= [];
gdjs.MenuCode.GDLarge_95CardObjects2= [];
gdjs.MenuCode.GDLarge_95CardObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1ObjectsGDgdjs_46MenuCode_46GDPlay_9595BtnObjects1ObjectsGDgdjs_46MenuCode_46GDHow_9595To_9595BtnObjects1ObjectsGDgdjs_46MenuCode_46GDLeaderboard_9595BtnObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MenuCode.GDSoundObjects1, "Play_Btn": gdjs.MenuCode.GDPlay_95BtnObjects1, "How_To_Btn": gdjs.MenuCode.GDHow_95To_95BtnObjects1, "Leaderboard_Btn": gdjs.MenuCode.GDLeaderboard_95BtnObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("How_To_Btn"), gdjs.MenuCode.GDHow_95To_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Btn"), gdjs.MenuCode.GDLeaderboard_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.MenuCode.GDPlay_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95BtnObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.MenuCode.GDPlay_95BtnObjects2[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.MenuCode.GDHow_95To_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHow_95To_95BtnObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.MenuCode.GDHow_95To_95BtnObjects2[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95BtnObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.MenuCode.GDLeaderboard_95BtnObjects2[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects2[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("How_To_Btn"), gdjs.MenuCode.GDHow_95To_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Btn"), gdjs.MenuCode.GDLeaderboard_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.MenuCode.GDPlay_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1ObjectsGDgdjs_46MenuCode_46GDPlay_9595BtnObjects1ObjectsGDgdjs_46MenuCode_46GDHow_9595To_9595BtnObjects1ObjectsGDgdjs_46MenuCode_46GDLeaderboard_9595BtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDHow_95To_95BtnObjects1 */
/* Reuse gdjs.MenuCode.GDLeaderboard_95BtnObjects1 */
/* Reuse gdjs.MenuCode.GDPlay_95BtnObjects1 */
/* Reuse gdjs.MenuCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95BtnObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.MenuCode.GDHow_95To_95BtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow_95To_95BtnObjects1[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95BtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95BtnObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].activateBehavior("RectangleMovement", true);
}
for(var i = 0, len = gdjs.MenuCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95BtnObjects1[i].activateBehavior("RectangleMovement", true);
}
for(var i = 0, len = gdjs.MenuCode.GDHow_95To_95BtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow_95To_95BtnObjects1[i].activateBehavior("RectangleMovement", true);
}
for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95BtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95BtnObjects1[i].activateBehavior("RectangleMovement", true);
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects2ObjectsGDgdjs_46MenuCode_46GDPlay_9595BtnObjects2ObjectsGDgdjs_46MenuCode_46GDHow_9595To_9595BtnObjects2ObjectsGDgdjs_46MenuCode_46GDLeaderboard_9595BtnObjects2Objects = Hashtable.newFrom({"Sound": gdjs.MenuCode.GDSoundObjects2, "Play_Btn": gdjs.MenuCode.GDPlay_95BtnObjects2, "How_To_Btn": gdjs.MenuCode.GDHow_95To_95BtnObjects2, "Leaderboard_Btn": gdjs.MenuCode.GDLeaderboard_95BtnObjects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlay_9595BtnObjects2Objects = Hashtable.newFrom({"Play_Btn": gdjs.MenuCode.GDPlay_95BtnObjects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHow_9595To_9595BtnObjects2Objects = Hashtable.newFrom({"How_To_Btn": gdjs.MenuCode.GDHow_95To_95BtnObjects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595BtnObjects2Objects = Hashtable.newFrom({"Leaderboard_Btn": gdjs.MenuCode.GDLeaderboard_95BtnObjects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MenuCode.GDSoundObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDSoundObjects1, gdjs.MenuCode.GDSoundObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects2[i].setAnimationName("sound_mute");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects1[i].setAnimationName("sound_on");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("How_To_Btn"), gdjs.MenuCode.GDHow_95To_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Btn"), gdjs.MenuCode.GDLeaderboard_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.MenuCode.GDPlay_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects2ObjectsGDgdjs_46MenuCode_46GDPlay_9595BtnObjects2ObjectsGDgdjs_46MenuCode_46GDHow_9595To_9595BtnObjects2ObjectsGDgdjs_46MenuCode_46GDLeaderboard_9595BtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDHow_95To_95BtnObjects2 */
/* Reuse gdjs.MenuCode.GDLeaderboard_95BtnObjects2 */
/* Reuse gdjs.MenuCode.GDPlay_95BtnObjects2 */
/* Reuse gdjs.MenuCode.GDSoundObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95BtnObjects2[i].setColor("255;225;168");
}
for(var i = 0, len = gdjs.MenuCode.GDHow_95To_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHow_95To_95BtnObjects2[i].setColor("255;225;168");
}
for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95BtnObjects2[i].setColor("255;225;168");
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects2[i].setColor("255;225;168");
}
}{for(var i = 0, len = gdjs.MenuCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundObjects2[i].activateBehavior("RectangleMovement", false);
}
for(var i = 0, len = gdjs.MenuCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_95BtnObjects2[i].activateBehavior("RectangleMovement", false);
}
for(var i = 0, len = gdjs.MenuCode.GDHow_95To_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHow_95To_95BtnObjects2[i].activateBehavior("RectangleMovement", false);
}
for(var i = 0, len = gdjs.MenuCode.GDLeaderboard_95BtnObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLeaderboard_95BtnObjects2[i].activateBehavior("RectangleMovement", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.MenuCode.GDPlay_95BtnObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlay_9595BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11330340);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story_Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("How_To_Btn"), gdjs.MenuCode.GDHow_95To_95BtnObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHow_9595To_9595BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12124460);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Btn"), gdjs.MenuCode.GDLeaderboard_95BtnObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLeaderboard_9595BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11877388);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "d371bef9-2c1e-4b9a-a66f-441ac21aae7c", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MenuCode.GDSoundObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8256924);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDBGObjects3.length = 0;
gdjs.MenuCode.GDSoundObjects1.length = 0;
gdjs.MenuCode.GDSoundObjects2.length = 0;
gdjs.MenuCode.GDSoundObjects3.length = 0;
gdjs.MenuCode.GDPlay_95BtnObjects1.length = 0;
gdjs.MenuCode.GDPlay_95BtnObjects2.length = 0;
gdjs.MenuCode.GDPlay_95BtnObjects3.length = 0;
gdjs.MenuCode.GDHow_95To_95BtnObjects1.length = 0;
gdjs.MenuCode.GDHow_95To_95BtnObjects2.length = 0;
gdjs.MenuCode.GDHow_95To_95BtnObjects3.length = 0;
gdjs.MenuCode.GDLeaderboard_95BtnObjects1.length = 0;
gdjs.MenuCode.GDLeaderboard_95BtnObjects2.length = 0;
gdjs.MenuCode.GDLeaderboard_95BtnObjects3.length = 0;
gdjs.MenuCode.GDLarge_95CardObjects1.length = 0;
gdjs.MenuCode.GDLarge_95CardObjects2.length = 0;
gdjs.MenuCode.GDLarge_95CardObjects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
