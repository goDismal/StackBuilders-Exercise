# "PICO Y PLACA" PREDICTOR

This web app was developed using **React** and **Vite** to predict whether a vehicle can drive on a specific date and time, according to the "Pico y Placa" rules in Quito.

## Description:

This app uses 3 fields:
- License plate number (e.g. PBX-1234)
- Date (DD-MM-YYYY)
- Hour (HH:MM on 24h format)

Based on the last digit of the license plate, the day and hour, this system evaluates if the vehicle is allowed to circulate or not.

## Rules for "Pico y Placa"

- **Monday:** License plate ending in 1-2
- **Tuesday:** License plate ending in 1-2
- **Wednesday:** License plate ending in 1-2
- **Thursday:** License plate ending in 1-2
- **Friday:** License plate ending in 1-2

Numbers listed before can´t circulate on this restricted hours:
- **Morning:** 6:00 - 9:30
- **Morning:** 16:00 - 21:00

There is no restriction for saturday and sunday.

## What am I using?

This project uses:
- React
- Vite
- TailwindCSS
- JavaScript

## Install and execute

Once you´ve cloned the repo, use the following commands
- cd pico-placa-predictor
- npm install
- npm run dev

To install Tailwind, use the following guide:
https://tailwindcss.com/docs/installation/using-vite
