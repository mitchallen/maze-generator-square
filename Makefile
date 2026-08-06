.PHONY: help install build test coverage pack-check clean clean-all

.DEFAULT_GOAL := help

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-14s %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

build: ## Build to dist/
	npm run build

test: ## Run tests
	npm test

coverage: ## Run tests with coverage
	npm run coverage

pack-check: ## Fail if the packed tarball would ship unexpected files
	node scripts/check-pack.js

clean: ## Remove dist/
	rm -rf dist

clean-all: clean ## Remove build output and node_modules/
	rm -rf node_modules coverage dist
