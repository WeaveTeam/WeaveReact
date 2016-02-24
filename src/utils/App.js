
import Styles from "./Style";
import HTMLWrapperConfig  from "../configs/HTMLWrapperConfig";
import React from "react";

class App {
    constructor() {

    }

    static registerToolImplementation(asClassName, jsClass) {
        if (!App.toolRegistry[asClassName])
            App.toolRegistry[asClassName] = jsClass;
    }

    static getToolImplementation(asClassName) {
        return App.toolRegistry[asClassName];
    }

    static registerToolConfig (tool, config) {
        if (!App.toolConfigMap.has(tool))
            App.toolConfigMap.set(tool,config);
    }

    static getToolConfig(tool) {
        return App.toolConfigMap.get(tool);
    }

    static hookSessionStateForComponentChildren(children,config){
        config.children.delayCallbacks();

        config.childConfigMap = new Map();
        config.configChildMap.forEach(function(value, key){
            var configName = config.children.getName(key);
            config.children.removeObject(configName);
        });
        config.configChildMap = new Map();

        React.Children.forEach(children,function(child,index){
            var childName = "";
            var childConfig = config.childConfigMap.get(child);
            var childConfigName = "";
            if(typeof(child.type) === "string"){ // for HTML Elements
                if(!childConfig){
                    childConfig = config.children.requestObject('',HTMLWrapperConfig);
                }
            }else{ // for React Composite Elements
                var configClass = App.getToolConfig(child.type);
                if(!childConfig && configClass){
                    childConfig = config.children.requestObject('',configClass);
                }
            }
            if(child.props.style)childConfig.style.domDefined.state = child.props.style;
            if(child.props.className)childConfig.CSS.className.state = child.props.className;
            config.childConfigMap.set(child,childConfig);
            config.configChildMap.set(childConfig,child);
        });
        config.children.resumeCallbacks();
    }



    static renderChildren(reactComp,propsManager){
        var childConfigs = reactComp.settings.children.getObjects();

        var clonedChildren = childConfigs.map(function(childConfig,index){
            var child = reactComp.settings.configChildMap.get(childConfig);
            var configName =  reactComp.settings.children.getName(childConfig);
            var props ={}
            props["settings"] = childConfig;
            if(child){
                App.mergeInto(props,child.props);

            }

            if(propsManager){
                var odd = propsManager.odd;
                if(odd.children.length > 0){
                    var oddChildrenIndex = odd.children.indexOf(configName);
                    if(oddChildrenIndex > -1) {
                        App.mergeInto(props,odd.values[oddChildrenIndex])
                    }else if(propsManager["defaultValues"]){
                        App.mergeInto(props,propsManager["defaultValues"])
                    }
                }

                if(propsManager.all.properties.length > 0){
                    propsManager.all.properties.map(function(propName,i){
                        var value = propsManager.all.values[i];
                        props[propName] = value ? value[index]:configName
                    });
                }

                if(propsManager.new){
                    App.mergeInto(props,propsManager.new);
                }

                if(props.style && propsManager.style){
                    App.mergeInto(props.style,propsManager.style);
                }

            }

            if(child){
                if(typeof(child.type) === "string"){
                     props["key"] = configName;
                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                    var ToolClass =  App.getToolImplementation(configClass);
                    return <ToolClass {...props}>{child}</ToolClass>;
                }else{
                    props = App.mergeInto(props,propsManager.new);
                    if(reactComp.settings.childConfigMap.has(child))
                        reactComp.settings.childConfigMap.delete(child);
                    var clonedChild = React.cloneElement(child,props);
                    reactComp.settings.configChildMap.set(childConfig,clonedChild);
                    reactComp.settings.childConfigMap.set(clonedChild,childConfig);
                    return clonedChild;
                }
             }else{
                props["key"] = configName;
                //to-do need to replace with flexinfo file or tiher mean, create a utility function
                //this solution will fail when config not part of session tree
                var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
                var ToolClass =  App.getToolImplementation(configClass);
                var newChild = <ToolClass {...props}/>;
                return newChild;
             }

        }.bind(this));

        return clonedChildren;
    }

    static mergeInto(into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }
}

App.toolRegistry = {};
App.toolConfigMap =  new Map();

export default App;

