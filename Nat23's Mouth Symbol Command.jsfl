// Variable initialization (some from the F2G one, some exclusive to this command)
var dom = fl.getDocumentDOM();
var lib = dom.library;
var timeline = dom.getTimeline();
var localDate = (new Date).getTime();
var graphic_timeline;
var FTGHNum = 0; // exclusive to this command
var symbolName = "N23E_FTHG_" + localDate; // partially exclusive to this command (due to the name of the symbol)
var symbolName2 = "N23E_FTHGCenterer_" + localDate; // partially exclusive to this command (due to the name of the symbol)
var symbolName3 = "N23E_FTHG_" + localDate + "_" + FTGHNum; // exclusive to this command
var graphic_main_tl, graphic_0_tl, graphic_1_tl, graphic_2_tl, graphic_3_tl, graphic_4_tl; // exclusive to this command
var selFrame1 = 0; // exclusive to this command, also in reality it is this number + 1, so this is really the first frame of the selection at first
var selFrame2 = 5; // exclusive to this command, the fifth frame of the selection at first

//F2G (START, basically the same as my F2G command)
timeline.getSelectedFrames();
timeline.cutFrames();

lib.addNewItem("graphic", symbolName);
dom.library.addItemToDocument({x:0, y:0}, symbolName);
an.getDocumentDOM().enterEditMode('inPlace');
fl.getDocumentDOM().getTimeline();
graphic_timeline = fl.getDocumentDOM().getTimeline();
graphic_timeline.setSelectedLayers(0, true);
graphic_timeline.pasteFrames();
dom.exitEditMode();
dom.deleteSelection();
dom.library.addItemToDocument({x:0, y:0}, symbolName);
lib.addNewItem("graphic", symbolName2);
fl.getDocumentDOM().swapElement(symbolName2);
fl.getDocumentDOM().align('horizontal center', true);
fl.getDocumentDOM().align('vertical center', true);
fl.getDocumentDOM().swapElement(symbolName);
lib.deleteItem(symbolName2);
an.getDocumentDOM().enterEditMode('inPlace');
//F2G (END)

graphic_main_tl = dom.getTimeline();

for (var i = 0; i < 5; i++) {
	timeline = dom.getTimeline();
	graphic_main_tl.setSelectedFrames(selFrame1, selFrame2, true); // 0 and 5 at first

	//F2G (START)
	timeline.getSelectedFrames();
	timeline.cutFrames();

	lib.addNewItem("graphic", symbolName3);
	dom.library.addItemToDocument({x:0, y:0}, symbolName3);
	an.getDocumentDOM().enterEditMode('inPlace');
	fl.getDocumentDOM().getTimeline();
	graphic_timeline = fl.getDocumentDOM().getTimeline();
	graphic_timeline.setSelectedLayers(0, true);
	graphic_timeline.pasteFrames();
	dom.exitEditMode();
	dom.deleteSelection();
	dom.library.addItemToDocument({x:0, y:0}, symbolName3);
	lib.addNewItem("graphic", symbolName2);
	fl.getDocumentDOM().swapElement(symbolName2);
	fl.getDocumentDOM().align('horizontal center', true);
	fl.getDocumentDOM().align('vertical center', true);
	fl.getDocumentDOM().swapElement(symbolName3);
	lib.deleteItem(symbolName2);
	//F2G (END)

	graphic_main_tl.setSelectedFrames(selFrame1, selFrame2, true);
	fl.getDocumentDOM().setElementProperty('loop', 'play once');

	selFrame1 += 5;
	selFrame2 += 5;
	FTGHNum += 1;
	symbolName3 = "N23E_FTHG_" + localDate + "_" + FTGHNum;
}

//Trimming down the mouth symbol from 25 frames to just five keyframes
var lastInc = 0;	
for (var k = 0; k < 5; k++) {
	graphic_main_tl.setSelectedFrames(lastInc, lastInc, true);
	
	for (var j = 0; j < 4; j++)
		fl.getDocumentDOM().getTimeline().removeFrames();
	
	lastInc += 1;
}
	
dom.exitEditMode();
fl.getDocumentDOM().setElementProperty('loop', 'single frame'); // changed from Loop to Single Frame that way the mouth symbol stays sane throughout the timeline