#!/bin/bash
cd /home/kavia/workspace/code-generation/faq-accordion-web-application-3623-3632/faq_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

