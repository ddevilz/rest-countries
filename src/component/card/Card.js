import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Card = ({ filteredData, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = filteredData.slice(startIndex, endIndex);
  const navigate = useNavigate();

  return (
    <>
      {visibleData &&
        visibleData.map((data, index) => (
          <div className="card" key={index} onClick={() => navigate(`/details/${data.name}`)}>
            <div className="cardImg">
              <img src={data.flags.svg} alt={data.name} />
            </div>
            <div className="cardText">
              <h3>{data.name}</h3>
              <p>Population: {data.population}</p>
              <p>Region: {data.region}</p>
              <p>Capital: {data.capital}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
