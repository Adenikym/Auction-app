import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';

const CustomCard = () => {
  return (
    <CardWrap className="">
      <div className="de_countdown">
        <div className="Clock-days">30 d</div>
        <div className="Clock-hours">4 h</div>
        <div className="Clock-minutes">20 mm</div>
        <div className="Clock-seconds">10 s</div>
      </div>
      <div className="author_list_pp">
        <span>
          <img className="lazy" src="https://picsum.photos/200/300" alt="" />
          <i className="fa fa-check"></i>
        </span>
      </div>
      <div className="nft__item_wrap" style={{ height: '269px' }}>
        <div className="sc-bdvvtL eMsAwI">
          <span>
            <img
              src="https://picsum.photos/450/450"
              className="lazy nft__item_preview"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="nft__item_info">
        <span>
          <h4>Test</h4>
        </span>
        <div className="nft__item_price">
          0.08 ETH<span>1/20</span>
        </div>
        <div className="nft__item_action">
          <span>Place a bid</span>
        </div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>99</span>
        </div>
      </div>
    </CardWrap>
  );
};

export default CustomCard;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  margin: 10px 10px 25px;
  background: #fff;
  transition: 0.7s;
  width: 260px;
  height: min-content;
  color: black;

  img {
    width: 100%;
    height: auto !important;
    border-radius: 8px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
  }
  .nft_coll {
    background: #fff;
    padding-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    margin: 10px;
  }

  .nft_coll img {
    transition: 0.7s;
  }

  .nft_coll:hover img {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.7s;
  }

  .nft_wrap {
    position: relative;
    width: 100%;
    height: 200%;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
    -moz-border-radius: 10px 10px 0 0;
    -webkit-border-radius: 10px 10px 0 0;
  }

  .nft_coll_pp {
    width: 60px;
    display: block;
    margin: -30px auto 10px;
    position: relative;
  }

  .nft_coll_pp span {
    cursor: pointer;
  }

  .nft_coll_pp img {
    width: 60px;
    height: auto;
    border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border: 5px solid #fff;
    background: #fff;
  }

  .nft_coll_pp i {
    font-size: 10px;
    color: #fff;
    background: #8364e2;
    border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    padding: 3px;
    position: absolute;
    bottom: 4px;
    right: 5px;
  }

  .nft_coll_info {
    text-align: center;
    padding-bottom: 10px;
  }

  .nft_coll_info span {
    cursor: pointer;
  }

  .nft_coll h4 {
    font-size: 16px;
    margin-bottom: 0;
  }

  .nft_coll span {
    font-size: 14px;
  }

  .nft_coll p {
    margin-top: 10px;
  }

  .nft_coll_by {
    font-weight: 700;
  }

  .nft {
    width: 100%;
  }

  .nft .slick-prev {
    left: -12px;
    border-radius: 45px;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .nft .slick-prev,
  .nft .slick-prev:before {
    background: #fff;
    display: block;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }

  .nft .slick-prev:before {
    content: 'ï“' !important;
    font-size: 1rem;
    font-family: FontAwesome !important;
    font-style: normal;
    font-weight: 400;
    color: #111;
    border: 1px solid #bbb;
    border-radius: 45px;
  }

  .nft .slick-prev:hover {
    background: #fff;
    box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.2);
  }

  .nft .slick-next {
    right: -12px;
    border-radius: 45px;
    transition: all 0.3s ease;
  }

  .nft .slick-next,
  .nft .slick-next:before {
    background: #fff;
    display: block;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }

  .nft .slick-next:before {
    content: 'ï”' !important;
    font-size: 1rem;
    font-family: FontAwesome !important;
    font-style: normal;
    font-weight: 400;
    color: #111;
    border: 1px solid #bbb;
    border-radius: 45px;
  }

  .nft .slick-next:hover {
    background: #fff;
    box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.2);
  }

  .nft:hover .slick-next,
  .nft:hover .slick-prev {
    opacity: 1;
    transition: all 0.3s ease;
  }

  .nft .blockquote {
    font-size: 0.98rem;
    text-align: left;
    margin: 15px 30px 30px;
    display: flex;
  }

  .nft .blockquote .fa {
    font-size: 1.3rem;
    display: inline-block;
    margin: 5px 15px 0 0;
    color: #fff;
    height: -webkit-max-content;
    height: max-content;
  }

  .nft .blockquote p {
    line-height: 1.8;
    display: inline-block;
  }

  .nft .blockquote .bytesti {
    font-size: 0.9rem;
    font-weight: 400;
  }

  .nft .slick-dots {
    bottom: -40px;
  }

  .nft .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #fff;
  }

  .nft .slick-dots li button:before {
    color: #fff;
  }

  .nft__item {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    margin: 10px 10px 25px;
    background: #fff;
    transition: 0.7s;
  }

  .nft__item:hover {
    box-shadow: 2px 2px 30px 0 rgba(10, 10, 10, 0.1);
    transition: 0.7s;
  }

  .nft__item_info {
    cursor: pointer;
    line-height: 28px;
    margin-bottom: -22px;
  }

  .nft__item h4 {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 5px;
  }

  .nft__item_price {
    font-size: 14px;
    font-weight: 600;
    display: block;
  }

  .nft__item_price span {
    margin-left: 10px;
    color: #111;
    font-weight: 700;
  }

  .nft__item_action {
    font-size: 14px;
  }

  .nft__item_action span {
    font-weight: 700;
    color: #8364e2;
  }

  .nft__item_like {
    position: relative;
    bottom: 22px;
    font-size: 14px;
    color: #ddd;
    float: right;
  }

  .nft__item_like span {
    color: #bbb;
    margin-left: 5px;
    font-size: 12px;
  }

  .nft__item_like:hover i {
    color: pink;
  }

  .de_countdown {
    position: relative;
    font-size: 0.8rem;
    position: absolute;
    right: 20px;
    background: #fff;
    padding: 6px 10px;
    border-radius: 30px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    border: 2px solid #8364e2;
    z-index: 1;
    color: #0d0c22;
  }

  .de_countdown .Clock-days,
  .de_countdown .Clock-hours,
  .de_countdown .Clock-minutes,
  .de_countdown .Clock-seconds {
    font-weight: 700;
    display: inline-block;
    margin-right: 5px;
  }
  .author_list_pp {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    width: 50px;
    height: auto;
    background: #8364e2;
    margin-left: 0;
    margin-top: -3px;
    border-radius: 100% !important;
    z-index: 1;
    transition: 0.3s;
  }

  .author_list_pp:hover img {
    padding: 3px;
    -webkit-box-shadow: 0 0 0 2px #8364e2;
    transition: 0.3s;
  }

  .author_list_pp span img {
    width: 50px;
    height: 50px !important;
  }

  .author_list_pp img {
    width: 100%;
    border-radius: 100% !important;
    -moz-border-radius: 100% !important;
    -webkit-border-radius: 100% !important;
    position: relative;
    z-index: 1;
  }

  .author_list_pp i {
    color: #fff;
    background: #8364e2;
    font-size: 10px;
    padding: 3px;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    z-index: 2;
  }
  .nft__item_wrap {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
  }

  .nft__item_wrap span {
    display: block;
    width: 100%;
  }

  .nft__item img {
    width: 100%;
    height: auto !important;
    border-radius: 8px;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
  }
`;
