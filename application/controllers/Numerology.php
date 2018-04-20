<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Numerology extends CI_Controller {
    /* 	
     * Author
     * 	www.technogenesis.in
     * 	http://www.technogenesis.in
     */

    function __construct() {
        parent::__construct();
    }

    public function index() {


        $page_data['page_title'] = 'Find Numerology';

        $page_data['page_name'] = 'numerology/find';
        $page_data['baby_name'] = '';
        
        $this->load->view('index', $page_data);
    }
    
    
    
    public function get() {


        $name = $this->uri->segment(3);
        $name = empty($name) ? '' : $name;
        
        $page_data['page_title'] = 'Find Numerology';

        $page_data['page_name'] = 'numerology/find';
        
        $page_data['baby_name'] = $name;

        $this->load->view('index', $page_data);
    }
    
    
    
    

    public function find() {
        $baby_name = $this->input->post('baby_name');
        $father_name = $this->input->post('father_name');
        $birth_date = $this->input->post('birth_date');

        $page_data['baby_name'] = ucwords($baby_name);
        $page_data['father_name'] = ucwords($father_name);
        $page_data['birth_date'] = $birth_date;

        
        $name_number_father =  empty($father_name) ? 0 : $this->Global_model->get_numerology_total($father_name[0]);
        
        
         
        
        $name_number = $this->Global_model->get_numerology_total($baby_name);
        $name_number += $name_number_father;
        
        $numerology = $this->Global_model->reduce_single($name_number);

        $birth_day = date('d', strtotime($birth_date));
        $birth_month = date('m', strtotime($birth_date));
        $birth_year = date('Y', strtotime($birth_date));



        $corporal = $this->Global_model->reduce_single($birth_day);

        $corporal_month = $this->Global_model->reduce_single($birth_month);

        $corporal_year = $this->Global_model->reduce_single($birth_year);

        $corporal_total = $corporal + $corporal_month + $corporal_year;

        $life_number = $this->Global_model->reduce_single($corporal_total);
        //$life_number = $this->Global_model->sum_of_digits("$life_number");

        $luck_details = $this->Global_model->get_lucky_details($corporal);

        $lucky_colors = $this->Global_model->get_lucky_colors($corporal);
                
                
        //$page_data['test_number'] = $this->Global_model->reduce_single(4);

        $page_data['name_number'] = $name_number;
        $page_data['numerology'] = $numerology;
        $page_data['corporal'] = $corporal;
        $page_data['life_number'] = $life_number;

        //lucky details
        $page_data['lucky_number'] = $luck_details['lucky_number'];
        $page_data['lucky_days'] = $luck_details['lucky_days'];
        $page_data['unlucky_days'] = $luck_details['unlucky_days'];
        
        
          //lucky colors
        $page_data['lucky_colors'] = $lucky_colors['lucky_colors'];
        $page_data['unlucky_colors'] = $lucky_colors['unlucky_colors'];
        
        $lucky_stones = $this->Global_model->get_lucky_stones($corporal, $life_number);
        
        //lucky stones
        $page_data['lucky_stones'] = $lucky_stones;


        $page_data['page_title'] = 'Numerology Prediction';
        $page_data['page_name'] = 'numerology/prediction';
        $this->load->view('index', $page_data);


        //redirect(base_url('numerology/predict/'.$baby_name.'/'.), 'refresh');
    }

    function predict($baby_name, $father_name, $birth_date) {

        $page_data['baby_name'] = $baby_name;
        $page_data['father_name'] = $father_name;
        $page_data['birth_date'] = $birth_date;

        $page_data['page_title'] = 'Numerology Prediction';
        $page_data['page_name'] = 'numerology/prediction';
        $this->load->view('index', $page_data);
    }

}
