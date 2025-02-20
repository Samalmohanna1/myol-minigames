gdjs.HighscoresCode = {};
gdjs.HighscoresCode.GDBg_95SceneObjects1= [];
gdjs.HighscoresCode.GDBg_95SceneObjects2= [];
gdjs.HighscoresCode.GDBg_95SceneObjects3= [];
gdjs.HighscoresCode.GDCard_95Blue_95BgObjects1= [];
gdjs.HighscoresCode.GDCard_95Blue_95BgObjects2= [];
gdjs.HighscoresCode.GDCard_95Blue_95BgObjects3= [];
gdjs.HighscoresCode.GDTitleObjects1= [];
gdjs.HighscoresCode.GDTitleObjects2= [];
gdjs.HighscoresCode.GDTitleObjects3= [];
gdjs.HighscoresCode.GDReplayObjects1= [];
gdjs.HighscoresCode.GDReplayObjects2= [];
gdjs.HighscoresCode.GDReplayObjects3= [];
gdjs.HighscoresCode.GDMenuObjects1= [];
gdjs.HighscoresCode.GDMenuObjects2= [];
gdjs.HighscoresCode.GDMenuObjects3= [];
gdjs.HighscoresCode.GDSubmitObjects1= [];
gdjs.HighscoresCode.GDSubmitObjects2= [];
gdjs.HighscoresCode.GDSubmitObjects3= [];
gdjs.HighscoresCode.GDScoreObjects1= [];
gdjs.HighscoresCode.GDScoreObjects2= [];
gdjs.HighscoresCode.GDScoreObjects3= [];
gdjs.HighscoresCode.GDReplay_95ButtonObjects1= [];
gdjs.HighscoresCode.GDReplay_95ButtonObjects2= [];
gdjs.HighscoresCode.GDReplay_95ButtonObjects3= [];
gdjs.HighscoresCode.GDMenu_95ButtonObjects1= [];
gdjs.HighscoresCode.GDMenu_95ButtonObjects2= [];
gdjs.HighscoresCode.GDMenu_95ButtonObjects3= [];
gdjs.HighscoresCode.GDSubmit_95ButtonObjects1= [];
gdjs.HighscoresCode.GDSubmit_95ButtonObjects2= [];
gdjs.HighscoresCode.GDSubmit_95ButtonObjects3= [];
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1= [];
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2= [];
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects3= [];

gdjs.HighscoresCode.conditionTrue_0 = {val:false};
gdjs.HighscoresCode.condition0IsTrue_0 = {val:false};
gdjs.HighscoresCode.condition1IsTrue_0 = {val:false};
gdjs.HighscoresCode.condition2IsTrue_0 = {val:false};
gdjs.HighscoresCode.conditionTrue_1 = {val:false};
gdjs.HighscoresCode.condition0IsTrue_1 = {val:false};
gdjs.HighscoresCode.condition1IsTrue_1 = {val:false};
gdjs.HighscoresCode.condition2IsTrue_1 = {val:false};


