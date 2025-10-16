#!/bin/bash
cd /home/kavia/workspace/code-generation/vivid-marketing-solutions-176160-176169/marketing_website_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

