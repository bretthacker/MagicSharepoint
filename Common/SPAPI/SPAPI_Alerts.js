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

function SPAPI_Alerts(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Alerts.asmx';
    
    this.deleteAlerts = function(iDs)
	{
		var action = '"http://schemas.microsoft.com/sharepoint/soap/2002/1/alerts/DeleteAlerts';
		var params = [iDs];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteAlerts xmlns="http://schemas.microsoft.com/sharepoint/soap/2002/1/alerts/"><IDs>{0}</IDs></DeleteAlerts></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getAlerts = function()
	{
		var action = '"http://schemas.microsoft.com/sharepoint/soap/2002/1/alerts/GetAlerts';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetAlerts xmlns="http://schemas.microsoft.com/sharepoint/soap/2002/1/alerts/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}