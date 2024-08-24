#!/bin/bash

# Update package index
sudo apt-get update

# Install Node.js and npm for the front-end
sudo apt-get install -y nodejs npm

# Navigate to the front-end directory
cd ./financefrontend

# Install front-end dependencies
npm install

# Navigate to the back-end directory
cd ../financetracker

# Install Python and pip if not already installed
sudo apt-get install -y python3 python3-pip

# Install back-end dependencies
pip3 install -r requirements.txt

