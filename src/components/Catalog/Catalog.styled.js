import styled from "styled-components";

export const StyledCarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const StyledCardItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  height: 425px;
  margin-bottom: 50px;
  position: relative;
  img {
    border-radius: 14px;
    margin-bottom: 8px;
    position: relative;
    z-index: -1;
  }
`;


export const StyledCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  h2,
  p {
    font-family: "Manrope Medium";
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-filter);
    span {
      color: var(--general-blue);
    }
  }
`;
export const StyledCardDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;
  p,
  span {
    font-family: "Manrope Regular";
    font-size: 12px;
    color: var(--description-card);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  background-color: var(--general-blue);
  border: none;
  outline: transparent;
  font-family: "Manrope SemiBold";
  font-size: 14px;
  line-height: 1.43;
  color: var(--white);
  transition: background-color 0.5s linear;
  &:hover,
  &:focus {
    background: var(--general-blue-active);
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 10px;

  background: transparent;
  border: none;
  svg {
    fill: var(--white);
    width: 18px;
    height: 18px;
  }
`;


export const StyledCatalog = styled.div`
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const StyledButtonLoadMore = styled.button`
  color: var(--general-blue);
  font-family: "Manrope Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background: transparent;
  border: none;

  &:hover,
  &:focus {
    color: var(--general-blue-active);
  }
`;

/*  */

export const selectStyle = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--border-filter)",
    width: "224px",
    height: "48px",
    border: "none",
    paddingLeft: "18px",
    paddingRight: "18px",
    paddingTop: "8px",
    paddingBottom: "8px",
    display: "flex",
    cursor: "pointer",
    outline: "none",
    borderRadius: "14px",
    boxShadow: "none",
  }),
  singleValue: (styles) => ({
    ...styles,
    fontFamily: "Manrope Medium",
    color: "var(--black-filter)",
    fontSize: "18px",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: "Manrope Medium",
    color: "var(--black-filter)",
    fontSize: "18px",
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "14px",
    backgroundColor: "var(--white)",
    overflow: "hidden",
    color: "var(--no-choice-filter)",
    fontFamily: "Manrope Medium",
    fontSize: "16px",

    "&::before": {
      background: "var(--white)",
      content: '""',
      filter: "blur(50px)",
      position: "absolute",
      inset: "0%",
      zIndex: "-1",
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    if (isFocused) {
      return {
        ...styles,
        color: "var(--black-filter)",
      };
    } else if (isSelected) {
      return {
        ...styles,
        color: "var(--black-filter)",
      };
    } else {
      return {
        ...styles,
      };
    }
  },
};

export const StyledFormFilters = styled.form`
  // display: flex;
  gap: 18px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  button {
    width: 136px;
    height: 48px;
    padding: 14px 44px;
    border-radius: 12px;
    background: var(--general-blue);
    border: none;
    outline: transparent;
    margin-left: 18px;
    color: var(--white);

    color: var(--white);
    font-family: "Manrope SemiBold";
    font-size: 14px;
    line-height: 1.43;
    &:hover,
    &:focus {
      background-color: var(--general-blue-active);
    }
  }
  label {
    color: var(--color-filter);
    font-family: "Manrope Medium";
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


