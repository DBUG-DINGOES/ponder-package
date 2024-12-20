import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }

  30% {
    transform: translateY(-15px);
  }
`;

const StyledSVG = styled.svg`
  color: ${(props) => props.color};
`;

const StyledCircle = styled.circle`
  animation: ${jump} 1.3s linear infinite;

  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: -1.1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
`;

// Dots Component with standardized color props
export function Dots({
  color1 = "#22333B",
  color2 = "#FF6F61",
  color3 = "#B7AEA3",
}) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 100 100"
      fill="none"
    >
      <StyledCircle cx="20" cy="49.5" r="8" fill={color1} />
      <StyledCircle cx="50" cy="49.5" r="8" fill={color2} />
      <StyledCircle cx="80" cy="49.5" r="8" fill={color3} />
    </StyledSVG>
  );
}

Dots.propTypes = {
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
};

export default Dots;
