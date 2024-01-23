// import React from 'react'

import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  IconButton,
  StyledButton,
  StyledCardItem,
  StyledCardDescription,
  StyledCardInfo,
} from "./Catalog.styled";
import { useState } from "react";
import { listFavorite } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/carsSlice";

const CatalogItem = ({ item }) => {
  const favoriteCars = useSelector(listFavorite);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(() =>
    favoriteCars?.some((car) => car.id === item.id)
  );

  const changeFavoriteStates = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <StyledCardItem key={item.id}>
        <img
          src={item?.img || item?.photoLink}
          alt={item?.title}
          width={274}
          height={268}
        />
        <IconButton type="button" onClick={changeFavoriteStates}>
          {(!isFavorite && <FaRegHeart />) || (
            <FaHeart style={{ fill: "blue" }} />
          )}
        </IconButton>
        <StyledCardInfo>
          <h2>
            {item?.make} <span>{item?.model}</span>, {item?.year}
          </h2>
          <p>{item?.rentalPrice}</p>
        </StyledCardInfo>
        <StyledCardDescription>
          <p>{item.address.split(",")[1].trim()}</p>
          <span>|</span>
          <p>{item.address.split(",")[2].trim()}</p>
          <span>|</span>
          <p>{item?.rentalCompany}</p>
          <span>|</span>
          <p>{item?.type}</p>
          <span>|</span>
          <p>{item?.model}</p>
          <span>|</span>
          <p>{item?.id}</p>
          <span>|</span>
          <p>{item?.accessories[0]}</p>
        </StyledCardDescription>
        <StyledButton type="button">Learn more</StyledButton>
      </StyledCardItem>
      
    </>
  );
};

export default CatalogItem;
