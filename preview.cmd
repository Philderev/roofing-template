@echo off
rem Local preview for the NovaRidge demo site.
rem Serves the site over HTTP so folder URLs like /pricing/ load index.html
rem automatically (opening the folders via file:// only shows a directory listing).
start "" http://localhost:8317/
npx http-server "%~dp0." -p 8317 -c-1
