FROM debian:buster-slim as builder
WORKDIR /work

RUN apt update && apt install -y --no-install-recommends \
  git curl ca-certificates locales

# locale generate
RUN sed -i \
  -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' \
  -e 's/# ja_JP.UTF-8 UTF-8/ja_JP.UTF-8 UTF-8/' \
  /etc/locale.gen \
  && locale-gen

# Copy dotfiles
COPY .devcontainer/dotfiles dotfiles/
# replace submodule .git
RUN rm -f dotfiles/.git
COPY .git/modules/.devcontainer/dotfiles dotfiles/.git/

# ----------
FROM node:12-buster-slim

ARG USERNAME=node
ARG WORKSPACE=/workspaces
ARG PROJECT=project
ARG NOTES_ROOT=${WORKSPACE}/notes

ENV LANG=C.UTF-8 TZ=Asia/Tokyo DEBIAN_FRONTEND=noninteractive HOME=/home/$USERNAME

# require library
RUN apt update && apt install -y --no-install-recommends \
  apt-utils git openssh-client curl ca-certificates \
  gnupg fzf \
  # fish shell
  && echo 'deb http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_10/ /' \
  > /etc/apt/sources.list.d/shells:fish:release:3.list \
  && curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_10/Release.key \
  | apt-key add - \
  && apt install -y --no-install-recommends fish \
  # vscode extensions
  && runuser -l $USERNAME -c "mkdir -p /home/$USERNAME/.vscode-server/extensions" \
  # mount project
  && mkdir -p $WORKSPACE/$PROJECT \
  && chown -R node $WORKSPACE/$PROJECT \
  # vsnotes
  && mkdir -p $NOTES_ROOT \
  && chown node ${NOTES_ROOT} \
  # register github.com host key
  && ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts \
  # Clean up
  && apt autoremove -y \
  && apt clean -y \
  && rm -rf /var/lib/apt/lists/*

# locale
COPY --from=builder /usr/lib/locale/locale-archive /usr/lib/locale/locale-archive
# dotfiles
COPY --from=builder --chown=node:node /work/dotfiles ${HOME}/dotfiles/

# rewrite core.worktree in .git/config
RUN sed -i -r "s@(\s+worktree = ).+@\1${HOME}/dotfiles@g" ${HOME}/dotfiles/.git/config \
  # install dotfiles
  && runuser -l $USERNAME -c "${HOME}/dotfiles/install";
