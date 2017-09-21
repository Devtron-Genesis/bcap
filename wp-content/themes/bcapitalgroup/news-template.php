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
          <img class="img-responsive show_on_desktop" src="http://alsadiqservices.com/testing/wp-content/uploads/2017/09/news_inner_banner.jpg"> <img class="img-responsive show_on_mobile" src="http://alsadiqservices.com/testing/wp-content/uploads/2017/09/news_inner_banner_mobile.jpg">
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
      </ul><a class="scroll_prompt" href="#sec-start"></a>
    </div>
<!-- **************************-->

    <div class="news_inner_menu">
      <div class="container">
        <div class="row">
          <ul id="hash_menu">
            <li class="active">
              <a href="javascript:;">ALL</a>
            </li>
            <li>
              <a href="javascript:;">PORTFOLIO NEWS</a>
            </li>
            <li>
              <a href="javascript:;">BCAPITAL NEWS</a>
            </li>
            <li>
              <a href="javascript:;">LOREM IPSUM NEWS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

 <div class="sec" id="sec-start">
      <div class="container">
      	 <div class="news_wrap">
      	 	  <div class="row">
 
  <?php
            $args=array(
              'post_type' => 'blog__post',
              'post_status' => 'publish',
               'field' => 'slug',
             'posts_per_page' => 5,
              'order' => 'DESC',
              'caller_get_posts'=> 1,
            );      
        ?>
                
       

    

        
        <?php 
                $my_query = new WP_Query($args);
                if( $my_query->have_posts() ) {
                while ($my_query->have_posts()) : $my_query->the_post(); 
                ?>

        
           
           <div class="col-sm-6 blogNewsInnerWrap">
           
				<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
				<?php ?> 
				<p>
					<?php 
				$the_content = get_the_content(); 
				if(strlen($the_content)>50){
				echo substr($the_content,0,50). "..."; 
				}
				else{
				echo $the_content;
				}
				?>
				</p>  
				<span class="date"><?php echo the_time( get_option( 'date_format' ) );  ?></span>
				<span class="cat_name"><?php the_author(); ?> </span>
				
				<a class="inner"></a>
				</div>

				<?php endwhile; }

				?>

                   
</div>	
</div>
 
 </div>
 </div> 

    
<?php get_footer(); ?>