gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDBg_95SceneObjects1= [];
gdjs.InstructionsCode.GDBg_95SceneObjects2= [];
gdjs.InstructionsCode.GDBg_95SceneObjects3= [];
gdjs.InstructionsCode.GDGame_95TimerObjects1= [];
gdjs.InstructionsCode.GDGame_95TimerObjects2= [];
gdjs.InstructionsCode.GDGame_95TimerObjects3= [];
gdjs.InstructionsCode.GDGoalObjects1= [];
gdjs.InstructionsCode.GDGoalObjects2= [];
gdjs.InstructionsCode.GDGoalObjects3= [];
gdjs.InstructionsCode.GDReadyObjects1= [];
gdjs.InstructionsCode.GDReadyObjects2= [];
gdjs.InstructionsCode.GDReadyObjects3= [];
gdjs.InstructionsCode.GDEatThisObjects1= [];
gdjs.InstructionsCode.GDEatThisObjects2= [];
gdjs.InstructionsCode.GDEatThisObjects3= [];
gdjs.InstructionsCode.GDBodyCountObjects1= [];
gdjs.InstructionsCode.GDBodyCountObjects2= [];
gdjs.InstructionsCode.GDBodyCountObjects3= [];
gdjs.InstructionsCode.GDTimerObjects1= [];
gdjs.InstructionsCode.GDTimerObjects2= [];
gdjs.InstructionsCode.GDTimerObjects3= [];
gdjs.InstructionsCode.GDCircleObjects1= [];
gdjs.InstructionsCode.GDCircleObjects2= [];
gdjs.InstructionsCode.GDCircleObjects3= [];
gdjs.InstructionsCode.GDEdible_95IconObjects1= [];
gdjs.InstructionsCode.GDEdible_95IconObjects2= [];
gdjs.InstructionsCode.GDEdible_95IconObjects3= [];
gdjs.InstructionsCode.GDArrow_95Shadow_95LeftObjects1= [];
gdjs.InstructionsCode.GDArrow_95Shadow_95LeftObjects2= [];
gdjs.InstructionsCode.GDArrow_95Shadow_95LeftObjects3= [];
gdjs.InstructionsCode.GDArrow_95Shadow_95RightObjects1= [];
gdjs.InstructionsCode.GDArrow_95Shadow_95RightObjects2= [];
gdjs.InstructionsCode.GDArrow_95Shadow_95RightObjects3= [];
gdjs.InstructionsCode.GDDead_95Fish_95IconObjects1= [];
gdjs.InstructionsCode.GDDead_95Fish_95IconObjects2= [];
gdjs.InstructionsCode.GDDead_95Fish_95IconObjects3= [];
gdjs.InstructionsCode.GDEnemiesEatenObjects1= [];
gdjs.InstructionsCode.GDEnemiesEatenObjects2= [];
gdjs.InstructionsCode.GDEnemiesEatenObjects3= [];
gdjs.InstructionsCode.GDCard_95Blue_95BgObjects1= [];
gdjs.InstructionsCode.GDCard_95Blue_95BgObjects2= [];
gdjs.InstructionsCode.GDCard_95Blue_95BgObjects3= [];
gdjs.InstructionsCode.GDBack_95ButtonObjects1= [];
gdjs.InstructionsCode.GDBack_95ButtonObjects2= [];
gdjs.InstructionsCode.GDBack_95ButtonObjects3= [];
gdjs.InstructionsCode.GDReady_95ButtonObjects1= [];
gdjs.InstructionsCode.GDReady_95ButtonObjects2= [];
gdjs.InstructionsCode.GDReady_95ButtonObjects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};


