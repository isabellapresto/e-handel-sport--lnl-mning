<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'e-handel-sport' );

/** Database username */
define( 'DB_USER', 'isabella' );

/** Database password */
define( 'DB_PASSWORD', 'Mirrabella2021' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'u{3HwHedo)>:Xu>`,E1t;ndxVv9@$ac]{YiD{Op{wX7PfkFp0ZdGPzUNuL}A+[T|' );
define( 'SECURE_AUTH_KEY',  'Nh/(T,B`Q>^Tln<hGdf0k}B<9?GZa*#=wwCx`0?:q)pP-MYWYBR?|-QcL,[L1/ah' );
define( 'LOGGED_IN_KEY',    'aB?wZ|R17J$bu3Kess4^EO?gIx),F)U] k}Kq;@wCQmGuA-e=&_xC}ZxWoq/,oJF' );
define( 'NONCE_KEY',        '<0{ny7-{&N}TfkDPC^xc9CN`ljzg`kSx@uC XP(sbncL/+V^qB7sHW[+-VKFX&;F' );
define( 'AUTH_SALT',        'R3SU5xi47#CKD=}#+fkXLAGdr#F?.H2{#JTNR`#1C~uSmwyJru6UnK.<u(-:Ye87' );
define( 'SECURE_AUTH_SALT', '}GBx5Xf&idt%9-|_~D1X9n[Zn^8u;lUT8~dyt(n[jTnR{3.Q UAH0)SE<7+v])B`' );
define( 'LOGGED_IN_SALT',   '@1Hcl;eLQueAfBVc5(ggi9/rMBjbFozZnFu.+M3k1z Yt<o58$=Fpe%+K~xof%El' );
define( 'NONCE_SALT',       'r7XYEY`NWo|&k>:J]]!!BR$~xV2AS2<&?:soqcY59K|+vfM]k4]dZaNXM.qy:*Q`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
