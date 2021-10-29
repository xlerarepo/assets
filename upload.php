<?php
  
   if(isset($_FILES['fileup'])){
      $errors= array();
      $file_name = $_FILES['fileup']['name'];
      $file_size =$_FILES['fileup']['size'];
      $file_tmp =$_FILES['fileup']['tmp_name'];
      $file_type=$_FILES['fileup']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['fileup']['name'])));
      
      $extensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$extensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"upload/".$file_name);
         header("Location: https://assets.xlera.org/index.html?link=https://assets.xlera.org/upload/".$file_name, TRUE, 301);
		 exit();
      }else{
         print_r($errors);
      }
   }
?>