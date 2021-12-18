import React, { useState } from 'react';
import RelicSearch from './RelicSearch';
import RelicCard from './RelicCard';

export const RelicSearcher = () => {
    const [relic, setRelic] = useState(null);

    return (
    <div style={{ display:'inline-block', color:'white', background: 'DimGrey', borderRadius:'25px', padding:'30px' }}>
        <RelicSearch setRelic={setRelic}/>
        <br/>
        <RelicCard relic={relic}/>
    </div>
    )
  }

  export default RelicSearcher;