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

function SPAPI_SPSearch(baseUrl)
{
    this.core = new SPAPI_Core();
    var action = this.serviceUrl = baseUrl + '/_vti_bin/SPSearch.asmx';
    
	this.query = function(queryXml)
	{
		var action = 'urn:Microsoft.Search/Query';
		var params = ['<![CDATA[' + queryXml + ']]>'];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Query xmlns="urn:Microsoft.Search"><queryXml>{0}</queryXml></Query></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.queryEx = function(queryXml)
	{
		var action = 'urn:Microsoft.Search/Query';
		var params = ['<![CDATA[' + queryXml + ']]>'];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><QueryEx xmlns="http://microsoft.com/webservices/SharePoint/QueryService"><queryXml>{0}</queryXml></QueryEx></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.registration = function(registrationXml)
	{
		var action = 'urn:Microsoft.Search/Registration';
		var params = ['<![CDATA[' + registrationXml + ']]>'];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Registration xmlns="urn:Microsoft.Search"><registrationXml>{0}</registrationXml></Registration></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.status = function()
	{
		var action = 'urn:Microsoft.Search/Status';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Status xmlns="urn:Microsoft.Search" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}