import React from "react";
import PropTypes from "prop-types";
import { summary, newsChannel, lastUpdate } from "../../../configs/config";
import "./Details.css";

function Details({ channel, published }) {
  return (
    <div className="details">
      <div className="summary">{summary}</div>
      <p className="channel">
        <span>Channel: </span>
        {newsChannel(channel)}
      </p>
      <p className="published">
        <span>Published at: </span>
        {lastUpdate(published)}
      </p>
    </div>
  );
}

Details.propTypes = {
  channel: PropTypes.string,
  published: PropTypes.string,
};

export default Details;
