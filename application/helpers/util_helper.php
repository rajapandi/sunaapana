<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');


	
	
function getAge($year, $month, $day){
    $date = "$year-$month-$day";
    if(version_compare(PHP_VERSION, '5.3.0') >= 0){
        $dob = new DateTime($date);
        $now = new DateTime();
        return $now->diff($dob)->y;
    }
    $difference = time() - strtotime($date);
    return floor($difference / 31556926);
}
 

	
	
	
	
	
	
	
	
 