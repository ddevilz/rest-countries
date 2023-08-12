import React, { useState } from "react";
import data from "../../util/data.json";
import Card from "../../component/card/Card";
import Pagination from "../../component/pagitation/Pagination";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const uniqueRegions = [...new Set(data.map((d) => d.region))];

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setCurrentPage(1);
  };

  const searchQuery = (term) => {
    return data.filter((d) =>
      d.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filteredData = searchQuery(query).filter(
    (d) => !selectedRegion || d.region === selectedRegion
  );

  return (
    <div>
      <section>
        <div>
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a country..."
            />
          </div>
          <div>
            <select onChange={handleRegionChange}>
              <option value="">All Regions</option>
              {uniqueRegions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Card
            filteredData={filteredData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
