import React, { useEffect } from "react";
import { fetchSources, goToHome } from "../redux";
import { Tabs, Spin, Space } from "antd";
import NewsList from "./NewsList.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const { TabPane } = Tabs;

function Home() {
  const sourceList = useSelector((state) => state.newsSource);
  const sourceId = useSelector((state) => state.page.sourceId.sourceId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSources());
  }, []);
  return sourceList.loading ? (
    <Space size="middle">
      {" "}
      <Spin size="large" />
      <h2>loading</h2>
    </Space>
  ) : sourceList.error ? (
    <h2>{sourceList.error}</h2>
  ) : (
    <div>
      <Tabs
        type="card"
        activeKey={sourceId}
        onChange={(activeKey) => {
          dispatch(goToHome({ sourceId: activeKey }));
        }}
      >
        {sourceList.sources.map((data) => (
          <TabPane className="ml10" tab={data.name} key={data.id}>
            <NewsList sourceName={data.name} key={data.id}></NewsList>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default Home;
