import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../util/data.json";
import "./style.css";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const country = (term) => {
    return data?.filter((d) =>
      d?.name?.toLowerCase().includes(term.toLowerCase())
    );
  };

  let decodedName = decodeURIComponent(name);

  const filteredData = country(decodedName);

  const borderCountryNames = filteredData[0]?.borders?.map(
    (borderAlpha3Code) => {
      const countryName = data?.find(
        (country) => country?.alpha3Code === borderAlpha3Code
      )?.name;
      return countryName;
    }
  );

  return (
    <div className="main">
      <div className="details">
        <button className="button" onClick={() => navigate(`/`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <span>Back</span>
        </button>
        <section className="detailSection">
          {filteredData.map((data, index) => (
            <div key={index} className="detailCard">
              <div className="detailImg">
                <img src={data.flags.svg} alt={data.name} />
              </div>
              <div className="detailText">
                <div>
                  <h1>{data.name}</h1>
                </div>
                <div className="dataDetail">
                  <div className="data">
                    <span>Native Name: {data.nativeName}</span>
                    <span>Population: {data.population}</span>
                    <span>Region: {data.region}</span>
                    <span>Sub Region: {data.subregion}</span>
                    <span>Capital: {data.capital}</span>
                  </div>
                  <div className="data">
                    <span>Top Level Domain: {data.topLevelDomain[0]}</span>
                    <span>Currencies: {data.currencies[0].name}</span>
                    <span>Languages: {data.languages[0].name}</span>
                  </div>
                </div>
                <div>
                  <span>
                    Border Countries:
                    <span>
                      {borderCountryNames?.map((d, i) => (
                        <button
                          key={i}
                          className="button"
                          onClick={() => navigate(`/details/${d}`)}
                          style={{ marginLeft: "10px" }}
                        >
                          {d}
                        </button>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Details;
