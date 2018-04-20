var placeSearch, autocomplete;
var latitude = null;
var longitude = null;
var deglat = null;
var minlat = null;
var deglong = null;
var minlong = null;
var placename = null;
var regionname = null;
var region_dist = null;
var state = null;
var countryname = null;
var fullplacename = null;
var latdir = null;
var longdir = null;
var tzoname = null;
var offset = null;
var offsetsign= null;
var componentForm = {
    locality: 'long_name'
};

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('cityofbirthfill')), {
        types: ['(cities)']
    });
    autocomplete.addListener('place_changed', fillInAddress);
	
	autocomplete2 = new google.maps.places.Autocomplete((document.getElementById('city')), {
        types: ['(cities)']
    });
    autocomplete2.addListener('place_changed', fillforPanchang);
}

function fillInAddress() {
    resetPlace(0);
    var place = autocomplete.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
        latitude = place.geometry.location.lat();
        longitude = place.geometry.location.lng();
        deglat = Math.abs(parseInt(place.geometry.location.lat()));
        minlat = Math.abs(parseInt((latitude % 1) * 60));
        deglong = Math.abs(parseInt(place.geometry.location.lng()));
        minlong = Math.abs(parseInt((longitude % 1) * 60));
        placename = place.address_components[0].long_name;
        if (place.address_components[i].types[0].indexOf("country") == 0) {
            countryname = place.address_components[i].long_name;
            country = countryname;
        }
        if (place.address_components[i].types[0].indexOf("administrative_area_level_2") == 0) {
            regionname = place.address_components[i].long_name;
            region_dist = regionname;
        }
        if (place.address_components[i].types[0].indexOf("administrative_area_level_1") == 0) {
            state = place.address_components[i].long_name;
            statename = state;
        } else {
            state = null;
        }
    }
    fullplacename = place.address_components[0].long_name + ',' + place.address_components[1].long_name + ',' + place.address_components[2].long_name;
    var geoaddress = place.geometry.location.lat() + ' , ' + place.geometry.location.lng();
    if (latitude >= 0) {
        latdir = "N";
    } else if (latitude < 0) {
        latdir = "S";
    }
    if (longitude >= 0) {
        longdir = "E";
    } else if (longitude < 0) {
        longdir = "W";
    }
    if (country == 'India') {
        tzoname = "Asia/Calcutta";
    } else {
        if (document.frmplaceorder.name.value == 'clickastro.com_test') {
            var json = (function() {
                var json = null;
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': "http://report.clickastro.com/tz/index.php?latitude=" + latitude + "&longitude=" + longitude,
                    'dataType': "json",
                    'success': function(data) {
                        json = data;
                    }
                });
                return json;
            })();
            var jsonstring = JSON.stringify(json);
            var obj = jQuery.parseJSON(jsonstring);
            tzoname = obj.timezone;
        } else {
            var json = (function() {
                var json = null;
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': "http://report.clickastro.com/tz/index.php?latitude=" + latitude + "&longitude=" + longitude,
                    'dataType': "json",
                    'success': function(data) {
                        json = data;
                    }
                });
                return json;
            })();
            var jsonstring = JSON.stringify(json);
            var obj = jQuery.parseJSON(jsonstring);
            tzoname = obj.timezone;
        }
    }
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
    }
    setPlace(0);
}
function fillforPanchang() {
    resetPanchang(0);
    var place = autocomplete2.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
        latitude = place.geometry.location.lat();
        longitude = place.geometry.location.lng();
        deglat = Math.abs(parseInt(place.geometry.location.lat()));
        minlat = Math.abs(parseInt((latitude % 1) * 60));
        deglong = Math.abs(parseInt(place.geometry.location.lng()));
        minlong = Math.abs(parseInt((longitude % 1) * 60));
        placename = place.address_components[0].long_name;
        if (place.address_components[i].types[0].indexOf("country") == 0) {
            countryname = place.address_components[i].long_name;
            country = countryname;
        }
        if (place.address_components[i].types[0].indexOf("administrative_area_level_2") == 0) {
            regionname = place.address_components[i].long_name;
            region_dist = regionname;
        }
        if (place.address_components[i].types[0].indexOf("administrative_area_level_1") == 0) {
            state = place.address_components[i].long_name;
            statename = state;
        } else {
            state = null;
        }
    }
    fullplacename = place.address_components[0].long_name + ',' + place.address_components[1].long_name + ',' + place.address_components[2].long_name;
    var geoaddress = place.geometry.location.lat() + ' , ' + place.geometry.location.lng();
    if (latitude >= 0) {
        latdir = "N";
    } else if (latitude < 0) {
        latdir = "S";
    }
    if (longitude >= 0) {
        longdir = "E";
    } else if (longitude < 0) {
        longdir = "W";
    }
    if (country == 'India') {
        tzoname = "Asia/Calcutta";
    } else {
        if (document.frmpanchang.name.value == 'clickastro.com_test') {
            var json = (function() {
                var json = null;
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': "http://report.clickastro.com/tz/index.php?latitude=" + latitude + "&longitude=" + longitude,
                    'dataType': "json",
                    'success': function(data) {
                        json = data;
                    }
                });
                return json;
            })();
            var jsonstring = JSON.stringify(json);
            var obj = jQuery.parseJSON(jsonstring);
            tzoname = obj.timezone;
        } else {
            var json = (function() {
                var json = null;
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': "http://report.clickastro.com/tz/index.php?latitude=" + latitude + "&longitude=" + longitude,
                    'dataType': "json",
                    'success': function(data) {
                        json = data;
                    }
                });
                return json;
            })();
            var jsonstring = JSON.stringify(json);
            var obj = jQuery.parseJSON(jsonstring);
            tzoname = obj.timezone;
			offset = obj.offset;
			offset = offset.replace(":",".");
			offsetsign = offset.slice(0, 1);
			if(offsetsign == '+'){
				var sign = 'E';
				offset = offset.slice(1, 5);
				offset = offset+sign;
			}
			else if((offset == '+00.00')||(offsetsign == '-')){
				var sign = 'W';
				offset = offset.slice(1, 5);
				offset = offset+sign;
			}
			
        }
    }
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
    }
    setPanchang(0);
}

