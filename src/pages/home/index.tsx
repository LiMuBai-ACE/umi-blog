import React from 'react';

import { Helmet } from 'umi';
import './index.scss';

function Home() {
  return (
    <div className="page-home">
      <Helmet encodeSpecialCharacters={false}>
        <html lang="en" data-direction="666" />
        <meta
          name="description"
          content={`拥有优秀的大数据分析能力，可以提供专业的用户运营和数据分析经验，提供从数据埋点采集到数据分析的全链路用户增长应用体系，支持私有化部署。`}
        />
        <title>我是home</title>
      </Helmet>
      home
    </div>
  );
}

export default Home;
