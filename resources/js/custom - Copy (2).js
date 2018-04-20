 //number only method
 
  $('.number-only').keypress(function(e) {
	if(isNaN(this.value+""+String.fromCharCode(e.charCode))) return false;
  })
  .on("cut copy paste",function(e){
	e.preventDefault();
  });
 
 
 $.validator.addMethod("greaterThan",
    function (value, element, param) {
          var $otherElement = $(param);
          return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
    });


function technoNotify(title, message, type){





toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
toastr.clear();
toastr[type](title, message);

}
	

	var errDiv = $('.form-err-wrap');		
	var errElt = errDiv.find('#validation-err');

		
						
/* country page */
						
$(document).ready(function(){



 

$('#branch_form #branch').on('change', function() {
   
    
   var id = $.trim($(this).val());

 
 $.ajax({
	
        type: "POST",
        url: base_url+'payment/branch_address',    
        data: {id:id},
		dataType:"JSON",
	    success:function(data){	
		 console.log(data)
		 
		 /*
		if(data.rs){	
		
		technoNotify('', 'OTP has sent to your mobile.', 'success');
		
		}else{		
		 technoNotify('', data.msg, 'error');		
		}
		*/
		$('#content').empty();
		$('#content').html(data.content);
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#content').addClass('ajloading-r');
			
			},			
			complete:function(){
			$('#content').removeClass('ajloading-r');
			}
    })


 	

});
/* ajax setup */


var $loading = $('#axloader').hide();
$(document)
  .ajaxStart(function () {
    $loading.show();
  })
  .ajaxStop(function () {
    $loading.hide();
  }); 

  

/* ajax setup */

/* send otp */

$(document).on('click', '#resend_otp_anc',  function(e){
e.preventDefault();


 $.ajax({
	
        type: "POST",
        url: base_url+'login/resend_otp',    
        data: {cf:true},
		dataType:"JSON",
	    success:function(data){	
		 
		if(data.rs){	
		
		technoNotify('', 'OTP has sent to your mobile.', 'success');
		
		}else{		
		 technoNotify('', data.msg, 'error');		
		}
		
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#axloader').show();
			
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })


});


/* send otp */


/* religion form*/
	$('#qregister_otp').validate({
          rules:{
            
			otp:{
              required: true
            }
        
		
		},
		 
		 messages:{
			otp:{
				required: "Enter OTP", 
			}
			
			},
        
		    
            focusInvalid: true,
			

		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
		
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 return false;
                   
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
				showErrors: function(errorMap, errorList) {
    if (errorList.length) {
       var s = errorList.shift();
       var n = [];
       n.push(s);
       this.errorList = n;
    }
    this.defaultShowErrors();
},
				   
		  
		  submitHandler: function (form) {		  
	
	
	if($('#qregister_otp').valid() == true){
	
	
    $.ajax({
	
        type: "POST",
        url: base_url+'login/check_reg_otp',    
        data: $(form).serialize(),
		dataType:"JSON",
	    success:function(data){	
		 
		
		 
		if(data.rs){		
		
		window.location = base_url + 'register/about';
		
		}else{	
		
		 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}	
		}
		
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#axloader').show();
			
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
    return false;
}
        

        });








 
	
	/* religion form*/
	$('#member_login_drop').validate({
          rules:{
            
			usertxt:{
              required: true
            }, 
			passtxt:{
              required: true
            }
        
		
		},
		 
		 messages:{
			usertxt:{
				required: "Enter username", 
			}, 
			
			passtxt:{
				required: "Enter password", 
			} 
			
			},
        
		    
            focusInvalid: true,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
   
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 return false;
                   
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
				   
		  
		  submitHandler: function (form) {		  
	
	
	if($('#member_login_drop').valid() == true){
	
	
    $.ajax({
	
        type: "POST",
        url: base_url+'login/check',    
        data: $(form).serialize(),
		dataType:"JSON",
	    success:function(data){	
		 
		if(data.rs){		
		
		window.location = data.url;
		
		}else{		
		 if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		}else{
		 technoNotify('', data.msg, 'error');
		}	
		}
		
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#axloader').show();
			
			
			
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
    return false;
}
        

        });
		
		
		
		
/* login popup */

/* religion form*/
	$('#member_login_popup').validate({
          rules:{
            
			usertxt:{
              required: true
            },
			passtxt:{
              required: true
            }
        
		
		},
		 
		 messages:{
			usertxt:{
				required: "Enter username", 
			}, 
			
			passtxt:{
				required: "Enter password", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
     
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
				     errorPlacement: function(error, element) {
                    error.insertAfter(element);
                },
		 
		  
		  submitHandler: function (form) {		  
	
	
	if($('#member_login_popup').valid() == true){
	
	
    $.ajax({
	
        type: "POST",
        url: base_url+'login/check',    
        data: $(form).serialize(),
		dataType:"JSON",
	    success:function(data){	
		 
		if(data.rs){		
		
		window.location = data.url;
		
		}else{		
		 technoNotify('', data.msg, 'error');		
		}
		
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#axloader').show();
			
			
			
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
    return false;
}
        

        });		
		
		
		
		
		
		
		
		
		
/* login form*/

	
	
  
  });

  
  
  
  
  
  
  

/*  registration form page starts   */

$(document).ready(function(){

	$('#qregister_form').validate({
          rules:{
            
			user_name:{
              required: true,
			  remote: 
			  {
			  global : false,
                url: "Login/user_exists",
                type: "post",
                data: 
                {
                    user_name: function(){ return $('#user_name').val(); },
                     
                }
				}
            },
       
	   password:{
              required: true
			  
            }, 
    	terms:{
              required: true
			  
            },
       
	   confirm_password:{
	   
              required: true,
			  equalTo: "#password",
            },
       
	 
	   gender:{
              required: true
            },
		 lived:{
              required: true
            },
       
	   phoneno:{
              required: true,
			  minlength:10,
			  maxlength:10,
			    remote: 
			  {
			  global : false,
                url: "Login/phone_exists",
                type: "post",
                data: 
                {
                    phoneno: function(){ return $('#phoneno').val(); },
                     
                }
				}
            },
        mail:{
              required: true,
			  email:true,
			      remote: 
			  {
			   global : false,
                url: "Login/email_exists",
                type: "post",
                data: 
                {
                    mail: function(){ return $('#mail').val(); },
                     
                }
				}
            }	
		
		},
		
		 messages:{
			user_name:{
				required: "Please Enter User Name", 
				remote: 'User Name already in use.'
			},
			password:{
				required: "Please Enter Password", 
			},	
			terms:{
				required: "Accept Terms & Conditions?", 
			},		 
			confirm_password:{
				required: "Please Confirm Your Password", 
			},
		
			gender:{
				required: "Please Enter Gender", 
			},
			lived:{
				required: "Please Enter Country", 
			},
			phoneno:{
				required: "Please Enter Phone No", 
				remote: 'Phone Number already in use.'
			},
			mail:{
				required: "Please Enter Mail", 
				remote: 'Email already in use.'
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error"); 

				
				},

				
			  errorPlacement: function(error, element) {
                   
					 if (element.attr("name") == "gender" ) error.insertAfter("#gender_err");
                    else error.insertAfter(element);
                },
		 	    	  errorPlacement: function(error, element) {
                    if (element.attr("name") == "terms" ) error.insertAfter("#term_err");
					 //if (element.attr("name") == "gender" ) error.insertAfter("#gender_err");
                    else error.insertAfter(element);
                },
				
	             success: function(e) {	
		 
                    e.closest(".form-group").removeClass("has-error");
				
				$('#terms-error').remove();
				
                },
	     /*  errorPlacement: function (error, element) {
            if (element.attr("name") == "terms") {
			
                error.insertAfter($(element).parents('div').prev($('#chk_err')));
            } else {
                // something else
            }
        },
		*/
		  submitHandler: function (form) {		


		  if($("#qregister_form").valid() == true) { 
		  
         var formData = new FormData($("#qregister_form")[0]); 
		
	/*
	
    $.ajax({
        type: "POST",
        url: 'Login/register_profile',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){
		
		window.location = "login/otp";	
       // technoNotify('', data.msg, 'success'); 		
	    
		}else{		
		
		
		if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	*/
	
	}
	
	
    return false;
}
        

        });



	  

    });
	
/*  registration form page ends   */
		
/* about yourself page starts  */

$(document).ready(function(){

	$('#about_yourself').validate({
          rules:{
            
			dobday:{
              required: true
            },
       
	   dobmonth:{
              required: true
            },
       
	   dobyear:{
              required: true
            },
       
	 
	   lived:{
              required: true
            },
       
	   state:{
              required: true
            },
        city:{
              required: true
            },
	   marial_status:{
              required: true
            },
       
	   community:{
              required: true
            },
       
	   
	    religion:{
              required: true
            },
					
			
	   
			 rasi:{
              required: true
            } 
	
		
		},
		
		  groups: {
                    DateofBirth: "dobday dobmonth dobyear"
                },
		
		 messages:{
			dobday:{
				required: "Please Enter DOB", 
			},
			dobmonth:{
				required: "Please Enter DOB", 
			},		 
			dobyear:{
				required: "Please Enter DOB", 
			},
		
			lived:{
				required: "Please Enter Lived In", 
			},
			state:{
				required: "Please Enter State", 
			},
			city:{
				required: "Please Enter City", 
			},
			marial_status:{
				required: "Please Enter Marital Status", 
			},
			community:{
				required: "Please Enter Community", 
			},
			rasi:{
				required: "Please Enter Rasi", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
				      errorPlacement: function(error, element) {
                    if (element.attr("name") == "dobday" || element.attr("name") == "dobmonth" || element.attr("name") == "dobyear") error.insertAfter("#DOBYEAR");
                    else error.insertAfter(element);
                },
		 
		  
		  submitHandler: function (form) {		


		  if($('#about_yourself').valid() == true){


		  
         var formData = new FormData($("#about_yourself")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: 'insert_yourself',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	    window.location = "education";	
		}else{		
		
	if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
	
    return false;
}
        

        });



	  

    });
		
/* about yourself page ends  */


/* Education & Career page starts  */

$(document).ready(function(){

	$('#education').validate({
          rules:{
            
			edu_level:{
              required: true
            },
	  
       		edu_field:{
			required:true
			}
		},
        
		 messages:{
			edu_level:{
				required: "Please Enter Education Level", 
			},
				edu_field:{
				required: "Please Enter Education Field", 
			}
					
			},
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
     
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
		 
		  
		  submitHandler: function (form) {	


		  if($('#education').valid() == true){

		  
         var formData = new FormData($("#education")[0]); 
		
	
	
    $.ajax({
        type: "POST",
         url: 'insert_education', 
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	    window.location = "lifestyle";	
		}else{		
		
		if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
	
    return false;
}
        

        });



	  

    });
		
/* Education & Career page ends  */



/* Lifestyle page starts  */

$(document).ready(function(){

	$('#lifestyle').validate({
          rules:{
            
			smoke:{
              required: true
            },
       
	   drink:{
              required: true
            },
			 height:{
              required: true
            }
	  
       		
		},
        
		 messages:{
			smoke:{
				required: "Do You Smoke?", 
			},
			drink:{
				required: "Do You Drink?", 
			},
            height:{
				required: "Please Enter Your Height", 
			}			
			
			},
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
	 

         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
		 
		  
		  submitHandler: function (form) {	


		   if($('#lifestyle').valid() == true){

		  
         var formData = new FormData($("#lifestyle")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: 'insert_lifestyle',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	    window.location = "describe";	
		}else{		
		
		if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
    return false;
}
        

        });



	  

    });
		
/* Lifestyle page ends  */


/* describe yourself page starts  */

$(document).ready(function(){

$('#describe_yourself').validate({

submitHandler: function (form) {	


 if($('#describe_yourself').valid() == true){


         var formData = new FormData($("#describe_yourself")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: 'insert_myself',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	    window.location = "family";
		}else{		
		
		if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
/* describe yourself page ends  */



/* Family Details page starts  */

$(document).ready(function(){

	$('#family_form').validate({
          rules:{
            
			f_name:{
              required: true
            },
       
	   f_occu:{
              required: true
            },
			 m_name:{
              required: true
            },
			m_occu:{
			required:true
			}
	  
       		
		},
        
		 messages:{
			f_name:{
				required: "Enter Your Father Name", 
			},
			f_occu:{
				required: "Enter Your Father's Occupation", 
			},
            m_name:{
				required: "Enter Your Mother Name", 
			},
			m_occu:{
				required: "Enter Your Mother's Occupation", 
			}			
			
			},
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
     
		
		validator.errorList[0].element.focus();
		
     },
	 

         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
		 
		  
		  submitHandler: function (form) {	

		  if($('#family_form').valid() == true){

		  
         var formData = new FormData($("#family_form")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: 'insert_family',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	     window.location = "partner";
		}else{		
		
		if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
	
    return false;
}
        

        });



	  

    });
		
/* Family Details page ends  */



/* partner detail page starts  */

$(document).ready(function(){

$('#partner_form').validate({


 rules:{
            
			agefrom:{
              required: true
            },
       
	   ageto:{
              required: true,
			  greaterThan: "#agefrom"
			  
            },
			
			 htfrom:{
              required: true
            },
			htto:{
			required:true,
			greaterThan: "#htfrom"
			},
			marital_sts:{
			required:true
			},
			religion:{
			required:true
			},
			m_tong:{
			required:true
			},
			community:{
			required:true
			},
			
			c_dosham:{
			required:true
			},
			created_by:{
			required:true
			},
			lived:{
			required:true
			},
			state:{
			required:true
			},
			city:{
			required:true
			}
	  
       		
		},
        
		 messages:{
			agefrom:{
              required: "Choose Age From"
            },
       
	     ageto:{
              required: "Choose Age To",
			  greaterThan: "Age To must be greater than Age From",
            },
			
			 htfrom:{
              required: "Choose Height From"
            },
			htto:{
			required: "Choose Height To",
			greaterThan: "Height To must be greater than Height From",
			},
			marital_sts:{
			required: "Choose Marital Status "
			},
			religion:{
			required: "Choose Religion"
			},
			m_tong:{
			required: "Choose Mother Tongue "
			},
			community:{
			required: "Choose Community "
			},
		
			c_dosham:{
			required: "Choose Chevvai Dosham "
			},
			created_by:{
			required: "Choose Profile Created By "
			},
			lived:{
			required: "Choose Country "
			},
			state:{
			required: "Choose State "
			},
			city:{
			required: "Choose City "
			}			
			
			},
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
	 

         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },









submitHandler: function (form) {	


if($('#partner_form').valid() == true){
  
         var formData = new FormData($("#partner_form")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: 'insert_partner',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	    window.location =base_url+'dashboard';
		}else{		
		
		
		if(data.errType == 'v'){
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
	
   return false;
   
   }

});		
	  

    });
		
/* partner detail page ends  */




/* contact detail page starts  */

$(document).ready(function(){

$('#contact_form').validate({

submitHandler: function (form) {	


if($('#contact_form').valid() == true){
  
         var formData = new FormData($("#contact_form")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url + 'contact/send',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
				
		if(data.rs){	
	    technoNotify('', data.msg, 'success');
		}else{		
		
		if(data.errType == 'v'){
		
		
		
		
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		
		
		
		
		
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	
	}
	
   return false;
   
   }

});		
	  

    });
		
/* contact detail page ends  */



/* quick search form */






$(document).ready(function(){

	$('#qserach_form').validate({
          rules:{
            
			gender:{
              required: true
            },
       
	   agefrom:{
              required: true
            },
			
	ageto:{
              required: true,
			  greaterThan: "#agefrom"
            }
			
       		
		},
        
		 messages:{
			gender:{
				required: "Choose looking for", 
			},
			agefrom:{
				required: "Choose age from", 
			},
            ageto:{
				required: "Choose age from",
                greaterThan: "Age To must be greater than Age From",				
			}			
			
			},
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
    
		
		validator.errorList[0].element.focus();
		
     },
	 

         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                }
				
		 
		  
		 
        

        });



	  

    });



/* quick search form  */



/* Call iCheck plugin starts  */

$(document).ready(function(){
  
     		$("input[type='checkbox'], input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_minimal-orange',
                radioClass: 'iradio_square'
				   
            });
			
	

    });
		
/* Call iCheck plugin ends  */



  	  
	
/*   search page dynamic religion, caste, subcaste loading starts   */
			/************load caste********/
var toSelect = $('#caste'); // load option into dynamically

$('#religion').on('change', function() {
   var id = $.trim($(this).val());
var acturl = base_url + 'home/getRelCaste/' // update url
showOption(toSelect, acturl, id, 'r');	

});			
			
			
			
	


/***************load subcaste**************/
			
var sub_caste = $('#sub_caste'); // load option into dynamically

$('#caste').on('change', function() {
   var id = $.trim($(this).val());

var acturl = base_url + 'home/getSubcaste/' // update url

showOption(sub_caste, acturl, id, 'r');	

});			
			
			
			
			
			


/*   search page ends   */


/*   about_yourself page dynamic loading starts    */
		/***********state dynamic loading********/
		
var State_toselect = $('#state'); // load option into dynamically

$('#lived').on('change', function() {
   var id = $.trim($(this).val());

var acturl = base_url + 'home/getState/' // update url

showOption(State_toselect, acturl, id, 'r');	

});			
			
			
			
			

/********* city dynamic loading********/
	
var City_toselect = $('#city'); // load option into dynamically

$('#state').on('change', function() {
   var id = $.trim($(this).val());

var acturl = base_url + 'home/getCity/' // update url

showOption(City_toselect, acturl, id, 'r');	

});			
			
			
			
			


/*   education page dynamic loading ends   */



  /*  $.validator.addMethod("noSpecialChars", function(value, element) {

      return this.optional(element) || /^[a-z0-9\_]+$/i.test(value);

  }, "Username must contain only letters, numbers, or underscore.");
  
  */

  /* manage modals */
  
  $(document).ready(function(){
  
  	$('#forgot_modal').on('shown.bs.modal', function() {
    $("#forget_input").focus();
            })
			
			
			$('#login_modal').on('shown.bs.modal', function() {
            $("#login_modal #usertxt").focus();
            })
			
			
			$('#forgot_link').click(function(){
			$('#login_modal').modal('hide');
			$('#forgot_modal').modal('show');
			
			});
			
			});
			
			  /* manage modals */
			  
			  
			  
		function showProfile(id){
	        $.ajax({
			type:"POST",
			url:base_url+"login/validate",
			data:{login_check :true},
			dataType:"JSON",
			success:function(result){
			if(result.rs){
			location.href=base_url + "profile/others/"+id;
			} else {
            $('#member_login_popup #vi').val(id);			
            $('#login_modal').modal('show');		
			}
			}
			});
	      }
		  
		  
		  
		  
$('#education #edu_level').on('change', function() {
   
   var sublevel = $('#education #edu_field');
   var id = $.trim($(this).val());

var acturl = base_url + 'register/selectEdu' //update url

showOption(sublevel, acturl, id, 'r');	

}); 





/* manage galley */


$('body').on('click', '.del-pro-im', function(e){
e.preventDefault();

var parent = $(this).parents('.item');
var id = $(this).data('fid');
delGalImg(id, parent);

});



function delGalImg(id, parent){



	        $.ajax({
			type:"POST",
			url:base_url+"gallery/remove",
			data:{cf :true, fid: id},
			dataType:"JSON",
			success:function(result){
			if(result.rs){
			parent.remove();
			technoNotify('', 'Your photo has deleted.', 'success');
			} else {
          	technoNotify('', 'Your photo could not deleted.', 'error')
			}
			}
			});
	      }
		  
		  
		  
		  function previewUpdate(fn){
		  
		  var continer = $('#previewUpdate');
		  
	
		  
		  var sUrl = base_url + 'resources/images/profiles/'+fn;
		  
		  
		 var elt = '<div class="item col-md-2">';
   
	elt += '<div class="profile-wrapper">';
    elt += '<div class="profile-holder">';
    elt += '<img class="profile-img" src="'+sUrl+'" title="" alt="profile-image">';
    elt += '<div class="profile-content text-center">';
    elt += '<button class="btn btn-primary btn-xs del-pro-im" data-fid="'+fn+'" data-id=""><i class="fa fa-remove"></i> Delete</button>';                        
    elt += '</div></div></div></div>';
		  
		  continer.append(elt);
		  

		  }
		  
		  

/* manage galley */


		  


/*   Edit Basics starts   */


$(document).ready(function(){

$('#edit_basics').validate({

  rules:{
            
			dobday:{
              required: true
            },
       
	   dobmonth:{
              required: true
            },
       
	   dobyear:{
              required: true
            },
       
	 
	   marial_status:{
              required: true
            },
       
		
			 height:{
              required: true
            } 
	
		
		},
		
		  groups: {
                    DateofBirth: "dobday dobmonth dobyear"
                },
		
		 messages:{
			dobday:{
				required: "Please Enter DOB", 
			},
			dobmonth:{
				required: "Please Enter DOB", 
			},		 
			dobyear:{
				required: "Please Enter DOB", 
			},
		
			
			marial_status:{
				required: "Please Enter Marital Status", 
			},
			
			height:{
				required: "Please Enter Height", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
   
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				
				      errorPlacement: function(error, element) {
                    if (element.attr("name") == "dobday" || element.attr("name") == "dobmonth" || element.attr("name") == "dobyear") error.insertAfter("#DOBYEAR");
                    else error.insertAfter(element);
                },
		 
		  

submitHandler: function (form) {	


 if($('#edit_basics').valid() == true){


         var formData = new FormData($("#edit_basics")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_basic',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Basics End   */
		
	
/*   Edit Religion starts   */


$(document).ready(function(){

$('#edit_religion').validate({


  rules:{
            
			religion:{
              required: true
            },
       
	   community:{
              required: true
            }
	
		
		},
		
	
		 messages:{
			religion:{
				required: "Please Enter Religion", 
			},
			community:{
				required: "Please Enter Community", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
    
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				

submitHandler: function (form) {	


 if($('#edit_religion').valid() == true){


         var formData = new FormData($("#edit_religion")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_religion',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		console.log(data);		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Religion End   */
	
	
/*   Edit Family starts   */


$(document).ready(function(){

$('#edit_family').validate({


  rules:{
            
			as:{
              required: true
            },
       
	   mother_workas:{
              required: true
            }
		
		},
		
	
		 messages:{
			as:{
				required: "Please Enter Father Occupation", 
			},
			mother_workas:{
				required: "Please Enter Mother Occupation", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
     
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				

submitHandler: function (form) {	


 if($('#edit_family').valid() == true){


         var formData = new FormData($("#edit_family")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_family',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Family End   */	
		
	
/*   Edit Astro starts   */


$(document).ready(function(){

$('#edit_astro').validate({

submitHandler: function (form) {	


 if($('#edit_astro').valid() == true){


         var formData = new FormData($("#edit_astro")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_astro',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Astro End   */			
		
	
/*   Edit Education starts   */


$(document).ready(function(){

$('#edit_education').validate({



  rules:{
            
			edu_level:{
              required: true
            },
       
	   edu_field:{
              required: true
            }
		
		},
		
	
		 messages:{
			edu_level:{
				required: "Please Enter Education Level", 
			},
			edu_field:{
				required: "Please Enter Education Field", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				


submitHandler: function (form) {	


 if($('#edit_education').valid() == true){


         var formData = new FormData($("#edit_education")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_education',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Education End   */			
				
	

	
/*   Edit Lifestyle starts   */


$(document).ready(function(){

$('#edit_lifestyle').validate({


  rules:{
            
			drink:{
              required: true
            },
       
	   smoke:{
              required: true
            }
		
		},
		
	
		 messages:{
			drink:{
				required: "Do you Drink?", 
			},
			smoke:{
				required: "Do you smoke?", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				


submitHandler: function (form) {	


 if($('#edit_lifestyle').valid() == true){


         var formData = new FormData($("#edit_lifestyle")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_lifestyle',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Lifestyle End   */

		
/*   Edit Location starts   */


$(document).ready(function(){

$('#edit_location').validate({

  rules:{
            
			lived:{
              required: true
            },
       
	   state:{
              required: true
            },
			city:{
              required: true
            }
		
		},
		
	
		 messages:{
			lived:{
				required: "Enter Your Country", 
			},
			state:{
				required: "Enter Your State", 
			},
			city:{
				required: "Enter Your City", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
    
		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				


submitHandler: function (form) {	


 if($('#edit_location').valid() == true){


         var formData = new FormData($("#edit_location")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_location',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit Location End   */			
		
			
/*   Edit myself starts   */


$(document).ready(function(){

$('#edit_myself').validate({

submitHandler: function (form) {	


 if($('#edit_myself').valid() == true){


         var formData = new FormData($("#edit_myself")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_myself',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit myself End   */			
				
			
/*   Edit partner_preference starts   */


$(document).ready(function(){

$('#edit_partner_form').validate({



 rules:{
            
			agefrom:{
              required: true
            },
       
	   ageto:{
              required: true,
			  greaterThan: "#agefrom"
			  
            },
			
			 htfrom:{
              required: true
            },
			htto:{
			required:true,
			greaterThan: "#htfrom"
			},
			marital_sts:{
			required:true
			},
			religion:{
			required:true
			},
			m_tong:{
			required:true
			},
			community:{
			required:true
			},
			
			c_dosham:{
			required:true
			},
			created_by:{
			required:true
			},
			lived:{
			required:true
			},
			state:{
			required:true
			},
			city:{
			required:true
			}
	  
       		
		},
        
		 messages:{
			agefrom:{
              required: "Choose Age From"
            },
       
	     ageto:{
              required: "Choose Age To",
			  greaterThan: "Age To must be greater than Age From",
            },
			
			 htfrom:{
              required: "Choose Height From"
            },
			htto:{
			required: "Choose Height To",
			greaterThan: "Height To must be greater than Height From",
			},
			marital_sts:{
			required: "Choose Marital Status "
			},
			religion:{
			required: "Choose Religion"
			},
			m_tong:{
			required: "Choose Mother Tongue "
			},
			community:{
			required: "Choose Community "
			},
			
			c_dosham:{
			required: "Choose Chevvai Dosham "
			},
			created_by:{
			required: "Choose Profile Created By "
			},
			lived:{
			required: "Choose Country "
			},
			state:{
			required: "Choose State "
			},
			city:{
			required: "Choose City "
			}			
			
			},
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
      
		
		validator.errorList[0].element.focus();
		
     },
	 

         
		 errorElement: "span",
         errorClass: "help-block help-block-error",
		 errorPlacement: function(e, r) {
		 	 
                    r.is(":checkbox") ? e.insertAfter(r.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline")) : r.is(":radio") ? e.insertAfter(r.closest(".md-radio-list, .radio-inline, .radio-list,.radio-inline")) : e.insertAfter(r)
          },
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },




submitHandler: function (form) {	


 if($('#edit_partner_form').valid() == true){


         var formData = new FormData($("#edit_partner_form")[0]); 
		
	
	
    $.ajax({
        type: "POST",
        url: base_url+'profile/edit_partner_form',    
        data: formData,
		dataType:"JSON",
		cache:false,
		contentType: false,
        processData: false,
	    success:function(data){	
		//alert();		
		if(data.rs){	
		console.log();
	    window.location = base_url+"profile";
		}else{		
				 if(data.errType == 'v'){
		console.log(errElt);
		errElt.empty();
		errElt.append(data.msg);
		errDiv.removeClass('hide');
		errDiv.show();
		
		
		}else{
		 technoNotify('', data.msg, 'error');
		}
		
		}
		
	   },

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
		/*   Edit partner_preference End   */					  
		
		
		
		/* util option */
		
		
		
		
function showOption(selectElt, acturl, whereid, loaderPos)
{

var cls = 'r';
if(loaderPos=='l')
cls = 'ajloading-l'
if(loaderPos=='r')
cls = 'ajloading-r'
if(loaderPos=='c')
cls = 'ajloading-c'


if(whereid !=''){


$.ajax({
				global: false,
				//type  : "POST",
				url   : acturl,
				data  : {id: whereid},
				dataType: "JSON",             				
				success: function(data) {					
				selectElt.empty();

				
				
					if(data.rs){
					 var $option = $("<option/>").attr("value", '').text('--select--');
					 selectElt.append($option);
					$(data.content).each(function (index, o) {    
    var $option = $("<option/>").attr("value", o.id).text(o.text);
    selectElt.append($option);
    
    
             });
					
	
						
					}else{
					selectElt.empty();				
					
					
					}
					
				   },
				   beforeSend:function(){
			       selectElt.addClass(cls);
			       },
				   complete:function(){
				   	selectElt.removeClass(cls);
				   }
				
			});
			
			
			
			
			} else{
selectElt.empty();

 var $option_empty = $("<option/>").attr("value", '').text('--select--');
    selectElt.append($option_empty);


			}
			
}
		
$('#edit_education #edu_level').on('change', function() {
   
   var sublevel = $('#edit_education #edu_field');
   var id = $.trim($(this).val());

var acturl = base_url + 'register/selectEdu' //update url

showOption(sublevel, acturl, id, 'r');	

}); 		
			
/*     search pair starts  */


$(document).ready(function(){

$('#search_pair').validate({



  rules:{
            
			user_id:{
              required: true,
			  	/*  remote: 
			  {
			  global : false,
                url: "Profile/profile_exists",
                type: "post",
                data: 
                {
                    user_id: function(){ return $('#user_id').val(); },
                     
                }
				}*/
            }
		
		},
		
	
		 messages:{
			user_id:{
				required: "Enter Profile Id", 
			}
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
       		
		validator.errorList[0].element.focus();
		
     },
         
		 errorElement: "span",
         errorClass: "text-danger",
		 
		 
		 errorPlacement: function(error, element) {
                    if (element.attr("name") == "user_id") error.insertAfter("#search_pair_v_err");
                    else error.insertAfter(element);
                },
		 
		 
		
                highlight: function(e) {
                    $(e).closest(".form-group").addClass("has-error")
                },
                unhighlight: function(e) {
				$(e).closest(".form-group").removeClass("has-error");  				
				},
                success: function(e) {		 
                    e.closest(".form-group").removeClass("has-error")
				
                },
				


submitHandler: function (form) {	


 if($('#search_pair').valid() == true){




    $.ajax({
        type: "POST",
        url: base_url+'profile/search_profile/',    
        data: $(form).serialize(),
		dataType:"JSON",
	   success:function(result){	
		if(result.rs){	
		 window.location = base_url+"profile/others/"+result.en;
		} else {		
		var err = $('#search_pair_err');
		err.empty();
		err.append(result.msg);		
		}
		
	   },
error:function(x,y,z){

},

			beforeSend:function(){
			$('#axloader').show();
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
	
	}
	
	return false;

	 } 

    });
	
	});
		
/* search pair end  */		


/*  verify email starts */

 $(document).ready(function () {
 
 $('#verify-eamil').click(function(e){
 e.preventDefault();
 
 $.ajax({
	
        type: "POST",
        url: base_url+'dashboard/send_verification',    
        data: {cf:true},
		dataType:"JSON",
	    success:function(data){	
		 
		if(data.rs){	
		
		technoNotify('', 'Email verification has sent to your mail.', 'success');
		
		}else{		
		 technoNotify('', data.msg, 'error');		
		}
		
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#axloader').show();
			
			},			
			complete:function(){
			$('#axloader').hide();
			}
    })
 
 
 })
 
 });
 
 /*verify email end  */
 
 
 /* inbox  */
 
 $(document).ready(function () {
 
 $('.ibx-del').click(function(e){
 e.preventDefault();
 
 var _item = $(this).parents('.inbox-item');
 var ist = $(this).data('is');
 
 var ibxaction = $('.inb-btns');
 
 var ibx = $(this).data('inbox');
 
 if(ibx !=''){
 $.ajax({
	
        type: "POST",
        url: base_url+'inbox/rm',    
        data: {cf:true, ib:ibx, is:ist},
		dataType:"JSON",
	    success:function(data){	
		 
		if(data.rs){	
		
		if(ist == 3){
		_item.remove();
		}
		else{
		ibxaction.empty();
		ibxaction.append(data.content);
		}
		
		//if(data.reload)
		//location.reload();
		
		technoNotify('', data.msg, 'success');
		
		}else{		
		 technoNotify('', 'Sorry something went wrong...', 'error');		
		}
		
		
		
	   },
		 
	  error: function(x,y,z) {

          technoNotify('','Sorry something went wrong...', 'error');
             },
			beforeSend:function(){
			$('#axloader').show();
			
			},			
			complete:function(){
			$('#axloader').hide();
			}
    });
 }
 
 })
 
 });
   
 /* inbox */