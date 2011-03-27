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

function SPAPI_Sites(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Sites.asmx';
    
	this.exportWeb = function(jobName, webUrl, dataPath, includeSubwebs, includeUserSecurity, overWrite, cabSize)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ExportWeb';
		var params = [jobName, webUrl, dataPath, includeSubwebs, includeUserSecurity, overWrite, cabSize];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ExportWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/"><jobName>{0}</jobName><webUrl>{1}</webUrl><dataPath>{2}</dataPath><includeSubwebs>{3}</includeSubwebs><includeUserSecurity>{4}</includeUserSecurity><overWrite>{5}</overWrite><cabSize>{6}</cabSize></ExportWeb></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getSiteTemplates = function(lCID)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetSiteTemplates';
		var params = [lCID];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetSiteTemplates xmlns="http://schemas.microsoft.com/sharepoint/soap/"><LCID>{0}</LCID></GetSiteTemplates></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUpdatedFormDigest = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetUpdatedFormDigest';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUpdatedFormDigest xmlns="http://schemas.microsoft.com/sharepoint/soap/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.importWeb = function(jobName, webUrl, dataFiles, logPath, includeUserSecurity, overWrite)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ImportWeb';
		var params = [jobName, webUrl, dataFiles, logPath, includeUserSecurity, overWrite];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ImportWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/"><jobName>{0}</jobName><webUrl>{1}</webUrl><dataFiles>{2}</dataFiles><logPath>{3}</logPath><includeUserSecurity>{4}</includeUserSecurity><overWrite>{5}</overWrite></ImportWeb></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}