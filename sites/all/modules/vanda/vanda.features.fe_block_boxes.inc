<?php
/**
 * @file
 * vanda.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function vanda_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'login block';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'login_block';
  $fe_block_boxes->body = '<a href="/user">LOGIN</a>';

  $export['login_block'] = $fe_block_boxes;

  return $export;
}
