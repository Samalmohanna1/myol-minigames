gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDBGObjects1= [];
gdjs.LeaderboardCode.GDBGObjects2= [];
gdjs.LeaderboardCode.GDBGObjects3= [];
gdjs.LeaderboardCode.GDBGObjects4= [];
gdjs.LeaderboardCode.GDPlay_95BtnObjects1= [];
gdjs.LeaderboardCode.GDPlay_95BtnObjects2= [];
gdjs.LeaderboardCode.GDPlay_95BtnObjects3= [];
gdjs.LeaderboardCode.GDPlay_95BtnObjects4= [];
gdjs.LeaderboardCode.GDSubmit_95BtnObjects1= [];
gdjs.LeaderboardCode.GDSubmit_95BtnObjects2= [];
gdjs.LeaderboardCode.GDSubmit_95BtnObjects3= [];
gdjs.LeaderboardCode.GDSubmit_95BtnObjects4= [];
gdjs.LeaderboardCode.GDMenu_95BtnObjects1= [];
gdjs.LeaderboardCode.GDMenu_95BtnObjects2= [];
gdjs.LeaderboardCode.GDMenu_95BtnObjects3= [];
gdjs.LeaderboardCode.GDMenu_95BtnObjects4= [];
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1= [];
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects2= [];
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects3= [];
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects4= [];
gdjs.LeaderboardCode.GDScoreObjects1= [];
gdjs.LeaderboardCode.GDScoreObjects2= [];
gdjs.LeaderboardCode.GDScoreObjects3= [];
gdjs.LeaderboardCode.GDScoreObjects4= [];
gdjs.LeaderboardCode.GDScore_95LabelObjects1= [];
gdjs.LeaderboardCode.GDScore_95LabelObjects2= [];
gdjs.LeaderboardCode.GDScore_95LabelObjects3= [];
gdjs.LeaderboardCode.GDScore_95LabelObjects4= [];
gdjs.LeaderboardCode.GDScore_95FeedbackObjects1= [];
gdjs.LeaderboardCode.GDScore_95FeedbackObjects2= [];
gdjs.LeaderboardCode.GDScore_95FeedbackObjects3= [];
gdjs.LeaderboardCode.GDScore_95FeedbackObjects4= [];
gdjs.LeaderboardCode.GDLarge_95CardObjects1= [];
gdjs.LeaderboardCode.GDLarge_95CardObjects2= [];
gdjs.LeaderboardCode.GDLarge_95CardObjects3= [];
gdjs.LeaderboardCode.GDLarge_95CardObjects4= [];
gdjs.LeaderboardCode.GDLarge_95FlameObjects1= [];
gdjs.LeaderboardCode.GDLarge_95FlameObjects2= [];
gdjs.LeaderboardCode.GDLarge_95FlameObjects3= [];
gdjs.LeaderboardCode.GDLarge_95FlameObjects4= [];

gdjs.LeaderboardCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardCode.condition1IsTrue_0 = {val:false};
gdjs.LeaderboardCode.condition2IsTrue_0 = {val:false};


gdjs.LeaderboardCode.asyncCallback12960652 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects3);

