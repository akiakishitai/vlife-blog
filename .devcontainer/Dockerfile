FROM debian:buster-slim as builder
WORKDIR /work

RUN apt update && apt install -y --no-install-recommends \
  locales

# locale generate
RUN sed -i \
  -e 's/# \(en_US.UTF-8 UTF-8\)/\1/' \
  -e 's/# \(ja_JP.UTF-8 UTF-8\)/\1/' \
  /etc/locale.gen \
  && locale-gen

# Copy dotfiles
COPY .devcontainer/dotfiles dotfiles/
# replace submodule .git
RUN rm -f dotfiles/.git
COPY .git/modules/.devcontainer/dotfiles dotfiles/.git/

# ----------
FROM node:12-buster-slim
WORKDIR /opt

ARG USERNAME=node
ARG WORKSPACE=/workspaces
ARG PROJECT=project
ARG NOTES_ROOT=${WORKSPACE}/notes

ENV LANG=C.UTF-8 TZ=Asia/Tokyo DEBIAN_FRONTEND=noninteractive HOME=/home/$USERNAME

# require library
RUN apt update && apt install -y --no-install-recommends \
  apt-utils git git-lfs openssh-client curl ca-certificates \
  gnupg fzf \
  # register github.com host key
  && ssh-keyscan -H github.com >> /etc/ssh/ssh_known_hosts \
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
  # Clean up
  && apt autoremove -y \
  && apt clean -y \
  && rm -rf /var/lib/apt/lists/*

# locale
COPY --from=builder /usr/lib/locale/locale-archive /usr/lib/locale/locale-archive
# dotfiles
COPY --from=builder --chown=node:node /work/dotfiles ${HOME}/dotfiles/

# Fix permissions from Windos 755
RUN chmod 700 ${HOME}/dotfiles \
  && chmod a=rX,u+w ${HOME}/dotfiles/* \
  && chmod u+x ${HOME}/dotfiles/install \
  && chmod -R a=rX,u+w ${HOME}/dotfiles/config \
  && chmod -R a=rX,u+w ${HOME}/dotfiles/gitconf \
  # rewrite core.worktree in .git/config
  && sed -i -r "s@(\s+worktree = ).+@\1${HOME}/dotfiles@g" ${HOME}/dotfiles/.git/config \
  # install dotfiles
  && runuser -l $USERNAME -c "${HOME}/dotfiles/install";
