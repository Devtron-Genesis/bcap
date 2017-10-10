=== Portfolio ===
Contributors: techlabpro1
Donate link:
Tags: portfolio, portfolio plugin, wordpress portfolio plugin, filterable portfolio, best portfolio, best wp portfolio, gallery, portfolio gallery, photo gallery, image display, creative portfolio, portfolio display, portfolio slider, responsive portfolio, portfolio showcase.
Requires at least: 4
Tested up to: 4.8
Stable tag: 2.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Portfolio is Fully Responsive and Mobile Friendly portfolio plugin for WordPress to display your portfolio work in Grid and Isotope Views.

== Description ==

[Plugin Demo](http://demo.radiustheme.com/wordpress/plugins/tlp-portfolio/) | [Documentation](https://radiustheme.com/how-to-setup-and-configure-tlp-portfolio-free-version-for-wordpress/) | [Get Pro Version](https://radiustheme.com/tlp-portfolio-pro-for-wordpress/)

Portfolio is a fully responsive plugin that display your company or personal portfolio/ Gallery items. From admin panel you can easily add your portfolio items. It has widget included with carousel slider with different settings how many want to display total or at a time and many more. It has the different custom fields Short Description, Project URL, Tags, Tools/ Technique used.

[youtube https://www.youtube.com/watch?v=ysuCz5a6ppg]

It is HTML5 & CSS3 base coding. Display your portfolio items/ Gallery with Grid view using our shortcode and widget. It come with 4 default layout in shortCode you can call layout like layout="1" / layout="2" /layout="3" / layout="isotope"

= Total 4 Layouts =
* **Grid View 1:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="1"]
```
* **Grid View 2:**
```
[tlpportfolio col="2" number="4" orderby="title" order="ASC" layout="2"]
```
* **Grid View 3:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="3"]
```
* **Grid View with category filter:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" cat="7,10" layout="3"]
```
* **Isotope View with Category filtering:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="isotope"]
```

= For use template php file:- =
<code>
<?php echo do_shortcode('[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="1"]'); ?>
<?php echo do_shortcode('[tlpportfolio col="2" number="4" orderby="title" order="ASC" layout="2"]'); ?>
<?php echo do_shortcode('[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="3"]'); ?>
<?php echo do_shortcode('[tlpportfolio col="4" number="4" orderby="title" order="ASC" cat="7,10" layout="3"]'); ?>
<?php echo do_shortcode('[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="isotope"]'); ?>
</code>


= Features =
* Fully Responsive
* 4 Different layouts included
* Ordering option included like orderby="title" or orderby="date" and order="ASC" or order="DESC"
* Primary Color control
* Permalink Control
* Custom meta fields , Single Template
* Image size settings
* Custom CSS option
* ShortCode
* Widget (Carousel Slider)
* Category Filter
* Display by category
* Dynamic shortcode generator
* Improve Image resize option
* Title styling (Color, Size, Weight)

= Pro Features =
* Full Responsive & Mobile Friendly
* 57 Layouts (Even Grid, Masonry Grid, Even Isotope, Masonry Isotope & Carousel Slider)
* Unlimited Layouts Variation
* Unlimited Colors
* Unlimited ShortCode Generator
* Drag & Drop Ordering
* Drag & Drop Taxonomy ie Category Ordering
* Device wise Item View Control
* Gutter / Padding Control
* Layout Preview Under ShortCode Generator
* Detail page with popup next preview button and normal view
* Visual Composer Compatibility
* RTL Added for Carousel Slider
* Isotope Show All Button Disable
* Search for Isotope Layouts
* External link for title and Image
* Pagination Control
* 4 Types of Pagination Normal number, AJAX number Pagination, AJAX Load More & Auto Load on Scroll
* All Fields Control show/hide
* All text color, Size and Text align control
* Even & Masonry Grid
* Grid with Margin & No Margin
* Display portfolio by Category(s) wise
* Display specific portfolio item(s)
* Related Portfolio
* And many more...

= Fully translatable =
* POT files included (/languages/)

= Available fields =
* Title/Name
* Description
* Short Description(Custom field)
* Project URL(Custom field)
* Category
* Tags
* Tools/ Technique used (Custom field)

= ShortCode settings =
* **Short Code:**
```
[tlpportfolio col="2" number="4" orderby="title" order="ASC" layout="1"]
```
* **col =** The number of column you want to display (1, 2, 3, 4)
* **number =** The number of the item, you want to display
* **orderby =** You can order by three ways (title, date, menu_order) here menu_order is custom order
* **order =** ASC, DESC
* **layout =** 1, 2, 3, isotope

For any bug or suggestion please mail us: support@radiustheme.com

== Installation ==

1. Add plugin to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Create Portfolio.
4. Add shortCode or widget to display the Portfolio.

= Requirements =
* **WordPress version:** >= 4
* **PHP version:** >= 5.2.4

== Frequently Asked Questions ==

= How to Use Portfolio =

* Go to `Portfolio > Add portfolio`
* Go to page or post editor insert shortcode.
* **Grid View 1:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="1"]
```
* **Grid View 2:**
```
[tlpportfolio col="2" number="4" orderby="title" order="ASC" layout="2"]
```
* **Grid View 3:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="3"]
```
* **Grid View with category filter:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" cat="7,10" layout="3"]
```
* **Isotope View with Category filtering:**
```
[tlpportfolio col="4" number="4" orderby="title" order="ASC" layout="isotope"]
```

= Need Any Help? =

* Please mail us at `support@radiustheme.com`
* We provide `15 hours live support`

== Screenshots ==

01. Layout 01
02. Layout 02
03. Layout 03
04. Widget View
05. Widget Settings
06. Meta Field
07. Main Settings



== Changelog ==

= 2.3 =
* Fixed Language issue

= 2.2 =
* Posts per page ( Fixed )

= 2.1 =
* Dynamic shortcode generator
* Improve Image resize option
* Title styling (Color, Size, Weight)

= 2.0 =
* Add category filter

= 1.7 =
* Add page attribute for ordering
* Fixed javascript Equal height issue


= 1.6 =
* Nonce coding change
* Fixed some css issue

= 1.5 =
* Display private post for admin
* Fixed some jquery issue

= 1.4 =
* Fix the height problem on mobile
* Gallery Popup
* Organize coding structure
* Remove unnecessary script

= 1.3 =
* Single Template added
* Social share added
* Fixed Slug problem
* Fixed some bug

= 1.2 =
* Isotope Layout added
* Primary color added
* All layout view improvement.
* Responsive fixed
* Fixed some bug

= 1.1 =
* Improve responsive layout.
* Fix some bug.
* Add custom css option in settings.

= 1.0 =
* Initial load of the plugin.
