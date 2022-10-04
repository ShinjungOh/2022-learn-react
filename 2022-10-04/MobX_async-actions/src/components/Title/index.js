import { useEffect, useState } from 'react';
import usePage from '../../hooks/usePage';

const Title = () => {
  const currentPage = usePage();
  const [subTitle, setSubTitle] = useState('목록');

  useEffect(() => {
    if (currentPage === 'detail') {
      setSubTitle('상세');
    } else if (currentPage === 'edit') {
      setSubTitle('편집');
    } else {
      setSubTitle('목록');
    }
  }, [currentPage]);

  return <h1 className="main-title">MobX - {subTitle}</h1>;
};

export default Title;
