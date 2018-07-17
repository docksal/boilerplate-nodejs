# Use a stock Docksal image as the base
FROM docksal/cli:2.3-php7.1

# nvm/node/npm are only available in the docker user context
USER docker

# Install additional global npm dependencies
RUN set -e; \
	# Initialize user environment (this loads nvm)
	. $HOME/.profile; \
	# Install packages
	npm install -g nodemon;

# Always switch back to root in the end
USER root
