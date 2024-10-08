<?php

$a = 5;
$b = 6;

echo "<br>Before Swapping: a = $a, b = $b" ;
// echo '<br>';   

$a = $a ^ $b; 

$b = $a ^ $b;

$a = $a ^ $b;

echo "<br>After Swapping: a = $a, b = $b";


?>