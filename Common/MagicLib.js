var sClass="";
var tzOffset=GetTZOffset();
var iCurrScrollTop=0;
var ob;
var over = false;
var X, Y;
function initDragDrop() {
	//initialize drag and drop for preview and edit
    try {
	    document.body.onmousedown = MD;
	    document.body.onmousemove = MM;
	    document.body.onmouseup = MU;
	   }
	catch(e) {
	}
}
function offset(e) {
	if (!e.target) {
		return [ e.offsetX, e.offsetY ];
	}
	var Element = e.target;
	var CalculatedTotalOffsetLeft = CalculatedTotalOffsetTop = 0 ;
	while (Element.offsetParent) {
		CalculatedTotalOffsetLeft += Element.offsetLeft;
		CalculatedTotalOffsetTop += Element.offsetTop;
		Element = Element.offsetParent;
	}
	var OffsetXFF = e.pageX - CalculatedTotalOffsetLeft;
	var OffsetYFF = e.pageY - CalculatedTotalOffsetTop;
	return [ OffsetXFF, OffsetYFF ];
}
function MD(e) {
    if (top.over) {
		if (window.event) {e=window.event; ob=e.srcElement; } 
		else {ob=e.target; }
		var i=0;
		while (ob && ob.className.indexOf("DragContainer")<0 && i<5) { ob=ob.parentNode; i++; }
		if (ob.className.indexOf("DragContainer")<0) {
			if (window.event) {ob=e.srcElement.parentNode.parentNode ; } 
			else {ob=e.target.parentNode.parentNode; }
		}
        ob = ob.style;
        var s=offset(e);
        X=s[0];
        Y=s[1];
    }
}
function MM(e) {
	if (window.event) {e=window.event;}
    if (ob) {
        ob.left = (e.clientX-X + document.body.scrollLeft) + "px";
        ob.top = (e.clientY-Y + GetBodyScrollTop()) + "px";
        return false;
    }
    else {
	   	e.cancelBubble=false;
       	return true;
    }
}
function MU() {
    ob = null;	
}	
function WriteEmail(s) {
	if (s.indexOf("@")<0) return s;
	return "<a href='mailto:" + s + "'>" + s + "</a>";
}
function stripHTML(h) {
	if (h==undefined) return "";
	var re=new RegExp("(<([^>]+)>)|\\\\r\\\\n", "ig");
	return h.replace(re," ");
}
function AJAXActivity(bShow) {
	var oImg=(document.getElementById("imgAdminWait") || parent.document.getElementById("imgAdminWait"));
	oImg.style.visibility=(bShow) ? "visible" : "hidden";
}
function opendialog(oItem, sID, sCaller, bShowDelete, bShowArchive) {
	if (!document.getElementById('divAdminDialog')) {
		var oDiv=document.createElement('DIV');
		oDiv.id='divAdminDialog';
		oDiv.className="DragContainer";
		document.body.appendChild(oDiv);
	}
	else {
		var oDiv=document.getElementById('divAdminDialog');
	}
	var sArchiveLabel=(parent.document.getElementById("selAdminView").value==1) ? "Restore" : "Archive";
	var iArchive=(sArchiveLabel=="Archive") ? 1 : 0;
	var sHTML='<div class="head" onmouseover="over=true;" onmouseout="over=false;" style="cursor:default;">Moderate this Item</div><table><tr class="help"><td colspan="2">Update the moderation status for this post:</td></tr>';
	sHTML+='<tr><td valign="top"><select onChange="showmodinfo(this.value);" id="ModStatus" size="5"><option value="0">Approved</option><option value="1">Denied</option><option value="2">Pending</option><option value="3">Draft</option><option value="4">Scheduled</option></select></td><td valign="top"><div id="divModInfo"></div></td></tr>';
	sHTML+='<tr><td colspan="2"><input class="btn" onmouseover="this.className=\'btn btnhov\'" onmouseout="this.className=\'btn\'" type="button" value="Save" onclick="' + sCaller + '.savestatus(' + sID + ')">';
	if (bShowDelete) { sHTML+='<input class="btn" onmouseover="this.className=\'btn btnhov\'" onmouseout="this.className=\'btn\'" type="button" value="Delete" onclick="' + sCaller + '.deleteItem(' + sID + ')">'; }
	if (bShowArchive) { sHTML+='<input class="btn" onmouseover="this.className=\'btn btnhov\'" onmouseout="this.className=\'btn\'" type="button" value="' + sArchiveLabel + '" onclick="' + sCaller + '.archiveItem(' + sID + ',' + iArchive + ')">'; }
	sHTML+='<input type="button" class="btn" onmouseover="this.className=\'btn btnhov\'" onmouseout="this.className=\'btn\'" value="Cancel" onclick="cancelsave()">';

	sHTML+='</td></tr></table>';
	oDiv.innerHTML=sHTML;
	var fieldPos = new positionInfo(oItem);
	var x = fieldPos.getElementLeft()+24;		//adding transparent margin
	iCurrScrollTop=document.getElementsByTagName("DIV")[0].scrollTop;
	var y = fieldPos.getElementBottom()-5-iCurrScrollTop;		//subtracting "" ""
	var iClientHeight = 520;	//height of the scrolling div
	if (y>(iClientHeight - 170)) { 
		var diff=y-(iClientHeight-170);
		y=iClientHeight-170-30;					//height of scrolling div - height of dialog box, adding 30 to dialog height for image height
		iCurrScrollTop+=diff + 30;
		document.getElementsByTagName("DIV")[0].scrollTop=iCurrScrollTop;
	}
	oDiv.style.top=y;
	oDiv.style.left=x;
	oDiv.style.display='block';
}
function moderateCallback(res) {
	refreshList();
	AJAXActivity(false);
}
function ArchiveFields(sID, archive) {
	this.ID=sID;
	this.Archive=archive;
}
function showmodinfo(i) {
	var sOut;
	switch(i) {
		case '0':
			//Approved
			sOut='Indicates that a specified list item is approved. The last major version of the item is displayed in the public views of the list or document library.';break;
		case '1':
			//Denied
			sOut='Indicates that a specified list item is denied. The last major version of the item is not displayed in the public views of the list or document library.';break;
		case '2':
			//Pending
			sOut='Indicates that a specified list item is pending. The decision about displaying the item in public views of the list or document library is pending.';break;
		case '3':
			//Draft
			sOut='Indicates that a specified list item is a draft. The item minor version is being edited and is not ready for approval.';break;
		case '4':
			//Scheduled
			sOut='Indicates that a specified list item is scheduled. The decision about displaying the item in public views of list or document library is pending and will be processed by a timer service.';break;
		default:
			sOut='Unknown (' + i + ')';break;
	}
	document.getElementById('divModInfo').innerHTML=sOut;
}
function cancelsave() {
	document.getElementById('divAdminDialog').style.display='none';
}
function trhover(e) {
	var oTr;
	if (window.event) {e=window.event;oTr=e.srcElement.parentNode}
	else {oTr=e.target.parentNode;}

	if (oTr.tagName=='TD') oTr=oTr.parentNode;
	if (oTr.className.indexOf('hover') < 0) {
		sClass=oTr.className;
		oTr.className=sClass + ' hover';
	}
	else {
		oTr.className=sClass;
	}
}

