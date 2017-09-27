<?php

/**
 * Template Name: News
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
          <img class="img-responsive show_on_desktop" src="/wp-content/uploads/2017/09/news_inner_banner.jpg"> <img class="img-responsive show_on_mobile" src="/wp-content/uploads/2017/09/news_inner_banner_mobile.jpg">
          <div class="caption">
            <article>
              <h1>
                news
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </article>
          </div>
        </li>
      </ul><a class="scroll_prompt fa fa-angle-down fa-3x" href="#sec-start"></a>
    </div>
<!-- **************************-->


<div class="sec" id="sec-start">
      <div class="container">
      	 <div class="news_wrap">
      	 	  <div class="row">
<?php echo do_shortcode('[pgaf_post_filter design="design-2" grid="2" cat_id="8,9,10" show_read_more="false" show_category_name="false" content_words_limit="10" limit="10"]'); ?>
</div>
</div>
</div>
</div>

<?php //echo do_shortcode('[pgaf_post_grid design="design-2" grid="2" limit="4"]'); ?>



<?php get_footer(); ?>
