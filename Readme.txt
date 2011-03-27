MagicSharePoint v.5.3 beta
(c) 12/10/2009 Brett Hacker

More to come, but for now, copy the file "MagicSharePoint.htm" and the "Common" directory together to a location on your SharePoint installation; I setup a folder off the root called "Utils" and put it there (tested only with MOSS 2007 Enterprise).

Once there, navigate to it in your browser (only tested in IE8 so far) and you should see a list of sites on the root directory of your server (not tested with nested sites yet). Select a site and you will see all the lists in that site (doesn't pick up lists off the root yet).

Click a list, and code will be generated that is a stand-alone HTML page (well, stand-alone as long as the supporting files linked at the top of the generated file are present) with full CRUD (Create, Retrieve, Update, Delete) capabilities against that list, all using SharePoint web services and heavily enabled by the SPAPI libraries originally developed by Darren Johnstone (http://darrenjohnstone.net/2008/07/22/a-cross-browser-javascript-api-for-the-sharepoint-and-office-live-web-services/).

His libraries have been modified to include async capabilities. The webs and list services are used to draw metadata from SharePoint, and that data is used to build up web service routines enabling CRUD.

No warranties expressed or implied; use completely at your own risk. If your entire SharePoint installation is waxed, don't come to me about it. Read the code and understand it before trusting it.