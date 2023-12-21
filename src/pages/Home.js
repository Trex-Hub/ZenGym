import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  // Wrapping The setExercise to Fix This Error
  // Error = `Line 27:6:  React Hook useEffect has a missing dependency: "setExercises". Either include it or remove the dependency array. If "setExercises" changes too often, find the parent component that defines it and wrap that definition in useCallback`
  const memoizedSetExercises = useCallback((newExercises) => {
    setExercises(newExercises);
  }, []); 

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={memoizedSetExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={memoizedSetExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
