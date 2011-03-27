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

function SPAPI_Meetings(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/meetings.asmx';
    
	this.addMeeting = function(organizerEmail, uid, sequence, utcDateStamp, title, location, utcDateStart, utcDateEnd, nonGregorian)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/AddMeeting';
		var params = [organizerEmail, uid, sequence, utcDateStamp, title, location, utcDateStart, utcDateEnd, nonGregorian];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddMeeting xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><organizerEmail>{0}</organizerEmail><uid>{1}</uid><sequence>{2}</sequence><utcDateStamp>{3}</utcDateStamp><title>{4}</title><location>{5}</location><utcDateStart>{6}</utcDateStart><utcDateEnd>{7}</utcDateEnd><nonGregorian>{8}</nonGregorian></AddMeeting></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addMeetingFromICal = function(organizerEmail, icalText)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/AddMeetingFromICal';
		var params = [organizerEmail, icalText];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddMeetingFromICal xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><organizerEmail>{0}</organizerEmail><icalText>{1}</icalText></AddMeetingFromICal></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createWorkspace = function(title, templateName, lcid, timeZoneInformation)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/CreateWorkspace';
		var params = [title, templateName, lcid, timeZoneInformation];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateWorkspace xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><title>{0}</title><templateName>{1}</templateName><lcid>{2}</lcid><timeZoneInformation>{3}</timeZoneInformation></CreateWorkspace></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteWorkspace = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/DeleteWorkspace';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteWorkspace xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getMeetingWorkspaces = function(recurring)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/GetMeetingWorkspaces';
		var params = [recurring];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetMeetingWorkspaces xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><recurring>{0}</recurring></GetMeetingWorkspaces></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getMeetingsInformation = function(requestFlags, lcid)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/GetMeetingsInformation';
		var params = [requestFlags, lcid];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetMeetingsInformation xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><requestFlags>{0}</requestFlags><lcid>{1}</lcid></GetMeetingsInformation></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeMeeting = function(recurrenceId, uid, sequence, utcDateStamp, cancelMeeting)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/RemoveMeeting';
		var params = [recurrenceId, uid, sequence, utcDateStamp, cancelMeeting];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveMeeting xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><recurrenceId>{0}</recurrenceId><uid>{1}</uid><sequence>{2}</sequence><utcDateStamp>{3}</utcDateStamp><cancelMeeting>{4}</cancelMeeting></RemoveMeeting></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.restoreMeeting = function(uid)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/RestoreMeeting';
		var params = [uid];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RestoreMeeting xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><uid>{0}</uid></RestoreMeeting></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
    this.setAttendeeResponse = function(attendeeEmail, recurrenceId, uid, sequence, utcDateTimeOrganizerCriticalChange, utcDateTimeAttendeeCriticalChange, response)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/SetAttendeeResponse';
		var params = [attendeeEmail, recurrenceId, uid, sequence, utcDateTimeOrganizerCriticalChange, utcDateTimeAttendeeCriticalChange, response];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SetAttendeeResponse xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><attendeeEmail>{0}</attendeeEmail><recurrenceId>{1}</recurrenceId><uid>{2}</uid><sequence>{3}</sequence><utcDateTimeOrganizerCriticalChange>{4}</utcDateTimeOrganizerCriticalChange><utcDateTimeAttendeeCriticalChange>{5}</utcDateTimeAttendeeCriticalChange><response>{6}</response></SetAttendeeResponse></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.setWorkspaceTitle = function(title)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/SetWorkspaceTitle';
		var params = [title];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SetWorkspaceTitle xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><title>{0}</title></SetWorkspaceTitle></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateMeeting = function(uid, sequence, utcDateStamp, title, location, utcDateStart, utcDateEnd, nonGregorian)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/UpdateMeeting';
		var params = [uid, sequence, utcDateStamp, title, location, utcDateStart, utcDateEnd, nonGregorian];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateMeeting xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><uid>{0}</uid><sequence>{1}</sequence><utcDateStamp>{2}</utcDateStamp><title>{3}</title><location>{4}</location><utcDateStart>{5}</utcDateStart><utcDateEnd>{6}</utcDateEnd><nonGregorian>{7}</nonGregorian></UpdateMeeting></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.updateMeetingFromICal = function(icalText, ignoreAttendees)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/meetings/UpdateMeetingFromICal';
		var params = [icalText, ignoreAttendees];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><UpdateMeetingFromICal xmlns="http://schemas.microsoft.com/sharepoint/soap/meetings/"><icalText>{0}</icalText><ignoreAttendees>{1}</ignoreAttendees></UpdateMeetingFromICal></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}