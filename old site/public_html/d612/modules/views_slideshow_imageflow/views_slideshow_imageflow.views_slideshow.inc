<?php
// $Id: views_slideshow_imageflow.views_slideshow.inc,v 1.1.2.1 2009/04/01 20:50:33 aaron Exp $

/**
 *  @file
 *  The default options available with Views Slideshow: ImageFlow.
 */

function views_slideshow_imageflow_views_slideshow_modes() {
  $options = array(
    'imageflow' => t('ImageFlow'),
  );
  return $options;
}

function views_slideshow_imageflow_views_slideshow_option_definition() {
  $options = array(
    'aspect_ratio' => '1.964',
    'images_height' => '0.67',
    'image_cursor' => 'pointer',
    'slider_cursor' => 'pointer',
    'slider' => TRUE,
  );
  return $options;
}

function views_slideshow_imageflow_views_slideshow_options_form(&$form, &$form_state, &$view) {
  $form['imageflow'] = array(
    '#type' => 'fieldset',
    '#title' => t('ImageFlow options'),
    '#collapsible' => TRUE,
    '#collapsed' => !($view->options['mode'] == 'imageflow'),
  );
  $form['imageflow']['aspect_ratio'] = array(
    '#type' => 'textfield',
    '#title' => t('Aspect ratio'),
    '#description' => t('Aspect ratio of the ImageFlow container (width divided by height).'),
    '#default_value' => $view->options['imageflow']['aspect_ratio'],
  );
  $form['imageflow']['images_height'] = array(
    '#type' => 'textfield',
    '#title' => t('Images height'),
    '#description' => t('Height of the images div container in percent.'),
    '#default_value' => $view->options['imageflow']['images_height'],
  );
  $form['imageflow']['image_cursor'] = array(
    '#type' => 'select',
    '#title' => t('Image cursor'),
    '#description' => t('Cursor type for the images.'),
    '#default_value' => $view->options['imageflow']['image_cursor'],
    '#options' => array(
      'pointer' => t('pointer'),
      'default' => t('default'),
      'e-resize' => t('e-resize'),
    ),
  );
  $form['imageflow']['slider'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show slider'),
    '#description' => t('Disables / enables the scrollbar.'),
    '#default_value' => $view->options['imageflow']['slider'],
  );
  $form['imageflow']['slider_cursor'] = array(
    '#type' => 'select',
    '#title' => t('Slider cursor'),
    '#description' => t('Cursor type for the slider.'),
    '#default_value' => $view->options['imageflow']['slider_cursor'],
    '#options' => array(
      'pointer' => t('pointer'),
      'default' => t('default'),
      'e-resize' => t('e-resize'),
    ),
  );
  $form['imageflow']['start'] = array(
    '#type' => 'select',
    '#title' => t('Start position'),
    '#description' => t('The position to begin the ImageFlow.'),
    '#default_value' => $view->options['imageflow']['start'],
    '#options' => array(
      'start' => t('Start'),
      'middle' => t('Middle'),
      'end' => t('End'),
      'random' => t('Random'),
    ),
  );
}
