import React, { Component } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { Link } from "react-router-dom";
import styles from "../styles/catalog.module.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { imgPath } from "../request";

class Catalog extends Component<any, any> {
  constructor(props: { catalog: IMedia[]; width: any }) {
    super(props);
    this.state = { width: props.width };
  }

  render() {
    const catalog: IMedia[] = this.props.catalog || [];
    const getCols = (screenWidth: Breakpoint) => {
      if (isWidthUp("lg", screenWidth)) {
        return 5;
      }
      if (isWidthUp("md", screenWidth)) {
        return 3;
      }
      return 2;
    };
    const cols = getCols(this.state.width);
    return (
      <div className={styles.root}>
        <GridList cellHeight={180} cols={cols}>
          {catalog.map((item: IMedia) => (
            <GridListTile key={item.id} className={styles.title}>
              <Link to={`/${item.media_type}/${item.id}`}>
                <img
                  className={styles.img}
                  src={`${imgPath}${
                    item.poster_path ? item.poster_path : item.profile_path
                  }`}
                  alt={item.title || item.name}
                />
                <GridListTileBar
                  title={item.title || item.name}
                  subtitle={<span>{item.overview}</span>}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    catalog: state.catalog,
  };
};
export default compose<any>(connect(mapStateToProps), withWidth())(Catalog);
