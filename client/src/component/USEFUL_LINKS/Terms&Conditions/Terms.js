import React from "react";
import Navbar1 from "../../home/Navbar1";
import Footer from "../../footer/footer";
import { NavLink } from "react-router-dom";
import "../PrivacyPolicy/privacy.css";

const Terms = () => {
  return (
    <>
      <Navbar1 />

      <div className="terms Termsforuser">
        <div className="container">
          <div className="titel">
            <h2>Terms and Conditions</h2>
            <div className="link">
              <NavLink className="btn" to="/Terms" activeClassName="active">
                For Users
              </NavLink>
              <NavLink className="btn" to="/forAgent" activeClassName="active">
                For Agents & Advertisers
              </NavLink>
            </div>
          </div>
          <div className="body">
            <h3>Terms & Conditions For Users</h3>
            <ol className="hedlink">
              <li className="child">
                <h2>TERMS</h2>
                <ol>
                  <li>
                    In these terms and conditions for users (“Terms of Use”) the
                    terms “we", "our", "us" means Property Finder Egypt LLC and
                    its subsidiaries, employees, officers, agents, affiliates or
                    assigned parties.
                  </li>
                  <li>"Website" refers to propertyfinder.eg. </li>
                  <li>
                    By accessing and using this Website, you are agreeing to be
                    bound by the Website’s Terms of Use and the Privacy Policy
                    (together the “Terms”), all applicable laws and regulations,
                    and agree that you are responsible for compliance with any
                    applicable local laws. If you do not agree with any of these
                    Terms, your sole option is to immediately cease your use of
                    this Website. The materials contained in this Website are
                    protected by applicable copyright and trademark law.{" "}
                  </li>
                  <li>
                    {" "}
                    You may not use the Website and may not accept these Terms
                    if (a) you are not of eighteen (18) years of age, or (b) you
                    are a person who is either barred or otherwise legally
                    prohibited from receiving or using the Website under the
                    laws of the country in which you are a resident or from
                    which you access or use the Website.{" "}
                  </li>
                  <li>
                    {" "}
                    These Terms are effective between you and us as of the date
                    you accept these Terms, and you do so by default through the
                    use of the Website.
                  </li>
                </ol>
              </li>
              <li className="child">
                <h2>USE LICENSE & RESTRICTIONS</h2>
                <ol>
                  <li>
                    Permission is granted to temporarily download copies of the
                    materials (information or software) on the Website for
                    personal, non-commercial transitory viewing only. This is
                    the grant of a license, not a transfer of title, and under
                    this license you may not:
                    <ol>
                      <li>modify or copy the materials;</li>
                      <li>
                        use the materials for any commercial purpose, or for any
                        public display (commercial or non-commercial);
                      </li>
                      <li>
                        attempt to decompile or reverse engineer any software
                        contained on the Website;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from
                        the materials; or
                      </li>
                      <li>
                        transfer the materials to another person or "mirror" the
                        materials on any other server.
                      </li>
                    </ol>
                  </li>
                  <li>
                    In accessing or using our Website you irrevocably agree and
                    undertake to ensure that you will not:
                    <ol>
                      <li>
                        use any automated device, software process or means to
                        access, retrieve, scrape, or index our Website or any
                        content on our Website;
                      </li>
                      <li>
                        use any device, software, process or means to interfere
                        or attempt to interfere with the proper working on our
                        Website;
                      </li>
                      <li>
                        undertake any action that will impose a burden or make
                        excessive traffic demands on our infrastructure that we
                        deem, in our sole discretion to be unreasonable or
                        disproportionate Website usage;
                      </li>
                      <li>
                        use or index any content or data on our Website for
                        purposes of:
                        <ol>
                          <li>
                            constructing or populating a searchable database of
                            properties,
                          </li>
                          <li>
                            building a database of property information; or
                          </li>
                          <li>
                            competing with us in any manner that we have not
                            specifically authorised;
                          </li>
                        </ol>
                        </li>
                        <li>
                          transmit spam, chain letters, contents, junk email,
                          surveys, or other mass messaging, whether commercial
                          in nature or not;
                        </li>
                        <li>
                          use our Website or any content from our Website in any
                          manner which we in our sole discretion determine as
                          not reasonable and/or not for the purpose which it is
                          made available;
                        </li>
                        <li>
                          violate the rights of any person, including copyright,
                          trade secret, privacy right, or any other intellectual
                          property or proprietary right;
                        </li>
                        <li>
                          pose as any person or entity or attempt to solicit
                          money, passwords or personal information from any
                          person;
                        </li>
                        <li>
                          act in violation of any such terms or other condition
                          posed by us or any applicable law;
                        </li>
                        <li>
                          reproduce, republish, retransmit, modify, adapt,
                          distribute, translate, create derivative works or
                          adaptation of, publicly display, sell, trade, or in
                          any way exploit our Website or any content on our
                          Website, except as expressly authorised by us; or
                        </li>
                        <li>
                          transmit or attempt to transmit any computer viruses,
                          worms, defects or other items of a destructive manner.
                        </li>  
                    </ol>
                    </li>
                </ol>
              </li>
                    
                    <li className="child">
                     <h2> YOUR RESPONSIBILITIES</h2>
                      <ol>
                        <li>
                          We are not an estate agency and we provide a service
                          whereby agents may market and you may view property
                          details (“Details”) together with other content hosted
                          and developed by us. Agents and third parties are
                          responsible for preparing the Details and fielding
                          enquiries directly from you. We do not get involved in
                          any communications between you and agents and we do
                          not participate in any part of the transaction.
                        </li>
                        <li>
                          Details are hosted by us in good faith but are
                          produced directly by agents and/or third parties and
                          have not been verified by us. You are responsible for
                          making your own enquiries and we provide no guarantee
                          and accept no responsibility for the accuracy or
                          completeness of any information contained within the
                          Details.
                        </li>
                        <li>
                          You are responsible for checking, confirming and
                          satisfying yourself as to the accuracy of any Details.
                        </li>
                        <li>
                          You are responsible for instructing a surveyor and/or
                          obtaining legal advice before committing to any
                          purchase.
                        </li>
                      </ol>
                    </li>
                    <li className="child">
                      <h2>LIMITATIONS</h2>
                      <ol>
                        <li>
                          In no event will we be liable for any damages
                          (including, without limitation, damages for loss of
                          data or profit, or due to business interruption)
                          arising out of the use or inability to use the
                          materials on the Website, even if one of our
                          authorised representatives has been notified orally or
                          in writing of the possibility of such damage.
                        </li>
                        <li>
                          We will not be liable for any loss or damage arising
                          under or in connection with:
                        <ol type="A">
<li>any failures due to software or internet errors or unavailability, or any other circumstances beyond our reasonable control;
</li>
<li>any loss of your password or account if caused by a breakdown, error, loss of power or otherwise cause by or to your computer system and/or your account;
</li>
<li>the use of, or inability to use, our Website;
</li>
<li>the reliance on any content or information displayed on our Website;
</li>
<li>any direct, consequential, special or punitive loss, damage, costs and expenses;
</li>
<li>loss of profit;
</li>
                        </ol>
                        </li>
                      </ol>
                    </li>

            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
