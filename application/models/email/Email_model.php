<?php if (! defined('BASEPATH')) exit('No direct script access allowed');

class Email_model extends CI_Model {
 
 
 
 
public $logo="resources/images/logo.png";
public $tick="resources/images/email/tick.gif";
public $listify="resources/images/email/list.gif";
public $user="resources/images/email/user.gif";
public $camera="resources/images/email/camera.gif";
public $lock="resources/images/email/lock.gif";
 
 

    public function __construct()
        {
          parent::__construct();
			 
   $this->logo = base_url().$this->logo;
   
    $this->tick = base_url().$this->tick;
	 $this->listify = base_url().$this->listify;
	  $this->user = base_url().$this->user;
	   $this->camera = base_url().$this->camera;
	    $this->lock = base_url().$this->lock;

  
  
     }
		
	
	function otp_body($f_name, $otp){
			
			$body = '<tr> 
     <td colspan="2" style="width:640px"> <p style="font:18px Arial,sans-serif;color:#cc6600;margin:15px 20px 0 20px">Hi '.$f_name.',</p> <p style="margin:4px 20px 18px 20px;width:640px">
Your Password: <a href="#" style="color:#006699;text-decoration:none" target="_blank" data-saferedirecturl="#">'.$otp.'</a></p> </td> </tr>';
			return $body;
			
		}
	
		function forget_body($f_name, $pass){
			
			$body = '<tr> 
     <td colspan="2" style="width:640px"> <p style="font:18px Arial,sans-serif;color:#cc6600;margin:15px 20px 0 20px">Hi '.$f_name.',</p> <p style="margin:4px 20px 18px 20px;width:640px">
Your Password: <a href="#" style="color:#006699;text-decoration:none" target="_blank" data-saferedirecturl="#">'.$pass.'</a></p> </td> </tr>';
			return $body;
			
		}
	
	
	
	
	function contact_body($name, $email, $mobile, $subject, $message){
			
			$body = 'Name : '.ucwords($name).'\n';
			$body .= 'Email : '.$email.'\n';
			$body .= 'Mobile : '.$mobile.'\n';
			$body .= 'Subject : '.$subject.'\n';
			$body .= 'Comments : '.$message.'\n';
			return $body;
			
		}
	 
	
	
	
	
	
	
	
	
