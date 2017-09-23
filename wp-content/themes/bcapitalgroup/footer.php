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

</div><!-- .site-content -->

<div class="container blogSliderCarousel">
<?php echo do_shortcode('[carousel-horizontal-posts-content-slider]'); ?>
</div>
<?php echo do_shortcode('[content_block id=230]');?>
<footer class="footer_1">
 <div class="container">

    <div class="row">
      <div class="col-sm-8">
        <p>
          © Copyright B Capital Group
          <script>
            new Date().getFullYear()>2010&&document.write(new Date().getFullYear());
          </script>. All Rights Reserved - <a href="javascript:;" target="_blank">Terms & Conditions</a> - <a href="javascript:;" target="_blank">Privacy Policy</a> <span><span>-</span> Website by <a href="http://www.felixfletcher.co.uk/" target="_blank">www.felixfletcher.co.uk</a></span>
        </p>
      </div>
      <div class="col-sm-4">
        <div class="footer-social">
          <a href="javascript:;"><i aria-hidden="true" class="fa fa-facebook"></i></a> <a href="javascript:;"><i aria-hidden="true" class="fa fa-twitter"></i></a> <a href="javascript:;"><i aria-hidden="true" class="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>
</div><!-- .site -->


<?php wp_footer(); ?>
<script>

$(document).ready(function() {
var stickyNavTop = $('.pgafu-filter').offset().top - 85;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.pgafu-filter').addClass('stickyNews');
} else {
    $('.pgafu-filter').removeClass('stickyNews'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
}, 500);



</script>


</body>
</html>
