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

function SPAPI_WebPartPages(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/WebPartPages.asmx';
    
	this.addWebPart = function(pageUrl, webPartXml, storage)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/AddWebPart';
		var params = [pageUrl, webPartXml, storage];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddWebPart xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><webPartXml>{1}</webPartXml><storage>{2}</storage></AddWebPart></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.addWebPartToZone = function(pageUrl, webPartXml, storage, zoneId, zoneIndex)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/AddWebPartToZone';
		var params = [pageUrl, webPartXml, storage, zoneId, zoneIndex];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddWebPartToZone xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><webPartXml>{1}</webPartXml><storage>{2}</storage><zoneId>{3}</zoneId><zoneIndex>{4}</zoneIndex></AddWebPartToZone></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.associateWorkflowMarkup = function(configUrl, configVersion)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/AssociateWorkflowMarkup';
		var params = [configUrl, configVersion];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AssociateWorkflowMarkup xmlns="http://microsoft.com/sharepoint/webpartpages"><configUrl>{0}</configUrl><configVersion>{1}</configVersion></AssociateWorkflowMarkup></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.convertWebPartFormat = function(inputFormat, formatConversionOption)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/ConvertWebPartFormat';
		var params = [inputFormat, formatConversionOption];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ConvertWebPartFormat xmlns="http://microsoft.com/sharepoint/webpartpages"><inputFormat>{0}</inputFormat><formatConversionOption>{1}</formatConversionOption></ConvertWebPartFormat></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.deleteWebPart = function(pageUrl, storageKey, storage)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/DeleteWebPart';
		var params = [pageUrl, storageKey, storage];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><DeleteWebPart xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><storageKey>{1}</storageKey><storage>{2}</storage></DeleteWebPart></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.executeProxyUpdates = function(updateData)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/ExecuteProxyUpdates';
		var params = [updateData];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ExecuteProxyUpdates xmlns="http://microsoft.com/sharepoint/webpartpages"><updateData>{0}</updateData></ExecuteProxyUpdates></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.fetchLegalWorkflowActions = function()
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/FetchLegalWorkflowActions';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><FetchLegalWorkflowActions xmlns="http://microsoft.com/sharepoint/webpartpages" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getAssemblyMetaData = function(assemblyName, baseTypes)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetAssemblyMetaData';
		var params = [assemblyName, baseTypes];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetAssemblyMetaData xmlns="http://microsoft.com/sharepoint/webpartpages"><assemblyName>{0}</assemblyName><baseTypes>{1}</baseTypes></GetAssemblyMetaData></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getBindingResourceData = function(resourceName)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetBindingResourceData';
		var params = [resourceName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetBindingResourceData xmlns="http://microsoft.com/sharepoint/webpartpages"><ResourceName>{0}</ResourceName></GetBindingResourceData></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getCustomControlList = function()
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetCustomControlList';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetCustomControlList xmlns="http://microsoft.com/sharepoint/webpartpages" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getDataFromDataSourceControl = function(dscXml, contextUrl)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetDataFromDataSourceControl';
		var params = [dscXml, contextUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetDataFromDataSourceControl xmlns="http://microsoft.com/sharepoint/webpartpages"><dscXml>{0}</dscXml><contextUrl>{1}</contextUrl></GetDataFromDataSourceControl></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getFormCapabilityFromDataSourceControl = function(dscXml)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetFormCapabilityFromDataSourceControl';
		var params = [dscXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetFormCapabilityFromDataSourceControl xmlns="http://microsoft.com/sharepoint/webpartpages"><dscXml>{0}</dscXml></GetFormCapabilityFromDataSourceControl></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getSafeAssemblyInfo = function()
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetSafeAssemblyInfo';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetSafeAssemblyInfo xmlns="http://microsoft.com/sharepoint/webpartpages" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}

	this.getWebPart = function(pageurl, storageKey, storage)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPart';
		var params = [pageurl, storageKey, storage];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPart xmlns="http://microsoft.com/sharepoint/webpartpages"><pageurl>{0}</pageurl><storageKey>{1}</storageKey><storage>{2}</storage></GetWebPart></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPart2 = function(pageurl, storageKey, storage, behavior)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPart2';
		var params = [pageurl, storageKey, storage, behavior];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPart2 xmlns="http://microsoft.com/sharepoint/webpartpages"><pageurl>{0}</pageurl><storageKey>{1}</storageKey><storage>{2}</storage><behavior>{3}</behavior></GetWebPart2></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPartCrossPageCompatibility = function(sourcePageUrl, sourcePageContents, targetPageUrl, targetPageContents, providerPartID, lcid)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPartCrossPageCompatibility';
		var params = [sourcePageUrl, sourcePageContents, targetPageUrl, targetPageContents, providerPartID, lcid];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPartCrossPageCompatibility xmlns="http://microsoft.com/sharepoint/webpartpages"><sourcePageUrl>{0}</sourcePageUrl><sourcePageContents>{1}</sourcePageContents><targetPageUrl>{2}</targetPageUrl><targetPageContents>{3}</targetPageContents><providerPartID>{4}</providerPartID><lcid>{5}</lcid></GetWebPartCrossPageCompatibility></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPartPage = function(documentName, behavior)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPartPage';
		var params = [documentName, behavior];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPartPage xmlns="http://microsoft.com/sharepoint/webpartpages"><documentName>{0}</documentName><behavior>{1}</behavior></GetWebPartPage></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPartPageConnectionInfo = function(sourcePageUrl, sourcePageContents, providerPartID, lcid)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPartPageConnectionInfo';
		var params = [sourcePageUrl, sourcePageContents, providerPartID, lcid];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPartPageConnectionInfo xmlns="http://microsoft.com/sharepoint/webpartpages"><sourcePageUrl>{0}</sourcePageUrl><sourcePageContents>{1}</sourcePageContents><providerPartID>{2}</providerPartID><lcid>{3}</lcid></GetWebPartPageConnectionInfo></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPartPageDocument = function(documentName)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPartPageDocument';
		var params = [documentName];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPartPageDocument xmlns="http://microsoft.com/sharepoint/webpartpages"><documentName>{0}</documentName></GetWebPartPageDocument></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPartProperties = function(pageUrl, storage)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPartProperties';
		var params = [pageUrl, storage];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPartProperties xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><storage>{1}</storage></GetWebPartProperties></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getWebPartProperties2 = function(pageUrl, storage, behavior)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetWebPartProperties2';
		var params = [pageUrl, storage, behavior];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetWebPartProperties2 xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><storage>{1}</storage><behavior>{2}</behavior></GetWebPartProperties2></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getXmlDataFromDataSource = function(queryXml)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/GetXmlDataFromDataSource';
		var params = [queryXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetXmlDataFromDataSource xmlns="http://microsoft.com/sharepoint/webpartpages"><queryXml>{0}</queryXml></GetXmlDataFromDataSource></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.removeWorkflowAssociation = function(configUrl, configVersion)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/RemoveWorkflowAssociation';
		var params = [configUrl, configVersion];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RemoveWorkflowAssociation xmlns="http://microsoft.com/sharepoint/webpartpages"><configUrl>{0}</configUrl><configVersion>{1}</configVersion></RemoveWorkflowAssociation></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.renderWebPartForEdit = function(webPartXml)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/RenderWebPartForEdit';
		var params = [webPartXml];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><RenderWebPartForEdit xmlns="http://microsoft.com/sharepoint/webpartpages"><webPartXml>{0}</webPartXml></RenderWebPartForEdit></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.saveWebPart = function(pageUrl, storageKey, webPartXml, storage)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/SaveWebPart';
		var params = [pageUrl, storageKey, webPartXml, storage];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SaveWebPart xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><storageKey>{1}</storageKey><webPartXml>{2}</webPartXml><storage>{3}</storage></SaveWebPart></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.saveWebPart2 = function(pageUrl, storageKey, webPartXml, storage, allowTypeChange)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/SaveWebPart2';
		var params = [pageUrl, storageKey, webPartXml, storage, allowTypeChange];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><SaveWebPart2 xmlns="http://microsoft.com/sharepoint/webpartpages"><pageUrl>{0}</pageUrl><storageKey>{1}</storageKey><webPartXml>{2}</webPartXml><storage>{3}</storage><allowTypeChange>{4}</allowTypeChange></SaveWebPart2></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.validateWorkflowMarkupAndCreateSupportObjects = function(workflowMarkupText, rulesText, configBlob, flag)
	{
		var action = 'http://microsoft.com/sharepoint/webpartpages/ValidateWorkflowMarkupAndCreateSupportObjects';
		var params = [workflowMarkupText, rulesText, configBlob, flag];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ValidateWorkflowMarkupAndCreateSupportObjects xmlns="http://microsoft.com/sharepoint/webpartpages"><workflowMarkupText>{0}</workflowMarkupText><rulesText>{1}</rulesText><configBlob>{2}</configBlob><flag>{3}</flag></ValidateWorkflowMarkupAndCreateSupportObjects></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}