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

function SPAPI_Versions(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Versions.asmx';
    
	this.deleteAllVersions = function(fileName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteAllVersions';
		var params = [fileName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteAllVersions xmlns="http://schemas.microsoft.com/sharepoint/soap/"><fileName>{0}</fileName></DeleteAllVersions></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteVersion = function(fileName, fileVersion)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/DeleteVersion';
		var params = [fileName, fileVersion];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteVersion xmlns="http://schemas.microsoft.com/sharepoint/soap/"><fileName>{0}</fileName><fileVersion>{1}</fileVersion></DeleteVersion></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getVersions = function(fileName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/GetVersions';
		var params = [fileName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetVersions xmlns="http://schemas.microsoft.com/sharepoint/soap/"><fileName>{0}</fileName></GetVersions></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.restoreVersion = function(fileName, fileVersion)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/RestoreVersion';
		var params = [fileName, fileVersion];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RestoreVersion xmlns="http://schemas.microsoft.com/sharepoint/soap/"><fileName>{0}</fileName><fileVersion>{1}</fileVersion></RestoreVersion></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}