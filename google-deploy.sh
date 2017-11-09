#!/bin/bash

# Authenticate with the Google Services
codeship_google authenticate

# switch to the directory containing your app.yml (or similar) configuration file
# note that your repository is mounted as a volume to the /deploy directory
cd /deploy/

# deploy the application
gcloud app deploy --project ciandt-cognitive-sandbox --version=beta-ci-travis --no-stop-previous-version