import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReactPlayer from 'react-player';

interface VideoPopUpProps {
  urlVideo?: string;
}

const VideoPopUp: React.FC<VideoPopUpProps> = ({ urlVideo }) => {
  const isPopUpOpen = useSelector((state: RootState) => state.popUp.isOpen);

  if (!isPopUpOpen) {
    return null;
  }

  return (
    <>
      {urlVideo && (
          <ReactPlayer url={urlVideo} width="100%" height="100%" controls />
        )}
    </>
  );
};

export default VideoPopUp;
