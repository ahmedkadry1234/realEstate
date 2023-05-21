import React from "react";
import { NavLink } from "react-router-dom";
import Navbar1 from "../../home/Navbar1";
import Footer from "../../footer/footer";
import "../PrivacyPolicy/privacy.css";

const Terms2 = () => {
  return (
    <>
      <Navbar1 />
      <div className="terms TermforAgent">
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
            <h3>TERMS & CONDITIONS For Agents & Advertisers</h3>
            <ol>
              <li className="child">
                <h2>DEFINITIONS</h2>
                <ol>
                  <li>
                    In these Member Terms and Conditions the following terms
                    shall have the following meaning: <br />
                    “we", "our", "us", “propertyfinder.eg” means Property Finder
                    Egypt LLC and its subsidiaries, employees, officers, agents,
                    affiliates or assigned parties. "you", "your" or "the
                    Client" means you, who is either a licensed real estate
                    broker (i.e. an agent); a licensed real estate brokerage
                    firm, developer and hotel apartment provider and a user of
                    the Service. “Content” means any and all content, listing
                    details and materials including property details and any
                    intellectual property rights (including but not limited to
                    trademarks, trade names, and logos), moral rights and or
                    similar rights supplied or made available by, on behalf or
                    on the instruction of you to us on the Website. “Contract”
                    means the Subscription Order (as defined below) and these
                    Member Terms and Conditions and the Privacy Policy. “Fee”
                    means the amount due to us by you under the Subscription
                    Order. “Membership” means your entitlement to the Services
                    (under a Contract) subject to these conditions. "Service"
                    includes but is not limited to any of the following services
                    for a Member or a combination thereof depending on the
                    membership package chosen in the Subscription Order:
                  </li>
                  <li>
                    a process that will facilitate your uploading and managing
                    your own properties’ listings and property developments;
                  </li>
                  <li>
                    brand booster for agents who want to increase their brand
                    exposure to all buyers and sellers by having their logo
                    presented on all their properties’ listings on the search
                    results pages and on all properties’ listings sent by e-mail
                    alerts;
                  </li>
                  <li>
                    online banner advertising and banner ad impressions that
                    appear on our Website on a Share of Voice (SOV) and/or Cost
                    Per Impression (CPM) basis;
                  </li>
                  <li>
                    micro-website and advertising banner creative development
                    services;
                  </li>
                  <li>
                    having your properties signified as "Featured and/or
                    Premium" on our Website to improve their ranking for added
                    exposure;
                  </li>
                  <li>
                    having your properties rotated through the top position(s)
                    via our "Smart Ads" product;
                  </li>
                  <li>
                    a process which facilitates having your phone call leads
                    tracked and recorded via our "Call Tracking" product;
                  </li>
                  <li>
                    the process of having your properties and company profile
                    appear on affiliated print publications such as "Prestige
                    Magazine";
                  </li>
                  <li>inclusion of your properties in e-mail alerts;</li>
                  <li>
                    your agency details and logo listed in the ‘Find an Agent’
                    section;
                  </li>
                  <li>website and banner design services; and</li>
                </ol>
              </li>
              <li className="child">
                <h2>CONTRACT</h2>
                <ol>
                  <li>
                    The Contract shall be between us and you. You acknowledge
                    and agree that you have read, understood and agree to all
                    the terms of the Contract when submitting the Subscription
                    Order as follows:
                    <ol>
                      <li>
                        by pressing the “Confirm Order” button when submitting
                        an online Subscription Order; or
                      </li>
                      <li>by signing a hard copy Subscription Order.</li>
                    </ol>
                  </li>
                  <li>
                    If you are entering into the Contract on behalf of a company
                    or any other legal person you warrant and represent you are
                    authorised to enter into the Contract.
                  </li>
                  <li>
                    We reserve the right to reject any Subscription Order to
                    provide any Service at our absolute discretion including but
                    not limited to where we believe any of the following;
                    <ol>
                      <li>
                        you are not providing the services of a licensed real
                        estate broker, developer or hotel apartment providers;
                        or
                      </li>
                      <li>
                        that the quality of the Content is not or will not be of
                        a professional standard commensurate with that we
                        require of our members.
                      </li>
                    </ol>
                  </li>
                  <li>
                    In the event of any conflict between these Member Terms and
                    Conditions and the Subscription Order, these Member Terms
                    and Conditions shall prevail.
                  </li>
                  <li>
                    The Contract is between us and you only and does not extend
                    to cover any company or other legal person affiliated to you
                    (including a subsidiary). No other company or legal person
                    may use the Services under this Contract and must enter into
                    a separate Contract with us.
                  </li>
                </ol>
              </li>
              <li className="child">
                <h2>. YOUR OBLIGATIONS</h2>
                <ol>
                  <li>not act as a consumer in relation to the Membership;</li>
                  <li>
                    only advertise properties that are currently available for
                    purchase or lease within Egypt or countries permitted by
                    your Subscription Order;
                  </li>
                  <li>
                    be the holder of a current license as a real estate broker,
                    hotel apartment or real estate developer in Egypt or country
                    or any further region, emirate, providence, state, or the
                    otherwise to which your use of the Service relates and to
                    the laws, rules, and regulations you are subject to;
                  </li>
                  <li>
                    ensure that material you generate through use of the Service
                    is not unlawful or for an improper purpose, including
                    information that is defamatory, misleading or deceptive, in
                    breach of copyright or would otherwise expose us to any
                    liability, legal proceedings or other sanction;
                  </li>
                  <li>
                    ensure that you do not make, arrange or authorise the
                    insertion of any reference to us or our Website in any
                    document (including promotional or merchandising material)
                    or on any Website other than our Website without our prior
                    written consent;
                  </li>
                  <li>
                    abide by any applicable rules and regulations related to
                    electronic transactions and commerce;
                  </li>
                  <li>
                    comply with any guidelines and codes issued by any relevant
                    authority (federal, local, regional, territorial, free
                    zones, municipal, ministries and government) concerned with
                    real estate or having jurisdiction over you, us, the
                    Services or the subject matter of this Contract;
                  </li>
                  <li>
                    in your use of the Service, comply with all applicable laws;
                  </li>
                  <li>
                    not be defamatory or infringe any copyright, trademark or
                    other intellectual property rights or rights of any third
                    party whatsoever;
                  </li>
                  <li>
                    be responsible for the integrity of the Content which is in
                    all respects true, complete and accurate to the best of your
                    knowledge and belief and that you will promptly update or
                    correct Content on becoming aware of any errors or
                    inaccuracies and will provide such assistance as we will
                    reasonably require to identify and remedy any unauthorized
                    use of Content;
                  </li>
                </ol>
              </li>
              <li className="child">
                <h2>4. AGREEMENT TERM, SUSPENSION OR TERMINATION OF SERVICE</h2>
                <ol>
                  <li>
                    Except as permitted by law, you may not terminate this
                    Contract before the end of the contracted term under any
                    circumstances.
                  </li>
                  <li>
                    Unless otherwise expressly stated in this Contract or
                    terminated earlier in accordance with its terms, the term of
                    your Contract will commence on the start date specified in
                    the Subscription Order and continue for the period of either
                    (a) six months; or (b) twelve (12) months as specified by
                    you in the Subscription Order (“Term”).
                  </li>
                  <li>
                    Following the expiry of the Term your contract will expire
                    unless you renew your Contract with us, in which case the
                    terms and package may be subject to changes.
                  </li>
                  <li>
                    We may terminate this contract at any time for any reason
                    provided that seven (7) days' written notice has been
                    provided to you. Should you continue to use the Service
                    following termination of the contract, you shall remain
                    liable for any and all costs incurred by you.
                  </li>
                  <li>
                    Without limiting our other rights, we may immediately
                    sanction you, or suspend or limit the Service and/or
                    temporarily remove details of any property, agent, or
                    otherwise, uploaded by you to our Website and/or terminate
                    this Contract if:
                    <ol type="a">
                      <li>
                        you fail to pay any fees, charges, or taxes due to us by
                        the due date, or provide any security cheques as
                        stipulated in the Contract;
                      </li>
                      <li>
                        you breach any part of your Contract and fail to rectify
                        that breach within seven (7) days of our giving notice
                        requiring rectification;
                      </li>
                      <li>
                        any material supplied by you is false, misleading,
                        offensive, or against public policy;
                      </li>
                      <li>
                        any material supplied by you is unlawful or violates any
                        copyrights, trademarks, or other rights of any third
                        party;
                      </li>
                      <li>
                        you have engaged in any unlawful actions while using or
                        accessing the Service and/or the Website, which shall be
                        subject to sanctions and limitations as determined in
                        our discretion.
                      </li>
                      <li>
                        you enter into bankruptcy, liquidation, administration,
                        receivership, a composition of arrangement with your
                        creditors, or appoint a receiver or manager over all or
                        any part of your assets or become or are deemed to
                        become insolvent; or
                      </li>
                      <li>
                        you die, or if you are in a partnership, are dissolved
                        or an application to dissolve is filed, or if you are a
                        company, are wound up or an application for winding up
                        is filed.
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li className="child">
                <h2>5. PACKAGES, FEES AND PAYMENT</h2>
                <ol>
                  <li>
                    The Service will not be activated until full payment has
                    been provided whether in cash, credit card payments, or
                    postdated cheques or other forms of payment as stipulated by
                    Subscription Order. You are liable for the costs incurred in
                    this Contract from the “start date” which is specified in
                    the Subscription Order or if no such date is specified from
                    the date of acceptance, (which will be the date we receive
                    your confirmation of the Subscription Order) if nothing is
                    stated in your Subscription Order.
                  </li>
                  <li>
                    If you have elected to pay via credit card, then please note
                    that the Service shall only become activated once the first
                    payment or the sole payment (in the event of a lump sum
                    payment upon the Contract) has been received by us.
                  </li>
                  <li>
                    If payment via credit card on a monthly basis was elected
                    for a 12-month Contract, then you shall be required to
                    provide us with your choice of 2 or 4 security cheques, with
                    each cheque representing a pro rata amount of the total
                    Contract amount.
                  </li>
                  <li>
                    If payment via credit card on a monthly basis was elected
                    for a 6-month Contract, then you shall be required to
                    provide us with your choice of 1 or 2 security cheques, with
                    each cheque representing a pro rata amount of the total
                    Contract amount.
                  </li>
                  <li>
                    The security cheques referenced in the provisions of this
                    Clause shall be provided by you, prior to the expiry of the
                    first month of the Contract. Failure to provide the security
                    cheque(s) will result in the suspension of the Service,
                    until such time that the security cheque(s) is provided to
                    us.
                  </li>
                  <li>
                    In the event that any of the monthly credit card payments
                    “bounces” and payment is not able to be made to us , then we
                    shall give you notice in writing of the “bounced” payment
                    and provide you until the end of that month to cure the
                    “bounced” payment. At the expiry of the month, in the event
                    that the “bounced” payment is not cured, then we shall
                    present and cash the security cheque.
                  </li>
                  <li>
                    Please note that if the balance of the Contract is less than
                    the amount of the security cheque, we shall provide a refund
                    to you, representing the difference between the security
                    cheque and the outstanding balance of the Contract.
                  </li>
                  <li>
                    Please note that any cheque issued by you that "bounces" due
                    to insufficient funds or is rejected by the relevant
                    financial institution for any other reason will incur a EGP
                    5000 administration fee payable to us within seven (7) days
                    and we reserve the right to charge you our reasonable
                    administration costs in dealing with any failed payments
                    and/or costs in relation to pursuing outstanding amounts
                    (including legal fees and expenses).
                  </li>
                  <li>
                    The current Fees for the Service are specified in your
                    Subscription Order. We offer a number of different packages
                    that vary in terms of price and services included. You may
                    subscribe to any of these packages but switching, or
                    addition of special conditions to, packages is at our sole
                    discretion. If you wish to change package during your
                    Subscription Order then we reserve the right to amend any
                    such terms in the Subscription Order including but not
                    limited to the Fees. Please be advised that a package can
                    only be reduced to the extent that the total current fee for
                    the Service that you have requested, is not reduced until
                    the end of the current contract term. This does not prohibit
                    packages from being varied, so long as the total value of
                    the services subject to the change being requested is not
                    below the total current fee for the Service being provided.
                  </li>
                  <li>
                    If your Membership has been suspended for any reason during
                    the term of your Subscription Order you will still be liable
                    to pay any Fee due to us regardless of you receiving the
                    Service.
                  </li>
                  <li>
                    {" "}
                    We reserve the right to amend any terms in a Subscription
                    Order, including package components and fees, provided that
                    such amendments will not apply during the Term of any
                    Contract entered into prior to the amendment. You are
                    advised to print and retain a copy of these Member Terms and
                    Conditions for your future reference.
                  </li>
                </ol>
              </li>
              <li className="child">
                <h2>REFUND POLICY</h2>
                <ol>
                  <li>
                    Content posted on SpaceKey HomeLaunch, whether by credit
                    card through the Website, or by cheque or bank transfer via
                    a commercial contract is paid content ("Paid Content") and
                    must be paid for by the originator of the Content. The
                    originator of the Paid Content has the right to a refund
                    only if a duplicate transaction is received for any Paid
                    Content on the Website. In this case, the duplicate portion
                    of the payment will be refunded
                  </li>
                  <li>
                    In the cases of fraudulent or disputed transactions the
                    Member should refer to their credit card provider. In all
                    instances of payments, the Member is liable for any levied
                    charges by the bank(s) or the credit card clearance
                    provider.
                  </li>
                </ol>
              </li>
              <li className="child">
                <h2>GENERAL</h2>
                <ol>
                  <li>
                    We may change these Member Terms and Conditions at any time
                    on written notice. You acknowledge that our publishing of
                    the amended version of the Terms and Conditions at this link
                    on our Website constitutes written notice to you of such
                    changes. No delay or failure by us to enforce any provision
                    of the Contract will be deemed a waiver or create a
                    precedent or will prejudice our rights.
                  </li>
                  <li>
                    Notwithstanding anything to the contrary in the Member Terms
                    and Conditions we reserve the right to change the algorithms
                    used in any Service and which may form part of the Contract
                    at any time during the term of your Contract at our sole
                    discretion.
                  </li>
                  <li>
                    We reserve the right to add any new products to the Service
                    at any time. Your Contract will not include any such new
                    products unless we both agree.
                  </li>
                  <li>
                    No delay or failure by us to enforce any provision of the
                    Contract will be deemed a waiver or create a precedent or
                    will prejudice our rights.
                  </li>
                  <li>
                    Any notice(s) must be sent by e-mail, prepaid post or
                    facsimile to your or our last known address, in the English
                    language.
                  </li>
                  <li>
                    You must not assign any part of the Service and/or your
                    obligations set out in the Contract without our written
                    consent.
                  </li>
                  <li>
                    This Contract is subject to and governed by the laws of
                    Egypt.
                  </li>
                  <li>
                    You submit to the exclusive jurisdiction of the Courts of
                    Egypt.
                  </li>
                  <li>
                    If any term of the Contract or becomes for any reason
                    invalid or unenforceable at law, the validity and
                    enforceability of the remainder will not be affected.
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

export default Terms2;
