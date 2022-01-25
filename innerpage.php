<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="assets/A.M Rubbers_BusinessCardFrontcopy.PNG" type="image/icon type">
    <title>Products</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <script src="https://kit.fontawesome.com/a815a59ac0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <section id="pro">


        <?php 
             $nid_p=$_GET['edit'];
             $nam_p=$_GET['pro_name'];
        ?>
          <div class="container-fluid fixed-top" style="max-width: 93em; margin-top: 1em;">
            <div class="row d-flex justify-content-center">
              <div class="col-md-12 pro" style="overflow-y: auto; overflow-x: auto;">
    
                <div style="padding: 1em 1em 1em 1em;" class="col-md-12 d-flex justify-content-between">
                  <label class="pro_name" for=""><?php echo $nam_p ?></label>
                 
                </div>

                <?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

switch($nid_p){

  case 1:
    $product='product_1';
    break;
  
  case 2:
    $product='product_2';
    break;
  
  case 3:
    $product='product_3';
    break;

  case 4:
    $product='product_4';
    break;
    
  default:
    echo"";


}



        $connection=mysqli_connect("localhost","myapp","Myapp@123");
          $db=mysqli_select_db($connection,'amrurweb');

            $query=" SELECT * FROM `$product` ";

               $query_run=mysqli_query($connection,$query);
                   
                  while($row=mysqli_fetch_array($query_run)){
                    $i=$row['id'];
                  }
                    
              ?>

                <div class="col-md-12 d-flex justify-content-center" style="margin-bottom: -90px;">
                <p>Showing all <?php echo $i ?> results</p>
                </div>
                
    
                <div class="col-md-12 car_div_outer">

                <?php 

                switch($nid_p){

                  case 1:
                    $product='product_1';
                    break;
                  
                  case 2:
                    $product='product_2';
                    break;
                  
                  case 3:
                    $product='product_3';
                    break;

                  case 4:
                    $product='product_4';
                    break;
                    
                  default:
                    echo"";


                }

                

                        $connection=mysqli_connect("localhost","myapp","Myapp@123");
                          $db=mysqli_select_db($connection,'amrurweb');

                            $query=" SELECT * FROM `$product` ";

                               $query_run=mysqli_query($connection,$query);
                                   
                                  while($row=mysqli_fetch_array($query_run)){
                                    
                                    
                              ?>
    
                  <div class="col-md-3 d-flex justify-content-center card_div" style="float: left; ">
                    <div class="card car" style="width: 16rem;">
                      <img style="width: 253px; height: 250px;" class="card-img-top" src="<?php echo $row['product_img_path'] ?>" alt="Card image cap">
                      <div class="card-body">
                        <h4 class="text-center prod_name"><?php echo $row['product_name'] ?></h4>
                        <p class="card-text text-center"><?php echo $row['product_des'] ?></p>
                      </div>
                    </div>
                  </div>

                  <?php } ?>

                 

                  
    
                  
    
                  <div class="col-md-12" style="margin-top:70px;">
    
                  </div>
    
                </div>
    
            </div>
          </div>
        </section>
    
        
</body>
</html>