<?php
// $Id: gallery-cover-view.tpl.php,v 1.1.2.3 2009/10/29 01:57:10 kmonty Exp $
?>
<?php $gallery_path = 'node/'. $gallery->nid; ?>
<div class="gallery-cover-view">
  <div class="cover-image">
    <?php print l($cover_image, $gallery_path, array('html' => true)); ?>
  </div>
  <h4 class="title"><?php print l($gallery->title, $gallery_path); ?></h4>
  <div class="meta"><?php print $meta_data; ?></div>
  <?php 
  /**
   * Recently, the module decided to move the operations in the local tasks
   * (tabs that allow you to view/edit a node, among other things).
   *
   * If for any reason you wish to display your cover operations again, you
   * must uncomment out the $cover_operations line
   */
  //print $cover_operations; ?>
</div>