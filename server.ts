import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { renderApplication } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './src/app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './src/app/app.config.server';

const server = express();

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

server.set('view engine', 'html');
server.set('views', browserDistFolder);

// Serve static files
server.get('*.*', express.static(browserDistFolder, {
  maxAge: '1y'
}));

// SSR rendering
server.get('*', async (req, res, next) => {
  try {
    const html = await renderApplication(() => bootstrapApplication(AppComponent, config), {
      document: indexHtml,
      url: req.originalUrl,
      platformProviders: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl }
      ]
    });
    res.send(html);
  } catch (err) {
    next(err);
  }
});

server.listen(process.env['PORT'] || 4000, () => {
  console.log(`Node Express server listening on http://localhost:4000`);
});
