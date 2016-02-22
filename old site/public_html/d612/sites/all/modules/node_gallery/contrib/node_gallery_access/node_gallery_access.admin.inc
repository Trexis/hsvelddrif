<?php
// $Id: node_gallery_access.admin.inc,v 1.1.2.4 2009/11/08 23:06:57 kmonty Exp $

/**
 * @file node_gallery_access.admin.inc
 *
 * Building the administrative settings
 */

function node_gallery_access_settings() {
  $form['node_gallery_access_types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Set Node Gallery Access Types'),
    '#options' => drupal_map_assoc(node_gallery_get_types()),
    '#default_value' => variable_get('node_gallery_access_types', array()),
    '#weight' => -1,
    '#description' => t('Specify which node gallery types you want allow access controls for.'),
  );
  $form['ng_access_pass_gallery'] = array(
    '#type' => 'textfield',
    '#title' => t('Password Mode Gallery File'),
    '#description' => t("Specify the image display when viewing a gallery that needs a password. The root is the web root. The default file is %default", array('%default' => $default)),
    '#default_value' => node_gallery_access_default_pass_image('gallery'),
  );
  $form['ng_access_pass_image'] = array(
    '#type' => 'textfield',
    '#title' => t('Password Mode Image File'),
    '#description' => t("Specify the image display when viewing a gallery that needs a password. The root is the web root. The default file is %default", array('%default' => $default)),
    '#default_value' => node_gallery_access_default_pass_image(),
  );
  //TODO: Trigger an automatic permissions rebuild if this changes.  This requires using our own submit function.
  $form['ng_access_priority'] = array(
    '#type' => 'weight',
    '#title' => t('Give Node Gallery Access priority'),
    '#default_value' => variable_get('ng_access_priority',0),
    '#description' => t('If you are only using this access control module, you can safely ignore this. If you are using multiple access control modules you can adjust the priority of this module. If you change this setting, you must '.l('rebuild all permissions','admin/content/node-settings/rebuild').'.'),
  );  
  return system_settings_form($form);
}