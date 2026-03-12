#!/bin/bash
set -e
# Convenience deploy script for Hetzner VPS
# Usage: run on VPS after cloning the repo

echo "Installing docker and docker-compose if missing..."
if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
  sudo usermod -aG docker $USER
fi
if ! command -v docker-compose >/dev/null 2>&1; then
  sudo apt-get update && sudo apt-get install -y docker-compose
fi

echo "Building and starting containers..."
docker-compose up -d --build

echo "Deployed. Visit http://$(hostname -I | awk '{print $1}'):3000 or configure your domain to point to this server." 
