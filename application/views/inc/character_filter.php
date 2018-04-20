<?php if(isset($category) && $category != '') { 
    
    $char_selected = isset($char_selected) ? $char_selected : '';
    
    ?>
<div class="row">

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
                    
                    $character_list = array(
                        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
                    );
                    
                    
                    foreach ($character_list as $value) {
                     $url = base_url("names/$category/boy").'/'.strtolower($value);
                     
                     $active = (strtolower($char_selected) === strtolower($value) && $gender === 'boy') ? 'char-selected' : '';
                     
                        echo   '<li class="'.$active.'"><a href="'.$url.'">'.$value.'</a></li>'; 
                        
                    
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
                        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
                    );
                    
                    
                    foreach ($character_list as $value) {
                     $url = base_url("names/$category/girl").'/'.strtolower($value);
                         $active = (strtolower($char_selected) === strtolower($value) && $gender === 'girl') ? 'char-selected' : '';
                     
                        echo   '<li class="'.$active.'"><a href="'.$url.'">'.$value.'</a></li>'; 
                        
                    
                    }
                  
                    ?>
                </ul> 
            </div>
        </div>


    </div>

</section>

<?php } ?>