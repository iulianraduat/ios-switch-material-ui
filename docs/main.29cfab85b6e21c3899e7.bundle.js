(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(module,exports,__webpack_require__){__webpack_require__(227),__webpack_require__(330),module.exports=__webpack_require__(331)},331:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(93);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(495)},module)}.call(this,__webpack_require__(163)(module))},42:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(132),_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(221),_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(222),_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(224),_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(223),_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(225),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),styles_knob={borderRadius:"50%",position:"relative",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},styles_switch={display:"inline-block",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},IosSwitchMaterialUi=function(_React$Component){function IosSwitchMaterialUi(props){var _this;return Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,IosSwitchMaterialUi),(_this=Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(IosSwitchMaterialUi).call(this,props))).handleChange=function(){var _this$props=_this.props,disabled=_this$props.disabled,onChange=_this$props.onChange;if(!disabled){var newKnobOnLeft=!_this.state.knobOnLeft;void 0===_this.props.knobOnLeft&&_this.setState({knobOnLeft:newKnobOnLeft}),onChange&&onChange(newKnobOnLeft)}},_this.state={knobOnLeft:props.knobOnLeft||props.defaultKnobOnLeft||!1},_this}return Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(IosSwitchMaterialUi,_React$Component),Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(IosSwitchMaterialUi,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_6__.createElement("div",{onClick:this.handleChange,style:this.getStyleForSwitch()},react__WEBPACK_IMPORTED_MODULE_6__.createElement("div",{style:this.getStyleForKnob()}))}},{key:"getStyleForSwitch",value:function getStyleForSwitch(){var disabled=this.props.disabled,backgroundColor=this.getSwitchColor(),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth(),switchHeight=this.getSwitchHeight();return Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},styles_switch,{backgroundColor:backgroundColor,borderRadius:knobSize,cursor:disabled?void 0:"pointer",height:switchHeight,minHeight:switchHeight,minWidth:switchWidth,opacity:disabled?.4:1,top:2,width:switchWidth})}},{key:"getSwitchColor",value:function getSwitchColor(){var colorSwitch=this.props.colorSwitch;return isEmpty(colorSwitch)?"#e2e2e2":colorSwitch}},{key:"getSwitchWidth",value:function getSwitchWidth(){return this.getAspectRatio()*this.getSwitchHeight()}},{key:"getAspectRatio",value:function getAspectRatio(){var aspectRatio=this.props.aspectRatio;return aspectRatio||2}},{key:"getSwitchHeight",value:function getSwitchHeight(){return this.getKnobSize()+4}},{key:"getKnobSize",value:function getKnobSize(){var knobSize=this.props.knobSize;return knobSize||18}},{key:"getStyleForKnob",value:function getStyleForKnob(){var knobOnLeft=this.state.knobOnLeft,backgroundColor=this.getKnobColor(knobOnLeft),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth();return Object(_home_rai_Workspace_components_ios_switch_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},styles_knob,{backgroundColor:backgroundColor,height:knobSize,left:knobOnLeft?2:switchWidth-knobSize-2,top:2,width:knobSize})}},{key:"getKnobColor",value:function getKnobColor(knobOnLeft){var _this$props2=this.props,colorKnobOnLeft=_this$props2.colorKnobOnLeft,colorKnobOnRight=_this$props2.colorKnobOnRight;return knobOnLeft&&!1===isEmpty(colorKnobOnLeft)?colorKnobOnLeft:!0!==knobOnLeft&&!1===isEmpty(colorKnobOnRight)?colorKnobOnRight:knobOnLeft?"#eeeeee":"#5269d8"}}]),IosSwitchMaterialUi}(react__WEBPACK_IMPORTED_MODULE_6__.Component),isEmpty=function isEmpty(str){return!1==(void 0!==str&&str.length>0)};__webpack_exports__.a=IosSwitchMaterialUi},495:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(42),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(93),style={height:20},showSelectedValue=function showSelectedValue(id){return function(knobOnLeft){return document.getElementById(id).textContent=knobOnLeft?"knobOnLeft":"knobOnRight"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("IosSwitchMaterialUi",module).add("uncontrolled without knob position set",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{onChange:showSelectedValue("uncontrolled")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"uncontrolled"}))}).add("uncontrolled with knob position set",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{defaultKnobOnLeft:!0,onChange:showSelectedValue("uncontrolled")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"uncontrolled"}))}).add("controlled",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{knobOnLeft:!0,onChange:showSelectedValue("controlled")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"controlled"}))}).add("with custom colors",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{colorKnobOnLeft:"red",colorKnobOnRight:"blue",colorSwitch:"aqua",onChange:showSelectedValue("colors")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"colors"}))}).add("with custom aspect ratio",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{aspectRatio:5,onChange:showSelectedValue("aspect-ratio")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"aspect-ratio"}))}).add("with custom knob size",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_IosSwitchMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{knobSize:40,onChange:showSelectedValue("knob-size")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"knob-size"}))})}.call(this,__webpack_require__(163)(module))}},[[226,1,2]]]);
//# sourceMappingURL=main.29cfab85b6e21c3899e7.bundle.js.map