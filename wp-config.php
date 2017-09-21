<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bcap');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/iJ.Mc{,fD2_]^mzf_Unip29IJ_d1&y@my+|*:@7I#Rc9(*^EEOPrHS3B<Q0/I`y');
define('SECURE_AUTH_KEY',  ';V_1]BK8 ,[G7<zo{t[c.6=:M)H4/i3;5H nrldD~zMA_b7k?M{Br(*C/9qOiv;w');
define('LOGGED_IN_KEY',    'N^B3-B7cDn%`;h<^b=<l1xZ`:<a|%SLuraWBD!$->$t0OP8G/IvKcC7#L!{)`Szr');
define('NONCE_KEY',        '[tuEMcp[^xkt=W i=h9RL`WN4wP]R?gL,,llsw&;L+ :tm{[PNb4{%{VRk2-|aP(');
define('AUTH_SALT',        '_J4UR[7>a8avOzo>5|Z,z,-yk@4*REr5HZki3ZVF{C3OUnq9EyP#Gh3d2G5+^5:f');
define('SECURE_AUTH_SALT', '+0=4PIzeod~dIRoW;KoR$y8#akS `D<-gehpG<OGvP*LB!G$#;iz{:5_Q:!2_;y=');
define('LOGGED_IN_SALT',   '=-:92M]ZCBFuzvI^[3@~poo5A:&2kJ-:.%X6f!g;3(X9M1F;s%IKmX6aUt*{wawD');
define('NONCE_SALT',       'a^E9qDL;U29_vmOi_[YqX,[)vxKE#-:crhfo,6i;Nq;C_u?2`6cTS[w$s0}*;r!.');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cg_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
  define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
