import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/details.module.css";
import { imgPath, personRequest } from "../request";

export default class Actor extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
    if (props.match?.params?.id) {
      this.httpRequest(props.match.params.id);
    }
  }

  httpRequest = async (id: string) => {
    try {
      var response = await personRequest(id);
      this.setState({ data: response });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.movie}>
          <div className={styles.left}>
            <img
              className={styles.img}
              src={`${imgPath}${this.state.data.profile_path}`}
              alt={this.state.data.title}
            />
          </div>
          <div className={styles.right}>
            <Typography component="h4" variant="h4">
              {this.state.data.name}
            </Typography>
            <ul>
              <div>
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
