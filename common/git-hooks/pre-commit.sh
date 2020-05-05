#!/bin/sh
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.

ESLINT=`common/temp/node_modules/.bin/eslint --cache`
PRETTIER=common/temp/node_modules/.bin/pretty-quick

echo --------------------------------------------
echo Starting Git hook: pre-commit

if [ -f $ESLINT ]; then
  echo Invoking $ESLINT
  $ESLINT
else
  echo ESLINT not installed: $ESLINT
fi

if [ -f $PRETTIER ]; then
  echo Invoking $PRETTIER
  $PRETTIER
else
  echo PRETTIER not installed: $PRETTIER
fi

echo Finished Git hook: pre-commit
echo --------------------------------------------