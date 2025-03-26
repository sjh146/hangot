import './MainCss.css'
import './App.css';
import React from 'react';
const Main = () => {
  return (
    <div class="dropdown">
    <button class="dropbtn"> 
      <span class="dropbtn_icon">more_horiz</span>
      메뉴
    </button>
    <div class="dropdown-content">
    <a href="/"><h2>메인</h2></a>
      <a href="Bulletinboard"><h2>방명록</h2></a>
      <a href="Information"><h2>숙소안내</h2></a>
      <a href="Waytohangot"><h2>찾아오는 길</h2></a>
      <a href="Sightseeing"><h2>하동관광지</h2></a>
      <a href="Makingprocess"><h2>제작과정</h2></a>
    </div>
  </div>
   
  );
}

export default Main;
