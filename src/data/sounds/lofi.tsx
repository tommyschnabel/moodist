import { FaDrum, FaMusic } from 'react-icons/fa/index';
import { BsVinyl } from 'react-icons/bs/index';
import { GiPianoKeys } from 'react-icons/gi/index';

import type { Category } from '../types';

import { getAssetPath } from '@/helpers/path';

// CC0 loops from freesound.org (holizna, f-r-a-g-i-l-e, DefySolipsis).
// All melodic/drum loops are 95 BPM so they can be layered.
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
      icon: <FaDrum />,
      id: 'lofi-dusty-drums',
      label: 'Dusty Drums',
      src: getAssetPath('/sounds/lofi/dusty-drums.wav'),
    },
    {
      icon: <FaDrum />,
      id: 'lofi-boom-bap',
      label: 'Boom Bap',
      src: getAssetPath('/sounds/lofi/boom-bap.wav'),
    },
    {
      icon: <FaDrum />,
      id: 'lofi-kick-snare-vinyl',
      label: 'Kick & Snare',
      src: getAssetPath('/sounds/lofi/kick-snare-vinyl.wav'),
    },
    {
      icon: <BsVinyl />,
      id: 'lofi-vinyl-static',
      label: 'Vinyl Static',
      src: getAssetPath('/sounds/lofi/vinyl-static.wav'),
    },
    {
      icon: <BsVinyl />,
      id: 'lofi-crackle',
      label: 'Crackle',
      src: getAssetPath('/sounds/lofi/crackle.wav'),
    },
  ],
  title: 'Lofi',
};