function geolocate() {
    (function(position) {
        var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
    });
}
var js = document.createElement("script");
js.type = "text/javascript";
//js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBywcZIjdvJIypHUWlUaXf_aK24O8400t8&signed_in=true&region=IN&libraries=places&callback=initAutocomplete";
//js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyChiHPZzey18aiWp6Tp5e8BsXc1lPE4F4s&signed_in=true&region=IN&libraries=places&callback=initAutocomplete";
//js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDTGXi3l2sYLZ2-XN5tkLC5L11TfF7BED0&signed_in=true&region=IN&libraries=places&callback=initAutocomplete";
js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCNU5MQTeW2JXvBsMVRwZhM8jT0ulLVXm8&signed_in=true&region=IN&libraries=places&callback=initAutocomplete";
document.body.appendChild(js);
var jq = document.createElement("script");
jq.type = "text/javascript";
jq.src = "http://www.clickastro.com/js/jquery.min.js";
document.body.appendChild(jq);
var cAjaxCall = function(url) {
    inScript = document.getElementById('inSrcipt');
    inScript = document.createElement('script');
    inScript.id = 'inScript';
    inScript.src = url;
    document.getElementsByTagName('script')[0].appendChild(inScript);
}

function bst(event) {
    var key = event.keyCode;
    if (key == 8) {
        resetPlace(0);
    }
}

function resetPlace(i) {
    country = '';
    statename = '';
    placename = '';
    deglong = '';
    minlong = '';
    longdir = '';
    deglat = '';
    minlat = '';
    latdir = '';
    region_dist = '';
    latitude = '';
    longitude = '';
    document.frmplaceorder.country.value = "";
    document.frmplaceorder.state.value = "";
    document.frmplaceorder.txt_place_search.value = "";
    document.frmplaceorder.longdeg.value = "";
    document.frmplaceorder.longmin.value = "";
    document.frmplaceorder.longdir.value = "";
    document.frmplaceorder.latdeg.value = "";
    document.frmplaceorder.latmin.value = "";
    document.frmplaceorder.latdir.value = "";
    document.frmplaceorder.region_dist.value = "";
    document.frmplaceorder.correction.value = "";
    document.frmplaceorder.timezone_name.value = "";
    document.frmplaceorder.timezone.value = "";
    document.frmplaceorder.latitude_google.value = "";
    document.frmplaceorder.longitude_google.value = "";
}
function resetPanchang(i) {
    country = '';
    statename = '';
    placename = '';
    deglong = '';
    minlong = '';
    longdir = '';
    deglat = '';
    minlat = '';
    latdir = '';
    region_dist = '';
    latitude = '';
    longitude = '';
    document.frmpanchang.country.value = "";
    document.frmpanchang.state.value = "";
    document.frmpanchang.txt_place_search.value = "";
    document.frmpanchang.longdeg.value = "";
    document.frmpanchang.longmin.value = "";
    document.frmpanchang.longdir.value = "";
    document.frmpanchang.latdeg.value = "";
    document.frmpanchang.latmin.value = "";
    document.frmpanchang.region_dist.value = "";
    document.frmpanchang.correction.value = "";
    document.frmpanchang.timezone_name.value = "";
    document.frmpanchang.timezone.value = "";
    document.frmpanchang.latitude_google.value = "";
    document.frmpanchang.longitude_google.value = "";
}

