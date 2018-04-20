<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Names extends CI_Controller {
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

    public function index() {

        $page_data['page_title'] = 'Baby Names';

        $page_data['page_name'] = 'all/all_baby_home';
        $page_data['category'] = 'all';
        $this->load->view('index', $page_data);
    }

    public function tags() {


        $category = $this->uri->segment(2);

        $category = (!empty($category)) ? $category : 'all';
        $page_data['page_title'] = 'Baby Names';
        $page_data['page_name'] = 'all/all_baby_home';
        $page_data['category'] = $category;

        $this->load->view('index', $page_data);
    }

    /*
      public function get() {


      $category = $this->uri->segment(3);

      $category = (!empty($category)) ? $category : '';
      $category = ($category === 'all') ? '' : $category;
      $category = strtolower($category);



      $gender = $this->uri->segment(4);
      $gender = (!empty($gender)) ? $gender : NULL;

      $starts_with = $this->uri->segment(5);
      $character_only = (!empty($starts_with)) ? substr($starts_with, 0) : '';

      $query = $this->n->getNames($category, $gender, $starts_with);



      $total_records = $query->num_rows();





      #
      #pagination starts
      #
      $config["base_url"] = base_url("names/all/$gender/$character_only/");
      $config["total_rows"] = $total_records;
      $config["per_page"] = 10;
      $config["uri_segment"] = 6;
      $config["num_links"] = 5;

      $config['full_tag_open'] = "<ul class='pagination'>";
      $config['full_tag_close'] = "</ul>";
      $config['num_tag_open'] = '<li>';
      $config['num_tag_close'] = '</li>';
      $config['cur_tag_open'] = "<li class='disabled'><li class='active'><a href='#'>";
      $config['cur_tag_close'] = "<span class='sr-only'></span></a></li>";
      $config['next_tag_open'] = "<li>";
      $config['next_tag_close'] = "</li>";
      $config['prev_tag_open'] = "<li>";
      $config['prev_tagl_close'] = "</li>";
      $config['first_tag_open'] = "<li>";
      $config['first_tagl_close'] = "</li>";
      $config['last_tag_open'] = "<li>";
      $config['last_tagl_close'] = "</li>";

      $this->load->library('pagination');
      $this->pagination->initialize($config);
      $page = ($this->uri->segment(6)) ? $this->uri->segment(6) : 1;
      $links = $this->pagination->create_links();
      #
      #pagination ends
      #

      $page_data['gender'] = strtolower($gender);
      $page_data['char_selected'] = strtoupper($character_only);
      $page_data['page_title'] = 'Baby Names';
      $page_data['page_name'] = 'all/all_baby';
      $page_data['links'] =  $links;
      $page_data['data'] = ($total_records > 0) ? $this->n->getNamesPage($category, $gender, $starts_with, $config["per_page"], $page) : array();



      $this->load->view('index', $page_data);


      }

     */

    public function get() {


        $category = $this->uri->segment(2);

        $category = (!empty($category)) ? $category : 'all';

        //$category = (!empty($category)) ? $category : 'all';

        $category = strtolower($category);

        $search_tags = ($category === 'all') ? NULL : $category;


        $gender = $this->uri->segment(3);
        $gender = (!empty($gender)) ? $gender : NULL;





        $starts_with = $this->uri->segment(4);
        $character_only = (!empty($starts_with)) ? substr($starts_with, 0) : '';

        $query = $this->n->getNames($search_tags, $gender, $starts_with);



        $total_records = $query->num_rows();





        #
        #pagination starts
        #
        $config["base_url"] = base_url("names/$category/$gender/$character_only/");
        $config["total_rows"] = $total_records;
        $config["per_page"] = 20;
        $config["uri_segment"] = 5;
        $config["num_links"] = 5;

        $config['full_tag_open'] = "<ul class='pagination'>";
        $config['full_tag_close'] = "</ul>";
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = "<li class='disabled'><li class='active'><a href='#'>";
        $config['cur_tag_close'] = "<span class='sr-only'></span></a></li>";
        $config['next_tag_open'] = "<li>";
        $config['next_tag_close'] = "</li>";
        $config['prev_tag_open'] = "<li>";
        $config['prev_tagl_close'] = "</li>";
        $config['first_tag_open'] = "<li>";
        $config['first_tagl_close'] = "</li>";
        $config['last_tag_open'] = "<li>";
        $config['last_tagl_close'] = "</li>";

        $this->load->library('pagination');
        $this->pagination->initialize($config);
        $page = ($this->uri->segment(5)) ? $this->uri->segment(5) : 1;
        $links = $this->pagination->create_links();
        #
        #pagination ends
        #  

        $page_data['gender'] = strtolower($gender);
        $page_data['char_selected'] = strtoupper($character_only);
        $page_data['page_title'] = 'Baby Names';
        $page_data['page_name'] = 'all/all_baby';
        $page_data['category'] = $category;
        $page_data['links'] = $links;
        $page_data['data'] = ($total_records > 0) ? $this->n->getNamesPage($search_tags, $gender, $starts_with, $config["per_page"], $page) : array();


        $this->load->view('index', $page_data);
    }

    /*
      public function all() {


      $category = $this->uri->segment(2);

      $category = (!empty($category)) ? $category : '';

      $gender = $this->uri->segment(3);
      $gender = (!empty($gender)) ? $gender : NULL;

      $starts_with = $this->uri->segment(4);
      $character_only = (!empty($starts_with)) ? substr($starts_with, 0) : '';

      $query = $this->n->getNames(NULL, $gender, $starts_with);



      $total_records = $query->num_rows();





      #
      #pagination starts
      #
      $config["base_url"] = base_url("names/all/$gender/$character_only/");
      $config["total_rows"] = $total_records;
      $config["per_page"] = 10;
      $config["uri_segment"] = 5;
      $config["num_links"] = 5;

      $config['full_tag_open'] = "<ul class='pagination'>";
      $config['full_tag_close'] = "</ul>";
      $config['num_tag_open'] = '<li>';
      $config['num_tag_close'] = '</li>';
      $config['cur_tag_open'] = "<li class='disabled'><li class='active'><a href='#'>";
      $config['cur_tag_close'] = "<span class='sr-only'></span></a></li>";
      $config['next_tag_open'] = "<li>";
      $config['next_tag_close'] = "</li>";
      $config['prev_tag_open'] = "<li>";
      $config['prev_tagl_close'] = "</li>";
      $config['first_tag_open'] = "<li>";
      $config['first_tagl_close'] = "</li>";
      $config['last_tag_open'] = "<li>";
      $config['last_tagl_close'] = "</li>";

      $this->load->library('pagination');
      $this->pagination->initialize($config);
      $page = ($this->uri->segment(5)) ? $this->uri->segment(5) : 1;
      $links = $this->pagination->create_links();
      #
      #pagination ends
      #

      $page_data['gender'] = strtolower($gender);
      $page_data['char_selected'] = strtoupper($character_only);
      $page_data['page_title'] = 'Baby Names';
      $page_data['page_name'] = 'all/all_baby';
      $page_data['links'] =  $links;
      $page_data['data'] = ($total_records > 0) ? $this->n->getNamesPage(NULL, $gender, $starts_with, $config["per_page"], $page) : array();


      $this->load->view('index', $page_data);


      } */

    public function details() {



        $name_id = $this->uri->segment(3);


        $qry = $this->n->getNameById($name_id);

        if ($qry->num_rows() > 0) {

            $name_data = $qry->row();

            $page_data['page_title'] = 'Baby Names Details';
            $page_data['page_name'] = 'name_details';
            $page_data['name'] = $name_data->baby_name;
            $page_data['gender'] = $name_data->baby_gender;
            $page_data['likes'] = $name_data->likes;
            $page_data['tags'] = $this->n->getTagsList($name_id);
            $page_data['baby_name_id'] = $name_id;
            $page_data['meanings'] = $this->n->getMeaning($name_id);
            $page_data['numerology'] = $this->Global_model->get_numerology_no($name_data->baby_name);

            $this->load->view('index', $page_data);
        } else {
            redirect(base_url("names"));
        }
    }

    /*
      public function numerology() {


      $page_data['page_title'] = 'Baby Names Numerology';

      $page_data['page_name'] = 'calculation';

      $this->load->view('index', $page_data);
      } */

    public function prediction() {


        $page_data['page_title'] = 'Numerology Prediction';

        $page_data['page_name'] = 'prediction';

        $this->load->view('index', $page_data);
    }

    
    
    
    
    
    
    
    
    public function add() {


        $page_data['page_title'] = 'Add Baby Name';

        $page_data['page_name'] = 'add_baby';

        $this->load->view('index', $page_data);
    }

    function insert_baby_name() {
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
