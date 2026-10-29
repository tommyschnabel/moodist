#!/usr/bin/env bash
# Convert Freesound downloads (named <id>__<user>__<title>.wav) into public/sounds/lofi/*.wav (16-bit, gapless loops).
# Usage: ./scripts-import-lofi.sh ~/Downloads/lofi
set -euo pipefail
src=${1:?download dir}
out="$(dirname "$0")/public/sounds/lofi"
mkdir -p "$out"
declare -a map=(
  629178:e-piano
  563706:piano
  629154:jazz-organ
  629138:dusty-drums
)
for m in "${map[@]}"; do
  id=${m%%:*} name=${m#*:}
  f=$(find "$src" -name "${id}__*" -print -quit)
  if [[ -z $f ]]; then echo "missing $id ($name)"; continue; fi
  trim=()
  # mp3 source carries ~44ms of encoder padding; cut to exactly 4 bars @ 95 BPM.
  [[ $name == piano ]] && trim=(-t 10.105263)
  ffmpeg -loglevel error -y -i "$f" "${trim[@]}" -ac 2 -ar 44100 -c:a pcm_s16le "$out/$name.wav"
  printf '%-18s %ss\n' "$name" "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$out/$name.wav")"
done
