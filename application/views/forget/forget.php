<div class="wrapper wrapper-full-page mt-60">
        <div class="full-page login-page"  data-color="blue">
            <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
            <div class="content">
                <div class="container forget_container">
                    <div class="row">
					<div class="col-md-4"></div>
                        <div class="col-md-4 col-sm-6 bx-sh forget_panel_ht">
                            <form id="forget_user" method="post" action="#">
                                <div class="card card-login card-hidden mt-50">
                                    <div class="card-header ">
                                        <h4 class="card-title">Forget Password</h4>
                                    </div>
                                  
                                         
										
										<div class="row ">
										 <div class="col-md-10 col-sm-10 input-group ml-15 mr-15">
      
      <input id="email" type="text" class="form-control" name="email" placeholder="Email">
    </div>
										</div>
										 
										
                                      <div class="col-md-12"> </div>
										  
                                    <div class="text-center">
									<!---- <button class="btn btn-social btn-fill btn-twitter">
                                                <i class="fa fa-sign-in"></i> Sign In
                                    <div class="ripple-container"></div></button>------>
                                    
<div class="form-group mt-20">
							<input type="submit"  value="Submit" class="btn btn-primary ">
							</div>
									
                                        <p class="mt-30">&nbsp;&nbsp;
                                        	<a href="<?php echo base_url(); ?>">
                            					  Login
                        					</a>
                        				</p>

                                    </div>
                                
                            </form>
                        </div>
                    </div><div class="col-md-4"></div>
                </div>
            </div>
             <footer class="footer">
                <div class="container">
                     
                    <p class="copyright text-center">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>
                        <a href="#"></a>  Bells Matrimony
                    </p>
                </div>
            </footer>
        </div>
    </div>
	<div id="forget_email"></div>
	<script>
	
/* forget form */
$(document).ready(function(){

$('#forget_user').validate({
          rules:{
            
			email:{
		    email:true,
		    required: true,
			 //global: false,
			 remote: 
				{
                url: base_url+"forget/email_exist",
                type: "post",
                data: 
                {
                    email: function(){ return $('#email').val(); },
                     
                }
				}      
		    },
			 
        
		
		},
		 
		 messages:{
			email:{
				required: "Enter registered email", 
				remote: 'Email is Incorrect',
			}, 
		 
			
			},
        
		    
            focusInvalid: false,
		 invalidHandler: function(form, validator) {
        
        if (!validator.numberOfInvalids())
            return;
       //console.log()
        $('html, body').animate({
            scrollTop: $(validator.errorList[0].element).offset().top
        }, 1000);
		
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
	
	
	if($('#forget_user').valid() == true){
	
	
    $.ajax({
	
        type: "POST",
        url: base_url+'forget/forget_process',    
        data: $(form).serialize(),
		dataType:"JSON",
	    success:function(data){	
		
		/* $('#forget_email').html(data.body);  */
		technoNotify('', data.msg, data.err);
		/* 	console.log(data);   */
		
		 },
		 
	  error: function(x,y,z) {
	  
	     console.log(x);
	     console.log(y);
	     console.log(z);
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

});
/* forget form */
	</script>