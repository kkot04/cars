
import CatalogItem from "../Catalog/CatalogItem.jsx";
import { useSelector } from "react-redux";
import { StyledCarsList, StyledCatalog } from "../Catalog/Catalog.styled.js";
import { StyledContainer } from "../Container/Container.styled.js";
import { listFavorite } from "../../redux/selectors.js";

const Favorites = () => {
  const favoritesCars = useSelector(listFavorite);

  return (
    <StyledContainer>
      <StyledCatalog>
        <StyledCarsList>
          {favoritesCars.length === 0 && (
            <h2>
              No any car
              
            </h2>
          )}
          {favoritesCars?.map((item, index) => {
            return <CatalogItem key={index} item={item} />;
          })}
        </StyledCarsList>
      </StyledCatalog>
    </StyledContainer>
  );
};

export default Favorites;
