#!/bin/bash

export CLOUDSDK_CORE_DISABLE_PROMPTS=1
# Google Cloud SDK is pinned for build reliability. Bump if the SDK complains about deprecation.
SDK_FILENAME=google-cloud-sdk-$GCLOUD_SDK_VERSION-linux-x86_64.tar.gz
curl -O -J https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/${SDK_FILENAME}
tar -zxf ${SDK_FILENAME} --directory $HOME
export PATH=$HOME/google-cloud-sdk/bin:$PATH
# Install Google App Engine SDK
# Install app & dev dependencies, test, deploy, test deployment (--quiet --verbosity=error )
echo $GOOGLE_CLIENT_SECRET > client-secret.json
gcloud auth activate-service-account --key-file client-secret.json
sed -i -e 's/'"%NLP_APIAI_TOKEN%"'/'"$NLP_APIAI_TOKEN"'/g' app.yaml
gcloud app deploy --project $GOOGLE_PROJECT_ID --version=ci-shippable --no-stop-previous-version  --quiet
