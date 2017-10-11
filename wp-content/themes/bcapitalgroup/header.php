<?php
/**
* The template for displaying the header
*
* Displays all of the head element and everything up until the "site-content" div.
*
* @package WordPress
* @subpackage B Capital Group
* @since B Capital Group 1.0
*/
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta content="TRANSFORMING INDUSTRIES AND IMPROVING LIVES" name="description">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
  <link href="<?php bloginfo('template_directory'); ?>/assets/css/animate.css" rel="stylesheet">
  <link href="<?php bloginfo('template_directory'); ?>/assets/css/layout.css" rel="stylesheet">
  <link href="<?php bloginfo('template_directory'); ?>/assets/css/theme.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri() ?>">
  <link href="<?php bloginfo('template_directory'); ?>/assets/css/rwd.css" rel="stylesheet">
  <link href="<?php bloginfo('template_directory'); ?>/assets/images/bcap.ico" rel="shortcut icon" title="Favicon">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,700" rel="stylesheet">
<!--[if lt IE 9]>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
<![endif]-->
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div id="wrapper" class="main-wrapper">
      <header class="header_1">
        <div class="row">
          <div class="col-sm-3">
            <div class="logo">
              <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
                <img class="img-responsive" src="<?php echo get_template_directory_uri();?>/assets/images/logo.png"></a>
              </div>
            </div>
            <div class="col-sm-9">
              <?php wp_nav_menu( array( 'theme_location' =>'primary','menu_class' =>'main-navWrapper sf-menu') ); ?>
            </div>
          </div>
        </header>
        <div id="container">

