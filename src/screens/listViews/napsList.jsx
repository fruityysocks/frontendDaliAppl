import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';
import NapCard from '../../components/napCard/napCard';
import './listStyle.scss';

export default function NapsList() {
  const naps = useStore((state) => state.napSlice.all);
  const fetchNaps = useStore((state) => state.napSlice.fetchNaps);

  useEffect(() => {
    fetchNaps();
  }, [fetchNaps]);

  return (
    <div className="napsList">
      {naps.length === 0 ? (
        <p>loading...</p>
      ) : (naps.map((nap) => (
        <Link to={`${nap.id}`} key={nap.id}>
          <NapCard key={nap.id} napId={nap.id} />
        </Link>
      )))}
    </div>
  );
}
