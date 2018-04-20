
<!-- Section: home -->
<section id="home" class="pl-10 pr-10  mb-20">

    <div class="row">

        <div class="col-md-3" style="height:300px;">
            <?php $this->load->view('inc/all_category'); ?>
        </div>
        <div class="col-md-5 home-search-wrap" style="height:300px;">



            <h5 class="widget-title line-bottom">Find Your Babe's Numerology</h5>

            <form class="form-horizontal form-lbl-r" action="<?php echo base_url('numerology/find') ?>" method="POST" id="numerology_form" role="form">



                <div class="form-group">
                    <label class="col-md-3 control-label" for="baby_name"> Baby Name <span class="text-danger">*</span></label>
                    <div class="col-md-9">
                        <input type="text" id="baby_name" name="baby_name" class="form-control" value="<?php echo $baby_name ?>"  required=""/>
                    </div>
                </div>





                <div class="form-group">
                    <label class="col-md-3 control-label" for="father_name">Father Name</label>
                    <div class="col-md-9">
                        <input type="text" id="father_name" name="father_name" class="form-control" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label" for="birth_date">Birth Date <span class="text-danger">*</span></label>
                    <div class="col-md-9">
                        <div class="input-group input-append date" >

                            <input type="text" class="form-control datepicker" name="birth_date" id="birth_date" data-fv-field="date" required="">
                            <span class="input-group-addon add-on "><span class="glyphicon glyphicon-calendar"></span></span>

                        </div>
                    </div>
                </div>
                
                
                
               
                
                
                <div class="form-group">

                </div>
                <div class="form-group">

                </div>

                <button class="btn btn-primary pull-right">Calculate</button>

            </form>
        </div> 



        <div class="col-md-4">
            <img src="<?php echo base_url('resources/images/300x250.png') ?>" class="img-responsive" style="height:300px; width:100%;" />


        </div> 

    </div> <!-- row -->

</section>






