/**
 * @file
 * @author Code-GN
 * @description
 * UI全体を制御するクラスUserInterfaceを定義します。
 */

import React from "react";
import Application from "#/Models/Application";
import './user-interface.scss';

type Props = {
  app: Application;
};
type State = {};

/**
 * UI全体を制御するクラス
 * @public
 */
export default class UserInterface extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="ui">

        <header>
          <section className="left">
            <h1>WebApps</h1>
          </section>
          <section className="right">
            <span className="user-name">No User</span>
          </section>
        </header>

        <main>
          <nav id="global-navi"></nav>
          <div id="content"></div>
        </main>

        <footer>
          <span id="copyright">(c) Code-GN all rights receieved.</span>
        </footer>

      </div>
    );
  }
}
