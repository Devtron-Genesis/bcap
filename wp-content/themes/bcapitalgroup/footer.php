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

<footer class="footer_1">
  <?php //echo do_shortcode('[carousel-horizontal-posts-content-slider]'); ?>
	
        <div class="home_email_sec_wrap">
      <div class="container">
        <h2>
          DATA CAPTURE TITLE
        </h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <div class="email_form_field">
          <form method="post">
            <span><input class="form-control" placeholder="Enter email..." type="email"><input class="btn_1 fa fa-angle-right" type="submit" value="GO"></span>
          </form>
        </div>
      </div>
    </div>
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
              <a href="javascript:;"><i aria-hidden="true" class="fa fa-facebook-square fa-2x"></i></a> <a href="javascript:;"><i aria-hidden="true" class="fa fa-twitter-square fa-2x"></i></a> <a href="javascript:;"><i aria-hidden="true" class="fa fa-linkedin-square fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>


</div><!-- .site -->


<?php wp_footer(); ?>

</body>
</html>
