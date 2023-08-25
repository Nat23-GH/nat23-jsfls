var localDate = (new Date).getTime(); // the UNIX timestamp that will be used in the symbol name

if (fl.getDocumentDOM().selection.length == 0) { // Nothing selected
	alert("At least ONE thing has to be selected.");
} else { // At least one item is selected
	fl.getDocumentDOM().convertToSymbol("graphic", ("N23E_Graphic_" + localDate), "center"); // Symbol creation
}