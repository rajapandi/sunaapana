<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
    /* 	
     * Author
     * 	www.technogenesis.in
     * 	http://www.technogenesis.in
     */

    function __construct() {
        parent::__construct();
    }

    public function print_names() {

        
        

        if ($this->input->post()) {


            $names = $this->input->post('name[]');
            $nameids = $this->input->post('nameid[]');
            $numerology = $this->input->post('n[]');
            $gender = $this->input->post('g[]');
            $meaning = $this->input->post('m[]');
            $mode = $this->input->post('mode');

            if (!empty($nameids)) {

                $mode = isset($mode) ? $mode : 'print';
                
                $page_data['names'] = $names;
                $page_data['nameids'] = $nameids;
                $page_data['numerology'] = $numerology;
                $page_data['gender'] = $gender;
                $page_data['meaning'] = $meaning;
                $page_data['mode'] = $mode;




                $page_data['page_title'] = 'Name Print Out';


                $this->load->view('print', $page_data);
                
                
                
                
                
            } else {
                show_404();
            }
        } else {
            show_404();
        }
    }

    public function index() {


        $this->session->unset_userdata('reg_mobile');
        $this->session->unset_userdata('reg_otp');
        $this->session->unset_userdata('otp_login');

        $page_data['page_title'] = 'Welcome to Home';

        $page_data['page_name'] = 'home';

        $this->load->view('index', $page_data);
    }

    public function send_otp() {

        $input = $this->input->post('mobile');

        $otp_data = $this->Global_model->otp($input);

        $rs = $otp_data['rs'];

        $otp = $otp_data['otp'];

        $this->session->set_userdata('reg_otp', $otp);
        $this->session->set_userdata('reg_mobile', $input);

        echo json_encode(array('rs' => $rs));
    }

    public function resend_otp() {

        $input = $this->session->userdata('reg_mobile');

        $otp_data = $this->Global_model->otp($input);

        $rs = $otp_data['rs'];

        $otp = $otp_data['otp'];

        $this->session->set_userdata('reg_otp', $otp);

        $msg = ($rs) ? 'OTP has sent' : 'OTP cannot sent';


        echo json_encode(array('rs' => $rs, 'msg' => $msg));
    }

    public function check_reg_otp() {
        $otp = $this->input->post('otp_token');
        $goto = $this->input->post('rgoto');
        $otp_sent = $this->session->userdata('reg_otp');
        $otp_mobile = $this->session->userdata('reg_mobile');
        $res = ($otp_sent == $otp) ? true : false;

        $msg = '';

        if ($res) {
            $msg = 'Ok';

            $this->session->set_userdata('reg_mobile', $otp_mobile);
            $this->session->set_userdata('reg_otp', $otp_sent);
            $this->session->set_userdata('otp_login', true);
        } else {
            $msg = 'Wrong OTP';
            $this->session->set_userdata('otp_login', false);
        }


        echo json_encode(array('rs' => $res, 'url' => $goto, 'msg' => $msg, 'mobile' => $otp_mobile));
    }

    function admn() {


        $rs = false;
        $uid = $this->input->post('id');
        $meaning = $this->input->post('mn');

        $data['baby_name_id'] = $uid;
        $data['baby_name_means'] = $meaning;
        $data['status'] = 0;
        $data['m_created_by'] = $this->input->ip_address();
        $data['m_created_on'] = date('Y-m-d H:i:s');

        if (trim($uid) != '' && trim($meaning) != '')
            $rs = $this->db->insert('baby_name_meaning', $data);

        echo json_encode(array('rs' => $rs));
    }

    function like() {

        $CI = & get_instance();
        $CI->load->model('names_model');
        $rs = false;
        $uid = $this->input->post('id');
        $mode = $this->input->post('md');

        if (trim($uid) != '')
            $rs = $CI->names_model->set_like($uid, $mode);

        echo json_encode(array('rs' => $rs));
    }

    function test() {






        //setcookie("cookie_name", "cookie_value", time()*3600, '/', 'acb.com', true, false);
        // setcookie("user_name", "Guru99", time() - 360,'/');

        print_r($_COOKIE);
        echo 'asd';
    }

    function admnaddm() {


        $rs = false;
        $uid = $this->input->post('id');
        $more_info = $this->input->post('amore');

        $data['baby_name_id'] = $uid;
        $data['more_info'] = $more_info;
        $data['status'] = 0;
        $data['i_created_by'] = $this->input->ip_address();
        $data['i_created_on'] = date('Y-m-d H:i:s');

        if (trim($uid) != '' && trim($more_info) != '')
            $rs = $this->db->insert('add_more', $data);

        echo json_encode(array('rs' => $rs));
    }

}
