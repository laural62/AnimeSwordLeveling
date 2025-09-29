import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper className='flex sm:flex-row flex-col gap-5'>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front card-bg-sub">
            <p className="title rounded-2xl">Origin !</p>
          </div>
          <div className="flip-card-back">
            <p className="title italic underline">“L’essentiel, sans compromis”</p>
            <p>Commence ton aventure en toute simplicité.
                Un abonnement simple et accessible, parfait pour profiter de l’expérience dès aujourd’hui</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front card-bg-subvip">
            <p className="title rounded-2xl">Légende !</p>
          </div>
          <div className="flip-card-back">
            <p className="title italic underline">“Entrez dans la légende”</p>
            <p>Un univers exclusif réservé aux plus audacieux.
                Bénéficie d’avantages VIP, d’expériences uniques et de surprises qui marqueront ton parcours.</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 190px;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1rem;
    font-weight: 900;
    text-align: center;
    margin: 0;
    background-color:#e3dbc8;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid #e3dbc8;
    border-radius: 1rem;
  }

  .flip-card-front {
    color: black;
  }

  .flip-card-back {
    background-color:#e3dbc8;
    color: black;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }`;

export default Card;
