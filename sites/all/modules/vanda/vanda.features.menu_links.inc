<?php
/**
 * @file
 * vanda.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function vanda_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_add-event:add-event.
  $menu_links['main-menu_add-event:add-event'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'add-event',
    'router_path' => 'add-event',
    'link_title' => 'Add event',
    'options' => array(
      'attributes' => array(
        'title' => 'A form to mess around with.',
      ),
      'identifier' => 'main-menu_add-event:add-event',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Exported menu link: main-menu_home:<front>.
  $menu_links['main-menu_home:<front>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Home',
    'options' => array(
      'identifier' => 'main-menu_home:<front>',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Add event');
  t('Home');

  return $menu_links;
}