gdjs.InstructionsCode.asyncCallback13887708 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Back_Button"), gdjs.InstructionsCode.GDBack_95ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ready"), gdjs.InstructionsCode.GDReadyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ready_Button"), gdjs.InstructionsCode.GDReady_95ButtonObjects2);
{for(var i = 0, len = gdjs.InstructionsCode.GDBack_95ButtonObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBack_95ButtonObjects2[i].setPosition(749,896);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDReady_95ButtonObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReady_95ButtonObjects2[i].setPosition(1041,896);
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDReadyObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReadyObjects2[i].setPosition(1118,929);
}
}}
gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.InstructionsCode.asyncCallback13887708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDBack_9595ButtonObjects1Objects = Hashtable.newFrom({"Back_Button": gdjs.InstructionsCode.GDBack_95ButtonObjects1});
gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDBack_9595ButtonObjects1Objects = Hashtable.newFrom({"Back_Button": gdjs.InstructionsCode.GDBack_95ButtonObjects1});
gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReady_9595ButtonObjects1Objects = Hashtable.newFrom({"Ready_Button": gdjs.InstructionsCode.GDReady_95ButtonObjects1});
gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReady_9595ButtonObjects1Objects = Hashtable.newFrom({"Ready_Button": gdjs.InstructionsCode.GDReady_95ButtonObjects1});
gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReady_9595ButtonObjects1Objects = Hashtable.newFrom({"Ready_Button": gdjs.InstructionsCode.GDReady_95ButtonObjects1});
gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDBack_9595ButtonObjects1Objects = Hashtable.newFrom({"Back_Button": gdjs.InstructionsCode.GDBack_95ButtonObjects1});
gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Edible_Icon"), gdjs.InstructionsCode.GDEdible_95IconObjects2);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDEdible_95IconObjects2.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDEdible_95IconObjects2[i].isCurrentAnimationName("one") ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDEdible_95IconObjects2[k] = gdjs.InstructionsCode.GDEdible_95IconObjects2[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = k;}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDEdible_95IconObjects2.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDEdible_95IconObjects2[i].hasAnimationEnded() ) {
        gdjs.InstructionsCode.condition1IsTrue_0.val = true;
        gdjs.InstructionsCode.GDEdible_95IconObjects2[k] = gdjs.InstructionsCode.GDEdible_95IconObjects2[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = k;}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDEdible_95IconObjects2 */
{for(var i = 0, len = gdjs.InstructionsCode.GDEdible_95IconObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDEdible_95IconObjects2[i].setAnimationName("two");
}
}}

}


};gdjs.InstructionsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Edible_Icon"), gdjs.InstructionsCode.GDEdible_95IconObjects2);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDEdible_95IconObjects2.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDEdible_95IconObjects2[i].isCurrentAnimationName("two") ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDEdible_95IconObjects2[k] = gdjs.InstructionsCode.GDEdible_95IconObjects2[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = k;}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDEdible_95IconObjects2.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDEdible_95IconObjects2[i].hasAnimationEnded() ) {
        gdjs.InstructionsCode.condition1IsTrue_0.val = true;
        gdjs.InstructionsCode.GDEdible_95IconObjects2[k] = gdjs.InstructionsCode.GDEdible_95IconObjects2[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = k;}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDEdible_95IconObjects2 */
{for(var i = 0, len = gdjs.InstructionsCode.GDEdible_95IconObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDEdible_95IconObjects2[i].setAnimationName("three");
}
}}

}


};gdjs.InstructionsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Edible_Icon"), gdjs.InstructionsCode.GDEdible_95IconObjects2);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDEdible_95IconObjects2.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDEdible_95IconObjects2[i].isCurrentAnimationName("three") ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDEdible_95IconObjects2[k] = gdjs.InstructionsCode.GDEdible_95IconObjects2[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = k;}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDEdible_95IconObjects2.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDEdible_95IconObjects2[i].hasAnimationEnded() ) {
        gdjs.InstructionsCode.condition1IsTrue_0.val = true;
        gdjs.InstructionsCode.GDEdible_95IconObjects2[k] = gdjs.InstructionsCode.GDEdible_95IconObjects2[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = k;}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDEdible_95IconObjects2 */
{for(var i = 0, len = gdjs.InstructionsCode.GDEdible_95IconObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDEdible_95IconObjects2[i].setAnimationName("one");
}
}}

}


};gdjs.InstructionsCode.eventsList4 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InstructionsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InstructionsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InstructionsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.InstructionsCode.eventsList5 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.InstructionsCode.GDCircleObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDCircleObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDCircleObjects1[i].resetTimer("flash_timer");
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Ready_Button"), gdjs.InstructionsCode.GDReady_95ButtonObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDReady_95ButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReady_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 3, 0.2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_Button"), gdjs.InstructionsCode.GDBack_95ButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDBack_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_Button"), gdjs.InstructionsCode.GDBack_95ButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDBack_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13890788);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDBack_95ButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDBack_95ButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBack_95ButtonObjects1[i].setAnimationName("hover");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}{for(var i = 0, len = gdjs.InstructionsCode.GDBack_95ButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBack_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 2, 2, 3, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ready_Button"), gdjs.InstructionsCode.GDReady_95ButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReady_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ready_Button"), gdjs.InstructionsCode.GDReady_95ButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReady_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13892996);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ready"), gdjs.InstructionsCode.GDReadyObjects1);
/* Reuse gdjs.InstructionsCode.GDReady_95ButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDReady_95ButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReady_95ButtonObjects1[i].setAnimationName("hover");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDReadyObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReadyObjects1[i].setColor("255;191;17");
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sounds\\Retro Event UI 13.wav", 2, false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ready_Button"), gdjs.InstructionsCode.GDReady_95ButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDReady_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ready"), gdjs.InstructionsCode.GDReadyObjects1);
/* Reuse gdjs.InstructionsCode.GDReady_95ButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDReadyObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReadyObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDReady_95ButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDReady_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_Button"), gdjs.InstructionsCode.GDBack_95ButtonObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDBack_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDBack_95ButtonObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDBack_95ButtonObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBack_95ButtonObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.InstructionsCode.GDCircleObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDCircleObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDCircleObjects1[i].getTimerElapsedTimeInSecondsOrNaN("flash_timer") > 2 ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDCircleObjects1[k] = gdjs.InstructionsCode.GDCircleObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDCircleObjects1.length = k;}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDCircleObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDCircleObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDCircleObjects1[i].setAnimationName("flash");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDCircleObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDCircleObjects1[i].resetTimer("flash_timer");
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.InstructionsCode.GDCircleObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDCircleObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDCircleObjects1[i].isCurrentAnimationName("flash") ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDCircleObjects1[k] = gdjs.InstructionsCode.GDCircleObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDCircleObjects1.length = k;}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDCircleObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDCircleObjects1[i].hasAnimationEnded() ) {
        gdjs.InstructionsCode.condition1IsTrue_0.val = true;
        gdjs.InstructionsCode.GDCircleObjects1[k] = gdjs.InstructionsCode.GDCircleObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDCircleObjects1.length = k;}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDCircleObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDCircleObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDCircleObjects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 2;
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDBg_95SceneObjects1.length = 0;
gdjs.InstructionsCode.GDBg_95SceneObjects2.length = 0;
gdjs.InstructionsCode.GDBg_95SceneObjects3.length = 0;
gdjs.InstructionsCode.GDGame_95TimerObjects1.length = 0;
gdjs.InstructionsCode.GDGame_95TimerObjects2.length = 0;
gdjs.InstructionsCode.GDGame_95TimerObjects3.length = 0;
gdjs.InstructionsCode.GDGoalObjects1.length = 0;
gdjs.InstructionsCode.GDGoalObjects2.length = 0;
gdjs.InstructionsCode.GDGoalObjects3.length = 0;
gdjs.InstructionsCode.GDReadyObjects1.length = 0;
gdjs.InstructionsCode.GDReadyObjects2.length = 0;
gdjs.InstructionsCode.GDReadyObjects3.length = 0;
gdjs.InstructionsCode.GDEatThisObjects1.length = 0;
gdjs.InstructionsCode.GDEatThisObjects2.length = 0;
gdjs.InstructionsCode.GDEatThisObjects3.length = 0;
gdjs.InstructionsCode.GDBodyCountObjects1.length = 0;
gdjs.InstructionsCode.GDBodyCountObjects2.length = 0;
gdjs.InstructionsCode.GDBodyCountObjects3.length = 0;
gdjs.InstructionsCode.GDTimerObjects1.length = 0;
gdjs.InstructionsCode.GDTimerObjects2.length = 0;
gdjs.InstructionsCode.GDTimerObjects3.length = 0;
gdjs.InstructionsCode.GDCircleObjects1.length = 0;
gdjs.InstructionsCode.GDCircleObjects2.length = 0;
gdjs.InstructionsCode.GDCircleObjects3.length = 0;
gdjs.InstructionsCode.GDEdible_95IconObjects1.length = 0;
gdjs.InstructionsCode.GDEdible_95IconObjects2.length = 0;
gdjs.InstructionsCode.GDEdible_95IconObjects3.length = 0;
gdjs.InstructionsCode.GDArrow_95Shadow_95LeftObjects1.length = 0;
gdjs.InstructionsCode.GDArrow_95Shadow_95LeftObjects2.length = 0;
gdjs.InstructionsCode.GDArrow_95Shadow_95LeftObjects3.length = 0;
gdjs.InstructionsCode.GDArrow_95Shadow_95RightObjects1.length = 0;
gdjs.InstructionsCode.GDArrow_95Shadow_95RightObjects2.length = 0;
gdjs.InstructionsCode.GDArrow_95Shadow_95RightObjects3.length = 0;
gdjs.InstructionsCode.GDDead_95Fish_95IconObjects1.length = 0;
gdjs.InstructionsCode.GDDead_95Fish_95IconObjects2.length = 0;
gdjs.InstructionsCode.GDDead_95Fish_95IconObjects3.length = 0;
gdjs.InstructionsCode.GDEnemiesEatenObjects1.length = 0;
gdjs.InstructionsCode.GDEnemiesEatenObjects2.length = 0;
gdjs.InstructionsCode.GDEnemiesEatenObjects3.length = 0;
gdjs.InstructionsCode.GDCard_95Blue_95BgObjects1.length = 0;
gdjs.InstructionsCode.GDCard_95Blue_95BgObjects2.length = 0;
gdjs.InstructionsCode.GDCard_95Blue_95BgObjects3.length = 0;
gdjs.InstructionsCode.GDBack_95ButtonObjects1.length = 0;
gdjs.InstructionsCode.GDBack_95ButtonObjects2.length = 0;
gdjs.InstructionsCode.GDBack_95ButtonObjects3.length = 0;
gdjs.InstructionsCode.GDReady_95ButtonObjects1.length = 0;
gdjs.InstructionsCode.GDReady_95ButtonObjects2.length = 0;
gdjs.InstructionsCode.GDReady_95ButtonObjects3.length = 0;

gdjs.InstructionsCode.eventsList5(runtimeScene);

return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
