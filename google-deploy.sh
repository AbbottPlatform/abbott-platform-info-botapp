#!/bin/bash

# Authenticate with the Google Services
codeship_google authenticate

cd /deploy/

rm -f Dockerfile

curl -SLO "https://s3.amazonaws.com/codeship-jet-releases/1.19.3/jet-linux_amd64_1.19.3.tar.gz"
tar -xaC /usr/local/bin -f jet-linux_amd64_1.19.3.tar.gz
chmod +x /usr/local/bin/jet

/usr/local/bin/jet --help

# deploy the application
gcloud app deploy --project ciandt-cognitive-sandbox --version=beta-ci-codeship --no-stop-previous-version --quiet