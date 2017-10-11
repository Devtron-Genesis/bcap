<?php
/**
* The template for displaying the footer
*
* Contains the closing of the "site-content" div and all content after.
*
* @package WordPress
* @subpackage B Capital Group
* @since B Capital Group 1.0
*/
?>
<?php
$blogposts = get_posts(array(
  'posts_per_page' => -1,
  'category' => 15,
  'orderby' => 'date',
  'order' => 'DESC',
  )
);
?>
</div><!-- .site-content -->

<div class="sec sec3">
  <div class="container">
    <div class="blog_sec_wrap">
      <?php if($blogposts) {
        foreach($blogposts as $post):
        setup_postdata( $post );
      ?>
      <div class="inner">
        <h4>
          <?php the_title(); ?>
        </h4>
        <p>
          <?php echo wp_trim_words($post->post_content, 20, '...'); ?>
        </p>
        <a class="link" href="<?php the_permalink(); ?>" target="_blank">LEARN MORE <i class="fa fa-chevron-right"></i></a>
      </div>
      <?php
        endforeach;
        wp_reset_postdata();
      }
      ?>
    </div>
  </div>
</div>
<?php echo do_shortcode('[content_block id=386]'); ?>
<footer class="footer_1">
  <?php echo do_shortcode('[content_block id=388]'); ?>
</footer>


</div><!-- .site -->

<?php wp_footer(); ?>

</body>
</html>
