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

/* Search query packet */

var SPAPI_Query_Type_SQL = 'MSSQLFT';
var SPAPI_Query_Type_Keyword = 'STRING';

function SPAPI_QueryPacket(queryType, queryText, properties)
{
    this.enableStemming = true;
    this.trimDuplicates = true;
    this.ignoreAllNoiseQuery = true;
    this.includeRelevantResults = true;
    this.startAt = 1;
    this.count = -1;
    this.queryType = queryType;
    this.queryText = queryText;
    this.properties = properties;
    this.sortProperties = [ ];
    
    this.getDomDocument = function()
    {
      if (document.implementation && document.implementation.createDocument) 
      {
         return document.implementation.createDocument('', '', null);
      }

      if (window.ActiveXObject)
      {
          return new ActiveXObject('MSXML2.DomDocument');
      }
      
      throw new Error("DomDocument not supported");
    }
    
    this.addSortProperty = function(name, isAscending, order)
    {
        this.sortProperties.push( { name: name, isAscending: isAscending, order: order } );
    }
    
    this.getXML = function()
    {
        var dom = this.getDomDocument();
        var wrapper = dom.createElement('QueryPacket');
        dom.appendChild(wrapper);   
        
        var query = dom.createElement('Query');
        wrapper.appendChild(query);
        
        var context = dom.createElement('Context');
        query.appendChild(context);
        
        var queryText = dom.createElement('QueryText');
        queryText.setAttribute('type', this.queryType);
        queryText.appendChild(dom.createTextNode(this.queryText));
        context.appendChild(queryText);
        
        var range = dom.createElement('Range');
        query.appendChild(range);
        
        var startAt = dom.createElement('StartAt');
        startAt.appendChild(dom.createTextNode(this.startAt));
        range.appendChild(startAt);
        
        if (this.count >= 0)
        {
            var count = dom.createElement('Count');
            count.appendChild(dom.createTextNode(this.count));
            range.appendChild(count);
        }
        
        if (this.properties != null)
        {
            var props = this.properties.split(",");
            var properties = dom.createElement('Properties');
            query.appendChild(properties);
            
            for (var i=0; i<props.length; i++)
            {
                var p = dom.createElement('Property');
                p.setAttribute('name', props[i]);
                properties.appendChild(p);
            }
        }
        
        if (this.sortProperties.length > 0)
        {
            var properties = dom.createElement('SortProperties');
            query.appendChild(properties);
            
            for (var i=0; i<this.sortProperties.length; i++)
            {
                var p = dom.createElement('Property');
                p.setAttribute('name', this.sortProperties[i].name);
                p.setAttribute('Direction', this.sortProperties[i].isAscending ? 'Ascending' : 'Descending');
                p.setAttribute('Order', this.sortProperties[i].order);
                properties.appendChild(p);
            }
        }
        
        var enableStemming = dom.createElement('EnableStemming');
        enableStemming.appendChild(dom.createTextNode(this.enableStemming ? 'true' : 'false'));
        query.appendChild(enableStemming);
        
        var trimDuplicates = dom.createElement('TrimDuplicates');
        trimDuplicates.appendChild(dom.createTextNode(this.trimDuplicates ? 'true' : 'false'));
        query.appendChild(trimDuplicates);
        
        var ignoreAllNoiseQuery = dom.createElement('IgnoreAllNoiseQuery');
        ignoreAllNoiseQuery.appendChild(dom.createTextNode(this.ignoreAllNoiseQuery ? 'true' : 'false'));
        query.appendChild(ignoreAllNoiseQuery);
        
        var includeRelevantResults = dom.createElement('IncludeRelevantResults');
        includeRelevantResults.appendChild(dom.createTextNode(this.includeRelevantResults ? 'true' : 'false'));
        query.appendChild(includeRelevantResults);
        
        if (typeof XMLSerializer != 'undefined')
            return new XMLSerializer().serializeToString(dom);
        else
            return dom.xml;
    }
    
    this.getResultDocument = function(responseXML)
    {
        // Query result is in res.responseXML as a browser specific DOM document
        var dom;
        var responseNode = responseXML.getElementsByTagName('QueryResult')[0];
        var responseText = '';
        
        // Firefox split the node into chucks is greater than 4096 bytes so put them back together
        for (var i=0; i<responseNode.childNodes.length; i++)
        {
            responseText += responseNode.childNodes[i].nodeValue;
        }
        
        // Load the XML into a dom document
        if (typeof DOMParser != 'undefined')
        {
            dom = new DOMParser().parseFromString(responseText, 'text/xml');
        }
        else
        {
            dom = this.getDomDocument();
            dom.async = 'false';
            dom.loadXML(responseText);
        }
        
        return dom;
    }
}