gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDBGObjects1= [];
gdjs.InstructionsCode.GDBGObjects2= [];
gdjs.InstructionsCode.GDBGObjects3= [];
gdjs.InstructionsCode.GDPlay_95BtnObjects1= [];
gdjs.InstructionsCode.GDPlay_95BtnObjects2= [];
gdjs.InstructionsCode.GDPlay_95BtnObjects3= [];
gdjs.InstructionsCode.GDEat_95ThisObjects1= [];
gdjs.InstructionsCode.GDEat_95ThisObjects2= [];
gdjs.InstructionsCode.GDEat_95ThisObjects3= [];
gdjs.InstructionsCode.GDNot_95ThatObjects1= [];
gdjs.InstructionsCode.GDNot_95ThatObjects2= [];
gdjs.InstructionsCode.GDNot_95ThatObjects3= [];
gdjs.InstructionsCode.GDInstructionsObjects1= [];
gdjs.InstructionsCode.GDInstructionsObjects2= [];
gdjs.InstructionsCode.GDInstructionsObjects3= [];
gdjs.InstructionsCode.GDStoneObjects1= [];
gdjs.InstructionsCode.GDStoneObjects2= [];
gdjs.InstructionsCode.GDStoneObjects3= [];
gdjs.InstructionsCode.GDFlameObjects1= [];
gdjs.InstructionsCode.GDFlameObjects2= [];
gdjs.InstructionsCode.GDFlameObjects3= [];
gdjs.InstructionsCode.GDOne_95PointObjects1= [];
gdjs.InstructionsCode.GDOne_95PointObjects2= [];
gdjs.InstructionsCode.GDOne_95PointObjects3= [];
gdjs.InstructionsCode.GDTwo_95PointObjects1= [];
gdjs.InstructionsCode.GDTwo_95PointObjects2= [];
gdjs.InstructionsCode.GDTwo_95PointObjects3= [];
gdjs.InstructionsCode.GDscreams_95labelObjects1= [];
gdjs.InstructionsCode.GDscreams_95labelObjects2= [];
gdjs.InstructionsCode.GDscreams_95labelObjects3= [];
gdjs.InstructionsCode.GDLives_95labelObjects1= [];
gdjs.InstructionsCode.GDLives_95labelObjects2= [];
gdjs.InstructionsCode.GDLives_95labelObjects3= [];
gdjs.InstructionsCode.GDThree_95PointObjects1= [];
gdjs.InstructionsCode.GDThree_95PointObjects2= [];
gdjs.InstructionsCode.GDThree_95PointObjects3= [];
gdjs.InstructionsCode.GDSubtract_95Three_95PointObjects1= [];
gdjs.InstructionsCode.GDSubtract_95Three_95PointObjects2= [];
gdjs.InstructionsCode.GDSubtract_95Three_95PointObjects3= [];
gdjs.InstructionsCode.GDSubtract_95One_95LifeObjects1= [];
gdjs.InstructionsCode.GDSubtract_95One_95LifeObjects2= [];
gdjs.InstructionsCode.GDSubtract_95One_95LifeObjects3= [];
gdjs.InstructionsCode.GDCoin_95IconObjects1= [];
gdjs.InstructionsCode.GDCoin_95IconObjects2= [];
gdjs.InstructionsCode.GDCoin_95IconObjects3= [];
gdjs.InstructionsCode.GDBlueJewelObjects1= [];
gdjs.InstructionsCode.GDBlueJewelObjects2= [];
gdjs.InstructionsCode.GDBlueJewelObjects3= [];
gdjs.InstructionsCode.GDRedJewelObjects1= [];
gdjs.InstructionsCode.GDRedJewelObjects2= [];
gdjs.InstructionsCode.GDRedJewelObjects3= [];
gdjs.InstructionsCode.GDGame_95UI_95BGObjects1= [];
gdjs.InstructionsCode.GDGame_95UI_95BGObjects2= [];
gdjs.InstructionsCode.GDGame_95UI_95BGObjects3= [];
gdjs.InstructionsCode.GDCardObjects1= [];
gdjs.InstructionsCode.GDCardObjects2= [];
gdjs.InstructionsCode.GDCardObjects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_1 = {val:false};


gdjs.InstructionsCode.asyncCallback12942068 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Play_Btn"), gdjs.InstructionsCode.GDPlay_95BtnObjects2);

{for(var i = 0, len = gdjs.InstructionsCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDPlay_95BtnObjects2[i].hide(false);
}
}}
gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.InstructionsCode.GDPlay_95BtnObjects1) asyncObjectsList.addObject("Play_Btn", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.InstructionsCode.asyncCallback12942068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Eat_This"), gdjs.InstructionsCode.GDEat_95ThisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Not_That"), gdjs.InstructionsCode.GDNot_95ThatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.InstructionsCode.GDPlay_95BtnObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDPlay_95BtnObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDNot_95ThatObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDNot_95ThatObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.InstructionsCode.GDNot_95ThatObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDEat_95ThisObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDEat_95ThisObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.InstructionsCode.GDEat_95ThisObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDPlay_9595BtnObjects2Objects = Hashtable.newFrom({"Play_Btn": gdjs.InstructionsCode.GDPlay_95BtnObjects2});
gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDPlay_9595BtnObjects1Objects = Hashtable.newFrom({"Play_Btn": gdjs.InstructionsCode.GDPlay_95BtnObjects1});
gdjs.InstructionsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.InstructionsCode.GDPlay_95BtnObjects1, gdjs.InstructionsCode.GDPlay_95BtnObjects2);


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDPlay_9595BtnObjects2Objects, runtimeScene, true, false);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.InstructionsCode.GDPlay_95BtnObjects2 */
{for(var i = 0, len = gdjs.InstructionsCode.GDPlay_95BtnObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDPlay_95BtnObjects2[i].setColor("255;225;168");
}
}}

}


