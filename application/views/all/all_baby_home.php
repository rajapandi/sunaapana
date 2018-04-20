<?php
$this->load->view('inc/character_filter');
?>





<section id="home" class="pl-10 pr-10  mb-20">

    <div class="row">

        <div class=" col-md-8 ">



            <div class="col-md-12">
                <div class="single-blog-post post-without-image">
                    <div class="featured-image">
                        <h4 class="post-heading">Recently Added Boy Names</h4>
                    </div>
                    <div class="post-meta" style="min-height: 150px;">
                        <ul class="name-list row">

<?php
$search_tags = ($category === 'all') ? NULL : $category;

$recent_row = $this->n->getNames($search_tags,'boy', NULL, 15, 1);
   

foreach ($recent_row->result() as $row) {
    ?>

                                <li class="col-md-4">
                                    <a href="<?php echo base_url("names/details/$row->baby_name_id") ?>" class="boy text-capitalize" title="<?php echo ucwords($row->baby_name); ?>" ><span><?php echo $row->baby_name; ?></span></a>
                                </li>
<?php } ?>
                        </ul>
                    </div>


                </div>
            </div>



            <div class="col-md-12">
                <div class="single-blog-post post-without-image">
                    <div class="featured-image">
                        <h4 class="post-heading">Recently Added Girl Names</h4>
                    </div>
                    <div class="post-meta" style="min-height: 150px;">
                        <ul class="name-list row">

<?php
$search_tags = ($category === 'all') ? NULL : $category;

$recent_row =$this->n->getNames($search_tags, 'girl', NULL, 15, 1);
       
foreach ($recent_row->result() as $row) {
    ?>

                                <li class="col-md-4">
                                    <a href="<?php echo base_url("names/details/$row->baby_name_id") ?>" class="girl text-capitalize" title="<?php echo ucwords($row->baby_name); ?>" ><span><?php echo $row->baby_name; ?></span></a>
                                </li>
<?php } ?>
                        </ul>
                    </div>


                </div>
            </div>    









        </div>

        <div class="col-md-4">
            
          
            
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive" style="height:250px; width:98%;"/>
            
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive mt-30" style="height:250px; width:98%;" />
            
        </div>


    </div>



</section>
