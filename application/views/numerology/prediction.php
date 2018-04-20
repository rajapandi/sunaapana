<section id="home" class="ml-15 pl-10 pr-10  mb-20">
    <div class="row">


        <?php
        //echo $test_number;
        ?>


        <style>
            .list-label > li:nth-child(even){

            }

            ul.list-label li {
                line-height: 35px;
                font-size: 14px;
            }
        </style>


        <div class="col-md-8 home-search-wrap">
            <h5 class="grad-head text-center">Numerology Prediction</h5>
            <ul class="list-label">
                <li class="col-md-5 row-color">
                    <span > <strong>Baby Name</strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span>: <?php echo $baby_name ?></span>
                </li>
                <li class="col-md-5">
                    <span> <strong>Father Name </strong></span>
                </li>
                <li class="col-md-7">
                    <span>: <?php echo $father_name ?></span>
                </li>
                <li class="col-md-5 row-color">
                    <span > <strong>Date Of Birth </strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span >: <?php echo $birth_date ?></span>
                </li>
                <li class="col-md-5">
                    <span > <strong>Name Number </strong></span>
                </li>
                <li class="col-md-7">
                    <span>: <?php echo $name_number ?></span>
                </li>

                <li class="col-md-5 row-color">
                    <span > <strong>Numerology Number </strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span>: <?php echo $numerology ?></span>
                </li>


                <li class="col-md-5">
                    <span> <strong>Corpporal/Personality Number </strong></span>
                </li>
                <li class="col-md-7">
                    <span >: <?php echo $corporal ?></span>
                </li>
                <li class="col-md-5 row-color">
                    <span > <strong>Life Number </strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span>: <?php echo $life_number ?></span>
                </li>
                <li class="col-md-5">
                    <span> <strong>Lucky Number  </strong></span>
                </li>
                <li class="col-md-7">
                    <span >: <?php echo $lucky_number ?></span>
                </li>
                <li class="col-md-5 row-color">
                    <span> <strong>Lucky Date  </strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span >: <?php echo $lucky_days ?></span>
                </li>
                <li class="col-md-5">
                    <span >  <strong>Lucky Color </strong></span>
                </li>
                <li class="col-md-7">
                    <span class="text-capitalize" >: <?php echo $lucky_colors ?></span>
                </li>
                <li class="col-md-5 row-color">
                    <span> <strong>Lucky Stone </strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span class="text-capitalize">: <?php echo $lucky_stones ?></span>
                </li>
                <li class="col-md-5">
                    <span> <strong>Unlucky Dates </strong></span>
                </li>
                <li class="col-md-7">
                    <span>: <?php echo $unlucky_days ?></span>
                </li>
                <li class="col-md-5 row-color">
                    <span> <strong>Unlucky Colors </strong></span>
                </li>
                <li class="col-md-7 row-color">
                    <span class="text-capitalize">:<?php echo $unlucky_colors ?></span>
                </li>
            </ul>





        </div>



        <div class="col-md-4">


            <div id="fb-root"></div>
            <script>(function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id))
                        return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));</script>

            <div class="fb-page" data-href="https://www.facebook.com/technogenesis/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/technogenesis/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/technogenesis/">Techno Genesis</a></blockquote></div>






        </div>

        <div class="row">
            <div class="col-md-12">
                <img src="<?php echo base_url() ?>resources/images/hor_ad.jpg" class="main-logo img-responsive" height="90" alt="ads" style="margin-top:25px; width:98%">

            </div>

            
        </div>




    </div>

</section>