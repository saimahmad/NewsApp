import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSources, goToHome } from '../redux'
import { Tabs, Spin, Space } from "antd";
import NewsList from './NewsList.js'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const { TabPane } = Tabs;

// class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       sourceList: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://newsapi.org/v2/sources?language=en&apiKey=9f0b2b206db44fbd9fb27ca34e33c828"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         let tmp = [];
//         for (var i = 0; i < data.sources.length; i++) {
//           tmp.push(data.sources[i]);
//         }
//         this.setState({
//           sourceList: tmp,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Tabs>
//           {this.state.sourceList.map((data) => (
//             <TabPane tab={data.name} key={data.id}>
//               <NewsList sourceId={data.id}></NewsList>
//             </TabPane>
//           ))}
//         </Tabs>
//       </div>
//     );
//   }
// }

function Home (props) {
  const sourceList = useSelector(state => state.newsSource)
  const sourceId = useSelector(state => state.page.sourceId.sourceId) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSources())
  }, [])
  return sourceList.loading ? (
    <Space size="middle"> <Spin size="large" /><h2>loading</h2></Space>
  ) : sourceList.error ? (
    <h2>{sourceList.error}</h2>
  ) : (
         <div>
        <Tabs type="card" activeKey={sourceId} onChange={(activeKey) => {dispatch(goToHome({sourceId:activeKey}))}}>
          {sourceList.sources.map((data) => (
            <TabPane className="ml10" tab={data.name} key={data.id} >
              <NewsList sourceName={data.name} key={data.id}></NewsList>
            </TabPane>
          ))}
        </Tabs>
      </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     sourceList: state.newsSource
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSources: () => dispatch(fetchSources())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)
export default Home