{

/* Reuse gdjs.InstructionsCode.GDPlay_95BtnObjects1 */

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
gdjs.InstructionsCode.condition2IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDPlay_9595BtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition1IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition2IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10577324);
}
}}
}
if (gdjs.InstructionsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story_Intro", false);
}}

}


};gdjs.InstructionsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.InstructionsCode.GDPlay_95BtnObjects1);

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InstructionsCode.GDPlay_95BtnObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDPlay_95BtnObjects1[i].isVisible() ) {
        gdjs.InstructionsCode.condition0IsTrue_0.val = true;
        gdjs.InstructionsCode.GDPlay_95BtnObjects1[k] = gdjs.InstructionsCode.GDPlay_95BtnObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDPlay_95BtnObjects1.length = k;}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InstructionsCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.InstructionsCode.eventsList4 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Play_Btn"), gdjs.InstructionsCode.GDPlay_95BtnObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDPlay_95BtnObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDPlay_95BtnObjects1[i].hide();
}
}
{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.InstructionsCode.eventsList1(runtimeScene);
}


{


gdjs.InstructionsCode.eventsList3(runtimeScene);
}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDBGObjects1.length = 0;
gdjs.InstructionsCode.GDBGObjects2.length = 0;
gdjs.InstructionsCode.GDBGObjects3.length = 0;
gdjs.InstructionsCode.GDPlay_95BtnObjects1.length = 0;
gdjs.InstructionsCode.GDPlay_95BtnObjects2.length = 0;
gdjs.InstructionsCode.GDPlay_95BtnObjects3.length = 0;
gdjs.InstructionsCode.GDEat_95ThisObjects1.length = 0;
gdjs.InstructionsCode.GDEat_95ThisObjects2.length = 0;
gdjs.InstructionsCode.GDEat_95ThisObjects3.length = 0;
gdjs.InstructionsCode.GDNot_95ThatObjects1.length = 0;
gdjs.InstructionsCode.GDNot_95ThatObjects2.length = 0;
gdjs.InstructionsCode.GDNot_95ThatObjects3.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects3.length = 0;
gdjs.InstructionsCode.GDStoneObjects1.length = 0;
gdjs.InstructionsCode.GDStoneObjects2.length = 0;
gdjs.InstructionsCode.GDStoneObjects3.length = 0;
gdjs.InstructionsCode.GDFlameObjects1.length = 0;
gdjs.InstructionsCode.GDFlameObjects2.length = 0;
gdjs.InstructionsCode.GDFlameObjects3.length = 0;
gdjs.InstructionsCode.GDOne_95PointObjects1.length = 0;
gdjs.InstructionsCode.GDOne_95PointObjects2.length = 0;
gdjs.InstructionsCode.GDOne_95PointObjects3.length = 0;
gdjs.InstructionsCode.GDTwo_95PointObjects1.length = 0;
gdjs.InstructionsCode.GDTwo_95PointObjects2.length = 0;
gdjs.InstructionsCode.GDTwo_95PointObjects3.length = 0;
gdjs.InstructionsCode.GDscreams_95labelObjects1.length = 0;
gdjs.InstructionsCode.GDscreams_95labelObjects2.length = 0;
gdjs.InstructionsCode.GDscreams_95labelObjects3.length = 0;
gdjs.InstructionsCode.GDLives_95labelObjects1.length = 0;
gdjs.InstructionsCode.GDLives_95labelObjects2.length = 0;
gdjs.InstructionsCode.GDLives_95labelObjects3.length = 0;
gdjs.InstructionsCode.GDThree_95PointObjects1.length = 0;
gdjs.InstructionsCode.GDThree_95PointObjects2.length = 0;
gdjs.InstructionsCode.GDThree_95PointObjects3.length = 0;
gdjs.InstructionsCode.GDSubtract_95Three_95PointObjects1.length = 0;
gdjs.InstructionsCode.GDSubtract_95Three_95PointObjects2.length = 0;
gdjs.InstructionsCode.GDSubtract_95Three_95PointObjects3.length = 0;
gdjs.InstructionsCode.GDSubtract_95One_95LifeObjects1.length = 0;
gdjs.InstructionsCode.GDSubtract_95One_95LifeObjects2.length = 0;
gdjs.InstructionsCode.GDSubtract_95One_95LifeObjects3.length = 0;
gdjs.InstructionsCode.GDCoin_95IconObjects1.length = 0;
gdjs.InstructionsCode.GDCoin_95IconObjects2.length = 0;
gdjs.InstructionsCode.GDCoin_95IconObjects3.length = 0;
gdjs.InstructionsCode.GDBlueJewelObjects1.length = 0;
gdjs.InstructionsCode.GDBlueJewelObjects2.length = 0;
gdjs.InstructionsCode.GDBlueJewelObjects3.length = 0;
gdjs.InstructionsCode.GDRedJewelObjects1.length = 0;
gdjs.InstructionsCode.GDRedJewelObjects2.length = 0;
gdjs.InstructionsCode.GDRedJewelObjects3.length = 0;
gdjs.InstructionsCode.GDGame_95UI_95BGObjects1.length = 0;
gdjs.InstructionsCode.GDGame_95UI_95BGObjects2.length = 0;
gdjs.InstructionsCode.GDGame_95UI_95BGObjects3.length = 0;
gdjs.InstructionsCode.GDCardObjects1.length = 0;
gdjs.InstructionsCode.GDCardObjects2.length = 0;
gdjs.InstructionsCode.GDCardObjects3.length = 0;

gdjs.InstructionsCode.eventsList4(runtimeScene);

return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
