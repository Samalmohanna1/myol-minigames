gdjs.menuCode = {};
gdjs.menuCode.GDMenu_9595BackgroundObjects1= [];
gdjs.menuCode.GDMenu_9595BackgroundObjects2= [];
gdjs.menuCode.GDMenu_9595BackgroundObjects3= [];
gdjs.menuCode.GDStartObjects1= [];
gdjs.menuCode.GDStartObjects2= [];
gdjs.menuCode.GDStartObjects3= [];
gdjs.menuCode.GDHow_9595ToObjects1= [];
gdjs.menuCode.GDHow_9595ToObjects2= [];
gdjs.menuCode.GDHow_9595ToObjects3= [];
gdjs.menuCode.GDArrowObjects1= [];
gdjs.menuCode.GDArrowObjects2= [];
gdjs.menuCode.GDArrowObjects3= [];
gdjs.menuCode.GDAudioObjects1= [];
gdjs.menuCode.GDAudioObjects2= [];
gdjs.menuCode.GDAudioObjects3= [];
gdjs.menuCode.GDMenu_9595LightObjects1= [];
gdjs.menuCode.GDMenu_9595LightObjects2= [];
gdjs.menuCode.GDMenu_9595LightObjects3= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDStartObjects1ObjectsGDgdjs_9546menuCode_9546GDHow_95959595ToObjects1Objects = Hashtable.newFrom({"Start": gdjs.menuCode.GDStartObjects1, "How_To": gdjs.menuCode.GDHow_9595ToObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDAudioObjects1Objects = Hashtable.newFrom({"Audio": gdjs.menuCode.GDAudioObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDAudioObjects1Objects = Hashtable.newFrom({"Audio": gdjs.menuCode.GDAudioObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.menuCode.GDStartObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDHow_95959595ToObjects1Objects = Hashtable.newFrom({"How_To": gdjs.menuCode.GDHow_9595ToObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.menuCode.GDStartObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "story", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", true);
}}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDHow_95959595ToObjects1Objects = Hashtable.newFrom({"How_To": gdjs.menuCode.GDHow_9595ToObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDAudioObjects1Objects = Hashtable.newFrom({"Audio": gdjs.menuCode.GDAudioObjects1});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.menuCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("How_To"), gdjs.menuCode.GDHow_9595ToObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.menuCode.GDStartObjects1);
{for(var i = 0, len = gdjs.menuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDStartObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.5);
}
for(var i = 0, len = gdjs.menuCode.GDHow_9595ToObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDHow_9595ToObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.5);
}
}{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].setColor("10;5;6");
}
}{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].getBehavior("Scale").setScale(0.7);
}
}{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13548388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Light"), gdjs.menuCode.GDMenu_9595LightObjects1);
{for(var i = 0, len = gdjs.menuCode.GDMenu_9595LightObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDMenu_9595LightObjects1[i].getBehavior("Opacity").setOpacity(1);
}
}{for(var i = 0, len = gdjs.menuCode.GDMenu_9595LightObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDMenu_9595LightObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.menuCode.GDMenu_9595LightObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDMenu_9595LightObjects1[i].getBehavior("Tween").addObjectOpacityTween2("light-flicker", 255, "easeInOutSine", 2, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.menuCode.GDAudioObjects1);
{for(var i = 0, len = gdjs.menuCode.GDAudioObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDAudioObjects1[i].getBehavior("Animation").setAnimationName("unmute");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.menuCode.GDAudioObjects1);
{for(var i = 0, len = gdjs.menuCode.GDAudioObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDAudioObjects1[i].getBehavior("Animation").setAnimationName("mute");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("How_To"), gdjs.menuCode.GDHow_9595ToObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.menuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDStartObjects1ObjectsGDgdjs_9546menuCode_9546GDHow_95959595ToObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13552252);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.menuCode.GDArrowObjects1);
{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.menuCode.GDAudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDAudioObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13552836);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDAudioObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDAudioObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDAudioObjects1[i].setColor("234;172;12");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.menuCode.GDAudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDAudioObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13553676);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDAudioObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDAudioObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDAudioObjects1[i].setColor("250;244;245");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.menuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13554452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.menuCode.GDArrowObjects1);
/* Reuse gdjs.menuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].setY((( gdjs.menuCode.GDStartObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDStartObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("How_To"), gdjs.menuCode.GDHow_9595ToObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDHow_95959595ToObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13555388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.menuCode.GDArrowObjects1);
/* Reuse gdjs.menuCode.GDHow_9595ToObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].setY((( gdjs.menuCode.GDHow_9595ToObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDHow_9595ToObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.menuCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDArrowObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.menuCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13557316);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("How_To"), gdjs.menuCode.GDHow_9595ToObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDHow_95959595ToObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13559572);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "how-to", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Audio"), gdjs.menuCode.GDAudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDAudioObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13560844);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4));
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDMenu_9595BackgroundObjects3.length = 0;
gdjs.menuCode.GDStartObjects1.length = 0;
gdjs.menuCode.GDStartObjects2.length = 0;
gdjs.menuCode.GDStartObjects3.length = 0;
gdjs.menuCode.GDHow_9595ToObjects1.length = 0;
gdjs.menuCode.GDHow_9595ToObjects2.length = 0;
gdjs.menuCode.GDHow_9595ToObjects3.length = 0;
gdjs.menuCode.GDArrowObjects1.length = 0;
gdjs.menuCode.GDArrowObjects2.length = 0;
gdjs.menuCode.GDArrowObjects3.length = 0;
gdjs.menuCode.GDAudioObjects1.length = 0;
gdjs.menuCode.GDAudioObjects2.length = 0;
gdjs.menuCode.GDAudioObjects3.length = 0;
gdjs.menuCode.GDMenu_9595LightObjects1.length = 0;
gdjs.menuCode.GDMenu_9595LightObjects2.length = 0;
gdjs.menuCode.GDMenu_9595LightObjects3.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
