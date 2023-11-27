import { useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

export default function VideoSearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const regex = /.*\?search_query=/;
    if (!regex.test(location.search)) {
      navigate({ pathname: '/results', search: '?search_query=' });
    }
  }, [navigate, location.search]);

  const searchQuery = searchParams.get('search_query');

  if (!searchQuery) {
    return <p>검색결과가 없습니다.</p>;
  }

  return <div>VideoSearchPage</div>;
}
