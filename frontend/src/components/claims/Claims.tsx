import { Container } from "@mantine/core";
import ClaimsHeader from "./ClaimsHeader";
import ClaimsFilter from "./ClaimsFilter";
import { useEffect, useMemo, useState } from "react";
import ClaimsData, { type ApiData } from "./ClaimsData";

export default function Claims() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [data, setData] = useState<ApiData[]>([]);
  const [filteredData, setFilteredData] = useState<ApiData[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("../../../exampledata.json");
        const resData = await response.json();
        setData(resData);
        setFilteredData(resData);
      } catch (err: any) {
        console.error(err);
      }
    }
    getData();
  }, []);

  useMemo(() => {
    setFilteredData(data);
    if (selectedFilter.toLowerCase() !== "all") {
      const filteredData = data.filter(
        (item) => item.status.toLowerCase() === selectedFilter.toLowerCase(),
      );
      setFilteredData(filteredData);
    }
  }, [selectedFilter]);

  return (
    <Container>
      <ClaimsHeader totalClaims={data.length} />
      <ClaimsFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ClaimsData data={filteredData} />
    </Container>
  );
}
