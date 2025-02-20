gdjs.gameCode = {};
gdjs.gameCode.GDRatshiroObjects1= [];
gdjs.gameCode.GDRatshiroObjects2= [];
gdjs.gameCode.GDRatshiroObjects3= [];
gdjs.gameCode.GDRatshiroObjects4= [];
gdjs.gameCode.GDRatshiroObjects5= [];
gdjs.gameCode.GDPlayerObjects1= [];
gdjs.gameCode.GDPlayerObjects2= [];
gdjs.gameCode.GDPlayerObjects3= [];
gdjs.gameCode.GDPlayerObjects4= [];
gdjs.gameCode.GDPlayerObjects5= [];
gdjs.gameCode.GDBaitObjects1= [];
gdjs.gameCode.GDBaitObjects2= [];
gdjs.gameCode.GDBaitObjects3= [];
gdjs.gameCode.GDBaitObjects4= [];
gdjs.gameCode.GDBaitObjects5= [];
gdjs.gameCode.GDCountdown_9595BGObjects1= [];
gdjs.gameCode.GDCountdown_9595BGObjects2= [];
gdjs.gameCode.GDCountdown_9595BGObjects3= [];
gdjs.gameCode.GDCountdown_9595BGObjects4= [];
gdjs.gameCode.GDCountdown_9595BGObjects5= [];
gdjs.gameCode.GDCountdown_9595LabelObjects1= [];
gdjs.gameCode.GDCountdown_9595LabelObjects2= [];
gdjs.gameCode.GDCountdown_9595LabelObjects3= [];
gdjs.gameCode.GDCountdown_9595LabelObjects4= [];
gdjs.gameCode.GDCountdown_9595LabelObjects5= [];
gdjs.gameCode.GDUI_9595Bar_9595BGObjects1= [];
gdjs.gameCode.GDUI_9595Bar_9595BGObjects2= [];
gdjs.gameCode.GDUI_9595Bar_9595BGObjects3= [];
gdjs.gameCode.GDUI_9595Bar_9595BGObjects4= [];
gdjs.gameCode.GDUI_9595Bar_9595BGObjects5= [];
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects1= [];
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2= [];
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects3= [];
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects4= [];
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects5= [];
gdjs.gameCode.GDskip_9595noteObjects1= [];
gdjs.gameCode.GDskip_9595noteObjects2= [];
gdjs.gameCode.GDskip_9595noteObjects3= [];
gdjs.gameCode.GDskip_9595noteObjects4= [];
gdjs.gameCode.GDskip_9595noteObjects5= [];
gdjs.gameCode.GDBait_9595IconObjects1= [];
gdjs.gameCode.GDBait_9595IconObjects2= [];
gdjs.gameCode.GDBait_9595IconObjects3= [];
gdjs.gameCode.GDBait_9595IconObjects4= [];
gdjs.gameCode.GDBait_9595IconObjects5= [];
gdjs.gameCode.GDBait_9595CountObjects1= [];
gdjs.gameCode.GDBait_9595CountObjects2= [];
gdjs.gameCode.GDBait_9595CountObjects3= [];
gdjs.gameCode.GDBait_9595CountObjects4= [];
gdjs.gameCode.GDBait_9595CountObjects5= [];
gdjs.gameCode.GDFeedback_9595LabelObjects1= [];
gdjs.gameCode.GDFeedback_9595LabelObjects2= [];
gdjs.gameCode.GDFeedback_9595LabelObjects3= [];
gdjs.gameCode.GDFeedback_9595LabelObjects4= [];
gdjs.gameCode.GDFeedback_9595LabelObjects5= [];
gdjs.gameCode.GDRedFlatBarObjects1= [];
gdjs.gameCode.GDRedFlatBarObjects2= [];
gdjs.gameCode.GDRedFlatBarObjects3= [];
gdjs.gameCode.GDRedFlatBarObjects4= [];
gdjs.gameCode.GDRedFlatBarObjects5= [];
gdjs.gameCode.GDHealthbar_9595LabelObjects1= [];
gdjs.gameCode.GDHealthbar_9595LabelObjects2= [];
gdjs.gameCode.GDHealthbar_9595LabelObjects3= [];
gdjs.gameCode.GDHealthbar_9595LabelObjects4= [];
gdjs.gameCode.GDHealthbar_9595LabelObjects5= [];
gdjs.gameCode.GDGame_9595BGObjects1= [];
gdjs.gameCode.GDGame_9595BGObjects2= [];
gdjs.gameCode.GDGame_9595BGObjects3= [];
gdjs.gameCode.GDGame_9595BGObjects4= [];
gdjs.gameCode.GDGame_9595BGObjects5= [];
gdjs.gameCode.GDSkyObjects1= [];
gdjs.gameCode.GDSkyObjects2= [];
gdjs.gameCode.GDSkyObjects3= [];
gdjs.gameCode.GDSkyObjects4= [];
gdjs.gameCode.GDSkyObjects5= [];
gdjs.gameCode.GDCityObjects1= [];
gdjs.gameCode.GDCityObjects2= [];
gdjs.gameCode.GDCityObjects3= [];
gdjs.gameCode.GDCityObjects4= [];
gdjs.gameCode.GDCityObjects5= [];
gdjs.gameCode.GDEnd_9595CopyObjects1= [];
gdjs.gameCode.GDEnd_9595CopyObjects2= [];
gdjs.gameCode.GDEnd_9595CopyObjects3= [];
gdjs.gameCode.GDEnd_9595CopyObjects4= [];
gdjs.gameCode.GDEnd_9595CopyObjects5= [];
gdjs.gameCode.GDMorph_9595CloudObjects1= [];
gdjs.gameCode.GDMorph_9595CloudObjects2= [];
gdjs.gameCode.GDMorph_9595CloudObjects3= [];
gdjs.gameCode.GDMorph_9595CloudObjects4= [];
gdjs.gameCode.GDMorph_9595CloudObjects5= [];
gdjs.gameCode.GDManshiroObjects1= [];
gdjs.gameCode.GDManshiroObjects2= [];
gdjs.gameCode.GDManshiroObjects3= [];
gdjs.gameCode.GDManshiroObjects4= [];
gdjs.gameCode.GDManshiroObjects5= [];
gdjs.gameCode.GDHeadshotObjects1= [];
gdjs.gameCode.GDHeadshotObjects2= [];
gdjs.gameCode.GDHeadshotObjects3= [];
gdjs.gameCode.GDHeadshotObjects4= [];
gdjs.gameCode.GDHeadshotObjects5= [];
gdjs.gameCode.GDStoryObjects1= [];
gdjs.gameCode.GDStoryObjects2= [];
gdjs.gameCode.GDStoryObjects3= [];
gdjs.gameCode.GDStoryObjects4= [];
gdjs.gameCode.GDStoryObjects5= [];


