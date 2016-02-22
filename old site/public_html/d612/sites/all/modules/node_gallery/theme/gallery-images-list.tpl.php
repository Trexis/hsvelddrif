<?php
// $Id: gallery-images-list.tpl.php,v 1.1.2.2 2009/07/27 17:32:51 kmonty Exp $
?>
<div class="gallery-images-list clear-block">
  <?php 
  if (is_array($images_list)) {
    print theme('item_list', $images_list);
  }
  else {
    print $empty_message;
  }
  ?>
</div>