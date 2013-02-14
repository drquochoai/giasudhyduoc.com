/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:['0px','0px','125px','54px','auto','auto'],
            borderRadius:["0px 0px","0px 0px","34px 34px","10px 10px"],
            fill:["rgba(131,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['2px','13px','117px','23px','auto','auto'],
            text:"SINH VIÊN",
            font:['Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Group',
            type:'group',
            rect:['19','78px','87','87','auto','auto'],
            c:[
            {
               id:'Ellipse',
               type:'ellipse',
               rect:['0px','0px','87px','87px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(3,18,121,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['12px','25px','auto','auto','auto','auto'],
               text:"ĐĂNG KÍ<br>GIA SƯ",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         },
         {
            id:'Group2',
            type:'group',
            rect:['13px','175px','99','99','auto','auto'],
            c:[
            {
               id:'Ellipse2',
               type:'ellipse',
               rect:['0px','0px','99px','99px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(171,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text3',
               type:'text',
               rect:['14px','31px','auto','auto','auto','auto'],
               text:"GIA SƯ<br>CẦN BIẾT",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '0px'],
            ["style", "height", '99px'],
            ["style", "left", '0px'],
            ["style", "width", '99px']
         ],
         "${_Group2}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '11px'],
            ["style", "top", '175px']
         ],
         "${_Text3}": [
            ["style", "top", '31px'],
            ["style", "left", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'center'],
            ["style", "left", '12px'],
            ["style", "font-size", '16px']
         ],
         "${_Group}": [
            ["style", "top", '78px'],
            ["style", "left", '19px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(3,18,121,1.00)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '280px'],
            ["style", "width", '125px']
         ],
         "${_Text}": [
            ["style", "top", '13px'],
            ["style", "width", '117px'],
            ["style", "height", '23px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '2px'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(131,0,0,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [34,34], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '54px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1375,
         autoPlay: true,
         timeline: [
            { id: "eid56", tween: [ "style", "${_Group}", "top", '67px', { fromValue: '78px'}], position: 0, duration: 388 },
            { id: "eid59", tween: [ "style", "${_Group}", "top", '54px', { fromValue: '67px'}], position: 388, duration: 259 },
            { id: "eid64", tween: [ "style", "${_Group}", "top", '70px', { fromValue: '54px'}], position: 647, duration: 353 },
            { id: "eid73", tween: [ "style", "${_Group}", "top", '78px', { fromValue: '70px'}], position: 1000, duration: 375 },
            { id: "eid55", tween: [ "style", "${_Group}", "left", '38px', { fromValue: '19px'}], position: 0, duration: 388 },
            { id: "eid60", tween: [ "style", "${_Group}", "left", '14px', { fromValue: '38px'}], position: 388, duration: 259 },
            { id: "eid63", tween: [ "style", "${_Group}", "left", '0px', { fromValue: '14px'}], position: 647, duration: 353 },
            { id: "eid72", tween: [ "style", "${_Group}", "left", '19px', { fromValue: '0px'}], position: 1000, duration: 375 },
            { id: "eid58", tween: [ "style", "${_Group2}", "left", '0px', { fromValue: '11px'}], position: 0, duration: 388 },
            { id: "eid61", tween: [ "style", "${_Group2}", "left", '26px', { fromValue: '0px'}], position: 388, duration: 259 },
            { id: "eid65", tween: [ "style", "${_Group2}", "left", '23px', { fromValue: '26px'}], position: 647, duration: 353 },
            { id: "eid67", tween: [ "style", "${_Group2}", "left", '11px', { fromValue: '23px'}], position: 1000, duration: 375 },
            { id: "eid45", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(0,103,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(131,0,0,1)'}], position: 0, duration: 388 },
            { id: "eid50", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(131,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,103,131,1)'}], position: 388, duration: 404 },
            { id: "eid57", tween: [ "style", "${_Group2}", "top", '181px', { fromValue: '175px'}], position: 0, duration: 388 },
            { id: "eid62", tween: [ "style", "${_Group2}", "top", '157px', { fromValue: '181px'}], position: 388, duration: 259 },
            { id: "eid66", tween: [ "style", "${_Group2}", "top", '153px', { fromValue: '157px'}], position: 647, duration: 353 },
            { id: "eid69", tween: [ "style", "${_Group2}", "top", '175px', { fromValue: '153px'}], position: 1000, duration: 375 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-34970724");
