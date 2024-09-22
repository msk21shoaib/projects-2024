import React, { useEffect, useState } from 'react';
import styling from "../Styles/styles.css";
import audioSrc from '/public/music.mp3';
import audiogoSrc from '/public/gameover.mp3';

const Game = () => {
    const [score, setScore] = useState(0);
    const [cross, setCross] = useState(true);

    useEffect(() => {
        const audio = new Audio(audioSrc);
        const audiogo = new Audio(audiogoSrc);

        const handleKeyDown = (e) => {
            const dino = document.querySelector('.dino');
            let dinoX;

            if (e.keyCode === 38) {
                dino.classList.add('animateDino');
                setTimeout(() => {
                    dino.classList.remove('animateDino');
                }, 2000);
            }
            if (e.keyCode === 39) {
                dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
                dino.style.left = dinoX + 165 + 'px';
            }
            if (e.keyCode === 37) {
                dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
                dino.style.left = (dinoX - 165) + 'px';
            }
        };

        const gameLoop = setInterval(() => {
            const dino = document.querySelector('.dino');
            const gameOver = document.querySelector('.gameOver');
            const obstacle = document.querySelector('.obstacle');

            const dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            const dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

            const ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
            const oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

            const offsetX = Math.abs(dx - ox);
            const offsetY = Math.abs(dy - oy);

            if (offsetX < 73 && offsetY < 52) {
                gameOver.innerHTML = "Game Over - Reload to Play Again";
                obstacle.classList.remove('obstacleAni');
                audiogo.play();
                setTimeout(() => {
                    audiogo.pause();
                    audio.pause();
                }, 1000);
            } else if (offsetX < 145 && cross) {
                setScore((prevScore) => prevScore + 1);
                setCross(false);
                setTimeout(() => {
                    setCross(true);
                }, 1000);
                setTimeout(() => {
                    const aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                    const newDur = aniDur - 0.1;
                    obstacle.style.animationDuration = newDur + 's';
                }, 500);
            }
        }, 10);

        setTimeout(() => {
            audio.play();
        }, 2000);

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(gameLoop);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [cross]);

    useEffect(() => {
        document.querySelector('#scoreCont').innerHTML = `Your Score: ${score}`;
    }, [score]);

    return (
        <div className="gameContainer">
            <div className="gameOver">Welcome to iDragon Adventures</div>
            {/* <div className="gameOver">Welcome to iDragon - Created by Harry</div> */}
            <div className="dino"></div>
            <div id="scoreCont">Your Score: {score}</div>
            <div className="obstacle obstacleAni"></div>
        </div>
    );
};

export default Game;
