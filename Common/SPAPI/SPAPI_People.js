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

function SPAPI_People(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/People.asmx';
    
	this.resolvePrincipals = function(principalKeys, principalType, addToUserInfoList)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ResolvePrincipals';
		var params = [principalKeys, principalType, addToUserInfoList];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ResolvePrincipals xmlns="http://schemas.microsoft.com/sharepoint/soap/"><principalKeys>{0}</principalKeys><principalType>{1}</principalType><addToUserInfoList>{2}</addToUserInfoList></ResolvePrincipals></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.searchPrincipals = function(searchText, maxResults, principalType)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SearchPrincipals';
		var params = [searchText, maxResults, principalType];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SearchPrincipals xmlns="http://schemas.microsoft.com/sharepoint/soap/"><searchText>{0}</searchText><maxResults>{1}</maxResults><principalType>{2}</principalType></SearchPrincipals></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}