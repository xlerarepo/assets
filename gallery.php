<?php

$dirname = "upload/";
$images = glob($dirname."*.*");

foreach($images as $image) {
    echo '<img src="'.$image.'" />';
}