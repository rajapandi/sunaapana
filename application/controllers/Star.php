<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Star extends CI_Controller {
    /* 	
     * Author
     * 	www.technogenesis.in
     * 	http://www.technogenesis.in
     */

    function __construct() {
        parent::__construct();

        //if(!$this->session->userdata('otp_login'))
        // redirect(base_url(), 'refresh');
    }

    /* public function index() {
      $this->session->unset_userdata('suitable_data');
      $page_data['page_title'] = 'Suitable Baby Names';
      $page_data['page_name'] = 'suitable/find';
      $this->load->view('index', $page_data);
      } */

    public function find() {

        if ($this->input->post()) {

            $birth_date = $this->input->post('dob');
            $gender = $this->input->post('gender');
            $place = $this->input->post('place');
            $father_name = $this->input->post('father');

            $dob_hr = $this->input->post('dob_hr');
            $dob_min = $this->input->post('dob_min');
            $dob_sec = $this->input->post('dob_sec');
            $dob_meridiem = $this->input->post('dob_meridiem');

            $birth_time = array();
            if (!empty($dob_hr))
                $birth_time[] = $dob_hr;
            if (!empty($dob_min))
                $birth_time[] = $dob_min;
            if (!empty($dob_sec))
                $birth_time[] = $dob_sec;
            //if(!empty($dob_meridiem))
            //$birth_time[] = ($dob_meridiem == 01) ? "AM" : "PM";
            //$birth_time = $dob_hr." ".$dob_min." ".$dob_sec." ".$dob_meridiem;
            $birth_time = implode(":", $birth_time) . " " . (($dob_meridiem == 01) ? "AM" : "PM");



            $timezone = $this->input->post('timezone');
            $nak = $this->input->post('nak');
            $nak_en = $this->input->post('nak_en');
            $rasi = $this->input->post('rasi');
            $rasi_en = $this->input->post('rasi_en');
            $letters = $this->input->post('letters');


            $name_number_father = empty($father_name) ? 0 : $this->Global_model->get_numerology_total($father_name);

            $numerology = $this->Global_model->reduce_single($name_number_father);


            $birth_day = date('d', strtotime($birth_date));
            $birth_month = date('m', strtotime($birth_date));
            $birth_year = date('Y', strtotime($birth_date));

            $corporal = $this->Global_model->reduce_single($birth_day);

            $corporal_month = $this->Global_model->reduce_single($birth_month);

            $corporal_year = $this->Global_model->reduce_single($birth_year);

            $corporal_total = $corporal + $corporal_month + $corporal_year;

            $life_number = $this->Global_model->reduce_single($corporal_total);

            $final_number = $life_number + $numerology;
            $final_number = $this->Global_model->reduce_single($final_number);

            $initial = isset($father_name[0]) ? $father_name[0] : 'A';
            $initial = is_string($initial) ? $initial : 'A';
            $initial = strtoupper($initial);

            $initial_number = isset($this->Global_model->numerologyIndex[$initial]) ? $this->Global_model->numerologyIndex[$initial] : 0;

            $starts_with = $letters;

            $category = 'all';
            $search_tags = ($category === 'all') ? NULL : $category;

            //  $sql = $this->n->getNamesByNumerology($search_tags, $gender, $starts_with, $initial_number, $life_number, 10, 1);




            $total_records = 0; //$sql->num_rows();



            $page_data['numerology'] = $final_number;
            $page_data['initial'] = $initial;
            $page_data['initial_number'] = $initial_number;
            $page_data['life_number'] = $life_number;
            $page_data['father_name'] = $father_name;
            $page_data['starts_with'] = $starts_with;
            $page_data['search_tags'] = $search_tags;
            $page_data['birth_time'] = $birth_time;
            $page_data['birth_date'] = $birth_date;
            $page_data['nak'] = $nak;
            $page_data['nak_en'] = $nak_en;
            $page_data['rasi'] = $rasi;
            $page_data['rasi_en'] = $rasi_en;
            $page_data['timezone'] = $timezone;
            $page_data['gender'] = $gender;
            $page_data['place'] = $timezone;
            $page_data['page_title'] = "Find Rasi and Nakshatra of your Baby's Name";
            $page_data['page_name'] = 'star/start_names_details';
            $page_data['total_records'] = $total_records;


            $this->load->view('index', $page_data);
        } else {
            show_404();
        }
    }

    /*
      public function find() {
      print_r($this->input->post());exit;
      if ($this->input->post()) {

      $birth_date = $this->input->post('dob');
      $gender = $this->input->post('gender');
      $place = $this->input->post('place');
      $father_name = $this->input->post('father');

      $dob_hr = $this->input->post('dob_hr');
      $dob_min = $this->input->post('dob_min');
      $dob_sec = $this->input->post('dob_sec');
      $dob_meridiem = $this->input->post('dob_meridiem');
      $timezone = $this->input->post('timezone');
      $nak = $this->input->post('nak');
      $nak_en = $this->input->post('nak_en');
      $rasi = $this->input->post('rasi');
      $rasi_en = $this->input->post('rasi_en');
      $letters = $this->input->post('letters');


      $name_number_father = empty($father_name) ? 0 : $this->Global_model->get_numerology_total($father_name);

      $numerology = $this->Global_model->reduce_single($name_number_father);


      $birth_day = date('d', strtotime($birth_date));
      $birth_month = date('m', strtotime($birth_date));
      $birth_year = date('Y', strtotime($birth_date));

      $corporal = $this->Global_model->reduce_single($birth_day);

      $corporal_month = $this->Global_model->reduce_single($birth_month);

      $corporal_year = $this->Global_model->reduce_single($birth_year);

      $corporal_total = $corporal + $corporal_month + $corporal_year;

      $life_number = $this->Global_model->reduce_single($corporal_total);

      $final_number = $life_number + $numerology;
      $final_number = $this->Global_model->reduce_single($final_number);

      $initial = isset($father_name[0]) ? $father_name[0] : 'A';
      $initial = is_string($initial) ? $initial : 'A';
      $initial = strtoupper($initial);

      $initial_number = isset($this->Global_model->numerologyIndex[$initial]) ? $this->Global_model->numerologyIndex[$initial] : 0;

      $starts_with = 'A';

      $category = 'all';
      $search_tags = ($category === 'all') ? NULL : $category;

      //  $sql = $this->n->getNamesByNumerology($search_tags, $gender, $starts_with, $initial_number, $life_number, 10, 1);




      $total_records = 0; //$sql->num_rows();



      $page_data['numerology'] = $final_number;
      $page_data['initial'] = $initial;
      $page_data['initial_number'] = $initial_number;
      $page_data['life_number'] = $life_number;
      $page_data['father_name'] = $father_name;
      $page_data['starts_with'] = $starts_with;
      $page_data['search_tags'] = $search_tags;
      $page_data['gender'] = $gender;
      $page_data['place'] = $place;
      $page_data['page_title'] = 'Suitable Names';
      $page_data['page_name'] = 'suitable/suitable_names';
      $page_data['total_records'] = $total_records;
      $page_data['data'] = array(); //($total_records > 0) ? $this->n->getNamesByNumerology($search_tags, $gender, $starts_with, $initial_number, $life_number, 10, 1)->result() : array();

      $this->session->set_userdata('suitable_data', $page_data);

      $this->load->view('index', $page_data);
      } else {
      show_404();
      }
      } */





    /*
      public function search() {

      $starts_with = $this->uri->segment(3);

      $suitable_data = $this->session->userdata('suitable_data');


      if (!empty($suitable_data) && is_array($suitable_data)) {

      $suitable_data['starts_with'] = (!empty($starts_with)) ? $starts_with : 'A';
      $page_data['suitable_data'] = $suitable_data;
      $page_data['page_title'] = 'Suitable Names';
      $page_data['page_name'] = 'suitable/suitable_names_details';
      $this->load->view('index', $page_data);
      } else {

      }
      }
     */

    public function zone() {

        /*  print_r(timezone_abbreviations_list());
          foreach (timezone_abbreviations_list() as $abbr => $timezone) {
          foreach ($timezone as $val) {
          if (isset($val['timezone_id'])) {
          var_dump($abbr, $val['timezone_id']);
          }
          }
          } */






        echo ' <div style="margin-top: 20px;"><select> <option value="0">Please, select timezone</option>';
        foreach ($this->tz_list() as $t) {
            echo '<option value="' . $t['zone'] . '">' . $t['diff_from_GMT'] . ' - ' . $t['zone'] . '</option>';
        }
        echo '</select>';
    }

    function tz_list() {
        $zones_array = array();
        $timestamp = time();
        foreach (timezone_identifiers_list() as $key => $zone) {
            date_default_timezone_set($zone);
            $zones_array[$key]['zone'] = $zone;
            $zones_array[$key]['diff_from_GMT'] = 'UTC/GMT ' . date('P', $timestamp);
        }
        return $zones_array;
    }

    function test() {



        $this->load->helper('cookie');

        set_cookie($name, $value, $expire);


        /* $expression = "raja";
          $expression = explode(",", $expression);
          print_r($expression); */


        //$query = $this->db->get('baby_name');
        //echo $query->num_rows();
        /*
          print_r($query->row());
          print_r($query->row_array()); */



//print_r($query->result());
        /*
          foreach ($query->result() as $rowObject) {
          echo $rowObject->baby_name.'<br>';
          } */

//print_r($query->result_array());

        /* foreach ($query->result_array() as $rowArray) {
          echo $rowArray['baby_name'] . '-af <br>';
          }

         */
    }

}
