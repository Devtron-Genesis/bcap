<?php

/**
 * Template Name: Team
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

<?php
$support = get_posts(array(
  'posts_per_page'  => -1,
  'orderby'         => 'date',
  'order'           => 'DESC',
  'post_type'       => 'team',
  'post_status'     => 'publish',
  'meta_key'        => 'member_category',
  'meta_value'      => '18',
  )
);
$investors = get_posts(array(
  'posts_per_page'  => -1,
  'orderby'         => 'date',
  'order'           => 'DESC',
  'post_type'       => 'team',
  'post_status'     => 'publish',
  'meta_key'        => 'member_category',
  'meta_value'      => '19',
  )
);
?>
<div class="sec" id="sec-start">
  <div class="container">
    <div class="team_wrap">
      <h2 class="heading_style_2">
         <?php echo do_shortcode('[content_block id=406]')?>
      </h2>
      <div class="row">
        <?php
        if($support) {
          foreach($support as $post):
          setup_postdata($post);
          $meta = get_post_meta($post->ID);
          $url = get_the_post_thumbnail_url($post->ID);
          // echo '<pre>';
          // var_dump($meta);
          // echo "</pre>";
          ?>
            <div class="col-sm-4">
              <a class="inner" href="<?php the_permalink();?>">
                <img class="img-responsive" src="<?php echo $url;?>">
                <div class="overlay">
                  <h6>
                    <?php the_title();?>
                  </h6>
                  <p>
                    <?php echo $meta['designation'][0];?><br>
                    <?php echo $meta['location'][0];?>
                  </p>
                </div>
              </a>
            </div>
          <?php
          endforeach;
          wp_reset_postdata();
        }
        ?>
      </div>
    </div>
    <div class="team_wrap">
      <h2 class="heading_style_2">
         <?php echo do_shortcode('[content_block id=408]');?>
      </h2>
      <div class="row">
      <div class="row">
        <?php
        if($investors) {
          foreach($investors as $post):
          setup_postdata($post);
          $meta = get_post_meta($post->ID);
          $url = get_the_post_thumbnail_url($post->ID);
          // echo '<pre>';
          // var_dump($meta);
          // echo "</pre>";
          ?>
            <div class="col-sm-4">
              <a class="inner" href="<?php the_permalink();?>">
                <img class="img-responsive" src="<?php echo $url;?>">
                <div class="overlay">
                  <h6>
                    <?php the_title();?>
                  </h6>
                  <p>
                    <?php echo $meta['designation'][0];?><br>
                    <?php echo $meta['location'][0];?>
                  </p>
                </div>
              </a>
            </div>
          <?php
          endforeach;
          wp_reset_postdata();
        }
        ?>
      </div>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
