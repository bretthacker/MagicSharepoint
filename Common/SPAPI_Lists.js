// Copyright 2008 Darren Johnstone (http://darrenjohnstone.net)
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

function SPAPI_Lists(baseUrl) {
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/lists.asmx';
    this.ErrorMessage = "";
    var bAsync=false;
    var sCallback="";

    /* List template IDs */
    this.LIST_ID_ADMIN_TASKS        = 1200    // Administrator tasks list 
    this.LIST_ID_ANNOUNCEMENTS      = 104     // Announcements list 
    this.LIST_ID_BLOG_CATEGORIES    = 303     // Blog Categories list 
    this.LIST_ID_BLOG_COMMENTS      = 302     // Blog Comments list 
    this.LIST_ID_BLOG_POSTS         = 301     // Blog Posts list 
    this.LIST_ID_CONTACTS           = 105     // Contacts list 
    this.LIST_ID_CUSTOM_GRID        = 120     // Custom grid for a list 
    this.LIST_ID_CUSTOM_WORKFLOW    = 118     // Custom Workflow Process 
    this.LIST_ID_DATA_CONNECTIONS   = 130     // Data Connection library 
    this.LIST_ID_SATA_SOURCES       = 110     // Data sources 
    this.LIST_ID_DISCUSSION_BORAD   = 108     // Discussion board 
    this.LIST_ID_DOCUMENT_LIBRARY   = 101     // Document library 
    this.LIST_ID_EVENTS             = 106     // Events list 
    this.LIST_ID_GANTT_TASKS        = 150     // Gantt Tasks list 
    this.LIST_ID_GENERIC            = 100     // Generic list 
    this.LIST_ID_ISSUE_TRACKING     = 1100    // Issue tracking 
    this.LIST_ID_LINKS              = 103     // Links list 
    this.LIST_ID_LIST_TEMPLATE      = 114     // List template gallery 
    this.LIST_ID_MASTER_PAGE        = 116     // Master pages gallery 
    this.LIST_ID_MEETING_AGENDA     = 201     // Meeting Agenda list 
    this.LIST_ID_MEETING_ATTENDEES  = 202     // Meeting Attendees list 
    this.LIST_ID_MEETING_DECISIONS  = 204     // Meeting Decisions list 
    this.LIST_ID_MEETING_OBJECTIVES = 207     // Meeting Objectives list 
    this.LIST_ID_MEETING_SERIES     = 200     // Meeting Series list 
    this.LIST_ID_MEETING_TEXT_BOX   = 210     // Meeting text box 
    this.LIST_ID_MEETING_TTB        = 211     // Meeting Things To Bring list 
    this.LIST_ID_MEETING_WS_PAGES   = 212     // Meeting Workspace Pages list 
    this.LIST_ID_NO_CODE_WORKLOFWS  = 117     // No-Code Workflows 
    this.LIST_ID_PERSONAL_DOCLIB    = 2002    // Personal document library 
    this.LIST_ID_PICTURE_LIBRARY    = 109     // Picture library 
    this.LIST_ID_PORTAL_SITE_LIST   = 300     // Portal Sites list 
    this.LIST_ID_PRIVATE_DOCLIB     = 2003    // Private document library
    this.LIST_ID_SITE_TEMPLATES     = 111     // Site template gallery 
    this.LIST_ID_SURVEY             = 102     // Survey 
    this.LIST_ID_TASKS              = 107     // Tasks list 
    this.LIST_ID_USER_INFO          = 112     // User Information list 
    this.LIST_ID_WEB_PARTS          = 113     // Web Part gallery 
    this.LIST_ID_WIKI_PAGES         = 119     // Wiki Page library 
    this.LIST_ID_WORKFLOW_HISTORY   = 140     // Workflow History 
    this.LIST_ID_XML_FORMS          = 115     // XML Form library 
    /*-------------------*/
    
    this.setupCallback=function(lCallback) {
    	if (lCallback.length>0) {
	    	bAsync=true;
	    	sCallback=lCallback;
	    	this.core.setupAsync(sCallback);
	    }
	    else {
	    	bAsync=false;
	    	sCallback="";
	    	this.core.setupAsync("");
	    }
    }

    this.addAttachment = function(listName, listItemID, fileName, attachment) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/AddAttachment';
		var params = [listName, listItemID, fileName, attachment];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddAttachment xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><listItemID>{1}</listItemID><fileName>{2}</fileName><attachment>{3}</attachment></AddAttachment></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addDiscussionBoardItem = function(listName, message) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/AddDiscussionBoardItem';
		var params = [listName, message];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddDiscussionBoardItem xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><message>{1}</message></AddDiscussionBoardItem></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addList = function(listName, description, templateID) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/AddList';
		var params = [listName, description, templateID];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddList xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><description>{1}</description><templateID>{2}</templateID></AddList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addListFromFeature = function(listName, description, featureID, templateID) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/AddListFromFeature';
		var params = [listName, description, featureID, templateID];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddListFromFeature xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><description>{1}</description><featureID>{2}</featureID><templateID>{3}</templateID></AddListFromFeature></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.applyContentTypeToList = function(webUrl, contentTypeId, listName) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ApplyContentTypeToList';
		var params = [webUrl, contentTypeId, listName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ApplyContentTypeToList xmlns="http://schemas.microsoft.com/sharepoint/soap/"><webUrl>{0}</webUrl><contentTypeId>{1}</contentTypeId><listName>{2}</listName></ApplyContentTypeToList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.checkInFile = function(pageUrl, comment, checkinType) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/CheckInFile';
		var params = [pageUrl, comment, checkinType];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CheckInFile xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>{0}</pageUrl><comment>{1}</comment><CheckinType>{2}</CheckinType></CheckInFile></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.checkOutFile = function(pageUrl, checkoutToLocal, lastmodified) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/CheckOutFile';
		var params = [pageUrl, checkoutToLocal, lastmodified];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CheckOutFile xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>{0}</pageUrl><checkoutToLocal>{1}</checkoutToLocal><lastmodified>{2}</lastmodified></CheckOutFile></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createContentType = function(listName, displayName, parentType, fields, contentTypeProperties, addToView) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/CreateContentType';
		var params = [listName, displayName, parentType, fields, contentTypeProperties, addToView];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><displayName>{1}</displayName><parentType>{2}</parentType><fields>{3}</fields><contentTypeProperties>{4}</contentTypeProperties><addToView>{5}</addToView></CreateContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteAttachment = function(listName, listItemID, url) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteAttachment';
		var params = [listName, listItemID, url];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteAttachment xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><listItemID>{1}</listItemID><url>{2}</url></DeleteAttachment></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteContentType = function(listName, contentTypeId) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteContentType';
		var params = [listName, contentTypeId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId></DeleteContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteContentTypeXmlDocument = function(listName, contentTypeId, documentUri) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteContentTypeXmlDocument';
		var params = [listName, contentTypeId, documentUri];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteContentTypeXmlDocument xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId><documentUri>{2}</documentUri></DeleteContentTypeXmlDocument></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteList = function(listName) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteList';
		var params = [listName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteList xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName></DeleteList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getAttachmentCollection = function(listName, listItemID) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetAttachmentCollection';
		var params = [listName, listItemID];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetAttachmentCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><listItemID>{1}</listItemID></GetAttachmentCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getList = function(listName) {
	    var action = 'http://schemas.microsoft.com/sharepoint/soap/GetList';
	    var params = [listName];
	    var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetList xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName></GetList></soap:Body></soap:Envelope>';

	    return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getListAndView = function(listName, viewName) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListAndView';
		var params = [listName, viewName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListAndView xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName></GetListAndView></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListCollection = function()	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListCollection';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListContentType = function(listName, contentTypeId)	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListContentType';
		var params = [listName, contentTypeId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId></GetListContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListContentTypes = function(listName, contentTypeId) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListContentTypes';
		var params = [listName, contentTypeId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListContentTypes xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId></GetListContentTypes></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getListItemChanges = function(listName, viewFields, since, contains) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListItemChanges';
		var params = [listName, viewFields, since, contains];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListItemChanges xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewFields>{1}</viewFields><since>{2}</since><contains>{3}</contains></GetListItemChanges></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListItemChangesSinceToken = function(listName, viewName, query, viewFields, rowLimit, queryOptions, changeToken, contains) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListItemChangesSinceToken';
		var params = [listName, viewName, query, viewFields, rowLimit, queryOptions, changeToken, contains];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListItemChangesSinceToken xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName><query>{2}</query><viewFields>{3}</viewFields><rowLimit>{4}</rowLimit><queryOptions>{5}</queryOptions><changeToken>{6}</changeToken><contains>{7}</contains></GetListItemChangesSinceToken></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListItems = function(listName, viewName, query, viewFields, rowLimit, queryOptions, webID) {
	    if (queryOptions == null || queryOptions == '') queryOptions = '<QueryOptions/>';
	    
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListItems';
		var params = [listName, viewName, query, viewFields, rowLimit, queryOptions, webID];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListItems xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName><query>{2}</query><viewFields>{3}</viewFields><rowLimit>{4}</rowLimit><queryOptions>{5}</queryOptions><webID>{6}</webID></GetListItems></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getFolderList = function(listName, subFolder) {
	    var sQuery, sViewFields, sQueryOptions="";
	    sQuery = "<Query><Where><Eq><FieldRef Name='ContentType'/><Value Type='Text'>Folder</Value></Eq></Where><OrderBy><FieldRef Name ='BaseName'/></OrderBy></Query>";
	    sViewFields = "<ViewFields><FieldRef Name='BaseName'/></ViewFields>";
		if (subFolder.length>0) {
			//subFolder must be full path from the root...don't ask me why. ie: "/subsite/list/folder1/folder2"
			sQueryOptions="<QueryOptions><Folder>" + subFolder + "</Folder></QueryOptions>";
		}
	    var oXML = this.getListItems(listName, '', sQuery, sViewFields, '', sQueryOptions);
	    if (oXML.status == 200) {
	        return oXML.responseXML.getElementsByTagName("z:row");
	    }
	    else {
	        return oXML;
	    }
	}
	this.EnsureParentFolder = function(listName, folderName) {
	    var oList = this.getFolderList(listName, "");
	    var bOut = false;
	    var x = 0;
	    var sTest;
	    for (x = 0; x < oList.length; x++) {
	        sTest = oList[x].getAttribute("ows_BaseName");
	        if (sTest == folderName) {
	            bOut = true;
	            break;
	        }
	    }
	    if (!bOut) {
	        var res = this.createFolder(listName, folderName);
	        if (res.status == 200) {
	            bOut = true;
	        }
	        else {
	            this.ErrorMessage = res.statusText;
	        }
	    }
	    return bOut;
	}

	this.getVersionCollection = function(strlistID, strlistItemID, strFieldName) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetVersionCollection';
		var params = [strlistID, strlistItemID, strFieldName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetVersionCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strlistID>{0}</strlistID><strlistItemID>{1}</strlistItemID><strFieldName>{2}</strFieldName></GetVersionCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.undoCheckOut = function(pageUrl) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UndoCheckOut';
		var params = [pageUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UndoCheckOut xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>{0}</pageUrl></UndoCheckOut></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateContentType = function(listName, contentTypeId, contentTypeProperties, newFields, updateFields, deleteFields, addToView) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateContentType';
		var params = [listName, contentTypeId, contentTypeProperties, newFields, updateFields, deleteFields, addToView];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId><contentTypeProperties>{2}</contentTypeProperties><newFields>{3}</newFields><updateFields>{4}</updateFields><deleteFields>{5}</deleteFields><addToView>{6}</addToView></UpdateContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateContentTypeXmlDocument = function(listName, contentTypeId, newDocument) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateContentTypeXmlDocument';
		var params = [listName, contentTypeId, newDocument];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateContentTypeXmlDocument xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId><newDocument>{2}</newDocument></UpdateContentTypeXmlDocument></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateContentTypeXmlDocument = function(listName, contentTypeId, newDocument) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateContentTypeXmlDocument';
		var params = [listName, contentTypeId, newDocument];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateContentTypeXmlDocument xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><contentTypeId>{1}</contentTypeId><newDocument>{2}</newDocument></UpdateContentTypeXmlDocument></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateList = function(listName, listProperties, newFields, updateFields, deleteFields, listVersion) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateList';
		var params = [listName, listProperties, newFields, updateFields, deleteFields, listVersion];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateList xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><listProperties>{1}</listProperties><newFields>{2}</newFields><updateFields>{3}</updateFields><deleteFields>{4}</deleteFields><listVersion>{5}</listVersion></UpdateList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateListItems = function(listName, updates) {
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateListItems';
		var params = [listName, updates];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateListItems xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><updates>{1}</updates></UpdateListItems></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
    }

    this.SharepointFormatDate = function(dt) {
        // Only Date Column
        //("yyyy-MM-dd");
        var oDate = ((typeof (dt) == "string") ? new Date(dt) : dt);
        return oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + (oDate.getDate());
    }

    this.SharepointFormatDateTime = function(dt) {
        // Date And Time column
        var oDate = ((typeof (dt) == "string") ? new Date(dt) : dt);
        return this.SharepointFormatDate(dt) + 'T' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds() + 'Z';
    }

    this.ModerateApprove = function(listName, ID, ModStatus) {
        var batch = '<Batch OnError="Continue"><Method ID="1" Cmd="Moderate"><Field Name="ID">' + ID + '</Field><Field Name="_ModerationStatus">' + ModStatus + '</Field></Method></Batch>';
        return this.updateListItems(listName, batch);
    }

	this.callUpdateListItems = function(listName, fields, command, rootFolder) {
	    var batch;
	    var itemArray;

	    batch = "<Batch OnError='Continue'"

	    if (rootFolder != null) {
	        batch += " RootFolder='" + rootFolder + "'";
	    }

	    batch += ">";

	    if (fields.constructor != Array) {
	        itemArray = [fields];
	    }
	    else {
	        itemArray = fields;
	    }

	    for (var i = 0; i < itemArray.length; i++) {
	        batch += "<Method ID='1' Cmd='" + command + "'>";

	        for (att in itemArray[i]) {
	            batch += "<Field Name='" + att + "'><![CDATA[" + itemArray[i][att] + "]]></Field>";
	        }

	        batch += "</Method>";
	    }

	    batch += "</Batch>";

	    return this.updateListItems(listName, batch);
	}
	
	this.quickAddListItem = function(listName, fields, rootFolder) {
	    return this.callUpdateListItems(listName, fields, "New", rootFolder);
	}
	
    this.quickUpdateListItem = function(listName, fields) {
	    return this.callUpdateListItems(listName, fields, "Update");
	}
	
	this.quickDeleteListItem = function(listName, itemIds) {
	    var idFields = [ ];
	    
	    if (itemIds.constructor == Array)
	    {
	        for (var i=0; i<itemIds.length; i++)
	        {
	            idFields.push( { ID: itemIds[i] } );
	        }
	    }
	    else
	    {
	        idFields = [ { ID: itemIds } ];
	    }
	    
	    return this.callUpdateListItems(listName, idFields, "Delete");
	}
	
	this.callFolderUpdate = function(listName, folderName, command, rootFolder) {
	    var batch;
	    
	    batch = "<Batch OnError='Continue'"
	    
	    if (rootFolder != null)
	    {
	        batch += " RootFolder='" + rootFolder + "'";
	    }
	    
	    batch += ">";
	    
        batch += "<Method ID='1' Cmd='" + command + "'>"
        +"<Field Name='FSObjType'>1</Field>"
        + "<Field Name='BaseName'>" + folderName + "</Field>"
        + "<Field Name='Title'>" + folderName + "</Field>"
        + "</Method>"
        +"</Batch>";
        
	    return this.updateListItems(listName, batch);
	}
	
	this.createFolder = function(listName, folderName, rootFolder) {
	    return this.callFolderUpdate(listName, folderName, "New", rootFolder);
	}
}