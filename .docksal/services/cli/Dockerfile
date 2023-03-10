# Use a stock Docksal image as the base
FROM docksal/cli:php8.1-3.2

# nvm/node/npm are only available in the docker user context
USER docker

# Install additional global npm dependencies
RUN set -e; \
	# Initialize the user environment (this loads nvm)
	. $HOME/.profile; \
	# Install the necessary nodejs version
	nvm install 18.11.0; \
	nvm alias default 18.11.0; \
	# Install packages
	npm install -g nodemon;

# Always switch back to root in the end
USER root
