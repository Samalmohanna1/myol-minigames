
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton || {};

/**
 * Object generated from Panel sprite button
 */
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton = class PanelSpriteButton extends gdjs.CustomRuntimeObject {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.PressedLabelOffsetY = objectData.content.PressedLabelOffsetY !== undefined ? objectData.content.PressedLabelOffsetY : Number("0") || 0;
    this._objectData.LeftPadding = objectData.content.LeftPadding !== undefined ? objectData.content.LeftPadding : Number("0") || 0;
    this._objectData.RightPadding = objectData.content.RightPadding !== undefined ? objectData.content.RightPadding : Number("0") || 0;
    this._objectData.TopPadding = objectData.content.TopPadding !== undefined ? objectData.content.TopPadding : Number("0") || 0;
    this._objectData.BottomPadding = objectData.content.BottomPadding !== undefined ? objectData.content.BottomPadding : Number("0") || 0;
    this._objectData.ShouldCheckHovering = true;

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.PressedLabelOffsetY !== newObjectData.content.PressedLabelOffsetY)
      this._objectData.PressedLabelOffsetY = newObjectData.content.PressedLabelOffsetY;
    if (oldObjectData.content.LeftPadding !== newObjectData.content.LeftPadding)
      this._objectData.LeftPadding = newObjectData.content.LeftPadding;
    if (oldObjectData.content.RightPadding !== newObjectData.content.RightPadding)
      this._objectData.RightPadding = newObjectData.content.RightPadding;
    if (oldObjectData.content.TopPadding !== newObjectData.content.TopPadding)
      this._objectData.TopPadding = newObjectData.content.TopPadding;
    if (oldObjectData.content.BottomPadding !== newObjectData.content.BottomPadding)
      this._objectData.BottomPadding = newObjectData.content.BottomPadding;
    if (oldObjectData.content.ShouldCheckHovering !== newObjectData.content.ShouldCheckHovering)
      this._objectData.ShouldCheckHovering = newObjectData.content.ShouldCheckHovering;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getPressedLabelOffsetY() {
    return this._objectData.PressedLabelOffsetY !== undefined ? this._objectData.PressedLabelOffsetY : Number("0") || 0;
  }
  _setPressedLabelOffsetY(newValue) {
    this._objectData.PressedLabelOffsetY = newValue;
  }
  _getLeftPadding() {
    return this._objectData.LeftPadding !== undefined ? this._objectData.LeftPadding : Number("0") || 0;
  }
  _setLeftPadding(newValue) {
    this._objectData.LeftPadding = newValue;
  }
  _getRightPadding() {
    return this._objectData.RightPadding !== undefined ? this._objectData.RightPadding : Number("0") || 0;
  }
  _setRightPadding(newValue) {
    this._objectData.RightPadding = newValue;
  }
  _getTopPadding() {
    return this._objectData.TopPadding !== undefined ? this._objectData.TopPadding : Number("0") || 0;
  }
  _setTopPadding(newValue) {
    this._objectData.TopPadding = newValue;
  }
  _getBottomPadding() {
    return this._objectData.BottomPadding !== undefined ? this._objectData.BottomPadding : Number("0") || 0;
  }
  _setBottomPadding(newValue) {
    this._objectData.BottomPadding = newValue;
  }
  _getShouldCheckHovering() {
    return this._objectData.ShouldCheckHovering !== undefined ? this._objectData.ShouldCheckHovering : true;
  }
  _setShouldCheckHovering(newValue) {
    this._objectData.ShouldCheckHovering = newValue;
  }
  _toggleShouldCheckHovering() {
    this._setShouldCheckHovering(!this._getShouldCheckHovering());
  }
}

