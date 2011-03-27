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

function SPAPI_UserGroup(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/UserGroup.asmx';
    
	this.addGroup = function(groupName, ownerIdentifier, ownerType, defaultUserLoginName, description)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddGroup';
		var params = [groupName, ownerIdentifier, ownerType, defaultUserLoginName, description];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName><ownerIdentifier>{1}</ownerIdentifier><ownerType>{2}</ownerType><defaultUserLoginName>{3}</defaultUserLoginName><description>{4}</description></AddGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addGroupToRole = function(roleName, groupName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddGroupToRole';
		var params = [roleName, groupName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddGroupToRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><groupName>{1}</groupName></AddGroupToRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addRole = function(roleName, description, permissionMask)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddRole';
		var params = [roleName, description, permissionMask];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><description>{1}</description><permissionMask>{2}</permissionMask></AddRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addRoleDef = function(roleName, description, permissionMask)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddRoleDef';
		var params = [roleName, description, permissionMask];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddRoleDef xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><description>{1}</description><permissionMask>{2}</permissionMask></AddRoleDef></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addUserCollectionToGroup = function(groupName, usersInfoXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddUserCollectionToGroup';
		var params = [groupName, usersInfoXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddUserCollectionToGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName><usersInfoXml>{1}</usersInfoXml></AddUserCollectionToGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addUserCollectionToRole = function(roleName, usersInfoXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddUserCollectionToRole';
		var params = [roleName, usersInfoXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddUserCollectionToRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><usersInfoXml>{1}</usersInfoXml></AddUserCollectionToRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addUserToGroup = function(groupName, userName, userLoginName, userEmail, userNotes)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddUserToGroup';
		var params = [groupName, userName, userLoginName, userEmail, userNotes];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddUserToGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName><userName>{1}</userName><userLoginName>{2}</userLoginName><userEmail>{3}</userEmail><userNotes>{4}</userNotes></AddUserToGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addUserToRole = function(roleName, userName, userLoginName, userEmail, userNotes)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/AddUserToRole';
		var params = [roleName, userName, userLoginName, userEmail, userNotes];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddUserToRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><userName>{1}</userName><userLoginName>{2}</userLoginName><userEmail>{3}</userEmail><userNotes>{4}</userNotes></AddUserToRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getAllUserCollectionFromWeb = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetAllUserCollectionFromWeb';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetAllUserCollectionFromWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getGroupCollection = function(groupNamesXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetGroupCollection';
		var params = [groupNamesXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetGroupCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupNamesXml>{0}</groupNamesXml></GetGroupCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getGroupCollectionFromRole = function(roleName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetGroupCollectionFromRole';
		var params = [roleName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetGroupCollectionFromRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName></GetGroupCollectionFromRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getGroupCollectionFromSite = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetGroupCollectionFromSite';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetGroupCollectionFromSite xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getGroupCollectionFromUser = function(userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetGroupCollectionFromUser';
		var params = [userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetGroupCollectionFromUser xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginName>{0}</userLoginName></GetGroupCollectionFromUser></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getGroupCollectionFromWeb = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetGroupCollectionFromWeb';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetGroupCollectionFromWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getGroupInfo = function(groupName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetGroupInfo';
		var params = [groupName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetGroupInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName></GetGroupInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getRoleCollection = function(roleNamesXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRoleCollection';
		var params = [roleNamesXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRoleCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleNamesXml>{0}</roleNamesXml></GetRoleCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getRoleCollectionFromGroup = function(groupName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRoleCollectionFromGroup';
		var params = [groupName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRoleCollectionFromGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName></GetRoleCollectionFromGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getRoleCollectionFromUser = function(userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRoleCollectionFromUser';
		var params = [userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRoleCollectionFromUser xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginName>{0}</userLoginName></GetRoleCollectionFromUser></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getRoleCollectionFromWeb = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRoleCollectionFromWeb';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRoleCollectionFromWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getRoleInfo = function(roleName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRoleInfo';
		var params = [roleName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRoleInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName></GetRoleInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getRolesAndPermissionsForCurrentUser = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRolesAndPermissionsForCurrentUser';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRolesAndPermissionsForCurrentUser xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getRolesAndPermissionsForSite = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetRolesAndPermissionsForSite';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetRolesAndPermissionsForSite xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserCollection = function(userLoginNamesXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserCollection';
		var params = [userLoginNamesXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginNamesXml>{0}</userLoginNamesXml></GetUserCollection></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserCollectionFromGroup = function(groupName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserCollectionFromGroup';
		var params = [groupName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserCollectionFromGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName></GetUserCollectionFromGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserCollectionFromRole = function(roleName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserCollectionFromRole';
		var params = [roleName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserCollectionFromRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName></GetUserCollectionFromRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserCollectionFromSite = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserCollectionFromSite';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserCollectionFromSite xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserCollectionFromWeb = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserCollectionFromWeb';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserCollectionFromWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserInfo = function(userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserInfo';
		var params = [userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginName>{0}</userLoginName></GetUserInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserLoginFromEmail = function(emailXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/GetUserLoginFromEmail';
		var params = [emailXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserLoginFromEmail xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><emailXml>{0}</emailXml></GetUserLoginFromEmail></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeGroup = function(groupName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveGroup';
		var params = [groupName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName></RemoveGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeGroupFromRole = function(roleName, groupName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveGroupFromRole';
		var params = [roleName, groupName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveGroupFromRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><groupName>{1}</groupName></RemoveGroupFromRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeRole = function(roleName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveRole';
		var params = [roleName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName></RemoveRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserCollectionFromGroup = function(groupName, userLoginNamesXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserCollectionFromGroup';
		var params = [groupName, userLoginNamesXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserCollectionFromGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName><userLoginNamesXml>{1}</userLoginNamesXml></RemoveUserCollectionFromGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserCollectionFromRole = function(roleName, userLoginNamesXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserCollectionFromRole';
		var params = [roleName, userLoginNamesXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserCollectionFromRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><userLoginNamesXml>{1}</userLoginNamesXml></RemoveUserCollectionFromRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserCollectionFromSite = function(userLoginNamesXml)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserCollectionFromSite';
		var params = [userLoginNamesXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserCollectionFromSite xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginNamesXml>{0}</userLoginNamesXml></RemoveUserCollectionFromSite></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserFromGroup = function(groupName, userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserFromGroup';
		var params = [groupName, userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserFromGroup xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><groupName>{0}</groupName><userLoginName>{1}</userLoginName></RemoveUserFromGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserFromRole = function(roleName, userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserFromRole';
		var params = [roleName, userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserFromRole xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><roleName>{0}</roleName><userLoginName>{1}</userLoginName></RemoveUserFromRole></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserFromSite = function(userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserFromSite';
		var params = [userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserFromSite xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginName>{0}</userLoginName></RemoveUserFromSite></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeUserFromWeb = function(userLoginName)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/RemoveUserFromWeb';
		var params = [userLoginName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveUserFromWeb xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginName>{0}</userLoginName></RemoveUserFromWeb></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateGroupInfo = function(oldGroupName, groupName, ownerIdentifier, ownerType, description)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/UpdateGroupInfo';
		var params = [oldGroupName, groupName, ownerIdentifier, ownerType, description];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateGroupInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><oldGroupName>{0}</oldGroupName><groupName>{1}</groupName><ownerIdentifier>{2}</ownerIdentifier><ownerType>{3}</ownerType><description>{4}</description></UpdateGroupInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateRoleDefInfo = function(oldRoleName, roleName, description, permissionMask)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/UpdateRoleDefInfo';
		var params = [oldRoleName, roleName, description, permissionMask];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateRoleDefInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><oldRoleName>{0}</oldRoleName><roleName>{1}</roleName><description>{2}</description><permissionMask>{3}</permissionMask></UpdateRoleDefInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateRoleInfo = function(oldRoleName, roleName, description, permissionMask)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/UpdateRoleInfo';
		var params = [oldRoleName, roleName, description, permissionMask];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateRoleInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><oldRoleName>{0}</oldRoleName><roleName>{1}</roleName><description>{2}</description><permissionMask>{3}</permissionMask></UpdateRoleInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateUserInfo = function(userLoginName, userName, userEmail, userNotes)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/directory/UpdateUserInfo';
		var params = [userLoginName, userName, userEmail, userNotes];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateUserInfo xmlns="http://schemas.microsoft.com/sharepoint/soap/directory/"><userLoginName>{0}</userLoginName><userName>{1}</userName><userEmail>{2}</userEmail><userNotes>{3}</userNotes></UpdateUserInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}