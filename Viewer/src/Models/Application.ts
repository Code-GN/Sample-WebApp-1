/**
 * @file
 * @author Code-GN
 * @description
 * アプリケーションを制御するクラスApplicationを定義します。
 */

import React from "react";
import ReactDOM from "react-dom/client";
import UserInterface from "#/Components/UserInterface";

/**
 * アプリケーションを制御するクラス
 * @public
 */
export default class Application {
  constructor() { }

  /**
   * コンポーネントを描画します
   * @public
   */
  render() {
    // 描画先を取得
    const renderTarget = document.querySelector('#uiroot');
    if (!renderTarget) {
      throw new Error('DOM "#uiroot" not found.');
    }

    // コンポーネントを描画
    const component = React.createElement(UserInterface, { app: this });
    const root = ReactDOM.createRoot(renderTarget);
    root.render(component);
  }
}
