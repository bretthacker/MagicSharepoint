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

function SPAPI_Views(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Views.asmx';
    
	this.addView = function(listName, viewName, viewFields, query, rowLimit, type, makeViewDefault)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/AddView';
		var params = [listName, viewName, viewFields, query, rowLimit, type, makeViewDefault];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddView xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName><viewFields>{2}</viewFields><query>{3}</query><rowLimit>{4}</rowLimit><type>{5}</type><makeViewDefault>{6}</makeViewDefault></AddView></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteView = function(listName, viewName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteView';
		var params = [listName, viewName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteView xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName></DeleteView></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getView = function(listName, viewName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetView';
		var params = [listName, viewName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetView xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName></GetView></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getViewCollection = function(listName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetViewCollection';
		var params = [listName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetViewCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName></GetViewCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getViewHtml = function(listName, viewName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetViewHtml';
		var params = [listName, viewName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetViewHtml xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName></GetViewHtml></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateView = function(listName, viewName, viewProperties, query, viewFields, aggregations, formats, rowLimit)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateView';
		var params = [listName, viewName, viewProperties, query, viewFields, aggregations, formats, rowLimit];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateView xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName><viewProperties>{2}</viewProperties><query>{3}</query><viewFields>{4}</viewFields><aggregations>{5}</aggregations><formats>{6}</formats><rowLimit>{7}</rowLimit></UpdateView></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
    this.updateViewHtml = function(listName, viewName, viewProperties, toolbar, viewHeader, viewBody, viewFooter, viewEmpty, rowLimitExceeded, query, viewFields, aggregations, formats, rowLimit)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateViewHtml';
		var params = [listName, viewName, viewProperties, toolbar, viewHeader, viewBody, viewFooter, viewEmpty, rowLimitExceeded, query, viewFields, aggregations, formats, rowLimit];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateViewHtml xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName><viewProperties>{2}</viewProperties><toolbar>{3}</toolbar><viewHeader>{4}</viewHeader><viewBody>{5}</viewBody><viewFooter>{6}</viewFooter><viewEmpty>{7}</viewEmpty><rowLimitExceeded>{8}</rowLimitExceeded><query>{9}</query><viewFields>{10}</viewFields><aggregations>{11}</aggregations><formats>{12}</formats><rowLimit>{13}</rowLimit></UpdateViewHtml></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
    this.updateViewHtml2 = function(listName, viewName, viewProperties, toolbar, viewHeader, viewBody, viewFooter, viewEmpty, rowLimitExceeded, query, viewFields, aggregations, formats, rowLimit, openApplicationExtension)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/UpdateViewHtml2';
		var params = [listName, viewName, viewProperties, toolbar, viewHeader, viewBody, viewFooter, viewEmpty, rowLimitExceeded, query, viewFields, aggregations, formats, rowLimit, openApplicationExtension];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateViewHtml2 xmlns="http://schemas.microsoft.com/sharepoint/soap/"><listName>{0}</listName><viewName>{1}</viewName><viewProperties>{2}</viewProperties><toolbar>{3}</toolbar><viewHeader>{4}</viewHeader><viewBody>{5}</viewBody><viewFooter>{6}</viewFooter><viewEmpty>{7}</viewEmpty><rowLimitExceeded>{8}</rowLimitExceeded><query>{9}</query><viewFields>{10}</viewFields><aggregations>{11}</aggregations><formats>{12}</formats><rowLimit>{13}</rowLimit><openApplicationExtension>{14}</openApplicationExtension></UpdateViewHtml2></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}