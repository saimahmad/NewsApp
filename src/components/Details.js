import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Card, Col, Row, Divider, PageHeader, Descriptions } from "antd";
import { goToDetails } from "../redux";
import { goToHome } from "../redux";

const { Meta } = Card;

function Details() {
  const details = useSelector((state) => state.page.details);
  const sourceId = useSelector((state) => state.page.sourceId);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <div>
                
                <button onClick={()=>dispatch(goToHome(sourceId))}>back</button>
                {details.content}
                {details.author}
            </div> */}

      <div className="site-card-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => dispatch(goToHome(sourceId))}
          title={details.title}
        >
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 7 }}>
              <img className="detailsImage" src={details.urlToImage}></img>
            </Col>
            <Col className="details-content" xs={{ span: 24 }} lg={{ span: 6 }}>
              <div>Published at: {details.publishedAt}</div>
              <br/>
              <div>{details.content}</div>
              <br />
              <div>
                Full article: <a href={details.url}>Go to website</a>
              </div>
            </Col>
          </Row>
        </PageHeader>
      </div>
      <div className="site-card-wrapper">
        <Divider orientation="left">Top News from {details.sourceName}</Divider>
        <Row gutter={15} className="top-news-row">
          {details.topNews.map((data) =>
            details.url === data.url ? null : (
              <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                <Card
                  hoverable
                  onClick={() => {
                    dispatch(
                      goToDetails({
                        title: data.title,
                        sourceName: data.source.name,
                        content: data.content,
                        author: data.author,
                        publishedAt: data.publishedAt,
                        url: data.url,
                        urlToImage: data.urlToImage,
                        topNews: details.topNews,
                        sourceId: details.sourceId,
                      })
                    );
                  }}
                  style={{ width: 320 }}
                  cover={
                    <img
                      alt="example"
                      src={
                        data.urlToImage !== "null" && data.urlToImage
                          ? data.urlToImage
                          : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"
                      }
                    />
                  }
                >
                  <Meta title={data.title} description={data.description} />
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     details: state.page.details
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     goToHome: () => dispatch(goToHome()),
//   };
// };

export default Details;
