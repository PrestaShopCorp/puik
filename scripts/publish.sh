#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/puik
npm publish
cd -

echo "✅ Publish completed" 