function metaInfoObject(s) {
	this.baseString=s;
	s=s.substr(3,s.length-3);
	// Firefox replaces linefeed (10) with spaces.
	// First test uses the linefeed string and splits on it to generate the array.
	// Fallback assumes firefox or other engine that removes line feeds and uses complex
	//   regedit to find the breaks between records, matching the pattern of a
	//   record start (<FieldName>:AZ|<value>) and generating an array.
	// Since that seems more fragile, only using it in FF.

	if (s.indexOf(String.fromCharCode(10))>0) {
		this.baseArray=s.split(String.fromCharCode(10));
	}
	else {
		var re;
		re = new RegExp("(\\S+:[A-Z][A-Z])\\|(.*?)(?=\\S+:[A-Z][A-Z])", "g");
		this.baseArray=s.match(re);
	}
	
	this.getProp=function(prop) {
		var item, iName, x, iValue="";
		for (x=0;x<this.baseArray.length;x++) {
			item=this.baseArray[x].split(':');
			iName=item[0];
			if (iName==prop) {
				item.shift();
				iValue=item[0].split('|')[1];
				item.shift();
				if (item.length>0) iValue+=item.join("");
				break;
			}
		}
		return trim(iValue);
	}
}

function GetFileIcon(sFileName) {
    var sExtension;
    var array = sFileName.split(".");
    sExtension = array[array.length - 1];
    sImage = "/Style%20Library/images/DocIcons/";

    switch (sExtension) {
        case "docx":
        case "doc":
        case "rtf":
            sImage += "docicon.gif";
            sAlt = "Microsoft Word document";
            break;
        case "xlsx":
        case "xls":
            sImage += "xlsicon.gif";
            sAlt = "Microsoft Excel document";
            break;
        case "pptx":
        case "ppt":
            sImage += "ppticon.gif";
            sAlt = "Microsoft PowerPoint document";
            break;
        case "mdbx":
        case "mdb":
            sImage += "mdbicon.gif";
            sAlt = "Microsoft Access Database";
            break;
        case "txt":
            sImage += "txticon.gif";
            sAlt = "Text document";
            break;
        case "htm":
        case "html":
            sImage += "htmicon.gif";
            sAlt = "HTML document";
            break;
        case "tif":
        case "tiff":
        case "bmp":
        case "jpg":
        case "jpeg":
        case "gif":
        case "png":
            sImage += "bmpicon.gif";
            sAlt = "sImage file";
            break;
        case "wpd":
        case "wp":
            sImage += "wpdicon.gif";
            sAlt = "WordPerfect document";
            break;
        case "scr":
        case "vbs":
        case "js":
        case "wsh":
            sImage += "scricon.gif";
            sAlt = "Script file (executable!)";
            break;
        case "zip":
            sImage += "zipicon.gif";
            sAlt = "ZIP-compressed file";
            break;
        case "pdf":
            sImage += "pdficon.gif";
            sAlt = "Adobe Acrobat document";
            break;
        case "wav":
        case "avi":
        case "mid":
        case "midi":
        case "mp3":
        case "mpg":
        case "mpg4":
            sImage += "aviicon.gif";
            sAlt = "Multimedia file";
            break;
        case "cmd":
        case "bat":
        case "com":
        case "exe":
            sImage += "exeicon.gif";
            sAlt = "Program file (executable!)";
            break;
        default:
            sImage += "fileicon.gif";
            sAlt = "Unknown file type";
            break;
    }
    return "<img border='0' vspace='0' hspace='0' src='" + sImage + "' alt='" + sAlt + "'>";
}
function trim(string) {
	return string.replace(/^\s+/, '').replace(/\s+$/, '');
}
function right(str,n) {
	//returns the right n characters of str
	strlen = str.length
	return str.substring(strlen-n,strlen)
}
//date functions
function getSPDateFormat(d) {
	var D=new Date(d);
	return D.getFullYear() + "-" + (D.getMonth() + 1) + "-" + D.getDate() + "T00:00:00Z";
}
function GetTZOffset() {
	var d = new Date();
	return d.getTimezoneOffset();
}
function UTC2Local(sDate) {
	if ((sDate=='') || (sDate==null)) return;
	var oDate=new Date(sDate);
	oDate.setMinutes(oDate.getUTCMinutes() + iDST + (Session("TZ") * -1));
	return DateClean(oDate.toString());
}
function FillContentTypeSelect(sSite, sList, sType, sValue) {
	if (sType=='Edit') {
		var oParent=document.getElementById("ContentType").parentNode;
		//oParent.removeChild(document.getElementById("ContentType"));
		oParent.innerHTML="";
		var oInput=document.createElement("INPUT");
		oInput.setAttribute("type","hidden");
		oInput.id="ContentType";
		oInput.name="ContentType";
		oInput.value=sValue;
		oParent.appendChild(oInput);
	}
	else {
		var lists=new SPAPI_Lists(sSite);
		var items=lists.getListContentTypes(sList);
		var xTypes=items.responseXML.selectNodes("soap:Envelope/soap:Body/GetListContentTypesResponse/GetListContentTypesResult/ContentTypes/ContentType");
		var oSel=document.getElementById('ContentType');
		var oOption;
		for (t=0;t<xTypes.length;t++) {
			sType=xTypes[t].getAttribute("Name");
			if (sType=="Folder") continue;			//if you want folders, remark this out
			sDesc=xTypes[t].getAttribute("Description");
			oOption=document.createElement("OPTION");
			oOption.title=sDesc;
			oOption.value=sType;
			oOption.text=sType;
			if (sType==sValue) oOption.selected=true;
			oSel.add(oOption);
		}
	}
}
function DateClean(strDate) {
	var oD=new Date(strDate);
	var sD=oD.getMonth() + 1 + '/' + oD.getDate() + '/' + oD.getFullYear() + ' ';
	var sHour=oD.getHours();
	var sMinutes=oD.getMinutes();
	if (sMinutes<10) sMinutes='0' + sMinutes;
	var c='AM';
	if (sHour==12) {c='PM';}
	else if (sHour==0) {sHour=12;c='AM';}
	else if (sHour>12) {sHour=sHour - 12;c='PM';}
	sD+= sHour + ':' + sMinutes + c;
	//if (bShowExt) {
	//	var re=new RegExp("[A-Z]{3,3}");
	//	var ltz=strDate.match(re);
	//	sD+= ' ' + ltz;
	//}
	return sD;
}
function SP2NormalDate(d,sRep) {
	return (d==null) ? ( (arguments.length==2) ? sRep : "N/A") : Date.parseDate(d,"Y-m-d g:i:s").dateFormat(Date.patterns.ShortDatePattern);
}
function WriteAttribute(s,sRep) {
	return (s==null) ? ( (arguments.length==2) ? sRep : "N/A") : s;
}
function formatPhone(s) {
	return (s==null) ? "N/A" : reformat(stripWhitespace(s), "(", 3, ") ", 3, "-", 4);
}
function testNumber(oInput, iMin, iMax) {
	var iValue=oInput.value;
	if (iValue<iMin || iValue > iMax) {
		alert("Value for " + oInput.id + " must be between " + iMin + " and " + iMax + ".");
		oInput.focus();
		return;
	}
}
function reformat(s) {
	var arg;
	var sPos = 0;
	var resultString = "";
	for (var i = 1; i < reformat.arguments.length; i++) {
		arg = reformat.arguments[i];
		if (i % 2 == 1) resultString += arg;
		else {
			resultString += s.substring(sPos, sPos + arg);
			sPos += arg;
	   }
	}
	return resultString;
}
function stripWhitespace (s) {
	return stripCharsInBag (s, "()-. \t\n\r");
}
function stripCharsInBag (s, bag) {
	var i;
	var returnString = "";
	
	// Search through string's characters one by one.
	// If character is not in bag, append to returnString.
	
	for (i = 0; i < s.length; i++) {   
		// Check that current character isn't whitespace.
		var c = s.charAt(i);
		if (bag.indexOf(c) == -1) returnString += c;
	}
    return returnString;
}
function formatDate(d) {
	d=d.replace(/-/g,"/");
	oDate=new Date(Date.parse(d));
	sHour=parseInt(oDate.getDate());
	var sAMPM="AM";
	if (sHour>12) {sHour=(sHour-12); sAMPM="PM"; }
	var sMinute = right("0" + oDate.getMinutes(),2);
	return (oDate.getMonth() + 1) + "/" + oDate.getDate() + "/" + oDate.getFullYear() + ' ' + sHour + ":" + sMinute + " " + sAMPM;
}
function queryString(parameter) { 
	var loc = location.search.substring(1, location.search.length);
	var param_value = false;
	var params = loc.split("&");
	for (i=0; i<params.length;i++) {
		param_name = params[i].substring(0,params[i].indexOf('='));
		if (param_name == parameter) {
			param_value = params[i].substring(params[i].indexOf('=')+1)
		}
	}
	if (param_value) {
		return param_value;
	}
	else {
		return ""; //Here determine return if no parameter is found
	}
}

