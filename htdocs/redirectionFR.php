<?php 

if ($_SERVER['SCRIPT_NAME'] == '/indexEN.php')
{
    $html='<a href="index.php">';
   
}
elseif ($_SERVER['SCRIPT_NAME'] === '/acquaintance.php')
{
    $html='<a href="Connaissances.php">';
  
}
elseif ($_SERVER['SCRIPT_NAME'] === '/Gallery.php')
{
    $html='<a href="Art.php">';
   
}
elseif ($_SERVER['SCRIPT_NAME'] === '/History.php')
{
    $html='<a href="Histoire.php">';
}

?>