gdjs.gameCode.asyncCallback13376388 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Countdown_BG"), gdjs.gameCode.GDCountdown_9595BGObjects5);
gdjs.copyArray(asyncObjectsList.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects5);

{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects5.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects5[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595BGObjects5.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595BGObjects5[i].getBehavior("Tween").addObjectOpacityTween2("fade-out", 0, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595BGObjects5.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595BGObjects5[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects5.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects5[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.gameCode.GDRatshiroObjects5.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects5[0].getPointY("")));
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\audio\\04 Absolute Rapid Oxidation.aac", 1, true, 50, 1);
}}
gdjs.gameCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.gameCode.GDCountdown_9595LabelObjects4) asyncObjectsList.addObject("Countdown_Label", obj);
/* Don't save Ratshiro as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameCode.asyncCallback13376388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.asyncCallback13375932 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects4);

{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 10, 10, 15, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects4[i].getBehavior("Text").setText("1");
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects4[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.gameCode.GDCountdown_9595LabelObjects3) asyncObjectsList.addObject("Countdown_Label", obj);
/* Don't save Ratshiro as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameCode.asyncCallback13375932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.asyncCallback13375404 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects3);

{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 15, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects3[i].getBehavior("Text").setText("2");
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects3[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.gameCode.GDCountdown_9595LabelObjects2) asyncObjectsList.addObject("Countdown_Label", obj);
/* Don't save Ratshiro as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameCode.asyncCallback13375404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.asyncCallback13374236 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects2);

{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 10, 10, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects2[i].getBehavior("Text").setText("3");
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.gameCode.GDCountdown_9595LabelObjects1) asyncObjectsList.addObject("Countdown_Label", obj);
for (const obj of gdjs.gameCode.GDRatshiroObjects1) asyncObjectsList.addObject("Ratshiro", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameCode.asyncCallback13374236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkyObjects1Objects = Hashtable.newFrom({"Sky": gdjs.gameCode.GDSkyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDGame_95959595BGObjects2Objects = Hashtable.newFrom({"Game_BG": gdjs.gameCode.GDGame_9595BGObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDGame_95959595BGObjects3Objects = Hashtable.newFrom({"Game_BG": gdjs.gameCode.GDGame_9595BGObjects3});
gdjs.gameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects3);
gdjs.copyArray(runtimeScene.getObjects("Game_BG"), gdjs.gameCode.GDGame_9595BGObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects3[k] = gdjs.gameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDBaitObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDBaitObjects3[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDBaitObjects3[k] = gdjs.gameCode.GDBaitObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDBaitObjects3.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 10;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDGame_95959595BGObjects3Objects, runtimeScene, true, false);
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13400660);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDBaitObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(11).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "trigger_timer");
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects3[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 20;
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13402924);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].setCenterXInScene((( gdjs.gameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDPlayerObjects2[0].getPointX("")) + ((( gdjs.gameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDPlayerObjects2[0].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].getBehavior("Animation").setAnimationName("bait");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true);
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDGame_95959595BGObjects3Objects = Hashtable.newFrom({"Game_BG": gdjs.gameCode.GDGame_9595BGObjects3});
gdjs.gameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects3);
gdjs.copyArray(runtimeScene.getObjects("Game_BG"), gdjs.gameCode.GDGame_9595BGObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects3[k] = gdjs.gameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDBaitObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDBaitObjects3[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDBaitObjects3[k] = gdjs.gameCode.GDBaitObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDBaitObjects3.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDGame_95959595BGObjects3Objects, runtimeScene, true, false);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13406492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDBaitObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(11).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "trigger_timer");
}{gdjs.evtTools.debuggerTools.log("start timer: " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "trigger_timer")), "info", "");
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects3[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13407956);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].setCenterXInScene((( gdjs.gameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDPlayerObjects2[0].getPointX("")) + ((( gdjs.gameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDPlayerObjects2[0].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].getBehavior("Animation").setAnimationName("bait");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true);
}}

}


};gdjs.gameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13410724);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("punch");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13411524);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("double");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13412372);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("slap");
}
}{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(0);
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMorph_95959595CloudObjects2Objects = Hashtable.newFrom({"Morph_Cloud": gdjs.gameCode.GDMorph_9595CloudObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDManshiroObjects2Objects = Hashtable.newFrom({"Manshiro": gdjs.gameCode.GDManshiroObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMorph_95959595CloudObjects2Objects = Hashtable.newFrom({"Morph_Cloud": gdjs.gameCode.GDMorph_9595CloudObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.gameCode.GDPlayerObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDRatshiroObjects2Objects = Hashtable.newFrom({"Ratshiro": gdjs.gameCode.GDRatshiroObjects2});
gdjs.gameCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 100;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}}

}


};gdjs.gameCode.asyncCallback13428580 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Feedback_Label"), gdjs.gameCode.GDFeedback_9595LabelObjects3);

{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects3[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
}
{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.gameCode.GDFeedback_9595LabelObjects2) asyncObjectsList.addObject("Feedback_Label", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback13428580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Feedback_Label"), gdjs.gameCode.GDFeedback_9595LabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("UI_Rat_Healthbar"), gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio\\WHOOSH_AIRY_FLUTTER_01.wav", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i].getBehavior("Animation").setAnimationName((gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3))));
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].setX((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDFeedback_9595LabelObjects2[i].getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].getBehavior("Animation").setAnimationName("missed");
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3, 3, 5, 0.05, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.gameCode.GDPlayerObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDManshiroObjects2Objects = Hashtable.newFrom({"Manshiro": gdjs.gameCode.GDManshiroObjects2});
gdjs.gameCode.asyncCallback13432908 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.gameCode.GDPlayerObjects3);

gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects3);
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("idle");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects3[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "morph-timer");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true);
}}
gdjs.gameCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.gameCode.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback13432908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "morph-timer") < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13431356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Feedback_Label"), gdjs.gameCode.GDFeedback_9595LabelObjects2);
/* Reuse gdjs.gameCode.GDManshiroObjects2 */
gdjs.copyArray(runtimeScene.getObjects("UI_Rat_Healthbar"), gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio\\PUNCH_PERCUSSIVE_HEAVY_09.wav", 2, false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.25, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i].getBehavior("Animation").setAnimationName("insult");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11)));
}{gdjs.evtTools.debuggerTools.log("clicks: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(11)), "info", "");
}{for(var i = 0, len = gdjs.gameCode.GDManshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDManshiroObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].setX((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDFeedback_9595LabelObjects2[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].getBehavior("Animation").setAnimationName("hit");
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3, 3, 5, 0.05, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bait_Count"), gdjs.gameCode.GDBait_9595CountObjects2);
gdjs.copyArray(runtimeScene.getObjects("Healthbar_Label"), gdjs.gameCode.GDHealthbar_9595LabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.gameCode.GDRedFlatBarObjects2);
{for(var i = 0, len = gdjs.gameCode.GDBait_9595CountObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBait_9595CountObjects2[i].getBehavior("Text").setText("Bait x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.gameCode.GDRedFlatBarObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDRedFlatBarObjects2[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.gameCode.GDHealthbar_9595LabelObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDHealthbar_9595LabelObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + " / 100");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Game_BG"), gdjs.gameCode.GDGame_9595BGObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDGame_95959595BGObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].setCenterXInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 75;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13385716);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Headshot"), gdjs.gameCode.GDHeadshotObjects2);
{for(var i = 0, len = gdjs.gameCode.GDHeadshotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDHeadshotObjects2[i].getBehavior("Animation").setAnimationName("1");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 75;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 50;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13387116);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Headshot"), gdjs.gameCode.GDHeadshotObjects2);
{for(var i = 0, len = gdjs.gameCode.GDHeadshotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDHeadshotObjects2[i].getBehavior("Animation").setAnimationName("2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 50;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 25;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13388404);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Headshot"), gdjs.gameCode.GDHeadshotObjects2);
{for(var i = 0, len = gdjs.gameCode.GDHeadshotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDHeadshotObjects2[i].getBehavior("Animation").setAnimationName("3");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13389380);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Headshot"), gdjs.gameCode.GDHeadshotObjects2);
{for(var i = 0, len = gdjs.gameCode.GDHeadshotObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDHeadshotObjects2[i].getBehavior("Animation").setAnimationName("4");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "punch" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13390620);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "double" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13392052);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "slap" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13393444);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UI_Rat_Healthbar"), gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i].getBehavior("Animation").getAnimationName() != "blank" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[k] = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[k] = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13395052);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ui-copy-timer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ui-copy-timer") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UI_Rat_Healthbar"), gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2);
{for(var i = 0, len = gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2[i].getBehavior("Animation").setAnimationName("blank");
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "ui-copy-timer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 0;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13397356);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bait_Icon"), gdjs.gameCode.GDBait_9595IconObjects2);
{for(var i = 0, len = gdjs.gameCode.GDBait_9595IconObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBait_9595IconObjects2[i].setColor("59;59;59");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "game_over");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "game_over") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "game_over");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "trigger_timer") < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12));
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "trigger_timer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(12));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13413372);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(0);
}{gdjs.evtTools.debuggerTools.log("end timer: " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "trigger_timer")), "info", "");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "trigger_timer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDBaitObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDBaitObjects2[i].getBehavior("Animation").getAnimationName() == "bait" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDBaitObjects2[k] = gdjs.gameCode.GDBaitObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDBaitObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDBaitObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDBaitObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDBaitObjects2[k] = gdjs.gameCode.GDBaitObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDBaitObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13414452);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDBaitObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects2);
gdjs.copyArray(runtimeScene.getObjects("UI_Bar_BG"), gdjs.gameCode.GDUI_9595Bar_9595BGObjects2);
gdjs.gameCode.GDMorph_9595CloudObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMorph_95959595CloudObjects2Objects, (( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getPointX("")), (( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].setZOrder(4);
}
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].getBehavior("Scale").setScale(0.3);
}
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].setPosition((( gdjs.gameCode.GDBaitObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDBaitObjects2[0].getPointX("")),(( gdjs.gameCode.GDUI_9595Bar_9595BGObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDUI_9595Bar_9595BGObjects2[0].getPointY("")) - ((gdjs.gameCode.GDMorph_9595CloudObjects2[i].getHeight())));
}
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects2[i].setY(gdjs.gameCode.GDRatshiroObjects2[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDRatshiroObjects2[i].getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Morph_Cloud"), gdjs.gameCode.GDMorph_9595CloudObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDMorph_9595CloudObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDMorph_9595CloudObjects2[i].getBehavior("Animation").getAnimationName() == "morph" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDMorph_9595CloudObjects2[k] = gdjs.gameCode.GDMorph_9595CloudObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDMorph_9595CloudObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDMorph_9595CloudObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDMorph_9595CloudObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDMorph_9595CloudObjects2[k] = gdjs.gameCode.GDMorph_9595CloudObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDMorph_9595CloudObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), true);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13417956);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects2);
/* Reuse gdjs.gameCode.GDMorph_9595CloudObjects2 */
gdjs.copyArray(runtimeScene.getObjects("UI_Bar_BG"), gdjs.gameCode.GDUI_9595Bar_9595BGObjects2);
gdjs.gameCode.GDManshiroObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDManshiroObjects2Objects, (( gdjs.gameCode.GDMorph_9595CloudObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDMorph_9595CloudObjects2[0].getPointX("")), (( gdjs.gameCode.GDUI_9595Bar_9595BGObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDUI_9595Bar_9595BGObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gameCode.GDManshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDManshiroObjects2[i].setZOrder(4);
}
}{for(var i = 0, len = gdjs.gameCode.GDManshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDManshiroObjects2[i].getBehavior("Scale").setScale(0.4);
}
}{for(var i = 0, len = gdjs.gameCode.GDManshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDManshiroObjects2[i].setPosition((( gdjs.gameCode.GDMorph_9595CloudObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDMorph_9595CloudObjects2[0].getPointX("")),(( gdjs.gameCode.GDUI_9595Bar_9595BGObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDUI_9595Bar_9595BGObjects2[0].getPointY("")) - ((gdjs.gameCode.GDManshiroObjects2[i].getHeight())));
}
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDManshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDManshiroObjects2[i].setCenterXInScene((( gdjs.gameCode.GDBaitObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDBaitObjects2[0].getPointX("")) + ((( gdjs.gameCode.GDBaitObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDBaitObjects2[0].getWidth()) / 3));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "morph-timer");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "morph-timer") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13420428);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects2);
{for(var i = 0, len = gdjs.gameCode.GDBaitObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects2[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "morph-timer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13421996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Manshiro"), gdjs.gameCode.GDManshiroObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects2);
gdjs.gameCode.GDMorph_9595CloudObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDMorph_95959595CloudObjects2Objects, (( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getPointX("")), (( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].setZOrder(4);
}
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].getBehavior("Scale").setScale(0.2);
}
}{for(var i = 0, len = gdjs.gameCode.GDManshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDManshiroObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].setCenterPositionInScene((( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getPointX("")) + ((( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getWidth()) / 2),(( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getPointY("")) + (( gdjs.gameCode.GDRatshiroObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDRatshiroObjects2[0].getHeight()) - ((gdjs.gameCode.GDMorph_9595CloudObjects2[i].getHeight()) / 4));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Morph_Cloud"), gdjs.gameCode.GDMorph_9595CloudObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDMorph_9595CloudObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDMorph_9595CloudObjects2[i].getBehavior("Animation").getAnimationName() == "morph" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDMorph_9595CloudObjects2[k] = gdjs.gameCode.GDMorph_9595CloudObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDMorph_9595CloudObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDMorph_9595CloudObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDMorph_9595CloudObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDMorph_9595CloudObjects2[k] = gdjs.gameCode.GDMorph_9595CloudObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDMorph_9595CloudObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(7), false);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13424420);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDMorph_9595CloudObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects2);
{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() != "idle" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayerObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDRatshiroObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13426620);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Manshiro"), gdjs.gameCode.GDManshiroObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.gameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() != "idle" ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDPlayerObjects2[k] = gdjs.gameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDPlayerObjects2Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDManshiroObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13430948);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 100;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Feedback_Label"), gdjs.gameCode.GDFeedback_9595LabelObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects1[i].hide();
}
}}

}


};gdjs.gameCode.asyncCallback13441148 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}
gdjs.gameCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.gameCode.asyncCallback13441148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.asyncCallback13440636 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("skip_note"), gdjs.gameCode.GDskip_9595noteObjects2);
{for(var i = 0, len = gdjs.gameCode.GDskip_9595noteObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDskip_9595noteObjects2[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}
{ //Subevents
gdjs.gameCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.gameCode.asyncCallback13440636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDCountdown_95959595BGObjects1Objects = Hashtable.newFrom({"Countdown_BG": gdjs.gameCode.GDCountdown_9595BGObjects1});
gdjs.gameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13371420);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bait"), gdjs.gameCode.GDBaitObjects1);
gdjs.copyArray(runtimeScene.getObjects("City"), gdjs.gameCode.GDCityObjects1);
gdjs.copyArray(runtimeScene.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("End_Copy"), gdjs.gameCode.GDEnd_9595CopyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Feedback_Label"), gdjs.gameCode.GDFeedback_9595LabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Healthbar_Label"), gdjs.gameCode.GDHealthbar_9595LabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Morph_Cloud"), gdjs.gameCode.GDMorph_9595CloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.gameCode.GDRedFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.gameCode.GDSkyObjects1);
gdjs.copyArray(runtimeScene.getObjects("skip_note"), gdjs.gameCode.GDskip_9595noteObjects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "assets\\audio\\04 Absolute Rapid Oxidation.aac");
}{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects1[i].getBehavior("Scale").setScale(0.12);
}
}{for(var i = 0, len = gdjs.gameCode.GDMorph_9595CloudObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDMorph_9595CloudObjects1[i].getBehavior("Scale").setScale(0.12);
}
}{for(var i = 0, len = gdjs.gameCode.GDHealthbar_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDHealthbar_9595LabelObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + " / 100");
}
}{for(var i = 0, len = gdjs.gameCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkyObjects1[i].getBehavior("Opacity").setOpacity(150);
}
for(var i = 0, len = gdjs.gameCode.GDCityObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCityObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.gameCode.GDBaitObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBaitObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDFeedback_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDFeedback_9595LabelObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDskip_9595noteObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDskip_9595noteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDEnd_9595CopyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnd_9595CopyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDRedFlatBarObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 10, 10, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13379780);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDRatshiroObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDRatshiroObjects1[i].getBehavior("RectangleMovement").IsMovingLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDRatshiroObjects1[k] = gdjs.gameCode.GDRatshiroObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDRatshiroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDRatshiroObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ratshiro"), gdjs.gameCode.GDRatshiroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDRatshiroObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDRatshiroObjects1[i].getBehavior("RectangleMovement").IsMovingRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDRatshiroObjects1[k] = gdjs.gameCode.GDRatshiroObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDRatshiroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDRatshiroObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDRatshiroObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDRatshiroObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.gameCode.GDSkyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDSkyObjects1Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDSkyObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDSkyObjects1[i].getX() <= -((gdjs.gameCode.GDSkyObjects1[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDSkyObjects1[k] = gdjs.gameCode.GDSkyObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDSkyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDSkyObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkyObjects1[i].setX((gdjs.gameCode.GDSkyObjects1[i].getWidth()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("End_Copy"), gdjs.gameCode.GDEnd_9595CopyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.gameCode.GDSkyObjects1);
gdjs.copyArray(runtimeScene.getObjects("skip_note"), gdjs.gameCode.GDskip_9595noteObjects1);
{for(var i = 0, len = gdjs.gameCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDSkyObjects1[i].setX(gdjs.gameCode.GDSkyObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5))));
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.gameCode.GDskip_9595noteObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDskip_9595noteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.gameCode.GDEnd_9595CopyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnd_9595CopyObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.gameCode.GDRedFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) <= 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDRedFlatBarObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDRedFlatBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.gameCode.GDRedFlatBarObjects1[k] = gdjs.gameCode.GDRedFlatBarObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDRedFlatBarObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13438964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Countdown_BG"), gdjs.gameCode.GDCountdown_9595BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Countdown_Label"), gdjs.gameCode.GDCountdown_9595LabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("End_Copy"), gdjs.gameCode.GDEnd_9595CopyObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio\\06 The Undisputed.aac", 3, false, 50, 1.5);
}{gdjs.evtTools.sound.unloadMusic(runtimeScene, "assets\\audio\\04 Absolute Rapid Oxidation.aac");
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].getBehavior("Text").setText("Game Over");
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595BGObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595BGObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDEnd_9595CopyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnd_9595CopyObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595LabelObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595LabelObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.gameCode.GDCountdown_9595BGObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCountdown_9595BGObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade-in", 255, "linear", 2, false);
}
}
{ //Subevents
gdjs.gameCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Countdown_BG"), gdjs.gameCode.GDCountdown_9595BGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDCountdown_95959595BGObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13443020);
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13443364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End_Copy"), gdjs.gameCode.GDEnd_9595CopyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDEnd_9595CopyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnd_9595CopyObjects1[i].getBehavior("Text").setText("Looks like you are out of bait and RatShiro got away.");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13443980);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End_Copy"), gdjs.gameCode.GDEnd_9595CopyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDEnd_9595CopyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnd_9595CopyObjects1[i].getBehavior("Text").setText("Nice work, now go talk to your union rep!");
}
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDRatshiroObjects1.length = 0;
gdjs.gameCode.GDRatshiroObjects2.length = 0;
gdjs.gameCode.GDRatshiroObjects3.length = 0;
gdjs.gameCode.GDRatshiroObjects4.length = 0;
gdjs.gameCode.GDRatshiroObjects5.length = 0;
gdjs.gameCode.GDPlayerObjects1.length = 0;
gdjs.gameCode.GDPlayerObjects2.length = 0;
gdjs.gameCode.GDPlayerObjects3.length = 0;
gdjs.gameCode.GDPlayerObjects4.length = 0;
gdjs.gameCode.GDPlayerObjects5.length = 0;
gdjs.gameCode.GDBaitObjects1.length = 0;
gdjs.gameCode.GDBaitObjects2.length = 0;
gdjs.gameCode.GDBaitObjects3.length = 0;
gdjs.gameCode.GDBaitObjects4.length = 0;
gdjs.gameCode.GDBaitObjects5.length = 0;
gdjs.gameCode.GDCountdown_9595BGObjects1.length = 0;
gdjs.gameCode.GDCountdown_9595BGObjects2.length = 0;
gdjs.gameCode.GDCountdown_9595BGObjects3.length = 0;
gdjs.gameCode.GDCountdown_9595BGObjects4.length = 0;
gdjs.gameCode.GDCountdown_9595BGObjects5.length = 0;
gdjs.gameCode.GDCountdown_9595LabelObjects1.length = 0;
gdjs.gameCode.GDCountdown_9595LabelObjects2.length = 0;
gdjs.gameCode.GDCountdown_9595LabelObjects3.length = 0;
gdjs.gameCode.GDCountdown_9595LabelObjects4.length = 0;
gdjs.gameCode.GDCountdown_9595LabelObjects5.length = 0;
gdjs.gameCode.GDUI_9595Bar_9595BGObjects1.length = 0;
gdjs.gameCode.GDUI_9595Bar_9595BGObjects2.length = 0;
gdjs.gameCode.GDUI_9595Bar_9595BGObjects3.length = 0;
gdjs.gameCode.GDUI_9595Bar_9595BGObjects4.length = 0;
gdjs.gameCode.GDUI_9595Bar_9595BGObjects5.length = 0;
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects1.length = 0;
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects2.length = 0;
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects3.length = 0;
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects4.length = 0;
gdjs.gameCode.GDUI_9595Rat_9595HealthbarObjects5.length = 0;
gdjs.gameCode.GDskip_9595noteObjects1.length = 0;
gdjs.gameCode.GDskip_9595noteObjects2.length = 0;
gdjs.gameCode.GDskip_9595noteObjects3.length = 0;
gdjs.gameCode.GDskip_9595noteObjects4.length = 0;
gdjs.gameCode.GDskip_9595noteObjects5.length = 0;
gdjs.gameCode.GDBait_9595IconObjects1.length = 0;
gdjs.gameCode.GDBait_9595IconObjects2.length = 0;
gdjs.gameCode.GDBait_9595IconObjects3.length = 0;
gdjs.gameCode.GDBait_9595IconObjects4.length = 0;
gdjs.gameCode.GDBait_9595IconObjects5.length = 0;
gdjs.gameCode.GDBait_9595CountObjects1.length = 0;
gdjs.gameCode.GDBait_9595CountObjects2.length = 0;
gdjs.gameCode.GDBait_9595CountObjects3.length = 0;
gdjs.gameCode.GDBait_9595CountObjects4.length = 0;
gdjs.gameCode.GDBait_9595CountObjects5.length = 0;
gdjs.gameCode.GDFeedback_9595LabelObjects1.length = 0;
gdjs.gameCode.GDFeedback_9595LabelObjects2.length = 0;
gdjs.gameCode.GDFeedback_9595LabelObjects3.length = 0;
gdjs.gameCode.GDFeedback_9595LabelObjects4.length = 0;
gdjs.gameCode.GDFeedback_9595LabelObjects5.length = 0;
gdjs.gameCode.GDRedFlatBarObjects1.length = 0;
gdjs.gameCode.GDRedFlatBarObjects2.length = 0;
gdjs.gameCode.GDRedFlatBarObjects3.length = 0;
gdjs.gameCode.GDRedFlatBarObjects4.length = 0;
gdjs.gameCode.GDRedFlatBarObjects5.length = 0;
gdjs.gameCode.GDHealthbar_9595LabelObjects1.length = 0;
gdjs.gameCode.GDHealthbar_9595LabelObjects2.length = 0;
gdjs.gameCode.GDHealthbar_9595LabelObjects3.length = 0;
gdjs.gameCode.GDHealthbar_9595LabelObjects4.length = 0;
gdjs.gameCode.GDHealthbar_9595LabelObjects5.length = 0;
gdjs.gameCode.GDGame_9595BGObjects1.length = 0;
gdjs.gameCode.GDGame_9595BGObjects2.length = 0;
gdjs.gameCode.GDGame_9595BGObjects3.length = 0;
gdjs.gameCode.GDGame_9595BGObjects4.length = 0;
gdjs.gameCode.GDGame_9595BGObjects5.length = 0;
gdjs.gameCode.GDSkyObjects1.length = 0;
gdjs.gameCode.GDSkyObjects2.length = 0;
gdjs.gameCode.GDSkyObjects3.length = 0;
gdjs.gameCode.GDSkyObjects4.length = 0;
gdjs.gameCode.GDSkyObjects5.length = 0;
gdjs.gameCode.GDCityObjects1.length = 0;
gdjs.gameCode.GDCityObjects2.length = 0;
gdjs.gameCode.GDCityObjects3.length = 0;
gdjs.gameCode.GDCityObjects4.length = 0;
gdjs.gameCode.GDCityObjects5.length = 0;
gdjs.gameCode.GDEnd_9595CopyObjects1.length = 0;
gdjs.gameCode.GDEnd_9595CopyObjects2.length = 0;
gdjs.gameCode.GDEnd_9595CopyObjects3.length = 0;
gdjs.gameCode.GDEnd_9595CopyObjects4.length = 0;
gdjs.gameCode.GDEnd_9595CopyObjects5.length = 0;
gdjs.gameCode.GDMorph_9595CloudObjects1.length = 0;
gdjs.gameCode.GDMorph_9595CloudObjects2.length = 0;
gdjs.gameCode.GDMorph_9595CloudObjects3.length = 0;
gdjs.gameCode.GDMorph_9595CloudObjects4.length = 0;
gdjs.gameCode.GDMorph_9595CloudObjects5.length = 0;
gdjs.gameCode.GDManshiroObjects1.length = 0;
gdjs.gameCode.GDManshiroObjects2.length = 0;
gdjs.gameCode.GDManshiroObjects3.length = 0;
gdjs.gameCode.GDManshiroObjects4.length = 0;
gdjs.gameCode.GDManshiroObjects5.length = 0;
gdjs.gameCode.GDHeadshotObjects1.length = 0;
gdjs.gameCode.GDHeadshotObjects2.length = 0;
gdjs.gameCode.GDHeadshotObjects3.length = 0;
gdjs.gameCode.GDHeadshotObjects4.length = 0;
gdjs.gameCode.GDHeadshotObjects5.length = 0;
gdjs.gameCode.GDStoryObjects1.length = 0;
gdjs.gameCode.GDStoryObjects2.length = 0;
gdjs.gameCode.GDStoryObjects3.length = 0;
gdjs.gameCode.GDStoryObjects4.length = 0;
gdjs.gameCode.GDStoryObjects5.length = 0;

gdjs.gameCode.eventsList15(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
