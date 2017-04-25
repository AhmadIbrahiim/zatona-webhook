
function Getproducts(callback) {
	var Ob = []
	Ob.push({
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"http://www.mexatk.com/wp-content/uploads/2015/11/%D9%85%D9%88%D8%AF%D9%8A%D9%84%D8%A7%D8%AA-%D9%81%D8%B3%D8%A7%D8%AA%D9%8A%D9%86-%D8%B3%D9%87%D8%B1%D8%A9-2016-4.jpg",
	            "subtitle":"المقاسات المتاحه  ### والسعر ال 320",
	            "buttons":[
	          	{
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ]      
	          });
	Ob.push({
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://ss.dresswe.com/images/product/c/5582/12231/12231274_1.jpeg",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            "buttons":[
	          	{
	                "type":"postback",
	                "title":"عرض التفاصيل",
	                "payload":"showdetails"
	              }              
	            ]      
	          });


	  callback(Ob);
	}
	

function GetSub(callback) {
	var Ob = []
	Ob.push({
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"http://www.mexatk.com/wp-content/uploads/2015/11/%D9%85%D9%88%D8%AF%D9%8A%D9%84%D8%A7%D8%AA-%D9%81%D8%B3%D8%A7%D8%AA%D9%8A%D9%86-%D8%B3%D9%87%D8%B1%D8%A9-2016-4.jpg",
	            "subtitle":"المقاسات المتاحه  ### والسعر ال 320",
	            "buttons":[
	          	{
	                "type":"postback",
	                "title":"اشتري",
	                "payload":"addtocart"
	              }              
	            ]      
	          });
	Ob.push({
	            "title":"Welcome to Peter\'s Hats",
	            "image_url":"https://ss.dresswe.com/images/product/c/5582/12231/12231274_1.jpeg",
	            "subtitle":"We\'ve got the right hat for everyone.",
	            "buttons":[
	          	{
	                "type":"postback",
	                "title":"اشتري",
	                "payload":"addtocart"
	              }              
	            ]      
	          });


	  callback(Ob);
	}
	




exports.Getproducts=Getproducts;
exports.GetSub=GetSub;


