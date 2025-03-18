/**
 * @file
 * @author Code-GN
 * @description
 * UI全体を制御するクラスUserInterfaceを定義します。
 */

import React from "react";
import Application from "#/Models/Application";

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
      <div>Hello world!</div>
    );
  }
}
