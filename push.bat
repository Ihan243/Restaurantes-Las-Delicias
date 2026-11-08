@echo off
title Publicar Restaurante Las Delicias en GitHub
echo ======================================================
echo   Subiendo cambios a https://github.com/Ihan243/Restaurantes-Las-Delicias.git
echo ======================================================
echo.
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================================
    echo   [EXITO] Sitio web publicado correctamente en GitHub!
    echo ======================================================
) else (
    echo.
    echo ======================================================
    echo   [AVISO] Si es la primera vez, inicia sesion en la ventana
    echo   del navegador que se acaba de abrir para autorizar Git.
    echo ======================================================
)
echo.
pause
