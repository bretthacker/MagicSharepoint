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

function SPAPI_SiteData(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/SiteData.asmx';
    
	this.enumerateFolder = function(strFolderUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/EnumerateFolder';
		var params = [strFolderUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><EnumerateFolder xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strFolderUrl>{0}</strFolderUrl></EnumerateFolder></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getAttachments = function(strListName, strItemId)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetAttachments';
		var params = [strListName, strItemId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetAttachments xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strListName>{0}</strListName><strItemId>{1}</strItemId></GetAttachments></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getChanges = function(objectType, contentDatabaseId, lastChangeId, currentChangeId, timeout)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetChanges';
		var params = [objectType, contentDatabaseId, lastChangeId, currentChangeId, timeout];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetChanges xmlns="http://schemas.microsoft.com/sharepoint/soap/"><objectType>{0}</objectType><contentDatabaseId>{1}</contentDatabaseId><LastChangeId>{2}</LastChangeId><CurrentChangeId>{3}</CurrentChangeId><Timeout>{4}</Timeout></GetChanges></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getContent = function(objectType, objectId, folderUrl, itemId, retrieveChildItems, securityOnly, lastItemIdOnPage)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetContent';
		var params = [objectType, objectId, folderUrl, itemId, retrieveChildItems, securityOnly, lastItemIdOnPage];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetContent xmlns="http://schemas.microsoft.com/sharepoint/soap/"><objectType>{0}</objectType><objectId>{1}</objectId><folderUrl>{2}</folderUrl><itemId>{3}</itemId><retrieveChildItems>{4}</retrieveChildItems><securityOnly>{5}</securityOnly><lastItemIdOnPage>{6}</lastItemIdOnPage></GetContent></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getList = function(strListName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetList';
		var params = [strListName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetList xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strListName>{0}</strListName></GetList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListCollection = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListCollection';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListItems = function(strListName, strQuery, strViewFields, uRowLimit)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetListItems';
		var params = [strListName, strQuery, strViewFields, uRowLimit];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListItems xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strListName>{0}</strListName><strQuery>{1}</strQuery><strViewFields>{2}</strViewFields><uRowLimit>{3}</uRowLimit></GetListItems></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getSite = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetSite';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetSite xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getSiteAndWeb = function(strUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetSiteAndWeb';
		var params = [strUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetSiteAndWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strUrl>{0}</strUrl></GetSiteAndWeb></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getSiteUrl = function(url)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetSiteUrl';
		var params = [url];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetSiteUrl xmlns="http://schemas.microsoft.com/sharepoint/soap/"><Url>{0}</Url></GetSiteUrl></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getURLSegments = function(strURL)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetURLSegments';
		var params = [strURL];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetURLSegments xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strURL>{0}</strURL></GetURLSegments></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWeb = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetWeb';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}