import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Button } from '../../../layout/Button';
import { Dialog } from '../../../layout/Dialog';
import { restart } from '../../state/actions';
import './GameOverMenu.css';

const GameOverMenu = () => {
  const { state, dispatch } = useGameState();

  const onPlayAgain = () => {
    dispatch(restart());
  };

  return (
    <Dialog>
      <div className="game-over-menu">
        <h2>Game Over</h2>
        <p>
          High Score
          <br />
          <span className="game-over-menu__score">{state.currentScore}</span>
        </p>
        <Button onClick={onPlayAgain}>Play Again</Button>
        <Button onClick={console.log}>Quit</Button>
      </div>
    </Dialog>
  );
};

export { GameOverMenu };
