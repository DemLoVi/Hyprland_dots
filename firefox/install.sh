#!/bin/bash

cp -r firefox/user.js ~/.mozilla/firefox/*default-release/
cp -r firefox/chrome/ ~/.mozilla/firefox/*default-release/
cp -r firefox/dawn-startpage/ ~/.mozila/firefox/
echo "Installed.."
