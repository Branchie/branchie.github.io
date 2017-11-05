// JavaScript Document

String.prototype.format = function()
{
	var content = this;
	
	for (var i=0; i < arguments.length; i++)
	{
		var replacement = '{' + i + '}';
		content = content.replace(replacement, arguments[i]);  
	}
	
	return content;
};

Number.prototype.repeat = function(max)
{
	var num = this;
	
	if (num >= max)
	{
		num = 0;
	}
	
	return num;
};

var backgroundIndex = 0;
var backgroundNames = ["Toy", "Graveyard", "Farm", "Forest", "Robo", "Desert"];

function changeBG()
{
	backgroundIndex = (backgroundIndex + 1).repeat(backgroundNames.length);
	
	var s = "";
	var prefix = "url(\"Images/bg/";
	
	for (var i = 3; i >= 0; i--)
	{
		s += prefix + backgroundNames[backgroundIndex] + "_" + (i + 1) + ".png\")";
		
		if (i !== 0)
		{
			s += ", ";
		}
		else
		{
			//s += ";";
		}
	}
	
	document.body.style.background = s;
	
	document.body.style.backgroundSize = "100vh";
	document.body.style.backgroundPosition = "bottom, bottom, bottom, bottom";
	document.body.style.backgroundRepeat = "repeat-x, repeat-x, repeat-x, repeat";
	
	document.getElementById("mouseInfo").textContent = s;
}

(
	function()
	{
		document.onmousemove = handleMouseMove;
		
		function handleMouseMove(event)
		{
			var x = event.pageX;
			var s = "{0}px, {1}px, {2}px, {3}px".format(x / 4, x / 6, x / 8, x / 10);
	
			document.getElementById("mouseInfo").textContent = s;
			document.body.style.backgroundPositionX = s;
		}
	}
)();