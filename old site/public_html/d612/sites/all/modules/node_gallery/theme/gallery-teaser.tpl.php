<?php
// $Id: gallery-teaser.tpl.php,v 1.1.2.2 2009/07/27 17:32:51 kmonty Exp $
?>
<div class="gallery-teaser">
  <?php 
  if (is_array($gallery_teaser)) {
    print theme('item_list', $gallery_teaser);
  }
  else {
    print $gallery_teaser;
  }
?>
</div>