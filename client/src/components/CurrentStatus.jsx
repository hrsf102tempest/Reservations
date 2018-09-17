import React from 'react';

class CurrentStatus extends React.Component {
  constructor(props) {
    super(props);
    { props }: this;
  }
  render() {
    return (
      <div>
        <Hoursdiv>
          <icon />
          <p>Today</p>
          <hours />
          <OpenClosed />
        </Hoursdiv>
        <MenuDiv>
          <forkIcon />
          <link />
        </MenuDiv>
        <PriceRange>
          <DollarSigns />
          <DollarAmounts />
        </PriceRange>
      </div>
    );
  }
};
