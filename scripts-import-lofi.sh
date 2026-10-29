#!/usr/bin/env bash
# Convert Freesound downloads (named <id>__<user>__<title>.wav) into public/sounds/lofi/*.wav (16-bit, gapless loops).
# Usage: ./scripts-import-lofi.sh ~/Downloads/lofi
set -euo pipefail
src=${1:?download dir}
out="$(dirname "$0")/public/sounds/lofi"
mkdir -p "$out"
declare -a map=(
  629139:boom-bap-drums
  621184:percussion
  629163:organ
  629162:melody
  852232:siberian
  629161:spacey
)
for m in "${map[@]}"; do
  id=${m%%:*} name=${m#*:}
  f=$(find "$src" -name "${id}__*" -print -quit)
  if [[ -z $f ]]; then echo "missing $id ($name)"; continue; fi
  ffmpeg -loglevel error -y -i "$f" -ac 2 -ar 44100 -c:a pcm_s16le "$out/$name.wav"
  printf '%-18s %ss\n' "$name" "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$out/$name.wav")"
done
