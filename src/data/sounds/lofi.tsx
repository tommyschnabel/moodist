import { FaDrum, FaMusic } from 'react-icons/fa/index';
import { GiPianoKeys } from 'react-icons/gi/index';

import type { Category } from '../types';

import { getAssetPath } from '@/helpers/path';

// CC0 loops from freesound.org (holizna, Dpath).
// All loops are 95 BPM and a whole number of bars so they can be layered.
export const lofi: Category = {
  icon: <FaMusic />,
  id: 'lofi',
  sounds: [
    {
      icon: <GiPianoKeys />,
      id: 'lofi-e-piano',
      label: 'E-Piano',
      src: getAssetPath('/sounds/lofi/e-piano.wav'),
    },
    {
      icon: <GiPianoKeys />,
      id: 'lofi-piano',
      label: 'Piano',
      src: getAssetPath('/sounds/lofi/piano.wav'),
    },
    {
      icon: <FaMusic />,
      id: 'lofi-jazz-organ',
      label: 'Jazz Organ',
      src: getAssetPath('/sounds/lofi/jazz-organ.wav'),
    },
    {
      icon: <FaDrum />,
      id: 'lofi-dusty-drums',
      label: 'Dusty Drums',
      src: getAssetPath('/sounds/lofi/dusty-drums.wav'),
    },
  ],
  title: 'Lofi',
};
