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

function SPAPI_SharePointEmailWS(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/SharePointEmailWS.asmx';
    
    this.changeContactsMembershipInDistributionGroup = function(alias, addListForContacts, deleteListForContacts, deleteAllCurrentMembers)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/ChangeContactsMembershipInDistributionGroup';
		var params = [alias, addListForContacts, deleteListForContacts, deleteAllCurrentMembers];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ChangeContactsMembershipInDistributionGroup xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias><AddListForContacts>{1}</AddListForContacts><DeleteListForContacts>{2}</DeleteListForContacts><DeleteAllCurrentMembers>{3}</DeleteAllCurrentMembers></ChangeContactsMembershipInDistributionGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.changeUsersMembershipInDistributionGroup = function(alias, addNt4NameList, deleteNt4NameList, deleteAllCurrentMembers)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/ChangeUsersMembershipInDistributionGroup';
		var params = [alias, addNt4NameList, deleteNt4NameList, deleteAllCurrentMembers];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ChangeUsersMembershipInDistributionGroup xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias><AddNt4NameList>{1}</AddNt4NameList><DeleteNt4NameList>{2}</DeleteNt4NameList><DeleteAllCurrentMembers>{3}</DeleteAllCurrentMembers></ChangeUsersMembershipInDistributionGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createContact = function(alias, firstName, lastName, forwardingEmail, flags)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/CreateContact';
		var params = [alias, firstName, lastName, forwardingEmail, flags];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateContact xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias><FirstName>{1}</FirstName><LastName>{2}</LastName><ForwardingEmail>{3}</ForwardingEmail><Flags>{4}</Flags></CreateContact></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createDistributionGroup = function(alias, name, description, contactCN, info, flags)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/CreateDistributionGroup';
		var params = [alias, name, description, contactCN, info, flags];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateDistributionGroup xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias><Name>{1}</Name><Description>{2}</Description><ContactCN>{3}</ContactCN><Info>{4}</Info><Flags>{5}</Flags></CreateDistributionGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteContact = function(alias)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/DeleteContact';
		var params = [alias];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteContact xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias></DeleteContact></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteDistributionGroup = function(alias, info)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/DeleteDistributionGroup';
		var params = [alias, info];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteDistributionGroup xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias><Info>{1}</Info></DeleteDistributionGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getJobStatus = function(jobId)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/GetJobStatus';
		var params = [jobId];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetJobStatus xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><JobId>{0}</JobId></GetJobStatus></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.modifyContact = function(oldAlias, newAlias, firstName, lastName, forwardingEmail, flags)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/ModifyContact';
		var params = [oldAlias, newAlias, firstName, lastName, forwardingEmail, flags];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ModifyContact xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><OldAlias>{0}</OldAlias><NewAlias>{1}</NewAlias><FirstName>{2}</FirstName><LastName>{3}</LastName><ForwardingEmail>{4}</ForwardingEmail><Flags>{5}</Flags></ModifyContact></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.modifyDistributionGroup = function(alias, name, description, contactCN, info, flags)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/ModifyDistributionGroup';
		var params = [alias, name, description, contactCN, info, flags];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ModifyDistributionGroup xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><Alias>{0}</Alias><Name>{1}</Name><Description>{2}</Description><ContactCN>{3}</ContactCN><Info>{4}</Info><Flags>{5}</Flags></ModifyDistributionGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.renameDistributionGroup = function(oldAlias, newAlias, info)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/SharePointEmailWS/RenameDistributionGroup';
		var params = [oldAlias, newAlias, info];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RenameDistributionGroup xmlns="http://microsoft.com/webservices/SharePoint/SharepointEmailWS/"><OldAlias>{0}</OldAlias><NewAlias>{1}</NewAlias><Info>{2}</Info></RenameDistributionGroup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}