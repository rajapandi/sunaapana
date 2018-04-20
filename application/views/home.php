
<!-- Section: home -->
<section id="home" class="pl-10 pr-10  mb-20">



    <!--div class="row"></div -->



    <div class="row">

        <div class="col-md-8 hm-enc-bg">
            <div class="col-md-5 pl-0">
                <?php $this->load->view('inc/all_category'); ?>
            </div> 
            <div class="col-md-7 home-search-wrap ">


                 <h5 class="widget-title line-bttom"> <img src="<?php echo base_url('resources/img/star.gif') ?>" height="38" /> Find Your Babe's Birth Star</h5>

                <form class="form-horizontal form-lbl-r" id="suitable_fm" action="<?php echo base_url('star/find')  ?>" method="POST" role="form">

                   <div class="form-group">
                    <label class="col-md-3 control-label">Birth Date <span class="text-danger">*</span></label>
                    <div class="col-md-9">
                        <div class="input-group input-append techodate">         
                            <input type="text" class="form-control datepicker" name="dob" id="dob" placeholder="" data-fv-field="from" required="">
                            <span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-3 control-label">Birth Time <span class="text-danger">*</span></label>
                    <div class="col-md-9">
                        <select id="dob_hr" name="dob_hr" class="form-control" style="width: 25%; float: left;" required="required">
                            <option value="">HOUR</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>


                        <select id="dob_min" name="dob_min" class="form-control" style="width: 25%; float: left;" required="required">
                            <option value="">MIN</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                        </select>



                        <select id="dob_sec" name="dob_sec" class="form-control" style="width: 25%; float: left;" required="required">
                            <option value="">SEC</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                        </select>


                        <select id="dob_meridiem" name="dob_meridiem" class="form-control" style="width: 25%; float: left;" required="required">	
                            <option value="0">AM/PM</option>	
                            <option value="01">AM</option>	
                            <option value="02">PM</option>
                        </select>


                    </div>
                </div>

                 <input type="hidden" name="timezone" id="timezone" />
                 <!--input type="hidden" name="timezone_val" id="timezone_val" />
                 <input type="hidden" name="timezone_sign" id="timezone_sign" / -->
                
                <input type="hidden" name="utc" id="utc" />
                <input type="hidden" name="jd" id="jd" />
                <input type="hidden" name="mean_anomaly" id="mean_anomaly" />
                <input type="hidden" name="lang_sun" id="lang_sun" />
                <input type="hidden" name="moon_lang" id="moon_lang" />
                <input type="hidden" name="moon_anomaly" id="moon_anomaly" />
                <input type="hidden" name="moon_anomaly_crt" id="moon_anomaly_crt" />
                <input type="hidden" name="moon_lang_crt" id="moon_lang_crt" />
                
                <input type="hidden" name="ecliptic_lang_moon" id="ecliptic_lang_moon" />
                <input type="hidden" name="ecliptic_lat_moon" id="ecliptic_lat_moon" />
                <input type="hidden" name="rah" id="rah" />
                <input type="hidden" name="ram" id="ram" />
                <input type="hidden" name="ras" id="ras" />
                <input type="hidden" name="decd" id="decd" />
                <input type="hidden" name="decm" id="decm" />
                <input type="hidden" name="decs" id="decs" />
                
                <input type="hidden" name="nak" id="nak" />
                <input type="hidden" name="nak_en" id="nak_en" />
                <input type="hidden" name="rasi" id="rasi" />
                <input type="hidden" name="rasi_en" id="rasi_en" />
                <input type="hidden" name="letters" id="letters" />
                

                <div class="form-group" id="gender_err" >
                    <label class="col-md-3 control-label" for="">Gender <span class="text-danger">*</span></label>
                    <div class="col-md-9 p-0">
                        <label class="radio-inline col-md-5">
                            <input type="radio" name="gender" id="gender-Male" value="boy"  class="checkbox"> Male
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="gender" id="gender-Female" value="girl" class="checkbox"> Female
                        </label>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-3 control-label">Birth Place</label>
                    <div class="col-md-9">



                        <select name="time" class="form-control" id="time">
                            <option value="-11.00">(GMT-11.00) Midway Island, Samoa</option>
                            <option value="-10.00">(GMT-10.00) Hawaii-Aleutian</option>
                            <option value="-10.00">(GMT-10.00) Hawaii</option>
                            <option value="-09.30">(GMT-09.30) Marquesas Islands</option>
                            <option value="-09.00">(GMT-09.00) Gambier Islands</option>
                            <option value="-09.00">(GMT-09.00) Alaska</option>
                            <option value="-08.00">(GMT-08.00) Tijuana, Baja California</option>
                            <option value="-08.00">(GMT-08.00) Pitcairn Islands</option>
                            <option value="-08.00">(GMT-08.00) Pacific Time (US &amp; Canada)</option>
                            <option value="-07.00">(GMT-07.00) Mountain Time (US &amp; Canada)</option>
                            <option value="-06.00">(GMT-07.00) Chihuahua, La Paz, Mazatlan</option>
                            <option value="-06.00">(GMT-07.00) Arizona</option>
                            <option value="-06.00">(GMT-06.00) Saskatchewan, Central America</option>
                            <option value="-06.00">(GMT-06.00) Guadalajara, Mexico City, Monterrey</option>
                            <option value="-06.00">(GMT-06.00) Easter Island</option>
                            <option value="-06.00">(GMT-06.00) Central Time (US &amp; Canada)</option>
                            <option value="-05.00">(GMT-05.00) Eastern Time (US &amp; Canada)</option>
                            <option value="-05.00">(GMT-05.00) Cuba</option>
                            <option value="-05.00">(GMT-05.00) Bogota, Lima, Quito, Rio Branco</option>
                            <option value="-04.30">(GMT-04.30) Caracas</option>
                            <option value="-04.00">(GMT-04.00) Santiago</option>
                            <option value="-04.00">(GMT-04.00) La Paz</option>
                            <option value="-04.00">(GMT-04.00) Faukland Islands</option>
                            <option value="-04.00">(GMT-04.00) Brazil</option>
                            <option value="-04.00">(GMT-04.00) Atlantic Time (Goose Bay)</option>
                            <option value="-04.00">(GMT-04.00) Atlantic Time (Canada)</option>
                            <option value="-03.00">(GMT-03.30) Newfoundland</option>
                            <option value="-03.00">(GMT-03.00) UTC-3</option>
                            <option value="-03.00">(GMT-03.00) Montevideo</option>
                            <option value="-03.00">(GMT-03.00) Miquelon, St. Pierre</option>
                            <option value="-03.00">(GMT-03.00) Greenland</option>
                            <option value="-03.00">(GMT-03.00) Buenos Aires</option>
                            <option value="-03.00">(GMT-03.00) Brasilia</option>
                            <option value="-02.00">(GMT-02.00) Mid-Atlantic</option>
                            <option value="-01.00">(GMT-01.00) Cape Verde Is.</option>
                            <option value="-01.00">(GMT-01.00) Azores</option>
                            <option value="0">(GMT) Greenwich Mean Time . Belfast</option>
                            <option value="0">(GMT) Greenwich Mean Time . Dublin</option>
                            <option value="0">(GMT) Greenwich Mean Time . Lisbon</option>
                            <option value="0">(GMT) Greenwich Mean Time . London</option>
                            <option value="0">(GMT) Monrovia, Reykjavik</option>
                            <option value="+01.00">(GMT+01.00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option value="+01.00">(GMT+01.00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option value="+01.00">(GMT+01.00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option value="+01.00">(GMT+01.00) West Central Africa</option>
                            <option value="+01.00">(GMT+01.00) Windhoek</option>
                            <option value="+02.00">(GMT+02.00) Beirut</option>
                            <option value="+02.00">(GMT+02.00) Cairo</option>
                            <option value="+02.00">(GMT+02.00) Gaza</option>
                            <option value="+02.00">(GMT+02.00) Harare, Pretoria</option>
                            <option value="+02.00">(GMT+02.00) Jerusalem</option>
                            <option value="+02.00">(GMT+02.00) Minsk</option>
                            <option value="+02.00">(GMT+02.00) Syria</option>
                            <option value="+03.00">(GMT+03.00) Moscow, St. Petersburg, Volgograd</option>
                            <option value="+03.00">(GMT+03.00) Nairobi</option>
                            <option value="+03.30">(GMT+03.30) Tehran</option>
                            <option value="+04.00">(GMT+04.00) Abu Dhabi, Muscat</option>
                            <option value="+04.00">(GMT+04.00) Yerevan</option>
                            <option value="+04.30">(GMT+04.30) Kabul</option>
                            <option value="+05.00">(GMT+05.00) Ekaterinburg</option>
                            <option value="+05.00">(GMT+05.00) Tashkent</option>
                            <option value="+05.30" selected="selected">(GMT+05.30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option value="+05.45">(GMT+05.45) Kathmandu</option>
                            <option value="+06.00">(GMT+06.00) Astana, Dhaka</option>
                            <option value="06.00">(GMT+06.00) Novosibirsk</option>
                            <option value="+06.30">(GMT+06.30) Yangon (Rangoon)</option>
                            <option value="+07.00">(GMT+07.00) Bangkok, Hanoi, Jakarta</option>
                            <option value="+07.00">(GMT+07.00) Krasnoyarsk</option>
                            <option value="+08.00">(GMT+08.00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option value="+08.00">(GMT+08.00) Irkutsk, Ulaan Bataar</option>
                            <option value="+08.00">(GMT+08.00) Perth</option>
                            <option value="+08.45">(GMT+08.45) Eucla</option>
                            <option value="+09.00">(GMT+09.00) Osaka, Sapporo, Tokyo</option>
                            <option value="+09.00">(GMT+09.00) Seoul</option>
                            <option value="+09.00">(GMT+09.00) Yakutsk</option>
                            <option value="+09.30">(GMT+09.30) Adelaide</option>
                            <option value="+09.30">(GMT+09.30) Darwin</option>
                            <option value="+10.00">(GMT+10.00) Brisbane</option>
                            <option value="+10.00">(GMT+10.00) Hobart</option>
                            <option value="+10.00">(GMT+10.00) Vladivostok</option>
                            <option value="+10.30">(GMT+10.30) Lord Howe Island</option>
                            <option value="+11.00">(GMT+11.00) Solomon Is., New Caledonia</option>
                            <option value="+11.00">(GMT+11.00) Magadan</option>
                            <option value="+11.30">(GMT+11.30) Norfolk Island</option>
                            <option value="+12.00">(GMT+12.00) Anadyr, Kamchatka</option>
                            <option value="+12.00">(GMT+12.00) Auckland, Wellington</option>
                            <option value="+12.00">(GMT+12.00) Fiji, Kamchatka, Marshall Is.</option>
                            <option value="+12.45">(GMT+12.45) Chatham Islands</option>
                            <option value="+13.00">(GMT+13.00) Nuku'alofa</option>
                            <option value="+14.00">(GMT+14.00) Kiritimati</option>




                        </select>





                        <!--input type="text" id="place" name="place" class="form-control" / -->
                    </div>
                </div>

                    <button class="btn btn-primary pull-right">Submit</button>

                </form>
            </div> 
        </div>



        <div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive" style="height: 300px; width: 100%;" />

            <!--h5 class="widget-title line-bottom">Add your favourite babe's names</h5>
            
            <p>Everybody can add your favourite baby names with meaning here</p>
            
            <button class="btn btn-primary">Click Here</button -->

        </div> 
    </div> <!-- row -->

</section>




<div class="row mt-20">

    <div class="col-md-4">

    </div>

    <div class="col-md-4">
        <h4 class="a">Browse By Alphabet </h4>
    </div>


</div>

<section id="character-filter-section" class="pl-10 pr-10 mt-10 mb-20 filter-focus">
    <div class="container">








        <div class="row">
            <div class="col-md-12 ch-flt-wrap">	
                <ul class="character-filter"> 
                    <li><label for="boy-flt" class="boy-flt">Boys</label></li>

                    <?php
                    $category = 'all';

                    $character_list = array(
                        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
                    );


                    foreach ($character_list as $value) {
                        $url = base_url("names/$category/boy") . '/' . strtolower($value);


                        echo '<li class=""><a href="' . $url . '">' . $value . '</a></li>';
                    }
                    ?>




                </ul> 
            </div>

        </div>


        <div class="row">
            <div class="col-md-12 ch-flt-wrap mb-20">	
                <ul class="character-filter"> 
                    <li><label for="girl-flt" class="girl-flt">Girls</label></li>

                    <?php
                    $character_list = array(
                        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
                    );


                    foreach ($character_list as $value) {
                        $url = base_url("names/$category/girl") . '/' . strtolower($value);

                        echo '<li class=""><a href="' . $url . '">' . $value . '</a></li>';
                    }
                    ?>
                </ul> 
            </div>
        </div>


    </div>

</section>






<section class="recently-popular mt-30">
    <div class="container">


        <div class="row">
            <div class="col-md-10">
                <div class="row mb-10">

                    <div class="col-md-4">

                    </div>

                    <div class="col-md-4">
                        <h4 class="a">Recently Popular Baby Names </h4>
                    </div>


                </div>

                <div class="row">



                    <div class="col-md-4">
                        <div class="single-blog-post post-without-image" style="min-height: 285px;">
                            <div class="featured-image">
                                <h4 class="post-heading">Tamil Names</h4>
                            </div>
                            <div class="post-meta" style="min-height: 210px;">
                                <ul class="name-list row">

                                    <?php
                                    $CI = & get_instance();
                                    $CI->load->model('names_model');

                                    $recent_data = $CI->names_model->get_popular_names("tamil", 'boy');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/") ?>" class="boy" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                    <?php
                                    $recent_data = $CI->names_model->get_popular_names("tamil", 'girl');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/$id") ?>" class="girl" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                </ul>
                            </div>
                            <div class="meta-tags">
                            <!--span class="comments"><a href="#"><i class="mdi mdi-comment-outline"></i> 245 Names</a></span -->
                                <a class="btn btn-round btn-fab" title="View All" href="<?php echo base_url('names/tamil') ?>"><i class="fa fa-arrow-right"></i><div class="ripple-container"></div></a>
                            </div>

                        </div>
                    </div>





                    <div class="col-md-4">
                        <div class="single-blog-post post-without-image" style="min-height: 285px;">
                            <div class="featured-image">
                                <h4 class="post-heading">Christian Names</h4>
                            </div>
                            <div class="post-meta" style="min-height: 210px;" >
                                <ul class="name-list row">

                                    <?php
                                    $CI = & get_instance();
                                    $CI->load->model('names_model');

                                    $recent_data = $CI->names_model->get_popular_names("christian", 'boy');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/") ?>" class="boy" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                    <?php
                                    $recent_data = $CI->names_model->get_popular_names("christian", 'girl');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/$id") ?>" class="girl" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                </ul>
                            </div>
                            <div class="meta-tags">
                            <!--span class="comments"><a href="#"><i class="mdi mdi-comment-outline"></i> 245 Names</a></span -->
                                <a class="btn btn-round btn-fab" title="View All" href="<?php echo base_url('names/christian') ?>"><i class="fa fa-arrow-right"></i><div class="ripple-container"></div></a>
                            </div>

                        </div>
                    </div>





                    <div class="col-md-4">
                        <div class="single-blog-post post-without-image" style="min-height: 285px;">
                            <div class="featured-image">
                                <h4 class="post-heading">Arabic/Musilm Names</h4>
                            </div>
                            <div class="post-meta" style="min-height: 210px;" >
                                <ul class="name-list row">

                                    <?php
                                    $CI = & get_instance();
                                    $CI->load->model('names_model');

                                    $recent_data = $CI->names_model->get_popular_names("muslim", 'boy');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/") ?>" class="boy" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                    <?php
                                    $recent_data = $CI->names_model->get_popular_names("muslim", 'girl');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/$id") ?>" class="girl" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                </ul>
                            </div>
                            <div class="meta-tags">
                            <!--span class="comments"><a href="#"><i class="mdi mdi-comment-outline"></i> 245 Names</a></span -->
                                <a class="btn btn-round btn-fab" title="View All" href="<?php echo base_url('names/muslim') ?>"><i class="fa fa-arrow-right"></i><div class="ripple-container"></div></a>
                            </div>

                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="single-blog-post post-without-image" style="min-height: 285px;">
                            <div class="featured-image">
                                <h4 class="post-heading">American Names</h4>
                            </div>
                            <div class="post-meta" style="min-height: 210px;" >
                                <ul class="name-list row">

                                    <?php
                                    $CI = & get_instance();
                                    $CI->load->model('names_model');

                                    $recent_data = $CI->names_model->get_popular_names("american", 'boy');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/") ?>" class="boy" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                    <?php
                                    $recent_data = $CI->names_model->get_popular_names("american", 'girl');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/$id") ?>" class="girl" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                </ul>
                            </div>
                            <div class="meta-tags">
                            <!--span class="comments"><a href="#"><i class="mdi mdi-comment-outline"></i> 245 Names</a></span -->
                                <a class="btn btn-round btn-fab" title="View All" href="<?php echo base_url('names/american') ?>"><i class="fa fa-arrow-right"></i><div class="ripple-container"></div></a>
                            </div>

                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="single-blog-post post-without-image" style="min-height: 285px;">
                            <div class="featured-image">
                                <h4 class="post-heading">Hindu Names</h4>
                            </div>
                            <div class="post-meta" style="min-height: 210px;" >
                                <ul class="name-list row">

                                    <?php
                                    $CI = & get_instance();
                                    $CI->load->model('names_model');

                                    $recent_data = $CI->names_model->get_popular_names("hindu", 'boy');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/") ?>" class="boy" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                    <?php
                                    $recent_data = $CI->names_model->get_popular_names("hindu", 'girl');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/$id") ?>" class="girl" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                </ul>
                            </div>
                            <div class="meta-tags">
                            <!--span class="comments"><a href="#"><i class="mdi mdi-comment-outline"></i> 245 Names</a></span -->
                                <a class="btn btn-round btn-fab" title="View All" href="<?php echo base_url('names/hindu') ?>"><i class="fa fa-arrow-right"></i><div class="ripple-container"></div></a>
                            </div>

                        </div>
                    </div>



                    <div class="col-md-4">
                        <div class="single-blog-post post-without-image" style="min-height: 285px;">
                            <div class="featured-image">
                                <h4 class="post-heading">Malayalam Names</h4>
                            </div>
                            <div class="post-meta" style="min-height: 210px;" >
                                <ul class="name-list row">

                                    <?php
                                    $CI = & get_instance();
                                    $CI->load->model('names_model');

                                    $recent_data = $CI->names_model->get_popular_names("malayalam", 'boy');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/") ?>" class="boy" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                    <?php
                                    $recent_data = $CI->names_model->get_popular_names("malayalam", 'girl');

                                    foreach ($recent_data->result() as $row) {
                                        $name = ucfirst($row->baby_name);
                                        $id = $row->baby_name_id;
                                        ?>

                                        <li class="col-md-6">
                                            <a href="<?php echo base_url("names/details/$id") ?>" class="girl" title="<?php echo $name ?>"><span><?php echo $name ?></span></a>
                                        </li>
                                    <?php } ?>


                                </ul>
                            </div>
                            <div class="meta-tags">
                            <!--span class="comments"><a href="#"><i class="mdi mdi-comment-outline"></i> 245 Names</a></span -->
                                <a class="btn btn-round btn-fab" title="View All" href="<?php echo base_url('names/malayalam') ?>"><i class="fa fa-arrow-right"></i><div class="ripple-container"></div></a>
                            </div>

                        </div>
                    </div>




                </div>

            </div>
            <div class="col-md-2 hidden-xs hidden-sm ">
                <div class="hidden-xs hidden-sm" style="margin-top: 55px;">
                    <img src="<?php echo base_url() ?>resources/images/120x600.jpg" class="pull-right" alt="">
                </div>
            </div>

        </div>












    </div>
</section>

<!--section class="recently-popular">
<div class="container">
<div class="row">
<div class="col-md-12">

</div>
</div>
</div>
</section -->



<script>
    
    $(document).ready(function (){
    $('input:radio[name="gender"]').on('ifChanged', function (e) {
        $(this).valid();
    });
    });
</script>



<script>

    var sugar = 'technogenesisBaby';

    setc("tgid", sugar);


  

</script>