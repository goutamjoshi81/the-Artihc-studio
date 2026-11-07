#!/usr/bin/env bash
set -e

# ==============================================================================
# The Artihc Studio — Developer Setup & Identity Script
# Usage:
#   bash scripts/setup-dev.sh <dev_number: 1|2> "<dev_name>" "<dev_email>"
# Example:
#   bash scripts/setup-dev.sh 1 "Goutam Joshi" "goutam@example.com"
# ==============================================================================

DEV_NUM="$1"
DEV_NAME="$2"
DEV_EMAIL="$3"

if [ -z "$DEV_NUM" ] || [ -z "$DEV_NAME" ] || [ -z "$DEV_EMAIL" ]; then
  echo "Usage: bash scripts/setup-dev.sh <1|2> \"<Full Name>\" \"<Email>\""
  echo "Example: bash scripts/setup-dev.sh 1 \"Goutam Joshi\" \"goutam@example.com\""
  exit 1
fi

echo "Configuring local Git identity for Developer $DEV_NUM ($DEV_NAME <$DEV_EMAIL>)..."
git config user.name "$DEV_NAME"
git config user.email "$DEV_EMAIL"

echo "Current local Git configuration:"
echo "  user.name  : $(git config user.name)"
echo "  user.email : $(git config user.email)"

DEFAULT_BRANCH="dev${DEV_NUM}/initial-setup"

echo ""
echo "Recommended next steps for Developer $DEV_NUM:"
echo "1. Create and switch to your feature branch:"
echo "   git checkout -b dev${DEV_NUM}/<feature-name>"
echo ""
echo "2. If working concurrently on the same machine, use Git worktrees:"
echo "   git worktree add ../tas-dev${DEV_NUM} dev${DEV_NUM}/<feature-name>"
echo ""
echo "Setup complete! Antigravity is connected and configured for seamless collaboration."

