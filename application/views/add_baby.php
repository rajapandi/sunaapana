<section id="home" class="pl-10 pr-10  mb-20">
    <div class="row">
<div class="col-md-2"></div>
        <div class="col-md-6">
            <div class="box-wrap p-15">

                <form id="add_name_form" class="form-horizontal form-lbl-only-r" action="#" method="POST" role="form">
                    <h5 class="widget-title line-bottom">Add Baby Name</h5>

                    <div class="form-group">
                        <label class="control-label col-md-3">Baby Name
                            <span class="req-asterisk">*</span></label>
                        <div class="col-md-9">
                            <input type="text" id="baby_name" name="baby_name" class="form-control col-md-8" required>
                        </div>
                    </div>

                    <div class="form-group" id="gender_err">
                        <label class="col-md-3 control-label" for="">Gender</label>
                        <div class="col-md-9 p-0">
                            <label class="radio-inline col-md-5">
                                <input type="radio" name="gender" id="gender-Male" value="Boy" class="checkbox " required="" aria-required="true"><span class="circle"></span><span class="check"></span><span class="circle"></span><span class="check"></span><span class="circle"></span><span class="check"></span> Male
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="gender" id="gender-Female" value="Girl" class="checkbox" required="" aria-required="true"><span class="circle"></span><span class="check"></span><span class="circle"></span><span class="check"></span><span class="circle"></span><span class="check"></span> Female
                            </label>

                        </div>
                    </div>



                    <div class="form-group">
                        <label class="control-label col-md-3" > Tags <span class="req-asterisk">*</span> </label>    

                        <div class="col-md-9">
                            <select id="name_tags" name="tags[]" multiple
                                    class="form-control select2">
                                <option></option>

                                <?php
                                $sql = $this->db->where('status', 1)->get('category');

                                foreach ($sql->result() as $val) {
                                    $id = $val->id;
                                    $tag_name = ucwords($val->name);
                                    ?>	
                                    <option value="<?php echo $id; ?>"><?php echo $tag_name; ?></option>

                                    <?php
                                }
                                ?>		
                            </select>
                        </div>
                    </div>




                    <table class="table edit-table">

                        <thead>
                            <tr>
                                <td class="text-center"><strong>Meaning</strong></td>
                                <td style="width:5%"></td>
                            </tr>
                        </thead>



                        <tbody id="items-row">
                            <tr>

                                <td>

                                    <textarea  name="meaning[]" rows="4" class="form-control check_unique" required></textarea>

                                <td class=" text-right"><a title="Remove row" href="javascript:;" class="dodelete btn   btn-danger btn-just-icon btn-reddit"><i class="fa fa-trash-o"></i></a></td>
                            </tr>
                        </tbody>

                        <!-- Meaning End-->

                    </table>

                    <div class="form-group">
                        <div class="col-md-2">
                            <a title="Add a row" href="javascript:;" class="addrow btn btn-success btn-just-icon  btn-round">  <i class="fa fa-plus"></i></a>
                        </div>

                        <div class="col-sm-10 text-right">
                            <div class="form-group">
                                <button type="submit" value="save" class="btn btn-primary mr-15">Save</button>
                            
                                <input type="hidden" name="save-another" id="another_hid" value="0" />
                                
                                <button type="buton" id="save-another" class="btn btn-success mr-15">Save & Another</button>
                            </div>
                        </div>
                    </div>


                    <script>
                    $(document).ready(function (){
                        $('#save-another').click(function (){
                            $('#another_hid').val(1);
                           // $('#add_name_form').submit();
                        });
                    });
                    
                    </script>

                </form>
            </div>
        </div>
        
        
        <div class="col-md-4">
	  <img src="<?php echo  base_url('resources/images/300x250.png') ?>" class="img-responsive" />
	  </div> 
        
        
    </div>
</section>


<script>
    $("input[type='radio'], input[type='checkbox']").on('ifChanged', function (e) {

        $(this).valid();

    });
    </script>