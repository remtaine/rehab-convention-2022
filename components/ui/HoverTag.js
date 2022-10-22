import React from "react";
import PropTypes from "prop-types";

function HoverTag(props) {
  return <div>{props.tag}</div>;
}

HoverTag.propTypes = { tag: PropTypes.string };
HoverTag.defaultProps = { tag: "Tag" };

export default HoverTag;
