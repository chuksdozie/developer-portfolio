import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
  theme,
  star,
}) {
  const useStyles = makeStyles(() => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
    },
  }));

  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        // background: "red",
        color: theme.tertiary80,
      }}
    >
      <Fade bottom>
        <div
          key={id}
          className="singleProject listLayout"
          style={{
            backgroundColor: theme.primary400,
            borderLeft: `5px solid ${theme.secondary}`,
          }}
        >
          {/* Project Header */}
          <div className="listHeader">
            <h2 style={{ color: theme.tertiary }}>{name}</h2>

            {star && (
              <AiFillStar size={22} color="orange" style={{ marginLeft: 8 }} />
            )}
          </div>

          {/* Image */}
          <img
            src={image ? image : placeholder}
            alt={name}
            className="listImage"
          />

          {/* Description */}
          <p
            className="listDesc"
            style={{
              background: theme.secondary,
              color: theme.tertiary,
            }}
          >
            {desc}
          </p>

          {/* Tech Stack */}
          <div
            className="listTags"
            style={{
              background: theme.secondary,
              color: theme.tertiary80,
            }}
          >
            {tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>

          {/* Buttons */}
          <div className="listButtons">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
            >
              <FaPlay className={classes.icon} />
            </a>

            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
            >
              <FaCode className={classes.icon} />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default SingleProject;
