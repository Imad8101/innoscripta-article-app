import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Loader from "../loader/Loader";
import { useGetTopHeadlinesQuery } from "../../features/newapiSlice";
import { header } from "../../configs/config";
import NewsItem from "../NewsItem/NewsItem";
// import "./Home.css";

export const card = {
  marginTop: "10px",
  marginBottom: "50px",
};

const Home = ({ newscategory, country }) => {
  const { data, isLoading, error } = useGetTopHeadlinesQuery({
    country: country,
    category: newscategory,
  });
  console.log("home data", data);
  console.log("newscategory", newscategory);

  const capitaLize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const title = capitaLize(newscategory);

  document.title = `${title} - News`;

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading news</p>;
  return (
    <>
      <header className="header">{header(title)}</header>
      <div className="container">
        <Row>
          {data?.articles?.map((element) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={uuidv4()}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  published={element.publishedAt}
                  channel={element.source.name}
                  imageUrl={element.urlToImage}
                  urlNews={element.url}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

Home.defaultProps = {
  country: "us",
  newscategory: "general",
};

Home.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default Home;
