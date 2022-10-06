import classnames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  step: number;
  limit: number;
  handleSelect: (step: number) => void;
}

const StyledNav = styled.nav`{
  position: absolute;
  bottom: 0px;
  left: 50%;
  right: 50%;
}`

const Pagination = (props: PaginationProps) => {
  const { step, limit, handleSelect } = props;
  const allSteps = Array.from(Array(limit).keys()).map( i => i+1);
  const [steps, setSteps] = useState(allSteps.slice(0, step + 4));

  const stepAction = (newStep: number) => {
    handleSelect(newStep);
    const upCodition = newStep < step && newStep > 2 && newStep < limit - 2;
    const downCondition = newStep > step && newStep > 3 && newStep + 2 <= limit;
    if (upCodition || downCondition) {
      setSteps(allSteps.slice(newStep - 3, newStep + 2))
    }
  }

  const handlePrevious = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (step > 1) {
      stepAction(step - 1);
    }
  }

  const handleNext = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (step < limit) {
      stepAction(step + 1);
    }
  }

  const handleStep = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const selectedStep = Number(event.currentTarget.dataset.stepId);
    if (step !== selectedStep) {
      stepAction(selectedStep);
    }
  }

  return (
    <>
      {
        limit > 1 && (
          <StyledNav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className={classnames("page-item", step === 1 && "disabled")}>
                <a className="page-link" href="#" onClick={handlePrevious}>
                  Previous
                </a>
              </li>
              {
                steps.map((element, index) => (
                  <li key={index.toString()} className={classnames("page-item", element === step && "active")}>
                    <a className="page-link" href="#" onClick={handleStep} data-step-id={element}>
                      {element}
                    </a>
                  </li>
                ))
              }
              <li className={classnames("page-item", step === limit && "disabled")}>
                <a className="page-link" href="#" onClick={handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </StyledNav>
        )
      }
    </>
  )
}

export default Pagination;