<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Global_model extends CI_Model {

    public $image_allowed_types = "gif|jpg|png|jpeg";
    public $upload_path = './resources/images/profiles/';
    public $numerologyIndex = array('A' => 1,
        'B' => 2,
        'C' => 3,
        'D' => 4,
        'E' => 5,
        'F' => 8,
        'G' => 3,
        'H' => 5,
        'I' => 1,
        'J' => 1,
        'K' => 2,
        'L' => 3,
        'M' => 4,
        'N' => 5,
        'O' => 7,
        'P' => 8,
        'Q' => 1,
        'R' => 2,
        'S' => 3,
        'T' => 4,
        'U' => 6,
        'V' => 6,
        'W' => 6,
        'X' => 5,
        'Y' => 1,
        'Z' => 7);
    public $luckyIndex = array(
        0 => array(
            'lucky_number' => "",
            'lucky_days' => "",
            'unlucky_days' => ""
        ),
        1 => array(
            'lucky_number' => "1",
            'lucky_days' => "1,10,19,28",
            'unlucky_days' => "8,17,26"
        ),
        2 => array(
            'lucky_number' => "7",
            'lucky_days' => "16,25",
            'unlucky_days' => "8,9,17,18,26,27"
        ),
        3 => array(
            'lucky_number' => "3,9",
            'lucky_days' => "3,12,21,30,9,18,27",
            'unlucky_days' => "6,15,24"
        ),
        4 => array(
            'lucky_number' => "1",
            'lucky_days' => "1,10,19,28",
            'unlucky_days' => "8,17,26"
        ),
        5 => array(
            'lucky_number' => "5,9",
            'lucky_days' => "5,9,14,18,23,27",
            'unlucky_days' => ""
        ),
        6 => array(
            'lucky_number' => "6,9",
            'lucky_days' => "6,9,15,18,24,27",
            'unlucky_days' => "3,12,21,30"
        ),
        7 => array(
            'lucky_number' => "1,2",
            'lucky_days' => "1,2,10,11,19,20,28,29",
            'unlucky_days' => "7,8,16,17,25,26"
        ),
        8 => array(
            'lucky_number' => "1,9",
            'lucky_days' => "1,9,10,18,19,28,27",
            'unlucky_days' => "8,17,26"
        ),
        9 => array(
            'lucky_number' => "1,5,6,9",
            'lucky_days' => "3,5,6,9,12,14,15,18,21,23,24,27,30",
            'unlucky_days' => "2,7,11,16,20,25,29"
        )
    );

    public function __construct() {
        parent::__construct();
    }

    
    /* lucky number */
    
    function get_lucky_details($day){
        
        return isset($this->luckyIndex[$day]) ? $this->luckyIndex[$day] :$this->luckyIndex[0] ;
    }
    
    
    
    
    /* find numerology */

    function get_numerology_total($name) {
        $name = strtoupper($name);
        $numero = 0;
        for ($i = 0; $i < strlen($name); $i++) {
            $alpha = $name[$i];
            $numero = $this->numerologyIndex[$alpha] + $numero;
        }

        return $numero;
    }

    function sum_of_digits($nums) {
        $digits_sum = 0;
        for ($i = 0; $i < strlen($nums); $i++) {
            $digits_sum += $nums[$i];
        }
        return $digits_sum;
    }

    /* messages coding starts */

    function sendSms($mobile, $msg) {

        // create curl resource
        $type = 'Trans';

//$api_url = 'http://bulksms.verussolutions.in/api/mt/SendSMS?user=sivatech&password=siva1234&senderid=BELMAT&channel='.$type.'&DCS=0&flashsms=0&number='.$mobile.'&text='.$msg;
        //$api_url = 'http://bulksms.verussolutions.in/api/mt/SendSMS?user=almighty&password=AlM%$#21&senderid=WEBSMS&channel=' . $type . '&DCS=0&flashsms=0&number=' . $mobile . '&text=' . $msg . '&route=28';

        $api_url = 'http://bulksms.verussolutions.in/api/mt/SendSMS?user=almighty&password=india123&senderid=BABYNM&channel=' . $type . '&DCS=8&flashsms=0&number=' . $mobile . '&text=' . $msg;


        $api_url = str_replace(" ", "%20", $api_url);


        // create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, $api_url);



        //curl_setopt($ch, CURLOPT_POST, 1);
        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);



        // $output contains the output string
        $output = curl_exec($ch);

        // close curl resource to free up system resources
        curl_close($ch);
        return $output;
    }

    function otp($mobile, $digit = 6, $msg = '') {
        $rs = false;
        $otp = '';

        if (($mobile != '') && (ctype_digit($mobile)) && (strlen($mobile) == 10)) {



            $otp = $this->getOTP($digit);
            // Greetings from BellsMatrimony.com! Your OTP is xxxxx. Use this OTP to verify your mobile.


            $msg = ($msg != '') ? $msg : 'Greetings from babay_names.com! Your OTP is ';

            $msg .= $otp;

            $msg .= '. Use this OTP to verify your mobile.';

            $sms = $this->Global_model->sendSms($mobile, $msg);

            $json = json_decode($sms);

            /* if ($json->ErrorCode == 000) {
              $rs = true;
              } else {
              $rs = false;
              } */

            $rs = true;
        }

        return array('otp' => $otp, 'rs' => $rs);
    }

    function sms($mobile, $msg) {

        $rs = false;

        $sms = $this->sendSms($mobile, $msg);

        $json = json_decode($sms);

        if ($json->ErrorCode == 000) {
            $rs = true;
        } else {
            $rs = false;
        }

        return $rs;
    }

    /* message coding ends */
    /* settings  */

    public function getSystemSettings() {

        $data = $this->db->where('setting_id', 1)->get('system_settings')->result_array();

        return $data;
    }

    /* settings  */





    /* email and mobile function for secretized */

    function encrypt_email($str) {
        //echo $str.'<br>';
        //string & total length
        $len = strlen($str);

        //before @ string and length
        $stat_str = substr($str, 0, strrpos($str, "@")) . '<br>';
        $stat_len = strrpos($str, "@") . '<br>';

        //end of the string
        $endstr = end((explode("@", $str)));
        $end_len = strlen($endstr);
        $slen = $stat_len - 1;

        return substr($str, 0, 1) . str_repeat('*', $slen) . '@' . substr($str, $len - $end_len, $end_len);
    }

