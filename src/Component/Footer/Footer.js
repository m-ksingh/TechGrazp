import React, {useState} from 'react'


import "../Css/Footer.css"
import { Helmet } from 'react-helmet';

function Footers() {
  const [isShown, setIsShown] = useState(true);
  const [isShowndubai, setIsShowndubai] = useState(false);
  const [isShownsingapur, setIsShownsingapur] = useState(false);
  const [isShownus, setIsShownus] = useState(false);

  const handleClick = event => {
  
    setIsShown(current => !current);
    setIsShowndubai(false)
    setIsShownsingapur(false)
    setIsShownus(false)


  };

  const handleClickus = event => {

    setIsShownus(current => !current);
    setIsShown(false)
    setIsShownsingapur(false)
    setIsShowndubai(false)
   
  };
  const handleClickdubai = event => {
    
    setIsShowndubai(current => !current);
    setIsShown(false)
    setIsShownsingapur(false)
    setIsShownus(false)
 
  };
  const handleClicksingapur = event => {

    setIsShownsingapur(current => !current);
    setIsShown(false)
    setIsShowndubai(false)
    setIsShownus(false)
   
  };
  return (
    
    <div>
      <footer class="text-center text-lg-start bg-color text-muted  ">
      
        <hr/>
        <div class="text-center p-4" style={{ backgroundcolor: "#ECECEC" }}>
          © 2023 Copyright:
          <a class="text-reset fw-bold" href="#!">Tech TechGrazp</a>
        </div>
      </footer>
    </div>
  )
}

export default Footers
