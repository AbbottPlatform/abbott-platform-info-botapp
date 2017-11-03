const platforms = {};

platforms.abbott = {};

platforms.gactions = {"projectId": process.env.PLATFORM_GACTIONS_PROJECT_ID};

platforms.gchats = {"verify_token": process.env.PLATFORM_GCHATS_VERIFY_TOKEN,"chats_regex": process.env.PLATFORM_GCHATS_REGEX};

platforms.slack = {"clientId": process.env.PLATFORM_SLACK_CLIENT_ID,"clientSecret": process.env.PLATFORM_SLACK_CLIENT_SECRET,"verify_token": process.env.PLATFORM_SLACK_VERIFY_TOKEN};

platforms.facebook = {"access_token": process.env.PLATFORM_FACEBOOK_ACCESS_TOKEN,"verify_token": process.env.PLATFORM_FACEBOOK_VERIFY_TOKEN,"app_secret": process.env.PLATFORM_FACEBOOK_APP_SECRET,"validate_requests":true};

module.exports = platforms;