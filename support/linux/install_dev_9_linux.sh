#!/bin/sh
set -eux

# Install Rust and musl libc target
curl -sSf https://sh.rustup.rs \
  | env -u CARGO_HOME sh -s -- -y --default-toolchain stable
. $HOME/.cargo/env
env -u CARGO_HOME rustup target add x86_64-unknown-linux-musl
env -u CARGO_HOME cargo install --force protobuf
rustc --version
cargo --version

if command -v useradd > /dev/null; then
  sudo -E useradd --system --no-create-home hab || true
else
  sudo -E adduser --system hab || true
fi
if command -v groupadd > /dev/null; then
  sudo -E groupadd --system hab || true
else
  sudo -E addgroup --system hab || true
fi

sudo -E sh /tmp/install.sh
sudo -E hab install core/busybox-static core/hab-studio
sudo -E rm -rf /tmp/install.sh
