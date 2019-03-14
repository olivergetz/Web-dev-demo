// Variable init
var isMoved = false;

// Functions
function btnResponse(id, shrinkAmt)
{
	//Convert font size to a float.
	var element = document.getElementById(id);
	var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style);
	var originalSize = fontSize; //Store font size before adjusting it, so we can revert.
	element.style.fontSize = (fontSize - shrinkAmt) + 'px';

	//Reset button.
	setTimeout(function() 
	{
    	resetBtn(id, originalSize);
	}, 100);
}

function resetBtn(id, btnSize)
{
	var element = document.getElementById(id);
	var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style);

	element.style.fontSize = btnSize + 'px';

}

function lerp(start, end, normVal) 
{
	if (normVal > 1.0 || normVal < 0.0)
	{
		console.error("normVal must be between 0.0 and 1.0.");
	}

	var difference = end - start;

	return difference * normVal + start;

}

function mouseOver() {
  if (isMoved == false){
	document.getElementById("SlideFG").style.transform = "translate(100%, 0)";
	document.getElementById("SlideText").style.opacity = "1.0";
    isMoved = true;
  }
  else if (isMoved = true) {
  	document.getElementById("SlideFG").style.transform = "translate(0%, 0)";
  	document.getElementById("SlideText").style.opacity = "0.0";
  	isMoved = false;
  }
}