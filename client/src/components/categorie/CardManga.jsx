import React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from "react-icons/ai";

const Card = ({ key, title, images, string, popularity}) => {
  return (
    <div className="flex" key={key}>
        <StyledWrapper className='flex items-center'>
        <div className="card">
            <div className="top-section">
                <div className="border" />
                <img src={images} className="h-28 w-full z-100 object-cover"/>
            </div>
            <div className="bottom-section">
                <span className="title">{title}</span>
                <div className="row row1">
                    <div className="item">
                        <div className='flex flex-row p-1 gap-1s'>
                            <AiFillHeart />
                            <span className="big-text">{popularity}</span>  
                        </div>
                        
                        <span className="regular-text">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: string,
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 330px;
    border-radius: 20px;
    background: black;
    padding: 5px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .top-section {
    height: 150px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card .top-section .border {
    border-bottom-right-radius: 10px;
    height: 30px;
    width: 100px;
    position: relative;
    transform: skew(-40deg);
    box-shadow: -10px -10px 0 0 #1b233d;
  }

  .card .bottom-section {
    margin-top: 15px;
    padding: 10px 5px;
  }

  .card .bottom-section .title {
    display: block;
    font-size: 12px;
    color: white;
    letter-spacing: 2px;
  }

  .card .bottom-section .row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .card .bottom-section .row .item {
    flex: 30%;
    text-align: center;
    padding: 5px;
    color: white;
  }

  .card .bottom-section .row .item .big-text {
    font-size: 12px;
    display: block;
  }

  .card .bottom-section .row .item .regular-text {
    font-size: 12px;
  }

  .card .bottom-section .row .item:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.126);
    border-right: 1px solid rgba(255, 255, 255, 0.126);
  }`;

export default Card;
