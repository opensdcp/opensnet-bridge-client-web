import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Tool } from "../tool/Tool";

/**
 * A place to put buttons that affect the whole view.
 * @param {leftItems} leftItems Items on the left side of the ToolBar
 * @param {equalItems} equalItems Equally distributed items. No leftItems/title/rightItems will be rendered if used.
 * @param {title} title Title/brand of the page
 * @param {leftItems} leftItems Items on the right side of the ToolBar
 */
export const ToolBar = ({ equalItems, leftItems, title, rightItems }) =>
  equalItems ? (
    <EqualItemListWrapper>
      <EqualItemList>{equalItems}</EqualItemList>
    </EqualItemListWrapper>
  ) : (
    <DividedNavWrapper>
      <Tool>{leftItems}</Tool>
      {title ? <NavTitleWrapper>{title}</NavTitleWrapper> : null}
      <Tool>{rightItems}</Tool>
    </DividedNavWrapper>
  );

// Equal items
const EqualItemList = styled(Tool).attrs({ equal: true })`
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
`;

const EqualItemListWrapper = styled.div`
  padding: 0 ${({ theme: { paddings } }) => paddings.default};
  background: ${({ theme: { colors } }) => colors.bargrey};
`;

const DividedNavWrapper = styled(Tool).attrs({ divided: true })`
  padding: ${({ theme: { paddings } }) => paddings.default};
  background: ${({ theme: { colors } }) => colors.bargrey};
  padding-right: 0;
  & > *:last-child {
    padding-right: ${({ theme: { paddings } }) => paddings.default};
  }
`;

// Title
const NavTitleWrapper = styled.span`
  white-space: nowrap;
`;

ToolBar.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.node),
  equalItems: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightItems: PropTypes.arrayOf(PropTypes.node)
};
