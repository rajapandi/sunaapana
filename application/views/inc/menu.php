<div class="row">


    <div class="col-md-12">
        <div class="main-menu">
            <nav class="navbar tg-navbar">
                <!-- Brand and toggle get grouped for better mobile display -->

                <div class="navbar-header">
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                </div>


                 <?php
                                
                                $indian_tags = array(
                                    'assamese',
                                    'bengali',
                                    'gujarati',
                                    'hindu',
                                    'kannada',
                                    'malayalam',
                                    'marathi',
                                    'oriya',
                                    'sanskrit',
                                    'punjabi',
                                    'sindhi',
                                    'tamil',
                                    'telugu'
                                    
                                );
                                
                                ?>
                
                
                <?php
                $menu_segment = strtolower($this->uri->segment(1));
                $menu_segment_2 = strtolower($this->uri->segment(2));
                ?>


                <!-- Collection of nav links and other content for toggling -->
                <div id="navbarCollapse" class="collapse navbar-collapse m-0 p-0">
                    <ul class="nav navbar-nav">
                        <li class="<?php if ($page_name == 'home') echo 'active' ?>" ><a href="<?php echo base_url() ?>" ><i class="fa fa-home"></i></a></li> 
                        <li class="<?php if ($menu_segment == 'suitable') echo 'active' ?>"><a href="<?php echo base_url('suitable') ?>">Suitable Names</a></li> 
                        <li class="<?php if ($menu_segment == 'numerology') echo 'active' ?>"><a href="<?php echo base_url('numerology') ?>">Find Numerology</a></li> 
                        <li class="<?php if ($menu_segment_2 == 'all') echo 'active' ?>"><a href="<?php echo base_url('names/all') ?>">All Baby Names</a></li>
                        <li class="<?php if ($menu_segment_2 == 'american') echo 'active' ?>"><a href="<?php echo base_url('names/american') ?>">American</a></li>


                        <li class="<?php if ($menu_segment_2 == 'muslim') echo 'active' ?>"><a href="<?php echo base_url('names/muslim') ?>">Arabic/Muslim</a></li>

                        <li class="<?php if ($menu_segment_2 == 'christian') echo 'active' ?>"><a href="<?php echo base_url('names/christian') ?>">Christian</a></li>

                        <li class="<?php if ($menu_segment_2 == 'australian') echo 'active' ?>"><a href="<?php echo base_url('names/australian') ?>">Australian</a></li>
                        <li class="<?php if ($menu_segment_2 == 'french') echo 'active' ?>"><a href="<?php echo base_url('names/french') ?>">French</a></li>
                        <li class="dropdown <?php if(in_array($menu_segment_2, $indian_tags)) echo ' active'; ?>"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Indian<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                
                               
                                
                                <li><a href="<?php echo base_url('names/assamese') ?>">Assamese</a></li>
                                <li><a href="<?php echo base_url('names/bengali') ?>">Bengali</a></li>
                                <li><a href="<?php echo base_url('names/gujarati') ?>">Gujarati</a></li>
                                <li><a href="<?php echo base_url('names/hindu') ?>">Hindu</a></li>
                                <li><a href="<?php echo base_url('names/kannada') ?>">Kannada</a></li>
                                <li><a href="<?php echo base_url('names/malayalam') ?>">Malayalam</a></li>
                                <li><a href="<?php echo base_url('names/marathi') ?>">Marathi</a></li>
                                <li><a href="<?php echo base_url('names/oriya') ?>">Oriya</a></li>
                                <li><a href="<?php echo base_url('names/sanskrit') ?>">Sanskrit</a></li>
                                <li><a href="<?php echo base_url('names/punjabi') ?>">Sikh / Punjabi</a></li>
                                <li><a href="<?php echo base_url('names/sindhi') ?>">Sindhi</a></li>
                                <li><a href="<?php echo base_url('names/tamil') ?>">Tamil</a></li>
                                <li><a href="<?php echo base_url('names/telugu') ?>">Telugu</a></li>


                            </ul>
                        </li>

                    </ul>



                    <ul class="nav navbar-nav pull-right">
                        <?php if ($this->session->userdata('otp_login')) { ?>
                            <li class="not-hv" style="background: #c60055;"><a href="javascript:void(0)"><i class="fa fa-user"></i> Welcome Guest.</a></li>
                        <?php } else { ?>
                            <li class="add-baby"><a href="#" data-toggle="modal" data-target ="#otp_modal" class="btn btn-primary" ><i class="fa fa-plus"></i>  Add Baby Names</a></li>

                        <?php } ?>

                    </ul>

                </div>
            </nav>

        </div>


    </div>
</div>




