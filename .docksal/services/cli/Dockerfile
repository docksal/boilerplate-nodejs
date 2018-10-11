# Use a stock Docksal image as the base
FROM docksal/cli:2.5-php7.1

# nvm/node/npm are only available in the docker user context
USER docker

# Install additional global npm dependencies
RUN set -e; \
	# Initialize the user environment (this loads nvm)
	. $HOME/.profile; \
	# Install the necessary nodejs version
	nvm install 10.12.0; \
	nvm alias default 10.12.0; \
	# Install packages
	npm install -g nodemon;

# Always switch back to root in the end
USER root
