import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import {
  selectFirstLoad,
  selectisLoadMore,
  selectorCars,
} from "../../redux/selectors.js";
import { StyledContainer } from "../Container/Container.styled.js";
import Select, { components } from "react-select";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  StyledButtonLoadMore,
  StyledCarsList,
  StyledCatalog,
  StyledSelect,
  StyledFormFilters,
  selectStyle,
} from "./Catalog.styled.js";
import CatalogItem from './CatalogItem.jsx';
import {
  changeFilters,
  changeSelectFilter,
  isFirstLoad,
} from "../../redux/carsSlice.js";



const CatalogList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const firstLoad = useSelector(selectFirstLoad);
  const isLoadMore = useSelector(selectisLoadMore);
  const allCars = useSelector(selectorCars);

const [carFilter, setCarFilter] = useState('')

const getFilterValue = (filterOp) => {
  dispatch(changeSelectFilter(filterOp?.value))
} 

const uniqueOp = [...new Set(allCars?.map((item) => 
  item?.make))]

  const arrOfOpt = uniqueOp.sort();

  const DropDown = (props) => {
    return(
      <components.DropDown{...props}>
      {props.selectProps.menuIsOpen ? (
        <IoIosArrowUp
            size={18}
            label="Arrow up"
            color={"var(--black-filter)"}
          />
      ) : (
        <IoIosArrowDown
            size={18}
            label="Arrow down"
            color={"var(--black-filter)"}
          />
      )}
      </components.DropDown>
    )
  }

  const filterSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target)
    const makeValue = formData.get('make');

    setCarFilter(makeValue || '')

    dispatch(
      changeFilters({makeValue})
    )
  }

  const filteredGallery = allCars
  .filter((item) => (carFilter ? item.make === carFilter : true))

  useEffect(() => {
    if (firstLoad === true) {
      dispatch(fetchCarsThunk(page));
      dispatch(isFirstLoad(false));
      setPage(page + 1);
    }
  }, [dispatch, firstLoad, page] );


  const handleLoadMoreClick = () => {
    setPage(page + 1);
    dispatch(fetchCarsThunk(page));
  };

  return (
    <>
       <StyledContainer>
        <StyledCatalog>
          <StyledFormFilters onSubmit={filterSearch}>
            <StyledSelect>
              <label htmlFor="make">Car brand</label>
              <Select
                name="make"
                options={arrOfOpt.map((make) => ({
                  value: make,
                  label: make,
                }))}
                placeholder="Enter the text"
                styles={selectStyle}
                onChange={getFilterValue}
                components={{
                  DropDown,
                  IndicatorSeparator: () => null,
                }}
              />

          <button type="submit">Search</button>

            </StyledSelect>
            </StyledFormFilters>



            

          <StyledCarsList>
            {filteredGallery?.map((item, index) => {
              return <CatalogItem key={index} item={item} />;
            })}
          </StyledCarsList>
          {isLoadMore && (
              <StyledButtonLoadMore type="button" onClick={handleLoadMoreClick}>
                Load more
              </StyledButtonLoadMore>
          )}
        </StyledCatalog>
      </StyledContainer>
    </>
  );
};

export default CatalogList;
