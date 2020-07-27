import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchList } from "../redux";
import { goToDetails } from "../redux"
import { Card, Col, Row, Space, Spin, Divider } from "antd";
import { apiKey } from '../constants'
import 'antd/dist/antd.css';

const { Meta } = Card;

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      topList: [],
      newsList: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?sources=" +
        this.props.sourceId +
        "&apiKey="+apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        let tmp = [];
        for (var i = 0; i < data.articles.length; i++) {
          tmp.push(data.articles[i]);
        }
        this.setState({
          ...this.state,
          newsList: tmp,
        });
      });

      fetch(
        "https://newsapi.org/v2/top-headlines?sources=" +
          this.props.sourceId +
          "&apiKey="+apiKey
      )
        .then((response) => response.json())
        .then((data) => {
          let tmp = [];
          for (var i = 0; i < data.articles.length; i++) {
            tmp.push(data.articles[i]);
          }
          this.setState({
            ...this.state,
            topList: tmp,
            loading: false
          });
        });
  }

  render() {
    return this.state.loading?(<Space size="middle"> <Spin size="large" /><h2>loading</h2></Space>):(
      <div className="site-card-wrapper">
        <Divider orientation="left">Top News</Divider>
        <Row gutter={15} className="top-news-row">
          {this.state.topList.map((data) => (
            <Col xs={{ span: 24 }} md={{ span: 12}} xl={{ span: 8}}>
              <Card
                hoverable
                onClick = {()=>{this.props.goToDetails({content:data.content,author:data.author,url:data.url,topNews:this.state.toplist,sourceId:this.props.sourceId})}}
                style={{ width: 320 }}
                cover={<img alt="example" src={data.urlToImage!=="null" && data.urlToImage? data.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"} />}
              >
                <Meta title={data.title} description={data.description} />
              </Card>
            </Col>
          ))}
        </Row> 
        <Divider orientation="left">Other news from {this.props.sourceName}</Divider>
        <Row gutter={15}>
          {this.state.newsList.map((data) => (
            <Col xs={{ span: 24 }} md={{ span: 12}} xl={{ span: 8}}>
              <Card
                hoverable
                onClick = {()=> alert("card clicked")}
                style={{ width: 320 }}
                cover={<img alt="example" src={data.urlToImage!=="null" && data.urlToImage? data.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"} />}
              >
                <Meta title={data.title} description={data.publishedAt} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sourceId: state.page.sourceId.sourceId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToDetails: (details) => dispatch(goToDetails(details)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewsList);

// function NewsList(props) {
// //   // console.log("source id: "+newsList.sourceId)
//   const [Id, setSourceId] = useState(props.sourceId)

//   useEffect(() => {
//     props.fetchList(Id);
//   }, [Id]);



//   return props.newsList.loading ? (
//     <h2>Loading</h2>
//   ) : props.newsList.error ? (
//     <h2>{props.newsList.error}</h2>
//   ) : (
//     <div className="site-card-wrapper">
//       <h2>{Id}</h2>
//       <Row gutter={15}>
//         {props.newsList.list.map((data) => (
//           <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
//             <Card
//               hoverable
//               style={{ width: 320 }}
//               cover={
//                 <img
//                   alt="example"
//                   src={
//                     data.urlToImage !== "null" && data.urlToImage
//                       ? data.urlToImage
//                       : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"
//                   }
//                 />
//               }
//             >
//               <Meta title={data.title} description={data.publishedAt} />
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     newsList: state.newsList,
//     sourceId: ownProps.sourceId
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchList: (sourceId) => dispatch(fetchList(sourceId)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