	function welcome_body($customer_name, $date, $user_id){
	
	
	$body = '<html><body> <div><div><div> </div><table cellspacing="0" cellpadding="0" border="0" style="background:#f1f1f2;width:100%;border-top:10px solid #f1f1f2"> <tbody><tr> <td valign="top" align="center"> <u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#fff;max-width:600px;border:1px solid #dfe0e3;border-bottom:none"> <tbody><tr><td><u></u>  </td></tr><tr> <td valign="top" align="left" style="padding-top:18px;padding-bottom:18px;padding-left:15px"> <img src="'.$this->logo.'" border="0" height="44" alt="Bells Matrimony Worlds Largest Matrimonial Service" title="Bells Matrimony Worlds Largest Matrimonial Service" >					</td> <td valign="top" style="padding-top:18px;padding-right:9px;padding-bottom:18px"> <div style="font:normal 12px arial;line-height:15px;color:#b1b3b9;text-align:right"> &nbsp;<div>'.$date.'</div> </div> </td> </tr> </tbody></table><u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;border:1px solid #dfe0e3;border-top:4px solid #ff5a60;border-bottom:2px solid #dfe0e3;background:#fff"> <tbody><tr><td><u></u>  </td></tr><tr> <td valign="top" style="padding-top:20px;padding-right:8px;padding-left:8px"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody><tr> <td valign="top" align="left"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody><tr> <td valign="top" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:6px;padding-bottom:21px"> Dear '.$customer_name.', </td> </tr> <tr> <td valign="top" style="font:normal 15px arial;line-height:20px;color:#51505d;text-align:left;padding-bottom:15px"> Welcome to <a href="#" style="line-height:20px;color:#51505d;text-decoration:none;outline:none" target="_blank" data-saferedirecturl=""><span class="il"><strong>Bellsmatrimony</strong></span><strong>.com</strong></a> Its great to have you on board. I would like to share with you a few things that we have learnt while helping millions of people find their match. </td> </tr> <tr> <td valign="top" align="left"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody><tr> <td width="62" valign="middle" align="left" style="padding-top:14px;padding-bottom:10px;padding-left:18px"> <img src="'.$this->tick.'" width="40" height="40" border="0" style="display:block" class="CToWUd"> </td> <td valign="middle" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:10px;padding-bottom:10px"> Think of us as partners who will work with you to find the right match. </td> </tr> <tr> <td valign="middle" align="left" style="padding-top:20px;padding-bottom:10px;padding-left:18px"> <img src="'.$this->listify.'" width="40" height="40" border="0" style="display:block" class="CToWUd"> </td> <td valign="middle" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:10px;padding-bottom:10px"> We depend on you to tell us about yourself and what you are looking for. <br> So, do take time to fill out your profile accurately. </td> </tr> <tr> <td valign="middle" align="left" style="padding-top:20px;padding-bottom:10px;padding-left:18px"> <img src="'.$this->user.'" width="40" height="40" border="0" style="display:block" class="CToWUd"> </td> <td valign="middle" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:20px;padding-bottom:10px"> <a style="line-height:19px;color:#00bcd5;text-decoration:none;outline:none" href="#" target="_blank" data-saferedirecturl="">Login</a> regularly, contact and respond to members to get close to meeting the right one. </td> </tr> <tr> <td valign="middle" align="left" style="padding-top:20px;padding-bottom:10px;padding-left:18px"> <img src="'.$this->camera.'" width="40" height="40" border="0" style="display:block" class="CToWUd"> </td> <td valign="middle" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:20px;padding-bottom:18px">We have noticed that <a style="line-height:17px;color:#00bcd5;text-decoration:none;outline:none" href="#" target="_blank" data-saferedirecturl="#">Uploading a photo</a> dramatically increases the response you get. You can choose to <a style="line-height:17px;color:#00bcd5;text-decoration:none;outline:none" href="#" target="_blank" data-saferedirecturl="#"> keep your photo private.</a> </td> </tr>  <tr> <td valign="middle" align="left" style="padding-top:20px;padding-bottom:10px;padding-left:18px"> <img src="'.$this->lock.'" width="40" height="40" border="0" style="display:block" class="CToWUd"> </td> <td valign="middle" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:20px;padding-bottom:10px"> Please read our <a href="#" style="line-height:19px;color:#00bcd5;text-decoration:none;outline:none" target="_blank" data-saferedirecturl="#">safety guidelines</a> and report any misuse immediately to keep you safe. </td> </tr> </tbody></table> </td> </tr> <tr> <td valign="top" style="font:normal 15px arial;line-height:20px;color:#51505d;text-align:left;padding-top:18px;padding-bottom:16px"> We want to make your journey on <a href="#" style="line-height:20px;color:#51505d;text-decoration:none;outline:none" target="_blank" data-saferedirecturl="#"><span class="il">Bellsmatrimony</span>.com</a> an amazing one so get in touch with our <a style="line-height:17px;color:#00bcd5;text-decoration:none;outline:none" href="#" target="_blank" data-saferedirecturl="#">Customer Service</a> team or <a style="line-height:17px;color:#00bcd5;text-decoration:none;outline:none" href="mailto:" target="_blank"> With me directly</a> for any questions or suggestions. </td> </tr> <tr> <td valign="top" style="font:normal 15px arial;line-height:20px;color:#51505d;text-align:left;padding-top:10px;padding-bottom:39px"> All the best for your Partner Search! <br> Best Wishes, </td> </tr>  </tbody></table> </td> </tr> </tbody></table> </td> </tr>   </tbody></table> </td> </tr> </tbody></table>      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f1f1f2"> <tbody><tr> <td valign="top" align="center" style="padding-bottom:10px"> <u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#dfe0e3;max-width:600px;margin:0 auto"> <tbody><tr><td><u></u>  </td></tr>  <tr> <td valign="top" style="padding-right:8px;padding-left:8px"> <table cellspacing="0" cellpadding="0" border="0" style="width:100%"> <tbody><tr> <td style="font:normal 14px arial;line-height:17px;color:#95959d;text-align:center;padding-top:10px;padding-right:10px;padding-bottom:18px;padding-left:10px"> Need Help? Use <a href="#" style="color:#95959d;text-decoration:underline;outline:none" target="_blank" data-saferedirecturl="#">Live Chat</a> now or call us at 9790261892 between 10am–7pm </td> </tr> </tbody></table> </td> </tr> </tbody></table>  <u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#fff;max-width:600px"> <tbody><tr><td><u></u>  </td></tr><tr> <td style="font:normal 11px arial;line-height:14px;color:#95959d;text-align:center;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px"> If you have not registered on <a href="#" style="color:#95959d;line-height:14px;text-decoration:none;outline:none" target="_blank" data-saferedirecturl="#"><span class="il">Bellsmatrimony</span>.com</a> using this email address please <a href="#" style="color:#00bcd5;line-height:14px;text-decoration:none;outline:none" target="_blank" data-saferedirecturl="#">click here</a>.<br> We will immediately deactivate Profile Id: <b>'.$user_id.'</b>. </td> </tr> </tbody></table> </td> </tr> </tbody></table> </div></div>  </body> </html>'; 
	
	
	return $body;
	
	}
	
	
	
	
	function kano_email($customer_name, $date, $user_id, $email) {
	

	
	$body = '<html lang="en">
<head>
 <style>




.table{
    box-shadow: 2px 2px 2px #888888;
}

        .pt-26{

    padding: 26px 0px !important;

        }


        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td{
            border: 1px solid #ddd;
        }


.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td{
padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
}


.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td{
padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
}



    </style>
   
</head>
<body>


<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br>
           
            <br>
            <br>
			
			 			 
            <table class="table table-bordered" style="width:100%;border-collapse: collapse;">
                <tbody><tr>
                    <td class="text-center"><img src="images/kano_job_logo.png" width="60" height="60"></td>
                    <td class="text-center pt-26">QS Forms 032 Job Description/APMT Control Manual Ref # G1</td>
                    <td class="text-center pt-26"><strong>JOB DESCRIPTION FORM</strong></td>
                    <td class="text-center pt-26">Revision No. 2</td>
                </tr>
				                <tr><td colspan="2">Effective Date: Nov 2017 </td><td colspan="2"></td></tr>
            </tbody></table>
        </div>
    </div>



    <div class="row">
        <div class="col-md-12">

            <table class="table table-bordered"  style="width:100%;border-collapse: collapse;    margin-top: 2%;">
                <tbody><tr>
                    <td class="">Position</td>
                    <td class="text-center">Position1</td>
                    <td class="">Department</td>
                    <td class="text-center">HR &amp; Admin Manager</td>
                </tr>

                <tr>
                    <td class="">Employee Code</td>
                    <td class="text-center"></td>
                    <td class="">Name</td>
                    <td class="text-center"></td>
                </tr>


                <tr>
                    <td class="">Current Title</td>
                    <td class="text-center"></td>
                    <td class="">Location</td>
                    <td class="text-center">Chennai, Africa,  India</td>
                </tr>



                <tr>
                    <td class="">Reporting to</td>
                    <td class="text-center">Manager</td>
                    <td class="">Hiring Date</td>
					                    <td class="text-center">21-11-2017</td>
                </tr>

               

            </tbody></table>


            <br>
            <table class="table table-bordered"  style="width:100%;border-collapse: collapse;    margin-top: 2%;">

                <tbody><tr><td colspan="4"><strong>Block title 1</strong></td></tr>
                <tr><td colspan="4">
                    <p class="text-justify"> Block description 1</p>

                   


                </td></tr>

            </tbody></table>

            <table class="table table-bordered"  style="width:100%;border-collapse: collapse;    margin-top: 2%;">

                <tbody><tr><td colspan="4"><strong>Block title 2</strong></td></tr>
                <tr><td colspan="4">
                    <p class="text-justify"> Block description 2</p>

                   


                </td></tr>

            </tbody></table>

  <table class="table table-bordered"  style="width:100%;border-collapse: collapse;    margin-top: 2%;">
<tbody><tr><td>
Normal description 1</td></tr>

            </tbody></table>
        
  <table class="table table-bordered"  style="width:100%;border-collapse: collapse;    margin-top: 2%;">
<tbody><tr><td>
Normal description 2</td></tr>

            </tbody></table>
        
          

           
            <br>
            <table class="table table-bordered"  style="width:100%;border-collapse: collapse;    margin-top: 2%;">

                <tbody><tr><td style="width: 15%;">Initiated /Reviewed by</td>
                    <td></td>
                    <td style="width: 15%;">Sign/date</td>
                    <td></td>
                </tr>
                <tr>
                    <td style="width: 15%;">Approved by</td>
                    <td></td>
                    <td style="width: 15%;">Sign/date</td>
                    <td></td></tr>


            </tbody></table>

        </div>
    </div>
</div>


</body>
</html>';
	

	
			
	return $body;
	}
	
	
	
	
	
	
	function approval_email($customer_name, $date, $user_id, $email) {
	
	$email_encode = $this->Global_model->b_encode($email);	

	$verify_link = base_url()."login/verify/".$email_encode;
	
	
	
	
	
	
	$body = '<html> <body> <div> <div> <table cellspacing="0" cellpadding="0" border="0" style="background:#f1f1f2;width:100%;border-top:10px solid #f1f1f2"> <tbody> <tr> <td valign="top" align="center"> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#fff;max-width:600px;border:1px solid #dfe0e3;border-bottom:none"> <tbody> <tr> <td><u></u> </td> </tr> <tr> <td valign="top" align="left" style="padding-top:18px;padding-bottom:18px;padding-left:15px"> <img src="'.$this->logo.'" border="0" height="44" alt="Bells  Matrimonial Service" title="Bells  Matrimonial Service" > </td> <td valign="top" style="padding-top:18px;padding-right:9px;padding-bottom:18px"> <div style="font:normal 12px arial;line-height:15px;color:#b1b3b9;text-align:right"> &nbsp; <div>'.$date.'</div> </div> </td> </tr> </tbody> </table> <u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;border:1px solid #dfe0e3;border-top:4px solid #ff5a60;border-bottom:2px solid #dfe0e3;background:#fff"> <tbody> <tr> <td><u></u> </td> </tr> <tr> <td valign="top" style="padding-top:20px;padding-right:8px;padding-left:8px"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <td valign="top" align="left"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <td valign="top" style="font:normal 15px arial;line-height:19px;color:#51505d;text-align:left;padding-top:6px;padding-bottom:21px"> Dear '.$customer_name.', </td> </tr> <tr> <td valign="top" style="font:normal 15px arial;line-height:20px;color:#51505d;text-align:left;padding-bottom:15px">  In order to activate all benefits of your account on <strong>Bellsmatrimony.com</strong> verify your email now.<br /><p align="center"><a style="line-height:17px; color:#fff; background-color: #cc3333;     padding: 6px 12px; text-decoration:none; outline:none" href="'.$verify_link.'" target="_blank" data-saferedirecturl="#">Verify Email</a></p></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table>
<table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f1f1f2"> <tbody> <tr> <td valign="top" align="center" style="padding-bottom:10px"> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#dfe0e3;max-width:600px;margin:0 auto"> <tbody> <tr> <td><u></u> </td> </tr> <tr> <td valign="top" style="padding-right:8px;padding-left:8px"> <table cellspacing="0" cellpadding="0" border="0" style="width:100%"> <tbody> <tr> <td style="font:normal 14px arial;line-height:17px;color:#95959d;text-align:center;padding-top:10px;padding-right:10px;padding-bottom:18px;padding-left:10px"> Need Help? Use <a href="#" style="color:#95959d;text-decoration:underline;outline:none" target="_blank" data-saferedirecturl="#">Live Chat</a> now or call us at 9790261892 between 10am–7pm </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <u></u>  </td> </tr> </tbody> </table></div> </div> </body> </html>';
	

	
			
	return $body;
	}
	
	
	
	
	
