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

function SPAPI_Webs(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Webs.asmx';
    var bAsync=false;
    var sCallback="";
    
    this.setupCallback=function(lCallback) {
    	bAsync=true;
    	sCallback=lCallback;
    	this.core.setupAsync(sCallback);
    }

	this.createContentType = function(displayName, parentType, newFields, contentTypeProperties)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/CreateContentType';
		var params = [displayName, parentType, newFields, contentTypeProperties];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><displayName>{0}</displayName><parentType>{1}</parentType><newFields>{2}</newFields><contentTypeProperties>{3}</contentTypeProperties></CreateContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.customizeCss = function(cssFile)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/CustomizeCss';
		var params = [cssFile];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CustomizeCss xmlns="http://schemas.microsoft.com/sharepoint/soap/"><cssFile>{0}</cssFile></CustomizeCss></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteContentType = function(contentTypeId)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteContentType';
		var params = [contentTypeId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><contentTypeId>{0}</contentTypeId></DeleteContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getActivatedFeatures = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetActivatedFeatures';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetActivatedFeatures xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getAllSubWebCollection = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetAllSubWebCollection';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetAllSubWebCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getColumns = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetColumns';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetColumns xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getContentType = function(contentTypeId)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetContentType';
		var params = [contentTypeId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><contentTypeId>{0}</contentTypeId></GetContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getContentTypes = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetContentTypes';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetContentTypes xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getCustomizedPageStatus = function(fileUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetCustomizedPageStatus';
		var params = [fileUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetCustomizedPageStatus xmlns="http://schemas.microsoft.com/sharepoint/soap/"><fileUrl>{0}</fileUrl></GetCustomizedPageStatus></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListTemplates = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListTemplates';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListTemplates xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWeb = function(webUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetWeb';
		var params = [webUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/"><webUrl>{0}</webUrl></GetWeb></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebCollection = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetWebCollection';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeContentTypeXmlDocument = function(contentTypeId, documentUri)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/RemoveContentTypeXmlDocument';
		var params = [contentTypeId, documentUri];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveContentTypeXmlDocument xmlns="http://schemas.microsoft.com/sharepoint/soap/"><contentTypeId>{0}</contentTypeId><documentUri>{1}</documentUri></RemoveContentTypeXmlDocument></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.revertAllFileContentStreams = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/RevertAllFileContentStreams';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RevertAllFileContentStreams xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.revertCss = function(cssFile)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/RevertCss';
		var params = [cssFile];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RevertCss xmlns="http://schemas.microsoft.com/sharepoint/soap/"><cssFile>{0}</cssFile></RevertCss></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.revertFileContentStream = function(fileUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/RevertFileContentStream';
		var params = [fileUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RevertFileContentStream xmlns="http://schemas.microsoft.com/sharepoint/soap/"><fileUrl>{0}</fileUrl></RevertFileContentStream></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateColumns = function(newFields, updateFields, deleteFields)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateColumns';
		var params = [newFields, updateFields, deleteFields];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateColumns xmlns="http://schemas.microsoft.com/sharepoint/soap/"><newFields>{0}</newFields><updateFields>{1}</updateFields><deleteFields>{2}</deleteFields></UpdateColumns></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateContentType = function(contentTypeId, contentTypeProperties, newFields, updateFields, deleteFields)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateContentType';
		var params = [contentTypeId, contentTypeProperties, newFields, updateFields, deleteFields];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateContentType xmlns="http://schemas.microsoft.com/sharepoint/soap/"><contentTypeId>{0}</contentTypeId><contentTypeProperties>{1}</contentTypeProperties><newFields>{2}</newFields><updateFields>{3}</updateFields><deleteFields>{4}</deleteFields></UpdateContentType></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateContentTypeXmlDocument = function(contentTypeId, newDocument)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateContentTypeXmlDocument';
		var params = [contentTypeId, newDocument];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateContentTypeXmlDocument xmlns="http://schemas.microsoft.com/sharepoint/soap/"><contentTypeId>{0}</contentTypeId><newDocument>{1}</newDocument></UpdateContentTypeXmlDocument></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.webUrlFromPageUrl = function(pageUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/WebUrlFromPageUrl';
		var params = [pageUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><WebUrlFromPageUrl xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>{0}</pageUrl></WebUrlFromPageUrl></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}