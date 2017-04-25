function Getproducts(callback) {

	var Ob =[
	           {
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://petersfancybrownhats.com/company_image.png",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            "buttons":[
	          	{
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ]      
	          },
	          {
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://petersfancybrownhats.com/company_image.png",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            "buttons":[
	             {
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ]      
	          },{
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://petersfancybrownhats.com/company_image.png",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            
	            "buttons":[
	            {
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ]      
	          },{
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://petersfancybrownhats.com/company_image.png",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            "buttons":[
	             ,{
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ]      
	          },{
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://petersfancybrownhats.com/company_image.png",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            "buttons":[
	             ,{
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ] 
			

	  callback(Ob);
	}
	




exports.Getproducts=Getproducts;


