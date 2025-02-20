gdjs.how_45toCode = {};
gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1= [];
gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects2= [];
gdjs.how_45toCode.GDClose_9595ButtonObjects1= [];
gdjs.how_45toCode.GDClose_9595ButtonObjects2= [];


gdjs.how_45toCode.mapOfGDgdjs_9546how_959545toCode_9546GDClose_95959595ButtonObjects1Objects = Hashtable.newFrom({"Close_Button": gdjs.how_45toCode.GDClose_9595ButtonObjects1});
gdjs.how_45toCode.mapOfGDgdjs_9546how_959545toCode_9546GDClose_95959595ButtonObjects1Objects = Hashtable.newFrom({"Close_Button": gdjs.how_45toCode.GDClose_9595ButtonObjects1});
gdjs.how_45toCode.mapOfGDgdjs_9546how_959545toCode_9546GDClose_95959595ButtonObjects1Objects = Hashtable.newFrom({"Close_Button": gdjs.how_45toCode.GDClose_9595ButtonObjects1});
gdjs.how_45toCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Close_Button"), gdjs.how_45toCode.GDClose_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.how_45toCode.mapOfGDgdjs_9546how_959545toCode_9546GDClose_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13591988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.how_45toCode.GDClose_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.how_45toCode.GDClose_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.how_45toCode.GDClose_9595ButtonObjects1[i].setColor("234;172;12");
}
}{for(var i = 0, len = gdjs.how_45toCode.GDClose_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.how_45toCode.GDClose_9595ButtonObjects1[i].getBehavior("Animation").setAnimationName("filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Close_Button"), gdjs.how_45toCode.GDClose_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.how_45toCode.mapOfGDgdjs_9546how_959545toCode_9546GDClose_95959595ButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13592852);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.how_45toCode.GDClose_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.how_45toCode.GDClose_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.how_45toCode.GDClose_9595ButtonObjects1[i].setColor("10;5;6");
}
}{for(var i = 0, len = gdjs.how_45toCode.GDClose_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.how_45toCode.GDClose_9595ButtonObjects1[i].getBehavior("Animation").setAnimationName("empty");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Close_Button"), gdjs.how_45toCode.GDClose_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.how_45toCode.mapOfGDgdjs_9546how_959545toCode_9546GDClose_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(13594948);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13595452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("How_To_Background"), gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1);
{for(var i = 0, len = gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1.length ;i < len;++i) {
    gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1[i].getBehavior("Animation").setAnimationName("mobile");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13596276);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("How_To_Background"), gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1);
{for(var i = 0, len = gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1.length ;i < len;++i) {
    gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1[i].getBehavior("Animation").setAnimationName("desktop");
}
}}

}


};

gdjs.how_45toCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects1.length = 0;
gdjs.how_45toCode.GDHow_9595To_9595BackgroundObjects2.length = 0;
gdjs.how_45toCode.GDClose_9595ButtonObjects1.length = 0;
gdjs.how_45toCode.GDClose_9595ButtonObjects2.length = 0;

gdjs.how_45toCode.eventsList0(runtimeScene);

return;

}

gdjs['how_45toCode'] = gdjs.how_45toCode;
