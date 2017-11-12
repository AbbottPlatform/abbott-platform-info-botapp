#!/bin/bash

# Authenticate with the Google Services
codeship_google authenticate

cd /deploy/

rm -f Dockerfile

sed -i -e 's/'"%NLP_APIAI_TOKEN%"'/'"$NLP_APIAI_TOKEN"'/g' app.yaml

# deploy the application
gcloud app deploy --project ciandt-cognitive-sandbox --version=beta-ci-codeship --no-stop-previous-version --quiet