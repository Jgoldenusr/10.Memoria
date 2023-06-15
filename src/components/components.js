import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    /* jshint ignore:start */
    <header>
      <FontAwesomeIcon icon={faBrain} className="headerIcon" />
      <span className="headerSpan">{props.title}</span>
    </header>
    /* jshint ignore:end */
  );
}
function Footer() {
  return (
    /* jshint ignore:start */
    <footer>
      <a href="https://github.com/Jgoldenusr">
        <FontAwesomeIcon icon={faGithub} className="footerIcon" />
      </a>
      <span className="footerSpan">Copyright © 2023 Jgoldenusr</span>
    </footer>
    /* jshint ignore:end */
  );
}
function FlagsGrid(props) {
  return (
    /* jshint ignore:start */
    <div className="container">
      <div className="center flagGrid">
        {props.flagsArray.map((element) => {
          return (
            <div key={element.id}>
              <div className="flagWrapper">
                <img
                  className="flagImg"
                  loading="lazy"
                  src={`https://www.countryflagicons.com/SHINY/64/${element.code}.png`}
                  alt={element.code}
                  onClick={props.evtListener}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    /* jshint ignore:end */
  );
}

function Score(props) {
  const { currentScore, maximumScore } = props;
  return (
    /* jshint ignore:start */
    <div className="container" style={{ display: "flex" }}>
      <div className="score">{`Puntos: ${currentScore}`}</div>
      <div className="score">{`Máximo: ${maximumScore}`}</div>
    </div>
    /* jshint ignore:end */
  );
}
export { FlagsGrid, Header, Score, Footer };
