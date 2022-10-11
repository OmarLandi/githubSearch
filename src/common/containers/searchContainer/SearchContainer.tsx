import { useEffect, useState, cloneElement } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import StartSearch from "common/containers/startSearch";
import Search from "common/components/search/Search";
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
  const search = useAppSelector((store) => store.search)

  const handleSearch = (value: string) => {
    dispatch(clearSearch());
    dispatch(findResults({ name: value, indicator: constants.indicator }));
  };

  const addData = (step: number) => {
    if (step > search.currentPage) {
      dispatch(findResults({ page: step, indicator: constants.indicator}));
    }
  }

  useEffect(() => {
    if (search.list.length > 0) {
      setResult(true);
    }
  }, [search]) 

  return result ? (
    <StyledContainer>
      <Search value={search.searchValue} handleSearch={handleSearch} />
      <p>Resultados: {search.totalCount} </p>
      {
        cloneElement(children, {
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