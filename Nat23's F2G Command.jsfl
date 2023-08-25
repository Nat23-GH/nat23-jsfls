// Variable initalization
var dom = fl.getDocumentDOM();
var lib = dom.library;
var timeline = dom.getTimeline();
var localDate = (new Date).getTime(); // UNIX timestamp used in the names of the symbols
var graphic_timeline;
var symbolName = "N23E_Graphic_" + localDate; // name of the symbol that will receive the frames
var symbolName2 = "N23E_GraphicCenterer_" + localDate; // name of the symbol that will help put the frames back in place

timeline.getSelectedFrames(); // grabbing the selected frames
timeline.cutFrames(); // removing the frames from the timeline and placing them into the clipboard

lib.addNewItem("graphic", symbolName); // creating the main symbol (currently blank of course)
dom.library.addItemToDocument({x:0, y:0}, symbolName); // adding the symbol to the document around the top left corner of the screen
an.getDocumentDOM().enterEditMode('inPlace'); // entering the symbol for editing

 // recognizing the timeline of the symbol
fl.getDocumentDOM().getTimeline();
graphic_timeline = fl.getDocumentDOM().getTimeline();


graphic_timeline.setSelectedLayers(0, true); // selecting the sole layer of the symbol
graphic_timeline.pasteFrames(); // adding the frames from the previous (a.k.a. first) timeline
dom.exitEditMode(); // leaving the symbol and returning to previous timeline
dom.deleteSelection(); // removing the symbol from the first timeline
dom.library.addItemToDocument({x:0, y:0}, symbolName); // adding back the main symbol
lib.addNewItem("graphic", symbolName2); // creating a blank symbol to be used for centering the main one

 // switching out the main symbol for the blank symbol meant for centering purposes
fl.getDocumentDOM().swapElement(symbolName2);
fl.getDocumentDOM().align('horizontal center', true);
fl.getDocumentDOM().align('vertical center', true);

// switching out the blank symbol meant for centering the previous symbol for said previous symbol
fl.getDocumentDOM().swapElement(symbolName);
lib.deleteItem(symbolName2); // removing the now useless blank symbol used for centering the main symbol