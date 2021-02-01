import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { updateCatalog } from "../store/actionCreators";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Header extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filter: {
        text: "",
        type: "movie",
      },
    };
  }
  render() {
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        filter: {
          ...this.state.filter,
          text: event.target.value,
        },
      });
      // TODO AC11 & AC12: When filter.length>4 add autocomplete input
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState(
        {
          filter: {
            ...this.state.filter,
            type: event.target.value,
          },
        },
        () => handleSubmit(event)
      );
    };
    const handleSubmit = (event: any = {}) => {
      event.preventDefault();
      this.props.history.push("/");
      this.props.updateCatalog(this.state.filter);
    };
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to={`/`}>
            <Typography className={styles.title} variant="h6">
              Movies
            </Typography>
          </Link>
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className={styles.search}>
              <InputBase
                placeholder="Search…"
                autoFocus
                inputProps={{ "aria-label": "search" }}
                onChange={inputChange}
              />
              <IconButton
                aria-label="search"
                color="inherit"
                onClick={handleSubmit}
              >
                <SearchIcon />
              </IconButton>
            </div>

            <RadioGroup
              aria-label="type"
              name="type"
              value={this.state.filter.type}
              onChange={handleChange}
              className={styles.group}
            >
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label="Movie"
              />
              <FormControlLabel value="show" control={<Radio />} label="Show" />
              <FormControlLabel
                value="actor"
                control={<Radio />}
                label="Actor"
              />
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
          </form>
        </Toolbar>
      </AppBar>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCatalog: (filter: any) => dispatch(updateCatalog(filter)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Header));
