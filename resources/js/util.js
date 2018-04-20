function dateload(){

var selectElementDay = document.getElementById('DOBDAY');
var selectElementMonth = document.getElementById('DOBMONTH');
var selectElementYear = document.getElementById('DOBYEAR');

	var datevar = new Date();
	var curr_year = datevar.getFullYear();
	var i;
	var dobyr = new Array();
	dobyr[1]="Jan";dobyr[2]="Feb";dobyr[3]="Mar";dobyr[4]="Apr";dobyr[5]="May";dobyr[6]="Jun";dobyr[7]="July";dobyr[8]="Aug";dobyr[9]="Sep";dobyr[10]="Oct";dobyr[11]="Nov";dobyr[12]="Dec";
	for (i=1; i<=31; i++) 
	{
		var objOption = document.createElement("option");
		objOption.text = i; objOption.value = i;
		if(document.all && !window.opera) 
		{
		selectElementDay.add(objOption);
		} 
		else
		{
		selectElementDay.add(objOption, null);
		}
	}
	for (i=1; i<=12; i++) 
	{
		var objOption = document.createElement("option");
		objOption.text = dobyr[i]; objOption.value = i;
		if(document.all && !window.opera) 
		{
		selectElementMonth.add(objOption);
		} 
		else 
		{
		selectElementMonth.add(objOption, null);
		}
	}
	for (i=(curr_year-18); i>=(curr_year-70); i--) 
	{
		var objOption = document.createElement("option");
		objOption.text = i; objOption.value = i;
		if(document.all && !window.opera) 
		{
		selectElementYear.add(objOption);
		} 
		else 
		{
		selectElementYear.add(objOption, null);
		}
	}
}




function updateDay(change,formName,yearName,monthName,dayName){
  var form = document.forms[formName];
  var yearSelect = form[yearName];
  var monthSelect = form[monthName];
  var daySelect = form[dayName];
  var year = yearSelect[yearSelect.selectedIndex].value;
  var month = monthSelect[monthSelect.selectedIndex].value;
  var day = daySelect[daySelect.selectedIndex].value;
  if(month>0){
     if(change == 'month' || (change == 'year' && month == 2)){
      var i=31;
      var flag = true;
      while(flag){
       var date = new Date(year,month-1,i);
       if(date.getMonth() == month - 1){
        flag = false;
       }else{
        i=i-1;
       }
      }
      daySelect.length = 0;
      daySelect.length = i;
      var j=1;
	  daySelect[0] = new Option('DD',0);
      while(j <= i){			 
       daySelect[j] = new Option(j,j);		  
       j=j+1;
      }
	  if(day>=i){
		  daySelect.selectedIndex = i;
	  }else if(day > 0 && day<i){
		  daySelect.selectedIndex = day;
	  }else{
		  daySelect.selectedIndex = 0;
	  }
     }
  }
}




function calculate_age(dobyear,dobmonth,dobday){	
	var diff = '';
	if(dobyear!='' && dobmonth!='' && dobday!=''){
		var dateArrVal = new Array();
		dateArrVal = getTodayDate();
		var today = new Date(dateArrVal['year'],dateArrVal['month']-1,dateArrVal['date']);
		var dob = new Date(dobyear,dobmonth-1,dobday);
		var one_year = 1000*60*60*24*365.25;
		diff = today-dob;	
		diff = Math.floor(diff/one_year);
	}
	return diff;	
}


function getTodayDate()
{
	var d = new Date();
	var dateArr = new Array();
    dateArr['date'] = d.getDate();
    dateArr['month'] = d.getMonth()+1; //Months are zero based
    dateArr['year'] = d.getFullYear();
	return dateArr;
}



function agesel() { 
	
	if(document.getElementById("DOBDAY").value!='' && document.getElementById("DOBMONTH").value!='' && document.getElementById("DOBYEAR").value!=''){
		var agediff = calculate_age(document.getElementById("DOBYEAR").value,document.getElementById("DOBMONTH").value,document.getElementById("DOBDAY").value);
		document.getElementById("age").value = agediff;
	
	}
}



function calchk(){
	var registrationform = this.document.about_yourself;
	if((registrationform.DOBDAY.value!='')&&(registrationform.DOBMONTH.value!='')){
		var mchk=(registrationform.DOBMONTH.value%2);
		var ychk=(registrationform.DOBYEAR.value%4);			

		if(registrationform.DOBMONTH.value==2)
		{
			if(registrationform.DOBDAY.value>=30){
				alert("Please select correct date. This month doesn't have 30 or 31");
				registrationform.DOBDAY.value=0; registrationform.DOBDAY.focus();
				return false;
			}
			if(registrationform.DOBDAY.value==29){
				if(ychk!=0){
					alert("This is not a leap year. Please select the correct date");
					registrationform.DOBDAY.value=0; registrationform.DOBDAY.focus();
					return false;
				}
			}
		}
		if(((registrationform.DOBMONTH.value<=7)&&(mchk==0))||((registrationform.DOBMONTH.value>=8)&&(mchk==1))){ 	
			if(registrationform.DOBDAY.value==31){
				alert("Please select correct date. This month doesn't have 31");
				registrationform.DOBDAY.value=0; registrationform.DOBDAY.focus();
				return false;
			}				
		}				
	}
}
