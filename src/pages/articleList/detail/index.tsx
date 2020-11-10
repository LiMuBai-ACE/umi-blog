import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
const Detail = (porps: any) => {
  const { dispatch } = porps;
  useEffect(() => {
    const { query } = history.location;
    console.log(history);
    dispatch({
      type: 'admin/articleDetail',
      payload: { id: query.id },
    }).then((res: any) => {
      console.log(res, '---->');
    });
  }, []);
  return <div>ahahahh111</div>;
};
export default connect(({ admin: {} }: any) => ({}))(Detail);
