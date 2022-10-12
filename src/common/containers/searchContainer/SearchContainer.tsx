import { useEffect, useState, cloneElement } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import StartSearch from "common/containers/startSearch";
import Search from "common/components/search";
import Loading from "common/components/loading";
import { findResults, clearSearch } from 'services/apiSlice';
import styled from 'styled-components';

const StyledContainer = styled.div`{
  position: relative;
  min-height: calc(100vh - 80px);
  padding-bottom: 80px;
}`

interface SearchContainerProps {
  children: React.ReactElement;
  constants: {
    indicator: string;
    title: string;
    description: string;
  }
}

const SearchContainer = (props: SearchContainerProps) => {
  const { children, constants } = props;
  const dispatch = useAppDispatch();
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const search = useAppSelector((store) => store.search)

  const handleSearch = (value: string) => {
    setLoading(true);
    dispatch(clearSearch());
    dispatch(findResults({ name: value, indicator: constants.indicator }));
  };

  const addData = (step: number) => {
    if (step > search.currentPage) {
      dispatch(findResults({ page: step, indicator: constants.indicator}));
    }
  }

  useEffect(() => {
    dispatch(clearSearch());
    setResult(false);
  }, []);

  useEffect(() => {
    setResult(false);
    if (search.searchValue !== '') {
      setLoading(false);
      if (search.list.length > 0) {
        setResult(true);
      }
    }
  }, [search]) 

  return loading ? (
    <Loading />
  ) : result ? (
    <StyledContainer>
      <Search value={search.searchValue} handleSearch={handleSearch} />
      <p className="m-1"><em>Results: {search.totalCount}</em></p>
      {
        search.totalCount === 0 ? 
          <div className="alert alert-info mt-3" role="alert">
            Not found results
          </div>
        : cloneElement(children, {
            list: search.list,
            addData: addData,
            limit: search.pagination
          })
      }
    </StyledContainer>
  ) : (
    <StartSearch
      title={constants.title}
      description={constants.description}
      handleSearch={handleSearch}
    />
  )
}

export default SearchContainer;