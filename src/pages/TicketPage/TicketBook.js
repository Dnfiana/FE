import React, { useState } from "react";
import {
  FaAmericanSignLanguageInterpreting,
  FaCube,
  FaLanguage,
  FaWpforms,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CardOns from "../../components/Ticket/CardOns";
import CardTraveler from "../../components/Ticket/CardTraveler";
import CardTraveler1 from "../../components/Ticket/CardTravelerConfirm";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';

const TicketBook = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="contains-heads mt-lg-4">
        <div className="bg-whites">
          {/* Navbar */}
          <TopNavbar />

          <div className="d-flex">
            {/* Contact Informasi */}
            <div
              style={{ width: "70%", marginTop: "50px", marginRight: "30px" }}
            >
              <CardTraveler />
              <CardTraveler1 />
              <CardOns />
              <div style={{ textAlign: "right" }}>
                <button className="btn mt-3" style={{ backgroundColor: "#F97316" }}><a href='/ticket/confirm' className="text-white">Continue</a></button>
              </div>
            </div>

            {/* Fight */}
            <div className="price-detail">
              <div className="p-3 bg-white rounded">
                <div
                  className="d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid rgb(225 225 225)",
                    paddingBottom: "6px",
                  }}
                >
                  <h6 className="px-2">Flight</h6>
                  <h6 className="text-bold" style={{color : "#F97316"}}>Detail</h6>
                </div>
                <div className="my-3">
                  <h6 className="">Depart Flight</h6>
                  <small>Thu, 8 Desember 2022</small>
                </div>
                <div
                  className="my-3"
                  style={{
                    borderBottom: "1px solid rgb(225 225 225)",
                    paddingBottom: "16px",
                  }}
                >
                  <h6 className="">Super Air Jet</h6>
                  <small>IU176</small>
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    padding: "5px 15px",
                    borderBottom: "1px solid rgb(225 225 225)",
                  }}
                >
                  <div className="d-flex">
                    <div>
                      <div className="">
                        <h6 className="fonts-bold">22:15</h6>
                        <p className="font-weight-light fonts-light">
                          6 Dec 2022
                        </p>
                      </div>
                      <p className="font-wight-light my-4 fonts-light">
                        1h 50m
                      </p>
                      <div className="">
                        <p className="fonts-bold">01:05</p>
                        <p className="fonts-light">6 Dec 2022</p>
                      </div>
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                      <div>
                        <h6 className="fonts-medium"> Jakarta (CGK)</h6>
                        <h6 className="fonts-medium">
                          Soeharto Hatta International Airport
                        </h6>
                        <h6 className="fonts-medium">Terminal 1A</h6>
                      </div>
                      <div className="mt-5">
                        <h6 className="fonts-medium">Bali Denpasar ( DPS )</h6>
                        <h6 className="fonts-medium">
                          Ngurah Rai International Airport
                        </h6>
                        <h6 className="fonts-medium">Terminal Domestic</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-success">
                    <FaWpforms style={{ marginRight: "10px" }} />
                    <h6 className="d-inline-block">Reschedule</h6>
                  </div>
                  <div className="text-secondary">
                    <FaAmericanSignLanguageInterpreting
                      style={{ marginRight: "10px" }}
                    />
                    <h6 className="d-inline-block">Non Refundable</h6>
                  </div>
                  <div>
                    <FaCube style={{ marginRight: "10px" }} />
                    <h6 className="d-inline-block">Cabin baggage 7kg</h6>
                  </div>
                  <div>
                    <FaLanguage style={{ marginRight: "10px" }} />
                    <h6 className="d-inline-block">Entertainment</h6>
                  </div>
                </div>
              </div>

              {/* prive detail */}
              <div
                className="mt-3 bg-white rounded p-3 position-relative"
                style={{
                  boxSizing: "border-box",
                  height: `${show ? "30vh" : "20vh"}`,
                }}
              >
                <h6>Price detail</h6>
                <div className="">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6
                        className="d-inline-block"
                        style={{ fontWeight: "500", fontSize: "14px" }}
                      >
                        Depart (CGK =&gt; DPS)
                      </h6>
                      {!show && <FiChevronDown onClick={() => setShow(true)} />}
                      {show && <FiChevronUp onClick={() => setShow(false)} />}
                    </div>
                    <div>
                      <h6>Rp 849.044</h6>
                    </div>
                  </div>
                  {show && (
                    <>
                      <div className="d-flex justify-content-between">
                        <h6 className="d-inline-block text-secondary">
                          Adult x 1
                        </h6>
                        <h6 className="text-secondary">Rp 849.044</h6>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h6 className="d-inline-block text-secondary">Tax</h6>
                        <h6 className="text-secondary">Rp 423.044</h6>
                      </div>
                    </>
                  )}
                  <div className="d-flex justify-content-between card-price-detail position-absolute">
                    <h6 className="fonts-normal">Total Price</h6>
                    <h6 className="">Rp 849.044</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBook;
