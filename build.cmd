@echo off

call uglifyjs src/bookmarklet.js -o bookmarkletugly.js

setlocal ENABLEDELAYEDEXPANSION
set vidx=0
for /F "tokens=*" %%A in (bookmarkletugly.js) do (
    SET /A vidx=!vidx! + 1
    set var!vidx!=%%A
)
SET var1=%var1:"='%

set var

echo ^<a href="javascript:%var1%"^>Video Downloader^</a^>>web/index.html

rm bookmarkletugly.js