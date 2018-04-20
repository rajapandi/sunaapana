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
                                            
                                    

                                            echo '<li class=""><a href="' . $url . '">' . $value . '</a></li>';
                                        }
                                        ?>




                                    </ul> 
                                </div>

                            </div>


                            


                        </div>

                    </section>
                </div>


                








            </div>
        </div>

        <!--div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300X250.png') ?>" class="img-responsive" />
        </div -->


    </div>



</section>