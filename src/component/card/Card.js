import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ filteredData, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = filteredData.slice(startIndex, endIndex);
  const navigate = useNavigate();

  return (
    <div>
      {visibleData &&
        visibleData.map((data, index) => (
          <div key={index} onClick={() => navigate(`/details/${data.name}`)}>
            <div>
              <img src={data.flags.png} alt={data.name} />
            </div>
            <div>
              <h3>{data.name}</h3>
              <p>Population: {data.population}</p>
              <p>Region: {data.region}</p>
              <p>Capital: {data.capital}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
