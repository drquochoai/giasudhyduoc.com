/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://giasudhyduoc.com/phu-huynh-can-biet", "_blank");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://giasudhyduoc.com/lua-chon-gia-su", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group2}", "mouseover", function(sym, e) {
         var element = sym.$("Group2").css ("cursor", "pointer");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group}", "mouseover", function(sym, e) {
         var element = sym.$("Group").css ("cursor", "pointer");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-34970724");