function setPlace(i) {
    document.frmplaceorder.country.value = country;
    document.frmplaceorder.state.value = statename;
    document.frmplaceorder.txt_place_search.value = placename;
    document.frmplaceorder.longdeg.value = deglong;
    document.frmplaceorder.longmin.value = minlong;
    document.frmplaceorder.longdir.value = longdir;
    document.frmplaceorder.latdeg.value = deglat;
    document.frmplaceorder.latmin.value = minlat;
    document.frmplaceorder.latdir.value = latdir;
    document.frmplaceorder.region_dist.value = region_dist;
    document.frmplaceorder.latitude_google.value = latitude;
    document.frmplaceorder.longitude_google.value = longitude;
    document.frmplaceorder.correction.value = '';
    document.frmplaceorder.timezone_name.value = tzoname;
    if (document.frmplaceorder.country.value == 'India') {
        document.frmplaceorder.correction.value = '0';
        document.frmplaceorder.timezone.value = '05.30E';
        if (document.frmplaceorder.state.value == 'Kerala') {
            document.getElementById("chart_style").selectedIndex = 4;
        } else if (document.frmplaceorder.state.value == 'Tamil Nadu' || document.frmplaceorder.state.value == 'Karnataka' || document.frmplaceorder.state.value == 'Andhra Pradesh' || document.frmplaceorder.state.value == 'Telangana' || document.frmplaceorder.state.value == 'Puducherry') {
            document.getElementById("chart_style").selectedIndex = 1;
        } else if (document.frmplaceorder.state.value == 'Sikkim' || document.frmplaceorder.state.value == 'Odisha' || document.frmplaceorder.state.value == 'West Bengal' || document.frmplaceorder.state.value == 'Assam') {
            document.getElementById("chart_style").selectedIndex = 3;
        } else {
            document.getElementById("chart_style").selectedIndex = 2;
        }
    }
    if (document.frmplaceorder.country.value != 'India') {
        checkDstAndSubmit();
    }
}
function setPanchang(i) {
    document.frmpanchang.country.value = country;
    document.frmpanchang.state.value = statename;
    document.frmpanchang.txt_place_search.value = placename;
    document.frmpanchang.longdeg.value = deglong;
    document.frmpanchang.longmin.value = minlong;
    document.frmpanchang.longdir.value = longdir;
    document.frmpanchang.latdeg.value = deglat;
    document.frmpanchang.latmin.value = minlat;
    document.frmpanchang.latdir.value = latdir;
    document.frmpanchang.region_dist.value = region_dist;
    document.frmpanchang.latitude_google.value = latitude;
    document.frmpanchang.longitude_google.value = longitude;
    document.frmpanchang.correction.value = '';
    document.frmpanchang.timezone_name.value = tzoname;
    if (document.frmpanchang.country.value == 'India') {
        document.frmpanchang.correction.value = '0';
        document.frmpanchang.timezone.value = '05.30E';
        
    }
    if (document.frmpanchang.country.value != 'India') {
		document.frmpanchang.timezone.value = offset;
        checkDstAndSubmit(1);
    }
}
var bg = null;

function checkDstAndSubmit(i) {
	if(i==1){
    dobday = document.frmpanchang.dobday.value;
    dobmonth = document.frmpanchang.dobmonth.value;
    dobyear = document.frmpanchang.dobyear.value;
    tob = document.frmpanchang.tobhour.value + ":" + document.frmpanchang.tobmin.value;
    tzname = tzoname;
	}
	else{
	dobday = document.frmplaceorder.dobday.value;
    dobmonth = document.frmplaceorder.dobmonth.value;
    dobyear = document.frmplaceorder.dobyear.value;
    tob = document.frmplaceorder.tobhour.value + ":" + document.frmplaceorder.tobmin.value;
    tzname = tzoname;
	}
    if (document.frmplaceorder.name.value == 'clickastro.com_test') {
        url = 'http://report.clickastro.com/tz/dstcheck.php?dobday=' + dobday + '&dobmonth=' + dobmonth + '&dobyear=' + dobyear + '&tob=' + tob + '&timezone_name=' + tzname + '&callback=vaidateSubmit';
    } else {
        url = 'http://report.clickastro.com/tz/dstcheck.php?dobday=' + dobday + '&dobmonth=' + dobmonth + '&dobyear=' + dobyear + '&tob=' + tob + '&timezone_name=' + tzname + '&callback=vaidateSubmit';
    }
    cAjaxCall(url);
}

