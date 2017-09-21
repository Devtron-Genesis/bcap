<?php 

/**
 * Template Name: Connect
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage B Capital Group
 * @since B Capital Group 1.0
 */


get_header(); 

?>
 <div class="banner">
      <ul>
        <li>
          <img class="img-responsive show_on_desktop" src="<?php echo get_template_directory_uri()?>/assets/images/team_inner_banner.jpg"> <img class="img-responsive show_on_mobile" src="<?php echo get_template_directory_uri()?>/assets/images/team_inner_banner_mobie.jpg">
          <div class="caption">
            <article>
              <h1>
               Connect
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </article>
          </div>
        </li>
      </ul><a class="scroll_prompt" href="#sec-start"></a>
    </div>

<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<section class="entry-content">
<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
<?php the_content(); ?>
<div class="entry-links"><?php wp_link_pages(); ?></div>
</section>
</article>
<?php //if ( ! post_password_required() ) comments_template( '', true ); ?>
<?php endwhile; endif; ?>
</section>

<?php get_footer(); ?>