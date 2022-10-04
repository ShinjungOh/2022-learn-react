import { observer } from 'mobx-react-lite';
import React from 'react';

// TODO: 3. Information의 값을 참조하는 GenericInformation 만들기
export const GenericInformation = observer(({ getInfo }) => {
  // info를 getInfo()로 가져오세요
});

const Information = ({ info }) => {
  console.log('Information render');
  return <div>{info}</div>;
};

export default Information;