function showDSTPrompt(tzone, corr) {
    name = document.frmplaceorder.name.value;
    msg = '<div style="border:15px solid #fff;font-size:14px;text-align:center;font-family:Arial">Please confirm whether the time of birth <b>' + '</b> is during DST</div><br/><br/>' + '<div align="center"><button style="padding:3px;" onclick="javascript:vaidateSubmit(\'' + tzone + '\',' + corr + ')">Yes, its during DST </button><br/><br/>' + '<button style="padding:3px;" onclick="javascript:vaidateSubmit(\'' + tzone + '\',0)">No, its during Standard Time</button></div>';
    bg = document.createElement('div');
    document.body.appendChild(bg);
    bg.style.width = '300px';
    bg.style.border = '2px solid #666';
    bg.style.height = '200px';
    bg.style.left = (screen.width - 300) / 2;
    bg.style.top = (screen.height - 210) / 2;
    bg.style.background = '#fff';
    bg.style.position = (document.all) ? 'absolute' : 'fixed';
    bg.style.zIndex = 1001;
    bg.innerHTML = '<b>' + msg + '</b>';
}

function vaidateSubmit(tzone, corr, prompt) {
    if (prompt == true) {
        showDSTPrompt(tzone, corr);
    } else {
        if (bg) document.body.removeChild(bg);
        document.frmplaceorder.correction.value = corr;
        document.frmplaceorder.timezone.value = tzone;
        document.frmpanchang.timezone.value = tzone;
    }
}

function urldecode(url) {
    return decodeURIComponent(url.replace(/\+/g, ' '));
}
(function() {
    target.innerHTML = template;
    f = document.frmplaceorder;
    d = new Date();
    f.dobday.selectedIndex = d.getDate() - 1;
    f.dobmonth.selectedIndex = d.getMonth();
    f.dobyear.selectedIndex = d.getFullYear() - 1901 - 25;
    f.tobhour.selectedIndex = d.getHours() % 12;
    f.tobhour.selectedIndex = f.tobhour.selectedIndex == 0 ? 11 : f.tobhour.selectedIndex - 1;
    f.tobmin.selectedIndex = d.getMinutes();
    f.language.value = "Eng";
    f.chart_style.value = "1";
    f.clientid.value = avHoroClientId;
})();

function validatelang() {
    if (document.frmplaceorder.country.value != 'India') {
        if (document.frmplaceorder.language.value == 'Mal') {
            document.getElementById("chart_style").selectedIndex = 4;
        }
        if (document.frmplaceorder.language.value == 'Hin' || document.frmplaceorder.language.value == 'Mar') {
            document.getElementById("chart_style").selectedIndex = 2;
        }
         if (document.frmplaceorder.language.value == 'Ori' || document.frmplaceorder.language.value == 'Ben') {
            document.getElementById("chart_style").selectedIndex = 3;
        }
        if (document.frmplaceorder.language.value == 'Eng' || document.frmplaceorder.language.value == 'Tam' || document.frmplaceorder.language.value == 'Kan' || document.frmplaceorder.language.value == 'Tel') {
            document.getElementById("chart_style").selectedIndex = 1;
        }
    }
}

function error(m, e) {
    e.style.backgroundColor = (!m) ? "#fff" : "#f66";
}

function validate() {
    f = document.frmplaceorder;
    if (f.name.value.length == 0 || f.name.value == 'Name') {
        f.name.focus(alert('Please Enter your Name'));
    }
    else if((f.gender[0].checked==false) && (f.gender[1].checked==false))
    {alert("Please Select Gender");}     
     else if (f.dobmonth.selectedIndex == 0 || f.dobday.selectedIndex == 0) {
        f.dobyear.focus(alert('Please Enter your Date of birth'));
    } else if (!validateEmail(f.email.value)) {
        f.email.focus(alert('Please Enter your (valid)email address'));
    } else if (f.tobhour.selectedIndex == 0 || f.tobmin.selectedIndex == 0 || f.ampm.selectedIndex == 0) {
        f.tobhour.focus(alert('Please Enter your Time of birth'));
    } else if (f.cityofbirthfill.value.length == 0 || f.cityofbirthfill.value == 'City of birth') {
        f.cityofbirthfill.focus(alert('Please Enter your Place of birth'));
    } else if (f.chart_style.selectedIndex == 0) {
        f.chart_style.focus(alert('Please select the chart format'));
    } else {
        ga('send', 'event', 'rvmp_HomePage', 'rvmp_Generate', 'rvmp_Free Horoscope Online', 1);
        document.frmplaceorder.submit();
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}