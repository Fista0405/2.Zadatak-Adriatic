import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "components/NavigationBar";
import QuickLinks from "components/QuickLinks";
import TxtSection from "components/TxtSection";
import OurValues from "components/OurValues";
import DiscoverMore from "components/DiscoverMore";
import UsersAboutUs from "components/UsersAboutUs";
import SideBar from "components/SideBar";
import { BASE_API_URL } from "constants/base.api.constant";

function App() {
  const [data, setData] = useState([]);
  const [valueItems, setValueItems] = useState([]);
  const [discoverItems, setDiscoverItems] = useState([]);
  const [aboutItems, setAboutItems] = useState([]);
  const [usefulLnkItems, setUsefulLnkItems] = useState([]);

  const client = axios.create({
    baseURL: BASE_API_URL,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await client.get();
        setData(data);
        setValueItems(data.ourValues.items);
        setDiscoverItems(data.discoverMore.items);
        setAboutItems(data.aboutMenu.items);
        setUsefulLnkItems(data.usefulLinks.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [client]);

  const {
    mainTitle,
    quickLinks,
    about,
    mission,
    ourValues,
    discoverMore,
    usersAboutUs,
    aboutMenu,
    usefulLinks,
  } = data;

  return (
    <>
      <NavigationBar img="./content/LogoAdriatic.svg" />
      <main>
        <Container>
          <Row>
            <Col>
              <h1 className="m-0 p-2 bg-primary rounded">{mainTitle}</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={9} className="d-flex flex-column">
              <QuickLinks links={quickLinks} />
              <TxtSection sectionTitle={about?.sectionTitle} tag={about?.tag}>
                {about?.text}
              </TxtSection>
              <TxtSection
                sectionTitle={mission?.sectionTitle}
                tag={mission?.tag}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: mission?.textMission }}
                />
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: mission?.textVision }}
                />
              </TxtSection>
              <OurValues
                sectionTitle={ourValues?.sectionTitle}
                tag={ourValues?.tag}
                items={valueItems}
              />
              <DiscoverMore
                sectionTitle={discoverMore?.sectionTitle}
                tag={discoverMore?.tag}
                items={discoverItems}
              />
              <UsersAboutUs
                sectionTitle={usersAboutUs?.sectionTitle}
                text={usersAboutUs?.text}
                user={usersAboutUs?.user}
              />
            </Col>
            <Col lg={3} className="d-none d-lg-block">
              <Row className="no-gutters d-flex flex-column mt-5">
                <SideBar title={aboutMenu?.title} items={aboutItems} />
                <SideBar title={usefulLinks?.title} items={usefulLnkItems} />
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
