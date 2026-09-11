#!/bin/bash

echo "building files ..."

echo "building linux ..."
GOOS=linux GOARCH=386 go build -o novax-linux86 compiler.go
GOOS=linux GOARCH=amd64 go build -o novax-linux64 compiler.go

echo "building windows ..."
GOOS=windows GOARCH=386 go build -o novax-win86.exe compiler.go
GOOS=windows GOARCH=amd64 go build -o novax-win64.exe compiler.go

echo "building darwin ..."
GOOS=darwin GOARCH=arm64 go build -o novax-darwin-arm64 compiler.go
GOOS=darwin GOARCH=amd64 go build -o novax-darwin-amd64 compiler.go

echo "builded successfully !"

echo "remiving ..."
git rm novax-linux86
git rm novax-linux64
git rm novax-win32.exe
git rm novax-win64.exe
git rm novax-darwin-amd64

echo "pushing canges ..."
git add .
git pull origin master
git commit -m "Updating"
git push -u origin master
