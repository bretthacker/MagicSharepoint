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

function SPAPI_Permissions(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Permissions.asmx';
    
	this.addPermission = function(objectName, objectType, permissionIdentifier, permissionType, permissionMask)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddPermission';
		var params = [objectName, objectType, permissionIdentifier, permissionType, permissionMask];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddPermission xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><objectName>{0}</objectName><objectType>{1}</objectType><permissionIdentifier>{2}</permissionIdentifier><permissionType>{3}</permissionType><permissionMask>{4}</permissionMask></AddPermission></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addPermissionCollection = function(objectName, objectType, permissionsInfoXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddPermissionCollection';
		var params = [objectName, objectType, permissionsInfoXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddPermissionCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><objectName>{0}</objectName><objectType>{1}</objectType><permissionsInfoXml>{2}</permissionsInfoXml></AddPermissionCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getPermissionCollection = function(objectName, objectType)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetPermissionCollection';
		var params = [objectName, objectType];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetPermissionCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><objectName>{0}</objectName><objectType>{1}</objectType></GetPermissionCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removePermission = function(objectName, objectType, permissionIdentifier, permissionType)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemovePermission';
		var params = [objectName, objectType, permissionIdentifier, permissionType];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemovePermission xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><objectName>{0}</objectName><objectType>{1}</objectType><permissionIdentifier>{2}</permissionIdentifier><permissionType>{3}</permissionType></RemovePermission></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removePermissionCollection = function(objectName, objectType, memberIdsXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemovePermissionCollection';
		var params = [objectName, objectType, memberIdsXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemovePermissionCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><objectName>{0}</objectName><objectType>{1}</objectType><memberIdsXml>{2}</memberIdsXml></RemovePermissionCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updatePermission = function(objectName, objectType, permissionIdentifier, permissionType, permissionMask)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/UpdatePermission';
		var params = [objectName, objectType, permissionIdentifier, permissionType, permissionMask];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdatePermission xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><objectName>{0}</objectName><objectType>{1}</objectType><permissionIdentifier>{2}</permissionIdentifier><permissionType>{3}</permissionType><permissionMask>{4}</permissionMask></UpdatePermission></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}