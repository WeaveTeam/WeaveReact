/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.demo = {};
	window.demo.App = _App2.default;
	window.demo.init = function (container) {
	    _reactDom2.default.render(React.createElement(_App2.default, null), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLE9BQU8sSUFBUCxHQUFhLEVBQWI7QUFDQSxPQUFPLElBQVAsQ0FBWSxHQUFaO0FBQ0EsT0FBTyxJQUFQLENBQVksSUFBWixHQUFtQixVQUFVLFNBQVYsRUFBcUI7QUFDcEMsdUJBQVMsTUFBVCxDQUFpQix3Q0FBakIsRUFBMEIsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQTFCLEVBRG9DO0NBQXJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxud2luZG93LmRlbW8gPXt9O1xud2luZG93LmRlbW8uQXBwID0gQXBwO1xud2luZG93LmRlbW8uaW5pdCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoIDxBcHAvPiAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcikpO1xufVxuXG5cbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SessionEditor = __webpack_require__(4);

	var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

	var _SessionEditorConfig = __webpack_require__(37);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _index = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	        window.weave = new Weave();
	        window.dbweave = new Weave();
	        _this.openSettings = _this.openSettings.bind(_this);
	        _this.sessionConfigDashdoard = new _SessionEditorConfig2.default();
	        _this.sessionConfigWeave = new _SessionEditorConfig2.default();
	        _this.navConfig = window.dbweave.root.requestObject('navbar', _index.navbarConfig.Navbar);
	        //this.navConfig.brand.logoPath.value = "./logo.png";
	        //this.navConfig.brand.title.value = "Brand";

	        var brandConfig = _this.navConfig.children.requestObject('', _index.navbarConfig.Brand);
	        var logoConfig = brandConfig.children.requestObject('', _index.navbarConfig.Logo);
	        logoConfig.src.state = "logo.png";
	        var titleConfig = brandConfig.children.requestObject('', _index.navbarConfig.Title);
	        titleConfig.title.state = "Brand";
	        /*var listConfig = this.navConfig.children.requestObject('',navbarConfig.List);
	        var linkConfig = listConfig.children.requestObject('',navbarConfig.Link);
	        linkConfig.title.value = " Documentation";
	        linkConfig.iconName.value = "fa fa-folder";*/

	        _this.treeConfig = window.dbweave.root.requestObject('tree', _index.TreeConfig);
	        _this.treeConfig.nodePadding.value = "16px";
	        _this.treeConfig.align.value = "right";
	        _this.treeConfig.nodeIcon.value = "fa fa-caret-right";
	        _this.treeConfig.nodeOpenIcon.value = "fa fa-caret-down";
	        _this.treeConfig.leafIcon.value = "fa fa-square-o";
	        _this.treeConfig.leafOpenIcon.value = "fa fa-check-square-o";
	        _this.treeConfig.enableDataTypeIcon.value = false;
	        _this.treeConfig.allowMultipleSelection.value = true;
	        _this.treeConfig.leafStyle.other.state = {
	            borderTop: "1px solid #1e5e9f",
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };

	        _this.treeConfig.rootStyle.other.state = {
	            textTransform: "uppercase",
	            color: "#e57a38"
	        };

	        _this.treeConfig.nodeStyle.other.state = {
	            paddingTop: "8px",
	            paddingBottom: "8px"
	        };
	        _this.treeConfig.setDefaultNodeSelection(['Al Joaf', 'Tabuk 1']);
	        _this.treeConfig.rootNode.open.state = true;

	        _this.tree = null;
	        _this.loadJSON = _this.loadJSON.bind(_this);
	        _this.loadJSON(function (response) {
	            this.tree = JSON.parse(response);
	            console.log(this.tree);
	            this.forceUpdate();
	        }.bind(_this));

	        return _this;
	    }

	    _createClass(App, [{
	        key: "loadJSON",
	        value: function loadJSON(callback) {

	            var xobj = new XMLHttpRequest();
	            xobj.overrideMimeType("application/json");
	            xobj.open('GET', './test.json', true);
	            xobj.onreadystatechange = function () {
	                if (xobj.readyState == 4 && xobj.status == "200") {
	                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	                    callback(xobj.responseText);
	                }
	            };
	            xobj.send(null);
	        }
	    }, {
	        key: "openSettings",
	        value: function openSettings(e) {
	            if (e.code === "Enter" && e.ctrlKey) {
	                if (this.sessionConfigWeave.modalConfig.open.value) this.sessionConfigWeave.modalConfig.open.value = false;
	                this.sessionConfigDashdoard.modalConfig.open.value = true;
	                this.popUpSessionEditor(this.sessionConfigDashdoard, window.dbweave, "Session State Editor (Weave Dashboard)", true);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "componentWillUnMount",
	        value: function componentWillUnMount() {
	            window.removeEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "popUpSessionEditor",
	        value: function popUpSessionEditor(config, weaveInstance, title, isDb) {
	            ReactDOM.render(_react2.default.createElement(_SessionEditor2.default, { isDashboard: isDb, weave: weaveInstance, keyPress: "true", title: title, settings: config }), document.getElementById("popUp"));
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {}
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("div", { id: "popUp" }),
	                _react2.default.createElement(
	                    _index.Navbar,
	                    { settings: this.navConfig },
	                    _react2.default.createElement(
	                        _index.Navbar.List,
	                        { key: "list" },
	                        _react2.default.createElement(_index.Navbar.Link, { key: "link1" }),
	                        _react2.default.createElement(_index.Navbar.Link, { key: "link2" })
	                    ),
	                    _react2.default.createElement(
	                        _index.Navbar.Form,
	                        { key: "form" },
	                        _react2.default.createElement(
	                            "div",
	                            { key: "form1" },
	                            "Form1"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { key: "di" },
	                            "Form2"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { style: { color: "red" } },
	                        "Hi I am Sanjay"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: { marginTop: "60px" } },
	                    _react2.default.createElement(
	                        "div",
	                        { style: { width: "240px", color: "white", border: "1px solid grey", background: "linear-gradient(to right, #036FBB , #013458)" } },
	                        _react2.default.createElement(_index.Tree, { data: this.tree, settings: this.treeConfig, label: "label", nodes: "children", icon: "icon" })
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

	/**/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU07OztBQUVGLGFBRkUsR0FFRixDQUFZLEtBQVosRUFBbUI7OEJBRmpCLEtBRWlCOzsyRUFGakIsZ0JBR1EsUUFEUzs7QUFFZixlQUFPLEtBQVAsR0FBZSxJQUFJLEtBQUosRUFBZixDQUZlO0FBR2YsZUFBTyxPQUFQLEdBQWlCLElBQUksS0FBSixFQUFqQixDQUhlO0FBSWYsY0FBSyxZQUFMLEdBQW9CLE1BQUssWUFBTCxDQUFrQixJQUFsQixPQUFwQixDQUplO0FBS2YsY0FBSyxzQkFBTCxHQUE4QixtQ0FBOUIsQ0FMZTtBQU1mLGNBQUssa0JBQUwsR0FBMEIsbUNBQTFCLENBTmU7QUFPZixjQUFLLFNBQUwsR0FBaUIsT0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixhQUFwQixDQUFrQyxRQUFsQyxFQUEyQyxvQkFBYSxNQUFiLENBQTVEOzs7O0FBUGUsWUFXWCxjQUFjLE1BQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBc0MsRUFBdEMsRUFBeUMsb0JBQWEsS0FBYixDQUF2RCxDQVhXO0FBWWYsWUFBSSxhQUFhLFlBQVksUUFBWixDQUFxQixhQUFyQixDQUFtQyxFQUFuQyxFQUFzQyxvQkFBYSxJQUFiLENBQW5ELENBWlc7QUFhZixtQkFBVyxHQUFYLENBQWUsS0FBZixHQUF1QixVQUF2QixDQWJlO0FBY2YsWUFBSSxjQUFjLFlBQVksUUFBWixDQUFxQixhQUFyQixDQUFtQyxFQUFuQyxFQUFzQyxvQkFBYSxLQUFiLENBQXBELENBZFc7QUFlZixvQkFBWSxLQUFaLENBQWtCLEtBQWxCLEdBQTBCLE9BQTFCOzs7Ozs7QUFmZSxhQXFCZixDQUFLLFVBQUwsR0FBa0IsT0FBTyxPQUFQLENBQWUsSUFBZixDQUFvQixhQUFwQixDQUFrQyxNQUFsQyxvQkFBbEIsQ0FyQmU7QUFzQmYsY0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQTVCLEdBQW1DLE1BQW5DLENBdEJlO0FBdUJmLGNBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUF0QixHQUE4QixPQUE5QixDQXZCZTtBQXdCZixjQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQ0FBeUIsS0FBekIsR0FBaUMsbUJBQWpDLENBeEJlO0FBeUJmLGNBQUssVUFBTCxDQUFnQixZQUFoQixDQUE2QixLQUE3QixHQUFxQyxrQkFBckMsQ0F6QmU7QUEwQmYsY0FBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLEtBQXpCLEdBQWlDLGdCQUFqQyxDQTFCZTtBQTJCZixjQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsS0FBN0IsR0FBcUMsc0JBQXJDLENBM0JlO0FBNEJmLGNBQUssVUFBTCxDQUFnQixrQkFBaEIsQ0FBbUMsS0FBbkMsR0FBMkMsS0FBM0MsQ0E1QmU7QUE2QmYsY0FBSyxVQUFMLENBQWdCLHNCQUFoQixDQUF1QyxLQUF2QyxHQUErQyxJQUEvQyxDQTdCZTtBQThCZixjQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBMEIsS0FBMUIsQ0FBZ0MsS0FBaEMsR0FBd0M7QUFDcEMsdUJBQVUsbUJBQVY7QUFDQSx3QkFBWSxLQUFaO0FBQ0EsMkJBQWMsS0FBZDtTQUhKLENBOUJlOztBQXVDZixjQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBMEIsS0FBMUIsQ0FBZ0MsS0FBaEMsR0FBd0M7QUFDcEMsMkJBQWUsV0FBZjtBQUNBLG1CQUFNLFNBQU47U0FGSixDQXZDZTs7QUE0Q2YsY0FBSyxVQUFMLENBQWdCLFNBQWhCLENBQTBCLEtBQTFCLENBQWdDLEtBQWhDLEdBQXdDO0FBQ3BDLHdCQUFZLEtBQVo7QUFDQSwyQkFBYyxLQUFkO1NBRkosQ0E1Q2U7QUFnRGYsY0FBSyxVQUFMLENBQWdCLHVCQUFoQixDQUF3QyxDQUFDLFNBQUQsRUFBVyxTQUFYLENBQXhDLEVBaERlO0FBaURmLGNBQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixJQUF6QixDQUE4QixLQUE5QixHQUFzQyxJQUF0QyxDQWpEZTs7QUFtRGYsY0FBSyxJQUFMLEdBQVUsSUFBVixDQW5EZTtBQW9EZixjQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQixDQXBEZTtBQXFEZixjQUFLLFFBQUwsQ0FBYyxVQUFTLFFBQVQsRUFBa0I7QUFDNUIsaUJBQUssSUFBTCxHQUFZLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBWixDQUQ0QjtBQUU1QixvQkFBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVosQ0FGNEI7QUFHNUIsaUJBQUssV0FBTCxHQUg0QjtTQUFsQixDQUlaLElBSlksT0FBZCxFQXJEZTs7O0tBQW5COztpQkFGRTs7aUNBaUVRLFVBQVU7O0FBRWhCLGdCQUFJLE9BQU8sSUFBSSxjQUFKLEVBQVAsQ0FGWTtBQUdoQixpQkFBSyxnQkFBTCxDQUFzQixrQkFBdEIsRUFIZ0I7QUFJaEIsaUJBQUssSUFBTCxDQUFVLEtBQVYsRUFBaUIsYUFBakIsRUFBZ0MsSUFBaEMsRUFKZ0I7QUFLaEIsaUJBQUssa0JBQUwsR0FBMEIsWUFBWTtBQUNsQyxvQkFBSSxLQUFLLFVBQUwsSUFBbUIsQ0FBbkIsSUFBd0IsS0FBSyxNQUFMLElBQWUsS0FBZixFQUFzQjs7QUFFOUMsNkJBQVMsS0FBSyxZQUFMLENBQVQsQ0FGOEM7aUJBQWxEO2FBRHNCLENBTFY7QUFXaEIsaUJBQUssSUFBTCxDQUFVLElBQVYsRUFYZ0I7Ozs7cUNBY1IsR0FBRztBQUNYLGdCQUFJLEVBQUUsSUFBRixLQUFXLE9BQVgsSUFBc0IsRUFBRSxPQUFGLEVBQVc7QUFDakMsb0JBQUcsS0FBSyxrQkFBTCxDQUF3QixXQUF4QixDQUFvQyxJQUFwQyxDQUF5QyxLQUF6QyxFQUFpRCxLQUFLLGtCQUFMLENBQXdCLFdBQXhCLENBQW9DLElBQXBDLENBQXlDLEtBQXpDLEdBQWdELEtBQWhELENBQXBEO0FBQ0EscUJBQUssc0JBQUwsQ0FBNEIsV0FBNUIsQ0FBd0MsSUFBeEMsQ0FBNkMsS0FBN0MsR0FBcUQsSUFBckQsQ0FGaUM7QUFHakMscUJBQUssa0JBQUwsQ0FBeUIsS0FBSyxzQkFBTCxFQUE2QixPQUFPLE9BQVAsRUFBZ0Isd0NBQXRFLEVBQStHLElBQS9HLEVBSGlDO2FBQXJDOzs7OzRDQU9lO0FBQ2YsbUJBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSyxZQUFMLENBQW5DLENBRGU7Ozs7K0NBSUc7QUFDbEIsbUJBQU8sbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsS0FBSyxZQUFMLENBQXRDLENBRGtCOzs7OzJDQUlILFFBQU8sZUFBYyxPQUFNLE1BQU07QUFDaEQscUJBQVMsTUFBVCxDQUFpQix5REFBZSxhQUFhLElBQWIsRUFBbUIsT0FBTyxhQUFQLEVBQXNCLFVBQVcsTUFBWCxFQUFrQixPQUFPLEtBQVAsRUFBYyxVQUFZLE1BQVosRUFBeEYsQ0FBakIsRUFBK0gsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQS9ILEVBRGdEOzs7OzZDQUtoQzs7O2lDQUlYOztBQUVMLG1CQUFROzs7Z0JBQ0ksdUNBQUssSUFBRyxPQUFILEVBQUwsQ0FESjtnQkFFSTs7c0JBQVEsVUFBVSxLQUFLLFNBQUwsRUFBbEI7b0JBQ0k7c0NBQVEsSUFBUjswQkFBYSxLQUFJLE1BQUosRUFBYjt3QkFDSSw0Q0FBUSxJQUFSLElBQWEsS0FBSSxPQUFKLEVBQWIsQ0FESjt3QkFFSSw0Q0FBUSxJQUFSLElBQWEsS0FBSSxPQUFKLEVBQWIsQ0FGSjtxQkFESjtvQkFLSTtzQ0FBUSxJQUFSOzBCQUFhLEtBQUksTUFBSixFQUFiO3dCQUNJOzs4QkFBSyxLQUFJLE9BQUosRUFBTDs7eUJBREo7d0JBRUk7OzhCQUFLLEtBQUksSUFBSixFQUFMOzt5QkFGSjtxQkFMSjtvQkFTSTs7MEJBQUssT0FBTyxFQUFDLE9BQU0sS0FBTixFQUFSLEVBQUw7O3FCQVRKO2lCQUZKO2dCQWVBOztzQkFBSyxPQUFPLEVBQUMsV0FBVSxNQUFWLEVBQVIsRUFBTDtvQkFDUTs7MEJBQUssT0FBTyxFQUFDLE9BQU0sT0FBTixFQUFjLE9BQU0sT0FBTixFQUFlLFFBQU8sZ0JBQVAsRUFBd0IsWUFBVyw4Q0FBWCxFQUE3RCxFQUFMO3dCQUNJLDZDQUFNLE1BQU0sS0FBSyxJQUFMLEVBQVcsVUFBVSxLQUFLLFVBQUwsRUFBaUIsT0FBTSxPQUFOLEVBQWMsT0FBTSxVQUFOLEVBQWlCLE1BQUssTUFBTCxFQUFqRixDQURKO3FCQURSO2lCQWZBO2FBQVIsQ0FGSzs7OztXQXhHUDtFQUFZLGdCQUFNLFNBQU47O2tCQXFJSCIsImZpbGUiOiJBcHAuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvciBmcm9tIFwiLi9zZXNzaW9uU3RhdGVFZGl0b3IvU2Vzc2lvbkVkaXRvclwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vc2Vzc2lvblN0YXRlRWRpdG9yL1Nlc3Npb25FZGl0b3JDb25maWdcIjtcbmltcG9ydCB7TmF2YmFyfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge25hdmJhckNvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9pbmRleC5qc1wiO1xuaW1wb3J0IHtUcmVlfSBmcm9tIFwiLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi9saWIvaW5kZXguanNcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgd2luZG93LndlYXZlID0gbmV3IFdlYXZlKCk7XG4gICAgICAgIHdpbmRvdy5kYndlYXZlID0gbmV3IFdlYXZlKCk7XG4gICAgICAgIHRoaXMub3BlblNldHRpbmdzID0gdGhpcy5vcGVuU2V0dGluZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkID0gbmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUgPSBuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuICAgICAgICB0aGlzLm5hdkNvbmZpZyA9IHdpbmRvdy5kYndlYXZlLnJvb3QucmVxdWVzdE9iamVjdCgnbmF2YmFyJyxuYXZiYXJDb25maWcuTmF2YmFyKTtcbiAgICAgICAgLy90aGlzLm5hdkNvbmZpZy5icmFuZC5sb2dvUGF0aC52YWx1ZSA9IFwiLi9sb2dvLnBuZ1wiO1xuICAgICAgICAvL3RoaXMubmF2Q29uZmlnLmJyYW5kLnRpdGxlLnZhbHVlID0gXCJCcmFuZFwiO1xuXG4gICAgICAgIHZhciBicmFuZENvbmZpZyA9IHRoaXMubmF2Q29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkJyYW5kKTtcbiAgICAgICAgdmFyIGxvZ29Db25maWcgPSBicmFuZENvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLG5hdmJhckNvbmZpZy5Mb2dvKTtcbiAgICAgICAgbG9nb0NvbmZpZy5zcmMuc3RhdGUgPSBcImxvZ28ucG5nXCI7XG4gICAgICAgIHZhciB0aXRsZUNvbmZpZyA9IGJyYW5kQ29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLlRpdGxlKTtcbiAgICAgICAgdGl0bGVDb25maWcudGl0bGUuc3RhdGUgPSBcIkJyYW5kXCI7XG4gICAgICAgIC8qdmFyIGxpc3RDb25maWcgPSB0aGlzLm5hdkNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLG5hdmJhckNvbmZpZy5MaXN0KTtcbiAgICAgICAgdmFyIGxpbmtDb25maWcgPSBsaXN0Q29uZmlnLmNoaWxkcmVuLnJlcXVlc3RPYmplY3QoJycsbmF2YmFyQ29uZmlnLkxpbmspO1xuICAgICAgICBsaW5rQ29uZmlnLnRpdGxlLnZhbHVlID0gXCIgRG9jdW1lbnRhdGlvblwiO1xuICAgICAgICBsaW5rQ29uZmlnLmljb25OYW1lLnZhbHVlID0gXCJmYSBmYS1mb2xkZXJcIjsqL1xuXG4gICAgICAgIHRoaXMudHJlZUNvbmZpZyA9IHdpbmRvdy5kYndlYXZlLnJvb3QucmVxdWVzdE9iamVjdCgndHJlZScsVHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5ub2RlUGFkZGluZy52YWx1ZSA9XCIxNnB4XCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5hbGlnbi52YWx1ZSA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVJY29uLnZhbHVlID0gXCJmYSBmYS1jYXJldC1yaWdodFwiO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcubm9kZU9wZW5JY29uLnZhbHVlID0gXCJmYSBmYS1jYXJldC1kb3duXCI7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5sZWFmSWNvbi52YWx1ZSA9IFwiZmEgZmEtc3F1YXJlLW9cIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmxlYWZPcGVuSWNvbi52YWx1ZSA9IFwiZmEgZmEtY2hlY2stc3F1YXJlLW9cIjtcbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLmVuYWJsZURhdGFUeXBlSWNvbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyZWVDb25maWcuYWxsb3dNdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudHJlZUNvbmZpZy5sZWFmU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBib3JkZXJUb3A6XCIxcHggc29saWQgIzFlNWU5ZlwiLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogXCI4cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206XCI4cHhcIlxuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLnJvb3RTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgICAgICAgICBjb2xvcjpcIiNlNTdhMzhcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmVlQ29uZmlnLm5vZGVTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiOHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOlwiOHB4XCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyZWVDb25maWcuc2V0RGVmYXVsdE5vZGVTZWxlY3Rpb24oWydBbCBKb2FmJywnVGFidWsgMSddKVxuICAgICAgICB0aGlzLnRyZWVDb25maWcucm9vdE5vZGUub3Blbi5zdGF0ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmVlPW51bGw7XG4gICAgICAgIHRoaXMubG9hZEpTT04gPSB0aGlzLmxvYWRKU09OLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9hZEpTT04oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgdGhpcy50cmVlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyZWUpO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9LmJpbmQodGhpcykpXG5cblxuXG4gICAgfVxuXG4gICAgIGxvYWRKU09OKGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgeG9iai5vcGVuKCdHRVQnLCAnLi90ZXN0Lmpzb24nLCB0cnVlKTtcbiAgICAgICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09IDQgJiYgeG9iai5zdGF0dXMgPT0gXCIyMDBcIikge1xuICAgICAgICAgICAgICAgIC8vIFJlcXVpcmVkIHVzZSBvZiBhbiBhbm9ueW1vdXMgY2FsbGJhY2sgYXMgLm9wZW4gd2lsbCBOT1QgcmV0dXJuIGEgdmFsdWUgYnV0IHNpbXBseSByZXR1cm5zIHVuZGVmaW5lZCBpbiBhc3luY2hyb25vdXMgbW9kZVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeG9iai5zZW5kKG51bGwpO1xuICAgIH1cblxuICAgb3BlblNldHRpbmdzKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiICYmIGUuY3RybEtleSkge1xuICAgICAgICAgICAgaWYodGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUubW9kYWxDb25maWcub3Blbi52YWx1ZSkgIHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLm1vZGFsQ29uZmlnLm9wZW4udmFsdWU9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnRGFzaGRvYXJkLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb3BVcFNlc3Npb25FZGl0b3IoIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZCwgd2luZG93LmRid2VhdmUsIFwiU2Vzc2lvbiBTdGF0ZSBFZGl0b3IgKFdlYXZlIERhc2hib2FyZClcIix0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVuTW91bnQoKXtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcG9wVXBTZXNzaW9uRWRpdG9yKGNvbmZpZyx3ZWF2ZUluc3RhbmNlLHRpdGxlLGlzRGIpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKCA8U2Vzc2lvbkVkaXRvciBpc0Rhc2hib2FyZD17aXNEYn0gd2VhdmU9e3dlYXZlSW5zdGFuY2V9IGtleVByZXNzID0gXCJ0cnVlXCIgdGl0bGU9e3RpdGxlfSBzZXR0aW5ncyA9IHtjb25maWd9Lz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcFwiKSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBzZXR0aW5ncz17dGhpcy5uYXZDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5MaXN0IGtleT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkxpbmsga2V5PVwibGluazFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5MaW5rIGtleT1cImxpbmsyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuRm9ybSBrZXk9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb3JtMVwiPkZvcm0xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJkaVwiPkZvcm0yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Gb3JtID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjpcInJlZFwifX0+SGkgSSBhbSBTYW5qYXk8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCI2MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjI0MHB4XCIsY29sb3I6XCJ3aGl0ZVwiLCBib3JkZXI6XCIxcHggc29saWQgZ3JleVwiLGJhY2tncm91bmQ6XCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzZGQkIgLCAjMDEzNDU4KVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWUgZGF0YT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy50cmVlQ29uZmlnfSBsYWJlbD1cImxhYmVsXCIgbm9kZXM9XCJjaGlsZHJlblwiIGljb249XCJpY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vKiovXG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(5);

	var _SessionEditorConfig = __webpack_require__(37);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(38);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(39);

	var _NodeView2 = _interopRequireDefault(_NodeView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SessionEditor = function (_React$Component) {
	    _inherits(SessionEditor, _React$Component);

	    function SessionEditor(props) {
	        _classCallCheck(this, SessionEditor);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SessionEditor).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _SessionEditorConfig2.default();
	        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.weave.root);
	        _this.tree.label = _this.props.isDashboard ? "WeaveDashboard" : "Weave";

	        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
	        _this.nodeClick = _this.nodeClick.bind(_this);
	        _this.saveFile = _this.saveFile.bind(_this);
	        _this.openFile = _this.openFile.bind(_this);
	        _this.selectedData; // to-do:try with linkableWatcher and add forceUpdate to that watcher
	        return _this;
	    }

	    _createClass(SessionEditor, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings = nextProps.settings;
	            }
	            if (this.props.weave !== nextProps.weave) {
	                this.settings = nextProps.settings;
	                this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(nextProps.weave.root);
	                this.tree.label = nextProps.isDashboard ? "WeaveDashboard" : "Weave";
	                this.selectedData = null;
	            }
	        }
	    }, {
	        key: "nodeClick",
	        value: function nodeClick(node) {
	            this.selectedData = node.data;
	            var state = Weave.getState(node.data);
	            var str;
	            if (node.data instanceof weavejs.core.LinkableString) str = state;else str = Weave.stringify(state, null, '\t', true);
	            this.settings.activeNodeValue.state = str;
	        }
	    }, {
	        key: "changeSessionValue",
	        value: function changeSessionValue(e) {
	            var value = this.settings.activeNodeValue.state;
	            if (this.selectedData instanceof weavejs.core.LinkableString) this.selectedData.value = value;else Weave.setState(this.selectedData, JSON.parse(value));

	            this.forceUpdate();
	        }
	    }, {
	        key: "saveFile",
	        value: function saveFile() {
	            var archive = weavejs.core.WeaveArchive.createArchive(this.props.weave);
	            var uint8Array = archive.serialize();
	            var arrayBuffer = uint8Array.buffer;
	            window.saveAs(new Blob([arrayBuffer]), "test.weave");
	        }
	    }, {
	        key: "openFile",
	        value: function openFile(e) {
	            var selectedfile = e.target.files[0];
	            // Build Promise List, each promise resolved by FileReader.onload.
	            this.tree = null;
	            this.settings.activeNodeValue.state = "";
	            this.forceUpdate();
	            var that = this;
	            new Promise(function (resolve, reject) {
	                var reader = new FileReader();

	                reader.onload = function (event) {
	                    // Resolve both the FileReader result and its original file.
	                    resolve([event, selectedfile]);
	                };

	                // Read the file.
	                reader.readAsArrayBuffer(selectedfile);
	            }).then(function (zippedResults) {
	                // Run the callback after all files have been read.
	                var e = zippedResults[0];
	                var result = e.target.result;
	                // read the content of the file with JSZip

	                weavejs.core.WeaveArchive.loadFileContent(that.props.weave, result);
	                that.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(that.props.weave.root);
	                that.tree.label = "Weave";
	                that.selectedData = null; // to-do:try with linkableWatcher and add forceUpdate to that watcher
	                that.forceUpdate();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var applyButtonStyle = {
	                marginTop: "4px",
	                marginLeft: "2px",
	                borderStyle: "solid",
	                borderRadius: "4px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                float: "right",
	                padding: "4px",
	                cursor: "pointer",
	                fontSize: "12px",
	                position: "relative"
	            };
	            var inputButtonStyle = {
	                width: "100%",
	                opacity: "0",
	                overflow: "hidden",
	                position: "absolute",
	                left: "0",
	                top: "2px",
	                bottom: "2px"
	            };

	            return _react2.default.createElement(
	                _index.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true", title: this.props.title },
	                _react2.default.createElement(
	                    "div",
	                    { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } },
	                    _react2.default.createElement(
	                        _index.SplitPane,
	                        { split: "vertical", minSize: "50", defaultSize: "256" },
	                        _react2.default.createElement(_TreeSection2.default, { tree: this.tree, settings: this.settings, nodeClick: this.nodeClick }),
	                        _react2.default.createElement(_NodeView2.default, { activeNodeValue: this.settings.activeNodeValue })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.changeSessionValue },
	                    " Apply "
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.saveFile },
	                    _react2.default.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-download" },
	                        " "
	                    ),
	                    " Save "
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle },
	                    _react2.default.createElement("input", { onChange: this.openFile, type: "file", style: inputButtonStyle }),
	                    _react2.default.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-upload" },
	                        " "
	                    ),
	                    " Load"
	                )
	            );
	        }
	    }]);

	    return SessionEditor;
	}(_react2.default.Component);

	exports.default = SessionEditor;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUI7OztBQUVqQixhQUZpQixhQUVqQixDQUFZLEtBQVosRUFBbUI7OEJBRkYsZUFFRTs7MkVBRkYsMEJBR1AsUUFEUzs7QUFFZixjQUFLLFFBQUwsR0FBaUIsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixNQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQW9CLG1DQUF4QyxDQUZGO0FBR2YsY0FBSyxJQUFMLEdBQWEsUUFBUSxRQUFSLENBQWlCLGNBQWpCLENBQWdDLG1CQUFoQyxDQUFvRCxNQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLElBQWpCLENBQWpFLENBSGU7QUFJZixjQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLE1BQUssS0FBTCxDQUFXLFdBQVgsR0FBdUIsZ0JBQXZCLEdBQXdDLE9BQXhDLENBSkg7O0FBTWYsY0FBSyxrQkFBTCxHQUEwQixNQUFLLGtCQUFMLENBQXdCLElBQXhCLE9BQTFCLENBTmU7QUFPZixjQUFLLFNBQUwsR0FBaUIsTUFBSyxTQUFMLENBQWUsSUFBZixPQUFqQixDQVBlO0FBUWYsY0FBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEIsQ0FSZTtBQVNmLGNBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBVGU7QUFVZixjQUFLLFlBQUw7QUFWZTtLQUFuQjs7aUJBRmlCOzs0Q0FlRTs7OytDQUlLOzs7a0RBSUUsV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLFVBQVUsUUFBVixFQUFtQjtBQUMxQyxxQkFBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixDQUQwQjthQUE5QztBQUdBLGdCQUFHLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsVUFBVSxLQUFWLEVBQWdCO0FB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QVAsRUFBeUIsU0FBUyxLQUFLLGtCQUFMLEVBQXZDOztpQkFSSDtnQkFTRzs7c0JBQUssT0FBTyxnQkFBUCxFQUF5QixTQUFTLEtBQUssUUFBTCxFQUF2QztvQkFBc0Q7OzBCQUFJLFdBQVksc0JBQVosRUFBSjs7cUJBQXREOztpQkFUSDtnQkFVRzs7c0JBQUssT0FBTyxnQkFBUCxFQUFMO29CQUNJLHlDQUFPLFVBQVUsS0FBSyxRQUFMLEVBQWUsTUFBSyxNQUFMLEVBQVksT0FBTyxnQkFBUCxFQUE1QyxDQURKO29CQUVJOzswQkFBSSxXQUFZLG9CQUFaLEVBQUo7O3FCQUZKOztpQkFWSDthQUFULENBNUJPOzs7O1dBdEdVO0VBQXNCLGdCQUFNLFNBQU47O2tCQUF0QiIsImZpbGUiOiJTZXNzaW9uRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01vZGFsfSBmcm9tIFwiLi4vLi4vLi4vbGliL2luZGV4LmpzXCI7XG5pbXBvcnQge1NwbGl0UGFuZX0gZnJvbSBcIi4uLy4uLy4uL2xpYi9pbmRleC5qc1wiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IFRyZWVTZWN0aW9uIGZyb20gXCIuL1RyZWVTZWN0aW9uXCI7XG5pbXBvcnQgTm9kZVZpZXcgZnJvbSBcIi4vTm9kZVZpZXdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICB0aGlzLnRyZWUubGFiZWwgPSB0aGlzLnByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUgPSB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVDbGljayA9IHRoaXMubm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkZpbGUgPSB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy53ZWF2ZSAhPT0gbmV4dFByb3BzLndlYXZlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKG5leHRQcm9wcy53ZWF2ZS5yb290KTtcbiAgICAgICAgICAgIHRoaXMudHJlZS5sYWJlbCA9IG5leHRQcm9wcy5pc0Rhc2hib2FyZD9cIldlYXZlRGFzaGJvYXJkXCI6XCJXZWF2ZVwiO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBudWxsIDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVDbGljayhub2RlKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgIHZhciBzdGF0ZSA9IFdlYXZlLmdldFN0YXRlKG5vZGUuZGF0YSk7XG4gICAgICAgIHZhciBzdHI7XG4gICAgICAgIGlmIChub2RlLmRhdGEgaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIFx0c3RyID0gc3RhdGU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRzdHIgPSBXZWF2ZS5zdHJpbmdpZnkoc3RhdGUsIG51bGwsICdcXHQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGUgPSBzdHI7XG4gIH1cblxuXG4gIGNoYW5nZVNlc3Npb25WYWx1ZShlKXtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGU7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHR0aGlzLnNlbGVjdGVkRGF0YS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBlbHNlXG4gICAgICAgIFx0V2VhdmUuc2V0U3RhdGUodGhpcy5zZWxlY3RlZERhdGEsIEpTT04ucGFyc2UodmFsdWUpKTtcblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzYXZlRmlsZSgpe1xuICAgIHZhciBhcmNoaXZlICA9IHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUuY3JlYXRlQXJjaGl2ZSh0aGlzLnByb3BzLndlYXZlKVxuICAgIHZhciB1aW50OEFycmF5ID0gYXJjaGl2ZS5zZXJpYWxpemUoKTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgID0gdWludDhBcnJheS5idWZmZXI7XG4gICAgd2luZG93LnNhdmVBcyhuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSwgXCJ0ZXN0LndlYXZlXCIpO1xuICB9XG5cblxuXG4gIG9wZW5GaWxlKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIC8vIEJ1aWxkIFByb21pc2UgTGlzdCwgZWFjaCBwcm9taXNlIHJlc29sdmVkIGJ5IEZpbGVSZWFkZXIub25sb2FkLlxuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcblxuICAgICAgICAgICAgICAgIHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUubG9hZEZpbGVDb250ZW50KHRoYXQucHJvcHMud2VhdmUscmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGF0LnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoYXQucHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgICAgICAgICAgIHRoYXQudHJlZS5sYWJlbCA9IFwiV2VhdmVcIjtcbiAgICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RlZERhdGEgPSBudWxsIDsvLyB0by1kbzp0cnkgd2l0aCBsaW5rYWJsZVdhdGNoZXIgYW5kIGFkZCBmb3JjZVVwZGF0ZSB0byB0aGF0IHdhdGNoZXJcbiAgICAgICAgICAgICAgICAgdGhhdC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXG5cblxuICAgIHZhciBhcHBseUJ1dHRvblN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Ub3A6XCI0cHhcIixcbiAgICAgICAgbWFyZ2luTGVmdDpcIjJweFwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgZmxvYXQ6XCJyaWdodFwiLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCIsXG4gICAgICAgIGN1cnNvcjpcInBvaW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6XCIxMnB4XCIsXG4gICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgIH1cbiAgICB2YXIgaW5wdXRCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6XCIwXCIsXG4gICAgICAgIHRvcDpcIjJweFwiLFxuICAgICAgICBib3R0b206XCIycHhcIlxuICAgIH1cblxuXG4gICAgcmV0dXJuICggPE1vZGFsIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm1vZGFsQ29uZmlnfSBrZXlQcmVzcz1cInRydWVcIiB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMjU2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZVNlY3Rpb24gdHJlZT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5nc30gIG5vZGVDbGljaz17dGhpcy5ub2RlQ2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlVmlldyBhY3RpdmVOb2RlVmFsdWU9e3RoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvblZhbHVlfT4gQXBwbHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5zYXZlRmlsZX0+PCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtZG93bmxvYWRcIiAgPiA8IC9pID4gU2F2ZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9wZW5GaWxlfSB0eXBlPSdmaWxlJyBzdHlsZT17aW5wdXRCdXR0b25TdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS11cGxvYWRcIiAgPiA8IC9pID4gTG9hZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Tree = __webpack_require__(6);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _TreeConfig = __webpack_require__(17);

	var _TreeConfig2 = _interopRequireDefault(_TreeConfig);

	var _Node = __webpack_require__(14);

	var _Node2 = _interopRequireDefault(_Node);

	var _NodeConfig = __webpack_require__(15);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _Modal = __webpack_require__(18);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalConfig = __webpack_require__(19);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _SplitPane = __webpack_require__(22);

	var _SplitPane2 = _interopRequireDefault(_SplitPane);

	var _SplitPaneConfig = __webpack_require__(23);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Navbar = __webpack_require__(27);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Config = __webpack_require__(35);

	var _Config2 = _interopRequireDefault(_Config);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _CSS = __webpack_require__(36);

	var _CSS2 = _interopRequireDefault(_CSS);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.Tree = _Tree2.default;
	exports.TreeConfig = _TreeConfig2.default;

	exports.Modal = _Modal2.default;
	exports.ModalConfig = _ModalConfig2.default;

	exports.SplitPane = _SplitPane2.default;
	exports.SplitPaneConfig = _SplitPaneConfig2.default;

	exports.Navbar = _Navbar2.default;
	exports.navbarConfig = _Config2.default;

	exports.InlineStyle = _InlineStyle2.default;
	exports.CSS = _CSS2.default;

	exports.PropsManager = _PropsManager2.default;

	exports.registerToolImplementation = function (asClassName, jsClass) {
	    _App2.default.registerToolImplementation(asClassName, jsClass);
	};

	exports.getToolImplementation = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};

	exports.registerToolConfig = function (toolClass, configClass) {
	    _App2.default.registerToolConfig(toolClass, configClass);
	};

	exports.getToolConfig = function (toolClass) {
	    return _App2.default.getToolConfig(toolClass);
	};

	exports.hookSessionStateForComponentChildren = function (ReactChildren, ownerConfig) {
	    return _App2.default.hookSessionStateForComponentChildren(ReactChildren, ownerConfig);
	};

	exports.renderChildren = function (reactComp, propsManager) {
	    return _App2.default.renderChildren(reactComp, propsManager);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7O0FBRVIsUUFBQSxBQUFRO0FBQ1IsUUFBQSxBQUFROztBQUVSLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTs7QUFFUixRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7O0FBRVIsUUFBQSxBQUFROztBQUdSLFFBQUEsQUFBUSx1Q0FBNkIsQUFBVSxhQUFWLEFBQXVCO2tCQUN4RCxBQUFJLDJCQUFKLEFBQStCLGFBREUsQUFBZ0MsQUFDakUsQUFBNEMsU0FEcUIsQUFDakU7Q0FEaUM7O0FBSXJDLFFBQUEsQUFBUSxrQ0FBd0IsQUFBVSxNQUFNLEFBQzVDO1FBQUksY0FBQSxBQUFJLHNCQUFSLEFBQUksQUFBMEIsT0FBTyxBQUNqQztlQUFPLGNBQUEsQUFBSSxzQkFGYSxBQUM1QixBQUFxQyxBQUNqQyxBQUFPLEFBQTBCOztDQUZUOztBQU9oQyxRQUFBLEFBQVEsK0JBQXFCLEFBQVUsV0FBVixBQUFxQjtrQkFDOUMsQUFBSSxtQkFBSixBQUF1QixXQURFLEFBQWtDLEFBQzNELEFBQWtDLGFBRHlCLEFBQzNEO0NBRHlCOztBQUk3QixRQUFBLEFBQVEsMEJBQWdCLEFBQVUsV0FBVyxBQUN6QztXQUFPLGNBQUEsQUFBSSxjQURTLEFBQXFCLEFBQ3pDLEFBQU8sQUFBa0I7Q0FETDs7QUFJeEIsUUFBQSxBQUFRLGlEQUF1QyxBQUFVLGVBQVYsQUFBd0IsYUFBYyxBQUNqRjtXQUFPLGNBQUEsQUFBSSxxQ0FBSixBQUF5QyxlQURMLEFBQXNDLEFBQ2pGLEFBQU8sQUFBdUQ7Q0FEbkI7O0FBSS9DLFFBQUEsQUFBUSwyQkFBaUIsQUFBVSxXQUFWLEFBQW9CLGNBQWUsQUFDeEQ7V0FBTyxjQUFBLEFBQUksZUFBSixBQUFtQixXQURMLEFBQW1DLEFBQ3hELEFBQU8sQUFBNkI7Q0FEZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmVlIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9UcmVlXCI7XG5pbXBvcnQgVHJlZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3RyZWUvVHJlZUNvbmZpZ1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vY29tcG9uZW50cy90cmVlL05vZGVcIjtcbmltcG9ydCBOb2RlQ29uZmlnIGZyb20gXCIuL2NvbXBvbmVudHMvdHJlZS9Ob2RlQ29uZmlnXCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsL01vZGFsXCI7XG5pbXBvcnQgTW9kYWxDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbENvbmZpZ1wiO1xuXG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gXCIuL2NvbXBvbmVudHMvc3BsaXRQYW5lL1NwbGl0UGFuZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9jb21wb25lbnRzL3NwbGl0UGFuZS9TcGxpdFBhbmVDb25maWdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBuYXZiYXJDb25maWcgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIvQ29uZmlnXCI7XG5cbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5pbXBvcnQgQ1NTIGZyb20gXCIuL2NvbmZpZ3MvQ1NTXCI7XG5cblxuaW1wb3J0IEFwcCBmcm9tIFwiLi91dGlscy9BcHBcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9wc01hbmFnZXJcIjtcblxuXG5leHBvcnRzLlRyZWUgPSBUcmVlO1xuZXhwb3J0cy5UcmVlQ29uZmlnID0gVHJlZUNvbmZpZztcblxuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuZXhwb3J0cy5Nb2RhbENvbmZpZyA9IE1vZGFsQ29uZmlnO1xuXG5leHBvcnRzLlNwbGl0UGFuZSA9IFNwbGl0UGFuZTtcbmV4cG9ydHMuU3BsaXRQYW5lQ29uZmlnID0gU3BsaXRQYW5lQ29uZmlnO1xuXG5leHBvcnRzLk5hdmJhciA9IE5hdmJhcjtcbmV4cG9ydHMubmF2YmFyQ29uZmlnID0gbmF2YmFyQ29uZmlnO1xuXG5leHBvcnRzLklubGluZVN0eWxlID0gSW5saW5lU3R5bGU7XG5leHBvcnRzLkNTUyA9IENTUztcblxuZXhwb3J0cy5Qcm9wc01hbmFnZXIgPSBQcm9wc01hbmFnZXI7XG5cblxuZXhwb3J0cy5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbiA9IGZ1bmN0aW9uIChhc0NsYXNzTmFtZSwganNDbGFzcykge1xuICAgIEFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSwganNDbGFzcyk7XG59XG5cbmV4cG9ydHMuZ2V0VG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKSkge1xuICAgICAgICByZXR1cm4gQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihuYW1lKTtcbiAgICB9XG59XG5cblxuZXhwb3J0cy5yZWdpc3RlclRvb2xDb25maWcgPSBmdW5jdGlvbiAodG9vbENsYXNzLCBjb25maWdDbGFzcykge1xuICAgIEFwcC5yZWdpc3RlclRvb2xDb25maWcodG9vbENsYXNzLCBjb25maWdDbGFzcyk7XG59XG5cbmV4cG9ydHMuZ2V0VG9vbENvbmZpZyA9IGZ1bmN0aW9uICh0b29sQ2xhc3MpIHtcbiAgICByZXR1cm4gQXBwLmdldFRvb2xDb25maWcodG9vbENsYXNzKTtcbn1cblxuZXhwb3J0cy5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoUmVhY3RDaGlsZHJlbixvd25lckNvbmZpZykgIHtcbiAgICByZXR1cm4gQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihSZWFjdENoaWxkcmVuLG93bmVyQ29uZmlnKTtcbn1cblxuZXhwb3J0cy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChyZWFjdENvbXAscHJvcHNNYW5hZ2VyKSAge1xuICAgIHJldHVybiBBcHAucmVuZGVyQ2hpbGRyZW4ocmVhY3RDb21wLHByb3BzTWFuYWdlcik7XG59XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _Node = __webpack_require__(14);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Tree = function (_React$Component) {
	    _inherits(Tree, _React$Component);

	    function Tree(props) {
	        _classCallCheck(this, Tree);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new TreeConfig();
	        _this.settings.dataTypesMap = _this.props.dataTypesMap;
	        _this.settings.getDataType = _this.props.getDataType;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.align.addGroupedCallback(this, this.forceUpdate);
	            this.settings.nodePadding.addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.rootStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.branchStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.nodeStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.leafStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.selectedLeafStyle).addGroupedCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.activeLeafStyle).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.align.removeCallback(this, this.forceUpdate);
	            this.settings.nodePadding.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.rootStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.branchStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.nodeStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.leafStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.selectedLeafStyle).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.activeLeafStyle).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.addCallbacks();
	                this.settings = nextProps.settings;
	                this.removeCallbacks();

	                this.settings.dataTypesMap = nextProps.dataTypesMap;
	                this.settings.getDataType = nextProps.getDataType;
	            }
	            if (this.props.data !== nextProps.data) {
	                console.log("Data Changed");
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var rootNodeStyle = this.settings.rootStyle.getStyleFor(null, true);
	            return _react2.default.createElement(_Node2.default, { style: rootNodeStyle, data: this.props.data, label: this.props.label, nodes: this.props.nodes, icon: this.props.icon,
	                settings: this.settings.rootNode,
	                treeConfig: this.settings,
	                clickCallback: this.props.clickCallback });
	        }
	    }]);

	    return Tree;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.TreeConfig", Tree);
	exports.default = Tree;
	//# sourceMappingURL=data:application/json;base64,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LEFBQVcsQUFDbkg7MEJBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxBQUN4Qjs0QkFBWSxLQUFBLEFBQUssQUFDakI7K0JBQWUsS0FBQSxBQUFLLE1BTG5CLEFBRWIsQUFBUyxBQUdrQixBQUFXOzs7O1dBakVoQztFQUFhLGdCQUFBLEFBQU07O0FBdUV6QixjQUFBLEFBQUksMkJBQUosQUFBK0IseUJBQS9CLEFBQXVEO2tCQUN4QyIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuXG5jbGFzcyBUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBUcmVlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gdGhpcy5wcm9wcy5kYXRhVHlwZXNNYXA7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSB0aGlzLnByb3BzLmdldERhdGFUeXBlO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWxpZ24uYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLm5vZGVQYWRkaW5nLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmJyYW5jaFN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLm5vZGVTdHlsZSkuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5sZWFmU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWRMZWFmU3R5bGUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuYWN0aXZlTGVhZlN0eWxlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mubm9kZVBhZGRpbmcucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5yb290U3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuYnJhbmNoU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Mubm9kZVN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLmxlYWZTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zZWxlY3RlZExlYWZTdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5hY3RpdmVMZWFmU3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwID0gbmV4dFByb3BzLmRhdGFUeXBlc01hcDtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGUgPSBuZXh0UHJvcHMuZ2V0RGF0YVR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5kYXRhICE9PSBuZXh0UHJvcHMuZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgQ2hhbmdlZFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcm9vdE5vZGVTdHlsZSA9IHRoaXMuc2V0dGluZ3Mucm9vdFN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG5yZXR1cm4gKCA8Tm9kZSBzdHlsZT17cm9vdE5vZGVTdHlsZX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH0gbm9kZXM9e3RoaXMucHJvcHMubm9kZXN9IGljb249e3RoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLnJvb3ROb2RlfVxuICAgICAgICAgICAgdHJlZUNvbmZpZz17dGhpcy5zZXR0aW5nc31cbiAgICAgICAgICAgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMuY2xpY2tDYWxsYmFja30vPlxuICAgICAgICk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuVHJlZUNvbmZpZ1wiLFRyZWUpO1xuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _HTMLWrapperConfig = __webpack_require__(12);

	var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var App = function () {
	    function App() {
	        _classCallCheck(this, App);
	    }

	    _createClass(App, null, [{
	        key: "registerToolImplementation",
	        value: function registerToolImplementation(asClassName, jsClass) {
	            if (!App.toolRegistry[asClassName]) App.toolRegistry[asClassName] = jsClass;
	        }
	    }, {
	        key: "getToolImplementation",
	        value: function getToolImplementation(asClassName) {
	            return App.toolRegistry[asClassName];
	        }
	    }, {
	        key: "registerToolConfig",
	        value: function registerToolConfig(tool, config) {
	            if (!App.toolConfigMap.has(tool)) App.toolConfigMap.set(tool, config);
	        }
	    }, {
	        key: "getToolConfig",
	        value: function getToolConfig(tool) {
	            return App.toolConfigMap.get(tool);
	        }
	    }, {
	        key: "hookSessionStateForComponentChildren",
	        value: function hookSessionStateForComponentChildren(children, config) {
	            config.children.delayCallbacks();

	            config.childConfigMap = new Map();
	            config.configChildMap.forEach(function (value, key) {
	                var configName = config.children.getName(key);
	                config.children.removeObject(configName);
	            });
	            config.configChildMap = new Map();

	            _react2.default.Children.forEach(children, function (child, index) {
	                var childName = "";
	                var childConfig = config.childConfigMap.get(child);
	                var childConfigName = "";
	                if (typeof child.type === "string") {
	                    // for HTML Elements
	                    if (!childConfig) {
	                        childConfig = config.children.requestObject('', _HTMLWrapperConfig2.default);
	                    }
	                } else {
	                    // for React Composite Elements
	                    var configClass = App.getToolConfig(child.type);
	                    if (!childConfig && configClass) {
	                        childConfig = config.children.requestObject('', configClass);
	                    }
	                }
	                if (child.props.style) childConfig.style.domDefined.state = child.props.style;
	                if (child.props.className) childConfig.CSS.className.state = child.props.className;
	                config.childConfigMap.set(child, childConfig);
	                config.configChildMap.set(childConfig, child);
	            });

	            if (config["addGapAt"]) {
	                config.children.requestObject('gapDiv', _HTMLWrapperConfig2.default);
	            }
	            config.children.resumeCallbacks();
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(reactComp, propsManager) {
	            var childConfigs = reactComp.settings.children.getObjects();

	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = reactComp.settings.configChildMap.get(childConfig);
	                var configName = reactComp.settings.children.getName(childConfig);
	                var props = {};

	                props["settings"] = childConfig;
	                if (child) {
	                    //if(child.props && !child.props.settings)

	                    App.mergeInto(props, child.props);
	                }

	                if (propsManager) {
	                    var odd = propsManager.odd;
	                    if (odd.children.length > 0) {
	                        var oddChildrenIndex = odd.children.indexOf(configName);
	                        if (oddChildrenIndex > -1) {
	                            App.mergeInto(props, odd.values[oddChildrenIndex]);
	                        } else if (propsManager["defaultValues"]) {
	                            App.mergeInto(props, propsManager["defaultValues"]);
	                        }
	                    }

	                    if (propsManager.all.properties.length > 0) {
	                        propsManager.all.properties.map(function (propName, i) {
	                            var value = propsManager.all.values[i];
	                            props[propName] = value ? value[index] : configName;
	                        });
	                    }

	                    if (propsManager.new) {
	                        App.mergeInto(props, propsManager.new);
	                    }

	                    if (props.style && propsManager.style) {
	                        App.mergeInto(props.style, propsManager.style);
	                    }
	                }

	                if (child) {
	                    if (typeof child.type === "string") {
	                        props["key"] = configName;
	                        var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
	                        var ToolClass = App.getToolImplementation(configClass);
	                        return _react2.default.createElement(ToolClass, props, child);
	                    } else {
	                        props = App.mergeInto(props, propsManager.new);
	                        if (reactComp.settings.childConfigMap.has(child)) reactComp.settings.childConfigMap.delete(child);
	                        var clonedChild = _react2.default.cloneElement(child, props);
	                        reactComp.settings.configChildMap.set(childConfig, clonedChild);
	                        reactComp.settings.childConfigMap.set(clonedChild, childConfig);
	                        return clonedChild;
	                    }
	                } else {
	                    props["key"] = configName;
	                    if (configName === "gapDiv") {
	                        var orderValue = String(reactComp.settings.addGapAt.state);
	                        if (!isNaN(orderValue)) {
	                            props["style"] = {
	                                flex: "1",
	                                order: orderValue
	                            };
	                        }
	                    }
	                    //to-do need to replace with flexinfo file or tiher mean, create a utility function
	                    //this solution will fail when config not part of session tree
	                    var configClass = childConfig.FLEXJS_CLASS_INFO.names[0].qName;
	                    var ToolClass = App.getToolImplementation(configClass);
	                    var newChild = _react2.default.createElement(ToolClass, props);
	                    return newChild;
	                }
	            }.bind(this));

	            return clonedChildren;
	        }
	    }, {
	        key: "mergeInto",
	        value: function mergeInto(into, obj, ignoreProps) {
	            for (var attr in obj) {
	                into[attr] = obj[attr];
	            }
	            return into;
	        }
	    }]);

	    return App;
	}();

	App.toolRegistry = {};
	App.toolConfigMap = new Map();

	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,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TixJQUFBLEFBQUksZUFBSixBQUFtQjtBQUNuQixJQUFBLEFBQUksZ0JBQWlCLElBQXJCLEFBQXFCLEFBQUk7O2tCQUVWIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TdHlsZVwiO1xuaW1wb3J0IEhUTUxXcmFwcGVyQ29uZmlnICBmcm9tIFwiLi4vY29uZmlncy9IVE1MV3JhcHBlckNvbmZpZ1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0pXG4gICAgICAgICAgICBBcHAudG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSA9IGpzQ2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRvb2xJbXBsZW1lbnRhdGlvbihhc0NsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gQXBwLnRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyVG9vbENvbmZpZyAodG9vbCwgY29uZmlnKSB7XG4gICAgICAgIGlmICghQXBwLnRvb2xDb25maWdNYXAuaGFzKHRvb2wpKVxuICAgICAgICAgICAgQXBwLnRvb2xDb25maWdNYXAuc2V0KHRvb2wsY29uZmlnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9vbENvbmZpZyh0b29sKSB7XG4gICAgICAgIHJldHVybiBBcHAudG9vbENvbmZpZ01hcC5nZXQodG9vbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihjaGlsZHJlbixjb25maWcpe1xuICAgICAgICBjb25maWcuY2hpbGRyZW4uZGVsYXlDYWxsYmFja3MoKTtcblxuICAgICAgICBjb25maWcuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xuICAgICAgICAgICAgdmFyIGNvbmZpZ05hbWUgPSBjb25maWcuY2hpbGRyZW4uZ2V0TmFtZShrZXkpO1xuICAgICAgICAgICAgY29uZmlnLmNoaWxkcmVuLnJlbW92ZU9iamVjdChjb25maWdOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZy5jb25maWdDaGlsZE1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29uZmlnID0gY29uZmlnLmNoaWxkQ29uZmlnTWFwLmdldChjaGlsZCk7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb25maWdOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7IC8vIGZvciBIVE1MIEVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYoIWNoaWxkQ29uZmlnKXtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWcgPSBjb25maWcuY2hpbGRyZW4ucmVxdWVzdE9iamVjdCgnJyxIVE1MV3JhcHBlckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7IC8vIGZvciBSZWFjdCBDb21wb3NpdGUgRWxlbWVudHNcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBBcHAuZ2V0VG9vbENvbmZpZyhjaGlsZC50eXBlKTtcbiAgICAgICAgICAgICAgICBpZighY2hpbGRDb25maWcgJiYgY29uZmlnQ2xhc3Mpe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZyA9IGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCcnLGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5zdHlsZSljaGlsZENvbmZpZy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gY2hpbGQucHJvcHMuc3R5bGU7XG4gICAgICAgICAgICBpZihjaGlsZC5wcm9wcy5jbGFzc05hbWUpY2hpbGRDb25maWcuQ1NTLmNsYXNzTmFtZS5zdGF0ZSA9IGNoaWxkLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZENvbmZpZ01hcC5zZXQoY2hpbGQsY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgY29uZmlnLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGNvbmZpZ1tcImFkZEdhcEF0XCJdKXtcbiAgICAgICAgICAgIGNvbmZpZy5jaGlsZHJlbi5yZXF1ZXN0T2JqZWN0KCdnYXBEaXYnLEhUTUxXcmFwcGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyByZW5kZXJDaGlsZHJlbihyZWFjdENvbXAscHJvcHNNYW5hZ2VyKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG5cbiAgICAgICAgdmFyIGNsb25lZENoaWxkcmVuID0gY2hpbGRDb25maWdzLm1hcChmdW5jdGlvbihjaGlsZENvbmZpZyxpbmRleCl7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZHJlbi5nZXROYW1lKGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9e31cblxuICAgICAgICAgICAgcHJvcHNbXCJzZXR0aW5nc1wiXSA9IGNoaWxkQ29uZmlnO1xuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIC8vaWYoY2hpbGQucHJvcHMgJiYgIWNoaWxkLnByb3BzLnNldHRpbmdzKVxuXG4gICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcyxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHByb3BzTWFuYWdlcil7XG4gICAgICAgICAgICAgICAgdmFyIG9kZCA9IHByb3BzTWFuYWdlci5vZGQ7XG4gICAgICAgICAgICAgICAgaWYob2RkLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkQ2hpbGRyZW5JbmRleCA9IG9kZC5jaGlsZHJlbi5pbmRleE9mKGNvbmZpZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZihvZGRDaGlsZHJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMsb2RkLnZhbHVlc1tvZGRDaGlsZHJlbkluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocHJvcHNNYW5hZ2VyW1wiZGVmYXVsdFZhbHVlc1wiXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlcltcImRlZmF1bHRWYWx1ZXNcIl0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihwcm9wc01hbmFnZXIuYWxsLnByb3BlcnRpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzTWFuYWdlci5hbGwucHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcE5hbWUsaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wc01hbmFnZXIuYWxsLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IHZhbHVlID8gdmFsdWVbaW5kZXhdOmNvbmZpZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHNNYW5hZ2VyLm5ldyl7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5tZXJnZUludG8ocHJvcHMscHJvcHNNYW5hZ2VyLm5ldyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvcHMuc3R5bGUgJiYgcHJvcHNNYW5hZ2VyLnN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1lcmdlSW50byhwcm9wcy5zdHlsZSxwcm9wc01hbmFnZXIuc3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGlsZCl7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoaWxkLnR5cGUpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgIHByb3BzW1wia2V5XCJdID0gY29uZmlnTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSAgQXBwLmdldFRvb2xJbXBsZW1lbnRhdGlvbihjb25maWdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9vbENsYXNzIHsuLi5wcm9wc30+e2NoaWxkfTwvVG9vbENsYXNzPjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBBcHAubWVyZ2VJbnRvKHByb3BzLHByb3BzTWFuYWdlci5uZXcpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZWFjdENvbXAuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuaGFzKGNoaWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0Q29tcC5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZWFjdENvbXAuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLGNsb25lZENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RDb21wLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChjbG9uZWRDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvcHNbXCJrZXlcIl0gPSBjb25maWdOYW1lO1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ05hbWUgPT09IFwiZ2FwRGl2XCIpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JkZXJWYWx1ZSA9IFN0cmluZyhyZWFjdENvbXAuc2V0dGluZ3MuYWRkR2FwQXQuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZighaXNOYU4ob3JkZXJWYWx1ZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJzdHlsZVwiXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOm9yZGVyVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RvLWRvIG5lZWQgdG8gcmVwbGFjZSB3aXRoIGZsZXhpbmZvIGZpbGUgb3IgdGloZXIgbWVhbiwgY3JlYXRlIGEgdXRpbGl0eSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIC8vdGhpcyBzb2x1dGlvbiB3aWxsIGZhaWwgd2hlbiBjb25maWcgbm90IHBhcnQgb2Ygc2Vzc2lvbiB0cmVlXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ0NsYXNzID0gY2hpbGRDb25maWcuRkxFWEpTX0NMQVNTX0lORk8ubmFtZXNbMF0ucU5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSA8VG9vbENsYXNzIHsuLi5wcm9wc30vPjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkcmVuO1xuICAgIH1cblxuICAgIHN0YXRpYyBtZXJnZUludG8oaW50bywgb2JqLGlnbm9yZVByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpbnRvW2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cbn1cblxuQXBwLnRvb2xSZWdpc3RyeSA9IHt9O1xuQXBwLnRvb2xDb25maWdNYXAgPSAgbmV3IE1hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _appendVendorPrefix = __webpack_require__(10);

	var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(function (module) {

	    function Style() {}

	    function merge(into, obj) {
	        for (var attr in obj) {
	            into[attr] = obj[attr];
	        }

	        return into;
	    }

	    Style.mergeStyleObjects = function (into, obj, appendVendorPrefix) {
	        var styleObject = merge(into, obj);
	        if (appendVendorPrefix) return Style.appendVendorPrefix(styleObject);else return styleObject;
	    };

	    /*convenience function to get a particular sessioned property of a sessioned object*/
	    Style.getStyleStateFor = function (sessionObj, properties, appendVendorPrefix) {
	        var state = {};
	        if (properties.constructor === Array) {
	            properties.map(function (propertyName) {
	                if (sessionObj[propertyName].state) {
	                    if (sessionObj[propertyName].constructor === weavejs.core.LinkableVariable) {
	                        state = Style.mergeStyleObjects(state, sessionObj[propertyName].state);
	                    } else state[propertyName] = sessionObj[propertyName].state;
	                }
	            });
	        } else if (properties instanceof String) {
	            state[properties] = sessionObj[properties].state;
	        }
	        if (appendVendorPrefix) return Style.appendVendorPrefix(state);
	        return state;
	    };

	    Style.getStyle = function (style) {
	        return (0, _appendVendorPrefix2.default)(style);
	    };

	    Style.appendVendorPrefix = function (style) {
	        return (0, _appendVendorPrefix2.default)(style);
	    };

	    Style.alignChildren = function (style, align) {
	        var otherState = style.other.state;
	        if (style.display.state === "flex") {
	            if (align === "left") otherState["justifyContent"] = "flex-start";else if (align === "center") otherState["justifyContent"] = "center";else if (align === "right") otherState["justifyContent"] = "flex-end";else if (align === "justify") otherState["justifyContent"] = "space-around";
	        }
	        style.other.state = otherState;
	        // to-do for CSS with float values
	    };

	    // due to bootstrap Navbar zindex (1029) value we have to give 1030 for overlay
	    Style.overlayContainer = function (isOpen) {
	        return (0, _appendVendorPrefix2.default)({
	            position: 'fixed',
	            width: '100%',
	            height: '100%',
	            left: 0,
	            top: 0,
	            background: 'rgba(0, 0, 0, 0.1)',
	            opacity: isOpen ? 1 : 0,
	            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
	            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
	            zIndex: 1030
	        });
	    };

	    Style.modal = function (isOpen) {
	        return (0, _appendVendorPrefix2.default)({
	            position: 'fixed',
	            zIndex: 1050,
	            width: '100%',
	            height: '100%',
	            left: 0,
	            top: 0,
	            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
	            transition: 'all 0.5s'

	        });
	    };

	    module.exports = Style;
	})(module);
	//# sourceMappingURL=data:application/json;base64,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QkFBQSxBQUFNLEFBQ047aUJBQUEsQUFBSyxBQUNMO3dCQUFBLEFBQVksQUFDWjtxQkFBUyxTQUFBLEFBQVMsSUFBVCxBQUFhLEFBQ3RCO3VCQUFXLFNBQUEsQUFBUyx5QkFBVCxBQUFrQyxBQUM3Qzt3QkFBWSxTQUFBLEFBQVMsaUJBQVQsQUFBMEIsQUFDdEM7b0JBckZPLEFBMEVVLEFBQWtCLEFBQ3ZDLEFBQU8sQUFVSCxBQUFRLEFBSWhCO1NBZFcsRUFEZ0MsQUFDdkM7S0FEcUI7O1VBZXpCLEFBQU0sa0JBQVEsQUFBVTtpREFDTSxBQUN0QjtzQkFBQSxBQUFVLEFBQ1Y7b0JBQUEsQUFBUSxBQUNSO21CQUFBLEFBQU8sQUFDUDtvQkFBQSxBQUFRLEFBQ1I7a0JBQUEsQUFBTSxBQUNOO2lCQUFBLEFBQUssQUFDTDt1QkFBVyxTQUFBLEFBQVMseUJBQVQsQUFBa0MsQUFDN0M7d0JBbEdPLEFBeUZELEFBQWtCLEFBQzVCLEFBQU8sQUFRSCxBQUFZLEFBU3BCOztTQWpCVyxFQURxQixBQUM1QjtLQURVOztXQWtCZCxBQUFPLFVBM0dWLEFBQWtCLEFBMkdmLEFBQWlCO0dBM0dyQixBQUFDLEFBNkdDIiwiZmlsZSI6IlN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGVuZFZlbmRvclByZWZpeCBmcm9tICcuL2FwcGVuZFZlbmRvclByZWZpeCc7XG5cblxuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cbiAgICBmdW5jdGlvbiBTdHlsZSgpIHtcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBtZXJnZShpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50bztcbiAgICB9XG5cbiAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyA9IGZ1bmN0aW9uIChpbnRvLCBvYmosIGFwcGVuZFZlbmRvclByZWZpeCkge1xuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSBtZXJnZShpbnRvLCBvYmopO1xuICAgICAgICBpZiAoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdClcbiAgICAgICAgZWxzZSByZXR1cm4gc3R5bGVPYmplY3Q7XG4gICAgfVxuXG5cbiAgICAvKmNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIGdldCBhIHBhcnRpY3VsYXIgc2Vzc2lvbmVkIHByb3BlcnR5IG9mIGEgc2Vzc2lvbmVkIG9iamVjdCovXG4gICAgU3R5bGUuZ2V0U3R5bGVTdGF0ZUZvciA9IGZ1bmN0aW9uIChzZXNzaW9uT2JqLCBwcm9wZXJ0aWVzLCBhcHBlbmRWZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0ge307XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIGlmKHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5jb25zdHJ1Y3RvciA9PT0gd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhzdGF0ZSxzZXNzaW9uT2JqW3Byb3BlcnR5TmFtZV0uc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVbcHJvcGVydHlOYW1lXSA9IHNlc3Npb25PYmpbcHJvcGVydHlOYW1lXS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICBzdGF0ZVtwcm9wZXJ0aWVzXSA9IHNlc3Npb25PYmpbcHJvcGVydGllc10uc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXBwZW5kVmVuZG9yUHJlZml4KVxuICAgICAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdGF0ZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuXG5cbiAgICBTdHlsZS5nZXRTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlKTtcbiAgICB9XG5cbiAgICBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG4gICAgU3R5bGUuYWxpZ25DaGlsZHJlbiA9IGZ1bmN0aW9uKHN0eWxlLGFsaWduKXtcbiAgICAgICAgdmFyIG90aGVyU3RhdGUgPSBzdHlsZS5vdGhlci5zdGF0ZTtcbiAgICAgICAgaWYoc3R5bGUuZGlzcGxheS5zdGF0ZSA9PT0gXCJmbGV4XCIpe1xuICAgICAgICAgICAgaWYoYWxpZ24gPT09IFwibGVmdFwiKSBvdGhlclN0YXRlW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtc3RhcnRcIjtcbiAgICAgICAgICAgIGVsc2UgaWYoYWxpZ24gPT09IFwiY2VudGVyXCIpb3RoZXJTdGF0ZVtcImp1c3RpZnlDb250ZW50XCJdID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGVsc2UgaWYoYWxpZ24gPT09IFwicmlnaHRcIilvdGhlclN0YXRlW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcImZsZXgtZW5kXCI7XG4gICAgICAgICAgICBlbHNlIGlmKGFsaWduID09PSBcImp1c3RpZnlcIilvdGhlclN0YXRlW1wianVzdGlmeUNvbnRlbnRcIl0gPSBcInNwYWNlLWFyb3VuZFwiO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLm90aGVyLnN0YXRlID0gb3RoZXJTdGF0ZTtcbiAgICAgICAgLy8gdG8tZG8gZm9yIENTUyB3aXRoIGZsb2F0IHZhbHVlc1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLy8gZHVlIHRvIGJvb3RzdHJhcCBOYXZiYXIgemluZGV4ICgxMDI5KSB2YWx1ZSB3ZSBoYXZlIHRvIGdpdmUgMTAzMCBmb3Igb3ZlcmxheVxuICAgIFN0eWxlLm92ZXJsYXlDb250YWluZXIgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyA6ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaXNPcGVuID8gJ29wYWNpdHkgMC41cycgOiAnb3BhY2l0eSAwLjVzLCB0cmFuc2Zvcm0gMC4xcyAwLjVzJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTdHlsZS5tb2RhbCA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogMTA1MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFN0eWxlO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(11);

	module.exports = function (target, sources) {
	    var to = Object(target);
	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	        var nextSource = arguments[nextIndex];
	        if (nextSource == null) {
	            continue;
	        }

	        var from = Object(nextSource);

	        for (var key in from) {
	            if (hasOwnProperty.call(from, key)) {
	                to[key] = from[key];
	            }
	        }
	    }

	    var prefixed = {};
	    for (var key in to) {
	        prefixed[getVendorPropertyName(key)] = to[key];
	    }

	    return prefixed;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGVuZFZlbmRvclByZWZpeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLHdCQUF3QixRQUF4QixBQUF3QixBQUFROztBQUVwQyxPQUFBLEFBQU8sb0JBQVUsQUFBVSxRQUFWLEFBQWtCO1FBQzNCLEtBQUssT0FEK0IsQUFDcEMsQUFBSyxBQUFPLEFBQ2hCO1FBQUksaUJBQWlCLE9BQUEsQUFBTyxVQUZZLEFBRW5CLEFBQWlCLEFBRXRDOztTQUFLLElBQUksWUFBQSxBQUFZLEdBQUcsWUFBWSxVQUFBLEFBQVUsUUFBOUMsQUFBc0Q7WUFDOUMsYUFBYSxVQUQ4QyxBQUMzRCxBQUFhLEFBQVUsQUFDM0I7WUFBSSxjQUFBLEFBQWM7QUFBbEIsQUFBd0IsQUFJeEIscUJBSndCLEFBQ3BCOzs7WUFHQSxPQUFPLE9BTm9ELEFBTTNELEFBQU8sQUFBTyxBQUVsQixZQVIrRCxBQUMvRDs7YUFPSyxJQUFBLEFBQUksT0FBVCxBQUFnQixNQUFNLEFBQ2xCO2dCQUFJLGVBQUEsQUFBZSxLQUFmLEFBQW9CLE1BQXhCLEFBQUksQUFBMEI7bUJBQzFCLEFBQUcsT0FBTyxLQVZ0QixBQVFJLEFBQ0ksQUFBb0MsQUFDaEMsQUFBVSxBQUFLLEFBSzNCLEtBTjRDLEFBQ2hDOzs7OztRQUtSLFdBbkJvQyxBQW1CcEMsQUFBVyxBQUNmO1NBQUssSUFBQSxBQUFJLE9BQVQsQUFBZ0IsSUFBSSxBQUNoQjtpQkFBUyxzQkFBVCxBQUFTLEFBQXNCLFFBQVEsR0FEM0MsQUFBb0IsQUFDaEIsQUFBdUMsQUFBRyxBQUc5Qzs7O1dBeEJhLEFBQTJCLEFBd0J4QyxBQUFPLFNBeEJpQyxBQUN4QztDQURhIiwiZmlsZSI6ImFwcGVuZFZlbmRvclByZWZpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFZlbmRvclByb3BlcnR5TmFtZSA9IHJlcXVpcmUoJy4vZ2V0VmVuZG9yUHJvcGVydHlOYW1lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlcykge1xuICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmVmaXhlZCA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB0bykge1xuICAgICAgICBwcmVmaXhlZFtnZXRWZW5kb3JQcm9wZXJ0eU5hbWUoa2V5KV0gPSB0b1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkXG59XG4iXX0=

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var div = document.createElement('div');
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	var domVendorPrefix;

	// Helper function to get the proper vendor property name. (transition => WebkitTransition)
	module.exports = function (prop) {

	    if (prop in div.style) return prop;

	    var prop = prop.charAt(0).toUpperCase() + prop.substr(1);
	    if (domVendorPrefix) {
	        return domVendorPrefix + prop;
	    } else {
	        for (var i = 0; i < prefixes.length; ++i) {
	            var vendorProp = prefixes[i] + prop;
	            if (vendorProp in div.style) {
	                domVendorPrefix = prefixes[i];
	                return vendorProp;
	            }
	        }
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFZlbmRvclByb3BlcnR5TmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE1BQU0sU0FBQSxBQUFTLGNBQWYsQUFBTSxBQUF1QjtBQUNqQyxJQUFJLFdBQVcsQ0FBQSxBQUFDLE9BQUQsQUFBUSxVQUFSLEFBQWtCLEtBQTdCLEFBQVcsQUFBdUI7QUFDdEMsSUFBQSxBQUFJOzs7QUFHSixPQUFBLEFBQU8sb0JBQVUsQUFBVSxNQUFNLEFBRTdCOztRQUFJLFFBQVEsSUFBQSxBQUFJLE9BQU8sT0FBdkIsQUFBdUIsQUFBTyxBQUU5Qjs7UUFBSSxPQUFPLEtBQUEsQUFBSyxPQUFMLEFBQVksR0FBWixBQUFlLGdCQUFnQixLQUFBLEFBQUssT0FKbEIsQUFJbEIsQUFBK0IsQUFBWSxBQUN0RDtRQUFBLEFBQUksaUJBQWlCLEFBQ2pCO2VBQU8sa0JBRFgsQUFBcUIsQUFDVixBQUFrQjtXQUN0QixBQUNIO2FBQUssSUFBSSxJQUFBLEFBQUksR0FBRyxJQUFJLFNBQUEsQUFBUyxRQUFRLEVBQUEsQUFBRTtnQkFDL0IsYUFBYSxTQUFBLEFBQVMsS0FEWSxBQUNyQixBQUFjLEFBQy9CLEtBRnNDLEFBQ3RDO2dCQUNJLGNBQWMsSUFBQSxBQUFJO2tDQUNBLFNBRE8sQUFDekIsQUFBa0IsQUFBUyxBQUMzQjt1QkFaQyxBQUtiLEFBR0ksQUFFSSxBQUE2QixBQUV6QixBQUFPLFdBRmtCLEFBQ3pCOzs7O0NBWEMiLCJmaWxlIjoiZ2V0VmVuZG9yUHJvcGVydHlOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG52YXIgcHJlZml4ZXMgPSBbJ01veicsICdXZWJraXQnLCAnTycsICdtcyddO1xudmFyIGRvbVZlbmRvclByZWZpeDtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvcGVyIHZlbmRvciBwcm9wZXJ0eSBuYW1lLiAodHJhbnNpdGlvbiA9PiBXZWJraXRUcmFuc2l0aW9uKVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcCkge1xuXG4gICAgaWYgKHByb3AgaW4gZGl2LnN0eWxlKSByZXR1cm4gcHJvcDtcblxuICAgIHZhciBwcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc3Vic3RyKDEpO1xuICAgIGlmIChkb21WZW5kb3JQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIGRvbVZlbmRvclByZWZpeCArIHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHZlbmRvclByb3AgPSBwcmVmaXhlc1tpXSArIHByb3A7XG4gICAgICAgICAgICBpZiAodmVuZG9yUHJvcCBpbiBkaXYuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBkb21WZW5kb3JQcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVuZG9yUHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var HTMLWrapperConfig = function HTMLWrapperConfig() {
	    _classCallCheck(this, HTMLWrapperConfig);

	    //to-do need to add verifier for each Session property to restrict to respective property

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	        },
	        "useCSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        }
	    });
	};

	Weave.registerClass('weavereact.HTMLWrapperConfig', HTMLWrapperConfig, [weavejs.api.core.ILinkableObject]);

	exports.default = HTMLWrapperConfig;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR00sNkJBQUEsQUFFRjswQkFGRSxBQUVXLEFBRVI7Ozs7QUFGUSxXQUVSLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMzQjtpQkFBUSxBQUNKO21CQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sa0JBRHJDLEFBQ0ksQUFBTyxBQUVYOztlQUFNLEFBQ0Y7bUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7a0JBQVMsQUFDTDttQkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxnQkFWOUQsQUFBYSxBQUVSLEFBT0csQUFDSSxBQUFPLEFBQTBCLEFBQWlDOzs7Q0FWOUU7O0FBaUJKLE1BQUEsQUFBTSxjQUFOLEFBQW9CLGdDQUFwQixBQUFvRCxtQkFBa0IsQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQW5GLEFBQXVFLEFBQWlCOztrQkFFekUiLCJmaWxlIjoiSFRNTFdyYXBwZXJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi9JbmxpbmVTdHlsZVwiO1xuXG5jbGFzcyBIVE1MV3JhcHBlckNvbmZpZ3tcblxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJzdHlsZVwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyQ29uZmlnJywgSFRNTFdyYXBwZXJDb25maWcsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxXcmFwcGVyQ29uZmlnO1xuIl19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var InlineStyle = function () {
	    function InlineStyle() {
	        _classCallCheck(this, InlineStyle);

	        //to-do need to add verifier for each Session property to restrict to respective property

	        Object.defineProperties(this, {
	            "border": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "margin": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "padding": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "font": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "other": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            },
	            "domDefined": { // for props.style
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            }
	        });

	        Object.defineProperties(this, {
	            "color": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "background": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "display": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "position": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            }
	        });
	    }

	    _createClass(InlineStyle, [{
	        key: "getStyleFor",
	        value: function getStyleFor(properties, appendVendorPrefix) {
	            properties = properties ? properties : ['border', 'margin', 'padding', 'font', 'other', 'color', 'background', 'display', 'position', 'domDefined'];
	            return _Style2.default.getStyleStateFor(this, properties, appendVendorPrefix);
	        }
	    }]);

	    return InlineStyle;
	}();

	Weave.registerClass('weavereact.InlineStyle', InlineStyle, [weavejs.api.core.ILinkableObject]);

	exports.default = InlineStyle;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklubGluZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFFTSxBQUlGOzhCQUpFLEFBSVcsQUFFUjs7OztBQUZRLGVBRVIsQUFBTyxpQkFBUCxBQUF3QixNQUFNLEFBQzNCO3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzt1QkFBVyxBQUNQO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O29CQUFRLEFBQ0o7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzswQkFBYyxBQUNWO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FuQjVDLEFBRVIsQUFnQkcsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFLekQ7Ozs7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDM0I7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOzswQkFBYyxBQUNWO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O3VCQUFXLEFBQ1A7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQURqRCxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDs7d0JBQVksQUFDUjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBbkN6RCxBQUFhLEFBd0JSLEFBVUcsQUFDSSxBQUFPLEFBQThCLEFBQWE7Ozs7O2lCQXZDNUQ7O29DQThDVSxZQUFXLG9CQUFtQixBQUN0Qzt5QkFBYSxhQUFBLEFBQVcsYUFBVyxDQUFBLEFBQUMsVUFBRCxBQUFVLFVBQVYsQUFBbUIsV0FBbkIsQUFBNkIsUUFBN0IsQUFBb0MsU0FBcEMsQUFBNEMsU0FBNUMsQUFBb0QsY0FBcEQsQUFBaUUsV0FBakUsQUFBMkUsWUFEeEUsQUFDekIsQUFBc0IsQUFBc0YsQUFDekg7bUJBQU8sZ0JBQUEsQUFBTyxpQkFBUCxBQUF3QixNQUF4QixBQUE2QixZQUZFLEFBRXRDLEFBQU8sQUFBd0M7O1FBNUNuRDs7V0FKRTtHQUFBOztBQW9ETixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsYUFBWSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBdkUsQUFBMkQsQUFBaUI7O2tCQUU3RCIsImZpbGUiOiJJbmxpbmVTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL1N0eWxlXCI7XG5cbmNsYXNzIElubGluZVN0eWxle1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKCl7Ly90by1kbyBuZWVkIHRvIGFkZCB2ZXJpZmllciBmb3IgZWFjaCBTZXNzaW9uIHByb3BlcnR5IHRvIHJlc3RyaWN0IHRvIHJlc3BlY3RpdmUgcHJvcGVydHlcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJib3JkZXJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZm9udFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvdGhlclwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb21EZWZpbmVkXCI6IHsgLy8gZm9yIHByb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRpc3BsYXlcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICBnZXRTdHlsZUZvcihwcm9wZXJ0aWVzLGFwcGVuZFZlbmRvclByZWZpeCl7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzP3Byb3BlcnRpZXM6Wydib3JkZXInLCdtYXJnaW4nLCdwYWRkaW5nJywnZm9udCcsJ290aGVyJywnY29sb3InLCdiYWNrZ3JvdW5kJywnZGlzcGxheScsJ3Bvc2l0aW9uJywnZG9tRGVmaW5lZCddXG4gICAgICAgIHJldHVybiBTdHlsZXMuZ2V0U3R5bGVTdGF0ZUZvcih0aGlzLHByb3BlcnRpZXMsYXBwZW5kVmVuZG9yUHJlZml4KTtcbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuSW5saW5lU3R5bGUnLCBJbmxpbmVTdHlsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lU3R5bGU7XG4iXX0=

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _NodeConfig = __webpack_require__(15);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Node = function (_React$Component) {
	    _inherits(Node, _React$Component);

	    function Node(props) {
	        _classCallCheck(this, Node);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _NodeConfig2.default();
	        _this.toggle = _this.toggle.bind(_this);
	        _this.getTreeNodes = _this.getTreeNodes.bind(_this);
	        _this.getTreeLabel = _this.getTreeLabel.bind(_this);
	        _this.getIconName = _this.getIconName.bind(_this);
	        _this.createSessionStateForTree = _this.createSessionStateForTree.bind(_this);
	        _this.showChildren = _this.showChildren.bind(_this);
	        _this.childrenCallback = _this.childrenCallback.bind(_this);
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        _this.propsManager = new _PropsManager2.default();
	        _this.isSessionStateCreatedForTreeData = false;
	        return _this;
	    }

	    _createClass(Node, [{
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.open.addImmediateCallback(this, this.showChildren);
	            this.settings.children.childListCallbacks.addGroupedCallback(this, this.childrenCallback);
	            this.settings.label.addImmediateCallback(this, this.forceUpdate);
	            this.settings.active.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.open.removeCallback(this, this.showChildren);
	            this.settings.children.childListCallbacks.removeCallback(this, this.childrenCallback);
	            this.settings.label.removeCallback(this, this.forceUpdate);
	            this.settings.active.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	            this.createSessionStateForTree();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this.settings.open.value = !this.settings.open.value;
	            if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data, this.settings);
	            this.props.treeConfig.changeActiveNode(this.settings);
	        }
	    }, {
	        key: "childrenCallback",
	        value: function childrenCallback() {
	            console.log("childrenCallback");
	            this.forceUpdate();
	        }
	    }, {
	        key: "createSessionStateForTree",
	        value: function createSessionStateForTree(data, label, nodes, icon) {
	            if (data) {
	                // calling with data arguments indicates data is changed so wipe the session state
	                this.settings.reset();
	            }
	            this.settings.label.value = this.getTreeLabel(data, label);
	            this.settings.iconName.value = this.getIconName(data, icon);
	            var treeNodes = this.getTreeNodes(data, nodes);

	            if (treeNodes && treeNodes.length) {
	                this.settings.children.delayCallbacks();
	                for (var i = 0; i < treeNodes.length; i++) {
	                    var objectName = "node" + i;
	                    var nodeConfig = this.settings.children.requestObject(objectName, _NodeConfig2.default);
	                    var nodeLabel = this.getTreeLabel(treeNodes[i]);
	                    nodeConfig.label.state = nodeLabel;
	                    var nodeIcon = this.getIconName(treeNodes[i]);
	                    nodeConfig.iconName.state = nodeIcon;
	                }
	                this.settings.children.resumeCallbacks();
	            }
	            this.isSessionStateCreatedForTreeData = true;
	        }
	    }, {
	        key: "showChildren",
	        value: function showChildren() {
	            if (!this.isSessionStateCreatedForTreeData) {
	                this.createSessionStateForTree();
	            }
	            if (this.props.treeConfig.defaultSelectedNodes.length > 0) {
	                var nodeConfigs = this.settings.children.getObjects();
	                nodeConfigs.map(function (nodeConfig, index) {
	                    var nodeLabel = nodeConfig.label.state;
	                    if (this.props.treeConfig.defaultSelectedNodes.indexOf(nodeLabel) !== -1) {
	                        nodeConfig.open.value = true;
	                    }
	                }.bind(this));
	            }
	            this.forceUpdate();
	        }
	    }, {
	        key: "getTreeNodes",
	        value: function getTreeNodes(data, nodes) {
	            if (!data && this.props.data) data = this.props.data;
	            if (!nodes && this.props.nodes) nodes = this.props.nodes;
	            if (data) {
	                if (data[nodes] instanceof Function) {
	                    return data[nodes]();
	                } else {
	                    return data[nodes];
	                }
	            } else return [];
	        }
	    }, {
	        key: "getIconName",
	        value: function getIconName(data, icon) {

	            if (!data && this.props.data) data = this.props.data;
	            if (!icon && this.props.icon) icon = this.props.icon;

	            if (data) {
	                if (data[icon] instanceof Function) {
	                    return data[icon]();
	                } else if (icon instanceof Function) {
	                    return icon(data);
	                } else {
	                    return data[icon];
	                }
	            } else {
	                return "";
	            }
	        }
	    }, {
	        key: "getTreeLabel",
	        value: function getTreeLabel(data, label) {
	            if (!data && this.props.data) data = this.props.data;
	            if (!label && this.props.label) label = this.props.label;

	            if (data) {
	                if (data[label] instanceof Function) {
	                    return data[label]();
	                } else {
	                    return data[label];
	                }
	            } else {
	                return "";
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.data !== nextProps.data) {
	                this.createSessionStateForTree(nextProps.data, nextProps.label, nextProps.nodes, nextProps.icon);
	            }
	            if (this.props.open !== nextProps.open) {
	                this.settings.open.value = nextProps.open;
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            this.propsManager.addNewProps("treeConfig", this.props.treeConfig);
	            this.propsManager.addNewProps("label", this.props.label);
	            this.propsManager.addNewProps("nodes", this.props.nodes);
	            this.propsManager.addNewProps("icon", this.props.icon);
	            this.propsManager.addNewProps("clickCallback", this.props.clickCallback);
	            var treeNodes = this.getTreeNodes();
	            this.propsManager.addKeyProps("data", treeNodes);
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var nodeUI = _react2.default.createElement("div", null);
	            var domeDefinedStyle = this.props.style;
	            if (this.props.data) {
	                var nodesUI = [];
	                var nodes = this.settings.getNodes();
	                if (this.settings.open.value) {
	                    nodesUI = this.renderChildren();
	                }

	                var iconName = this.settings.iconName.value;
	                var label = this.settings.label.value;
	                if (nodes.length > 0) {
	                    //folder
	                    var branchStyle = this.props.treeConfig.branchStyle.getStyleFor();
	                    var nodeStyle = this.props.treeConfig.nodeStyle.getStyleFor();
	                    if (domeDefinedStyle) _Style2.default.mergeStyleObjects(nodeStyle, domeDefinedStyle, true); //this happens for rootNode
	                    var controlName = this.props.treeConfig.getFolderIcon(this.settings.open.value);

	                    var folderUI = _react2.default.createElement("span", { style: nodeStyle, onClick: this.toggle }, _react2.default.createElement("i", { className: iconName }), " ", label, _react2.default.createElement("span", { style: { flex: "1" } }), _react2.default.createElement("i", { className: controlName }));

	                    var nodePadding = this.props.treeConfig.nodePadding.state;
	                    nodeUI = _react2.default.createElement("span", { style: branchStyle }, folderUI, _react2.default.createElement("ul", { style: { listStyleType: "none", paddingLeft: nodePadding } }, nodesUI));
	                } else {
	                    //leaf
	                    var fileIcon = this.props.treeConfig.getFileIcon(this.props.data, this.settings.open.value);
	                    // this will return either normal/Active/Slected Style based on state of the leaf
	                    var leafStyle = this.props.treeConfig.getLeafStyle(this.settings.open.value, this.settings.active.value);

	                    nodeUI = _react2.default.createElement("li", { style: leafStyle, onClick: this.toggle }, _react2.default.createElement("i", { className: iconName }), " ", label, _react2.default.createElement("span", { style: { flex: "1" } }), _react2.default.createElement("i", { className: fileIcon }));
	                }
	            }

	            return nodeUI;
	        }
	    }]);

	    return Node;
	}(_react2.default.Component);

	_App2.default.registerToolImplementation("weavereact.NodeConfig", Node);
	exports.default = Node;
	//# sourceMappingURL=data:application/json;base64,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c0NBQUksT0FBTyxFQUFDLGVBQUEsQUFBYyxRQUFPLGFBQWpDLEFBQUksQUFBNkIsQUFBWSxpQkFoQjdELEFBQW9CLEFBY2hCLEFBQVMsQUFFRyxBQUNLOzs7d0JBS2IsV0FBVyxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQUssS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUQvRSxBQUNJLEFBQTZELEFBQW1COztBQURwRixBQUNBLHdCQUVJLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLGFBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLE9BQU0sS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUgxRixBQUdJLEFBQXdFLEFBQXFCLEFBRWpHOzs2QkFBUyxzQ0FBSSxPQUFBLEFBQU8sV0FBVyxTQUFTLEtBQS9CLEFBQStCLEFBQUssVUFDakMscUNBQUcsV0FETixBQUNHLEFBQUcsQUFBVyxrQkFEakIsQUFFVSxPQUNQLHdDQUFNLE9BQU8sRUFBQyxNQUhqQixBQUdHLEFBQU0sQUFBUSxBQUFLLFVBQ25CLHFDQUFHLFdBdkN2QixBQVNJLEFBcUJJLEFBS0EsQUFBUyxBQUlHLEFBQUcsQUFBVyxBQU10Qzs7OzttQkFoRFMsQUFnRFQsQUFBUyxPQWhEQSxBQUNMOzs7O1dBbktGO0VBQWEsZ0JBQUEsQUFBTTs7QUF1TnpCLGNBQUEsQUFBSSwyQkFBSixBQUErQix5QkFBL0IsQUFBdUQ7a0JBQ3hDIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgTm9kZUNvbmZpZyBmcm9tIFwiLi9Ob2RlQ29uZmlnXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIlxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzOm5ldyBOb2RlQ29uZmlnKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRUcmVlTm9kZXMgPSB0aGlzLmdldFRyZWVOb2Rlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFRyZWVMYWJlbCA9IHRoaXMuZ2V0VHJlZUxhYmVsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0SWNvbk5hbWUgPSB0aGlzLmdldEljb25OYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSA9IHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dDaGlsZHJlbiA9IHRoaXMuc2hvd0NoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5DYWxsYmFjayA9IHRoaXMuY2hpbGRyZW5DYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLm9wZW4uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5zaG93Q2hpbGRyZW4pO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5jaGlsZHJlbkNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnNob3dDaGlsZHJlbik7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuY2hpbGRyZW5DYWxsYmFjayk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubGFiZWwucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlc3Npb25TdGF0ZUZvclRyZWUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gIXRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0NhbGxiYWNrLmNhbGwodGhpcyx0aGlzLnByb3BzLmRhdGEsdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZUNvbmZpZy5jaGFuZ2VBY3RpdmVOb2RlKHRoaXMuc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgY2hpbGRyZW5DYWxsYmFjaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuQ2FsbGJhY2tcIik7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cblxuXG4gICAgY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZShkYXRhLGxhYmVsLG5vZGVzLGljb24pIHtcbiAgICAgICAgaWYoZGF0YSl7IC8vIGNhbGxpbmcgd2l0aCBkYXRhIGFyZ3VtZW50cyBpbmRpY2F0ZXMgZGF0YSBpcyBjaGFuZ2VkIHNvIHdpcGUgdGhlIHNlc3Npb24gc3RhdGVcbiAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZSA9IHRoaXMuZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlID0gdGhpcy5nZXRJY29uTmFtZShkYXRhLGljb24pO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyk7XG5cbiAgICAgICAgaWYodHJlZU5vZGVzICYmIHRyZWVOb2Rlcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5kZWxheUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRyZWVOb2Rlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdE5hbWUgPSBcIm5vZGVcIiArIGk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVDb25maWcgPSB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLnJlcXVlc3RPYmplY3Qob2JqZWN0TmFtZSwgTm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGVMYWJlbCA9IHRoaXMuZ2V0VHJlZUxhYmVsKHRyZWVOb2Rlc1tpXSlcbiAgICAgICAgICAgICAgICBub2RlQ29uZmlnLmxhYmVsLnN0YXRlID0gbm9kZUxhYmVsO1xuICAgICAgICAgICAgICAgIHZhciBub2RlSWNvbiA9IHRoaXMuZ2V0SWNvbk5hbWUodHJlZU5vZGVzW2ldKVxuICAgICAgICAgICAgICAgIG5vZGVDb25maWcuaWNvbk5hbWUuc3RhdGUgPSBub2RlSWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4ucmVzdW1lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Nlc3Npb25TdGF0ZUNyZWF0ZWRGb3JUcmVlRGF0YSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2hvd0NoaWxkcmVuKCl7XG4gICAgICAgIGlmKCF0aGlzLmlzU2Vzc2lvblN0YXRlQ3JlYXRlZEZvclRyZWVEYXRhKXtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvblN0YXRlRm9yVHJlZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlQ29uZmlnLmRlZmF1bHRTZWxlY3RlZE5vZGVzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHZhciBub2RlQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICAgICAgbm9kZUNvbmZpZ3MubWFwKGZ1bmN0aW9uKG5vZGVDb25maWcsaW5kZXgpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlTGFiZWwgPSBub2RlQ29uZmlnLmxhYmVsLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZUNvbmZpZy5kZWZhdWx0U2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGVMYWJlbCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUNvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBnZXRUcmVlTm9kZXMoZGF0YSxub2Rlcyl7XG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighbm9kZXMgJiYgdGhpcy5wcm9wcy5ub2Rlcylub2RlcyA9IHRoaXMucHJvcHMubm9kZXM7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtub2Rlc10gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbm9kZXNdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgIHJldHVybiBkYXRhW25vZGVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBnZXRJY29uTmFtZShkYXRhLGljb24pe1xuXG4gICAgICAgIGlmKCFkYXRhICYmIHRoaXMucHJvcHMuZGF0YSlkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZighaWNvbiAmJiB0aGlzLnByb3BzLmljb24paWNvbiA9IHRoaXMucHJvcHMuaWNvbjtcblxuICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtpY29uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtpY29uXSgpO1xuICAgICAgICAgICAgfWVsc2UgaWYoaWNvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWNvbihkYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2ljb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VHJlZUxhYmVsKGRhdGEsbGFiZWwpe1xuICAgICAgICBpZighZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEpZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgaWYoIWxhYmVsICYmIHRoaXMucHJvcHMubGFiZWwpbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsO1xuXG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YVtsYWJlbF0gaW5zdGFuY2VvZiBGdW5jdGlvbil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbGFiZWxdKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtsYWJlbF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uU3RhdGVGb3JUcmVlKG5leHRQcm9wcy5kYXRhLG5leHRQcm9wcy5sYWJlbCxuZXh0UHJvcHMubm9kZXMsbmV4dFByb3BzLmljb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMub3BlbiAhPT0gbmV4dFByb3BzLm9wZW4pe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlID0gbmV4dFByb3BzLm9wZW47XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwidHJlZUNvbmZpZ1wiLHRoaXMucHJvcHMudHJlZUNvbmZpZyk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZE5ld1Byb3BzKFwibGFiZWxcIix0aGlzLnByb3BzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJub2Rlc1wiLHRoaXMucHJvcHMubm9kZXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImljb25cIix0aGlzLnByb3BzLmljb24pO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImNsaWNrQ2FsbGJhY2tcIix0aGlzLnByb3BzLmNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB2YXIgdHJlZU5vZGVzID0gdGhpcy5nZXRUcmVlTm9kZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJkYXRhXCIsdHJlZU5vZGVzKTtcbiAgICAgICAgcmV0dXJuIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLCB0aGlzLnByb3BzTWFuYWdlcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbm9kZVVJID0gPGRpdi8+O1xuICAgICAgICB2YXIgZG9tZURlZmluZWRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YSl7XG4gICAgICAgICAgICB2YXIgbm9kZXNVSSA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5zZXR0aW5ncy5nZXROb2RlcygpO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBub2Rlc1VJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaWNvbk5hbWUgPSB0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5zZXR0aW5ncy5sYWJlbC52YWx1ZTtcbiAgICAgICAgICAgIGlmKG5vZGVzLmxlbmd0aCA+IDApeyAvL2ZvbGRlclxuICAgICAgICAgICAgICAgIHZhciBicmFuY2hTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5icmFuY2hTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIHZhciBub2RlU3R5bGUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVN0eWxlLmdldFN0eWxlRm9yKCk7XG4gICAgICAgICAgICAgICAgaWYoZG9tZURlZmluZWRTdHlsZSlTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhub2RlU3R5bGUsZG9tZURlZmluZWRTdHlsZSx0cnVlKTsvL3RoaXMgaGFwcGVucyBmb3Igcm9vdE5vZGVcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0Rm9sZGVySWNvbih0aGlzLnNldHRpbmdzLm9wZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvbGRlclVJID0gPHNwYW4gc3R5bGU9e25vZGVTdHlsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxleDpcIjFcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udHJvbE5hbWV9ID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9kZVBhZGRpbmcgPSB0aGlzLnByb3BzLnRyZWVDb25maWcubm9kZVBhZGRpbmcuc3RhdGU7XG4gICAgICAgICAgICAgICAgbm9kZVVJID0gPHNwYW4gc3R5bGU9e2JyYW5jaFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9sZGVyVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTpcIm5vbmVcIixwYWRkaW5nTGVmdDpub2RlUGFkZGluZ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZXNVSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNleyAvL2xlYWZcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUljb24gPSB0aGlzLnByb3BzLnRyZWVDb25maWcuZ2V0RmlsZUljb24odGhpcy5wcm9wcy5kYXRhLHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBlaXRoZXIgbm9ybWFsL0FjdGl2ZS9TbGVjdGVkIFN0eWxlIGJhc2VkIG9uIHN0YXRlIG9mIHRoZSBsZWFmXG4gICAgICAgICAgICAgICAgdmFyIGxlYWZTdHlsZSA9IHRoaXMucHJvcHMudHJlZUNvbmZpZy5nZXRMZWFmU3R5bGUodGhpcy5zZXR0aW5ncy5vcGVuLnZhbHVlLHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIG5vZGVVSSA9IDxsaSBzdHlsZT17bGVhZlN0eWxlfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpY29uTmFtZX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OlwiMVwifX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmlsZUljb259PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIHJldHVybiAoIG5vZGVVSSk7XG4gICAgfVxuXG59XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuTm9kZUNvbmZpZ1wiLE5vZGUpO1xuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiJdfQ==

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/*import Weave from 'Weave';
	import weavejs from 'weavejs';*/

	(function (module) {

	    function NodeConfig() {

	        Object.defineProperties(this, {
	            "label": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "children": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap()) // important to be prototype as type restriction is compared with prototype
	            },
	            "iconName": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
	            },
	            "active": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean())
	            }
	        });

	        this.open.state = false;
	        this.active.state = false;

	        this.childConfigMap = new Map();
	        this.configChildMap = new Map();
	    }

	    var p = NodeConfig.prototype;

	    p.getNodes = function () {
	        return this.children.getNames();
	    };

	    p.reset = function () {
	        this.label.value = "";
	        this.iconName.value = "";
	        this.open.value = false;
	        this.active.value = false;
	        this.children.removeAllObjects();
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

	    module.exports = NodeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7O3VCQUNXLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFBWSxBQUNSLEFBQU8sQUFBOEIsQUFBYSxBQUV0RDtBQUhZLEFBQ1I7d0JBRVEsQUFDUjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBRGpELEFBQ0ksQUFBTyxBQUE4QixBQUFhLEFBRXREOztvQkFBUSxBQUNKO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7O3NCQUFVLEFBQ047dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQWhCbkMsQUFFbEIsQUFhSSxBQUNJLEFBQU8sQUFBOEIsQUFBYSxBQUkxRDs7V0FwQmtCLEFBRWxCOzthQWtCQSxBQUFLLEtBQUwsQUFBVSxRQXBCUSxBQW9CbEIsQUFBa0IsQUFDbEI7YUFBQSxBQUFLLE9BQUwsQUFBWSxRQXJCTSxBQXFCbEIsQUFBb0IsQUFFcEI7O2FBQUEsQUFBSyxpQkFBaUIsSUF2QkosQUF1QmxCLEFBQXNCLEFBQUksQUFDMUI7YUFBQSxBQUFLLGlCQUFpQixJQXhCMUIsQUFBc0IsQUF3QmxCLEFBQXNCLEFBQUksQUFJOUI7OztRQUFJLElBQUksV0E5Qk8sQUE4QlAsQUFBVyxBQUVuQjs7TUFBQSxBQUFFLHVCQUF1QixBQUNyQjtlQUFPLEtBQUEsQUFBSyxTQWpDRCxBQWdDRixBQUFZLEFBQ3JCLEFBQU8sQUFBYyxBQUd6QjtLQUphOztNQUliLEFBQUUsb0JBQW9CLEFBQ2xCO2FBQUEsQUFBSyxNQUFMLEFBQVcsUUFETyxBQUNsQixBQUFtQixBQUNuQjthQUFBLEFBQUssU0FBTCxBQUFjLFFBRkksQUFFbEIsQUFBc0IsQUFDdEI7YUFBQSxBQUFLLEtBQUwsQUFBVSxRQUhRLEFBR2xCLEFBQWtCLEFBQ2xCO2FBQUEsQUFBSyxPQUFMLEFBQVksUUFKTSxBQUlsQixBQUFvQixBQUNwQjthQUFBLEFBQUssU0F6Q00sQUFvQ0wsQUFBWSxBQUtsQixBQUFjO0tBTFI7OztBQXBDSyxBQUVmLFNBMkNBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQTdDTCxBQTZDZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBL0NWLEFBQWtCLEFBK0NmLEFBQWlCO0dBL0NyQixBQUFDLEFBaURDIiwiZmlsZSI6Ik5vZGVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE5vZGVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKSAvLyBpbXBvcnRhbnQgdG8gYmUgcHJvdG90eXBlIGFzIHR5cGUgcmVzdHJpY3Rpb24gaXMgY29tcGFyZWQgd2l0aCBwcm90b3R5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbigpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wZW4uc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUuc3RhdGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuXG4gICAgdmFyIHAgPSBOb2RlQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmdldE5hbWVzKCk7XG4gICAgfVxuXG4gICAgcC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaWNvbk5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Ob2RlQ29uZmlnJywgTm9kZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE5vZGVDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var PropsManager = function () {
	    function PropsManager() {
	        _classCallCheck(this, PropsManager);

	        this.new = {};
	        this.mutated = {};
	        this.key = [];
	        this.default = {};
	        this.style = {};

	        Object.defineProperties(this, {
	            "odd": {
	                value: {
	                    children: [],
	                    values: []
	                }
	            },
	            "all": {
	                value: {
	                    properties: [],
	                    values: []
	                }
	            }
	        });
	    }

	    _createClass(PropsManager, [{
	        key: "addKeyProps",
	        value: function addKeyProps(propName, value) {
	            var index = this.all.properties.indexOf(propName);
	            if (index === -1) {
	                this.all.properties.push(propName);
	                var valIndex = this.all.properties.indexOf(propName);
	                this.all.values[valIndex] = value;
	            }
	        }
	    }, {
	        key: "addOddChild",
	        value: function addOddChild(childKey, childValue) {
	            //to-do add warning if childValue is missed
	            var childIndex = this.odd.children.indexOf(childKey);
	            if (childIndex === -1) {
	                this.odd.children.push(childKey);
	                var valIndex = this.odd.children.indexOf(childKey);
	                this.odd.values[valIndex] = childValue;
	            }
	        }
	    }, {
	        key: "addNewProps",
	        value: function addNewProps(propName, value) {
	            this.new[propName] = value;
	        }
	    }, {
	        key: "updateStyle",
	        value: function updateStyle(style) {
	            this.style = style;
	        }
	    }]);

	    return PropsManager;
	}();

	exports.default = PropsManager;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb3BzTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUFNLEFBQ0Y7OEJBREUsQUFDWSxBQUNWOzthQUFBLEFBQUssTUFESyxBQUNWLEFBQVcsQUFDWDthQUFBLEFBQUssVUFGSyxBQUVWLEFBQWUsQUFDZjthQUFBLEFBQUssTUFISyxBQUdWLEFBQVcsQUFDWDthQUFBLEFBQUssVUFKSyxBQUlWLEFBQWUsQUFDZjthQUFBLEFBQUssUUFMSyxBQUtWLEFBQWEsQUFHWjs7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDM0I7bUJBQU8sQUFDSDt1QkFBTyxBQUNIOzhCQUFBLEFBQVUsQUFDVjs0QkFIUixBQUNJLEFBRUksQUFBUSxBQUdoQjs7O21CQUFPLEFBQ0g7dUJBQU0sQUFDRjtnQ0FBQSxBQUFZLEFBQ1o7NEJBbEJoQixBQUFjLEFBUVQsQUFPRyxBQUNJLEFBRUksQUFBTzs7O1dBbEJUOzs7aUJBRFo7O29DQTBCVSxVQUFTLE9BQU0sQUFDdkI7Z0JBQUksUUFBUSxLQUFBLEFBQUssSUFBTCxBQUFTLFdBQVQsQUFBb0IsUUFEVCxBQUNuQixBQUFRLEFBQTRCLEFBQ3hDO2dCQUFHLFVBQVUsQ0FBQSxBQUFDLEdBQUUsQUFDWjtxQkFBQSxBQUFLLElBQUwsQUFBUyxXQUFULEFBQW9CLEtBRFIsQUFDWixBQUF5QixBQUN6QjtvQkFBSSxXQUFXLEtBQUEsQUFBSyxJQUFMLEFBQVMsV0FBVCxBQUFvQixRQUZ2QixBQUVSLEFBQVcsQUFBNEIsQUFDM0M7cUJBQUEsQUFBSyxJQUFMLEFBQVMsT0FBVCxBQUFnQixZQUhwQixBQUFnQixBQUdaLEFBQTRCOzs7OztvQ0FJeEIsVUFBUyxZQUFXLEFBRTVCOztnQkFBSSxhQUFhLEtBQUEsQUFBSyxJQUFMLEFBQVMsU0FBVCxBQUFrQixRQUZQLEFBRXhCLEFBQWEsQUFBMEIsQUFDM0M7Z0JBQUcsZUFBZSxDQUFBLEFBQUMsR0FBRSxBQUNqQjtxQkFBQSxBQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLEtBREQsQUFDakIsQUFBdUIsQUFDdkI7b0JBQUksV0FBVyxLQUFBLEFBQUssSUFBTCxBQUFTLFNBQVQsQUFBa0IsUUFGaEIsQUFFYixBQUFXLEFBQTBCLEFBQ3pDO3FCQUFBLEFBQUssSUFBTCxBQUFTLE9BQVQsQUFBZ0IsWUFIcEIsQUFBcUIsQUFHakIsQUFBNEI7Ozs7O29DQUl4QixVQUFTO2lCQUNqQixBQUFLLElBQUwsQUFBUyxZQURjLEFBQ3ZCLEFBQXFCLE1BREUsQUFDdkI7Ozs7b0NBSVE7aUJBQ1IsQUFBSyxRQURTLEFBQ2QsQUFBYSxNQURDLEFBQ2Q7O1FBbERKOztXQURFO0dBQUE7O2tCQTZEUyIsImZpbGUiOiJQcm9wc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9wc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ldyA9IHt9O1xuICAgICAgICB0aGlzLm11dGF0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5rZXkgPSBbXTtcbiAgICAgICAgdGhpcy5kZWZhdWx0ID0ge307XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fVxuXG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwib2RkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhbGxcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOntcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogW10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczpbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGRLZXlQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWxsLnByb3BlcnRpZXMuaW5kZXhPZihwcm9wTmFtZSk7XG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmFsbC5wcm9wZXJ0aWVzLnB1c2gocHJvcE5hbWUpO1xuICAgICAgICAgICAgdmFyIHZhbEluZGV4ID0gdGhpcy5hbGwucHJvcGVydGllcy5pbmRleE9mKHByb3BOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWxsLnZhbHVlc1t2YWxJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE9kZENoaWxkKGNoaWxkS2V5LGNoaWxkVmFsdWUpe1xuICAgICAgICAvL3RvLWRvIGFkZCB3YXJuaW5nIGlmIGNoaWxkVmFsdWUgaXMgbWlzc2VkXG4gICAgICAgIHZhciBjaGlsZEluZGV4ID0gdGhpcy5vZGQuY2hpbGRyZW4uaW5kZXhPZihjaGlsZEtleSlcbiAgICAgICAgaWYoY2hpbGRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5vZGQuY2hpbGRyZW4ucHVzaChjaGlsZEtleSk7XG4gICAgICAgICAgICB2YXIgdmFsSW5kZXggPSB0aGlzLm9kZC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkS2V5KVxuICAgICAgICAgICAgdGhpcy5vZGQudmFsdWVzW3ZhbEluZGV4XSA9IGNoaWxkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGROZXdQcm9wcyhwcm9wTmFtZSx2YWx1ZSl7XG4gICAgICAgIHRoaXMubmV3W3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoc3R5bGUpe1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGVcbiAgICB9XG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb3BzTWFuYWdlcjtcbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _NodeConfig = __webpack_require__(15);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

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
	            rootNode: {
	                value: Weave.linkableChild(this, new _NodeConfig2.default())
	            },
	            rootStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            nodeStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            leafStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            selectedLeafStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            activeLeafStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            branchStyle: {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            allowMultipleSelection: {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });

	        this.activeNode = null;
	        this.dataTypesMap = null;
	        this.getDataType = null;

	        this.nodeStyle.display.state = "flex";
	        this.nodeStyle.other.state = {
	            "flexDirection": "row"
	        };

	        this.leafStyle.display.state = "flex";
	        this.leafStyle.other.state = {
	            "flexDirection": "row"
	        };

	        this.selectedLeafStyle.other.state = {
	            "background": "green"
	        };

	        this.activeLeafStyle.other.state = {
	            "background": "orange"
	        };

	        this.defaultSelectedNodes = [];
	    }

	    var p = TreeConfig.prototype;

	    function mergeInto(into, obj) {
	        for (var attr in obj) {
	            into[attr] = obj[attr];
	        }
	        return into;
	    }

	    p.getLeafStyle = function (open, active) {
	        var style = this.leafStyle.getStyleFor();
	        if (open) {
	            mergeInto(style, this.selectedLeafStyle.getStyleFor());
	            if (active) return mergeInto(style, this.activeLeafStyle.getStyleFor());
	        }
	        return style;
	    };

	    function setChildrenStateToOpen(parentNode, openNodes) {
	        var nodes = parentNode.children.getObjects();
	        if (nodes && nodes.length > 0) {
	            nodes.map(function (node) {
	                var nodeIndex = openNodes.indexOf(node.label.state);
	                if (nodeIndex > -1) {
	                    node.open.value = true;
	                    openNodes.splice(nodeIndex, 1);
	                    setChildrenStateToOpen(node, openNodes);
	                } else {
	                    node.open.value = false;
	                    node.active.value = false;
	                }
	            }.bind(this));
	        }
	    }

	    //to-do do this for entire tree rather only for the first child
	    p.setDefaultNodeSelection = function (nodesLabel) {
	        this.defaultSelectedNodes = nodesLabel;
	        //setChildrenStateToOpen(this.rootNode,nodesLabel)
	    };

	    //to-do do this for entire tree rather only for the first child
	    p.setOpenNodes = function (nodesLabel) {
	        var rootNodes = this.rootNode.children.getObjects();
	        rootNodes.map(function (node) {
	            if (nodesLabel.indexOf(node.label.state) > -1) {
	                node.open.value = true;
	            } else {
	                node.open.value = false;
	                node.active.value = false;
	            }
	        }.bind(this));
	    };

	    p.changeActiveNode = function (nodeConfig) {
	        if (this.activeNode) {
	            this.activeNode.active.value = false;
	            if (!this.allowMultipleSelection.value) {
	                if (this.activeNode !== nodeConfig) {
	                    var activeNodeChild = this.activeNode.children.getName(nodeConfig);
	                    if (!activeNodeChild) this.activeNode.open.value = false;
	                }
	            }
	        }
	        this.activeNode = nodeConfig;
	        this.activeNode.active.value = true;
	    };

	    p.getFileIcon = function (data, isOpen) {
	        if (data) {
	            if (this.enableDataTypeIcon.value) {
	                var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	                if (this.dataTypesMap && this.dataTypesMap[datType]) return this.dataTypesMap[datType];
	            } else {
	                return isOpen ? this.leafOpenIcon.value : this.leafIcon.value;
	            }
	        } else return "";
	    };

	    p.getFolderIcon = function (isOpen) {
	        return isOpen ? this.nodeOpenIcon.value : this.nodeIcon.value;
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

	    module.exports = TreeConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,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TUFhaEIsQUFBRSwwQkFBZ0IsQUFBVyxRQUFRLEFBQ2pDO2VBQU8sU0FBUyxLQUFBLEFBQUssYUFBTCxBQUFrQixRQUFRLEtBQUEsQUFBSyxTQXRLcEMsQUFxS0csQUFBbUIsQUFDUyxBQUFjO0tBRDFDOzs7U0FNbEIsQ0FBQSxBQUFNLGNBQU4sQUFBb0IseUJBM0tMLEFBMktmLEFBQTZDLEFBRTdDOztXQUFBLEFBQU8sVUE3S1YsQUFBa0IsQUE2S2YsQUFBaUI7R0E3S3JCLEFBQUMsQUErS0MiLCJmaWxlIjoiVHJlZUNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5vZGVDb25maWcgZnJvbSBcIi4vTm9kZUNvbmZpZ1wiO1xuaW1wb3J0IElubGluZVN0eWxlIGZyb20gXCIuLi8uLi9jb25maWdzL0lubGluZVN0eWxlXCI7XG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBUcmVlQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwibm9kZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXJcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub2RlT3Blbkljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJmYSBmYS1mb2xkZXItb3BlblwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxlYWZJY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVhZk9wZW5JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtZmlsZS10ZXh0LW9cIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVEYXRhVHlwZUljb25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibm9kZVBhZGRpbmdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIyMHB4XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3ROb2RlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgTm9kZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvb3RTdHlsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9kZVN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGVhZlN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVMZWFmU3R5bGU6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5jaFN0eWxlOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgSW5saW5lU3R5bGUoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlU2VsZWN0aW9uOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCAgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2V0RGF0YVR5cGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubm9kZVN0eWxlLmRpc3BsYXkuc3RhdGUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5ub2RlU3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWFmU3R5bGUuZGlzcGxheS5zdGF0ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLmxlYWZTdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcImdyZWVuXCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZlTGVhZlN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCIgOiBcIm9yYW5nZVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gW107XG4gICAgfVxuXG5cbiAgICB2YXIgcCA9IFRyZWVDb25maWcucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gbWVyZ2VJbnRvIChpbnRvLCBvYmopIHtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGludG9bYXR0cl0gPSBvYmpbYXR0cl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludG87XG4gICAgfVxuXG4gICAgcC5nZXRMZWFmU3R5bGUgPSBmdW5jdGlvbihvcGVuLCBhY3RpdmUpe1xuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmxlYWZTdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICBpZihvcGVuKXtcbiAgICAgICAgICAgIG1lcmdlSW50byhzdHlsZSx0aGlzLnNlbGVjdGVkTGVhZlN0eWxlLmdldFN0eWxlRm9yKCkpXG4gICAgICAgICAgICBpZihhY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlSW50byhzdHlsZSx0aGlzLmFjdGl2ZUxlYWZTdHlsZS5nZXRTdHlsZUZvcigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKHBhcmVudE5vZGUsb3Blbk5vZGVzKXtcbiAgICAgICAgdmFyIG5vZGVzID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5nZXRPYmplY3RzKCk7XG4gICAgICAgIGlmKG5vZGVzICYmIG5vZGVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgICAgIHZhciBub2RlSW5kZXggPSBvcGVuTm9kZXMuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBpZihub2RlSW5kZXggPiAtMSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Ob2Rlcy5zcGxpY2Uobm9kZUluZGV4LDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDaGlsZHJlblN0YXRlVG9PcGVuKG5vZGUsb3Blbk5vZGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90by1kbyBkbyB0aGlzIGZvciBlbnRpcmUgdHJlZSByYXRoZXIgb25seSBmb3IgdGhlIGZpcnN0IGNoaWxkXG4gICAgcC5zZXREZWZhdWx0Tm9kZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKG5vZGVzTGFiZWwpe1xuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RlZE5vZGVzID0gbm9kZXNMYWJlbFxuICAgICAgICAvL3NldENoaWxkcmVuU3RhdGVUb09wZW4odGhpcy5yb290Tm9kZSxub2Rlc0xhYmVsKVxuICAgIH1cblxuICAgIC8vdG8tZG8gZG8gdGhpcyBmb3IgZW50aXJlIHRyZWUgcmF0aGVyIG9ubHkgZm9yIHRoZSBmaXJzdCBjaGlsZFxuICAgIHAuc2V0T3Blbk5vZGVzID0gZnVuY3Rpb24obm9kZXNMYWJlbCl7XG4gICAgICAgIHZhciByb290Tm9kZXMgPSB0aGlzLnJvb3ROb2RlLmNoaWxkcmVuLmdldE9iamVjdHMoKTtcbiAgICAgICAgcm9vdE5vZGVzLm1hcChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgIGlmKG5vZGVzTGFiZWwuaW5kZXhPZihub2RlLmxhYmVsLnN0YXRlKSA+IC0xKXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBub2RlLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpXG5cbiAgICB9XG5cbiAgICBwLmNoYW5nZUFjdGl2ZU5vZGUgPSBmdW5jdGlvbiAobm9kZUNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBpZighdGhpcy5hbGxvd011bHRpcGxlU2VsZWN0aW9uLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZU5vZGUgIT09IG5vZGVDb25maWcpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlTm9kZUNoaWxkID0gdGhpcy5hY3RpdmVOb2RlLmNoaWxkcmVuLmdldE5hbWUobm9kZUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFhY3RpdmVOb2RlQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGUub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUgPSBub2RlQ29uZmlnO1xuICAgICAgICB0aGlzLmFjdGl2ZU5vZGUuYWN0aXZlLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwLmdldEZpbGVJY29uID0gZnVuY3Rpb24gKGRhdGEsaXNPcGVuKSB7XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5lbmFibGVEYXRhVHlwZUljb24udmFsdWUpe1xuICAgICAgICAgICAgICAgIHZhciBkYXRUeXBlID0gdGhpcy5nZXREYXRhVHlwZSA/IHRoaXMuZ2V0RGF0YVR5cGUoZGF0YSkgOiBkYXRhLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVR5cGVzTWFwICYmIHRoaXMuZGF0YVR5cGVzTWFwW2RhdFR5cGVdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhVHlwZXNNYXBbZGF0VHlwZV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPcGVuID8gdGhpcy5sZWFmT3Blbkljb24udmFsdWUgOiB0aGlzLmxlYWZJY29uLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcC5nZXRGb2xkZXJJY29uID0gZnVuY3Rpb24gKCBpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGlzT3BlbiA/IHRoaXMubm9kZU9wZW5JY29uLnZhbHVlIDogdGhpcy5ub2RlSWNvbi52YWx1ZTtcbiAgICB9XG5cblxuICAgIC8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuICAgIFdlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuVHJlZUNvbmZpZycsIFRyZWVDb25maWcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBUcmVlQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _ModalConfig = __webpack_require__(19);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(21);

	var _ModalPanel2 = _interopRequireDefault(_ModalPanel);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Modal = function (_React$Component) {
	    _inherits(Modal, _React$Component);

	    function Modal(props) {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _ModalConfig2.default();
	        _this.openModal = _this.openModal.bind(_this);

	        return _this;
	    }

	    _createClass(Modal, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.open.addImmediateCallback(this, this.forceUpdate);
	            this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.open.removeCallback(this, this.forceUpdate);
	            this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "openModal",
	        value: function openModal() {
	            this.settings.open.value = true;
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings.open.removeCallback(this, this.forceUpdate);
	                this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
	                this.settings = nextProps.settings;
	                this.settings.open.addImmediateCallback(this, this.forceUpdate);
	                this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var isOpen = this.settings.open.value;
	            var overlay = _Style2.default.overlayContainer(isOpen);
	            var modal = _Style2.default.modal(isOpen);
	            var modalButtonUI = "";
	            var modalPanelUI = "";
	            if (isOpen) {
	                modalPanelUI = _react2.default.createElement(_ModalPanel2.default, { title: this.props.title, sessionOpen: this.settings.open, settings: this.settings.panelConfig }, this.props.children);
	            }

	            if (!this.props.keyPress) {
	                if (this.settings.buttonIcon.value) {
	                    modalButtonUI = _react2.default.createElement("span", { style: { cursor: "pointer" }, onClick: this.openModal }, _react2.default.createElement("i", { className: this.settings.buttonIcon.value }));
	                } else {
	                    modalButtonUI = _react2.default.createElement("span", { type: "button", className: "btn btn-primary", onClick: this.openModal }, "Open");
	                }
	            }
	            return _react2.default.createElement("span", null, modalButtonUI, _react2.default.createElement("div", { style: overlay }), _react2.default.createElement("div", { style: modal }, modalPanelUI));
	        }
	    }]);

	    return Modal;
	}(_react2.default.Component);

	exports.default = Modal;
	//# sourceMappingURL=data:application/json;base64,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Qix3Q0FBTSxNQUFBLEFBQUssVUFBUyxXQUFBLEFBQVUsbUJBQWtCLFNBQVMsS0FBekQsQUFBeUQsQUFBSyxhQUx0RixBQUNJLEFBR0ksQUFDQSxBQUlSOzs7bUJBQVEsNENBQUEsQUFDUyxlQUVELHVDQUFLLE9BSGIsQUFHUSxBQUFLLEFBQU8sWUFDWix1Q0FBSyxPQUFMLEFBQUssQUFBTyxTQXpCbkIsQUFxQlQsQUFBUSxBQUlRLEFBQ0s7Ozs7V0EvRG5CO0VBQWMsZ0JBQUEsQUFBTTs7a0JBc0VYIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBNb2RhbENvbmZpZyBmcm9tIFwiLi9Nb2RhbENvbmZpZ1wiO1xuaW1wb3J0IE1vZGFsUGFuZWwgZnJvbSBcIi4vTW9kYWxQYW5lbFwiO1xuXG5cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsQ29uZmlnKCk7XG4gICAgICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vcGVuLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub3Blbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgIHZhciBpc09wZW4gPSB0aGlzLnNldHRpbmdzLm9wZW4udmFsdWU7XG4gICAgdmFyIG92ZXJsYXkgPSBTdHlsZS5vdmVybGF5Q29udGFpbmVyKGlzT3Blbik7XG4gICAgdmFyIG1vZGFsID0gU3R5bGUubW9kYWwoaXNPcGVuKTtcbiAgICB2YXIgbW9kYWxCdXR0b25VSSA9IFwiXCI7XG4gICAgdmFyIG1vZGFsUGFuZWxVSSA9IFwiXCI7XG4gICAgaWYoaXNPcGVuKXtcbiAgICAgICAgbW9kYWxQYW5lbFVJID0gPE1vZGFsUGFuZWwgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9ICBzZXNzaW9uT3Blbj17dGhpcy5zZXR0aW5ncy5vcGVufSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5wYW5lbENvbmZpZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsUGFuZWw+XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLmtleVByZXNzKXtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5idXR0b25JY29uLnZhbHVlKXtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT48aSBjbGFzc05hbWU9e3RoaXMuc2V0dGluZ3MuYnV0dG9uSWNvbi52YWx1ZX0+PC9pPjwvc3Bhbj47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uVUkgPSA8c3BhbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9Pk9wZW48L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuICg8c3BhbiA+XG4gICAgICAgICAgICAgICAgICAgIHttb2RhbEJ1dHRvblVJfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e292ZXJsYXl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsUGFuZWxVSX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _ModalPanelConfig = __webpack_require__(20);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(function (module) {

	    function ModalConfig() {

	        Object.defineProperties(this, {
	            "panelConfig": {
	                value: Weave.linkableChild(this, new _ModalPanelConfig2.default())
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "buttonIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });
	    }

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.ModalConfig', ModalConfig);

	    module.exports = ModalConfig;
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjsyQkFBZSxBQUNYO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sdUJBRHJDLEFBQ0ksQUFBTyxBQUVYOztvQkFBUSxBQUNKO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBaUMsQUFFdEU7OzBCQUFjLEFBQ1Y7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFaL0MsQUFFZixBQUF1QixBQUVuQixBQU9JLEFBQ0ksQUFBTyxBQUEwQixBQUFnQzs7O1dBVnRELEFBRW5COzs7O0FBSlcsQUFFZixTQWtCQSxDQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFwQkwsQUFvQmYsQUFBOEMsQUFFOUM7O1dBQUEsQUFBTyxVQXRCVixBQUFrQixBQXNCZixBQUFpQjtHQXRCckIsQUFBQyxBQXdCQyIsImZpbGUiOiJNb2RhbENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFdlYXZlIGZyb20gJ1dlYXZlJztcbmltcG9ydCB3ZWF2ZWpzIGZyb20gJ3dlYXZlanMnOyovXG5cbmltcG9ydCBNb2RhbFBhbmVsQ29uZmlnIGZyb20gXCIuL01vZGFsUGFuZWxDb25maWdcIjtcblxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIE1vZGFsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwicGFuZWxDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBNb2RhbFBhbmVsQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJidXR0b25JY29uXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbENvbmZpZycsIE1vZGFsQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTW9kYWxDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	(function (module) {

	    function ModalPanelConfig() {

	        Object.defineProperties(this, {

	            "title": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });

	        Object.defineProperties(this, {
	            "width": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("60%"))
	            },
	            "height": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("80%"))
	            },
	            "marginLeft": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
	            },
	            "marginTop": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("0"))
	            },
	            "left": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
	            },
	            "top": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("20%"))
	            }

	        });
	    }

	    var p = ModalPanelConfig.prototype;

	    p.getLayoutState = function () {
	        return {
	            "top": this.top.value,
	            "left": this.left.value,
	            "marginTop": this.marginTop.value,
	            "marginLeft": this.marginLeft.value,
	            "width": this.width.value,
	            "height": this.height.value
	        };
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.ModalPanelConfig', ModalPanelConfig);

	    module.exports = ModalPanelConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsUGFuZWxDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUUxQjs7cUJBQVMsQUFDTDt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUxsQyxBQUV4QixBQUVJLEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUt6RTs7O1dBVndCLEFBRXhCOztlQVFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMxQjtxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7OzBCQUFjLEFBQ1Y7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBRXJFOzt5QkFBYSxBQUNUO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGVBRHRELEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQUVyRTs7b0JBQVEsQUFDSjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBZ0MsQUFFckU7O21CQUFPLEFBQ0g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUEzQjlELEFBQTRCLEFBVXhCLEFBZ0JJLEFBQ0ksQUFBTyxBQUEwQixBQUFnQyxBQVE3RTs7Ozs7O1FBQUksSUFBSSxpQkFyQ08sQUFxQ1AsQUFBaUIsQUFFekI7O01BQUEsQUFBRTtlQUNTLEFBQ0g7bUJBQU8sS0FBQSxBQUFLLElBQUwsQUFBUyxBQUNoQjtvQkFBUSxLQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2xCO3lCQUFhLEtBQUEsQUFBSyxVQUFMLEFBQWUsQUFDNUI7MEJBQWMsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDOUI7cUJBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNwQjtzQkFBVSxLQUFBLEFBQUssT0E5Q1IsQUF1Q0ksQUFBWSxBQUMzQixBQU1jLEFBQVk7VUFQQyxBQUMzQjtLQURlOzs7QUF2Q0osQUFFZixTQWlEQSxDQUFBLEFBQU0sY0FBTixBQUFvQiwrQkFuREwsQUFtRGYsQUFBbUQsQUFFbkQ7O1dBQUEsQUFBTyxVQXJEVixBQUFrQixBQXFEZixBQUFpQjtHQXJEckIsQUFBQyxBQXVEQyIsImZpbGUiOiJNb2RhbFBhbmVsQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RhbFBhbmVsQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiNjAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiODAlXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIi0yMCVcIikpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCIwXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGVmdFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjQwJVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRvcFwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjIwJVwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgdmFyIHAgPSBNb2RhbFBhbmVsQ29uZmlnLnByb3RvdHlwZTtcblxuICAgIHAuZ2V0TGF5b3V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInRvcFwiOiB0aGlzLnRvcC52YWx1ZSxcbiAgICAgICAgICAgIFwibGVmdFwiOiB0aGlzLmxlZnQudmFsdWUsXG4gICAgICAgICAgICBcIm1hcmdpblRvcFwiOiB0aGlzLm1hcmdpblRvcC52YWx1ZSxcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiB0aGlzLm1hcmdpbkxlZnQudmFsdWUsXG4gICAgICAgICAgICBcIndpZHRoXCI6IHRoaXMud2lkdGgudmFsdWUsXG4gICAgICAgICAgICBcImhlaWdodFwiOiB0aGlzLmhlaWdodC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9UaGlzIEZ1bmN0aW9uIG1ha2VzIHRoaXMgY2xhc3MgYXMgU2Vzc2lvbkNsYXNzXG4gICAgV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5Nb2RhbFBhbmVsQ29uZmlnJywgTW9kYWxQYW5lbENvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1vZGFsUGFuZWxDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ModalPanelConfig = __webpack_require__(20);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ModalPanel = function (_React$Component) {
	    _inherits(ModalPanel, _React$Component);

	    function ModalPanel(props) {
	        _classCallCheck(this, ModalPanel);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalPanel).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _ModalPanelConfig2.default();
	        _this.settings.title.value = _this.props.title;
	        window.modalLayout = _this.settings; // for testing
	        _this.sessionOpen = _this.props.sessionOpen;

	        _this.state = _this.settings.getLayoutState();

	        _this.closeModal = _this.closeModal.bind(_this);
	        _this.updateState = _this.updateState.bind(_this);
	        return _this;
	    }

	    _createClass(ModalPanel, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.settings).addImmediateCallback(this, this.updateState);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings).removeCallback(this, this.updateState);
	        }
	    }, {
	        key: "updateState",
	        value: function updateState() {
	            this.setState(this.settings.getLayoutState());
	        }
	    }, {
	        key: "closeModal",
	        value: function closeModal() {
	            this.sessionOpen.value = false;
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                Weave.getCallbacks(this.settings).removeCallback(this, this.updateState);
	                this.settings = nextProps.settings;
	                Weave.getCallbacks(this.settings).addImmediateCallback(this, this.updateState);
	            }
	            if (this.props.title !== nextProps.title) {
	                this.settings.title.value = this.props.title;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
	            var layoutStyle = this.settings.getLayoutState(); // this will make sure we get new object everytime

	            var bodyStyle = {
	                height: this.settings.height.value,
	                width: "100%",
	                overflowY: 'scroll',
	                overflowX: 'hidden'
	            };

	            layoutStyle["position"] = 'fixed';
	            this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

	            return _react2.default.createElement("div", { style: layoutStyle }, _react2.default.createElement("div", { className: "modal-content" }, _react2.default.createElement("div", { className: "modal-header" }, _react2.default.createElement("button", { type: "button", className: "close", onClick: this.closeModal }, "×"), _react2.default.createElement("h4", { className: "modal-title" }, this.settings.title.value)), _react2.default.createElement("div", { className: "modal-body", style: bodyStyle }, this.props.children)));
	        }
	    }]);

	    return ModalPanel;
	}(_react2.default.Component);

	exports.default = ModalPanel;
	//# sourceMappingURL=data:application/json;base64,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LGlCQUFlLEtBQUEsQUFBSyxTQUFMLEFBQWMsTUFIbkQsQUFDSSxBQUVpQyxBQUFvQixTQUVyRCx1Q0FBSyxXQUFBLEFBQVUsY0FBYSxPQUE1QixBQUE0QixBQUFPLGFBQzlCLEtBQUEsQUFBSyxNQXJCakIsQUFjVCxBQUFRLEFBQ0ksQUFNUyxBQUFXOzs7O1dBL0Q5QjtFQUFtQixnQkFBQSxBQUFNOztrQkF1RWhCIiwiZmlsZSI6Ik1vZGFsUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsUGFuZWxDb25maWcgZnJvbSBcIi4vTW9kYWxQYW5lbENvbmZpZ1wiO1xuXG5cbmNsYXNzIE1vZGFsUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IE1vZGFsUGFuZWxDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHdpbmRvdy5tb2RhbExheW91dCA9IHRoaXMuc2V0dGluZ3M7Ly8gZm9yIHRlc3RpbmdcbiAgICAgICAgdGhpcy5zZXNzaW9uT3BlbiA9IHRoaXMucHJvcHMuc2Vzc2lvbk9wZW47XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKTtcblxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwgPSAgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUgPSAgdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc2V0dGluZ3MuZ2V0TGF5b3V0U3RhdGUoKSk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICB0aGlzLnNlc3Npb25PcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMudXBkYXRlU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVwZGF0ZVN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAvL3dlIGNvdWxkIGhhdmUgdXNlZCB0aGlzLnN0YXRlLmxheW91dCwgYnV0IHN0eWxlIG9mIGRpdiB3aWxsIGdldCB0aGUgc2FtZSByZWZlcmVuY2UsIHdoaWNoIGlzIGRlcHJlY2F0ZWQgaW4gcmVhY3RcbiAgICB2YXIgbGF5b3V0U3R5bGUgPSB0aGlzLnNldHRpbmdzLmdldExheW91dFN0YXRlKCk7Ly8gdGhpcyB3aWxsIG1ha2Ugc3VyZSB3ZSBnZXQgbmV3IG9iamVjdCBldmVyeXRpbWVcblxuICAgIHZhciBib2R5U3R5bGUgPSB7XG4gICAgICAgIGhlaWdodDp0aGlzLnNldHRpbmdzLmhlaWdodC52YWx1ZSxcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbidcbiAgICB9XG5cbiAgICBsYXlvdXRTdHlsZVtcInBvc2l0aW9uXCJdID0gJ2ZpeGVkJztcbiAgICAodGhpcy5zZXNzaW9uT3Blbi52YWx1ZSk/KGxheW91dFN0eWxlW1wiZGlzcGxheVwiXSA9ICdibG9jaycpOihsYXlvdXRTdHlsZVtcImRpc3BsYXlcIl0gPSAnbm9uZScpXG5cbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsUGFuZWw7XG4iXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _SplitPaneConfig = __webpack_require__(23);

	var _SplitPaneConfig2 = _interopRequireDefault(_SplitPaneConfig);

	var _Pane = __webpack_require__(25);

	var _Pane2 = _interopRequireDefault(_Pane);

	var _Resizer = __webpack_require__(26);

	var _Resizer2 = _interopRequireDefault(_Resizer);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	//code logic taken from https://github.com/tomkp/react-split-pane

	var SplitPane = function (_React$Component) {
	    _inherits(SplitPane, _React$Component);

	    function SplitPane(props) {
	        _classCallCheck(this, SplitPane);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SplitPane).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _SplitPaneConfig2.default();
	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        _this.onMouseMove = _this.onMouseMove.bind(_this);
	        _this.onMouseUp = _this.onMouseUp.bind(_this);
	        return _this;
	    }

	    _createClass(SplitPane, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.active.addGroupedCallback(this, this.forceUpdate);
	            this.settings.resized.addGroupedCallback(this, this.forceUpdate);
	            this.settings.position.addGroupedCallback(this, this.forceUpdate);
	            this.settings.unFocusCount.addImmediateCallback(this, this.unFocus);
	            document.addEventListener('mouseup', this.onMouseUp);
	            document.addEventListener('mousemove', this.onMouseMove);
	            var ref = this.refs.pane1;
	            if (ref && this.props.defaultSize && !this.settings.resized.value) {
	                this.settings.pane1.size.value = this.props.defaultSize;
	                //ref.setSessionState( this.props.defaultSize);
	            }
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.active.removeCallback(this, this.forceUpdate);
	            this.settings.resized.removeCallback(this, this.forceUpdate);
	            this.settings.position.removeCallback(this, this.forceUpdate);
	            this.settings.unFocusCount.removeCallback(this, this.unFocus);
	            document.removeEventListener('mouseup', this.onMouseUp);
	            document.removeEventListener('mousemove', this.onMouseMove);
	        }
	    }, {
	        key: "onMouseDown",
	        value: function onMouseDown(event) {
	            this.settings.updateUnFocus();
	            var position = this.props.split === 'vertical' ? event.clientX : event.clientY;
	            this.settings.position.value = position;
	            this.settings.active.value = true;
	        }
	    }, {
	        key: "onMouseMove",
	        value: function onMouseMove(event) {
	            if (this.settings.active.value) {
	                this.settings.updateUnFocus();
	                var ref = this.refs.pane1;
	                if (ref) {
	                    var node = _reactDom2.default.findDOMNode(ref);
	                    if (node.getBoundingClientRect) {
	                        var width = node.getBoundingClientRect().width;
	                        var height = node.getBoundingClientRect().height;
	                        var current = this.props.split === 'vertical' ? event.clientX : event.clientY;
	                        var size = this.props.split === 'vertical' ? width : height;
	                        var position = this.settings.position.value;

	                        var newSize = size - (position - current);

	                        this.settings.position.value = current;
	                        this.settings.resized.value = true;

	                        if (newSize >= this.props.minSize) {
	                            if (this.props.onChange) {
	                                this.props.onChange(newSize);
	                            }
	                            this.settings.pane1.size.value = newSize;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: "onMouseUp",
	        value: function onMouseUp() {
	            if (this.settings.active.value) {
	                if (this.props.onDragFinished) {
	                    this.props.onDragFinished();
	                }
	                this.settings.active.value = false;
	            }
	        }
	    }, {
	        key: "unFocus",
	        value: function unFocus() {
	            // need to be called change of session value so that we can see them in session Log
	            if (document.selection) {
	                document.selection.empty();
	            } else {
	                window.getSelection().removeAllRanges();
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings.active.removeCallback(this, this.forceUpdate);
	                this.settings.resized.removeCallback(this, this.forceUpdate);
	                this.settings.position.removeCallback(this, this.forceUpdate);
	                this.settings.unFocusCount.removeCallback(this, this.unFocus);
	                this.settings = nextProps.settings;
	                this.settings.active.addGroupedCallback(this, this.forceUpdate);
	                this.settings.resized.addGroupedCallback(this, this.forceUpdate);
	                this.settings.position.addGroupedCallback(this, this.forceUpdate);
	                this.settings.unFocusCount.addImmediateCallback(this, this.unFocus);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var split = this.props.split;

	            var styleObj = _Style2.default.appendVendorPrefix({
	                display: 'flex',
	                flex: 1,
	                position: 'relative',
	                outline: 'none',
	                overflow: 'hidden',
	                MozUserSelect: 'text',
	                WebkitUserSelect: 'text',
	                msUserSelect: 'text',
	                userSelect: 'text'
	            });

	            if (split === 'vertical') {
	                _Style2.default.mergeStyleObjects(styleObj, {
	                    flexDirection: 'row',
	                    height: '100%',
	                    position: 'absolute',
	                    left: 0,
	                    right: 0
	                }, true);
	            } else {
	                _Style2.default.mergeStyleObjects(styleObj, {
	                    flexDirection: 'column',
	                    height: '100%',
	                    minHeight: '100%',
	                    position: 'absolute',
	                    top: 0,
	                    bottom: 0,
	                    width: '100%'
	                }, true);
	            }
	            var children = this.props.children;

	            var classes = ['SplitPane', split];

	            return _react2.default.createElement("div", { className: classes.join(' '),
	                style: styleObj,
	                ref: "splitPane" }, _react2.default.createElement(_Pane2.default, { ref: "pane1",
	                key: "pane1",
	                split: split,
	                settings: this.settings.pane1 }, " ", children[0], " "), " ", _react2.default.createElement(_Resizer2.default, { ref: "resizer",
	                key: "resizer",
	                onMouseDown: this.onMouseDown,
	                split: split
	            }), " ", _react2.default.createElement(_Pane2.default, { ref: "pane2",
	                key: "pane2",
	                split: split,
	                settings: this.settings.pane2 }, " ", children[1], " "), " ");
	        }
	    }]);

	    return SplitPane;
	}(_react2.default.Component);

	SplitPane.defaultProps = {
	    minSize: 0,
	    split: "vertical"
	};

	exports.default = SplitPane;
	//# sourceMappingURL=data:application/json;base64,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dUJBQUEsQUFDSSxBQUVKO3FCQU5LLEFBTUwsQUFBTSxlQUNOLGdEQUFPLEtBQUEsQUFBTSxBQUNiO3FCQUFBLEFBQU0sQUFDTjt1QkFBQSxBQUNJLEFBRUo7MEJBQ0ksS0FBQSxBQUFLLFNBTlQsQUFNSSxBQUFjLGNBRWQsU0FSSixBQVFJLEFBQVMsSUFmUiw4REFnQmdCLEtBQUEsQUFBTSxBQUMzQjtxQkFBQSxBQUFNLEFBQ047NkJBQ0ksS0FBQSxBQUFLLEFBRVQ7dUJBckJLLEFBZ0JNLEFBS1gsQUFDSTthQU5PLENBaEJOLE9Bd0JGLGdEQUFPLEtBQUEsQUFBTSxBQUNoQjtxQkFBQSxBQUFNLEFBQ047dUJBQUEsQUFDSSxBQUVKOzBCQUNJLEtBQUEsQUFBSyxTQU5OLEFBTUMsQUFBYyxjQUVkLFNBUkQsQUFRQyxBQUFTLElBaENSLE1BdENKLEFBc0NMOzs7O1dBOUlGO0VBQWtCLGdCQUFBLEFBQU07O0FBb0w5QixVQUFBLEFBQVUsZUFBZSxBQUNyQjthQUFBLEFBQVMsQUFDVDtXQUZKLEFBRUksQUFBTzs7O2tCQUdJIiwiZmlsZSI6IlNwbGl0UGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IFNwbGl0UGFuZUNvbmZpZyBmcm9tIFwiLi9TcGxpdFBhbmVDb25maWdcIjtcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSc7XG5pbXBvcnQgUmVzaXplciBmcm9tICcuL1Jlc2l6ZXInO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBTcGxpdFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3MgOiBuZXcgU3BsaXRQYW5lQ29uZmlnKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudW5Gb2N1c0NvdW50LmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMudW5Gb2N1cyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZnMucGFuZTE7XG4gICAgICAgIGlmIChyZWYgJiYgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSAmJiAhdGhpcy5zZXR0aW5ncy5yZXNpemVkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRTaXplO1xuICAgICAgICAgICAgLy9yZWYuc2V0U2Vzc2lvblN0YXRlKCB0aGlzLnByb3BzLmRlZmF1bHRTaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5yZXNpemVkLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51cGRhdGVVbkZvY3VzKCk7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS52YWx1ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWN0aXZlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnVwZGF0ZVVuRm9jdXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucmVmcy5wYW5lMTtcbiAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUocmVmKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC5jbGllbnRYIDogZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMucHJvcHMuc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyB3aWR0aCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NpemUgPSBzaXplIC0gKHBvc2l0aW9uIC0gY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi52YWx1ZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVzaXplZC52YWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NpemUgPj0gdGhpcy5wcm9wcy5taW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhbmUxLnNpemUudmFsdWUgPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKCkge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuRm9jdXMoKSB7IC8vIG5lZWQgdG8gYmUgY2FsbGVkIGNoYW5nZSBvZiBzZXNzaW9uIHZhbHVlIHNvIHRoYXQgd2UgY2FuIHNlZSB0aGVtIGluIHNlc3Npb24gTG9nXG4gICAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBvc2l0aW9uLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy51bkZvY3VzQ291bnQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy51bkZvY3VzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlc2l6ZWQuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wb3NpdGlvbi5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnVuRm9jdXNDb3VudC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLnVuRm9jdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIFdlYmtpdFVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgICAgIG1zVXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgU3R5bGUubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmosIHtcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzKHN0eWxlT2JqLCB7XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsnU3BsaXRQYW5lJywgc3BsaXRdO1xuXG4gICAgICAgIHJldHVybiAoIDwgZGl2IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmpvaW4oJyAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZiA9IFwic3BsaXRQYW5lXCIgPlxuICAgICAgICAgICAgPCBQYW5lIHJlZiA9IFwicGFuZTFcIlxuICAgICAgICAgICAga2V5ID0gXCJwYW5lMVwiXG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMVxuICAgICAgICAgICAgfSA+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXVxuICAgICAgICAgICAgfSA8IC9QYW5lPiA8IFJlc2l6ZXIgcmVmID0gXCJyZXNpemVyXCJcbiAgICAgICAgICAgIGtleSA9IFwicmVzaXplclwiXG4gICAgICAgICAgICBvbk1vdXNlRG93biA9IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz4gPCBQYW5lIHJlZiA9IFwicGFuZTJcIlxuICAgICAgICAgICAga2V5ID0gXCJwYW5lMlwiXG4gICAgICAgICAgICBzcGxpdCA9IHtcbiAgICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYW5lMlxuICAgICAgICAgICAgfSA+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblsxXVxuICAgICAgICAgICAgfSA8IC9QYW5lPiA8IC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIG1pblNpemU6IDAsXG4gICAgc3BsaXQ6IFwidmVydGljYWxcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRQYW5lO1xuIl19

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _PaneConfig = __webpack_require__(24);

	var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	(function (module) {

	    function SplitPaneConfig() {

	        Object.defineProperties(this, {
	            "active": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "resized": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "position": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "pane1": {
	                value: Weave.linkableChild(this, new _PaneConfig2.default())
	            },
	            "pane2": {
	                value: Weave.linkableChild(this, new _PaneConfig2.default())
	            },
	            "unFocusCount": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
	            }

	        });
	    }

	    var p = SplitPaneConfig.prototype;

	    p.updateUnFocus = function () {
	        this.unFocusCount.value = this.unFocusCount.value + 1;
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.SplitPaneConfig', SplitPaneConfig);

	    module.exports = SplitPaneConfig;
	})(module); /*import Weave from 'Weave';
	            import weavejs from 'weavejs';*/
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwbGl0UGFuZUNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsQ0FBQyxVQUFBLEFBQVU7O2FBRVAsQUFBUzs7ZUFFTCxBQUFPLGlCQUFQLEFBQXdCLE1BQU0sQUFDMUI7c0JBQVUsQUFDTjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxnQkFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWlDLEFBRXRFOzt1QkFBVyxBQUNQO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FBUixBQUFhLGdCQUR0RCxBQUNJLEFBQU8sQUFBMEIsQUFBaUMsQUFFdEU7O3dCQUFZLEFBQ1I7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQUFSLEFBQWEsZUFEdEQsQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBRXJFOztxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0saUJBRHJDLEFBQ0ksQUFBTyxBQUVYOztxQkFBUyxBQUNMO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0saUJBRHJDLEFBQ0ksQUFBTyxBQUVYOzs0QkFBZ0IsQUFDWjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQW5COUQsQUFBMkIsQUFFdkIsQUFnQkksQUFDSSxBQUFPLEFBQTBCLEFBQWdDLEFBUzdFOzs7V0E1QjJCLEFBRXZCOzs7UUEwQkEsSUFBSSxnQkE5Qk8sQUE4QlAsQUFBZ0IsQUFFeEI7O01BQUEsQUFBRSw0QkFBNEIsQUFDMUI7YUFBQSxBQUFLLGFBQUwsQUFBa0IsUUFBUSxLQUFBLEFBQUssYUFBTCxBQUFrQixRQWpDakMsQUFnQ0csQUFBWSxBQUNBLEFBQTBCO0tBRHRDOzs7QUFoQ0gsQUFFZixTQXNDQSxDQUFBLEFBQU0sY0FBTixBQUFvQiw4QkF4Q0wsQUF3Q2YsQUFBa0QsQUFFbEQ7O1dBQUEsQUFBTyxVQTFDVixBQUFrQixBQTBDZixBQUFpQjtHQTFDckIsQUFBQyxBQTRDQyIsImZpbGUiOiJTcGxpdFBhbmVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuaW1wb3J0IFBhbmVDb25maWcgZnJvbSBcIi4vUGFuZUNvbmZpZ1wiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG4gICAgZnVuY3Rpb24gU3BsaXRQYW5lQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXNpemVkXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBhbmUxXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgUGFuZUNvbmZpZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFuZTJcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBQYW5lQ29uZmlnKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1bkZvY3VzQ291bnRcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG4gICAgdmFyIHAgPSBTcGxpdFBhbmVDb25maWcucHJvdG90eXBlO1xuXG4gICAgcC51cGRhdGVVbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuRm9jdXNDb3VudC52YWx1ZSA9IHRoaXMudW5Gb2N1c0NvdW50LnZhbHVlICsgMTtcbiAgICB9XG5cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlNwbGl0UGFuZUNvbmZpZycsIFNwbGl0UGFuZUNvbmZpZyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNwbGl0UGFuZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/*import Weave from 'Weave';
	import weavejs from 'weavejs';*/

	(function (module) {

	    function PaneConfig() {

	        Object.defineProperties(this, {

	            "size": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });
	    }

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.PaneConfig', PaneConfig);

	    module.exports = PaneConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxDQUFDLFVBQUEsQUFBVTs7YUFFUCxBQUFTOztlQUVMLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUUxQjs7b0JBQVEsQUFDSjt1QkFBTyxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFNLElBQUksUUFBQSxBQUFRLEtBQVIsQUFBYSxlQVAvQyxBQUVmLEFBQXNCLEFBRWxCLEFBRUksQUFDSSxBQUFPLEFBQTBCLEFBQWdDOzs7V0FMdkQsQUFFbEI7Ozs7QUFKVyxBQUVmLFNBZ0JBLENBQUEsQUFBTSxjQUFOLEFBQW9CLHlCQWxCTCxBQWtCZixBQUE2QyxBQUU3Qzs7V0FBQSxBQUFPLFVBcEJWLEFBQWtCLEFBb0JmLEFBQWlCO0dBcEJyQixBQUFDLEFBc0JDIiwiZmlsZSI6IlBhbmVDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCBXZWF2ZSBmcm9tICdXZWF2ZSc7XG5pbXBvcnQgd2VhdmVqcyBmcm9tICd3ZWF2ZWpzJzsqL1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAgIGZ1bmN0aW9uIFBhbmVDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcInNpemVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJcIikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG5cbiAgICAvL1RoaXMgRnVuY3Rpb24gbWFrZXMgdGhpcyBjbGFzcyBhcyBTZXNzaW9uQ2xhc3NcbiAgICBXZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0LlBhbmVDb25maWcnLCBQYW5lQ29uZmlnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gUGFuZUNvbmZpZztcblxufShtb2R1bGUpKTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _PaneConfig = __webpack_require__(24);

	var _PaneConfig2 = _interopRequireDefault(_PaneConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	//code logic taken from https://github.com/tomkp/react-split-pane

	var Pane = function (_React$Component) {
	    _inherits(Pane, _React$Component);

	    function Pane(props) {
	        _classCallCheck(this, Pane);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pane).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _PaneConfig2.default();
	        _this.setSessionState = _this.setSessionState.bind(_this);
	        //this.state ={};
	        return _this;
	    }

	    _createClass(Pane, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.settings.size.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.settings.size.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "setSessionState",
	        value: function setSessionState(size) {
	            this.settings.size.value = size;
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                this.settings.size.removeCallback(this, this.forceUpdate);
	                this.settings = nextProps.settings;
	                this.settings.size.addImmediateCallback(this, this.forceUpdate);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var split = this.props.split;
	            var classes = ['Pane', split];

	            var styleObj = _Style2.default.appendVendorPrefix({
	                flex: 1,
	                position: 'relative',
	                outline: 'none',
	                overflow: 'auto'
	            });

	            if (this.settings.size.value) {
	                if (split === 'vertical') {
	                    styleObj.width = this.settings.size.value;
	                } else {
	                    styleObj.height = this.settings.size.value;
	                    styleObj.display = 'flex';
	                }
	                styleObj.flex = 'none';
	            }

	            return _react2.default.createElement("div", { className: classes.join(' '), style: styleObj }, this.props.children);
	        }
	    }]);

	    return Pane;
	}(_react2.default.Component);

	exports.default = Pane;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU07b0JBRUY7O2FBRkUsQUFFRixLQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQixpQkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLGlCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBSDdCLEFBR2Y7O0FBSGUsZUFBbkI7OztpQkFGRTs7NENBU2lCLEFBQ2Y7aUJBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQixxQkFBbkIsQUFBd0MsTUFBSyxLQUQ5QixBQUNmLEFBQTZDLEFBQUs7Ozs7K0NBSTlCLEFBQ3BCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIsZUFBbkIsQUFBa0MsTUFBSyxLQURuQixBQUNwQixBQUF1QyxBQUFLOzs7O3dDQUdoQztpQkFDWixBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLFFBREYsQUFDakIsQUFBMkIsS0FEVixBQUNqQjs7OztrREFHc0IsV0FBVSxBQUNoQztnQkFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWEsVUFBQSxBQUFVO3FCQUNqQyxBQUFLLFNBQUwsQUFBYyxLQUFkLEFBQW1CLGVBQW5CLEFBQWtDLE1BQUssS0FERyxBQUMxQyxBQUF1QyxBQUFLLEFBQzVDO3FCQUFBLEFBQUssV0FBVyxVQUYwQixBQUUxQixBQUFVLEFBQzFCLFNBSDBDLEFBQzFDO3FCQUVBLEFBQUssU0FBTCxBQUFjLEtBQWQsQUFBbUIscUJBQW5CLEFBQXdDLE1BQUssS0FIakQsQUFBOEMsQUFHMUMsQUFBNkMsQUFBSzs7Ozs7OztnQkFNaEQsUUFBUSxLQUFBLEFBQUssTUFGZCxBQUVTLEFBQVcsQUFDekI7Z0JBQU0sVUFBVSxDQUFBLEFBQUMsUUFIWixBQUdDLEFBQVUsQUFBUyxBQUV6Qjs7MkNBQWUsQUFBTSxtQkFBbUIsQUFDcEM7c0JBQUEsQUFBTSxBQUNOOzBCQUFBLEFBQVUsQUFDVjt5QkFBQSxBQUFTLEFBQ1Q7MEJBVEMsQUFLRCxBQUFXLEFBSVgsQUFBVSxBQUtkO2FBVGUsQ0FBWCxDQUxDLEFBRUw7O2dCQVlJLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBZCxBQUFtQjtvQkFDZixVQUFBLEFBQVUsWUFBWSxBQUN0Qjs2QkFBQSxBQUFTLFFBQVEsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQURuQyxBQUEwQixBQUNMLEFBQW1CO3VCQUNqQyxBQUNIOzZCQUFBLEFBQVMsU0FBUyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBRDdCLEFBQ2UsQUFBbUIsQUFDckM7NkJBQUEsQUFBUyxVQUpiLEFBRU8sQUFFSCxBQUFtQixBQUV2Qjs7eUJBQUEsQUFBUyxPQVBiLEFBQThCLEFBTzFCLEFBQWdCLEFBR3BCLE9BVjhCLEFBQzFCOzs7bUJBU0ksdUNBQUssV0FBVyxRQUFBLEFBQVEsS0FBbkIsQUFBVyxBQUFhLE1BQU0sT0FBbkMsQUFBbUMsQUFBTyxZQUNyQyxLQUFBLEFBQUssTUF6QmIsQUF3QkwsQUFDYSxBQUFXOzs7O1dBdkQxQjtFQUFhLGdCQUFBLEFBQU07O2tCQTZEViIsImZpbGUiOiJQYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcbmltcG9ydCBQYW5lQ29uZmlnIGZyb20gXCIuL1BhbmVDb25maWdcIjtcblxuLy9jb2RlIGxvZ2ljIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3RvbWtwL3JlYWN0LXNwbGl0LXBhbmVcblxuY2xhc3MgUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzID8gdGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgUGFuZUNvbmZpZygpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb25TdGF0ZSA9IHRoaXMuc2V0U2Vzc2lvblN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vdGhpcy5zdGF0ZSA9e307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2l6ZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHNldFNlc3Npb25TdGF0ZShzaXplKXtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlID0gc2l6ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNpemUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ1BhbmUnLCBzcGxpdF07XG5cbiAgICAgICAgbGV0IHN0eWxlT2JqID0gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHtcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqLndpZHRoID0gdGhpcy5zZXR0aW5ncy5zaXplLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZU9iai5oZWlnaHQgPSB0aGlzLnNldHRpbmdzLnNpemUudmFsdWU7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmouZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlT2JqLmZsZXggPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlT2JqfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZTtcbiJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	//code logic taken from https://github.com/tomkp/react-split-pane

	var Resizer = function (_React$Component) {
	    _inherits(Resizer, _React$Component);

	    function Resizer(props) {
	        _classCallCheck(this, Resizer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Resizer).call(this, props));

	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        return _this;
	    }

	    _createClass(Resizer, [{
	        key: "onMouseDown",
	        value: function onMouseDown(event) {
	            this.props.onMouseDown(event);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var resizerStyle = {
	                boxSizing: "border-box",
	                background: "#000",
	                opacity: ".2",
	                zIndex: "1",
	                MozBackgroundClip: "padding",
	                WebkitBackgroundClip: "padding",
	                backgroundClip: "padding-box"
	            };

	            var split = this.props.split;
	            var splitStyle;
	            if (split === 'horizontal') {
	                splitStyle = {
	                    height: "11px",
	                    margin: "-5px 0",
	                    borderTop: "5px solid rgba(255, 255, 255, 0)",
	                    borderBottom: "5px solid rgba(255, 255, 255, 0)",
	                    cursor: "row-resize",
	                    width: "100%"
	                };
	            } else {
	                splitStyle = {
	                    width: "11px",
	                    margin: "0 -5px",
	                    borderLeft: "5px solid rgba(255, 255, 255, 0)",
	                    borderRight: "5px solid rgba(255, 255, 255, 0)",
	                    cursor: "col-resize",
	                    height: "100%"
	                };
	            }

	            _Style2.default.mergeStyleObjects(resizerStyle, splitStyle, true);

	            return _react2.default.createElement("span", { style: resizerStyle, onMouseDown: this.onMouseDown });
	        }
	    }]);

	    return Resizer;
	}(_react2.default.Component);

	exports.default = Resizer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlc2l6ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTt1QkFFRjs7YUFGRSxBQUVGLFFBQUEsQUFBWTs4QkFGVixBQUVpQjs7MkVBRmpCLG9CQUVpQixBQUNULEFBQ047O2NBQUEsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBRnJCLEFBRWY7ZUFGSixNQUFtQjs7O2lCQUZqQjs7b0NBU1U7aUJBQ1IsQUFBSyxNQUFMLEFBQVcsWUFESSxBQUNmLEFBQXVCLE9BRFIsQUFDZjs7Ozs7K0JBSW1CLEFBQ2Y7MkJBQUEsQUFBVyxBQUNYOzRCQUFBLEFBQVcsQUFDWDt5QkFBQSxBQUFTLEFBQ1Q7d0JBQUEsQUFBUSxBQUNSO21DQUFBLEFBQW1CLEFBQ25CO3NDQUFBLEFBQXNCLEFBQ3RCO2dDQVJDLEFBQ0QsQUFPQSxBQUFnQixBQUdwQjthQVZJLENBREMsQUFDTDs7Z0JBVU0sUUFBUSxLQUFBLEFBQUssTUFYZCxBQVdTLEFBQVcsQUFDekI7Z0JBWkssQUFZTCxBQUFJLEFBQ0o7Z0JBQUcsVUFBQSxBQUFVOzZCQUNLLEFBQ1Y7NEJBQUEsQUFBUSxBQUNSOzRCQUFBLEFBQVEsQUFDUjsrQkFBQSxBQUFXLEFBQ1g7a0NBQUEsQUFBYyxBQUNkOzRCQUFBLEFBQVEsQUFDUjsyQkFQUixBQUEwQixBQUN0QixBQU1JLEFBQU87a0JBUFcsQUFDdEI7OzZCQVNhLEFBQ1Q7MkJBQUEsQUFBTyxBQUNQOzRCQUFBLEFBQVEsQUFDUjtnQ0FBQSxBQUFZLEFBQ1o7aUNBQUEsQUFBYSxBQUNiOzRCQUFBLEFBQVEsQUFDUjs0QkFoQlIsQUFTSyxBQUNELEFBTUksQUFBUSxBQUloQjtrQkFYSyxBQUNEOzs7NEJBVUosQUFBTSxrQkFBTixBQUF3QixjQUF4QixBQUFxQyxZQWpDaEMsQUFpQ0wsQUFBZ0QsQUFHaEQ7O21CQUFRLHdDQUFNLE9BQUEsQUFBTyxjQUFjLGFBQWEsS0FwQzNDLEFBb0NMLEFBQVEsQUFBd0MsQUFBSzs7OztXQWpEdkQ7RUFBZ0IsZ0JBQUEsQUFBTTs7a0JBcURiIiwiZmlsZSI6IlJlc2l6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuXG4vL2NvZGUgbG9naWMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdG9ta3AvcmVhY3Qtc3BsaXQtcGFuZVxuXG5jbGFzcyBSZXNpemVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cblxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcmVzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XCIjMDAwXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiBcIi4yXCIsXG4gICAgICAgICAgICB6SW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgTW96QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZ1wiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzcGxpdCA9IHRoaXMucHJvcHMuc3BsaXQ7XG4gICAgICAgIHZhciBzcGxpdFN0eWxlO1xuICAgICAgICBpZihzcGxpdCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSAge1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMXB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIi01cHggMFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJyb3ctcmVzaXplXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNwbGl0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTFweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIC01cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiY29sLXJlc2l6ZVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBTdHlsZS5tZXJnZVN0eWxlT2JqZWN0cyhyZXNpemVyU3R5bGUsc3BsaXRTdHlsZSx0cnVlKTtcblxuXG4gICAgICAgIHJldHVybiAoPHNwYW4gc3R5bGU9e3Jlc2l6ZXJTdHlsZX0gb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259IC8+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemVyO1xuIl19

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Brand = __webpack_require__(28);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _Logo = __webpack_require__(30);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _Title = __webpack_require__(31);

	var _Title2 = _interopRequireDefault(_Title);

	var _List = __webpack_require__(32);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(34);

	var _Form2 = _interopRequireDefault(_Form);

	var _Link = __webpack_require__(33);

	var _Link2 = _interopRequireDefault(_Link);

	var _HTMLWrapper = __webpack_require__(29);

	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

	var _Config = __webpack_require__(35);

	var _Config2 = _interopRequireDefault(_Config);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Navbar = function (_React$Component) {
	    _inherits(Navbar, _React$Component);

	    function Navbar(props) {
	        _classCallCheck(this, Navbar);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _Config2.default.Navbar();
	        _this.getStyle = _this.getStyle.bind(_this);
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        _this.propsManager = new _PropsManager2.default();

	        return _this;
	    }

	    _createClass(Navbar, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	            if (this.props.children !== nextProps.children) {
	                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
	            }
	        }
	    }, {
	        key: "getStyle",
	        value: function getStyle() {
	            var styleObject = this.settings.style.getStyleFor(null);
	            if (styleObject["position"] === "fixed") {
	                if (this.settings.dock.value === "top") {
	                    styleObject["top"] = "0";
	                } else if (this.settings.dock.value === "bottom") {
	                    styleObject["bottom"] = "0";
	                } else if (this.settings.dock.value === "right") {
	                    styleObject["right"] = "0";
	                    styleObject["flexDirection"] = "column";
	                    styleObject["width"] = "5%";
	                    styleObject["height"] = "100%";
	                } else if (this.settings.dock.value === "left") {
	                    styleObject["left"] = "0";
	                    styleObject["flexDirection"] = "column";
	                    styleObject["width"] = "5%";
	                    styleObject["height"] = "100%";
	                }
	            }
	            return _Style2.default.appendVendorPrefix(styleObject);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.CSS).addImmediateCallback(this, this.forceUpdate);
	            this.settings.useCSS.addImmediateCallback(this, this.forceUpdate);
	            this.settings.dock.addImmediateCallback(this, this.forceUpdate);
	            this.settings.addGapAt.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.CSS).removeCallback(this, this.forceUpdate);
	            this.settings.useCSS.removeCallback(this, this.forceUpdate);
	            this.settings.dock.removeCallback(this, this.forceUpdate);
	            this.settings.addGapAt.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {

	            this.propsManager.addNewProps("dock", this.settings.dock.value);
	            this.propsManager.addNewProps("useCSS", this.settings.useCSS.value);
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var styleObj = this.getStyle();
	            var cssName = this.settings.CSS.getCSSFor();
	            var childrenUI = this.renderChildren();

	            if (this.settings.useCSS.value) {
	                return _react2.default.createElement("nav", { className: cssName }, childrenUI);
	            } else {
	                return _react2.default.createElement("nav", { className: cssName, style: styleObj }, childrenUI);
	            }
	        }
	    }]);

	    return Navbar;
	}(_react2.default.Component);

	Navbar.Brand = _Brand2.default;
	Navbar.Logo = _Logo2.default;
	Navbar.Title = _Title2.default;
	Navbar.List = _List2.default;
	Navbar.Link = _Link2.default;
	Navbar.Form = _Form2.default;

	_App2.default.registerToolConfig(Navbar, _Config2.default.Navbar);
	_App2.default.registerToolConfig(Navbar.Brand, _Config2.default.Brand);
	_App2.default.registerToolConfig(Navbar.Logo, _Config2.default.Logo);
	_App2.default.registerToolConfig(Navbar.Title, _Config2.default.Title);
	_App2.default.registerToolConfig(Navbar.List, _Config2.default.List);
	_App2.default.registerToolConfig(Navbar.Link, _Config2.default.Link);
	_App2.default.registerToolConfig(Navbar.Form, _Config2.default.Form);

	_App2.default.registerToolImplementation("weavereact.navbarConfig.Navbar", Navbar);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Brand", Navbar.Brand);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Logo", Navbar.Logo);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Title", Navbar.Title);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.List", Navbar.List);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Link", Navbar.Link);
	_App2.default.registerToolImplementation("weavereact.navbarConfig.Form", Navbar.Form);

	Weave.registerClass("weavereact.Navbar", Navbar, [weavejs.api.core.ILinkableObject]);

	exports.default = Navbar;
	//# sourceMappingURL=data:application/json;base64,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QkFBcEIsQUFBeUMsUUFBTyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBN0QsQUFBaUQsQUFBaUI7O2tCQUVuRCIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xuaW1wb3J0IEhUTUxXcmFwcGVyIGZyb20gXCIuLi9IVE1MV3JhcHBlclwiO1xuaW1wb3J0IG5hdmJhckNvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgSW5saW5lU3R5bGUgZnJvbSBcIi4uLy4uL2NvbmZpZ3MvSW5saW5lU3R5bGVcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4uL1Byb3BzTWFuYWdlclwiO1xuXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3MgPyB0aGlzLnByb3BzLnNldHRpbmdzIDogbmV3IG5hdmJhckNvbmZpZy5OYXZiYXIoKTtcbiAgICAgICAgdGhpcy5nZXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4uYmluZCh0aGlzKTtcbiAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcyA9IHRoaXMuYWRkQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzID0gdGhpcy5yZW1vdmVDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIgPSAgbmV3IFByb3BzTWFuYWdlcigpXG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAgZ2V0U3R5bGUoKSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbClcbiAgICAgICAgIGlmKHN0eWxlT2JqZWN0W1wicG9zaXRpb25cIl0gPT09IFwiZml4ZWRcIil7XG4gICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5kb2NrLnZhbHVlID09PSBcInRvcFwiKXtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcInRvcFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJib3R0b21cIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJib3R0b21cIl0gPSBcIjBcIjtcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUgPT09IFwicmlnaHRcIil7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJyaWdodFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2V0dGluZ3MuZG9jay52YWx1ZSA9PT0gXCJsZWZ0XCIpe1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wibGVmdFwiXSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W1wiZmxleERpcmVjdGlvblwiXSA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbXCJ3aWR0aFwiXSA9IFwiNSVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtcImhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0eWxlLmFwcGVuZFZlbmRvclByZWZpeChzdHlsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKVxuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuQ1NTKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnVzZUNTUy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmRvY2suYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRHYXBBdC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja3MoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLkNTUykucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy51c2VDU1MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5kb2NrLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWRkR2FwQXQucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpe1xuXG4gICAgICAgICB0aGlzLnByb3BzTWFuYWdlci5hZGROZXdQcm9wcyhcImRvY2tcIix0aGlzLnNldHRpbmdzLmRvY2sudmFsdWUpO1xuICAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJ1c2VDU1NcIix0aGlzLnNldHRpbmdzLnVzZUNTUy52YWx1ZSk7XG4gICAgICAgICByZXR1cm4gQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuZ2V0U3R5bGUoKTtcbiAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy51c2VDU1MudmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlblVJfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3NOYW1lfSBzdHlsZT17c3R5bGVPYmp9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuTmF2YmFyLkJyYW5kID0gQnJhbmQ7XG5OYXZiYXIuTG9nbyA9IExvZ287XG5OYXZiYXIuVGl0bGUgPSBUaXRsZTtcbk5hdmJhci5MaXN0ID0gTGlzdDtcbk5hdmJhci5MaW5rID0gTGluaztcbk5hdmJhci5Gb3JtID0gRm9ybTtcblxuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhcixuYXZiYXJDb25maWcuTmF2YmFyKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkJyYW5kLG5hdmJhckNvbmZpZy5CcmFuZCk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5Mb2dvLG5hdmJhckNvbmZpZy5Mb2dvKTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLlRpdGxlLG5hdmJhckNvbmZpZy5UaXRsZSk7XG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKE5hdmJhci5MaXN0LG5hdmJhckNvbmZpZy5MaXN0KTtcbkFwcC5yZWdpc3RlclRvb2xDb25maWcoTmF2YmFyLkxpbmssbmF2YmFyQ29uZmlnLkxpbmspO1xuQXBwLnJlZ2lzdGVyVG9vbENvbmZpZyhOYXZiYXIuRm9ybSxuYXZiYXJDb25maWcuRm9ybSk7XG5cbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLk5hdmJhclwiLE5hdmJhcik7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5CcmFuZFwiLE5hdmJhci5CcmFuZCk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Mb2dvXCIsTmF2YmFyLkxvZ28pO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuVGl0bGVcIixOYXZiYXIuVGl0bGUpO1xuQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uKFwid2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTGlzdFwiLE5hdmJhci5MaXN0KTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkxpbmtcIixOYXZiYXIuTGluayk7XG5BcHAucmVnaXN0ZXJUb29sSW1wbGVtZW50YXRpb24oXCJ3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Gb3JtXCIsTmF2YmFyLkZvcm0pO1xuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5OYXZiYXJcIiwgTmF2YmFyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG5cblxuXG4iXX0=

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _HTMLWrapper = __webpack_require__(29);

	var _HTMLWrapper2 = _interopRequireDefault(_HTMLWrapper);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Brand = function (_React$Component) {
	    _inherits(Brand, _React$Component);

	    function Brand(props) {
	        _classCallCheck(this, Brand);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Brand).call(this, props));

	        _this.settings = _this.props.settings;
	        _this.langSettings = _this.props && _this.props.langSettings ? _this.props.langSettings : null;
	        if (_this.props.children) _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);

	        return _this;
	    }

	    _createClass(Brand, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	            if (this.props.children !== nextProps.children) {
	                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            this.settings.title.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            if (this.langSettings) this.langSettings.addImmediateCallback(this, this.forceUpdate);
	            //this.settings.children.childListCallbacks.addGroupedCallback(this,this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            this.settings.title.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            if (this.langSettings) this.langSettings.removeCallback(this, this.forceUpdate);
	            //this.settings.children.childListCallbacks.removeCallback(this,this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                return true;
	            } else if (this.props.useCSS !== nextProps.useCSS) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(CSS) {
	            var childConfigs = this.settings.children.getObjects();
	            var clonedChildren = childConfigs.map(function (childConfig, index) {
	                var child = this.settings.configChildMap.get(childConfig);

	                if (child) {
	                    var props = _App2.default.mergeInto({}, child.props);
	                    if (typeof child.type === "string") {
	                        var configName = this.settings.children.getName(childConfig);
	                        return _react2.default.createElement(_HTMLWrapper2.default, { key: configName, settings: childConfig }, child);
	                    } else {
	                        props["settings"] = childConfig;
	                        if (CSS) {
	                            props["className"] = CSS[childName];
	                            props["CSS"] = CSS;
	                        }
	                        if (this.settings.childConfigMap.has(child)) this.settings.childConfigMap.delete(child);
	                        var clonedChild = _react2.default.cloneElement(child, props);
	                        this.settings.configChildMap.set(childConfig, clonedChild);
	                        this.settings.childConfigMap.set(clonedChild, childConfig);
	                        return clonedChild;
	                    }
	                } else {
	                    var configClass = Weave.getPath(childConfig).getType();
	                    var ToolClass = _App2.default.getToolImplementation(configClass);
	                    var configName = this.settings.children.getName(childConfig);
	                    var newChild = _react2.default.createElement(ToolClass, { key: configName, settings: childConfig });
	                    this.settings.configChildMap.set(childConfig, newChild);
	                    this.settings.childConfigMap.set(newChild, childConfig);
	                    return newChild;
	                }
	            }.bind(this));

	            return clonedChildren;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var BrandUI = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {
	                /*var title = this.settings.title.value;
	                 var titleStyle  = this.settings.style.getStyleFor();
	                if(this.langSettings){
	                    title = App.getTranslatedWord(this.settings.title.value);
	                }*/

	                var childrenUI = [];
	                if (this.props.useCSS) {
	                    childrenUI = this.renderChildren(this.props.css);

	                    BrandUI = _react2.default.createElement("div", { className: this.props.className }, childrenUI);
	                } else {
	                    var styleObject = this.settings.style.getStyleFor(null, true);
	                    childrenUI = this.renderChildren(null);
	                    BrandUI = _react2.default.createElement("div", { style: styleObject }, childrenUI);
	                }
	            }
	            return BrandUI;
	        }
	    }]);

	    return Brand;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Brand", Brand, [weavejs.api.core.ILinkableObject]);
	exports.default = Brand;
	//# sourceMappingURL=data:application/json;base64,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SyxTQUFMLEFBQWMsT0FBZCxBQUFxQjs7Ozs7OztvQkFRaEIsYUFSc0IsQUFRdEIsQUFBYSxBQUNqQixHQVQwQixBQVExQjtvQkFDRyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQU8sQUFDakI7aUNBQWEsS0FBQSxBQUFLLGVBQWUsS0FBQSxBQUFLLE1BRHJCLEFBQ2pCLEFBQWlDLEFBQVcsQUFFNUM7OzhCQUFVLHVDQUFLLFdBQVcsS0FBQSxBQUFLLE1BQXJCLEFBQWdCLEFBQVcsYUFIekMsQUFBcUIsQUFHakIsQUFBVSxBQUNHO3VCQUVaLEFBQ0Q7d0JBQUksY0FBYyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsWUFBcEIsQUFBZ0MsTUFEakQsQUFDRyxBQUFjLEFBQXFDLEFBQ3ZEO2lDQUFhLEtBQUEsQUFBSyxlQUZqQixBQUVELEFBQWEsQUFBb0IsQUFDakM7OEJBQVUsdUNBQUssT0FBTCxBQUFLLEFBQU8sZUFsQjlCLEFBU0ksQUFNSyxBQUdELEFBQVUsQUFDRyxBQUtyQjs7O21CQTNCSyxBQTJCTCxBQUFRLFFBM0JILEFBQ0w7Ozs7V0FoSEY7RUFBYyxnQkFBQSxBQUFNOztBQTZJMUIsTUFBQSxBQUFNLGNBQU4sQUFBb0IsMkJBQXBCLEFBQStDLE9BQU0sQ0FBQyxRQUFBLEFBQVEsSUFBUixBQUFZLEtBQWxFLEFBQXNELEFBQWlCO2tCQUN4RCIsImZpbGUiOiJCcmFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIVE1MV3JhcHBlciBmcm9tIFwiLi4vSFRNTFdyYXBwZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL3V0aWxzL0FwcFwiO1xuXG5jbGFzcyBCcmFuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICB0aGlzLmxhbmdTZXR0aW5ncyA9ICh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMubGFuZ1NldHRpbmdzKT90aGlzLnByb3BzLmxhbmdTZXR0aW5nczpudWxsO1xuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKUFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2V0dGluZ3MgIT09IG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgQXBwLmhvb2tTZXNzaW9uU3RhdGVGb3JDb21wb25lbnRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIGlmKHRoaXMubGFuZ1NldHRpbmdzKXRoaXMubGFuZ1NldHRpbmdzLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIC8vdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkR3JvdXBlZENhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVDYWxsYmFja3MgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBpZih0aGlzLmxhbmdTZXR0aW5ncyl0aGlzLmxhbmdTZXR0aW5ncy5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICAvL3RoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oQ1NTKXtcbiAgICAgICAgdmFyIGNoaWxkQ29uZmlncyA9IHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0T2JqZWN0cygpO1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGRyZW4gPSBjaGlsZENvbmZpZ3MubWFwKGZ1bmN0aW9uKGNoaWxkQ29uZmlnLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuZ2V0KGNoaWxkQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYoY2hpbGQpe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IEFwcC5tZXJnZUludG8oe30sY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGlsZC50eXBlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdOYW1lID0gIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uZ2V0TmFtZShjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SFRNTFdyYXBwZXIga2V5PXtjb25maWdOYW1lfSBzZXR0aW5ncz17Y2hpbGRDb25maWd9PntjaGlsZH08L0hUTUxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInNldHRpbmdzXCJdID0gY2hpbGRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGlmKENTUyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tcImNsYXNzTmFtZVwiXSA9IENTU1tjaGlsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJDU1NcIl0gPSBDU1M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5oYXMoY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZENvbmZpZ01hcC5kZWxldGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkQ2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbmZpZ0NoaWxkTWFwLnNldChjaGlsZENvbmZpZyxjbG9uZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRDb25maWdNYXAuc2V0KGNsb25lZENoaWxkLGNoaWxkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZENoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnQ2xhc3MgPSBXZWF2ZS5nZXRQYXRoKGNoaWxkQ29uZmlnKS5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgdmFyIFRvb2xDbGFzcyA9ICBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKGNvbmZpZ0NsYXNzKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnTmFtZSA9ICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmdldE5hbWUoY2hpbGRDb25maWcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZCA9IDxUb29sQ2xhc3Mga2V5PXtjb25maWdOYW1lfSAgc2V0dGluZ3M9e2NoaWxkQ29uZmlnfS8+O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuY29uZmlnQ2hpbGRNYXAuc2V0KGNoaWxkQ29uZmlnLG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkQ29uZmlnTWFwLnNldChuZXdDaGlsZCxjaGlsZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGlsZHJlbjtcblxuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBCcmFuZFVJID0gPGRpdi8+O1xuXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIC8qdmFyIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZTtcblxuICAgICAgICAgICAgdmFyIHRpdGxlU3R5bGUgID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgaWYodGhpcy5sYW5nU2V0dGluZ3Mpe1xuICAgICAgICAgICAgICAgIHRpdGxlID0gQXBwLmdldFRyYW5zbGF0ZWRXb3JkKHRoaXMuc2V0dGluZ3MudGl0bGUudmFsdWUpO1xuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlblVJID0gW11cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLmNzcyk7XG5cbiAgICAgICAgICAgICAgICBCcmFuZFVJID0gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgICAgICAgICAgQnJhbmRVSSA9IDxkaXYgc3R5bGU9e3N0eWxlT2JqZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKEJyYW5kVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5CcmFuZFwiLCBCcmFuZCxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuIl19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _HTMLWrapperConfig = __webpack_require__(12);

	var _HTMLWrapperConfig2 = _interopRequireDefault(_HTMLWrapperConfig);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLWrapper = function (_React$Component) {
	    _inherits(HTMLWrapper, _React$Component);

	    function HTMLWrapper(props) {
	        _classCallCheck(this, HTMLWrapper);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HTMLWrapper).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _HTMLWrapperConfig2.default();
	        _this.renderChildren = _this.renderChildren.bind(_this);
	        return _this;
	    }

	    _createClass(HTMLWrapper, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren(CSS) {
	            var clonedChildren = _react2.default.Children.map(this.props.children, function (child, index) {
	                var childName = "";
	                var props = _App2.default.mergeInto({}, child.props);
	                if (typeof child.type === "string") {
	                    childName = child.type + index;
	                    if (CSS) {
	                        props["className"] = this.props.className;
	                    } else {
	                        var styleConfig = this.settings.style;
	                        var styleObject = styleConfig.getStyleFor(null, true);
	                        props["style"] = child.props.style ? _Style2.default.mergeStyleObjects(styleObject, child.props.style, true) : styleObject;
	                    }
	                }
	                return _react2.default.cloneElement(child, props);
	            }, this);
	            return clonedChildren;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var childrenUI = [];
	            if (this.props.useCSS) {
	                childrenUI = this.renderChildren(this.props.CSS);
	            } else {
	                childrenUI = this.renderChildren(null);
	            }

	            return _react2.default.createElement("div", { style: this.props.style }, childrenUI);
	        }
	    }]);

	    return HTMLWrapper;
	}(_react2.default.Component);

	_App2.default.registerToolConfig(HTMLWrapper, _HTMLWrapperConfig2.default);
	_App2.default.registerToolImplementation("weavereact.HTMLWrapperConfig", HTMLWrapper);

	Weave.registerClass("weavereact.HTMLWrapper", HTMLWrapper, [weavejs.api.core.ILinkableObject]);

	exports.default = HTMLWrapper;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhUTUxXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007MkJBRUY7O2FBRkUsQUFFRixZQUFBLEFBQVk7OEJBRlYsQUFFaUI7OzJFQUZqQix3QkFFaUIsQUFDVCxBQUNOOztjQUFBLEFBQUssV0FBVyxNQUFBLEFBQUssTUFBTCxBQUFXLFdBQVcsTUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFTLHdCQUYzQyxBQUVDLEFBQ2hCO2NBQUEsQUFBSyxpQkFBaUIsTUFBQSxBQUFLLGVBQUwsQUFBb0IsS0FIM0IsQUFHZjtlQUhKLE1BQW1COzs7aUJBRmpCOzs0Q0FRaUIsQUFDZjtrQkFBQSxBQUFNLGFBQWEsS0FBbkIsQUFBbUIsQUFBSyxVQUF4QixBQUFrQyxtQkFBbEMsQUFBcUQsTUFBSyxLQUQzQyxBQUNmLEFBQTBELEFBQUs7Ozs7K0NBRzNDLEFBQ25CO2tCQUFBLEFBQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLFVBQXhCLEFBQWtDLGVBQWxDLEFBQWlELE1BQUssS0FEbkMsQUFDbkIsQUFBc0QsQUFBSzs7Ozt1Q0FHakQ7Z0JBQ1AsaUNBQWlCLEFBQU0sU0FBTixBQUFlLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBUyxBQUFTLE9BQVQsQUFBZTtvQkFDbkUsWUFEeUUsQUFDekUsQUFBWSxBQUNoQixHQUY2RSxBQUM3RTtvQkFDSSxRQUFRLGNBQUEsQUFBSSxVQUFKLEFBQWMsSUFBRyxNQUZnRCxBQUV6RSxBQUF5QixBQUFNLEFBQ25DO29CQUFHLE9BQU8sTUFBQSxBQUFNLFNBQWIsQUFBdUI7Z0NBQ1QsTUFBQSxBQUFNLE9BRFksQUFDbEIsQUFBYSxBQUMxQixNQUYrQixBQUMvQjt3QkFDQSxBQUFHLEtBQUksQUFDSDs4QkFBQSxBQUFNLGVBQWUsS0FBQSxBQUFLLE1BRDlCLEFBQU8sQUFDa0IsQUFBVzsyQkFFaEMsQUFDQTs0QkFBSSxjQUFjLEtBQUEsQUFBSyxTQUR2QixBQUNrQixBQUFjLEFBQ2hDOzRCQUFJLGNBQWMsWUFBQSxBQUFZLFlBQVosQUFBd0IsTUFGMUMsQUFFSSxBQUFjLEFBQTZCLEFBQy9DOzhCQUFBLEFBQU0sV0FBVyxNQUFBLEFBQU0sTUFBTixBQUFZLFFBQVEsZ0JBQUEsQUFBTyxrQkFBUCxBQUF5QixhQUFZLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckUsQUFBb0IsQUFBdUQsUUFScEcsQUFFSSxBQUdJLEFBR2lCLEFBQWtGLEFBRzNHOzs7dUJBQU8sZ0JBQUEsQUFBTSxhQUFOLEFBQW1CLE9BZDhCLEFBQXFCLEFBYzdFLEFBQU8sQUFBeUI7YUFkd0IsRUFEN0MsQUFDWCxBQUFpQixBQWVuQixBQUNGLElBaEJxQixFQUROLEFBQ2Y7bUJBRGUsQUFpQmYsQUFBTzs7Ozs7Z0JBSUgsYUFEQyxBQUNELEFBQWEsQUFDakIsR0FGSyxBQUNMO2dCQUNHLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBTyxBQUNqQjs2QkFBYSxLQUFBLEFBQUssZUFBZSxLQUFBLEFBQUssTUFEMUMsQUFBcUIsQUFDakIsQUFBaUMsQUFBVzttQkFDM0MsQUFDRDs2QkFBYSxLQUFBLEFBQUssZUFIdEIsQUFFSyxBQUNELEFBQWEsQUFBb0IsQUFHckM7OzttQkFBUSx1Q0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFqQixBQUFZLEFBQVcsU0FSMUIsQUFRTCxBQUFRLEFBQ0s7Ozs7V0E3Q2Y7RUFBb0IsZ0JBQUEsQUFBTTs7QUFtRGhDLGNBQUEsQUFBSSxtQkFBSixBQUF1QjtBQUN2QixjQUFBLEFBQUksMkJBQUosQUFBK0IsZ0NBQS9CLEFBQThEOztBQUU5RCxNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsYUFBWSxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBdkUsQUFBMkQsQUFBaUI7O2tCQUU3RCIsImZpbGUiOiJIVE1MV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgSFRNTFdyYXBwZXJDb25maWcgZnJvbSBcIi4uL2NvbmZpZ3MvSFRNTFdyYXBwZXJDb25maWdcIjtcblxuY2xhc3MgSFRNTFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncyA/IHRoaXMucHJvcHMuc2V0dGluZ3M6bmV3IEhUTUxXcmFwcGVyQ29uZmlnKCk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuKENTUyl7XG4gICAgICAgIHZhciBjbG9uZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLGZ1bmN0aW9uKGNoaWxkLGluZGV4KXtcbiAgICAgICAgICAgIHZhciBjaGlsZE5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gQXBwLm1lcmdlSW50byh7fSxjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hpbGQudHlwZSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNoaWxkTmFtZSA9ICBjaGlsZC50eXBlICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgaWYoQ1NTKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJjbGFzc05hbWVcIl0gPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlQ29uZmlnID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gc3R5bGVDb25maWcuZ2V0U3R5bGVGb3IobnVsbCx0cnVlKVxuICAgICAgICAgICAgICAgICAgICBwcm9wc1tcInN0eWxlXCJdID0gY2hpbGQucHJvcHMuc3R5bGUgPyBTdHlsZXMubWVyZ2VTdHlsZU9iamVjdHMoc3R5bGVPYmplY3QsY2hpbGQucHJvcHMuc3R5bGUsdHJ1ZSk6IHN0eWxlT2JqZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO1xuICAgICAgICB9LHRoaXMpO1xuICAgICAgICByZXR1cm4gY2xvbmVkQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2hpbGRyZW5VSSA9IFtdO1xuICAgICAgICBpZih0aGlzLnByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLkNTUyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2hpbGRyZW5VSSA9IHRoaXMucmVuZGVyQ2hpbGRyZW4obnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW5VSX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgfVxufVxuXG5BcHAucmVnaXN0ZXJUb29sQ29uZmlnKEhUTUxXcmFwcGVyLEhUTUxXcmFwcGVyQ29uZmlnKTtcbkFwcC5yZWdpc3RlclRvb2xJbXBsZW1lbnRhdGlvbihcIndlYXZlcmVhY3QuSFRNTFdyYXBwZXJDb25maWdcIixIVE1MV3JhcHBlcik7XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0LkhUTUxXcmFwcGVyXCIsIEhUTUxXcmFwcGVyLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MV3JhcHBlcjtcbiJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Logo = function (_React$Component) {
	    _inherits(Logo, _React$Component);

	    function Logo(props) {
	        _classCallCheck(this, Logo);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

	        _this.settings = _this.props.settings;
	        if (_this.props.style) _this.settings.style.domDefined.state = _this.props.style;
	        if (_this.props.src) _this.settings.src.state = _this.props.src;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Logo, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	            if (this.props.src !== nextProps.src) {
	                // user style added through UI is Sessioned
	                this.settings.src.state = nextProps.src;
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            this.settings.src.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            this.settings.src.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                return true;
	            } else if (this.props.useCSS !== nextProps.useCSS) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var logoUI = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {

	                var logoUI = "";
	                if (this.settings.src.state) {
	                    var styleObj = this.settings.style.getStyleFor();
	                    logoUI = _react2.default.createElement("img", { style: styleObj, src: this.settings.src.value });
	                }
	            }
	            return logoUI;
	        }
	    }]);

	    return Logo;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Logo", Logo, [weavejs.api.core.ILinkableObject]);
	exports.default = Logo;
	//# sourceMappingURL=data:application/json;base64,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LE1BQUwsQUFBVyxXQUFXLFVBQUEsQUFBVTt1QkFBbkMsQUFBMEMsQUFDNUMsQUFBTyxLQURxQyxBQUM1QzthQURFLE1BRUQsQUFDRDt1QkFIRSxBQUVELEFBQ0QsQUFBTzs7Ozs7O2dCQU1QLFNBQVMscUNBRFIsQUFDRCxBQUVKOztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUI7O29CQUVoQixTQUZzQixBQUV0QixBQUFTLEFBQ2IsR0FIMEIsQUFFMUI7b0JBQ0csS0FBQSxBQUFLLFNBQUwsQUFBYyxJQUFkLEFBQWtCLE9BQU0sQUFDdkI7d0JBQUksV0FBVyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BRE4sQUFDbkIsQUFBVyxBQUFvQixBQUNuQzs2QkFBUyx1Q0FBSyxPQUFBLEFBQU8sVUFBVSxLQUFLLEtBQUEsQUFBSyxTQUFMLEFBQWMsSUFMMUQsQUFHSSxBQUEyQixBQUV2QixBQUFTLEFBQTJCLEFBQWtCLEFBSTlEOzs7bUJBWkssQUFZTCxBQUFRLE9BWkgsQUFDTDs7OztXQWxFRjtFQUFhLGdCQUFBLEFBQU07O0FBZ0Z6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7a0JBQ3REIiwiZmlsZSI6IkxvZ28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlKVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zcmMpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSA9ICB0aGlzLnByb3BzLnNyYztcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3JjICE9PSBuZXh0UHJvcHMuc3JjKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNyYy5zdGF0ZSA9IG5leHRQcm9wcy5zcmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcyAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3JjLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kb2NrICE9PSBuZXh0UHJvcHMuZG9jayl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBuZXh0UHJvcHMucG9zaXRpb24pe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51c2VDU1MgIT09IG5leHRQcm9wcy51c2VDU1Mpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGxvZ29VSSA9IDxkaXYvPjtcblxuICAgICAgICBpZih0aGlzLnNldHRpbmdzLmVuYWJsZS52YWx1ZSl7XG5cbiAgICAgICAgICAgIHZhciBsb2dvVUkgPSBcIlwiO1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5zcmMuc3RhdGUpe1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZU9iaiA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IoKTtcbiAgICAgICAgICAgICAgICBsb2dvVUkgPSA8aW1nIHN0eWxlPXtzdHlsZU9ian0gc3JjPXt0aGlzLnNldHRpbmdzLnNyYy52YWx1ZX0vPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChsb2dvVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5Mb2dvXCIsIExvZ28sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl19

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Title = function (_React$Component) {
	    _inherits(Title, _React$Component);

	    function Title(props) {
	        _classCallCheck(this, Title);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));

	        _this.settings = _this.props.settings;
	        if (_this.props.style) _this.settings.style.domDefined.state = _this.props.style;
	        if (_this.props.title) _this.settings.title.state = _this.props.title;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Title, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	            if (this.props.title !== nextProps.title) {
	                // user style added through UI is Sessioned
	                if (nextProps.title) this.settings.title.state = nextProps.title;
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            this.settings.title.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            this.settings.title.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                return true;
	            } else if (this.props.useCSS !== nextProps.useCSS) {
	                return true;
	            } else if (this.props.title !== nextProps.title) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var titleUI = _react2.default.createElement("div", null);

	            if (this.settings.enable.value) {

	                var styleObj = this.settings.style.getStyleFor();
	                titleUI = _react2.default.createElement("span", { style: styleObj }, " ", this.settings.title.value);
	            }
	            return titleUI;
	        }
	    }]);

	    return Title;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Title", Title, [weavejs.api.core.ILinkableObject]);
	exports.default = Title;
	//# sourceMappingURL=data:application/json;base64,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RDthQURFLFVBRUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLFVBQUEsQUFBVTt1QkFBbkMsQUFBMEMsQUFDNUMsQUFBTyxLQURxQyxBQUM1QzthQURFLFVBRUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLFVBQUEsQUFBVTt1QkFBbEMsQUFBd0MsQUFDMUMsQUFBTyxLQURtQyxBQUMxQzthQURFLE1BRUQsQUFDRDt1QkFIRSxBQUVELEFBQ0QsQUFBTzs7Ozs7O2dCQU1QLFVBQVUscUNBRFQsQUFDRCxBQUVKOztnQkFBRyxLQUFBLEFBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsT0FBTSxBQUV0Qjs7b0JBQUksV0FBVyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BRlAsQUFFbEIsQUFBVyxBQUFvQixBQUNuQzswQkFBVSx3Q0FBTSxPQUFOLEFBQU0sQUFBTyxpQkFBWSxLQUFBLEFBQUssU0FBTCxBQUFjLE1BSHpELEFBQThCLEFBR3RCLEFBQW1DLEFBQW9CLEFBRy9EOzttQkFUSyxBQVNMLEFBQVEsUUFUSCxBQUNMOzs7O1dBdkVGO0VBQWMsZ0JBQUEsQUFBTTs7QUFrRjFCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDJCQUFwQixBQUErQyxPQUFNLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFsRSxBQUFzRCxBQUFpQjtrQkFDeEQiLCJmaWxlIjoiVGl0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcblxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSlcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudGl0bGUpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnN0YXRlID0gIHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3R5bGUgIT09IG5leHRQcm9wcy5zdHlsZSl7Ly8gdXNlciBzdHlsZSBhZGRlZCB0aHJvdWdoIFVJIGlzIFNlc3Npb25lZFxuICAgICAgICAgICAgaWYobmV4dFByb3BzLnN0eWxlKXRoaXMuc2V0dGluZ3Muc3R5bGUuZG9tRGVmaW5lZC5zdGF0ZSA9IG5leHRQcm9wcy5zdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50aXRsZSl0aGlzLnNldHRpbmdzLnRpdGxlLnN0YXRlID0gbmV4dFByb3BzLnRpdGxlO1xuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIGFkZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrcyAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudGl0bGUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpdGxlVUkgPSA8ZGl2Lz47XG5cbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlT2JqID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcigpO1xuICAgICAgICAgICAgICAgIHRpdGxlVUkgPSA8c3BhbiBzdHlsZT17c3R5bGVPYmp9PiB7dGhpcy5zZXR0aW5ncy50aXRsZS52YWx1ZX08L3NwYW4+XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRpdGxlVUkpO1xuICAgIH1cbn1cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoXCJ3ZWF2ZXJlYWN0Lm5hdmJhci5UaXRsZVwiLCBUaXRsZSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIl19

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Link = __webpack_require__(33);

	var _Link2 = _interopRequireDefault(_Link);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var List = function (_React$Component) {
	    _inherits(List, _React$Component);

	    function List(props) {
	        _classCallCheck(this, List);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

	        _this.settings = _this.props.settings;
	        _App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        _this.propsManager = new _PropsManager2.default();
	        _this.updateRender = _this.updateRender.bind(_this);

	        return _this;
	    }

	    _createClass(List, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	            if (this.props.children !== nextProps.children) {
	                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            // Weave.getCallbacks(this.settings).addGroupedCallback(this,this.updateRender);
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.CSS).addImmediateCallback(this, this.forceUpdate);
	            this.settings.space.addImmediateCallback(this, this.forceUpdate);
	            this.settings.align.addImmediateCallback(this, this.forceUpdate);
	            this.settings.activePage.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "updateRender",
	        value: function updateRender() {
	            if (Weave.detectChange(this, this.settings.enable, this.settings.style, this.settings.space, this.settings.align, this.settings.activePage, this.settings.children.childListCallbacks)) {
	                this.forceUpdate();
	            }
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            //Weave.getCallbacks(this.settings).removeCallback(this,this.updateRender)
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.CSS).removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            this.settings.align.removeCallback(this, this.forceUpdate);
	            this.settings.activePage.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                return true;
	            } else if (this.props.useCSS !== nextProps.useCSS) {
	                return true;
	            } else if (Weave.detectChange(this, this.settings.space, this.settings.rightAlign, this.settings.activePage)) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            var linkStyleObject = {};
	            var iconOnly = false;
	            var space = this.settings.space.value;
	            if (this.props.dock === "right" || this.props.dock === "left") {
	                iconOnly = true;
	                linkStyleObject["marginBottom"] = space;
	            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
	                iconOnly = false;
	                linkStyleObject["marginRight"] = space;
	            }

	            this.propsManager.addNewProps("iconOnly", iconOnly);
	            this.propsManager.updateStyle(linkStyleObject);
	            this.propsManager.addKeyProps("pageName");
	            this.propsManager.addOddChild(this.settings.activePage.value, { isActive: "true" });
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var navLinks = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                var styleObject = this.settings.style.getStyleFor(null, true);
	                var cssName = this.settings.CSS.getCSSFor();
	                var childrenUI = this.renderChildren();

	                if (this.props.useCSS) {
	                    navLinks = _react2.default.createElement("ul", { className: cssName }, childrenUI);
	                } else {
	                    navLinks = _react2.default.createElement("ul", { className: cssName, style: styleObject }, childrenUI);
	                }
	            }

	            return navLinks;
	        }
	    }]);

	    return List;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.List", List, [weavejs.api.core.ILinkableObject]);
	exports.default = List;
	//# sourceMappingURL=data:application/json;base64,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QlosQUFBOEQsQUFBUyxBQUN2RTttQkFBUSxjQUFBLEFBQUksZUFBSixBQUFtQixNQUFLLEtBakJwQixBQWlCWixBQUFnQyxBQUFLOzs7OztnQkFNakMsV0FBVyxxQ0FEVixBQUNELEFBQ0o7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLE9BQU0sQUFDMUI7b0JBQUksY0FBYyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsWUFBcEIsQUFBZ0MsTUFEeEIsQUFDdEIsQUFBYyxBQUFxQyxBQUN2RDtvQkFBSSxVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsSUFGRixBQUV0QixBQUFVLEFBQWtCLEFBQ2hDO29CQUFJLGFBQWEsS0FIUyxBQUd0QixBQUFhLEFBQUssQUFHdEI7O29CQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBTyxBQUNqQjsrQkFBVyxzQ0FBSSxXQUFKLEFBQUksQUFBVyxXQUQ5QixBQUFxQixBQUNqQixBQUFXLEFBQXlCO3VCQUVwQyxBQUNBOytCQUFXLHNDQUFJLFdBQUEsQUFBVyxTQUFTLE9BQXhCLEFBQXdCLEFBQU8sZUFWbEQsQUFNSSxBQUdJLEFBQ0EsQUFBVyxBQUE2QyxBQU1oRTs7OzttQkFsQkssQUFrQkwsQUFBUSxTQWxCSCxBQUNMOzs7O1dBMUdGO0VBQWEsZ0JBQUEsQUFBTTs7QUErSHpCLE1BQUEsQUFBTSxjQUFOLEFBQW9CLDBCQUFwQixBQUE4QyxNQUFLLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUFoRSxBQUFvRCxBQUFpQjtrQkFDdEQiLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL1N0eWxlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi91dGlscy9BcHBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCBQcm9wc01hbmFnZXIgZnJvbSBcIi4uL1Byb3BzTWFuYWdlclwiO1xuXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9IG5ldyBQcm9wc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZW5kZXIgPSB0aGlzLnVwZGF0ZVJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgaWYobmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXh0UHJvcHMuc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnN0eWxlICE9PSBuZXh0UHJvcHMuc3R5bGUpey8vIHVzZXIgc3R5bGUgYWRkZWQgdGhyb3VnaCBVSSBpcyBTZXNzaW9uZWRcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zdHlsZSl0aGlzLnNldHRpbmdzLnN0eWxlLmRvbURlZmluZWQuc3RhdGUgPSBuZXh0UHJvcHMuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gbmV4dFByb3BzLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIEFwcC5ob29rU2Vzc2lvblN0YXRlRm9yQ29tcG9uZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuLHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpXG4gICAgfVxuXG4gICAgYWRkQ2FsbGJhY2tzKCl7XG4gICAgICAgLy8gV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLHRoaXMudXBkYXRlUmVuZGVyKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuQ1NTKS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZW5kZXIoKXtcbiAgICAgICAgaWYoV2VhdmUuZGV0ZWN0Q2hhbmdlKHRoaXMsdGhpcy5zZXR0aW5ncy5lbmFibGUsdGhpcy5zZXR0aW5ncy5zdHlsZSx0aGlzLnNldHRpbmdzLnNwYWNlLHRoaXMuc2V0dGluZ3MuYWxpZ24sdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzKSl7XG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbW92ZUNhbGxiYWNrcygpe1xuICAgICAgICAgLy9XZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncykucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVJlbmRlcilcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5lbmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIFdlYXZlLmdldENhbGxiYWNrcyh0aGlzLnNldHRpbmdzLnN0eWxlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3MuQ1NTKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hbGlnbi5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmNoaWxkcmVuLmNoaWxkTGlzdENhbGxiYWNrcy5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICB9XG5cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZihXZWF2ZS5kZXRlY3RDaGFuZ2UodGhpcyx0aGlzLnNldHRpbmdzLnNwYWNlLHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbix0aGlzLnNldHRpbmdzLmFjdGl2ZVBhZ2UpKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJlbmRlckNoaWxkcmVuKCl7XG4gICAgICAgIHZhciBsaW5rU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBpY29uT25seSA9IGZhbHNlO1xuICAgICAgICB2YXIgc3BhY2UgPSB0aGlzLnNldHRpbmdzLnNwYWNlLnZhbHVlO1xuICAgICAgICBpZigodGhpcy5wcm9wcy5kb2NrID09PSBcInJpZ2h0XCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwibGVmdFwiKSl7XG4gICAgICAgICAgICBpY29uT25seSA9IHRydWU7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGljb25Pbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBsaW5rU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkTmV3UHJvcHMoXCJpY29uT25seVwiLGljb25Pbmx5KTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIudXBkYXRlU3R5bGUobGlua1N0eWxlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkS2V5UHJvcHMoXCJwYWdlTmFtZVwiKTtcbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIuYWRkT2RkQ2hpbGQodGhpcy5zZXR0aW5ncy5hY3RpdmVQYWdlLnZhbHVlLHtpc0FjdGl2ZTpcInRydWVcIn0pO1xuICAgICAgICByZXR1cm4gIEFwcC5yZW5kZXJDaGlsZHJlbih0aGlzLHRoaXMucHJvcHNNYW5hZ2VyKVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZMaW5rcyA9IDxkaXYvPjtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5lbmFibGUudmFsdWUpe1xuICAgICAgICAgICAgdmFyIHN0eWxlT2JqZWN0ID0gdGhpcy5zZXR0aW5ncy5zdHlsZS5nZXRTdHlsZUZvcihudWxsLHRydWUpO1xuICAgICAgICAgICAgdmFyIGNzc05hbWUgPSB0aGlzLnNldHRpbmdzLkNTUy5nZXRDU1NGb3IoKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlblVJID0gdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9PntjaGlsZHJlblVJfTwvdWw+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBuYXZMaW5rcyA9IDx1bCBjbGFzc05hbWU9e2Nzc05hbWV9IHN0eWxlPXtzdHlsZU9iamVjdH0+e2NoaWxkcmVuVUl9PC91bD47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcmV0dXJuIChuYXZMaW5rcyk7XG4gICAgfVxuXG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlzdFwiLCBMaXN0LFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Link = function (_React$Component) {
	    _inherits(Link, _React$Component);

	    function Link(props) {
	        _classCallCheck(this, Link);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props));

	        _this.settings = _this.props.settings;
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        return _this;
	    }

	    _createClass(Link, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.title.addImmediateCallback(this, this.forceUpdate);
	            this.settings.iconName.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.title.removeCallback(this, this.forceUpdate);
	            this.settings.iconName.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var title = this.settings.title.value;
	            if (this.props.iconOnly) {
	                title = "";
	            }
	            var styleObject = this.settings.style.getStyleFor(null, true);
	            if (this.props.isActive) {

	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + title.toLowerCase() }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            } else {
	                return _react2.default.createElement("li", { style: this.props.style }, _react2.default.createElement("a", { style: styleObject, href: '#' + title.toLowerCase() }, _react2.default.createElement("i", { className: this.settings.iconName.value }, " "), title));
	            }
	        }
	    }]);

	    return Link;
	}(_react2.default.Component);

	Weave.registerClass("weavereact.navbar.Link", Link, [weavejs.api.core.ILinkableObject]);
	exports.default = Link;
	//# sourceMappingURL=data:application/json;base64,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TyxhQUFhLE1BQVEsTUFBTSxNQUFyQyxBQUErQixBQUFNLEFBQU0saUJBQ3ZDLHFDQUFHLFdBQWEsS0FBQSxBQUFLLFNBQUwsQUFBYyxTQUE5QixBQUFnQixBQUF1QixTQUQzQyxNQVhoQixBQVNPLEFBQ0gsQUFBUSxBQUNJLEFBRUs7Ozs7O1dBckV2QjtFQUFhLGdCQUFBLEFBQU07O0FBNEV6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7a0JBQ3REIiwiZmlsZSI6IkxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MgPSB0aGlzLmFkZENhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcyA9IHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIGFkZENhbGxiYWNrcygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aXRsZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5pY29uTmFtZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRpdGxlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmljb25OYW1lLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnNldHRpbmdzLnRpdGxlLnZhbHVlO1xuICAgICAgICBpZih0aGlzLnByb3BzLmljb25Pbmx5KXtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGVPYmplY3QgPSB0aGlzLnNldHRpbmdzLnN0eWxlLmdldFN0eWxlRm9yKG51bGwsdHJ1ZSlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcblxuICAgICAgICAgICAgcmV0dXJuICggPGxpIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtzdHlsZU9iamVjdH0gaHJlZiA9IHsnIycgKyB0aXRsZS50b0xvd2VyQ2FzZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSB7dGhpcy5zZXR0aW5ncy5pY29uTmFtZS52YWx1ZX0+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3N0eWxlT2JqZWN0fSBocmVmID0geycjJyArIHRpdGxlLnRvTG93ZXJDYXNlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IHt0aGlzLnNldHRpbmdzLmljb25OYW1lLnZhbHVlfT4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5XZWF2ZS5yZWdpc3RlckNsYXNzKFwid2VhdmVyZWFjdC5uYXZiYXIuTGlua1wiLCBMaW5rLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgTGluaztcbiJdfQ==

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _PropsManager = __webpack_require__(16);

	var _PropsManager2 = _interopRequireDefault(_PropsManager);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Form = function (_React$Component) {
	    _inherits(Form, _React$Component);

	    function Form(props) {
	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

	        _this.settings = _this.props.settings;_App2.default.hookSessionStateForComponentChildren(_this.props.children, _this.settings);
	        _this.addCallbacks = _this.addCallbacks.bind(_this);
	        _this.removeCallbacks = _this.removeCallbacks.bind(_this);
	        _this.propsManager = new _PropsManager2.default();

	        return _this;
	    }

	    _createClass(Form, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.settings !== nextProps.settings) {
	                if (nextProps.settings) {
	                    this.removeCallbacks();
	                    this.settings = nextProps.settings;
	                    this.addCallbacks();
	                }
	            }
	            if (this.props.style !== nextProps.style) {
	                // user style added through UI is Sessioned
	                if (nextProps.style) this.settings.style.domDefined.state = nextProps.style;
	            }
	            if (this.props.children !== nextProps.children) {
	                _App2.default.hookSessionStateForComponentChildren(nextProps.children, this.settings);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.addCallbacks();
	        }
	    }, {
	        key: "addCallbacks",
	        value: function addCallbacks() {
	            this.settings.enable.addImmediateCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).addImmediateCallback(this, this.forceUpdate);
	            this.settings.rightAlign.addImmediateCallback(this, this.forceUpdate);
	            this.settings.space.addImmediateCallback(this, this.forceUpdate);
	            this.settings.addGapAt.addImmediateCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "removeCallbacks",
	        value: function removeCallbacks() {
	            this.settings.enable.removeCallback(this, this.forceUpdate);
	            Weave.getCallbacks(this.settings.style).removeCallback(this, this.forceUpdate);
	            this.settings.rightAlign.removeCallback(this, this.forceUpdate);
	            this.settings.space.removeCallback(this, this.forceUpdate);
	            this.settings.addGapAt.removeCallback(this, this.forceUpdate);
	            this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeCallbacks();
	        }
	    }, {
	        key: "renderChildren",
	        value: function renderChildren() {
	            var childStyleObject = {};
	            var space = this.settings.space.value;
	            if (this.props.dock === "right" || this.props.dock === "left") {
	                childStyleObject["marginBottom"] = space;
	            } else if (this.props.dock === "top" || this.props.dock === "bottom") {
	                childStyleObject["marginRight"] = space;
	            }

	            this.propsManager.updateStyle(childStyleObject);
	            this.propsManager.addKeyProps("pageName");
	            return _App2.default.renderChildren(this, this.propsManager);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps) {
	            if (this.props.dock !== nextProps.dock) {
	                return true;
	            } else if (this.props.position !== nextProps.position) {
	                return true;
	            } else if (this.props.useCSS !== nextProps.useCSS) {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var navFormUI = _react2.default.createElement("div", null);
	            if (this.settings.enable.value) {
	                var styleObject = this.settings.style.getStyleFor(null);
	                var cssName = this.settings.CSS.getCSSFor();
	                var childrenUI = this.renderChildren();

	                if (this.props.useCSS) {
	                    navFormUI = _react2.default.createElement("div", { className: cssName }, childrenUI);
	                } else {
	                    navFormUI = _react2.default.createElement("div", { style: styleObject }, childrenUI);
	                }
	            }

	            return navFormUI;
	        }
	    }]);

	    return Form;
	}(_react2.default.Component);

	Weave.registerClass('weavereact.navbar.Form', Form, [weavejs.api.core.ILinkableObject]);

	exports.default = Form;
	//# sourceMappingURL=data:application/json;base64,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TUFBTCxBQUFXLFdBQVcsVUFBQSxBQUFVO3VCQUFuQyxBQUEwQyxBQUM1QyxBQUFPLEtBRHFDLEFBQzVDO2FBREUsTUFFRCxBQUNEO3VCQUhFLEFBRUQsQUFDRCxBQUFPOzs7Ozs7Z0JBVVAsWUFBWSxxQ0FEWCxBQUNELEFBQ0o7Z0JBQUcsS0FBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLE9BQU0sQUFDMUI7b0JBQUksY0FBYyxLQUFBLEFBQUssU0FBTCxBQUFjLE1BQWQsQUFBb0IsWUFEWixBQUN0QixBQUFjLEFBQWdDLEFBQ2xEO29CQUFJLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxJQUZGLEFBRXRCLEFBQVUsQUFBa0IsQUFDaEM7b0JBQUksYUFBYSxLQUhTLEFBR3RCLEFBQWEsQUFBSyxBQUV0Qjs7b0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFPLEFBQ2pCO2dDQUFZLHVDQUFNLFdBQU4sQUFBTSxBQUFXLFdBRGpDLEFBQXFCLEFBQ2pCLEFBQVksQUFDSzt1QkFFaEIsQUFDRDtnQ0FBWSx1Q0FBTSxPQUFOLEFBQU0sQUFBTyxlQVZqQyxBQUtJLEFBSUssQUFDRCxBQUFZLEFBQ0ssQUFPekI7Ozs7bUJBcEJLLEFBb0JMLEFBQVEsVUFwQkgsQUFDTDs7OztXQXhGRjtFQUFhLGdCQUFBLEFBQU07O0FBZ0h6QixNQUFBLEFBQU0sY0FBTixBQUFvQiwwQkFBcEIsQUFBOEMsTUFBSyxDQUFDLFFBQUEsQUFBUSxJQUFSLEFBQVksS0FBaEUsQUFBb0QsQUFBaUI7O2tCQUV0RCIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi91dGlscy9TdHlsZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwXCI7XG5pbXBvcnQgUHJvcHNNYW5hZ2VyIGZyb20gXCIuLi9Qcm9wc01hbmFnZXJcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzOyBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzID0gdGhpcy5hZGRDYWxsYmFja3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MgPSB0aGlzLnJlbW92ZUNhbGxiYWNrcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BzTWFuYWdlciA9ICBuZXcgUHJvcHNNYW5hZ2VyKClcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZXR0aW5ncyAhPT0gbmV4dFByb3BzLnNldHRpbmdzKXtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy5zZXR0aW5ncyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV4dFByb3BzLnNldHRpbmdzO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdHlsZSAhPT0gbmV4dFByb3BzLnN0eWxlKXsvLyB1c2VyIHN0eWxlIGFkZGVkIHRocm91Z2ggVUkgaXMgU2Vzc2lvbmVkXG4gICAgICAgICAgICBpZihuZXh0UHJvcHMuc3R5bGUpdGhpcy5zZXR0aW5ncy5zdHlsZS5kb21EZWZpbmVkLnN0YXRlID0gbmV4dFByb3BzLnN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY2hpbGRyZW4gIT09IG5leHRQcm9wcy5jaGlsZHJlbil7XG4gICAgICAgICAgICBBcHAuaG9va1Nlc3Npb25TdGF0ZUZvckNvbXBvbmVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbix0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5hZGRDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZW5hYmxlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5zZXR0aW5ncy5zdHlsZSkuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucmlnaHRBbGlnbi5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zcGFjZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRHYXBBdC5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jaGlsZHJlbi5jaGlsZExpc3RDYWxsYmFja3MuYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tzKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmVuYWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMuc2V0dGluZ3Muc3R5bGUpLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnJpZ2h0QWxpZ24ucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3BhY2UucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWRkR2FwQXQucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY2hpbGRyZW4uY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW4oKXtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGVPYmplY3Q9e307XG4gICAgICAgIHZhciBzcGFjZSA9IHRoaXMuc2V0dGluZ3Muc3BhY2UudmFsdWU7XG4gICAgICAgIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwicmlnaHRcIikgfHwgKHRoaXMucHJvcHMuZG9jayA9PT0gXCJsZWZ0XCIpKXtcbiAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5Cb3R0b21cIl0gPSBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCh0aGlzLnByb3BzLmRvY2sgPT09IFwidG9wXCIpIHx8ICh0aGlzLnByb3BzLmRvY2sgPT09IFwiYm90dG9tXCIpKXtcbiAgICAgICAgICAgIGNoaWxkU3R5bGVPYmplY3RbXCJtYXJnaW5SaWdodFwiXSA9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wc01hbmFnZXIudXBkYXRlU3R5bGUoY2hpbGRTdHlsZU9iamVjdCk7XG4gICAgICAgIHRoaXMucHJvcHNNYW5hZ2VyLmFkZEtleVByb3BzKFwicGFnZU5hbWVcIik7XG4gICAgICAgICByZXR1cm4gQXBwLnJlbmRlckNoaWxkcmVuKHRoaXMsdGhpcy5wcm9wc01hbmFnZXIpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmRvY2sgIT09IG5leHRQcm9wcy5kb2NrKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMucG9zaXRpb24gIT09IG5leHRQcm9wcy5wb3NpdGlvbil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVzZUNTUyAhPT0gbmV4dFByb3BzLnVzZUNTUyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZGb3JtVUkgPSA8ZGl2Lz47XG4gICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZW5hYmxlLnZhbHVlKXtcbiAgICAgICAgICAgIHZhciBzdHlsZU9iamVjdCA9IHRoaXMuc2V0dGluZ3Muc3R5bGUuZ2V0U3R5bGVGb3IobnVsbCk7XG4gICAgICAgICAgICB2YXIgY3NzTmFtZSA9IHRoaXMuc2V0dGluZ3MuQ1NTLmdldENTU0ZvcigpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuVUkgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudXNlQ1NTKXtcbiAgICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBjbGFzc05hbWU9e2Nzc05hbWV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuYXZGb3JtVUkgPSA8ZGl2ICBzdHlsZT17c3R5bGVPYmplY3R9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuVUl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuYXZGb3JtVUkpO1xuICAgIH1cblxufVxuXG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhci5Gb3JtJywgRm9ybSxbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ==

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _Brand = __webpack_require__(28);

	var _Brand2 = _interopRequireDefault(_Brand);

	var _List = __webpack_require__(32);

	var _List2 = _interopRequireDefault(_List);

	var _Form = __webpack_require__(34);

	var _Form2 = _interopRequireDefault(_Form);

	var _InlineStyle = __webpack_require__(13);

	var _InlineStyle2 = _interopRequireDefault(_InlineStyle);

	var _CSS = __webpack_require__(36);

	var _CSS2 = _interopRequireDefault(_CSS);

	var _Style = __webpack_require__(8);

	var _Style2 = _interopRequireDefault(_Style);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var NavConfig = function NavConfig() {
	    _classCallCheck(this, NavConfig);

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        },
	        children: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "addGapAt": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
	        },
	        "useCSS": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        },
	        "dock": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("top"))
	        }
	    });

	    //this.addGapAt.state = 0;
	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();
	    //initial default values
	    this.CSS.state = {
	        navbar: "navbar navbar-default",
	        brand: {
	            header: "navbar-header",
	            title: "navbar-brand"
	        },
	        list: "nav navbar-nav",
	        form: "navbar-form navbar-right"
	    };

	    this.style.display.value = "flex";
	    this.style.border.state = { border: "1px solid transparent" };
	    this.style.other.state = {
	        flexDirection: "row",
	        flex: "1",
	        height: "7%",
	        minHeight: "50px",
	        zIndex: "1000",
	        alignItems: "center",
	        justifyContent: "space-between"
	    };
	    this.style.padding.state = { padding: "4px" };
	    this.style.background.state = "#F8F8F8";
	};

	var BrandConfig = function BrandConfig() {
	    _classCallCheck(this, BrandConfig);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        },
	        "children": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();

	    this.style.padding.state = {
	        padding: "15px 15px"
	    };
	    this.style.font.state = {
	        fontSize: "18px",
	        lineHeight: "20px"
	    };

	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        alignItems: "inherit"
	    };
	};

	var LogoConfig = function LogoConfig() {
	    _classCallCheck(this, LogoConfig);

	    Object.defineProperties(this, {
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        src: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.style.border.state = {
	        border: "2px solid #ebebeb",
	        borderRadius: "50%"
	    };
	    this.style.other.state = {
	        width: "50",
	        height: "50"
	    };
	};

	var TitleConfig = function TitleConfig() {
	    _classCallCheck(this, TitleConfig);

	    Object.defineProperties(this, {
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        title: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.style.font.state = {
	        lineHeight: "20px",
	        fontSize: "18px"
	    };
	};

	var ListConfig = function () {
	    function ListConfig() {
	        _classCallCheck(this, ListConfig);

	        Object.defineProperties(this, {
	            "style": {
	                value: Weave.linkableChild(this, new _InlineStyle2.default())
	            },
	            "CSS": {
	                value: Weave.linkableChild(this, new _CSS2.default())
	            },
	            "enable": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	            },
	            "align": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("left"))
	            },
	            "activePage": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "children": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	            },
	            "space": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(8))
	            }
	        });

	        this.childConfigMap = new Map();
	        this.configChildMap = new Map();

	        this.style.display.value = "flex";
	        this.style.other.state = {
	            flexDirection: "inherit",
	            listStyleType: "none",
	            paddingLeft: "0",
	            alignItems: "inherit"
	        };

	        this.style.margin.state = {
	            margin: "7.5px"
	        };

	        this.align.addImmediateCallback(this, this.updateStyle);
	    }

	    _createClass(ListConfig, [{
	        key: "updateStyle",
	        value: function updateStyle() {
	            _Style2.default.alignChildren(this.style, this.align.state);
	        }
	    }]);

	    return ListConfig;
	}();

	var LinkConfig = function LinkConfig() {
	    _classCallCheck(this, LinkConfig);

	    Object.defineProperties(this, {
	        "title": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("Link"))
	        },
	        "iconName": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-home"))
	        },
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "activeLinkStyle": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.style.font.state = {
	        lineHeight: "20px",
	        color: "#777"
	    };
	    this.style.padding.state = {
	        paddingTop: "10px",
	        paddingBottom: "10px"
	    };
	};

	var FormConfig = function FormConfig() {
	    _classCallCheck(this, FormConfig);

	    Object.defineProperties(this, {
	        "style": {
	            value: Weave.linkableChild(this, new _InlineStyle2.default())
	        },
	        "enable": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	        },
	        "rightAlign": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(true))
	        },
	        "children": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap())
	        },
	        "addGapAt": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber())
	        },
	        "space": {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString("2px"))
	        },
	        "CSS": {
	            value: Weave.linkableChild(this, new _CSS2.default())
	        }
	    });

	    this.childConfigMap = new Map();
	    this.configChildMap = new Map();
	    //this.addGapAt.state = 0;
	    this.style.display.value = "flex";
	    this.style.other.state = {
	        flexDirection: "inherit",
	        alignItems: "inherit"
	    };

	    this.style.margin.state = {
	        margin: "4px"
	    };
	};

	var navbarConfig = {};
	exports.default = navbarConfig;

	navbarConfig.Navbar = NavConfig;
	navbarConfig.Brand = BrandConfig;
	navbarConfig.Logo = LogoConfig;
	navbarConfig.Title = TitleConfig;
	navbarConfig.List = ListConfig;
	navbarConfig.Link = LinkConfig;
	navbarConfig.Form = FormConfig;

	//This Function makes this class as SessionClass
	Weave.registerClass('weavereact.navbarConfig.Navbar', navbarConfig.Navbar, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Brand', navbarConfig.Brand, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Logo', navbarConfig.Logo, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Title', navbarConfig.Title, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.List', navbarConfig.List, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Link', navbarConfig.Link, [weavejs.api.core.ILinkableObject]);
	Weave.registerClass('weavereact.navbarConfig.Form', navbarConfig.Form, [weavejs.api.core.ILinkableObject]);
	//# sourceMappingURL=data:application/json;base64,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ImZpbGUiOiJDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJhbmQgZnJvbSBcIi4vQnJhbmRcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCBJbmxpbmVTdHlsZSBmcm9tIFwiLi4vLi4vY29uZmlncy9JbmxpbmVTdHlsZVwiO1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vLi4vY29uZmlncy9DU1NcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvU3R5bGVcIjtcblxuY2xhc3MgTmF2Q29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUhhc2hNYXAoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFkZEdhcEF0XCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb2NrXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJ0b3BcIikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vdGhpcy5hZGRHYXBBdC5zdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vaW5pdGlhbCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB0aGlzLkNTUy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdmJhcjpcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiLFxuICAgICAgICAgICAgYnJhbmQ6e1xuICAgICAgICAgICAgICAgIGhlYWRlcjpcIm5hdmJhci1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTpcIm5hdmJhci1icmFuZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdDpcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICBmb3JtOlwibmF2YmFyLWZvcm0gbmF2YmFyLXJpZ2h0XCJcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheS52YWx1ZSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtib3JkZXI6XCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBmbGV4OlwiMVwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNyVcIixcbiAgICAgICAgICAgIG1pbkhlaWdodDpcIjUwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7cGFkZGluZzpcIjRweFwifTtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kLnN0YXRlID0gXCIjRjhGOEY4XCI7XG4gICAgfVxufVxuXG5cbmNsYXNzIEJyYW5kQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5wYWRkaW5nLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFkZGluZzpcIjE1cHggMTVweFwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5jbGFzcyBMb2dvQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4odHJ1ZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3JjOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiXCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0eWxlLmJvcmRlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJvcmRlcjpcIjJweCBzb2xpZCAjZWJlYmViXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6XCI1MCVcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLm90aGVyLnN0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6XCI1MFwiLFxuICAgICAgICAgICAgaGVpZ2h0OlwiNTBcIlxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgVGl0bGVDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbih0cnVlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgIHRoaXMuc3R5bGUuZm9udC5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgZm9udFNpemU6XCIxOHB4XCJcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuXG5cbmNsYXNzIExpc3RDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBcIkNTU1wiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgQ1NTKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoXCJsZWZ0XCIpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlUGFnZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIlwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoaWxkcmVuXCI6e1xuICAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlSGFzaE1hcCgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3BhY2VcIjp7XG4gICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXIoOCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRDb25maWdNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29uZmlnQ2hpbGRNYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5LnZhbHVlID0gXCJmbGV4XCI7XG4gICAgICAgIHRoaXMuc3R5bGUub3RoZXIuc3RhdGUgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlVHlwZTpcIm5vbmVcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlwiMFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImluaGVyaXRcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3R5bGUubWFyZ2luLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFyZ2luOlwiNy41cHhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWxpZ24uYWRkSW1tZWRpYXRlQ2FsbGJhY2sodGhpcyx0aGlzLnVwZGF0ZVN0eWxlKTtcblxuICAgIH1cblxuXG4gICAgdXBkYXRlU3R5bGUoKXtcbiAgICAgICAgU3R5bGUuYWxpZ25DaGlsZHJlbih0aGlzLnN0eWxlLHRoaXMuYWxpZ24uc3RhdGUpO1xuICAgIH1cbn1cblxuXG5jbGFzcyBMaW5rQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiTGlua1wiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImljb25OYW1lXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKFwiZmEgZmEtaG9tZVwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aXZlTGlua1N0eWxlXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBJbmxpbmVTdHlsZSgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ1NTXCI6e1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyBDU1MoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5mb250LnN0YXRlID0ge1xuICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICBjb2xvcjpcIiM3NzdcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0eWxlLnBhZGRpbmcuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuY2xhc3MgRm9ybUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwic3R5bGVcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IElubGluZVN0eWxlKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJpZ2h0QWxpZ25cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKHRydWUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVIYXNoTWFwKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhZGRHYXBBdFwiOntcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyKCkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzcGFjZVwiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZyhcIjJweFwiKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgXCJDU1NcIjp7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFdlYXZlLmxpbmthYmxlQ2hpbGQodGhpcywgbmV3IENTUygpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoaWxkQ29uZmlnTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ0NoaWxkTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvL3RoaXMuYWRkR2FwQXQuc3RhdGUgPSAwO1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkudmFsdWUgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5zdHlsZS5vdGhlci5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJpbmhlcml0XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiaW5oZXJpdFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdHlsZS5tYXJnaW4uc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46XCI0cHhcIixcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuY29uc3QgbmF2YmFyQ29uZmlnID0ge307XG5leHBvcnQgZGVmYXVsdCBuYXZiYXJDb25maWdcblxubmF2YmFyQ29uZmlnLk5hdmJhciA9IE5hdkNvbmZpZztcbm5hdmJhckNvbmZpZy5CcmFuZCA9IEJyYW5kQ29uZmlnO1xubmF2YmFyQ29uZmlnLkxvZ28gPSBMb2dvQ29uZmlnO1xubmF2YmFyQ29uZmlnLlRpdGxlID0gVGl0bGVDb25maWc7XG5uYXZiYXJDb25maWcuTGlzdCA9IExpc3RDb25maWc7XG5uYXZiYXJDb25maWcuTGluayA9IExpbmtDb25maWc7XG5uYXZiYXJDb25maWcuRm9ybSA9IEZvcm1Db25maWc7XG5cbi8vVGhpcyBGdW5jdGlvbiBtYWtlcyB0aGlzIGNsYXNzIGFzIFNlc3Npb25DbGFzc1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTmF2YmFyJywgbmF2YmFyQ29uZmlnLk5hdmJhcixbd2VhdmVqcy5hcGkuY29yZS5JTGlua2FibGVPYmplY3RdKTtcbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QubmF2YmFyQ29uZmlnLkJyYW5kJywgbmF2YmFyQ29uZmlnLkJyYW5kLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuTG9nbycsIG5hdmJhckNvbmZpZy5Mb2dvLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuV2VhdmUucmVnaXN0ZXJDbGFzcygnd2VhdmVyZWFjdC5uYXZiYXJDb25maWcuVGl0bGUnLCBuYXZiYXJDb25maWcuVGl0bGUsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaXN0JywgbmF2YmFyQ29uZmlnLkxpc3QsW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5MaW5rJywgbmF2YmFyQ29uZmlnLkxpbmssW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5XZWF2ZS5yZWdpc3RlckNsYXNzKCd3ZWF2ZXJlYWN0Lm5hdmJhckNvbmZpZy5Gb3JtJywgbmF2YmFyQ29uZmlnLkZvcm0sW3dlYXZlanMuYXBpLmNvcmUuSUxpbmthYmxlT2JqZWN0XSk7XG5cbiJdfQ==

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var CSS = function () {
	    function CSS() {
	        _classCallCheck(this, CSS);

	        Object.defineProperties(this, {
	            "className": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	            },
	            "classObject": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableVariable())
	            }
	        });
	    }

	    _createClass(CSS, [{
	        key: "getCSSFor",
	        value: function getCSSFor(property) {
	            if (property) return this.cssObject.state[property];else {
	                return this.className.state;
	            }
	        }
	    }]);

	    return CSS;
	}();

	Weave.registerClass('weavereact.CSS', CSS, [weavejs.api.core.ILinkableObject]);

	exports.default = CSS;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNTUy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUVNLEFBQ0Y7OEJBREUsQUFDVyxBQUVSOztlQUFBLEFBQU8saUJBQVAsQUFBd0IsTUFBTSxBQUMzQjt5QkFBYSxBQUNUO3VCQUFPLE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQU0sSUFBSSxRQUFBLEFBQVEsS0FEakQsQUFDSSxBQUFPLEFBQThCLEFBQWEsQUFFdEQ7OzJCQUFlLEFBQ1g7dUJBQU8sTUFBQSxBQUFNLGNBQU4sQUFBb0IsTUFBTSxJQUFJLFFBQUEsQUFBUSxLQVB6RCxBQUFhLEFBRVIsQUFJRyxBQUNJLEFBQU8sQUFBOEIsQUFBYTs7V0FQakQ7OztpQkFEWDs7a0NBY1EsVUFBUyxBQUNmO2dCQUFBLEFBQUcsVUFDQyxPQUFPLEtBQUEsQUFBSyxVQUFMLEFBQWUsTUFEMUIsQUFDSSxBQUFPLEFBQXFCO3VCQUVyQixLQUFBLEFBQUssVUFIaEIsQUFFSSxBQUNPLEFBQWUsTUFEdEIsQUFDQTs7O1FBakJSOztXQURFO0dBQUE7O0FBdUJOLE1BQUEsQUFBTSxjQUFOLEFBQW9CLGtCQUFwQixBQUFzQyxLQUFJLENBQUMsUUFBQSxBQUFRLElBQVIsQUFBWSxLQUF2RCxBQUEyQyxBQUFpQjs7a0JBRTdDIiwiZmlsZSI6IkNTUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBDU1N7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBXZWF2ZS5saW5rYWJsZUNoaWxkKHRoaXMsIG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcoKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsYXNzT2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogV2VhdmUubGlua2FibGVDaGlsZCh0aGlzLCBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBnZXRDU1NGb3IocHJvcGVydHkpe1xuICAgICAgICBpZihwcm9wZXJ0eSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzc09iamVjdC5zdGF0ZVtwcm9wZXJ0eV07XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWUuc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbldlYXZlLnJlZ2lzdGVyQ2xhc3MoJ3dlYXZlcmVhY3QuQ1NTJywgQ1NTLFt3ZWF2ZWpzLmFwaS5jb3JlLklMaW5rYWJsZU9iamVjdF0pO1xuXG5leHBvcnQgZGVmYXVsdCBDU1M7XG4iXX0=

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _index = __webpack_require__(5);

	(function (module) {

	    function SessionEditorConfig() {

	        Object.defineProperties(this, {

	            "treeConfig": {
	                value: new _index.TreeConfig()
	            },
	            showTree: {
	                value: new weavejs.core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            modalConfig: {
	                value: new _index.ModalConfig()
	            }

	        });

	        this.dataTypesMap = {
	            "weavejs.core.LinkableString": "S",
	            "weavejs.core.LinkableNumber": "N",
	            "weavejs.core.LinkableBoolean": "B",
	            "weavejs.data.source.WeaveDataSource": "fa fa-database"

	        };
	    }

	    var p = SessionEditorConfig.prototype;
	    p.getDataType = function (treeItem) {
	        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
	    };

	    module.exports = SessionEditorConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFJZixhQUFTLG1CQUFULEdBQStCOztBQUUzQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCOztBQUUxQiwwQkFBYztBQUNWLHVCQUFPLHVCQUFQO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUFQO2FBREo7QUFHQSw2QkFBaUI7QUFDYix1QkFBTyxJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQVg7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sd0JBQVA7YUFESjs7U0FYSixFQUYyQjs7QUFtQjNCLGFBQUssWUFBTCxHQUFvQjtBQUNoQiwyQ0FBK0IsR0FBL0I7QUFDQSwyQ0FBK0IsR0FBL0I7QUFDQSw0Q0FBZ0MsR0FBaEM7QUFDQSxtREFBdUMsZ0JBQXZDOztTQUpKLENBbkIyQjtLQUEvQjs7QUFnQ0EsUUFBSSxJQUFJLG9CQUFvQixTQUFwQixDQXBDTztBQXFDZixNQUFFLFdBQUYsR0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2hDLGVBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBZ0MsS0FBaEMsQ0FBc0MsQ0FBdEMsRUFBeUMsS0FBekMsQ0FEeUI7S0FBcEIsQ0FyQ0Q7O0FBMkNmLFdBQU8sT0FBUCxHQUFpQixtQkFBakIsQ0EzQ2U7Q0FBbEIsRUE2Q0MsTUE3Q0QsQ0FBRCIsImZpbGUiOiJTZXNzaW9uRWRpdG9yQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbmltcG9ydCB7TW9kYWxDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saWIvaW5kZXguanNcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUcmVlQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93VHJlZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhbihmYWxzZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmVOb2RlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZVZhcmlhYmxlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbENvbmZpZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHZhciBwID0gU2Vzc2lvbkVkaXRvckNvbmZpZy5wcm90b3R5cGU7XG4gICAgcC5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TreeSection = function (_React$Component) {
	    _inherits(TreeSection, _React$Component);

	    function TreeSection(props) {
	        _classCallCheck(this, TreeSection);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSection).call(this, props));
	    }

	    _createClass(TreeSection, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.props.tree).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.tree !== nextProps.tree) {
	                // tree value will swithc between null and sessionstate tree, when new file is loaded
	                if (this.props.tree) Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
	                if (nextProps.tree) {
	                    Weave.getCallbacks(nextProps.tree).addGroupedCallback(this, this.forceUpdate);
	                } else {
	                    this.props.settings.treeConfig.rootNode.reset();
	                }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var treeUI = "";
	            if (this.props.tree) {
	                treeUI = _react2.default.createElement(_index.Tree, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.props.settings.treeConfig, dataTypesMap: this.props.settings.dataTypesMap, getDataType: this.props.settings.getDataType });
	            }

	            var treeContainerStyle = {
	                width: "100%",
	                height: "100%",
	                borderStyle: "solid",
	                borderRadius: "4px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                overflowY: 'scroll',
	                overflowX: 'scroll',
	                padding: "4px"
	            };

	            console.log("Tree Section Render");
	            return _react2.default.createElement(
	                "div",
	                { style: treeContainerStyle },
	                treeUI
	            );
	        }
	    }]);

	    return TreeSection;
	}(_react2.default.Component);

	exports.default = TreeSection;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9UcmVlU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVKLGFBRkksV0FFSixDQUFZLEtBQVosRUFBbUI7OEJBRmYsYUFFZTs7c0VBRmYsd0JBR0ksUUFEVztLQUFuQjs7aUJBRkk7OzRDQU9lO0FBQ2pCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxrQkFBcEMsQ0FBdUQsSUFBdkQsRUFBNkQsS0FBSyxXQUFMLENBQTdELENBRGlCOzs7OytDQUlLO0FBQ3RCLGtCQUFNLFlBQU4sQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQixDQUFvQyxjQUFwQyxDQUFtRCxJQUFuRCxFQUF5RCxLQUFLLFdBQUwsQ0FBekQsQ0FEc0I7Ozs7a0RBSUksV0FBVTtBQUNoQyxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLFVBQVUsSUFBVixFQUFlOztBQUNqQyxvQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCLE1BQU0sWUFBTixDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQW5CLENBQW9DLGNBQXBDLENBQW1ELElBQW5ELEVBQXlELEtBQUssV0FBTCxDQUF6RCxDQUFuQjtBQUNELG9CQUFHLFVBQVUsSUFBVixFQUFlO0FBQ2QsMEJBQU0sWUFBTixDQUFtQixVQUFVLElBQVYsQ0FBbkIsQ0FBbUMsa0JBQW5DLENBQXNELElBQXRELEVBQTRELEtBQUssV0FBTCxDQUE1RCxDQURjO2lCQUFsQixNQUdJO0FBQ0EseUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEIsQ0FBK0IsUUFBL0IsQ0FBd0MsS0FBeEMsR0FEQTtpQkFISjthQUZKOzs7O2lDQWFHOztBQUVQLGdCQUFJLFNBQVMsRUFBVCxDQUZHO0FBR1AsZ0JBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQjtBQUNmLHlCQUFTLDZDQUFNLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixPQUFNLE9BQU4sRUFBYyxPQUFNLFVBQU4sRUFBa0IsZUFBZSxLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLFVBQVUsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixVQUFwQixFQUFnQyxjQUFjLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsWUFBcEIsRUFBa0MsYUFBYSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFdBQXBCLEVBQXpNLENBQVQsQ0FEZTthQUFuQjs7QUFJQSxnQkFBSSxxQkFBcUI7QUFDckIsdUJBQU0sTUFBTjtBQUNBLHdCQUFPLE1BQVA7QUFDQSw2QkFBWSxPQUFaO0FBQ0EsOEJBQWEsS0FBYjtBQUNBLDZCQUFZLEtBQVo7QUFDQSw2QkFBWSxNQUFaO0FBQ0EsMkJBQVcsUUFBWDtBQUNBLDJCQUFXLFFBQVg7QUFDQSx5QkFBUSxLQUFSO2FBVEEsQ0FQRzs7QUFtQlAsb0JBQVEsR0FBUixDQUFZLHFCQUFaLEVBbkJPO0FBb0JQLG1CQUFTOztrQkFBSyxPQUFPLGtCQUFQLEVBQUw7Z0JBQ2dCLE1BRGhCO2FBQVQsQ0FwQk87Ozs7V0E3Qkw7RUFBb0IsZ0JBQU0sU0FBTjs7a0JBd0RYIiwiZmlsZSI6IlRyZWVTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4uLy4uLy4uL2xpYi9pbmRleC5qc1wiO1xuXG5cbmNsYXNzIFRyZWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlICE9PSBuZXh0UHJvcHMudHJlZSl7Ly8gdHJlZSB2YWx1ZSB3aWxsIHN3aXRoYyBiZXR3ZWVuIG51bGwgYW5kIHNlc3Npb25zdGF0ZSB0cmVlLCB3aGVuIG5ldyBmaWxlIGlzIGxvYWRlZFxuICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZSlXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50cmVlKXtcbiAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3MobmV4dFByb3BzLnRyZWUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy50cmVlQ29uZmlnLnJvb3ROb2RlLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0cmVlVUkgPSBcIlwiO1xuICAgIGlmKHRoaXMucHJvcHMudHJlZSl7XG4gICAgICAgIHRyZWVVSSA9IDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZX0gbGFiZWw9XCJsYWJlbFwiIG5vZGVzPVwiY2hpbGRyZW5cIiAgY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5ub2RlQ2xpY2t9IHNldHRpbmdzPXt0aGlzLnByb3BzLnNldHRpbmdzLnRyZWVDb25maWd9IGRhdGFUeXBlc01hcD17dGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXB9IGdldERhdGFUeXBlPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldERhdGFUeXBlfS8+XG4gICAgfVxuXG4gICAgdmFyIHRyZWVDb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIlxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiVHJlZSBTZWN0aW9uIFJlbmRlclwiKTtcbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXt0cmVlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlY3Rpb247XG4iXX0=

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NodeView = function (_React$Component) {
	  _inherits(NodeView, _React$Component);

	  function NodeView(props) {
	    _classCallCheck(this, NodeView);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeView).call(this, props));

	    _this.textAreaChange = _this.textAreaChange.bind(_this);

	    return _this;
	  }

	  _createClass(NodeView, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.props.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.activeNodeValue.removeCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "textAreaChange",
	    value: function textAreaChange(e) {
	      this.props.activeNodeValue.state = e.target.value;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var resultContainerStyle = {
	        width: "100%",
	        height: "100%",
	        borderStyle: "solid",
	        borderRadius: "4px",
	        borderWidth: "1px",
	        borderColor: "grey",
	        overflowY: 'scroll',
	        overflowX: 'scroll',
	        padding: "4px"
	      };

	      return _react2.default.createElement(
	        "div",
	        { style: resultContainerStyle },
	        _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.props.activeNodeValue.state, onChange: this.textAreaChange })
	      );
	    }
	  }]);

	  return NodeView;
	}(_react2.default.Component);

	exports.default = NodeView;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Mvc3JjL3Nlc3Npb25TdGF0ZUVkaXRvci9Ob2RlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNOzs7QUFFSixXQUZJLFFBRUosQ0FBWSxLQUFaLEVBQW1COzBCQUZmLFVBRWU7O3VFQUZmLHFCQUdJLFFBRFc7O0FBSWpCLFVBQUssY0FBTCxHQUFzQixNQUFLLGNBQUwsQ0FBb0IsSUFBcEIsT0FBdEIsQ0FKaUI7OztHQUFuQjs7ZUFGSTs7d0NBVWU7QUFDakIsV0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixvQkFBM0IsQ0FBZ0QsSUFBaEQsRUFBcUQsS0FBSyxXQUFMLENBQXJELENBRGlCOzs7OzJDQUlLO0FBQ3RCLFdBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsY0FBM0IsQ0FBMEMsSUFBMUMsRUFBK0MsS0FBSyxXQUFMLENBQS9DLENBRHNCOzs7O21DQU1ULEdBQUU7QUFDZixXQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQTNCLEdBQW1DLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FEcEI7Ozs7NkJBSVI7O0FBRVAsVUFBSSx1QkFBdUI7QUFDdkIsZUFBTSxNQUFOO0FBQ0EsZ0JBQU8sTUFBUDtBQUNBLHFCQUFZLE9BQVo7QUFDQSxzQkFBYSxLQUFiO0FBQ0EscUJBQVksS0FBWjtBQUNBLHFCQUFZLE1BQVo7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLGlCQUFRLEtBQVI7T0FUQSxDQUZHOztBQWVQLGFBQVM7O1VBQUssT0FBTyxvQkFBUCxFQUFMO1FBQ0csNENBQVUsT0FBTyxFQUFDLE9BQU0sTUFBTixFQUFhLFFBQU8sTUFBUCxFQUFjLFFBQU8sTUFBUCxFQUFuQyxFQUFtRCxPQUFPLEtBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsRUFBa0MsVUFBVSxLQUFLLGNBQUwsRUFBaEgsQ0FESDtPQUFULENBZk87Ozs7U0F4Qkw7RUFBaUIsZ0JBQU0sU0FBTjs7a0JBOENSIiwiZmlsZSI6Ik5vZGVWaWV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgTm9kZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRleHRBcmVhQ2hhbmdlID0gdGhpcy50ZXh0QXJlYUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuICB0ZXh0QXJlYUNoYW5nZShlKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHJlc3VsdENvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtyZXN1bHRDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGJvcmRlcjpcIm5vbmVcIn19IHZhbHVlPXt0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlVmlldztcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
