import { Container } from "@mantine/core";
import ClaimsHeader from "./ClaimsHeader";
import ClaimsFilter from "./ClaimsFilter";
import { useState } from "react";
import ClaimsData from "./ClaimsData";

export default function Claims() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  return (
    <Container>
      <ClaimsHeader />
      <ClaimsFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ClaimsData selectedFilter={selectedFilter} />
    </Container>
  );
}
