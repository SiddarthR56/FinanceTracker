#!/bin/bash

# Navigate to the front-end directory
cd ./financefrontend

# Run front-end application
npm start &

# Navigate to the back-end directory
cd ../financetracker


# Run back-end application
python3 manage.py runserver &

