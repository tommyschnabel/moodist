import { FaDrum, FaMusic } from 'react-icons/fa/index';
import { GiPianoKeys } from 'react-icons/gi/index';

import type { Category } from '../types';

import { getAssetPath } from '@/helpers/path';

// CC0 loops by holizna on freesound.org; credits in README.md.
// All loops are 90 BPM and a whole number of bars so they can be layered.
export const lofi: Category = {
  icon: <FaMusic />,
  id: 'lofi',
  sounds: [
    {
      icon: <FaDrum />,
      id: 'lofi-boom-bap-drums',
      label: 'Boom Bap Drums',
      src: getAssetPath('/sounds/lofi/boom-bap-drums.wav'),
    },
    {
      icon: <FaDrum />,
      id: 'lofi-percussion',
      label: 'Percussion',
      src: getAssetPath('/sounds/lofi/percussion.wav'),
    },
    {
      icon: <GiPianoKeys />,
      id: 'lofi-organ',
      label: 'Organ',
      src: getAssetPath('/sounds/lofi/organ.wav'),
    },
    {
      icon: <FaMusic />,
      id: 'lofi-melody',
      label: 'Melody',
      src: getAssetPath('/sounds/lofi/melody.wav'),
    },
    {
      icon: <FaMusic />,
      id: 'lofi-siberian',
      label: 'Siberian',
      src: getAssetPath('/sounds/lofi/siberian.wav'),
    },
    {
      icon: <FaMusic />,
      id: 'lofi-spacey',
      label: 'Spacey',
      src: getAssetPath('/sounds/lofi/spacey.wav'),
    },
  ],
  title: 'Lofi',
};
