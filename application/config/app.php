<?php
/**
 * Media Configuration for Codeigniter
 *
 * @package    CodeIgniter
 * @author     Rajapandi
 */
 
defined('BASEPATH') OR exit('No direct script access allowed');

$config['allowed_types'] = 'bmp, gif,ico,jpg,jpeg, png';
$config['max_size'] = 100;
$config['max_width'] = 1024;
$config['max_height'] = 1024;
$config['media_path'] = 'upload';
$config['max_filename'] = 0;
$config['max_files'] = 10;
$config['overwrite'] = 0;
$config['remove_spaces'] = 1;
$config['encrypt_name'] = 0;