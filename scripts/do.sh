#!/bin/bash -e
# shellcheck disable=SC2120

serve() {
    $1
}

serve-ui() {
    cd ui
    yarn install --frozen-lockfile
    yarn start
}

serve-api() {
  cd api
  npm ci
  npm run dev
}

serve-all() {
    (trap 'kill 0' SIGINT; serve-api & serve-ui & wait)
}

# --------------------------------------------------
# Testing
# --------------------------------------------------

test() {
    set +x
    # shellcheck source=../config/test.env
    source config/test.env
    set -x
    $1
}

test-ui() {
    cd ui
    yarn install --frozen-lockfile
    yarn test
}

test-api() {
    cd api
    npm ci
    npm run test
}

$1 "$1-$2"
