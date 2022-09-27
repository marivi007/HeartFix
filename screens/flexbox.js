import React from "react";
import styled from "styled-components/native";

const FlexContainer = styled.View`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  width: 100%;
`;

export default ({
  children,
  direction = "",
  align = "",
  justify = "",
  extraStyle = "",
}) => {
  return (
    <FlexContainer
      style={extraStyle}
      direction={direction}
      align={align}
      justify={justify}
    >
      {children}
    </FlexContainer>
  );
};
