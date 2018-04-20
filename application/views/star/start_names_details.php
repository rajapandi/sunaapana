
<?php
//$suitable_data = $suitable_data; //$this->session->userdata('suitable_data');
//if (is_array($suitable_data) && !empty($suitable_data)) {
$life_number = $life_number;
$numerology = $numerology;
$initial = $initial;
$initial_number = $initial_number;
$life_number = $life_number;
$father_name = $father_name;
$starts_with = $starts_with;
$search_tags = $search_tags;
$gender = $gender;
$place = $place;

$starts_with_ls = (empty($starts_with)) ? array() : explode(',', $starts_with);


$starts_with_ls = (empty($starts_with_ls)) ? '' : $starts_with_ls;
//$starts_with_ls = array("no");
//echo $initial_number;





//} else {
//  redirect(base_url('suitable'), 'refresh');
//}
?>

<section id="home" class="pl-10 pr-10  mb-20">

    <div class="row">

        <div class="col-md-12">

            <div class="home-search-wrap p-10" style="min-height: 250px;">

                <h5 class="widget-title line-bottom">Your Suitable Names</h5>

                <div class="row pl-15 pr-15">

                    <ul class="list list-inline" style="height:150px; width:100%; border: 1px solid black;">
                        <li class="col-md-6 pr0 text-left">Birth Day : <strong><?php echo $birth_date ?></strong></li>
                        <li class="col-md-6 pr0 text-left">Birth Day Numerology No: <strong><?php echo $life_number ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Gender: <strong><?php echo ucwords($gender) ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Father's Name: <strong><?php echo ucwords($father_name) ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Birth Place: <strong><?php echo ucwords($place) ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Birth Time: <strong><?php echo $birth_time ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Nakshatra: <strong><?php echo ucwords($nak) ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Nakshatra in English: <strong><?php echo ucwords($nak_en) ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Rasi: <strong><?php echo ucwords($rasi) ?></strong></li>
                        <li class="col-md-6 pr-0 text-left">Rasi in English: <strong><?php echo ucwords($rasi_en) ?></strong></li>
                    </ul>  

                </div>


                <div class="row pl-15 pr-15" >
                    <ul class="list list-inline" >
                        <li class="col-md-6 pr-0 text-left" style="height:30px; width:50%; border: 1px solid black; padding:5px; background-color:#fdd927;">Letters: <strong><?php echo ucwords($starts_with) ?></strong></li>
                    </ul>
                </div>

                








            </div>
        </div>

        <!--div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300X250.png') ?>" class="img-responsive" />
        </div -->


    </div>



</section>