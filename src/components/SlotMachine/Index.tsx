import React, { useState, useRef, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SlotMachineContainer, SlotMachineFrame, SlotMachineVideos, Video, Lever, ButtonContainer, Button, WinnerButton } from './styles';

const SlotMachine: React.FC = () => {
  const [videosRunning, setVideosRunning] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  const leverRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (videosRunning) {
      const timeout = setTimeout(() => {
        const newResults = [...results];
        if (results.length < 3) {
          const randomNumber = Math.floor(Math.random() * 10);
          newResults.push(randomNumber);
          setResults(newResults);
        } else {
          clearTimeout(timeout);
          checkWinCondition(newResults);
        }
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [videosRunning, results]);

  const handleStart = () => {
    if (!videosRunning) {
      setVideosRunning(true);
      setResults([]);
      if (leverRef.current) {
        leverRef.current.classList.add('active');
        leverRef.current.style.pointerEvents = 'none';
      }
    }
  };

  const handleStopVideo = (index: number) => {
    if (videosRunning && index === results.length - 1) {
      const newResults = [...results];
      const randomNumber = Math.floor(Math.random() * 10);
      newResults[index] = randomNumber;
      setResults(newResults);
      if (index === 2) {
        setVideosRunning(false);
        checkWinCondition(newResults);
      }
    }
  };

  const handleStopAllVideos = () => {
    if (videosRunning) {
      setVideosRunning(false);
      setResults([]);
    }
  };

  const checkWinCondition = (results: number[]) => {
    const allEqual = results.every((result) => result === results[0]);
    if (allEqual) {
      toast.success('Você venceu!');
    } else {
      toast.error('Tente outra vez, não desista!');
    }
  };

  return (
    <SlotMachineContainer>
      <SlotMachineFrame>
        <SlotMachineVideos>
          {[...results, '', ''].map((result, index) => (
            <Video key={index}>{result}</Video>
          ))}
        </SlotMachineVideos>
      </SlotMachineFrame>
      <Lever onClick={handleStart} ref={leverRef}></Lever>
      <ButtonContainer>
        {[0, 1, 2].map((index) => (
          <Button
            key={index}
            onClick={() => handleStopVideo(index)}
            style={{ backgroundColor: '#ffea00' }}
            disabled={!videosRunning || index !== results.length - 1}
          />
        ))}
        <WinnerButton onClick={handleStopAllVideos} />
      </ButtonContainer>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} closeOnClick={true} pauseOnHover={true} />
    </SlotMachineContainer>
  );
};

export default SlotMachine;