	function payment_body($date, $msg){
	
	
	
	$body = '<html> <head></head> <body> <table cellspacing="0" cellpadding="0" border="0" style="background:#f1f1f2;width:100%;border-top:10px solid #f1f1f2"> <tbody> <tr> <td valign="top" align="center"> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#fff;max-width:600px;border:1px solid #dfe0e3;border-bottom:none"> <tbody> <tr> <td><u></u> </td> </tr> <tr> <td valign="bottom" align="left" style="padding-top:18px;padding-bottom:18px;padding-left:15px"> <img src="'.$this->logo.'" border="0" alt="Bells Matrimonial Site" title="Bells  Matrimonial Site"> </td> <td valign="bottom" style="padding-top:18px;padding-right:9px;padding-bottom:18px"> <div style="font:normal 12px arial;line-height:15px;color:#b1b3b9;text-align:right"> <div>'.$date.'</div> </div> </td> </tr> </tbody> </table> <u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#ff5a60;max-width:600px;border-right:1px solid #ff5a60;border-left:1px solid #ff5a60"> <tbody> <tr> <td><u></u> </td> </tr> <tr> <td valign="top" align="left" style="font:bold 22px arial;line-height:25px;color:#fff;padding-top:9px;padding-bottom:9px;padding-left:14px"> New Matches </td> </tr> </tbody> </table> <u></u> <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;border:1px solid #dfe0e3;border-top:none;border-bottom:2px solid #dfe0e3;background:#fff"> <tbody> <tr> <td><u></u> </td> </tr> <tr> <td valign="top" style="padding-top:20px;padding-right:8px;padding-left:8px"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <td valign="top" align="left" style="font:normal 18px arial;line-height:21px;color:#72727d;text-align:left;border-bottom:1px solid #dfe0e3;padding-bottom:20px"> '.$msg.' </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </body> </html>';
	
	
	
	
	return $body;
	
	
	}
	
	
	
	
}