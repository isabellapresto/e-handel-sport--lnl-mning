<?php
/*
Plugin Name: Mitt plugin - dagens datum
Description: Eget plugin som visar dagens datum med hjälp av en shortcode
Author: Isabella
*/

// Lägg till shortcode
function dagens_datum_shortcode() {
  return date('d/m/Y');
}
add_shortcode( 'dagensdatum', 'dagens_datum_shortcode' );
?>
