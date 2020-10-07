
::TODO 
::IGURE OUT HOW TO REDIRECT OUTPUT AND GET PURE PACKET LOSS WITH JUST MS
::FIGURE OUT HTML TO JUST PRINT A SMALL SECTION OF INFO

@ECHO OFF

:: Set Language to English (non-alphabetical will break)
:: https://superuser.com/questions/346498/how-do-i-change-my-cmd-exe-to-english
chcp 437 > NUL

:loop

SETLOCAL ENABLEDELAYEDEXPANSION

cls

SET count=1
FOR /F "tokens=* USEBACKQ" %%F IN (`ping www.google.com`) DO (
  SET var!count!=%%F
  SET /a count=!count!+1
)

ECHO|SET /p=%var6%
ECHO %var7%
ECHO|SET /p="Ping:"
ECHO|SET /p=%var9%

ENDLOCAL

cls

goto loop

@ECHO ON
