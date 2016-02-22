<?php

class node_gallery_views_handler_image_count extends views_handler_field_numeric {
  function query() {
    $table = $this->ensure_my_table();
    $sql = "SELECT COUNT(*) FROM {node_galleries} ng WHERE ng.gid = %d";
    $sql = str_replace('%d', $this->table .'.gid', $sql);
    $this->query->add_field('', "($sql)", 'image_count');
    $this->field_alias = 'image_count';
  }
}