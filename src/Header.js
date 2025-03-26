
import Banner from './고양이2.jpg'
import './App.css';
import React from 'react';


 const Header = () => {


 

  return (

    
    <><div className="wrap">
	<div className="rolling-list"> 
		<ul>
			<li>
				<div className="image-wrap"><img src={Banner} /></div>
				<div className="desc">
					<strong>부엌</strong>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
					Neque cumque ratione provident nulla veniam nihil quaerat, illum officiis hic.<br/> 
					Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?</span>
                </div>
			</li>
			<li>
				<div className="image-wrap"><img src={Banner} /></div>
				<div className="desc">
					<strong>화장실</strong>
					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                    Neque cumque ratione provident nulla veniam nihil quaerat, illum officiis hic.<br/>
					Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?</span>
				</div>
			</li>
			<li>
				<div className="image-wrap"><img src={Banner} alt=""/></div>
				<div className="desc">
					<strong>침실</strong>
					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
					Neque cumque ratione provident nulla veniam nihil quaerat, illum officiis hic.<br/>
					Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?</span>
				</div>
			</li>
			<li>
				<div className="image-wrap"><img src={Banner} alt=""/></div>
				<div className="desc">
					<strong>마당</strong>
					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
					Neque cumque ratione provident nulla veniam nihil quaerat, illum officiis hic.<br/>
					Laborum in eos possimus, quo ullam nobis nam nemo fuga ipsam?</span>
				</div>
			</li>
			
		</ul>
	</div>
</div></>

  );
}
export default Header;

