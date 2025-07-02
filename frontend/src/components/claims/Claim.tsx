import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import type { ApiData } from "./ClaimsData";
import { Container } from "@mantine/core";
import ClaimHeader from "./ClaimHeader";
import ClaimStatus from "./ClaimStatus";
import ClaimNav from "./ClaimNav";
import ClaimActions from "./ClaimActions";
import ClaimSublets from "./ClaimSublets";
import ClaimServices from "./ClaimServices";

export type PropType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

export default function Claim() {
  const params = useParams();
  const [data, setData] = useState<ApiData>();
  const [activeSection, setActiveSection] = useState("action");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("../../../exampledata1.json");
        const resData = await response.json();
        setData(resData);
      } catch (err: any) {
        console.error(err);
      }
    }
    getData();
  }, [params.slug]);

  const [refs] = useState({
    action: useRef(null),
    sublet: useRef(null),
    service: useRef(null),
    total: useRef(null),
    other: useRef(null),
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <Container className="w-full flex scroll-smooth justify-center items-center flex-col">
      {data && <ClaimHeader claimData={data} />}
      {data && <ClaimStatus claimData={data} />}
      <ClaimNav activeSection={activeSection} />
      <ClaimActions
        ref={refs.action}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <ClaimSublets
        ref={refs.sublet}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <ClaimServices ref={refs.sublet} />
    </Container>
  );
}