// Methods:
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDIdleObjects1Objects = Hashtable.newFrom({"Idle": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDHoveredObjects1Objects = Hashtable.newFrom({"Hovered": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDPressedObjects1Objects = Hashtable.newFrom({"Pressed": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDLabelObjects1Objects = Hashtable.newFrom({"Label": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDIdleObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDHoveredObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDPressedObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1[i].hide();
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46onCreatedContext_46GDLabelObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1[i].CenterLabel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1[i]._setShouldCheckHovering(false);
}
}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1[i].CenterLabel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final = [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final = [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final = [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects4= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition2IsTrue_2 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition3IsTrue_2 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46doStepPostEventsContext_46GDIdleObjects2Objects = Hashtable.newFrom({"Idle": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46doStepPostEventsContext_46GDIdleObjects2Objects = Hashtable.newFrom({"Idle": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableBoolean(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("ContainsCursor"), true) ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3);

for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariables().get("State")) == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3);

for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariables().get("State")) == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2_1final, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
}
}
}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")).setString("PressedInside");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariables().get("State")) == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariables().get("State")).setString("Validated");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "PressedOutside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")).setString("Idle");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3);


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariables().get("State")) == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3[i].getVariables().get("State")).setString("Idle");
}
}}

}


{

/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")).setString("PressedOutside");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "PressedOutside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")).setString("PressedInside");
}
}}

}


{

/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1 */

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("State")) == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = k;}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("State")).setString("Hovered");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].setVariableBoolean(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("ContainsCursor"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3[i]._getShouldCheckHovering() ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);
}
}
}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46doStepPostEventsContext_46GDIdleObjects2Objects);
}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95PanelSpriteButton_46PanelSpriteButton_46prototype_46doStepPostEventsContext_46GDIdleObjects2Objects, runtimeScene, false, false);
}}
}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].setVariableBoolean(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("ContainsCursor"), true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "Validated" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")).setString("Idle");
}
}}

}


{



}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(13502892);
}
}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableBoolean(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("ContainsCursor"), true)) ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariableBoolean(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("ContainsCursor"), true) ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(13511284);
}
}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[0].CenterWithPaddingY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(13512492);
}
}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[0].CenterWithPaddingY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].getVariables().get("State")) == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(13514036);
}
}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[0].CenterWithPaddingY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[0]._getPressedLabelOffsetY()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("State")) == "PressedOutside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(13514732);
}
}}
if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[0].CenterWithPaddingY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_2 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_2.val = ((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[0].getWidth()) != Math.max((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[0].getWidth()), (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[0].getWidth())));
}
if( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);
{gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_2 = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_2.val = ((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[0].getHeight()) != Math.max((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[0].getHeight()), (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[0].getHeight())));
}
if( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1_1final, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1_1final, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1 */
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("Width")).setNumber((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].returnVariable(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("Height")).setNumber((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("Width"))));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[0].getVariables()).get("Width"))));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[0].getVariables()).get("Width"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].setHeight((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].getVariables().get("Height"))));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1[i].setHeight((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[0].getVariables()).get("Height"))));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1[i].setHeight((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[0].getVariables()).get("Height"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].CenterLabel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[i]._setShouldCheckHovering(false);
}
}}

}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects4.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[i].getVariables().get("State")) == "Validated" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[i].getVariables().get("State")) == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHovered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i].getVariables().get("State")) == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i].getVariables().get("State")) == "PressedOutside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocused = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[i].getVariableString(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[i].getVariables().get("State")) == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1[i].setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("LabelText") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1[i].CenterLabel((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelText = function(LabelText, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "LabelText") return LabelText;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1.length === 0 ) ? "" :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1[0].getString()); }}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects1[0].getCenterYInScene()) + ((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1[0]._getTopPadding()) - (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1[0]._getBottomPadding())) / 2; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterWithPaddingYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects2= [];

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects1);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1 */
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1 */
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].setCenterXInScene((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects1.length === 0 ) ? (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects1.length === 0 ) ? (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1[0].getCenterXInScene()) :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects1[0].getCenterXInScene()) :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects1[0].getCenterXInScene()) + ((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getLeftPadding()) - (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getRightPadding())) / 2);
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].setPosition((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getLeftPadding()),(( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getTopPadding()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].setWrappingWidth((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1[0].getWidth()) - (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getLeftPadding()) - (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getRightPadding()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].setWrappingWidth((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1[0].getWidth()) - (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getLeftPadding()) - (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getRightPadding()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0].CenterWithPaddingY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].setY(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1[i].getY() + ((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1[0]._getPressedLabelOffsetY())));
}
}}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabel = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.GDPressedObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.CenterLabelContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("PanelSpriteButton::PanelSpriteButton", gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton);
