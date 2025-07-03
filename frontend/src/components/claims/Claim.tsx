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
import ClaimTotal from "./ClaimTotal";
import ClaimOther from "./ClaimOther";
import ClaimCustomer from "./ClaimCustomer";
import PaymentModal from "../payment/PaymentModal";

export type JobData = {
  name: string;
  issue: Issue[];
};

export type Issue = {
  name: string;
  parts: Part[];
  labour: Labour[];
};

export type Part = {
  name: string;
  part_number: string;
  qty: number;
  wty_mo: number;
  wty_miles: number;
  cost_per: number;
  tax_per: number;
};

export type Labour = {
  description: string;
  menu: boolean;
  hours: number;
  rate: number;
  tax: number;
  tax_per: number;
};

export type SubletData = {
  name: string;
  cost_per: number;
  quantity: number;
};
export default function Claim() {
  const params = useParams();
  const [data, setData] = useState<ApiData>();
  const [serviceData, setServiceData] = useState<JobData[]>([]);
  const [activeSection, setActiveSection] = useState("action");
  const [subletData, setSubletData] = useState<SubletData[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
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
        let maxRatio = 0;
        let visibleSectionId = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSectionId = entry.target.id;
          }
        });

        if (visibleSectionId) {
          setActiveSection(visibleSectionId);
        }
      },
      {
        threshold: 0.6,
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

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("../../../exampleserivedata.json");
        const data = await response.json();
        setServiceData(data);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getSubletData() {
      try {
        const response = await fetch("../../../examplesubletdata.json");
        const data = await response.json();
        setSubletData(data);
      } catch (err: any) {
        console.log(err);
      }
    }
    getSubletData();
  }, []);

  return (
    <Container className="w-full flex scroll-smooth justify-center items-center flex-col">
      {data && <ClaimHeader claimData={data} />}
      {data && (
        <ClaimStatus
          setShowPaymentModal={setShowPaymentModal}
          claimData={data}
        />
      )}
      <ClaimNav
        setShowPaymentModal={setShowPaymentModal}
        activeSection={activeSection}
      />
      <ClaimActions ref={refs.action} setActiveSection={setActiveSection} />
      <ClaimSublets
        ref={refs.sublet}
        subletData={subletData}
        setActiveSection={setActiveSection}
      />
      <ClaimServices
        setActiveSection={setActiveSection}
        serviceData={serviceData}
        ref={refs.service}
      />
      <ClaimTotal
        ref={refs.total}
        setActiveSection={setActiveSection}
        serviceData={serviceData}
        subletData={subletData}
      />
      <ClaimOther ref={refs.other} setActiveSection={setActiveSection} />
      <ClaimCustomer />
      <PaymentModal
        setShowPaymentModal={setShowPaymentModal}
        showPaymentModal={showPaymentModal}
      />
    </Container>
  );
}
