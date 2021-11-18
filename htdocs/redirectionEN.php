<?php 

if ($_SERVER['SCRIPT_NAME'] == '/index.php')
{
    $html='<a href="indexEN.php">';
   
}
elseif ($_SERVER['SCRIPT_NAME'] === '/Connaissances.php')
{
    $html='<a href="acquaintance.php">';
  
}
elseif ($_SERVER['SCRIPT_NAME'] === '/Art.php')
{
    $html='<a href="Gallery.php">';
   
}
elseif ($_SERVER['SCRIPT_NAME'] === '/Histoire.php')
{
    $html='<a href="History.php">';
}

?>