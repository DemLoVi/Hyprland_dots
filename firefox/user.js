/* user.js
 * https://github.com/rafaelmardojai/firefox-gnome-theme/
 */

// Enable customChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Enable CSD
user_pref("browser.tabs.drawInTitlebar", true);

// Home Page and New Window
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "file:///home/user/.mozilla/firefox/dawn-startpage/index.html");

// Disable sponsored content on Firefox Home & Clear default topsites
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);
