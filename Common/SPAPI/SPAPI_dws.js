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

function SPAPI_dws()
{
    this.core = new SPAPI_Core(baseUrl);
    this.serviceUrl = baseUrl + '/_vti_bin/dws.asmx';
    
	this.canCreateDwsUrl = function(url)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/dws/CanCreateDwsUrl';
		var params = [url];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CanCreateDwsUrl xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><url>{0}</url></CanCreateDwsUrl></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createDws = function(name, users, title, documents)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/CreateDws';
		var params = [name, users, title, documents];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateDws xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><name>{0}</name><users>{1}</users><title>{2}</title><documents>{3}</documents></CreateDws></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createFolder = function(url)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/CreateFolder';
		var params = [url];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateFolder xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><url>{0}</url></CreateFolder></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteDws = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/DeleteDws';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteDws xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteFolder = function(url)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/DeleteFolder';
		var params = [url];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteFolder xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><url>{0}</url></DeleteFolder></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.findDwsDoc = function(id)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/FindDwsDoc';
		var params = [id];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><FindDwsDoc xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><id>{0}</id></FindDwsDoc></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getDwsData = function(document, lastUpdate)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/GetDwsData';
		var params = [document, lastUpdate];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetDwsData xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><document>{0}</document><lastUpdate>{1}</lastUpdate></GetDwsData></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getDwsMetaData = function(document, id, minimal)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/GetDwsMetaData';
		var params = [document, id, minimal];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetDwsMetaData xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><document>{0}</document><id>{1}</id><minimal>{2}</minimal></GetDwsMetaData></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeDwsUser = function(id)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/RemoveDwsUser';
		var params = [id];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveDwsUser xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><id>{0}</id></RemoveDwsUser></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.renameDws = function(title)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/RenameDws';
		var params = [title];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RenameDws xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><title>{0}</title></RenameDws></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateDwsData = function(updates, meetingInstance)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/dws/soap/UpdateDwsData';
		var params = [updates, meetingInstance];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateDwsData xmlns="http://schemas.microsoft.com/sharepoint/soap/dws/"><updates>{0}</updates><meetingInstance>{1}</meetingInstance></UpdateDwsData></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}