{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects3[i].hide(false);
}
}}
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.LeaderboardCode.GDMenu_95BtnObjects2) asyncObjectsList.addObject("Menu_Btn", obj);
for (const obj of gdjs.LeaderboardCode.GDPlay_95BtnObjects2) asyncObjectsList.addObject("Play_Btn", obj);
for (const obj of gdjs.LeaderboardCode.GDSubmit_95BtnObjects2) asyncObjectsList.addObject("Submit_Btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback12960652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDPlay_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDSubmit_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDMenu_9595BtnObjects2Objects = Hashtable.newFrom({"Play_Btn": gdjs.LeaderboardCode.GDPlay_95BtnObjects2, "Submit_Btn": gdjs.LeaderboardCode.GDSubmit_95BtnObjects2, "Menu_Btn": gdjs.LeaderboardCode.GDMenu_95BtnObjects2});
gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\death.wav", false, 100, 1);
}{runtimeScene.getVariables().get("highscore").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i].hide();
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i].hide();
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i].hide();
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects2);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDPlay_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDSubmit_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDMenu_9595BtnObjects2Objects, runtimeScene, true, true);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LeaderboardCode.GDMenu_95BtnObjects2 */
/* Reuse gdjs.LeaderboardCode.GDPlay_95BtnObjects2 */
/* Reuse gdjs.LeaderboardCode.GDSubmit_95BtnObjects2 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i].activateBehavior("RectangleMovement", true);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i].activateBehavior("RectangleMovement", true);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i].activateBehavior("RectangleMovement", true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Input"), gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score_Feedback"), gdjs.LeaderboardCode.GDScore_95FeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score_Label"), gdjs.LeaderboardCode.GDScore_95LabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDScoreObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDScore_95LabelObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore_95LabelObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDScore_95LabelObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDScore_95FeedbackObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore_95FeedbackObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDScore_95FeedbackObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDPlay_95BtnObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.LeaderboardCode.GDMenu_95BtnObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i].hide();
}
}}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDPlay_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDSubmit_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDMenu_9595BtnObjects2Objects = Hashtable.newFrom({"Play_Btn": gdjs.LeaderboardCode.GDPlay_95BtnObjects2, "Submit_Btn": gdjs.LeaderboardCode.GDSubmit_95BtnObjects2, "Menu_Btn": gdjs.LeaderboardCode.GDMenu_95BtnObjects2});
gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDPlay_9595BtnObjects3Objects = Hashtable.newFrom({"Play_Btn": gdjs.LeaderboardCode.GDPlay_95BtnObjects3});
gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDMenu_9595BtnObjects2Objects = Hashtable.newFrom({"Menu_Btn": gdjs.LeaderboardCode.GDMenu_95BtnObjects2});
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.LeaderboardCode.GDPlay_95BtnObjects2, gdjs.LeaderboardCode.GDPlay_95BtnObjects3);


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardCode.condition1IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDPlay_9595BtnObjects3Objects, runtimeScene, true, false);
}if ( gdjs.LeaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.LeaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.LeaderboardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

/* Reuse gdjs.LeaderboardCode.GDMenu_95BtnObjects2 */

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardCode.condition1IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDMenu_9595BtnObjects2Objects, runtimeScene, true, false);
}if ( gdjs.LeaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.LeaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.LeaderboardCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

};gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDSubmit_9595BtnObjects1Objects = Hashtable.newFrom({"Submit_Btn": gdjs.LeaderboardCode.GDSubmit_95BtnObjects1});
gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.LeaderboardCode.GDSubmit_95BtnObjects1 */

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardCode.condition1IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDSubmit_9595BtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.LeaderboardCode.condition0IsTrue_0.val ) {
{
gdjs.LeaderboardCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.LeaderboardCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score_Feedback"), gdjs.LeaderboardCode.GDScore_95FeedbackObjects1);
/* Reuse gdjs.LeaderboardCode.GDSubmit_95BtnObjects1 */
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "d371bef9-2c1e-4b9a-a66f-441ac21aae7c", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[0].getString()));
}{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i].setString("");
}
}{runtimeScene.getVariables().get("highscore").setNumber(0);
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore_95FeedbackObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore_95FeedbackObjects1[i].setString("Score submitted!");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects1[i].setY(0);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects1[i].setY(1400);
}
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "d371bef9-2c1e-4b9a-a66f-441ac21aae7c", false);
}}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects2);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_46LeaderboardCode_46GDPlay_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDSubmit_9595BtnObjects2ObjectsGDgdjs_46LeaderboardCode_46GDMenu_9595BtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LeaderboardCode.GDMenu_95BtnObjects2 */
/* Reuse gdjs.LeaderboardCode.GDPlay_95BtnObjects2 */
/* Reuse gdjs.LeaderboardCode.GDSubmit_95BtnObjects2 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i].setColor("255;225;168");
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i].setColor("255;225;168");
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i].setColor("255;225;168");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i].activateBehavior("RectangleMovement", false);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i].activateBehavior("RectangleMovement", false);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i].activateBehavior("RectangleMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects2);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i].isVisible() ) {
        gdjs.LeaderboardCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardCode.GDPlay_95BtnObjects2[k] = gdjs.LeaderboardCode.GDPlay_95BtnObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length = k;for(var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i].isVisible() ) {
        gdjs.LeaderboardCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[k] = gdjs.LeaderboardCode.GDSubmit_95BtnObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length = k;for(var i = 0, k = 0, l = gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i].isVisible() ) {
        gdjs.LeaderboardCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardCode.GDMenu_95BtnObjects2[k] = gdjs.LeaderboardCode.GDMenu_95BtnObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length = k;}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.LeaderboardCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Input"), gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1);

gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i].getString() != "" ) {
        gdjs.LeaderboardCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[k] = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length = k;}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LeaderboardCode.eventsList6 = function(runtimeScene) {

{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("highscore")) > 0;
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Input"), gdjs.LeaderboardCode.GDLeaderboard_95InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score_Feedback"), gdjs.LeaderboardCode.GDScore_95FeedbackObjects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboard_95InputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboard_95InputObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScore_95FeedbackObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScore_95FeedbackObjects2[i].setString("Submit your score below!");
}
}}

}


{


gdjs.LeaderboardCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("highscore")) <= 0;
}if (gdjs.LeaderboardCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Btn"), gdjs.LeaderboardCode.GDMenu_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.LeaderboardCode.GDPlay_95BtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit_Btn"), gdjs.LeaderboardCode.GDSubmit_95BtnObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlay_95BtnObjects1[i].setY((( gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length === 0 ) ? 0 :gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDMenu_95BtnObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenu_95BtnObjects1[i].setY((( gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length === 0 ) ? 0 :gdjs.LeaderboardCode.GDSubmit_95BtnObjects1[0].getY()) + ((gdjs.LeaderboardCode.GDMenu_95BtnObjects1[i].getHeight()) * 1.5));
}
}}

}


};gdjs.LeaderboardCode.eventsList7 = function(runtimeScene) {

{


gdjs.LeaderboardCode.eventsList1(runtimeScene);
}


{


gdjs.LeaderboardCode.eventsList5(runtimeScene);
}


{


gdjs.LeaderboardCode.eventsList6(runtimeScene);
}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDBGObjects1.length = 0;
gdjs.LeaderboardCode.GDBGObjects2.length = 0;
gdjs.LeaderboardCode.GDBGObjects3.length = 0;
gdjs.LeaderboardCode.GDBGObjects4.length = 0;
gdjs.LeaderboardCode.GDPlay_95BtnObjects1.length = 0;
gdjs.LeaderboardCode.GDPlay_95BtnObjects2.length = 0;
gdjs.LeaderboardCode.GDPlay_95BtnObjects3.length = 0;
gdjs.LeaderboardCode.GDPlay_95BtnObjects4.length = 0;
gdjs.LeaderboardCode.GDSubmit_95BtnObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmit_95BtnObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmit_95BtnObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmit_95BtnObjects4.length = 0;
gdjs.LeaderboardCode.GDMenu_95BtnObjects1.length = 0;
gdjs.LeaderboardCode.GDMenu_95BtnObjects2.length = 0;
gdjs.LeaderboardCode.GDMenu_95BtnObjects3.length = 0;
gdjs.LeaderboardCode.GDMenu_95BtnObjects4.length = 0;
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects3.length = 0;
gdjs.LeaderboardCode.GDLeaderboard_95InputObjects4.length = 0;
gdjs.LeaderboardCode.GDScoreObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreObjects3.length = 0;
gdjs.LeaderboardCode.GDScoreObjects4.length = 0;
gdjs.LeaderboardCode.GDScore_95LabelObjects1.length = 0;
gdjs.LeaderboardCode.GDScore_95LabelObjects2.length = 0;
gdjs.LeaderboardCode.GDScore_95LabelObjects3.length = 0;
gdjs.LeaderboardCode.GDScore_95LabelObjects4.length = 0;
gdjs.LeaderboardCode.GDScore_95FeedbackObjects1.length = 0;
gdjs.LeaderboardCode.GDScore_95FeedbackObjects2.length = 0;
gdjs.LeaderboardCode.GDScore_95FeedbackObjects3.length = 0;
gdjs.LeaderboardCode.GDScore_95FeedbackObjects4.length = 0;
gdjs.LeaderboardCode.GDLarge_95CardObjects1.length = 0;
gdjs.LeaderboardCode.GDLarge_95CardObjects2.length = 0;
gdjs.LeaderboardCode.GDLarge_95CardObjects3.length = 0;
gdjs.LeaderboardCode.GDLarge_95CardObjects4.length = 0;
gdjs.LeaderboardCode.GDLarge_95FlameObjects1.length = 0;
gdjs.LeaderboardCode.GDLarge_95FlameObjects2.length = 0;
gdjs.LeaderboardCode.GDLarge_95FlameObjects3.length = 0;
gdjs.LeaderboardCode.GDLarge_95FlameObjects4.length = 0;

gdjs.LeaderboardCode.eventsList7(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