function FormShell(sTitle, iWidth) {
	var oDivParent=document.createElement("DIV");
	oDivParent.className="divForm DragContainer";
	oDivParent.style.width=iWidth + "px";
	var oDiv=document.createElement("DIV");
	oDiv.className="ms-standardheader ms-WPHeader divTitle";
	oDiv.innerHTML="<img style='cursor:pointer;' src='common/images/closeicon.gif' align='right'>";
	var oH3=document.createElement("H3");
	oH3.style.margin="3px";
	oH3.onmouseover=function() {top.over=true;}
	oH3.onmouseout=function() {top.over=false;}
	oH3.innerHTML=sTitle;
	oDiv.appendChild(oH3);
	oDivParent.appendChild(oDiv);
	var oTable=document.createElement("TABLE");
	oTable.className="tblForm";
	oTable.border=0;
	oTable.cellPadding=3;
	oTable.cellspacing=0;
	oTable.width="100%";
	oDivParent.appendChild(oTable);
	return oDivParent;
}
function CheckSel(b) {
	return (b) ? " selected " : "";
}
function ShowForm(oDiv) {
	//hide it, render it, get the actual height/width, position, unhide
	oDiv.style.visibility='hidden';
	document.body.appendChild(oDiv);
	var divHeight=oDiv.offsetHeight;
	oDiv.style.left=(document.body.clientWidth/2) - (oDiv.offsetWidth/2);
	oDiv.style.top=parseInt(((GetBodyHeight()/2) + GetBodyScrollTop()) - (divHeight/2));
	oDiv.style.visibility='visible';
}
function GetBodyScrollTop() {
	if (document.documentElement && !document.documentElement.scrollTop) return 0;
	// IE6 +4.01 but no scrolling going on
	else if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
	// IE6 +4.01 and user has scrolled
	else if (document.body && document.body.scrollTop) return document.body.scrollTop;
	// IE5 or DTD 3.2
}
function GetBodyHeight() {
	return (document.documentElement) ? document.documentElement.offsetHeight : document.body.offsetHeight;
}
function FormCancel(e) {
	var sDivID;
	if (window.event) { e=window.event; sDivID=e.srcElement.getAttribute('DivID'); }
	else sDivID=e.target.getAttribute('DivID');
	var oDiv=document.getElementById(sDivID);
	ClearEditors(oDiv);
	oDiv.parentNode.removeChild(oDiv);
}
function ClearEditors(oDiv) {
	var oColl=oDiv.getElementsByTagName("TEXTAREA");
	var s=""
	for (x=0;x<oColl.length;x++) {
		s=oColl[x].id;
		try {
			tinyMCE.execCommand('mceRemoveControl', false, s);
		}
		catch(e) {}
	}
}
function setupOpaqueBG(zIndex) {
	var oBG=document.createElement("DIV");
	oBG.id="divDarkBackground";
	oBG.style.position="absolute";
	oBG.style.top=0;
	oBG.style.left=0;
	oBG.style.width=document.body.offsetWidth;
	oBG.style.height=document.body.offsetHeight;
	oBG.style.zIndex=(zIndex || 100);
	oBG.style.backgroundColor="#424242";
	oBG.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
	oBG.style.opacity=50;
	return oBG;
}
function SetCookie2 (name, value) {
	//expires, path, domain, and secure are optional args, in that order
	var argv = arguments;
	var argc = arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	document.cookie = name + "=" + escape(value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}
function getCookieVal2 (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie2 (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) return getCookieVal2(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
	}
	return null;
}