gdjs.HighscoresCode.asyncCallback13932532 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}
gdjs.HighscoresCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.HighscoresCode.asyncCallback13932532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HighscoresCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore_Name_Input"), gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.HighscoresCode.GDTitleObjects2);
{for(var i = 0, len = gdjs.HighscoresCode.GDTitleObjects2.length ;i < len;++i) {
    gdjs.HighscoresCode.GDTitleObjects2[i].setString("Nothing to submit");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2.length ;i < len;++i) {
    gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2[i].hide();
}
}
{ //Subevents
gdjs.HighscoresCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.HighscoresCode.asyncCallback13930892 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.HighscoresCode.GDMenuObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.HighscoresCode.GDMenu_95ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.HighscoresCode.GDReplayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Replay_Button"), gdjs.HighscoresCode.GDReplay_95ButtonObjects2);
{for(var i = 0, len = gdjs.HighscoresCode.GDMenu_95ButtonObjects2.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenu_95ButtonObjects2[i].setPosition(564,896);
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDMenuObjects2.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenuObjects2[i].setPosition(655,929);
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDReplay_95ButtonObjects2.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplay_95ButtonObjects2[i].setPosition(1041,896);
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDReplayObjects2.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplayObjects2[i].setPosition(1116,929);
}
}
{ //Subevents
gdjs.HighscoresCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.HighscoresCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.HighscoresCode.asyncCallback13930892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDReplay_9595ButtonObjects1Objects = Hashtable.newFrom({"Replay_Button": gdjs.HighscoresCode.GDReplay_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDMenu_9595ButtonObjects1Objects = Hashtable.newFrom({"Menu_Button": gdjs.HighscoresCode.GDMenu_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDSubmit_9595ButtonObjects1Objects = Hashtable.newFrom({"Submit_Button": gdjs.HighscoresCode.GDSubmit_95ButtonObjects1});
gdjs.HighscoresCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Submit_Button"), gdjs.HighscoresCode.GDSubmit_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
gdjs.HighscoresCode.condition1IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDSubmit_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HighscoresCode.condition0IsTrue_0.val ) {
{
{gdjs.HighscoresCode.conditionTrue_1 = gdjs.HighscoresCode.condition1IsTrue_0;
gdjs.HighscoresCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13941420);
}
}}
if (gdjs.HighscoresCode.condition1IsTrue_0.val) {
/* Reuse gdjs.HighscoresCode.GDSubmitObjects1 */
/* Reuse gdjs.HighscoresCode.GDSubmit_95ButtonObjects1 */
{for(var i = 0, len = gdjs.HighscoresCode.GDSubmit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmit_95ButtonObjects1[i].setAnimationName("hover");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmitObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}}

}


};gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDReplay_9595ButtonObjects1Objects = Hashtable.newFrom({"Replay_Button": gdjs.HighscoresCode.GDReplay_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDMenu_9595ButtonObjects1Objects = Hashtable.newFrom({"Menu_Button": gdjs.HighscoresCode.GDMenu_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDSubmit_9595ButtonObjects1Objects = Hashtable.newFrom({"Submit_Button": gdjs.HighscoresCode.GDSubmit_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDReplay_9595ButtonObjects1Objects = Hashtable.newFrom({"Replay_Button": gdjs.HighscoresCode.GDReplay_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDMenu_9595ButtonObjects1Objects = Hashtable.newFrom({"Menu_Button": gdjs.HighscoresCode.GDMenu_95ButtonObjects1});
gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.HighscoresCode.GDSubmitObjects1});
gdjs.HighscoresCode.eventsList4 = function(runtimeScene) {

{


gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore_Name_Input"), gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "5ffa3f44-13a5-49c6-aa48-54131748b7d4", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), (( gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2.length === 0 ) ? "" :gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2[0].getString()));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "5ffa3f44-13a5-49c6-aa48-54131748b7d4", true);
}}

}


{


gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Highscore_Name_Input"), gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "7bb7ca80-b224-4591-9925-4f4d3a7b4cee", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), (( gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2.length === 0 ) ? "" :gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2[0].getString()));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "7bb7ca80-b224-4591-9925-4f4d3a7b4cee", true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Highscore_Name_Input"), gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1);
/* Reuse gdjs.HighscoresCode.GDSubmitObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Submit_Button"), gdjs.HighscoresCode.GDSubmit_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.HighscoresCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.HighscoresCode.GDSubmit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmit_95ButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmitObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDTitleObjects1[i].setString("Score Submitted!");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.HighscoresCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.HighscoresCode.GDSubmitObjects1 */

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
gdjs.HighscoresCode.condition1IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.HighscoresCode.condition0IsTrue_0.val ) {
{
gdjs.HighscoresCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDSubmitObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.HighscoresCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.HighscoresCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.HighscoresCode.eventsList6 = function(runtimeScene) {

{


gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HighscoresCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
{gdjs.HighscoresCode.conditionTrue_1 = gdjs.HighscoresCode.condition0IsTrue_0;
gdjs.HighscoresCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13931236);
}
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.HighscoresCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.HighscoresCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDTitleObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.HighscoresCode.GDTitleObjects1[i].getWidth()) / 2));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.HighscoresCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.HighscoresCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDScoreObjects1[i].setString("You ate " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))) + " kg of fish!");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.HighscoresCode.GDMenu_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Replay_Button"), gdjs.HighscoresCode.GDReplay_95ButtonObjects1);
{for(var i = 0, len = gdjs.HighscoresCode.GDReplay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplay_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDMenu_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenu_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Highscore_Name_Input"), gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
{gdjs.HighscoresCode.conditionTrue_1 = gdjs.HighscoresCode.condition0IsTrue_0;
gdjs.HighscoresCode.condition0IsTrue_1.val = false;
gdjs.HighscoresCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length;i<l;++i) {
    if ( gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i].isFocused() ) {
        gdjs.HighscoresCode.condition0IsTrue_1.val = true;
        gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[k] = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i];
        ++k;
    }
}
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length = k;}if ( gdjs.HighscoresCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length;i<l;++i) {
    if ( gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i].getString() != "" ) {
        gdjs.HighscoresCode.condition1IsTrue_1.val = true;
        gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[k] = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i];
        ++k;
    }
}
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length = k;}}
gdjs.HighscoresCode.conditionTrue_1.val = true && gdjs.HighscoresCode.condition0IsTrue_1.val && gdjs.HighscoresCode.condition1IsTrue_1.val;
}
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.HighscoresCode.GDSubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit_Button"), gdjs.HighscoresCode.GDSubmit_95ButtonObjects1);
{for(var i = 0, len = gdjs.HighscoresCode.GDSubmit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmit_95ButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmitObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Highscore_Name_Input"), gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length;i<l;++i) {
    if ( gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i].getString() == "" ) {
        gdjs.HighscoresCode.condition0IsTrue_0.val = true;
        gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[k] = gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1[i];
        ++k;
    }
}
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length = k;}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.HighscoresCode.GDSubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit_Button"), gdjs.HighscoresCode.GDSubmit_95ButtonObjects1);
{for(var i = 0, len = gdjs.HighscoresCode.GDSubmit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmit_95ButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmitObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Replay_Button"), gdjs.HighscoresCode.GDReplay_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
gdjs.HighscoresCode.condition1IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDReplay_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HighscoresCode.condition0IsTrue_0.val ) {
{
{gdjs.HighscoresCode.conditionTrue_1 = gdjs.HighscoresCode.condition1IsTrue_0;
gdjs.HighscoresCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13938252);
}
}}
if (gdjs.HighscoresCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.HighscoresCode.GDReplayObjects1);
/* Reuse gdjs.HighscoresCode.GDReplay_95ButtonObjects1 */
{for(var i = 0, len = gdjs.HighscoresCode.GDReplay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplay_95ButtonObjects1[i].setAnimationName("hover");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplayObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.HighscoresCode.GDMenu_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
gdjs.HighscoresCode.condition1IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDMenu_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HighscoresCode.condition0IsTrue_0.val ) {
{
{gdjs.HighscoresCode.conditionTrue_1 = gdjs.HighscoresCode.condition1IsTrue_0;
gdjs.HighscoresCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13939628);
}
}}
if (gdjs.HighscoresCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.HighscoresCode.GDMenuObjects1);
/* Reuse gdjs.HighscoresCode.GDMenu_95ButtonObjects1 */
{for(var i = 0, len = gdjs.HighscoresCode.GDMenu_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenu_95ButtonObjects1[i].setAnimationName("hover");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenuObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.HighscoresCode.GDSubmitObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HighscoresCode.GDSubmitObjects1.length;i<l;++i) {
    if ( gdjs.HighscoresCode.GDSubmitObjects1[i].isVisible() ) {
        gdjs.HighscoresCode.condition0IsTrue_0.val = true;
        gdjs.HighscoresCode.GDSubmitObjects1[k] = gdjs.HighscoresCode.GDSubmitObjects1[i];
        ++k;
    }
}
gdjs.HighscoresCode.GDSubmitObjects1.length = k;}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HighscoresCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Replay_Button"), gdjs.HighscoresCode.GDReplay_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDReplay_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.HighscoresCode.GDReplayObjects1);
/* Reuse gdjs.HighscoresCode.GDReplay_95ButtonObjects1 */
{for(var i = 0, len = gdjs.HighscoresCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplayObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDReplay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDReplay_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.HighscoresCode.GDMenu_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDMenu_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.HighscoresCode.GDMenuObjects1);
/* Reuse gdjs.HighscoresCode.GDMenu_95ButtonObjects1 */
{for(var i = 0, len = gdjs.HighscoresCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenuObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDMenu_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDMenu_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit_Button"), gdjs.HighscoresCode.GDSubmit_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDSubmit_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.HighscoresCode.GDSubmitObjects1);
/* Reuse gdjs.HighscoresCode.GDSubmit_95ButtonObjects1 */
{for(var i = 0, len = gdjs.HighscoresCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.HighscoresCode.GDSubmit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.HighscoresCode.GDSubmit_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Replay_Button"), gdjs.HighscoresCode.GDReplay_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
gdjs.HighscoresCode.condition1IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.HighscoresCode.condition0IsTrue_0.val ) {
{
gdjs.HighscoresCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDReplay_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.HighscoresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.HighscoresCode.GDMenu_95ButtonObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
gdjs.HighscoresCode.condition1IsTrue_0.val = false;
{
gdjs.HighscoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.HighscoresCode.condition0IsTrue_0.val ) {
{
gdjs.HighscoresCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HighscoresCode.mapOfGDgdjs_46HighscoresCode_46GDMenu_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.HighscoresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.HighscoresCode.GDSubmitObjects1);

gdjs.HighscoresCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.HighscoresCode.GDSubmitObjects1.length;i<l;++i) {
    if ( gdjs.HighscoresCode.GDSubmitObjects1[i].isVisible() ) {
        gdjs.HighscoresCode.condition0IsTrue_0.val = true;
        gdjs.HighscoresCode.GDSubmitObjects1[k] = gdjs.HighscoresCode.GDSubmitObjects1[i];
        ++k;
    }
}
gdjs.HighscoresCode.GDSubmitObjects1.length = k;}if (gdjs.HighscoresCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.HighscoresCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.HighscoresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HighscoresCode.GDBg_95SceneObjects1.length = 0;
gdjs.HighscoresCode.GDBg_95SceneObjects2.length = 0;
gdjs.HighscoresCode.GDBg_95SceneObjects3.length = 0;
gdjs.HighscoresCode.GDCard_95Blue_95BgObjects1.length = 0;
gdjs.HighscoresCode.GDCard_95Blue_95BgObjects2.length = 0;
gdjs.HighscoresCode.GDCard_95Blue_95BgObjects3.length = 0;
gdjs.HighscoresCode.GDTitleObjects1.length = 0;
gdjs.HighscoresCode.GDTitleObjects2.length = 0;
gdjs.HighscoresCode.GDTitleObjects3.length = 0;
gdjs.HighscoresCode.GDReplayObjects1.length = 0;
gdjs.HighscoresCode.GDReplayObjects2.length = 0;
gdjs.HighscoresCode.GDReplayObjects3.length = 0;
gdjs.HighscoresCode.GDMenuObjects1.length = 0;
gdjs.HighscoresCode.GDMenuObjects2.length = 0;
gdjs.HighscoresCode.GDMenuObjects3.length = 0;
gdjs.HighscoresCode.GDSubmitObjects1.length = 0;
gdjs.HighscoresCode.GDSubmitObjects2.length = 0;
gdjs.HighscoresCode.GDSubmitObjects3.length = 0;
gdjs.HighscoresCode.GDScoreObjects1.length = 0;
gdjs.HighscoresCode.GDScoreObjects2.length = 0;
gdjs.HighscoresCode.GDScoreObjects3.length = 0;
gdjs.HighscoresCode.GDReplay_95ButtonObjects1.length = 0;
gdjs.HighscoresCode.GDReplay_95ButtonObjects2.length = 0;
gdjs.HighscoresCode.GDReplay_95ButtonObjects3.length = 0;
gdjs.HighscoresCode.GDMenu_95ButtonObjects1.length = 0;
gdjs.HighscoresCode.GDMenu_95ButtonObjects2.length = 0;
gdjs.HighscoresCode.GDMenu_95ButtonObjects3.length = 0;
gdjs.HighscoresCode.GDSubmit_95ButtonObjects1.length = 0;
gdjs.HighscoresCode.GDSubmit_95ButtonObjects2.length = 0;
gdjs.HighscoresCode.GDSubmit_95ButtonObjects3.length = 0;
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects1.length = 0;
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects2.length = 0;
gdjs.HighscoresCode.GDHighscore_95Name_95InputObjects3.length = 0;

gdjs.HighscoresCode.eventsList6(runtimeScene);

return;

}

gdjs['HighscoresCode'] = gdjs.HighscoresCode;
