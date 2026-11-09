<?php
/**
 * Production Gateway for Laragon / Apache / Nginx
 * Serves the compiled, blazing-fast React 19 + Vite bundle directly with zero configuration.
 */

$distIndex = __DIR__ . '/dist/index.html';

if (file_exists($distIndex)) {
    $html = file_get_contents($distIndex);
    // Ensure asset paths point correctly to dist/assets
    $html = str_replace('src="./assets/', 'src="./dist/assets/', $html);
    $html = str_replace('href="./assets/', 'href="./dist/assets/', $html);
    echo $html;
    exit;
}

// Fallback to root index.html
if (file_exists(__DIR__ . '/index.html')) {
    readfile(__DIR__ . '/index.html');
}
