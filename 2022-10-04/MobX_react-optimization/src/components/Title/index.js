import { useEffect, useState } from 'react';
import usePage from '../../hooks/usePage';

const Title = () => {
  const currentPage = usePage();
  const [subTitle, setSubTitle] = useState('목록');

  useEffect(() => {
    switch (currentPage) {
      case 'detail':
        setSubTitle('상세');
        break;
      case 'edit':
        setSubTitle('편집');
        break;
      case 'info':
        setSubTitle('정보');
        break;
      default:
        setSubTitle('목록');
    }
  }, [currentPage]);

  return <h1 className="main-title">MobX - {subTitle}</h1>;
};

export default Title;
