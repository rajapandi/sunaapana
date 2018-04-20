<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Names_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    
    
    function getMeaning($id){
      $this->db->select('GROUP_CONCAT(baby_name_means) AS meanings');
      $this->db->where('baby_name_id', $id);
      $this->db->group_by('baby_name_id');      
     $qry = $this->db->get('baby_name_meaning');     
      
     return ($qry->num_rows() > 0 ) ? $qry->row()->meanings : '';
      
    }
    
    
    
    function getTags($id){
      $this->db->select('GROUP_CONCAT(c.name) AS tags');
      $this->db->from('baby_name_tags t');      
      $this->db->join('category c', 't.baby_tag_id = c.id', 'LEFT');
      $this->db->where('t.baby_name_id', $id);
      $this->db->group_by('t.baby_name_id');      
     $qry = $this->db->get();     
      
     return ($qry->num_rows() > 0 ) ? $qry->row()->tags : '';
      
    }
    
    
    function getNameById($id){
        $this->db->where('baby_name_id', $id);
        return $this->db->get('baby_name'); 
    }
    
    
    
    
    function getNames($category=NULL, $gender=NULL, $starts_with=NULL, $per_page=null,$page=null){
        
        
       /* SELECT n.baby_name_id, n.baby_name, m.baby_name_means
  FROM baby_name n
  LEFT JOIN baby_name_meaning m 
    ON n.baby_name_id = m.baby_name_id
   AND m.baby_name_id =
        ( SELECT baby_name_id FROM baby_name_meaning
           WHERE baby_name_id = n.baby_name_id  order by baby_name_meaning.baby_meaning_id desc limit 1
       )*/
        
        
        
        
        $this->db->select('*');
        $this->db->from('baby_name n');
        $this->db->join('baby_name_meaning m', 'n.baby_name_id = m.baby_name_id', 'LEFT');
        $this->db->join('baby_name_tags t', 'n.baby_name_id = t.baby_name_id', 'LEFT');
        $this->db->join('category c', 't.baby_tag_id = c.id', 'LEFT');
       
        if($category!='')
        $this->db->where_in('c.name', $category);
        
        
        if($gender!='')
        $this->db->where('n.baby_gender', $gender);
        
        
        
        if($starts_with!='')
        $this->db->like('n.baby_name', $starts_with, 'after');
        
        
        $this->db->order_by('n.baby_name_id', 'desc');
        
        if(!empty($per_page) && !empty($page))
        {
            $this->db->limit($per_page, $page);
        }
        
        
       return $this->db->get();
        
        
    }
    
    
    
    public function getNamesPage($category=NULL, $gender=NULL, $starts_with=NULL, $per_page=null,$page=null) 
    {
        
    $query = $this->getNames($category, $gender, $starts_with, $per_page,$page);

 
        if ($query->num_rows() > 0) 
        {
            foreach ($query->result() as $row) 
            {
                $data[] = $row;
            }
             
            return $data;
        }
 
        return false;
    }
    
    
     public function get_total() 
    {
        return $this->db->count_all("baby_name");
    }
    
    
    
    
    
    
    
    
    function insert_baby_name() {

        $data = array();

        $mobile = $this->session->userdata('reg_mobile');
        $now = date('Y-m-d H:i:s');
        
        $data['baby_name'] = $this->input->post('baby_name');
        $data['baby_gender'] = $this->input->post('gender');
        $data['created_by'] = $mobile;
        $data['created_on'] = $now;

        $this->db->insert('baby_name', $data);
        $baby_name_id = $this->db->insert_id();

        $meaning = $this->input->post('meaning[]');

        $data_item = array();
        $len = count($meaning);

        for ($i = 0; $i < $len; $i++) {

            $data_item[$i]['baby_name_means'] = $meaning[$i];
            $data_item[$i]['baby_name_id'] = $baby_name_id;
            $data_item[$i]['m_created_by'] = $mobile;
            $data_item[$i]['m_created_on'] = $now;
            
        }
        $ok = $this->db->insert_batch('baby_name_meaning', $data_item);

        $tags = $this->input->post('tags[]');

        $data_tags = array();
        $length = count($tags);

        for ($i = 0; $i < $length; $i++) {

            $data_tags[$i]['baby_tag_id'] = $tags[$i];
            $data_tags[$i]['baby_name_id'] = $baby_name_id;
        }
        $ok = $this->db->insert_batch('baby_name_tags', $data_tags);
        $ok = true;
        
        $reset = ($_POST['save-another'] == 1) ? true : false;
        
        return json_encode(array('rs' => $ok, 'reset'=>$reset));
    }

    

   

    

}
