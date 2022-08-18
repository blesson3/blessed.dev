#!/usr/bin/env bash

# replace the public/version.txt file with the current git sha
versionFile="$(git rev-parse --show-toplevel)/public/version.txt"
gitSha="$(git log --format=oneline|head -n 1|cut -d ' ' -f 1)"
echo "$gitSha" > "$versionFile"
