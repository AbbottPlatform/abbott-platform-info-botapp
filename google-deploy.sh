#!/bin/bash

# Authenticate with the Google Services
codeship_google authenticate

cd /deploy/

# deploy the application
gcloud app deploy --project ciandt-cognitive-sandbox --version=beta-ci-travis --no-stop-previous-version --quiet