
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

$sql = $this->n->getNamesByNumerology($search_tags, $gender, $starts_with_ls, $initial_number, $life_number, 10, 1);

$sqlDouble = $this->n->getDoubleNamesByNumerology($search_tags, $gender, $starts_with_ls, $initial_number, $life_number, 10, 1);


$total_records = $sql->num_rows();
$data = ($total_records > 0) ? $sql->result() : array();

$total_records_double = $sqlDouble->num_rows();
$data_double = ($total_records_double > 0) ? $sqlDouble->result() : array();





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

                <div class="card bx-sh quick-form-wrap ">
                    <ul class="nav nav-tabs centered" role="tablist">
                        <li role="presentation" class="active"><a href="#single-name-tab" aria-controls="search" role="tab" data-toggle="tab">Sinlge Name</a></li>
                        <li role="presentation"><a href="#double-name-tab" aria-controls="search" role="tab" data-toggle="tab">Double Name</a></li>
                    </ul>

                    <div class="tab-content">

                        <div role="tabpanel" class="tab-pane active" id="single-name-tab">                  
                            <?php if ($total_records > 0) { ?>
                                <table class="table table-bordered">
                                    <thead class="">
                                        <tr>
                                            <th class="text-left" style="">Name</th>
                                            <th class="text-left" style="">Meaning</th>
                                            <th class="text-center" style="width:8%">Numerology</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php
                                        foreach ($data as $row) {


                                            $current_baby_numerology = is_numeric($row->numerology) ? $row->numerology : 0;
                                            $father_numer = $numerology;
                                            $initial_number = $initial_number;
                                            $new_numerology = $initial_number + $current_baby_numerology;
                                            $new_numerology = $this->Global_model->reduce_single($new_numerology);
                                            ?>

                                            <tr>

                                                <td><strong><?php echo $initial ?> </strong><a href="<?php echo base_url("names/details/$row->baby_name_id") ?>"><?php echo ucwords($row->baby_name) ?></a></td>
                                                <td><?php echo $this->n->getMeaning($row->baby_name_id) ?></td>
                                                <td><?php echo $new_numerology; ?></td>
                                            </tr>

                                        <?php } ?>
                                    </tbody>

                                </table>

                            <?php } else { ?>
                                <p class="text-center text-danger">No suitable names..<a href="<?php echo base_url('suitable') ?>">Try Another</a></p>
                            <?php } ?>

                        </div>



                        <div role="tabpanel" class="tab-pane" id="double-name-tab">

                            <?php if ($total_records_double > 0) { ?>
                                <table class="table table-bordered">
                                    <thead class="">
                                        <tr>
                                            <th class="text-left" style="">Name</th>
                                            <th class="text-left" style="">Meaning</th>
                                            <th class="text-center" style="width:8%">Numerology</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php
                                        foreach ($data_double as $row) {


                                            $current_baby_numerology = is_numeric($row->numerology) ? $row->numerology : 0;
                                            $father_numer = $numerology;
                                            $initial_number = $initial_number;
                                            $new_numerology = $initial_number + $current_baby_numerology;
                                            $new_numerology = $this->Global_model->reduce_single($new_numerology);
                                            ?>

                                            <tr>

                                                <td><strong><?php echo $initial ?> </strong><a href="<?php echo base_url("names/details/$row->baby_name_id") ?>"><?php echo ucwords($row->baby_name) ?></a>&nbsp; <?php echo ucwords($row->second_name); ?></td>
                                                <td><?php echo $this->n->getMeaning($row->baby_name_id) ?></td>
                                                <td><?php echo $new_numerology; ?></td>
                                            </tr>

                                        <?php } ?>
                                    </tbody>

                                </table>

                            <?php } else { ?>
                                <p class="text-center text-danger">No suitable names..<a href="<?php echo base_url('suitable') ?>">Try Another</a></p>
                            <?php } ?>
                        </div>  

                    </div>

                </div>








            </div>
        </div>

        <!--div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300X250.png') ?>" class="img-responsive" />
        </div -->


    </div>



</section>