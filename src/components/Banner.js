import '../sass/Banner.scss';
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';

const Example = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container-fluid banner">
    <div className="banner-content">
    <Nav tabs>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => { toggle('1'); }}
          >
            Swap
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '2' }}
            onClick={() => { toggle('2'); }}
          >
            Rebalance
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '3' }}
            onClick={() => { toggle('3'); }}
          >
            Admin
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
            <Col lg="6" md="12" sm="12" className="mt-5">
              <Card body className="swapCardRight">
                <Button className="bnb d-flex justify-content-around align-items-center my-4">BNB <span className="EnterAmount">[Enter Amount]</span></Button>
                <Button className="mbnb d-flex justify-content-around align-items-center my-4">mBNB <span className="Calc"> [Calc Amount]</span></Button>
                <Button className="swap mt-5 mx-5">Swap</Button>
                
              </Card>
            </Col>
            <Col lg="6" md="12" sm="12">
              <Row>
                <Col sm="12" className="mt-5">
                  <Card className="mb-2">
                    <CardBody className="swapCardLeft">
                      <Button>Prices and Supply</Button>
                      <h4>BNB price: 3000</h4>
                      <h4>mBNB price: 200</h4>
                      <h4>mBNB Supply: 1,000,000</h4>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12">
                <Card>
                    <CardBody className="swapCardLeft">
                      <Button>Fees</Button>
                      <h4>trading 0%</h4>
                      <h4>withdrawal: 1% 200</h4>
                      <h4>performance: 0%</h4>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col lg="6" md="12" sm="12" className="mt-5">
              <Card className="mb-4">
                <CardBody>
                <Button>Rebalance</Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Button>Pool Statistics</Button>
                <h4>collateral: 500 BNB</h4>
                <h4>borrow: 10000 BUSD</h4>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12" sm="12" className="mt-5">
              <Card>
                <CardBody>
                <Button>Rebalance Statistics</Button>
                  <h4>BNB Gas (estinated): $500</h4>
                  <h4>XVS reward (estinated): 500</h4>
                  <h4>Leverge Target: 200</h4>
                  <h4>Rebalance Amount: $500</h4>
                  <h4>XVS free share: 50%</h4>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col lg="6" md="12" sm="12" className="mt-5">
              <Card className="mb-3">
                <CardBody>
                <Button>Set Owner</Button>
                <h4>Owner: 0x4Da</h4>
                <h4>Transfer Ownership:</h4>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Button>Set Slippage</Button>
                <h4>Slippage</h4>
                </CardBody>
            
              </Card>
            </Col>
            <Col lg="6" md="12" sm="12" className="mt-5">
              <Card className="h-100">
                <CardBody>
                <h4>Target Leverage: </h4>
                <h4>Trading Free: </h4>
                <h4>Performance Free: </h4>
                <h4>Redempition Free: </h4>
                <h4>OwnerFreeCVS: </h4>
                <Button>Update Ratios</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    </div>
  );
}

export default Example;