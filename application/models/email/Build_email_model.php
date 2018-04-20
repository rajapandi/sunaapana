<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Build_Email_model extends CI_Model {

    function __construct() {
        parent::__construct();
		$this->load->library('email');
		
    }

   

    /*     * *custom email sender*** */

    function do_email($msg = NULL, $sub = NULL, $to = NULL, $from = NULL) {

        $config = array();
		

//$config['useragent']    = "CodeIgniter";
//$config['mailpath']     = "/usr/sbin/sendmail"; 
$config['protocol'] 	= "smtp";
$config['smtp_host'] 	= "ssl://smtp.gmail.com";
$config['smtp_port'] 	= "465";
$config['smtp_user'] 	= "devtechnogenesis@gmail.com"; 
$config['smtp_pass'] 	= "Dev@12345";
$config['smtp_timeout'] = 60;                      
//$config['smtp_crypto']  = 'ssl'; 
$config['charset'] 		= "utf-8";
$config['mailtype'] 	= "html";
$config['newline']  	= "\r\n";
$config['wordwrap'] 	= TRUE;
//$config['dsn'] 		= TRUE;
		
        

        $this->email->initialize($config);

        $system_name = 'BellsMatrimnoy';
				
		 $from = 'bellsmatrimony.com';

        $this->email->from($from, $system_name);
        $this->email->to($to);
        $this->email->subject($sub);	
		
        $this->email->message($msg);
		
		
		
		return $this->email->send();
		
		
        //echo $this->email->print_debugger();
    }
	
	

}