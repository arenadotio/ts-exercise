.PHONY: all $(MAKECMDGOALS)
SHELL := /bin/bash -e -o pipefail

# default env vars
env ?= local

serve:
	./scripts/do.sh serve all

serve-api:
	./scripts/do.sh serve api

serve-ui:
	./scripts/do.sh serve ui

test: test-ui test-api 

test-api:
	./scripts/do.sh test api

test-ui:
	./scripts/do.sh test ui
