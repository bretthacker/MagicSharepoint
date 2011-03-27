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

function SPAPI_dspsts(baseUrl)
{
    this.core = new SPAPI_Core();
    this.serviceUrl = baseUrl + '/_vti_bin/dspsts.asmx';
    
    this.queryRequest = function(listGuid, fields, where, orderBy, rowLimit)
    {
        var action = 'http://schemas.microsoft.com/sharepoint/dsp/queryRequest';
		var params = [listGuid, fields, where, orderBy, rowLimit];
	    var packet = '<?xml version="1.0" encoding="utf-8"?>' 
	    + "<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" "
  	    + "xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" "
  	    + "xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope\/\">"
 	    +" <soap:Header xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope\/\">"
	    +" <dsp:versions xmlns:dsp=\"http://schemas.microsoft.com/sharepoint/dsp\">"
   	    +" <dsp:version>1.0</dsp:version>"
	    +" </dsp:versions>"
        +" <dsp:request xmlns:dsp=\"http://schemas.microsoft.com/sharepoint/dsp\" service=\"DspSts\" document=\"content\" method=\"query\">"
        +" </dsp:request>"
        +" </soap:Header>"
	    + "<soap:Body>" 
	    + "<queryRequest "
        +" xmlns=\"http://schemas.microsoft.com/sharepoint/dsp\">"
        +" <dsQuery select=\"/list[@id='{0}']\""
        +" resultContent=\"dataOnly\""
        +" columnMapping=\"attribute\" resultRoot=\"Rows\" resultRow=\"Row\">"
        +" <Query RowLimit=\"{4}\">"
        +" <Fields>{1}</Fields>"
        +" <Where>{2}</Where>"
        +" <OrderBy>{3}</OrderBy>"
        +" </Query>"
        +" </dsQuery>"
        +" </queryRequest>"
	    + "</soap:Body>"
	    + "</soap:Envelope>";
	    
	    return this.core.executeRequest(this.serviceUrl, action, packet, params);
    }
}