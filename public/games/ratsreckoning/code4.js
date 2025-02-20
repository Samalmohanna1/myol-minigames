gdjs.storyCode = {};
gdjs.storyCode.GDStoryObjects1= [];
gdjs.storyCode.GDStoryObjects2= [];
gdjs.storyCode.GDEmailObjects1= [];
gdjs.storyCode.GDEmailObjects2= [];
gdjs.storyCode.GDStory2Objects1= [];
gdjs.storyCode.GDStory2Objects2= [];
gdjs.storyCode.GDskip_9595noteObjects1= [];
gdjs.storyCode.GDskip_9595noteObjects2= [];


gdjs.storyCode.asyncCallback13613212 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("skip_note"), gdjs.storyCode.GDskip_9595noteObjects2);
{for(var i = 0, len = gdjs.storyCode.GDskip_9595noteObjects2.length ;i < len;++i) {
    gdjs.storyCode.GDskip_9595noteObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.storyCode.GDskip_9595noteObjects2.length ;i < len;++i) {
    gdjs.storyCode.GDskip_9595noteObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}
gdjs.storyCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.storyCode.asyncCallback13613212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.storyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Story"), gdjs.storyCode.GDStoryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Story2"), gdjs.storyCode.GDStory2Objects1);
gdjs.copyArray(runtimeScene.getObjects("skip_note"), gdjs.storyCode.GDskip_9595noteObjects1);
{for(var i = 0, len = gdjs.storyCode.GDskip_9595noteObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDskip_9595noteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.storyCode.GDStory2Objects1.length ;i < len;++i) {
    gdjs.storyCode.GDStory2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.storyCode.GDStoryObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDStoryObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade-in", 255, "linear", 0.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Story"), gdjs.storyCode.GDStoryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.storyCode.GDStoryObjects1.length;i<l;++i) {
    if ( gdjs.storyCode.GDStoryObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.storyCode.GDStoryObjects1[k] = gdjs.storyCode.GDStoryObjects1[i];
        ++k;
    }
}
gdjs.storyCode.GDStoryObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13610636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.storyCode.GDEmailObjects1);
{for(var i = 0, len = gdjs.storyCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDEmailObjects1[i].getBehavior("Tween").addObjectPositionYTween2("move-up", 208, "easeTo", 0.5, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "read_email");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "read_email") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Story"), gdjs.storyCode.GDStoryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Story2"), gdjs.storyCode.GDStory2Objects1);
{for(var i = 0, len = gdjs.storyCode.GDStoryObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDStoryObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.storyCode.GDStory2Objects1.length ;i < len;++i) {
    gdjs.storyCode.GDStory2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.storyCode.GDStory2Objects1.length ;i < len;++i) {
    gdjs.storyCode.GDStory2Objects1[i].getBehavior("Text_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "read_email");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Story2"), gdjs.storyCode.GDStory2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.storyCode.GDStory2Objects1.length;i<l;++i) {
    if ( gdjs.storyCode.GDStory2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.storyCode.GDStory2Objects1[k] = gdjs.storyCode.GDStory2Objects1[i];
        ++k;
    }
}
gdjs.storyCode.GDStory2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13612932);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.storyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13614356);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.storyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.storyCode.GDStoryObjects1.length = 0;
gdjs.storyCode.GDStoryObjects2.length = 0;
gdjs.storyCode.GDEmailObjects1.length = 0;
gdjs.storyCode.GDEmailObjects2.length = 0;
gdjs.storyCode.GDStory2Objects1.length = 0;
gdjs.storyCode.GDStory2Objects2.length = 0;
gdjs.storyCode.GDskip_9595noteObjects1.length = 0;
gdjs.storyCode.GDskip_9595noteObjects2.length = 0;

gdjs.storyCode.eventsList1(runtimeScene);

return;

}

gdjs['storyCode'] = gdjs.storyCode;
