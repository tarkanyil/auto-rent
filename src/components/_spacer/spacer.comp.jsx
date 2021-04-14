import { useState, useEffect } from 'react';

import styled from 'styled-components';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}
const SpacerBlock = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

const lowerBreakpoint = 767;
const higherBreakpoint = 1439;

// Returns the actual viewport width so we can use it in our components
export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

export const Spacer = ({ mob, tab, dt }) => {
  const { width } = useViewport();
  if ((!tab && width > lowerBreakpoint) || (!dt && width > higherBreakpoint)) {
    return null;
  }
  if (width > higherBreakpoint) {
    return <SpacerBlock size={dt} />;
  } else if (width > lowerBreakpoint) {
    return <SpacerBlock size={tab} />;
  } else {
    return <SpacerBlock size={mob} />;
  }
};

export default Spacer;
