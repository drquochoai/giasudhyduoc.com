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
            borderRadius:["0px 0px","0px 0px","10px 10px","34px 34px"],
            fill:["rgba(131,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['13px','13px','117px','23px','auto','auto'],
            text:"PHỤ HUYNH",
            font:['Arial, Helvetica, sans-serif',19,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Group',
            type:'group',
            rect:['25px','73','87','87','auto','auto'],
            c:[
            {
               id:'Ellipse',
               type:'ellipse',
               rect:['0px','17px','99px','54px','auto','auto'],
               borderRadius:["0% 0%","0% 0%","0% 0%","0% 0%"],
               fill:["rgba(3,18,121,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['2px','25px','auto','auto','auto','auto'],
               text:"DANH SÁCH<br>GIA SƯ",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         },
         {
            id:'Group2',
            type:'group',
            rect:['13px','198px','99','99','auto','auto'],
            c:[
            {
               id:'Ellipse2',
               type:'ellipse',
               rect:['-5px','23px','99px','54px','auto','auto'],
               borderRadius:["0% 0%","0% 0%","50% 50%","50% 50%"],
               fill:["rgba(171,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text3',
               type:'text',
               rect:['4px','31px','auto','auto','auto','auto'],
               text:"PHỤ HUYNH<br>CẦN BIẾT",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","normal","none","normal"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(131,0,0,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '54px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [34,34], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Group2}": [
            ["style", "top", '139px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '103.21276595745px'],
            ["style", "left", '30px'],
            ["style", "width", '99px']
         ],
         "${_Text3}": [
            ["style", "top", '29px'],
            ["style", "left", '5px'],
            ["style", "font-size", '13px']
         ],
         "${_Text2}": [
            ["style", "top", '25px'],
            ["style", "left", '2px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px']
         ],
         "${_Group}": [
            ["style", "top", '54px'],
            ["style", "height", '85px'],
            ["style", "left", '25px'],
            ["style", "width", '99px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(3,18,121,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '99px'],
            ["style", "top", '17px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '54px'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '125px'],
            ["style", "height", '246px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Ellipse2}": [
            ["style", "top", '23px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "border-bottom-right-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '54px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '-5px'],
            ["style", "width", '99px']
         ],
         "${_Text}": [
            ["style", "top", '13px'],
            ["style", "font-size", '19px'],
            ["style", "height", '23px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '13px'],
            ["style", "width", '117px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1835,
         autoPlay: true,
         timeline: [
            { id: "eid81", tween: [ "style", "${_Text3}", "font-size", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Group2}", "width", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_Group2}", "top", '102px', { fromValue: '139px'}], position: 0, duration: 250 },
            { id: "eid59", tween: [ "style", "${_Group2}", "top", '99px', { fromValue: '102px'}], position: 250, duration: 319 },
            { id: "eid61", tween: [ "style", "${_Group2}", "top", '95px', { fromValue: '99px'}], position: 569, duration: 392 },
            { id: "eid62", tween: [ "style", "${_Group2}", "top", '147px', { fromValue: '95px'}], position: 961, duration: 445 },
            { id: "eid64", tween: [ "style", "${_Group2}", "top", '138px', { fromValue: '147px'}], position: 1406, duration: 429 },
            { id: "eid89", tween: [ "style", "${_Text3}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_Group}", "top", '52px', { fromValue: '54px'}], position: 0, duration: 250 },
            { id: "eid58", tween: [ "style", "${_Group}", "top", '49px', { fromValue: '52px'}], position: 250, duration: 50 },
            { id: "eid53", tween: [ "style", "${_Group}", "top", '36px', { fromValue: '49px'}], position: 300, duration: 269 },
            { id: "eid60", tween: [ "style", "${_Group}", "top", '45px', { fromValue: '36px'}], position: 569, duration: 392 },
            { id: "eid65", tween: [ "style", "${_Group}", "top", '52px', { fromValue: '45px'}], position: 961, duration: 874 },
            { id: "eid70", tween: [ "style", "${_Group}", "width", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Text3}", "top", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(31,123,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(131,0,0,1)'}], position: 0, duration: 569 },
            { id: "eid75", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(250,195,6,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(31,123,0,1.00)'}], position: 569, duration: 630 },
            { id: "eid76", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(131,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(250,195,6,1.00)'}], position: 1199, duration: 636 },
            { id: "eid66", tween: [ "style", "${_Group}", "height", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Group2}", "height", '103.21276595745px', { fromValue: '103.21276595745px'}], position: 0, duration: 0 }         ]
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
