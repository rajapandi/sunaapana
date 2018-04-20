<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Baby extends CI_Controller {
    /* 	
     * Author
     * 	www.technogenesis.in
     * 	http://www.technogenesis.in
     */

    function __construct() {
        parent::__construct();
        
         //if(!$this->session->userdata('otp_login'))
           // redirect(base_url(), 'refresh');
        
        
        
        
       
        
        $this->load->model('Names_model', 'n');
        
    }
    
    
    
     public function add() {


        $page_data['page_title'] = 'Add Baby Name';

        $page_data['page_name'] = 'add_baby';

        $this->load->view('index', $page_data);
    }
    
    
    
    function insert_baby_name(){
        echo $this->n->insert_baby_name();
    }
            
    

    function baby_name_exists($baby_name, $id = NULL) {

        if (!empty($id)) {
            $this->db->where('baby_name_id ', $id);
        }

        $qry = $this->db->where('baby_name', $baby_name)->get('baby_name');

        return ($qry->num_rows() > 0) ? TRUE : FALSE;
    }

    //check baby name exist


    function exists() {

        $baby_name = $this->input->post('data');
        $id = $this->input->post('id');
        
        if ($this->baby_name_exists($baby_name, $id)) {
            echo json_encode(FALSE);
        } else {
            echo json_encode(TRUE);
        }
    }

    public function meaningexist() {

        $data = $this->input->post('data');
        $this->db->select('c.*');
        $this->db->from('baby_name_meaning c');
        $this->db->where('c.baby_name_means', $data);
        $sql = $this->db->get();

        $res = ($sql->num_rows() > 0) ? FALSE : TRUE;

        echo json_encode($res);
    }

}
