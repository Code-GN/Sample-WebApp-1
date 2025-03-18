/**
 * @file
 * @author Code-GN
 * @description
 * このウェブアプリケーションのエントリーポイントです。
 */

import Application from '#/Models/Application';
import './global.scss';

window.addEventListener('DOMContentLoaded', () => {
  // アプリケーションの準備を行う
  const app = new Application();
  app.render();
  (window as any).app = app;
});
