
<?php
$suitable_data = $suitable_data; //$this->session->userdata('suitable_data');
if (is_array($suitable_data) && !empty($suitable_data)) {
    $life_number = $suitable_data['life_number'];
    $numerology = $suitable_data['numerology'];
    $initial = $suitable_data['initial'];
    $initial_number = $suitable_data['initial_number'];
    $life_number = $suitable_data['life_number'];
    $father_name = $suitable_data['father_name'];
    $starts_with = $suitable_data['starts_with'];
    $search_tags = $suitable_data['search_tags'];
    $gender = $suitable_data['gender'];
    $place = $suitable_data['place'];

    $sql = $this->n->getNamesByNumerology($search_tags, $gender, $starts_with, $initial_number, $life_number, 10, 1);

    $total_records = $sql->num_rows();

    $data = ($total_records > 0) ? $sql->result() : array();
    
} else {
    redirect(base_url('suitable'), 'refresh');
}
?>

<section id="home" class="pl-10 pr-10  mb-20">

    <div class="row">

        <div class="col-md-12">

            <div class="home-search-wrap p-10" style="min-height: 250px;">

                <h5 class="widget-title line-bottom">Your Suitable Names</h5>

                <div>
                    <ul class="list list-inline">
                        <li class="col-md-3 pr0 text-center">Birth Day Numerology No: <strong><?php echo $life_number ?></strong></li>
                        <li class="col-md-3 pr-0 text-center">Gender: <strong><?php echo ucwords($gender) ?></strong></li>
                        <li class="col-md-3 pr-0 text-center">Father's Name: <strong><?php echo ucwords($father_name) ?></strong></li>
                        <li class="col-md-3 pr-0 text-center">Place: <strong><?php echo ucwords($place) ?></strong></li>
                    </ul>
                </div>

                <div id='browse-alphabet'>
                    <div class="row">

                        <div class="col-md-4">

                        </div>

                        <div class="col-md-4">
                            <h4 class="a">Choose a Alphabet </h4>
                        </div>


                    </div>

                    <section id="character-filter-section" class="pl-10 pr-10 mt-10 mb-20 filter-focus">
                        <div class="container">



                            <div class="row">
                                <div class="col-md-12 ch-flt-wrap pb-20">	
                                    <ul class="character-filter "> 
                                        <!--li><label for="boy-flt" class="boy-flt"></label></li -->

<?php
$character_list = array(
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
);


foreach ($character_list as $value) {
  
    $url = base_url("suitable/search/") . '/' . strtolower($value);

    $active = (strtolower($starts_with) === strtolower($value)) ? 'char-selected' : '';


    echo '<li class="' . $active . '"><a href="' . $url . '">' . $value . '</a></li>';
}
?>




                                    </ul> 
                                </div>

                            </div>





                        </div>

                    </section>
                </div>


                <div class="card bx-sh quick-form-wrap">
                    <ul class="nav nav-tabs centered" role="tablist">
                        <li role="presentation" class="active"><a href="#single-name-tab" aria-controls="search" role="tab" data-toggle="tab">Sinlge Name</a></li>
                        <li role="presentation"><a href="#double-name-tab" aria-controls="search" role="tab" data-toggle="tab">Double Name</a></li>
                    </ul>

                    <div class="tab-content">

                        <div role="tabpanel" class="tab-pane active" id="single-name-tab">                  
<?php if ($total_records > 0) { ?>
                                            <table class="table table-bordered text-center">
                                                <thead class="text-center">
                                                    <tr>
                                                        <th class="text-center" style="width:5%">Initial</th>
                                                        <th class="text-center" style="">Name</th>
                                                        <th class="text-center" style="">Meaning</th>
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
                                                                        <td><?php echo $initial ?></td>
                                                                        <td><a href="<?php echo base_url("names/details/$row->baby_name_id") ?>"><?php echo ucwords($row->baby_name) ?></a></td>
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



                        <div role="tabpanel" class="tab-pane" id="double-name-tab"></div>  



                    </div>

                </div>








            </div>
        </div>

        <!--div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300X250.png') ?>" class="img-responsive" />
        </div -->


    </div>



</section>