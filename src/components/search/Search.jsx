import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Loader from "../loader/Loader";
import { useSearchNewsQuery } from "../../features/newapiSlice";
import NewsItem from "../NewsItem/NewsItem";
import { noFound, header, searching } from "../../configs/config";
// import "./Search.css";

const Search = () => {
  const { query } = useParams();
  console.log("search q", query);
  const { data, error, isLoading } = useSearchNewsQuery({ query });

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const title = capitaLize(query);

  document.title =
    data?.articles?.length === 0
      ? noFound
      : isLoading
      ? searching
      : `${title} - News`;

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error loading news</p>}
      {
        <>
          <header className="header">
            {data?.articles?.length === 0 ? noFound : header(title)}
          </header>
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
      }
    </>
  );
};

export default Search;
