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

function SPAPI_Imaging(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/Imaging.asmx';
    
	this.checkSubwebAndList = function(strUrl)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/CheckSubwebAndList';
		var params = [strUrl];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CheckSubwebAndList xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strUrl>{0}</strUrl></CheckSubwebAndList></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.createNewFolder = function(strListName, strParentFolder)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/CreateNewFolder';
		var params = [strListName, strParentFolder];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CreateNewFolder xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strParentFolder>{1}</strParentFolder></CreateNewFolder></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.delete_ = function(strListName, strFolder, itemFileNames)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/Delete';
		var params = [strListName, strFolder, itemFileNames];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Delete xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder><itemFileNames>{2}</itemFileNames></Delete></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.download = function(strListName, strFolder, itemFileNames, type, fFetchOriginalIfNotAvailable)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/Download';
		var params = [strListName, strFolder, itemFileNames, type, fFetchOriginalIfNotAvailable];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Download xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder><itemFileNames>{2}</itemFileNames><type>{3}</type><fFetchOriginalIfNotAvailable>{4}</fFetchOriginalIfNotAvailable></Download></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.edit = function(strListName, strFolder, itemFileName, recipe)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/Edit';
		var params = [strListName, strFolder, itemFileName, recipe];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Edit xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder><itemFileName>{2}</itemFileName><recipe>{3}</recipe></Edit></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getItemsByIds = function(strListName, ids)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/GetItemsByIds';
		var params = [strListName, ids];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetItemsByIds xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><ids>{1}</ids></GetItemsByIds></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getItemsXMLData = function(strListName, strFolder, itemFileNames)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/GetItemsXMLData';
		var params = [strListName, strFolder, itemFileNames];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetItemsXMLData xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder><itemFileNames>{2}</itemFileNames></GetItemsXMLData></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.getListItems = function(strListName, strFolder)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/GetListItems';
		var params = [strListName, strFolder];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetListItems xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder></GetListItems></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.listPictureLibrary = function()
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/ListPictureLibrary';
		var params = [];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><ListPictureLibrary xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/" /></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.rename = function(strListName, strFolder, request)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/Rename';
		var params = [strListName, strFolder, request];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Rename xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder><request>{2}</request></Rename></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
	
	this.upload = function(strListName, strFolder, bytes, fileName, fOverWriteIfExist)
	{
		var action = 'http://schemas.microsoft.com/sharepoint/soap/ois/Upload';
		var params = [strListName, strFolder, bytes, fileName, fOverWriteIfExist];
		var packet = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><Upload xmlns="http://schemas.microsoft.com/sharepoint/soap/ois/"><strListName>{0}</strListName><strFolder>{1}</strFolder><bytes>{2}</bytes><fileName>{3}</fileName><fOverWriteIfExist>{4}</fOverWriteIfExist></Upload></soap:Body></soap:Envelope>';

		return this.core.executeRequest(this.serviceUrl, action, packet, params);
	}
}