//mobile encryption only for 10 number characters

    function encrypt_mobile($str) {

        //string & total length
        $len = strlen($str);

        //echo $str.'<br>';

        return substr($str, 0, 0) . str_repeat('*', $len - 2) . substr($str, $len - 2, 2);
    }

    function encrypt_mobile_limit($str, $digit = 0) {

        //string & total length
        $len = strlen($str);

        //echo $str.'<br>';


        return substr($str, 0, $digit) . str_repeat('*', $len - ($digit + $digit)) . substr($str, $len - $digit, $digit);
    }

    /* email and mobile function for secretized */

    /* encode decode coding */

    public function base64url_encode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    public function base64url_decode($data) {
        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
    }

    /* encode decode coding */

    function getOTP($digits) {

        return rand(pow(10, $digits - 1), pow(10, $digits) - 1);
    }

    /* message coding ends */

    function dateToMysqlToL($date) {
        $date = str_replace('/', '-', $date);
        return date('d-m-Y', strtotime($date));
    }

    function dateToMysql($date) {
        $date = str_replace('/', '-', $date);
        return date('Y-m-d', strtotime($date));
    }

    function dateTimeToMysql($date) {
        return date('Y-m-d H:i:s', strtotime($date));
    }

    function dateToDisplay($date) {

        if ($date != '') {
            return date('d-m-Y', strtotime($date));
        } else {
            return '';
        }
    }

    function dateTimeToDisplay($date) {
        return date('d-m-Y H:i:s A', strtotime($date));
    }

    /* supplier buyer code */





    /* july 10 */

    function format_currency($number) {
        return number_format($number, 2, '.', ',');
    }

    function roundUp($number) {
        //return round((float)$number, 2);

        return number_format((float) $number, 2, '.', ',');
    }

    public function single_upload($fieldname, $file_name, $path = null, $allowed_types = null) {

        if (!empty($_FILES[$fieldname]['name'])) {

            $path = ($path == '') ? $this->upload_path : $path;

            if (!is_dir($path))
                mkdir($path, 0777, true);

            $tempname = $_FILES[$fieldname]['name'];

            $ext = end((explode(".", $tempname)));
            $filename = $file_name . "." . $ext;

            $config['file_name'] = $filename;

            $config['upload_path'] = $path;

            $config['allowed_types'] = ($allowed_types == '') ? $this->image_allowed_types : $allowed_types;

            $config['overwrite'] = true;

            $this->load->library('upload');
            $this->upload->initialize($config);

            $res = (($this->upload->do_upload($fieldname)) ? true : false);
        }else {
            $filename = '';
            $res = false;
        }

        return array('rs' => $res, 'files' => $filename);
    }

}
