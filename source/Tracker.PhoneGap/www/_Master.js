var masterpagetemplate = " \
<div id=\"bodyWrapper\"> \
	<h1>Header</h1> \
	<div id=\"contentWrapper\"></div> \
	<h1>Footer</h1> \
</div> \
";

$("body").append(masterpagetemplate);
$("#contentWrapper").append($("#content"));
