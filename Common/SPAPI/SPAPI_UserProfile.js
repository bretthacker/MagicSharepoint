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

function SPAPI_UserProfile(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/UserProfileService.asmx';

	this.addColleague = function(accountName, colleagueAccountName, group, privacy, isInWorkGroup)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/AddColleague';
		var params = [accountName, colleagueAccountName, group, privacy, isInWorkGroup];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddColleague xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><colleagueAccountName>{1}</colleagueAccountName><group>{2}</group><privacy>{3}</privacy><isInWorkGroup>{4}</isInWorkGroup></AddColleague></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addLink = function(accountName, name, url, group, privacy)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/AddLink';
		var params = [accountName, name, url, group, privacy];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddLink xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><name>{1}</name><url>{2}</url><group>{3}</group><privacy>{4}</privacy></AddLink></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addMembership = function(accountName, membershipInfo, group, privacy)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/AddMembership';
		var params = [accountName, membershipInfo, group, privacy];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddMembership xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><membershipInfo>{1}</membershipInfo><group>{2}</group><privacy>{3}</privacy></AddMembership></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addPinnedLink = function(accountName, name, url)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/AddPinnedLink';
		var params = [accountName, name, url];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddPinnedLink xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><name>{1}</name><url>{2}</url></AddPinnedLink></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createMemberGroup = function(membershipInfo)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/CreateMemberGroup';
		var params = [membershipInfo];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateMemberGroup xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><membershipInfo>{0}</membershipInfo></CreateMemberGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createUserProfileByAccountName = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/CreateUserProfileByAccountName';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateUserProfileByAccountName xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></CreateUserProfileByAccountName></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getCommonColleagues = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetCommonColleagues';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetCommonColleagues xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetCommonColleagues></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getCommonManager = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetCommonManager';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetCommonManager xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetCommonManager></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getCommonMemberships = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetCommonMemberships';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetCommonMemberships xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetCommonMemberships></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getInCommon = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetInCommon';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetInCommon xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetInCommon></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getPropertyChoiceList = function(propertyName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetPropertyChoiceList';
		var params = [propertyName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetPropertyChoiceList xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><propertyName>{0}</propertyName></GetPropertyChoiceList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserColleagues = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserColleagues';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserColleagues xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetUserColleagues></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserLinks = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserLinks';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserLinks xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetUserLinks></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserMemberships = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserMemberships';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserMemberships xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetUserMemberships></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserPinnedLinks = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserPinnedLinks';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserPinnedLinks xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></GetUserPinnedLinks></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserProfileByGuid = function(guid)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserProfileByGuid';
		var params = [guid];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserProfileByGuid xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><guid>{0}</guid></GetUserProfileByGuid></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserProfileByIndex = function(index)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserProfileByIndex';
		var params = [index];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserProfileByIndex xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><index>{0}</index></GetUserProfileByIndex></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserProfileByName = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserProfileByName';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserProfileByName xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><AccountName>{0}</AccountName></GetUserProfileByName></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserProfileCount = function()
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserProfileCount';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserProfileCount xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getUserProfileSchema = function()
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/GetUserProfileSchema';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetUserProfileSchema xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.modifyUserPropertyByAccountName = function(accountName, newData)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/ModifyUserPropertyByAccountName';
		var params = [accountName, newData];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ModifyUserPropertyByAccountName xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><newData>{1}</newData></ModifyUserPropertyByAccountName></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeAllColleagues = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveAllColleagues';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveAllColleagues xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></RemoveAllColleagues></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeAllLinks = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveAllLinks';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveAllLinks xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></RemoveAllLinks></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeAllMemberships = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveAllMemberships';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveAllMemberships xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></RemoveAllMemberships></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeAllPinnedLinks = function(accountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveAllPinnedLinks';
		var params = [accountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveAllPinnedLinks xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName></RemoveAllPinnedLinks></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeColleague = function(accountName, colleagueAccountName)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveColleague';
		var params = [accountName, colleagueAccountName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveColleague xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><colleagueAccountName>{1}</colleagueAccountName></RemoveColleague></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeLink = function(accountName, id)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveLink';
		var params = [accountName, id];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveLink xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><id>{1}</id></RemoveLink></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeMembership = function(accountName, sourceInternal, sourceReference)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemoveMembership';
		var params = [accountName, sourceInternal, sourceReference];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveMembership xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><sourceInternal>{1}</sourceInternal><sourceReference>{2}</sourceReference></RemoveMembership></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removePinnedLink = function(accountName, id)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/RemovePinnedLink';
		var params = [accountName, id];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemovePinnedLink xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><id>{1}</id></RemovePinnedLink></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateColleaguePrivacy = function(accountName, colleagueAccountName, newPrivacy)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/UpdateColleaguePrivacy';
		var params = [accountName, colleagueAccountName, newPrivacy];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateColleaguePrivacy xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><colleagueAccountName>{1}</colleagueAccountName><newPrivacy>{2}</newPrivacy></UpdateColleaguePrivacy></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateLink = function(accountName, data)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/UpdateLink';
		var params = [accountName, data];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateLink xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><data>{1}</data></UpdateLink></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateMembershipPrivacy = function(accountName, sourceInternal, sourceReference, newPrivacy)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/UpdateMembershipPrivacy';
		var params = [accountName, sourceInternal, sourceReference, newPrivacy];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateMembershipPrivacy xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><sourceInternal>{1}</sourceInternal><sourceReference>{2}</sourceReference><newPrivacy>{3}</newPrivacy></UpdateMembershipPrivacy></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updatePinnedLink = function(accountName, data)
	{
		var action = 'http://microsoft.com/webservices/SharePointPortalServer/UserProfileService/UpdatePinnedLink';
		var params = [accountName, data];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdatePinnedLink xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService"><accountName>{0}</accountName><data>{1}</data></UpdatePinnedLink></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}