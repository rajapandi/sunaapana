<!--- add babay name ---->



<div class="modal fade " id="otp_modal" role="dialog">
    <div class="modal-dialog ">

        <!-- Modal content-->
        <div class="modal-content">

            <div class="modal-body">

                <div class="row">



                    <div class="col-md-12">  
                        <button type="button" class="close" data-dismiss="modal">×</button>
                        <div class="">
                            <img class="center-block" width="135" height="165" src="<?php echo base_url('resources/images/otp.png') ?>" alt="OTP"/>
                        </div>	  


                        
                        
                        <div class="" id="otp_send_wrap">

                           

                              <p class="text-center m-20"><b>Give Your 10-digit Mobile No.</b></p>




                            <form id="send_otp" name="send_otp" action="#" method="post" autocomplete="off" class="form-inline text-center">

                                <div class="form-group">
                                    <label  for="">Mobile<span class="req-asterisk">* </span></label>
                                    <input type="text" id="mobile" name="mobile" minlength="10"  class="form-control number-only" maxlength="10" required>
                                </div>

                                <button type="submit" name="otp_send_btn" id="otp_send_btn" class="btn btn-primary">Send</button>
                            </form>		



                           

                        </div>
                        



                        <div class="" id="otp_verify_wrap">

                             <p class="text-center m-20">We are sending an OTP to verify your mobile number.</p>





                            <form id="check_otp" name="check_otp" action="#" method="post" autocomplete="off" class="form-inline text-center">

                                <div class="form-group">
                                    <label  for="">Enter OTP<span class="req-asterisk">*</span></label>
                                    <input type="text" id="otp_token" name="otp_token" minlength="6"  class="form-control" maxlength="6" required>
                                </div>

                                <button type="submit" name="verify" id="verify" class="btn btn-primary">Verify</button>
                            </form>		



                            <div class=" m-30 text-center">
                                <a id="resend_otp_anc" href="javascript:void(0)"><i class="fa fa-key" ></i> Resend OTP</a>
                            </div>

                        </div>

                    </div>											


                </div>



            </div>

        </div>

    </div>
</div>





















<script>
$(document).ready(function (){
    $('#otp_verify_wrap').hide();
});

</script>


<!-- Modal -->
<div class="modal fade " id="forgot_modal" role="dialog">
    <div class="modal-dialog ">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Forgot Password?</h4>
            </div>
            <div class="modal-body">


                <form class="form-horizontal p-20" id="forgot_form" name="forgot_form">
                    <div class="form-group">
                        <div class=" col-md-2"></div>
                        <div class=" col-md-8">
                            <p class="text-center"> <strong> Give Your Registered Email ID </strong></p>

                            <input type="text" id="forget_input" name="forget_input" class="form-control" placeholder="Email / Mobile No" required>

                            <div class="pull-right mt-20">

                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>


                    <div class="forgot-err  text-center">
                        <span class="err-msg text-danger">  </span>
                    </div>


                </form>							


            </div>

        </div>

    </div>
</div>






<!-- Login Modal -->
<div class="modal fade" id="login_modal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Login</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal login-bells-fm" role="form" method="post" action="#"  id="member_login_popup">

                    <div class="login-err text-center">
                        <span class="err-msg ">  </span>
                    </div>


                    <div class="form-group">
                        <input type="hidden" name="bmP" id="vi" />
                        <label class="col-md-3 control-label" for="">User Name</label>
                        <div class="col-md-5">
                            <input type="text" class="form-control" id="usertxt" name="usertxt" placeholder="username" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label" for="">Password</label>
                        <div class="col-md-5">
                            <input type="password" class="form-control" id="passtxt" name="passtxt" placeholder="password" required>
                        </div>                

                    </div>



                    <div class="form-group">

                        <div class="col-md-5">
                            <div class="help-block text-right"><a href="<?php echo base_url('register') ?>" >New Member?</a></div>
                        </div> 
                        <div class="col-md-5">
                            <div class="help-block"><a href="<?php echo base_url('forget') ?>" id="forgot_link"  >Forget the password ?</a></div>
                        </div>                

                    </div>


                    <div class="form-group">
                        <label class="col-md-3 control-label" for=""></label>
                        <div class="col-md-5">
                            <button type="submit" name="member_submit" class="btn btn-primary pull-right ">Sign in</button>
                        </div>
                    </div>

                </form>							


            </div>

        </div>

    </div>
</div>









<!-- Login Modal -->