import React, { useState } from "react";
import SubLink from '../Route/SubLink';
import {RefillerManage} from '../Route/SubLinkJSON';

function Refiller() {
const [subLinkJSON,setSubLinkJSON]=useState(RefillerManage);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  );
}

export default Refiller;
