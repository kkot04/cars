import { StyledNavLink, StyledNoFoundWrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <StyledNoFoundWrapper>
      <StyledNavLink to={"/"}>Go to home</StyledNavLink>
    </StyledNoFoundWrapper>
  );
};

export default NotFound;
