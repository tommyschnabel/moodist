#!/usr/bin/env bash
# Convert Freesound downloads (named <id>__<user>__<title>.wav) into public/sounds/lofi/*.wav (16-bit, gapless loops).
# Usage: ./scripts-import-lofi.sh ~/Downloads/lofi
set -euo pipefail
src=${1:?download dir}
out="$(dirname "$0")/public/sounds/lofi"
mkdir -p "$out"
declare -a map=(
  629178:e-piano
  629138:dusty-drums
  629142:boom-bap
  629141:kick-snare-vinyl
  520147:vinyl-static
  531438:crackle
)
for m in "${map[@]}"; do
  id=${m%%:*} name=${m#*:}
  f=$(find "$src" -name "${id}__*" -print -quit)
  if [[ -z $f ]]; then echo "missing $id ($name)"; continue; fi
  trim=()
  # Source is ~5.4 bars and would drift against the others; cut to 4 bars @ 95 BPM.
  [[ $name == boom-bap ]] && trim=(-t 10.105263)
  ffmpeg -loglevel error -y -i "$f" "${trim[@]}" -ac 2 -ar 44100 -c:a pcm_s16le "$out/$name.wav"
  printf '%-18s %ss\n' "$name" "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$out/$name.wav")"
done
