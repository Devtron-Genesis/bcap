<?php
get_header( );

while ( have_posts() ) : the_post();
  global $post;
?>
<div class="container-fluid tlp-team tlp-single-container">
  <div class="tlp-row">
    <article id="post-<?php the_ID(); ?>" <?php post_class('tlp-member-article container'); ?>>
      <div class="tlp-col-lg-5 tlp-col-md-5 tlp-col-sm-6 tlp-col-xs-12 tlp-member-feature-img">
        <?php
        if(has_post_thumbnail()){
          echo get_the_post_thumbnail( get_the_ID(), 'large' );
        }

          $s = unserialize(get_post_meta( get_the_ID(), 'social' , true));
          $htmls .= '<div class="tpl-social">';
          if($s){
          foreach ($s as $id => $link) {
          $htmls .= "<a class='fa fa-$id' href='{$s[$id]}' title='$id' target='_blank'><i class='fa fa-$id'></i></a>";
        }
      }
      echo $htmls;
      $htmls .= '<br></div>';

        ?>
      </div>
    </div>

      <div class="tlp-col-lg-7 tlp-col-md-7 tlp-col-sm-6 tlp-col-xs-12">
        <h2 class='tlp-member-title'><?php the_title(); ?></h2>
        <?php $designation = get_post_meta( get_the_ID(), 'designation', true ); ?>
        <div class="tlp-position"><?php echo $designation; ?></div>
        <?php
        $loc = get_post_meta( get_the_ID(), 'location', true );
        if($loc){
        $htm .="<p class='location'>".__('',TLP_TEAM_SLUG)." $loc</p>";
        echo $htm;
        }
        ?>
        <div class="tlp-member-detail"><?php the_content(); ?></div>
        <?php
      $tel = get_post_meta( get_the_ID(), 'telephone', true );
      $email = get_post_meta( get_the_ID(), 'email', true );
      $url = get_post_meta( get_the_ID(), 'web_url', true );

      $html = null;
      $html .="<div class='tlp-single-details tlp-team'>";
      $html .= '<ul class="contact-info">';
      // if($tel){
      //   $html .="<li class='telephone'>".__('<strong>Tel:</strong>',TLP_TEAM_SLUG)." $tel</li>";
      // }if($email){
      //   $html .="<li class='email'>".__('<strong>Email:</strong>',TLP_TEAM_SLUG)." <a href='mailto:{$email}'>{$email}</a></li>";
      // }if($url){
      //   $html .="<li class='web_url'>".__('<strong>URL:</strong>',TLP_TEAM_SLUG)." <a href='{$url}' target='_blank'>$url</a></li>";
      // }
      $html .= "</ul>";

      $html .="</div>";

      echo $html;
      ?>
      </div>
    </article>
  </div>
</div>
<?php endwhile;
get_footer();
