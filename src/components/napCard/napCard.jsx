import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import './napCard.scss';

export default function NapCard(napId) {
  const nap = useStore((state) => state.napSlice.all.find((u) => u.id === napId.napId));

  const { fetchNapById } = useStore((state) => state.napSlice);

  useEffect(() => {
    if (!nap) {
      fetchNapById(napId);
    }
  }, [napId, nap, fetchNapById]);

  if (!nap) return <div>Loading...</div>;

  const base64String = nap.imageFile.data;
  const { contentType } = nap.imageFile;
  const imageSrc = `data:${contentType};base64,${base64String}`;
  return (
    <div className="napCard">
      <div className="napPicture">
        <img src={imageSrc} alt="nap" className="picture" />
      </div>
      <div className="napInfo">
        {nap.generatedPoem && (
          <div className="generatedPoem">
            <p>{nap.generatedPoem}</p>
            <p className="napBot">nap summarized by napBot</p>
          </div>
        )}

        <div className="napData">

          <p className="username">📸: {nap.username}</p>
          <p className="replies">{nap.replies.length} replies</p>
        </div>
      </div>
    </div>
  );
}
