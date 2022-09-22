import classNames from 'classnames';
// import styled from 'styled-components';
import Button from 'common/components/button';

interface SearchProps {
  placeHolder?: string;
  className?: string;
  onSearch: () => void;
}

const Search = (props: SearchProps) => {
  const { className, placeHolder, onSearch } = props;
  return (
    <form className="form-inline">
      <input className={classNames("form-control mr-sm-2", className)} type="search" placeholder={placeHolder} aria-label={placeHolder} />
      <Button onClick={onSearch} text="Search" />
    </form>
  )
};

export default Search;
