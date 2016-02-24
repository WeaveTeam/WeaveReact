
import NodeConfig from "./NodeConfig";
import InlineStyle from "../../configs/InlineStyle";

(function (module) {

    function TreeConfig() {

        Object.defineProperties(this, {
            "nodeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
            },
            "nodeOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
            },
            "leafIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
            },
            "leafOpenIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
            },
            "enableDataTypeIcon": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
            },
            "align": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
            },
            "nodePadding": {
                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20px"))
            },
            rootNode:{
                value: Weave.linkableChild(this, new NodeConfig())
            },
            rootStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            nodeStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            leafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            selectedLeafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            activeLeafStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            branchStyle:{
                value: Weave.linkableChild(this, new InlineStyle())
            },
            allowMultipleSelection:{
                value: Weave.linkableChild(this,  new weavejs.core.LinkableBoolean(false))
            }
        });

        this.activeNode = null;
        this.dataTypesMap = null;
        this.getDataType = null;

        this.nodeStyle.display.state = "flex";
        this.nodeStyle.other.state = {
            "flexDirection": "row"
        }

        this.leafStyle.display.state = "flex";
        this.leafStyle.other.state = {
            "flexDirection": "row"
        }

        this.selectedLeafStyle.other.state = {
            "background" : "green"
        }

        this.activeLeafStyle.other.state = {
            "background" : "orange"
        }


    }


    var p = TreeConfig.prototype;

    function mergeInto (into, obj) {
        for (let attr in obj) {
            into[attr] = obj[attr];
        }
        return into;
    }

    p.getLeafStyle = function(open, active){
        var style = this.leafStyle.getStyleFor();
        if(open){
            mergeInto(style,this.selectedLeafStyle.getStyleFor())
            if(active)
                return mergeInto(style,this.activeLeafStyle.getStyleFor());
        }
        return style;

    }

    //to-do do this for entire tree rather only for the first child
    p.setOpenNodes = function(nodesLabel){
        var rootNodes = this.rootNode.children.getObjects();
        rootNodes.map(function(node){
            if(nodesLabel.indexOf(node.label.state) > 0){
                node.open.value = true;
            }
        }.bind(this))

    }

    p.changeActiveNode = function (nodeConfig) {
        if (this.activeNode) {
            this.activeNode.active.value = false;
            if(!this.allowMultipleSelection.value){
                this.activeNode.open.value = false;
            }
        }
        this.activeNode = nodeConfig;
        this.activeNode.active.value = true;
    }

    p.getFileIcon = function (data,isOpen) {
        if(data){
            if(this.enableDataTypeIcon.value){
                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
                if (this.dataTypesMap && this.dataTypesMap[datType])
                    return this.dataTypesMap[datType];
            }else{
                return isOpen ? this.leafOpenIcon.value : this.leafIcon.value;
            }
        }else
            return "";

    }

    p.getFolderIcon = function ( isOpen) {
       /* if(data){
            var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
            if (this.dataTypesMap && this.dataTypesMap[datType])
                return this.dataTypesMap[datType];
            else*/
                return isOpen ? this.nodeOpenIcon.value : this.nodeIcon.value;
        /*}else
            return "";*/

    }







    //This Function makes this class as SessionClass
    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

    module.exports = TreeConfig;

}(module));
