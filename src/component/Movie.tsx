import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styles from "../styles/details.module.css";
import { imgPath, movieRequest } from "../request";

export default class Movie extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { data: {} };
    if (props.match?.params?.id) {
      this.httpRequest(props.match.params.id);
    }
  }

  httpRequest = async (id: string) => {
    try {
      var response = await movieRequest(id, {
        append_to_response: "credits",
      });
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
              src={`${imgPath}${this.state.data.poster_path}`}
              alt={this.state.data.title}
            />
            <span
              className={`${styles.marker}
                ${
                  this.state.data.vote_average >= 7 ? styles["marker-good"] : ""
                } 
                ${
                  this.state.data.vote_average < 5 ? styles["marker-bad"] : ""
                }`}
            >
              {this.state.data.vote_average}
            </span>
          </div>
          <div className={styles.right}>
            <Typography component="h4" variant="h4">
              {this.state.data.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.state.data.overview}
            </Typography>
          </div>
        </div>
        <div className={styles.cast}>
          <Typography component="h5" variant="h5">
            Cast
          </Typography>
          <div className={styles.gallery}>
            {this.state.data.credits?.cast.map((actor: any) => (
              <div key={actor.id} className={styles.actor}>
                <Link to={`/person/${actor.id}`}>
                  <img
                    className={styles.img}
                    src={`${imgPath}${actor.profile_path}`}
                    alt={actor.title}
                  />
                  <div className={styles["actor-name"]}>
                    <span>{actor.name}</span>
                  </div>
                  <div className={styles["character-name"]}>
                    <span>{actor.character}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
