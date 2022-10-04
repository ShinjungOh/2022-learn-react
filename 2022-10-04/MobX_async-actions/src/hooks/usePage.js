import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePage = () => {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const isDetailPage = pathname.includes('detail');
    const isEditPage = pathname.includes('edit');
    if (isDetailPage) {
      setCurrentPage('detail');
    } else if (isEditPage) {
      setCurrentPage('edit');
    } else {
      setCurrentPage('');
    }
  }, [pathname]);

  return currentPage;
};

export default usePage;
